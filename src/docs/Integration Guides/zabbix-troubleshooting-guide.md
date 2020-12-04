---
title: "Zabbix Troubleshooting Guide"
slug: "zabbix-troubleshooting-guide"
hidden: false
createdAt: "2017-05-17T22:24:11.434Z"
updatedAt: "2018-02-10T01:01:58.371Z"
---
Below are some common issues that you may run into when trying to integrate Zabbix with PagerDuty and steps for troubleshooting those problems. 
- [Potential Issues within the Zabbix Configuration](#section-potential-issues-within-the-zabbix-configuration)
- [Troubleshooting Issues with the Agent-based Integration](#section-troubleshooting-issues-with-the-agent-based-integration)
- [Troubleshooting Issues with the Python-based Integration](#section-troubleshooting-issues-with-the-python-based-integration) 
## Potential Issues within the Zabbix Configuration

Check whether Zabbix has attempted to send an event to PagerDuty by viewing your Zabbix logs. Make sure the PagerDuty action was called, and if there were any errors in doing so.

For Zabbix 2.x: navigate go to **Monitoring → Events**, then click the event timestamp for the problem event. Check the **Message actions** section in the event details.
For Zabbix 3.x: navigate to **Reports → Action Log** to view the Status of the Zabbix event.

##Events are not being sent to the PagerDuty user/action
- Make sure the PagerDuty group in Zabbix has read permissions for the hosts and/or host groups in question. Also confirm that the PagerDuty user is in the PagerDuty group.
- Check that the PagerDuty media type is enabled in **Configuration → Media types**.

##Events appear to be sent to the PagerDuty user/action, but aren't showing up in PagerDuty
- Both the `zabbix-agent` and `zabbix-server` services must be running for Zabbix to send notifications to PagerDuty. The check that these are running use the following commands:

```
service zabbix-agent status
service zabbix-server status
```

- Make sure your Zabbix server can make outbound HTTP/HTTPS connections to events.pagerduty.com on ports 80 and 443. If your environment requires a proxy to be set for outbound HTTP/HTTPS connections, make sure you [set the proxy in the agent configuration](https://www.pagerduty.com/docs/guides/agent-install-guide/#Proxy) or see the information below for [using a proxy with the old Python integration](#section-troubleshooting-issues-with-the-python-based-integration).
- Check that the integration key is set correctly in your PagerDuty user's media settings.
- If you see an error such as "pagerduty_python: PagerDuty server REJECTED the event in file...Event object is invalid," check the trigger and recovery subjects and message formats in your PagerDuty action.

Under **Configuration → Actions**, select the PagerDuty notification action to view its details. Remove any extra characters, such as whitespace or a newline-character after the text so that the configuration matches this exactly:

**Default subject**: `trigger`
**Recovery subject**: `resolve`
**Default message** and **Recovery message**:

```
name:{TRIGGER.NAME}
id:{TRIGGER.ID}
status:{TRIGGER.STATUS}
hostname:{HOSTNAME}
ip:{IPADDRESS}
value:{TRIGGER.VALUE}
event_id:{EVENT.ID}
severity:{TRIGGER.SEVERITY}
```
- If you're using Zabbix 3.x, make sure you have specified these script parameters for the PagerDuty media type under Administration → Media types:
    - {ALERT.SENDTO}
    - {ALERT.SUBJECT}
    - {ALERT.MESSAGE}

![](https://files.readme.io/50d6592-ZabbixTroubleshooting_img2.png)

##Incidents are being triggered in PagerDuty, but they are not being resolved automatically after recovering in Zabbix

1. Ensure that your *PagerDuty Notifications* action has messaging operations (send to user / group) defined for its **Recovery operations**.
2. Make sure that the messaging operations configured for the PagerDuty Notifications action have the same message template for the main action as for the recovery action
3. Make sure the message template is the one given in the integration guide for your Zabbix integration: [Zabbix Integration Guide](https://www.pagerduty.com/docs/guides/zabbix-integration-guide/) and [Zabbix 3 Integration Guide](https://www.pagerduty.com/docs/guides/zabbix-3-integration-guide/) (also produced above; see [Potential Issues Within the Zabbix Configuration](#section-potential-issues-within-the-zabbix-configuration)).
4. Ensure that the recovery operations' default message subject is `resolve`, verbatim (it is case sensitive)
## Troubleshooting Issues with the Agent-based Integration

##Verify the Agent is Installed
The most common problem we see when we begin troubleshooting agent integrations is that the agent has not been installed successfully (i.e. trying to install on an incompatible distribution like CentOS 5). The first step in troubleshooting Agent-based integrations is to make sure that the PagerDuty Agent is both compatible with your distribution and successfully installed by following the steps in our Agent Install Guide.

**CentOS 5 users**: You will need to use the older [Python-based integration](https://www.pagerduty.com/docs/guides/zabbix-integration-guide-agentless/), as the PagerDuty Agent requires a newer version of Python than the version available with CentOS 5.

##Verify the Agent is Running
Once you've verified the agent has been successfully installed, you'll want to make sure that it is running. You can check the status by running `service pdagent status`. If the agent isn't running, you can start it with the command `service pdagent start`.

##Check the Agent's Logs for Errors
The agent logs activity and errors to `/var/log/pdagent/pdagentd.log`, which may contain information helpful in troubleshooting problems with the integration.

##Trigger a Test Incident with the Agent's CLI
Try manually triggering an incident using the pd-send command and check for errors (set `PD_SERVICE_KEY` to your own PagerDuty integration key):

```
$ export PD_SERVICE_KEY=65d9cd0e14c04dae8ef86867277d138c
$ pd-send -k $PD_SERVICE_KEY -t trigger -d "Server is on fire" -i server.fire
```

If an incident is triggered in PagerDuty, check the tips in the [Potential Issues within your Zabbix Configuration](#section-potential-issues-within-the-zabbix-configuration) section. You may need to verify the trigger subject and message in your Zabbix configuration.

##Trigger a Test Incident with pd-zabbix
Try manually triggering an incident using the `pd-zabbix` command and check for errors (set `PD_SERVICE_KEY` to your own PagerDuty integration key):

```
/usr/share/pdagent-integrations/bin/pd-zabbix PD_SERVICE_KEY trigger "name:Test
id:1
status:onfire
hostname:localhost
ip:127.0.0.1
value:5
event_id:2
severity:1"
```
## Troubleshooting Issues with the Python-based Integration

##Make Sure you have Python 2.7.9 or Newer
 Although the Python script was previously tested with Python 2.6, it now requires version 2.7.9 to make a secure connection to PagerDuty. This changed because SSLv3 is no longer enabled on our web servers due to the [POODLE vulnerability](https://en.wikipedia.org/wiki/POODLE), and older versions of Python try to use SSLv3. Python 2.7.9 uses a backported version of Python 3's SSL library, so versions 2.7.9 and newer (up to 3.x) are able to make a secure connection to PagerDuty. The script also does not work with Python 3.x due to other language changes in this version of Python.

##Does your Environment Require a Proxy to be set for Outbound HTTP/HTTPS Connections?
If you need to set a proxy, use this modified version of the Python script for proxy support. Replace `SOME_PROXY` on line 68 with your proxy address (i.e. `http://proxy.company.com:3128`).

##Trigger a Test Incident with the pagerduty.py Script
Try manually triggering an incident with `pagerduty.py` via the command line and check for errors (set `PD_SERVICE_KEY` to your own PagerDuty integration key):

```
/etc/zabbix/alert.d/pagerduty.py PD_SERVICE_KEY trigger "name:Test
id:1
status:onfire
hostname:localhost
ip:127.0.0.1
value:5
event_id:2
severity:1"
```

##Verify the Python Script is in the Correct Location
The script should be placed in your **AlertScriptsPath**. This is usually `/usr/lib/zabbix/alertscripts` or `/etc/zabbix/agent.d`, but could be different if you installed Zabbix from non-standard packages. You can find the correct path for your particular environment by checking `zabbix_server.conf` in your Zabbix server configuration directory.

##Verify the Zabbix User has Write Permissions
The script queues events in `/tmp/pagerduty`, so if the Zabbix user can't write to this directory it won't be able to send alerts to PagerDuty.