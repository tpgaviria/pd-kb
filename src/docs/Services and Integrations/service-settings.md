---
title: "Configurable Service Settings"
slug: "service-settings"
excerpt: "Configure service settings to perform specific actions during incidents"
hidden: false
createdAt: "2017-05-09T16:32:00.692Z"
updatedAt: "2020-10-09T21:09:19.082Z"
---
# Response Play

You can run a response play whenever an incident is created on a service. To configure this setting, navigate to **Services** :fa-arrow-right: **Service Directory** and select your preferred service. Select the **Response** tab and click **Edit** to the right of **Coordinate Responders and Stakeholders**. Select your desired response play from the **Response Plays** dropdown and click **Save Changes**. If you need to remove this response play, navigate back to the edit screen and click the **X** to the right of the play.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4a1873d-configurable-service-settings-add-response-play.png",
        "configurable-service-settings-add-response-play.png",
        1367,
        346,
        "#d4e1f7"
      ],
      "sizing": "smart",
      "border": false
    }
  ]
}
[/block]
# Enable Urgencies

Urgencies is a feature which allows you to customize how your team is notified based on the criticality of an incident: incidents can be either **high-urgency** (requires immediate attention) or **low-urgency** (it can wait). What does this mean for responders? As an incident responder, you can set up notification rules so that you won't be woken up for low-urgency incidents that can be handled in the morning, or you can set a service to notify you with only high-urgency or low-urgency notification methods at specific times of day.
[block:callout]
{
  "type": "info",
  "body": "Urgencies are available on all plans with the exception of our legacy Basic and Lite plans. If you are on one of our legacy plans and you would like access to Urgencies, you will need to begin a new subscription to one of our [current plans](https://www.pagerduty.com/pricing/). If you have any questions about these plans, please contact our [sales team](https://www.pagerduty.com/contact-sales/) for more details.",
  "title": "Note"
}
[/block]
- [Step 1: Configure Service](#section-step-1-configure-service)
- [Step 2: Configure User Profiles](#section-step-2-configure-user-profiles)
- [Use Case 1: Critical and Non-Critical Incidents](#section-use-case-1-critical-and-non-critical-incidents)
- [Use Case 2: Support Hours](#section-use-case-2-support-hours)

## Step 1: Configure Service
Urgencies are defined at the Service level, and all services will initially default to High. This can be adjusted within the settings of a service; to access the settings, navigate to the service you wish to adjust, select the **Response** tab and click **Edit** to the right of **Assign and Notify**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ff7289-configurable-service-settings-enable-urgencies.png",
        "configurable-service-settings-enable-urgencies.png",
        753,
        745,
        "#e4ecf7"
      ]
    }
  ]
}
[/block]
Under **How should responders be notified?**, you will have the option to apply one of 2-4 options (varies) to all incidents originating from a particular service, depending on your account's plan:

- High-urgency notifications, escalate as needed
- Low-urgency notifications, do not escalate
- Dynamic Notifications based on alert severity
- Based on support hours

Low-urgency incidents will not escalate. Only high-urgency incidents will escalate according to the rules defined in an escalation policy.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/865c607-configurable-service-settings-select-urgency.png",
        "configurable-service-settings-select-urgency.png",
        869,
        395,
        "#c0cde1"
      ]
    }
  ]
}
[/block]
Additionally, accounts with access to Support Hours can configure a setting to raise the urgency of all open incidents once on-call hours begin.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df5c7a6-configurable-service-settings-support-hours.png",
        "configurable-service-settings-support-hours.png",
        983,
        409,
        "#f4f5f7"
      ]
    }
  ]
}
[/block]
## Step 2: Configure User Profiles
Responders will next need to navigate to their User Profile and specify how they'd like to be notified based on the urgency of an incident.

It's a best practice to create several notification rules for high-urgency incidents and tier them so that the on-call responder will be notified numerous times until they acknowledge the incident.

With non-urgent incidents, however, the on-call responder may only want to receive a push notification, email, or no notification at all, for instance.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/337cf58-configurable-service-settings-high-low-notification-settings.png",
        "configurable-service-settings-high-low-notification-settings.png",
        1294,
        944,
        "#e8e8e9"
      ]
    }
  ]
}
[/block]
## Use Case: Support Hours

Let's take a support team as an example. Since a support team responds to customer inquiries during business hours, we want incidents to be categorized as critical during business hours and non-critical after hours. This way they are fresh for work the next day!

1. [High-urgency notifications](https://support.pagerduty.com/v1/docs/configuring-a-user-profile#section-notification-rules), escalate as needed
2. Low-urgency notifications, do not escalate
3. [Dynamic notifications](https://support.pagerduty.com/v1/docs/dynamic-notifications) based on alert severity 

All three of these options are available both during support hours and outside of support hours. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b926f6-configurable-service-settings-select-urgency.png",
        "configurable-service-settings-select-urgency.png",
        869,
        395,
        "#c0cde1"
      ]
    }
  ]
}
[/block]
Beneath your support hours you can select the option **Raise urgency of all triggered incidents for this service to High when service support hours begin.** This means that all open incidents on the service will become high urgency, and responders will be notified using high urgency notification rules, and that notifications will be sent until someone responds. 

This setting is useful for teams who rely on support hours to give their team a rest during off-hours, but want to make sure that any incidents that come in during that time will be dealt with with some urgency by their team once their support hours begin.

Please note that the **Start** and **End** times are for **each** day. If there are two (or more) continuous days selected, then the Start and End times are for each day separately.

# High and Low Urgency Incidents

Urgencies can be configured to notify you based on your notification rules. When both high and low urgency incidents have been triggered, PagerDuty makes it easy to pinpoint which incidents are high urgency and which are low urgency by color coding them and prioritizing them according to their urgency level.

## Web Application
In the PagerDuty Dashboard, incident urgency is indicated in the **Urgency** column. High urgency incidents will be displayed at the top, followed by low urgency incidents. High urgency incidents will also have a lighter background than low urgency incidents. This helps you quickly identify incidents that are most critical.

For example in the screenshot below, incident #4728 was triggered most recently, but because it’s low urgency, it’s displayed below the higher priority incidents.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8482f3c-configurable-service-settings-low-urgency-incident.png",
        "configurable-service-settings-low-urgency-incident.png",
        1812,
        1242,
        "#f9f9fb"
      ]
    }
  ]
}
[/block]
Incidents will maintain this urgency-based order, even after acknowledgment. In the example below, both incidents are acknowledged. The high urgency incident remains at the top of the table, followed by the low urgency incident.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/19ce742-configurable-service-settings-post-ack.png",
        "configurable-service-settings-post-ack.png",
        1074,
        486,
        "#faf9f9"
      ]
    }
  ]
}
[/block]
## Mobile App
If you have high and low urgency incidents open, high urgency incidents will be displayed at the top of the queue and low urgency incidents at the bottom.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3699d42-open_incidents.png",
        "open_incidents.png",
        750,
        964,
        "#0f1e2f"
      ]
    }
  ]
}
[/block]
After an incident has been acknowledged, the bar to the left side of the incident will change from red to yellow.

High urgency incidents are still displayed at the top of queue, even after low urgency incidents have been acknowledged.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b0332d2-open_incidents_ack.png",
        "open_incidents_ack.png",
        750,
        961,
        "#0f1e2f"
      ]
    }
  ]
}
[/block]
# Edit Urgencies

If an open incident's urgency has been reassessed, responders can edit an incident's urgency in the web app by [following instructions here](https://support.pagerduty.com/docs/editing-incidents#edit-incident-urgency).

# Acknowledgement Timeouts

The purpose of incident acknowledgement (ack) timeouts is to ensure that an incident is not forgotten after it has been acknowledged. This feature is off by default. 

With this feature enabled, an acknowledged incident will return to the **triggered** state after a specified amount of time. When the incident is re-triggered, it re-notifies the user(s) it is currently assigned to in the escalation policy, as well as the current user on-call (if the on-call responsibilities have changed since the ack.) 

## Acknowledgement timeout configuration

You can configure the length of the timeout, or turn it off completely, in the service settings:

1. Go to **Services** :fa-arrow-right: **Service Directory**.
2. Click on the service you wish to edit.
3. Select the **Response** tab and click **Edit** next to **Assign and Notify**.
4. Select **Re-trigger acknowledged incidents after [TIME] and re-notify assigned responders** and select the timeout period from the dropdown. 
5. Click **Save Changes**.

**Note:** If you need to quiet an individual incident for a *different* length of time than the service's incident ack timeout, you can instead [snooze the incident](https://support.pagerduty.com/v1/docs/editing-incidents#section-snooze-an-incident).

# Auto-resolution

If you would like an incident to automatically resolve after a given amount of time, you can set up an auto-resolution for your service. This feature is off by default.

Auto-resolution is recommended for services that are expected to produce a high number of active incidents, or for monitoring systems that send only **Triggers** but not **Resolves** (as with some e-mail-based monitoring systems). 

This feature can be useful when there are a high number of active incidents on a service (such as in a CentralOps/NOC environment), because if an incident is not resolved automatically by the monitoring system or manually by the user, and thus remains open, responders may not be aware of any recurrences of the issue.

With this feature enabled, an incident will automatically resolve after the specified time has passed, and no further notifications will be sent for this incident. Once an incident is resolved, it cannot be re-opened, so if further work is required, a new incident would need to be triggered manually.

Note that **triggered** and **acknowledged** incident states are both used in the timeout counter. **Snoozed** state incidents will reset the timeout counter.

## Auto-resolution configuration
You can configure the amount of time before an incident is automatically resolved, or turn it off completely, in the service settings:

1. Go to **Services** :fa-arrow-right: **Service Directory**.
2. Click on the service you wish to edit.
3. Select the **Response** tab and click **Edit** next to **Assign and Notify**.
4. Select **Resolve open incidents after [TIME]** and select the time period from the dropdown.
5. Click **Save Changes**.