---
title: "Nagios Troubleshooting Guide"
slug: "nagios-troubleshooting-guide"
hidden: false
createdAt: "2017-05-18T17:51:24.014Z"
updatedAt: "2018-06-26T14:17:32.125Z"
---
Below are some sample errors that you may run into when integrating Nagios with PagerDuty, and steps for troubleshooting those errors. We've split up this article into three sections depending on the type of configuration used to integrate PagerDuty and Nagios:

- [General Configuration](#section-general-configuration)
- [Perl-based Integration](#section-perl-based-integration)
- [Agent-based Integration](#section-agent-based-integration)
- [Bi-Directional Integration](#section-bi-directional-integration)
## General Configuration

##Nagios did not trigger a PagerDuty incident: possible causes
###Your Nagios host or service is not reaching a HARD down state
Events are sent to PagerDuty once your service or host has a HARD State Type and the state changes. This happens once the max_check_attempts limit has been reached for the host/service.

In other words, an event would be sent to PagerDuty once your service or host goes up or down HARD. For more information, please see this [Nagios documentation](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/statetypes.html) on states.

To verify if this is happening, check your logs:

**Debian/Ubuntu**: `/var/log/syslog`

**RHEL/CentOS**: `/var/log/messages`

Run `grep pagerduty <log path>` to see notifications sent to PagerDuty.

This is an example of a SOFT down. This would **not** trigger an incident in PagerDuty:

`Nov 13 22:34:30 ip-10-182-165-131 nagios3: SERVICE ALERT: localhost;Current Users;WARNING;SOFT;1;USERS WARNING - 2 users currently logged in`

This is an example of a HARD down, which should trigger incidents in PagerDuty:

`Nov 13 22:34:30 ip-10-182-165-131 nagios3: SERVICE NOTIFICATION: pagerduty;localhost;Current Users;WARNING;notify-service-by-pagerduty;USERS WARNING - 3 users currently logged in`
 
###Your PagerDuty contact is not configured properly
The PagerDuty contact might not have been configured properly to receive notifications.

To check this, run `grep NOTIFICATION <log path>`.

If, as in the example below, "pagerduty" is not listed in your logs, check to make sure that the pagerduty contact is included in the contact group which is configured to receive notifications under the service or host template:

`Nov 13 22:34:30 ip-10-182-165-131 nagios3: SERVICE NOTIFICATION: root;localhost;Current Users;CRITICAL;notify-service-by-email;USERS CRITICAL - 5 users currently logged in`

If you’re using the default configuration, open the following to confirm that the pagerduty contact is included in the correct contact group.

**Debian, Ubuntu, and other Debian-derived systems**: `/etc/nagios3/conf.d/contacts_nagios2.cfg`
**RHEL, Fedora, CentOS, and other Redhat-derived systems**: `/etc/nagios/objects/contacts.cfg`

If you’re using the default configuration, open the following to make sure that the pagerduty contact itself is defined properly.


[block:callout]
{
  "type": "info",
  "title": "If using Nagios XI",
  "body": "Under Nagios XI, paths will differ from Nagios Core, and furthermore, configuration is managed primarily through the Nagios XI web UI versus configuration files. Please refer to the [Integration Guide](https://www.pagerduty.com/docs/guides/nagios-xi-integration-guide/) for further details about configuration steps required for the integration to work properly."
}
[/block]
**Debian, Ubuntu, and other Debian-derived systems**: `/etc/nagios3/conf.d/pagerduty_nagios.cfg`
**RHEL, Fedora, CentOS, and other Redhat-derived systems**:
`/etc/nagios/objects/pagerduty_nagios.cfg`

If you’re using the default configuration, open the following to confirm that the host or service template being used is contacting the correct group.

**Debian, Ubuntu, and other Debian-derived systems**:
`/etc/nagios3/conf.d/generic-service_nagios.cfg`
`/etc/nagios3/conf.d/generic-host_nagios2.cfg`
**RHEL, Fedora, CentOS, and other Redhat-derived systems**:
`/etc/nagios/objects/generic-service_nagios2.cfg`
`/ect/nagios/objects/generic-host_nagios2.cfg`

If you do make any changes to the templates above, **make sure to restart Nagios**:

`/etc/init.d/nagios3 restart`
or
`service nagios3 restart`
 
##[ERROR] NOTIFICATIONTYPE field must be present##
The PagerDuty integration can only accept PROBLEM, ACKNOWLEDGE, and RECOVERY notifications. If you see this error, then a different type of event is being generated — such as FLAPPINGSTART and FLAPPINGSTOP — which is not supported by the integration and will be ignored.

Also, please note that sending a custom notification manually through the Nagios UI will not trigger an incident, as custom notifications are not supported by the integration.

If you are using the Perl integration and would like to receive FLAPPINGSTART and FLAPPINGSTOP events, you can add [this script](https://gist.github.com/baskarp/3149686) to your integration.
## Perl-based Integration


[block:callout]
{
  "type": "info",
  "body": "Use the Perl integration if you are using CentOS 5 or lower.",
  "title": "Note"
}
[/block]
##Trigger a test incident to make sure that the Perl script will run
Make sure that you are logged in as the Nagios user, or add `sudo -u nagios` to your command. If you're already logged in as the user that's running Nagios (typically the "nagios" user), you can omit this from each command.

Manually trigger a Nagios incident with the Perl script to make sure it will run.

##[ERROR] Nagios event in file /tmp/pagerduty_nagios/pd_12334543223_1235.txt DEFERRED due to network/server problems.

Is the server behind a proxy? If so, it needs to be specified when executing the Perl script. Add the following switch to the Nagios command that calls the script, as well as your cron job:

`--proxy https://my.proxy.com:<port>`

Also, verify that the Perl libraries for SSL are installed (typically step 1 of the integration guide).

**For Debian-based systems (i.e. Ubuntu):**
`aptitude install libwww-perl libcrypt-ssleay-perl`

**For RHEL-based systems (i.e. CentOS, Fedora)**:
`yum install perl-libwww-perl perl-Crypt-SSLeay`

Then, run:
`sudo -u nagios <path to perl script> flush --verbose`

If you get a 500 response of "*Can't verify SSL peers without knowing which Certificate Authorities to trust*", install the Mozilla::CA module by running the following command:

`cpanm Mozilla::CA`
 
##[ERROR] May 16 07:12:46 sw-cloud pagerduty_nagios[32356]: open /tmp/pagerduty_nagios/pd_1337123566_32999.txt for write failed: Illegal seek

This error means that the user running Nagios does not have write permissions to the /tmp/pagerduty_nagios/ directory. The easiest solution to fix this is to delete the directory. Note, this will remove any and all queued alerts:

`rm -rf /tmp/pagerduty_nagios`
 
##[ERROR] File was rejected because could not find CONTACTPAGER

If you see this error, you will need to enable environment variables by setting the following `enable_environment_macros=1` in your nagios.cfg file:

**Debian, Ubuntu, and other Debian-derived systems**:
`/etc/nagios3/nagios.cfg`

**RHEL, Fedora, CentOS, and other Redhat-derived systems**:
`/etc/nagios/nagios.cfg`
## Agent-based Integration

Below are some issues that may arise with an agent-based integration while using the PagerDuty agent.

## Trigger a test incident to make sure that the agent works
Manually trigger a Nagios incident with the pd-send command to make sure the agent is working.

Replace "YOUR-INTEGRATION-KEY-HERE" with your actual integration key in the below commands:
`sudo -u nagios /usr/share/pdagent-integrations/bin/pd-nagios -n service -k YOUR-INTEGRATION-KEY-HERE -t "PROBLEM" -f SERVICEDESC="test_description" -f SERVICESTATE="CRITICAL" -f HOSTNAME="test_host_name" -f SERVICEOUTPUT="test_service_output"`

Alternatively, you can use the pd-send command to trigger an incident.

Here is an example event to trigger an incident using pd-send:
```
~$ export PD_INTEGRATION_KEY=YOUR-INTEGRATION-KEY-HERE
~$ pd-send -k $YOUR-INTEGRATION-KEY-HERE -t trigger -d "Server is on fire" -i server.fire
Event processed. Incident Key: server.fire
```
## [ERROR] Error Performing CheckSum

This is an installation error on CentOS 5 and below. Only CentOS 6 and above are supported by the agent. If you are running CentOS 5 or below, then you will need to follow the Perl script integration guide located here.

 ## Agent is not running

Check to make sure that the PD agent is running. To do this, run the following command:
`service pdagent status`

If the status is "not running", then start the PD agent:
`service pdagent start`
 
## Log messages

```
[1417765072] wproc: stderr line 04: File "/usr/share/pdagent-integrations/bin/pd-nagios", line 117, in main 
[1417765072] wproc: stderr line 05: details = parse_fields(args.fields)
```

If you see something similar to the following in your logs, then you will need to update the agent to the [latest version](https://www.pagerduty.com/docs/guides/agent-install-guide/) of the agent:

```
09:36 | [1417765072] wproc: stderr line 01: Traceback (most recent call last): 
[1417765072] wproc: stderr line 02: File "/usr/share/pdagent-integrations/bin/pd-nagios", line 188, in <module> 
[1417765072] wproc: stderr line 03: main() 
[1417765072] wproc: stderr line 04: File "/usr/share/pdagent-integrations/bin/pd-nagios", line 117, in main 
[1417765072] wproc: stderr line 05: details = parse_fields(args.fields) 
[1417765072] wproc: stderr line 06: File "/usr/share/pdagent-integrations/bin/pd-nagios", line 177, in parse_fields 
[1417765072] wproc: stderr line 07: return dict(f.split("=", 2) for f in fields)
 ```
## Bi-Directional Integration

The bidirectional integration utilizes a [CGI script](https://github.com/mdcollins05/pd-nag-connector/blob/master/pagerduty.cgi) to capture webhooks and process them into commands that Nagios runs, to add the acknowledgment note.

It will be of use to capture an acknowledgment webhook for iterative testing and log-checking, i.e. by sending it manually via [curl](https://curl.haxx.se/) or [Postman](https://www.getpostman.com/). You can do this by creating an extra extension on your service and pointing it to a temporary  [hookbin.com](https://hookbin.com) URL to capture the JSON body, and acknowledging an incident that was raised from Nagios.

Once you have the JSON content of the webhook, you will be able to send the same webhook after each change and troubleshooting step attempted, without having to repeat the full process of raising an alert in Nagios and acknowledging it in PagerDuty. This allows more rapid testing and diagnosis of the CGI script that processes webhooks from PagerDuty.

## CGI script cannot execute

Once you have put the script in place, try opening it in a HTTP client, i.e. Perl or a web browser, with a `GET` request. You should receive a 400 error along with the message

```
400 Requests must be POSTs
```

### Response is 403 Forbidden

The [`pagerduty.cgi`](https://github.com/mdcollins05/pd-nag-connector/blob/master/pagerduty.cgi) script must be readable and executable by the web server process. If the process cannot read and execute the script file, it will in most cases respond to the request with this status.

### Response is 401 Unauthorized

The script, or the directory it is in, may require authorization, i.e. [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Check with the system administrator to see if this is the case. If HTTP Basic Auth is used, retry your GET request with `username:password@` prepended to the host name in the URL (immediately following `http(s)://`).

### Responses is 500 Internal Server Error

This indicates that the script itself is exiting prematurely with a non-success status due to some uncaught exception. The following dependencies (Perl modules) must be installed for the script to run properly, or an error will result:

* `JSON`
* `LWP::UserAgent`

How to install these modules using native package management in CentOS and Ubuntu is given in the [Integration Guide](https://www.pagerduty.com/docs/guides/nagios-integration-guide/).

If you have already ensured that the dependencies have been met, and a 500 status response is still issued, try running the script from the command line to see what error output results. It can potentially be an issue with the Perl installation on the local machine, or a syntax error in the script caused by an accidental modification that resulted in invalid Perl syntax (i.e. missing a semicolon at the end of a line).

## CGI script executes, but no notes are being added to the Nagios alert

The CGI script writes to an "external commands" file that is read by Nagios. This is the crucial part where the acknowledgment is translated from the webhook into action taken by Nagios (adding a note to the alert that it has been acknowledged in PagerDuty).

There are a few things that could prevent this process from happening properly:

* Permissions on the command file / directory where it resides
* The command file is at a different path than what is configured in "plain vanilla" Nagios, which is what the script was configured for by default
* Nagios might not be configured to execute external commands

In the Nagios configuration spec (per the [documentation on configuring external commands](https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/3/en/extcommands.html)), the two directives `check_external_commands` and `command_file` are of particular interest for troubleshooting the above. The latter of these dictates the path at which the command file resides.

If you can verify that external commands are enabled in Nagios, per the `check_external_commands` option, and can obtain the path from the `command_file` option, then you can then check that against the path that is hard-coded in the CGI script, on [line 14](https://github.com/mdcollins05/pd-nag-connector/blob/master/pagerduty.cgi#L14):

```
    'command_file' => '/var/lib/nagios3/rw/nagios.cmd', # External commands file
```

If everything is already what it needs to be, then it could be an issue of the command file's permissions, in which case you will need to check to see what user ID the script is running as, and ensure it will have write permission to the command file.