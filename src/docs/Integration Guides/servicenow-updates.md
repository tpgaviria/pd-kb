---
title: "What's New in ServiceNow v3.5"
slug: "servicenow-updates"
hidden: true
createdAt: "2017-05-17T22:39:33.438Z"
updatedAt: "2017-06-17T04:14:00.441Z"
---
This guide highlights some of the new features introduced in the PagerDuty v3.5 integration with ServiceNow. This version of the integration is compatible with ServiceNow Istanbul and Helsinki.

Refer to the Enterprise Integration Guide for steps on getting up and running with the latest integration. If you are on Geneva or earlier, you will need to use the Legacy Integration Guide. ServiceNow Express uses its own integration guide.

- [Selective Incident Sync](#section-selective-incident-sync)
- [View ServiceNow Incidents in PagerDuty](#section-view-servicenow-incidents-in-pagerduty)
- [Alerts & Incidents and ServiceNow](#section-alerts-incidents-and-servicenow) 
## Selective Incident Sync

Selective sync enables you to have more control over which PagerDuty incidents are synced into ServiceNow. You have the option to configure services to sync all incidents, or manually select which incidents are synced. By default, services will be configured to *Sync All Incidents*.

- **Sync All Incidents**: Each incident that is triggered against this service in PagerDuty will trigger a corresponding incident in ServiceNow.
- **Manually Sync**: Incidents triggered against this service in PagerDuty will not automatically sync and open a corresponding incident in ServiceNow. Users manually select which PagerDuty incidents should open ServiceNow incidents.

##Configure Selective Sync
1. Navigate to the service that you're looking to configure by going to Configuration → Services.
2. Click on the service you're configuring and navigate to the Integrations tab.
3. Under extensions, locate the ServiceNow (v3.5) extension, click on the gear icon and select Edit from the dropdown.
4. Next to Sync Options, select Manually Sync Incidents from the dropdown.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ba9a953-SNOW1.png",
        "SNOW1.png",
        1266,
        268,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
5. Click **Save**.

##Sync an Incident to ServiceNow
1. Navigate to the incident in PagerDuty that you'd like to sync to ServiceNow.
2. Click the **Sync to ServiceNow** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d1cee30-SNOW2.png",
        "SNOW2.png",
        1530,
        575,
        "#ebeceb"
      ]
    }
  ]
}
[/block]
3. Your incident is available in ServiceNow.
## View ServiceNow Incidents in PagerDuty

When an incident is synced with ServiceNow, the incident number is prepended to the incident title and included in the incident details page. You can click on the ServiceNow incident ID to directly access the incident in your ServiceNow instance.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c7ea88b-SNOW4.png",
        "SNOW4.png",
        1099,
        344,
        "#e6f1e4"
      ]
    }
  ]
}
[/block]

## Alerts & Incidents and ServiceNow

Once you have upgraded to the v3.5 integration, the former, inbound, ServiceNow integration becomes obsolete and can be removed from your PagerDuty services. The new integration utilizes the REST API and webhooks instead of the Events API.

The benefit to removing the old integration is that you can then enable [Alerts and Incidents](/docs/alerts#section-getting-started-with-alerts-and-incidents) on your service, giving you the opportunity to start utilizing [Suppression and Event Rules](/docs/event-management-tools#section-suppression-and-event-rules) as well.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "[Alerts and Incidents](/docs/alerts#section-getting-started-with-alerts-and-incidents) must be enabled on the service in order to start utilizing event rules and suppression."
}
[/block]
##Enabling Alerts & Incidents
1. Navigate to **Configuration → Services** and click into the service you want to edit.
2. Click on the **Integrations** tab and double check that you have the ServiceNow (v3.5) extension configured on your service.
3. After confirming that the ServiceNow (v3.5) extension is present, click on the gear icon next to the former, ServiceNow, inbound integration and select **Delete** from the dropdown. Make sure you're deleting the inbound integration and that the ServiceNow (v3.5) extension remains. ***Note**: You will only need to remove the old, inbound integration if you upgraded from v3.2.1 or earlier. If this is your first time integrating with ServiceNow, the old integration will not be present.* 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d8adbd4-SNOW5.png",
        "SNOW5.png",
        1269,
        655,
        "#eaf6ec"
      ]
    }
  ]
}
[/block]
4. Navigate to the **Settings** tab on your service and click the **Edit Service** button.
5. Scroll down to Incident Behavior and select the radio button next to **Create incidents and alerts**.
6. Click the **Save** button.

##Event Rules & Suppression
After upgrading to v3.5 of the integration and enabling alerts and incidents, you can start to integrate with other tools on the same service.

You can then start utilizing [Suppression and Event Rules](/docs/event-management-tools#section-suppression-and-event-rules) to suppress non-actionable alerts. Suppressed alerts will not trigger incidents in PagerDuty, or create incidents in ServiceNow.
[block:callout]
{
  "type": "info",
  "body": "Event Rules will not work for incoming incidents that originate in ServiceNow. Incidents that originate in ServiceNow do not have alerts attached to them, and thus are not evaluated against event rules.",
  "title": "Note"
}
[/block]
##Merging Incidents

After enabling alerts for your ServiceNow service, you can use ServiceNow on the same service as other monitoring tools. Because of this, you can now start to [merge incidents](/docs/editing-incidents#section-merging-incidents) that are synced with ServiceNow.

Here is an example use case:
- Monitoring tool event → Event X → Alert A → Incident 1 → SN INC123
- Monitoring tool event → Event Y → Alert B → Incident 2 → SN INC456
- Incident 1 and Incident 2 can be merged
- User merges Incident 1 into Incident 2
- Incident 1 is now marked as Resolved/Merged
- Incident 2 contains Alert A and Alert B
- In ServiceNow, INC123 will be closed and INC456 will remain open