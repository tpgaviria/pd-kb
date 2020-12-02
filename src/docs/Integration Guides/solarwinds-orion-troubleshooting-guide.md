---
title: "SolarWinds Orion Troubleshooting Guide"
slug: "solarwinds-orion-troubleshooting-guide"
hidden: false
createdAt: "2017-12-27T18:28:24.605Z"
updatedAt: "2018-12-11T15:13:42.969Z"
---
This integration is based on [a VBScript](https://github.com/jcurreee/pagerduty-vbs) that runs locally on the SolarWinds host. Whenever an alert is triggered:

1. A text file containing JSON-encoded data to be sent to PagerDuty is created, based on an alert template, through a "Log Alert to File" alert action. This file is stored temporarily in `C:\PagerDuty\Queue`. 
2. The script is executed to deliver that event (and any others that are still in that directory) to PagerDuty through the [Events API](doc:apis).
3. The script removes the file once delivery is successful.

Troubleshooting will involve examining each aspect of the process.
[block:api-header]
{
  "title": "Cannot Import Sample Alerts Due to Error"
}
[/block]
If an alert cannot be imported, you may be presented with an error such as the following:

> There was an error while importing alert from ... Please check OrionWeb.log for more details.

 To find the path to the log file referenced in such an error, refer to [Orion Core Logs](https://support.solarwinds.com/Success_Center/Orion_Platform/Knowledgebase_Articles/CORE_-_Available_Orion_Core_Logs). In the case of `OrionWeb.log`, the path will be `Logs\Orion\OrionWeb.log`, and the `Logs` folder will be in `C:\Documents and Settings\All Users\Application Data\SolarWinds\` or `C:\Documents and Settings\All Users\SolarWinds\`.

The error in the log will provide more information on why the import did not succeed.

Sometimes, the error itself can be due to one or more software components referenced by the alert not being present in the SolarWinds Orion installation. For example, note that the [APM (Application Performance Monitor)](https://www.solarwinds.com/apm-app-performance-monitor) alerts, which have "Application" in their names, require that the APM module be installed and activated.
[block:api-header]
{
  "title": "PagerDuty Incidents Not Triggered"
}
[/block]
The first thing you should do is look in `C:\PagerDuty\Queue` for `.txt` files that are "stuck" in the event queue. They would have creation timestamps earlier than a few seconds ago.

If there are any stuck event files, move them out of the folder so that the script will stop trying to send them to PagerDuty while you troubleshoot the integration. 

## Check for malformed events

Open some of the text files to see what they contain. The files' contents must be valid JSON, and the integration key must be a valid value, or the events will not get through to trigger PagerDuty incidents.

Resolving the issue, if you notice anything wrong here, will involve going to **Manage Alerts** or **Manage Custom Properties** through the **Main Settings &amp; Administration** page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/604ea07-solarwinds-main-settings.png",
        "solarwinds-main-settings.png",
        1546,
        1442,
        "#dbddde"
      ],
      "caption": "Main Settings &amp; Administration"
    }
  ]
}
[/block]
### Check for stray quote characters

If there are there any escaped double quote characters within property names or values (for instance, `"Last Time \"Up\""`), this will cause the final alert sent to PagerDuty to contain invalid JSON syntax. To correct this:

1. From the main menu, go to **Manage Alerts**.
2. Find the alert that created the file and click in to it to edit it.
3. Navigate to the **Trigger Actions** step.
4. Under the **Trigger Actions** section on this page, click edit on the **Log Alert to PagerDuty Queue** action and remove the errant characters from the message template, and save the alert.
5. To test the updated alert action, click **Simulate**, select a node, and open the file to verify it is now valid JSON, or click the **Simulate** button on the **Execute PagerDuty VBScript** action to try having it trigger a PagerDuty incident.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/83e0a8e-solarwinds-edit-alert-trigger-actions.png",
        "solarwinds-edit-alert-trigger-actions.png",
        1982,
        1264,
        "#dedede"
      ]
    }
  ]
}
[/block]
### Check for blank or invalid integration key

Next, look for the `service_key` property in the JSON data, and verify that it has a valid, current integration key in it. This should be the 32-character key generated for the integration in the setup process. If not, or if the integration key doesn't show up on any of your PagerDuty service integrations, you should modify the node in question for the alert and set a proper value for the integration key as described in the [SolarWinds Integration Guide](https://www.pagerduty.com/docs/guides/SolarWinds-integration-guide/).

### How to skip alerts if the integration key is blank

If you see a line in the event file that looks like this, then there is a node that lacks a value for its `PDIntegrationKey` field:

```
   "service_key": "",
```

As mentioned above, you can resolve this by setting a value for the `PDIntegrationKey` field on the node(s) in question that produced the invalid events. However, there's another configuration adjustment you can make, in the **Trigger Condition**, that will help you avoid this problem in the future, as well as conferring the following advantages:

* It will allow you to create nodes that don't send alerts to PagerDuty if you choose.
* It will avoid creating invalid alert events that pile up in the queue folder

This can be implemented as follows:

1. From the main menu, go to **Settings &rarr; All Settings**.
2. Under **Alerts &amp; Reports** go to **Manage Alerts**.
3. Click in to an alert to edit it and go to the **Trigger Condition** step.
4. Make sure that conditions are combined with **AND**.
5. Click on **+** to add a trigger condition and select **Add Single Value Comparison**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f76c665-solarwinds-edit-alert-trigger-condition.png",
        "solarwinds-edit-alert-trigger-condition.png",
        1992,
        1270,
        "#e6e3d1"
      ]
    }
  ]
}
[/block]
6. Configure the condition as Node's PDIntegrationKey field is not empty.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f1365b-solarwinds-edit-alert-new-trigger-condition.png",
        "solarwinds-edit-alert-new-trigger-condition.png",
        1868,
        394,
        "#efe9cd"
      ]
    }
  ]
}
[/block]
## Look for application log errors

Looking at the error output of the script, if any, can provide useful information on the next steps to take.

1. Open **Event Viewer**, which can be accessed through **Control Panel &rarr; System and Security &rarr; Administrative Tools**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c90b110-windows-control-panel-event-viewer.png",
        "windows-control-panel-event-viewer.png",
        1726,
        834,
        "#73c1dd"
      ]
    }
  ]
}
[/block]
2. Select **Windows Logs &rarr; Application**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4d980a3-windows-event-viewer-application-logs.png",
        "windows-event-viewer-application-logs.png",
        424,
        568,
        "#e9eae4"
      ]
    }
  ]
}
[/block]
## Check the connection to PagerDuty

If it happens that the VBScript cannot connect to the PagerDuty Events API, certain errors will be printed to the Windows Event Logs (and to the command line output, if the script is run manually).

3. Look for an error of source "WSH";
  * If it is from `msxml3.dll` (or `msxml6.dll`), and message "Couldn't connect or send data to PagerDuty", it is a network connection issue.
  * If the error is "File could not be opened" or similar, the issue is with the permissions and ownership of the file.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9082393-windows-event-viewer-msxml3dll-error.png",
        "windows-event-viewer-msxml3dll-error.png",
        1388,
        732,
        "#f3f3f2"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3ad9008-solarwinds-vbs-file-permission.png",
        "solarwinds-vbs-file-permission.png",
        1018,
        580,
        "#5b5767"
      ]
    }
  ]
}
[/block]
### Check outbound HTTPS connectivity

If the nature of the problem appears to be network-related, perform the following diagnostic steps to determine the nature of the connection issue:

1. Open command prompt (`cmd.exe`) and run `ping events.pagerduty.com`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/92e6406-windows-successful-ping.png",
        "windows-successful-ping.png",
        1160,
        340,
        "#c4c4c4"
      ],
      "caption": "Successful ping results"
    }
  ]
}
[/block]
2. If ping fails:
  * If it's an "unknown host" error, this indicates a localized DNS resolution issue.
  * If it's a timeout or packet rejection, this could be a network or routing issue (but note that it could also just be that the local network's ACL is rejecting or dropping outbound ICMP traffic; contact your network administrator for clarification)
3. If ping succeeds, try establishing a TCP connection via `telnet.exe events.pagerduty.com 443`. Note the following:
  * If you don't have the telnet client enabled on the SolarWinds server, you can enable it by following [Microsoft Technet's guide to enabling telnet on Windows 10](https://social.technet.microsoft.com/wiki/contents/articles/38433.windows-10-enabling-telnet-client.aspx). If for some reason you cannot enable telnet on the SolarWinds server, skip to the next step.
  * If you get a `Connect failed` error, it is due to firewall / ACL rules that prevent outbound TCP connections.
  * Otherwise, try typing in `GET /` and hit enter. Then, if you see a HTTP 400 response, that means the TCP connection succeeded and `telnet` received a HTTP response from the Events API server.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/acdc64f-windows-telnet-connection-failed.png",
        "windows-telnet-connection-failed.png",
        1278,
        142,
        "#bcbcbc"
      ],
      "caption": "TCP connection to the Events API failed"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3f22740-windows-telnet-tcp-successful-http-400.png",
        "windows-telnet-tcp-successful-http-400.png",
        1254,
        348,
        "#c4c4c4"
      ],
      "caption": "Expected response when the TCP connection succeeded"
    }
  ]
}
[/block]
4. Open Edge (a.k.a. Internet Explorer) and go to `https://events.pagerduty.com`. 
  * You should receive a HTTP response (status 404) and a "webpage cannot be found" message, which indicates that both establishing a TCP connection and the TLS handshake succeeded.
  * If you were able to connect via Telnet but not Explorer, this may indicate that the certificate authority behind the Events API's TLS certificate is not trusted locally. To resolve this, try adding the [GeoTrust Root CA certificates](https://www.geotrust.com/resources/root-certificates/) to your trusted certificates. See [Microsoft Technet: Manage Trusted Root Certificates](https://technet.microsoft.com/en-us/library/cc754841(v=ws.11).aspx) for further details.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2e2b180-windows-internet-explorer-connection-error-versus-404.png",
        "windows-internet-explorer-connection-error-versus-404.png",
        1836,
        1188,
        "#d9e0e4"
      ],
      "caption": "Windows Internet Explorer test results: connection failed (top); connection / TLS handshake succeeded (bottom)."
    }
  ]
}
[/block]
Once you have gathered the necessary information about the nature of the connection issue, contact your local network or IT administrator for further assistance, and ask them to enable outbound HTTPS connections to remote hosts.

However, you should also check to make sure there are no local firewall rules (on the SolarWinds server) that prevent connections.
[block:api-header]
{
  "title": "Alert Recovery Does Not Resolve PagerDuty Incident"
}
[/block]
Go to **Settings &rarr; All Settings** through the main menu, and from there go to **Manage Alerts**. Then, open the alert corresponding to the incident that did not get automatically resolved to edit it and go to the **Reset Actions** step.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/12453ac-solarwinds-edit-log-recovery.png",
        "solarwinds-edit-log-recovery.png",
        1876,
        938,
        "#e0e0e0"
      ]
    }
  ]
}
[/block]
1. Ensure that it has the **Log Recovery to PagerDuty Queue** action.
2. Edit the log-to-queue action, and make sure all of the following apply:
  * The `event_type` property in the JSON is `resolve`
  * The `incident_key` is the same value as it is in the template for the log-to-queue action in the **Trigger Actions** step.
3. Simulate the recovery action and observe the content of the file that is created for it. Do the same with the alert action. Compare the `incident_key` values in both files.

When a `resolve` event is sent to PagerDuty and its deduplication key does not match any existing open incident or alert, the event will be dropped, because there is nothing for the resolve to act upon.  

If any template variables ( `${...}`) are present in the template, you will need to ensure that they are the right kind of variables, i.e. they must have the same values during the reset action as they have in the trigger action. For instance, node state is a bad choice of template variable to use in an incident deduplication key because the node state will be "Up" during the reset action versus potentially "Down" in the alert action.