---
title: "Paused Incident Notifications — Beta"
slug: "delayed-incident-notifications-beta"
hidden: true
createdAt: "2020-06-16T22:51:01.444Z"
updatedAt: "2020-10-09T14:39:28.868Z"
---
As a new [Rulesets](doc:rulesets) feature, paused incident notifications allows rules to be set to create alerts, but pause incident creation and notifications for a predefined amount of time. During the pause period, new alerts will be viewable in the [Alerts table](https://support.pagerduty.com/docs/alerts#alerts-table) with a **Suspended** status. These suspended alerts have new actions, allowing users to **Trigger** an incident from the alert during the pause period, or **Resolve** the alert, preventing the incident and its notifications from being created altogether.
[block:callout]
{
  "type": "info",
  "title": "Beta",
  "body": "This feature is currently in Beta, with features and documentation subject to change as it is developed.
</Callout>


## Configure Paused Incident Notifications

1. To configure paused incident notifications:
* **If you are creating a new rule**: [Follow these instructions](https://support.pagerduty.com/docs/rulesets#create-event-rules), stopping when you begin to configure Incident Actions under the **Do these things** header. Navigate back to this page and continue with step 2 below. 
* **If you are adding paused incident notifications to an existing rule**: Navigate to the rule you would like to change, click the **:fa-cog:** to the right of the rule, click **Edit Rule** and continue with step 2 below.
2. Click the **Do these things** header. In the right hand console, under Incident Creation, select **Create alert but pause notifications**. Enter the amount of time you would like to pass before an incident and notifications are created in the **Suspend alert for _ second(s) before triggering incident** field.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7807fb2-paused-incident-notifications-rule-actions.png",
        "paused-incident-notifications-rule-actions.png",
        487,
        194,
        "#f6eae8"
      ]
    }
  ]
}
[/block]
3. **If you are creating a new rule**: Continue to configure your rule [with Step 3 and 4 of this guide](https://support.pagerduty.com/docs/rulesets#step-3-at-these-times). **If you are adding paused incident notifications to an existing rule**: Click **Save Rule**.

## View and Take Action on Paused Alerts

To view alerts in a paused state, navigate to the **Services** and then **Alerts** in the upper menu of the web app under the Incidents tab. Alerts with paused incident notifications will have a **Suspended** status:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/59221dc-delayed-incident-notif-suspended-alert.png",
        "delayed-incident-notif-suspended-alert.png",
        1513,
        500,
        "#ecf2f5"
      ]
    }
  ]
}
[/block]
To take action on a paused alert:

1. Click the incident **title** to view its details page.
2. On the right hand side, click **Trigger** to trigger an incident and send notifications, or **Resolve** if you would like to resolve the alert without triggering an incident/notifications. You will see a green dialog that confirms that the alert has been triggered or resolved.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b77f419-delayed-incident-notif-trigger-resolve.png",
        "delayed-incident-notif-trigger-resolve.png",
        1527,
        834,
        "#f3f4f3"
      ]
    }
  ]
}
[/block]
The pause period and action taken will also appear in the Alert Log timeline, accessible by clicking an alert's **title** to view the detail page:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f49bcd1-delayed-incident-notif-alert-log-entry.png",
        "delayed-incident-notif-alert-log-entry.png",
        762,
        185,
        "#f6f6f6"
      ]
    }
  ]
}
[/block]