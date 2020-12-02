---
title: "PagerDuty Agent Troubleshooting Guide"
slug: "pagerduty-agent-troubleshooting-guide"
hidden: false
createdAt: "2017-10-31T22:26:42.463Z"
updatedAt: "2020-10-30T16:52:47.698Z"
---
PagerDuty Agent is an open-source utility for integrating standalone / on-premise monitoring tools with PagerDuty.
[block:api-header]
{
  "title": "First Steps"
}
[/block]
If you have trouble sending events to PagerDuty using the agent, run the following checks:

* **[Verify that the `pdagent` service is running.](https://www.pagerduty.com/docs/guides/agent-install-guide#VerifyAgentRunning)** If the service is not running, you can start it with the command `systemctl start pdagent` (on systemd-based systems) or `sudo service pdagent start` (on SysV init-based systems). Any events that were enqueued while the service was stopped will be sent when the service starts.
* **Check the service integration key:** make sure that the key is for the correct service and that it has been entered correctly.
* **Send a test event** using `pd-send` as shown in [Sending an Event to PagerDuty](https://www.pagerduty.com/docs/guides/agent-install-guide#pd-send). Remember to replace the key used in the example with your own PagerDuty Service Integration Key.
* **Check the logs** for any errors, including events that couldn't be submitted to the Events API: `/var/log/pdagent/pdagentd.log`


[block:api-header]
{
  "title": "Outqueue Troubleshooting"
}
[/block]
In addition to [using `pd-queue` to manage the queue](https://www.pagerduty.com/docs/guides/agent-install-guide#pd-queue), the agent's outqueue directories will often hold a wealth of information that is useful for troubleshooting. The queue may also be manually cleared or altered by working directly with the files.

Each file in these directories contains the body of a HTTP POST request that will be made to the PagerDuty Events API. You can thus see what your monitoring solutions are submitting to the agent by examining these files. They are given filenames that follow the naming convention:

```
{UNIX timestamp}_{integration key}.txt
```

## The Outqueue Directories

The queue directories, located in `/var/lib/pdagent/outqueue`, include:
[block:parameters]
{
  "data": {
    "h-0": "Directory",
    "h-1": "Role",
    "0-0": "`err`",
    "0-1": "Events for which delivery to the PagerDuty Events API was attempted, but was not successful due to a `400 Invalid Request` response from PagerDuty. Malformed events (i.e. having no integration key) that cannot be submitted will thus be kept here.",
    "1-0": "`suc`",
    "1-1": "Successfully submitted events. If you see an event file cached here, it was sent to PagerDuty. If the event did not trigger an incident in PagerDuty, and you are having difficulty troubleshooting why it did not, contact [PagerDuty Support](mailto:support@pagerduty.com).",
    "2-0": "`tmp`",
    "2-1": "Event files submitted to the agent by external processes, i.e. integration scripts or `pd-send`, will be stored in here.",
    "3-0": "`pdq`",
    "3-1": "The queue of events to be sent; will contain symbolic links to the files in `tmp`."
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Event Expiration and Queue Cleaning",
  "body": "Events are deleted from the outqueue directories at a regular interval, when their age exceeds a predefined length in seconds. The default age threshold is one week old, and the default cleaning interval is three hours. Both the interval and the age threshold are defined in the main [PagerDuty Agent configuration file](https://github.com/PagerDuty/pdagent/blob/master/conf/pdagent.conf), which should be located at path  `/etc/pdagent.conf`:\n\n* `cleanup_interval_secs`: The interval between when the queue is cleaned.\n* `cleanup_threshold_secs`: The age in seconds, beyond which events will be deleted."
}
[/block]
## Manually Purging the Queue

In the event of a long network outage wherein a huge pileup of pending events occurs in the agent, the queue can be cleared out in order to avoid a storm of incidents in PagerDuty when the network connection is restored.

To clear the queue, run the following commands:

```
sudo rm -vf /var/lib/pdagent/outqueue/pdq/*
sudo rm -vf /var/lib/pdagent/outqueue/tmp/*
```
[block:api-header]
{
  "title": "Network Troubleshooting"
}
[/block]
The host that is running PagerDuty Agent should be able to make a HTTPS connection to `events.pagerduty.com`. Thus, if the LAN has no DNS service, or there is no route to the internet, or the local ACL (if any) does not permit connecting to remote hosts across the internet, PagerDuty Agent will not be able to send data to PagerDuty.

First, verify that you can resolve the Events API:

```
dig events.pagerduty.com
```

If you get a `SRVFAIL` or `NXDOMAIN` status response, the issue is with DNS.

Next, test reachability. Our events API hosts should respond to ICMP, so you can use the `ping` program as follows:

```
ping -q -c 3 events.pagerduty.com
```

If you see an indication of packet loss above 0%, or the program doesn't return after about five seconds, there is an issue with your network configuration, i.e. routing.

Next, check to see if you can make a TCP connection to the Events API with netcat:

```
nc -v events.pagerduty.com 443
```

You should see the following message:

```
Connection to events.pagerduty.com port 443 [tcp/https] succeeded!
```

Note, if using BSD Netcat, you can add flags `-G 5 -w 1`. That will make it exit one second after establishing a connection (`-w 1`) and give up and report timeout after five seconds of waiting to establish one (`-G 5`). 

In any case, if the netcat command takes too long to print out any messages, or produces an error message indicating a timeout, connection refusal (etc), check your network's firewall/ACL and refer to [Safelisting IPs](doc:whitelisting-ips).
[block:api-header]
{
  "title": "Testing TLS"
}
[/block]
Of note, PagerDuty Agent comes bundled with its own copy of the public server certificate, which it uses when it connects to validate the connection to the PagerDuty Events API.
[block:callout]
{
  "type": "warning",
  "title": "Supported Protocols and the Server Certificate",
  "body": "PagerDuty as of this writing only supports protocols **TLSv1.2**. Older protocols (i.e. SSLv3) are widely considered to not be secure and thus are not supported. Traffic using older protocols and versions of TLS will be dropped."
}
[/block]
**For the security-conscious:** to get extra certainty, one can check to see if a TLS connection can be established:

```
openssl s_client -host events.pagerduty.com -port 443
```
You should see messages indicating a successful connection / TLS handshake, including the following certificate chain:

```
Certificate chain
 0 s:/OU=GT12858685/OU=See www.rapidssl.com/resources/cps (c)14/OU=Domain Control Validated - RapidSSL(R)/CN=*.pagerduty.com
   i:/C=US/O=GeoTrust Inc./CN=RapidSSL SHA256 CA - G3
 1 s:/C=US/O=GeoTrust Inc./CN=RapidSSL SHA256 CA - G3
   i:/C=US/O=GeoTrust Inc./CN=GeoTrust Global CA
 2 s:/C=US/O=GeoTrust Inc./CN=GeoTrust Global CA
   i:/C=US/O=GeoTrust Inc./CN=GeoTrust Global CA
```

If you get a TLS handshake error, it may be the case that the GeoTrust root CA certificate isn't trusted on your system.

https://www.geotrust.com/resources/root-certificates/

In most distributions of Linux, the  `ca-certificates` utility can be used for managing trusted certificates. 
[block:api-header]
{
  "title": "Proxy Troubleshooting"
}
[/block]
One issue that can be tricky to get past is proxy configuration. If web requests are not going through the proxy, or not going anywhere, do you know whether your system is running the daemon without the proper environment variables set, or if there's an issue with connecting to the proxy server (i.e. LAN restrictions)?

[block:callout]
{
  "type": "info",
  "body": "For instructions on how to set up PagerDuty Agent to use a proxy server, refer to the [PagerDuty Agent installation guide](https://www.pagerduty.com/docs/guides/agent-install-guide#Proxy)."
}
[/block]
## Network Issues Maybe?

Before any of the following, it's a good idea to check that the proxy server can be reached using standard networking tools. If the hostname is **`proxy.local`** and the port is **`8118`**, the commands to do this will be similar to the basic troubleshooting steps in the previous section:

1. **`ping proxy.local`** to see if it can be reached
2.  **`dig proxy.local`** or **`host proxy.local`** to see if the hostname resolves
3. **`nc -v proxy.local 8118`** to check that the port is open and can be connected to
4. Finally, try using `curl` to connect through the proxy to the events API's agent heartbeat endpoint. How clients authenticate through the proxy may vary, and other settings may be needed, so you will need to specify extended proxy options; see the documentation for this under **`man curl`**

```
curl -proxy proxy.local:8118 [additional proxy options] https://api.pagerduty.com/agent/2014-03-14/heartbeat
```

If all goes well, you should receive a response that looks like `{"heartbeat_interval_secs":86400}`

## Environment Variables?

The thread that actually performs the sending of events to PagerDuty is the daemon, and for it to use the proxy requires environment variables. To elucidate, the underlying Python library used to make the HTTPS connection is `urllib2`. Per the [documentation on urllib2.urlopen](https://docs.python.org/2/library/urllib2.html#urllib2.urlopen):

> In addition, if proxy settings are detected (for example, when a `*_proxy` environment variable like **`http_proxy`** is set), [`ProxyHandler`](https://docs.python.org/2/library/urllib2.html#urllib2.ProxyHandler) is default installed and makes sure the requests are handled through the proxy.

Under "Using a Proxy" in the [Agent Install Guide](https://www.pagerduty.com/docs/guides/agent-install-guide/), two ways of configuring the environment variables for the daemon are described: systemd-based versus SysV init-based Linux systems. You can find out which of these your system uses by running `sudo stat /proc/1/exe`, which will show you the executable associated with the PID=1 process.

Once you've made sure that the daemon is configured with the environment variables using the correct method, you will need to make sure the changes are applied, which may vary based on your system. In `systemd` based systems, you will be prompted to run `systemctl daemon-reload` when you restart service `pdagent` after modifying the service configuration, after which the service should be restarted once more for the changes to finally take effect.

## Still Stuck?

As a last resort, failing all other troubleshooting, you can see the actual environment variables that the daemon is running with by adding a logging statement to the agent's component module [`sendevent`](https://github.com/PagerDuty/pdagent/blob/master/pdagent/sendevent.py). On most Linux systems this will be in `/lib/python2.7/site-packages/pdagent/`, and the method to alter is the method **`SendEventTask.send_event`**:

```
def send_event(self, json_event_str, event_id):
    import os; logger.info(str(os.environ)) # add this line
```

After making the change, restart pdagent and try sending a test event using `pd-send`. After that, you'll find a message in the log that that looks like this:

```
2017-05-08 18:29:31,556 INFO    SendEventTask        pdagent.sendevent    {'TERM': 'xterm-256color', 'SHELL': '/bin/bash', 'SHLVL': '2', 'SYSTEMCTL_SKIP_REDIRECT': '', 'PWD': '/', 'LOGNAME': 'pdagent', 'USER': 'pdagent', 'HOME': '/home/pdagent', 'SYSTEMCTL_IGNORE_DEPENDENCIES': '', 'PATH': '/sbin:/usr/sbin:/bin:/usr/bin', 'XDG_SESSION_ID': '1', '_': '/usr/share/pdagent/bin/pdagentd.py'}
```

If the environment variables were set, they would have shown up in the print-out of the `os.environ` dictionary, i.e. **`'http_proxy': 'http://proxy.local:8118'`** and **`'https_proxy': 'https://proxy.local:8118'`**, which (note) are missing in the above line.
[block:api-header]
{
  "title": "pdagent.service not found Error"
}
[/block]
Sometimes on a fresh install of pdagent, you might get the error message `Failed to start pdagent.service: Unit pdagent.service not found.`  This is due to an error during installation where the file `pdagent.service` was not copied to the proper directory. 

In order to fix this you need to copy the `pdagent.service` file into the proper directory.

1. Find the file `pdagent.service` with the command `sudo find / -name pdagent.service`
2. Copy the location of the file
3. Copy the file to the correct directory with `sudo cp <PATH_TO_FILE> /etc/systemd/system`
4. Try booting again with `systemctl start pdagent` or `service pdagent start` depending on if your OS uses `systemctl` or `service`