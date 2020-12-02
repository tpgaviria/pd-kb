---
title: "Global Event Rules"
slug: "global-event-rules-deprecated"
excerpt: "Route events to a single endpoint and create rules defining who is notified based on event content"
hidden: true
createdAt: "2017-12-13T18:00:44.315Z"
updatedAt: "2020-01-09T20:50:38.124Z"
---
Global event rules allow you to route events to a single endpoint and write rules to define which team receives alerts based on content in those events.

API-based events with JSON/[PD-CEF fields](doc:pd-cef) and email-based events are both supported.
[block:api-header]
{
  "title": "Configuring Global Event Rules"
}
[/block]
To access global event rules, navigate to the **Configuration** menu and select **Event Rules**. 
[block:callout]
{
  "type": "warning",
  "body": "Account Owners and Global Admins are able to create global event rules. To enable all users with view-only access to event rules, please contact [PagerDuty Support](support@pagerduty.com).",
  "title": "Required User Permissions"
}
[/block]
To create a rule:

1. Click **New Event Rule**. You will be asked to fill in 3-4 sections depending on your preferences: 
    * **Which events should this rule apply to?**: Indicate the *condition(s)* that should be met when global event rules search inbound events. 
      * **When should this rule be active?**: Indicate whether you would like this rule to always be active, only active at a scheduled time, or on a recurring schedule. 
    * **What actions should be performed on these events?** Indicate what *actions* you would like global event rules to do with an event that contains the selected *condition(s)*.
    * **Alert Behavior**: 
      * **Route alert to a service** *(optional)*: Routing to a service determines who will be notified of the event. Events routed to a service will follow the incident and notifications settings of that service, including escalation policies, alert grouping behavior, and dynamic notifications.
      * **Do not route alert to a service**: If you choose not to route events to a service, the events will be suppressed, and no incident will be opened.
    * **Change the severity of the alert** *(optional)*: [Severity](https://support.pagerduty.com/docs/dynamic-notifications) defines the estimated impact of an event, and can be used to automate the notification urgency of the related incident. Notification settings are defined on a service’s settings page. If you do not set the severity, PagerDuty will apply the severity level within the event data, if it exists.
2. Click **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1de7f83-global-event-rules-overview.png",
        "global-event-rules-overview.png",
        1734,
        1360,
        "#f2f2f2"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]
You can either configure these settings in the UI, or use the [global event rules API](https://v2.developer.pagerduty.com/v2/docs/global-event-rules-api).

##Supported Fields for Writing Rules

###Events Sent Through the API
You can use the JSON field names directly, i.e. `description`. For nested fields, separate names with a dot (.), i.e. `payload.summary`.

If you are sending data through additional fields, enter them exactly as they are sent to PagerDuty. For example, if your events have a `tags` field, enter that field name in your rule *condition* as `tags`.

###Events Sent Through Email
Rules may be based on the content of an email by entering the appropriate email field as the event field. The most common email fields are:

- `headers.from.0.address` (the from address)
- `headers.subject` (the subject line)
- `body` (the email body)

If your monitoring tool sends emails with **custom headers**, you can create rules based on those headers by including the prefix headers in front of the email header name when you enter that field name in your rule *condition*.

###Field Selector
You can view and choose relevant fields from your most recent event by using our JSON field selector:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5b5a65b-event-management-field-extractor.png",
        "event-management-field-extractor.png",
        2718,
        1320,
        "#cbcccf"
      ]
    }
  ]
}
[/block]
The JSON field selector will appear when you select **View a recent API event...** in the dropdown that appears when you click **Enter field name** while writing your rules.

##Field Extraction

Field extraction allows you to copy important data from one event field to another. Some fields can be used by PagerDuty for automation.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f511de-event-management-extract-dedup-key.png",
        "event-management-extract-dedup-key.png",
        1740,
        810,
        "#f0f0f0"
      ]
    }
  ]
}
[/block]
The `description` field is used to create the incident title. Titles should be descriptive and tell responders what is happening.

The `dedup_key` field is used to merge events into a single alert. Events with the same dedup_key can update the status of the alert they are automatically merged into.

Extraction rules must use valid [RE2 regular expression syntax](https://github.com/google/re2/wiki/Syntax).

##Formatting Rules

###What Operations Are Supported?
- A field contains/does not contain a value.
- A field equals/does not equal a value (this operation requires the field to be passed in as a string).
- A field exists/does not exist.
- A field matches/does not match a regular expression. Regular expressions must use [RE2 syntax](https://github.com/google/re2/wiki/Syntax ). Note that unlike service-level event rules, global rules only support one (e.g. the first) capture group within the regex.
[block:callout]
{
  "type": "info",
  "title": "",
  "body": "If you are new to regex, we suggest testing your rules with an online regex tester. [regex101](https://regex101.com/) and [rubular](http://rubular.com/r/G0ViTWxgFO) are both excellent tools."
}
[/block]
### How Do I Use Negative Operations?
Rules with negative operations, such as “does not contain” or “does not equal”, will match events when the field in question does not exist. As an example:

> - severity field does not equal `critical`

These rules will also match any events where the severity field does not exist. If you'd like to avoid this, you must add an additional condition that matches only when the field exists. For example:

When all conditions are true:
> - severity field exists
> - severity field does not equal `critical`

Note that you must select that all conditions must be true for the rule to match.

###What Actions Are Supported?
[block:parameters]
{
  "data": {
    "h-0": "Action",
    "0-1": "Send events to a service and follow the settings on that service for creating incidents and sending notifications to responders. For more information on defining how notifications will be sent to responders, see [service urgencies.](doc:dynamic-notifications)",
    "0-0": "Route to a service",
    "1-0": "Route to a service and suppress",
    "1-1": "No incident is created, no notifications are sent. Events can still be routed to a service, meaning they have the associated service name listed in the Alerts table.",
    "2-0": "Set severity",
    "2-1": "For events that do not have a [severity level](doc:pd-cef#section-pd-cef-fields) (such as emails), users can define one, or a new severity level can be set. \n\nSeverity can be used for [Dynamic Notifications](doc:dynamic-notifications), which are defined by the service settings. To use Dynamic Notifications, the events must be routed to a service that sets Dynamic Notifications based on severity levels.",
    "h-1": "Description",
    "3-0": "Do not route to a service",
    "3-1": "You may choose not to route events to a service. In this case, your events are [suppressed](doc:event-management#section-suppression) and will not be connected to a service. This is because the rules that determine incident settings (such as escalation policy assignment and notification settings) are associated with a service, and non-routed events do not have a service associated with them."
  },
  "cols": 2,
  "rows": 4
}
[/block]
#Global Event Rules Endpoint

The **Event Rules** page (**Configuration** <i class="fa fa-arrow-right" aria-hidden="true"></i> **Event Rules** :fa-arrow-right: **Incoming Event Source**) will display your routing integration key, as well as an endpoint and email address that you can use for routing. This integration key is case-sensitive.

You can use the [V1](https://v2.developer.pagerduty.com/docs/events-api) or [V2](https://v2.developer.pagerduty.com/docs/events-api-v2) events endpoint as well.

If using the [V1 events API](https://v2.developer.pagerduty.com/docs/events-api), use your routing integration key as your `service_key` value in your event JSON.

If using the [V2 events API](https://v2.developer.pagerduty.com/docs/events-api-v2), use your routing integration key as your `routing_key` value in your event JSON.
[block:api-header]
{
  "title": "Troubleshooting Global Event Rules"
}
[/block]
###If None of Your Rules Are Working
This may be because you have not set up the integration key correctly in your monitoring tool. For event rules to work, you must use the integration key found to the right of your rules list under Integration Settings. If you are sending events through the Events API, use this integration key in the `service_key` field ([Events API V1](https://v2.developer.pagerduty.com/docs/events-api)) or the `routing_key` field ([Events API V2](https://v2.developer.pagerduty.com/docs/events-api-v2)).

###If One of Your Rules Is Not Working
This may be because you have not entered the field name correctly in the rule conditions. The field name is based on the data that is sent to PagerDuty, and *is not necessarily the same as the field name visible in the alert or incident in PagerDuty*. Refer to the data in your monitoring tool or integration for the correct field name.

For nested fields, format the field name with periods separating each level. For example, `field_group.sub_field.another_sub_field`.

If you have confirmed your field names are set up correctly, you may have a rule that is too broad that is ordered before the rule that is not working. Re-order your rules so that more specific rules are listed first. 

You may also want to check for rules with negative conditions ("does not contain" or "does not equal"), as these rules can match many events that do not contain the specified field. (See [How do I use negative operations?](#section-how-do-I-use-negative-operations?))

For nested fields, format the field name with periods separating each level of the object path. For example, `field_group.sub_field.another_sub_field`.
[block:callout]
{
  "type": "warning",
  "body": "If any object path specified in a condition rule is not present in the inbound event body (note, *paths are case sensitive*), the condition will not be met.\n\nFor instance, if one were add a condition to a rule that `payload.custom_details.long_description` must not contain the string `staging`, and the resulting event that comes in does not contain a property `payload.custom_details.long_description`, and all conditions must be true, then the rule will not apply because this particular condition would not be met and thus not all conditions would be met.",
  "title": "Default Condition Evaluation Behavior if the Object Path Does Not Exist"
}
[/block]

[block:api-header]
{
  "title": "Adding Notes With Event Rules"
}
[/block]
[Notes](https://support.pagerduty.com/docs/editing-incidents#section-add-a-note-to-an-incident) can be used to help responders resolve incidents quicker by including information or links related to the system that the event comes from.

Notes via global event rules functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform.

Notes are added to incidents via the global event rules engine workflows. Users first set specific criteria in which notes information will be added. Users can then detail which information or links they want to include in the note. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ae21f9d-event-intelligence-add-notes.png",
        "event-intelligence-add-notes.png",
        1236,
        468,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]
If the event is added to an incident, notes can be seen on that incident's details page. Notes added by event rules will list the first account user as the author.


# Setting Priority with Event Rules
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Incident priority is available on Team, Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan including the incident priority feature."
}
[/block]
To configure an event rule to set incident priority: 

1. When creating or editing a rule, under Alert Behavior, ensure that you have selected **Route alert to a service** and that you've assigned the **service** they should be routed to. 
2. You should now see the Adding Context to Incidents section below. Set the rule to **Change the priority of the incident** and select your desired **priority**. The priority of an incident will be based on the conditions defined above in **Which events should this rule apply to?** section. 
3. Click **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ce319ee-ger-change-priority.png",
        "ger-change-priority.png",
        934,
        332,
        "#cbcece"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Scheduled Event Rules"
}
[/block]
You can gain a greater degree of control over your event rules by detailing a single specific time in the future in which they will be active. This can be useful for testing rules and for planned maintenance. 

Scheduled Rules functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform.

Scheduled Rules are set within global event rules engine workflows. Users first set a single specific time window in which the rules they have created will apply. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7911fe-event-intelligence-scheduled-event-rules.png",
        "event-intelligence-scheduled-event-rules.png",
        916,
        478,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
Users can then specify what actions are to be performed within this time window. For instance, users might want to suppress notifications.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d0e6d05-event-intelligence-threshold-alerts.png",
        "event-intelligence-threshold-alerts.png",
        1798,
        306,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
In the above example, alerts will be suppressed unless 6+ alerts come in within a 10 minute window. If alerts surpass that threshold, then an incident will be triggered. 
[block:api-header]
{
  "title": "Recurring Event Rules"
}
[/block]
If there are specific hours of the day or day(s) within a week when you would like an event to follow a particular rule, you can set its activity on an automatic, weekly recurring schedule. This feature is specific to each individual event rule and you can make additional changes, such as changing severity/priority, based on time of day. 

The Recurring Event Rules functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform.

To set a recurring schedule for an event rule, go to **Configuration** :fa-arrow-right: **Event Rules**, select the :fa-cog: dropdown next to the rule and then click **Edit Rule**. In the **When should this rule be active?** section, select **On a recurring schedule**, specify the hours and day(s) when you would like the rule to be active, and then click **Save**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3236cbb-event-intelligence-recurring-rules.png",
        "event-intelligence-recurring-rules.png",
        1712,
        484,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Disable Event Rules"
}
[/block]
If you would like to pause an event rule’s activity, you can disable and re-enable it at a later time. This feature allows you to manually initiate integration-specific disablement during maintenance or testing on a tool. 

The Disable Rules functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform.

To temporarily disable a rule, go to **Configuration** :fa-arrow-right: **Event Rules**, then click the :fa-cog: dropdown next to the rule and click **Disable Rule**. While the rule is disabled, you will see a 
<span style="border: 1px solid #484848 !important; border-radius: 25px; padding: 4px 10px;">:fa-pause: <strong>Disabled</strong></span> pill marker in the **Matching conditions** section of the rule. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6e0c730-event-intelligence-disable-event-rule.png",
        "event-intelligence-disable-event-rule.png",
        558,
        798,
        "#f5f6f6"
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
        "https://files.readme.io/84c8978-ger-disabled-pill.png",
        "ger-disabled-pill.png",
        398,
        414,
        "#eceaeb"
      ]
    }
  ]
}
[/block]
If you would like to enable the rule again, click the :fa-cog: dropdown and click **Enable Rule**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f178465-ger-enable-rule.png",
        "ger-enable-rule.png",
        510,
        726,
        "#f7f7f8"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Threshold Alerts"
}
[/block]
Receive PagerDuty notifications only when your customized alert conditions breach your specified limits. In this way, responders effectively reduce alert noise without missing critical issues. 

The Threshold Alerts functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform.

Thresholds are set within global event rules engine workflows. Users first set specific rule criteria, which, if met, will be included in their threshold count.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d3822b7-event-management-create-condition.png",
        "event-management-create-condition.png",
        2294,
        372,
        "#f0f0f1"
      ]
    }
  ]
}
[/block]
Users can then select a service to route it to in the **Alert Behavior** section.  
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6a79f9d-ger-route-to-service.png",
        "ger-route-to-service.png",
        814,
        268,
        "#f0f0f0"
      ]
    }
  ]
}
[/block]
Once the service is selected, you will see an **Incident Behavior** section appear below. Here you can configure threshold alerting.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1e0c8ad-event-intelligence-threshold-alerts.png",
        "event-intelligence-threshold-alerts.png",
        1798,
        306,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
In this example, if 6+ alerts come in in a 10 minute time window, the threshold will be exceeded and a PagerDuty incident will be created. 

##Thresholds and Alert Grouping

PagerDuty’s Alert Grouping feature can be used in combination with Threshold Alerting in order to reduce the number of incidents created, minimize noise, and keep the responder focused on the issue. While Threshold Alerting determines how many alerts are required to create an incident and notify the on-call user, Alert Grouping can take this a step further by then grouping any alerts that exceed this threshold into a single, open incident. 

The current alert grouping options that are included with the Event Intelligence package are [Time-Based Alert Grouping](https://support.pagerduty.com/docs/time-based-alert-grouping) and [Intelligent Alert Grouping](https://support.pagerduty.com/v1/docs/intelligent-alert-grouping). 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0d913d-ger-iag.png",
        "ger-iag.png",
        1774,
        1134,
        "#edeeed"
      ]
    }
  ]
}
[/block]
Users can view all alerts, including those that do not breach the set thresholds, in the Alerts table. Alerts not breaching the thresholds will appear in the table with a status of `Triggered (Suppressed)`. When the threshold is breached, the alert that exceeded the threshold will appear with a `Triggered` status. 

This alert will also create an incident, which can be viewed in the Incidents Table.
[block:api-header]
{
  "title": "FAQ"
}
[/block]
###Are email integration filters/rules, or event transformers supported?
For events routed by the routing engine, service-level logic applies. Event transformers are currently not supported.

###Are events transformed into our Common Event Format (CEF)?
Events that are routed are transformed into CEF. Custom Event Transforms (CETs) are not supported.

###What happens to events that don’t match any rules?
Currently, any events that are sent through global event rules and do not match any rules are suppressed. You can find them in the alerts table. You can change this default behavior by editing the catch-all rule at the bottom of your rules list.

###Is there a way to bulk add/delete/edit global event rules?

Yes. You can leverage the [global event rules API](https://v2.developer.pagerduty.com/v2/docs/global-event-rules-api) to create a script which will allow this functionality.

###Once an event is routed to a service from my global event rules, will the event rules I set up on my service be respected as well?

Yes. [Service-level event rules](https://support.pagerduty.com/docs/event-management#section-suppression-and-event-rules) can be used in conjunction with your global event rules this way.

###Can I send a second event with the same `dedup_key` and have it follow different actions?

If a second event with the same incident key is passed and de-duplicated into the open incident via global (or service) event rules, the actions are not followed (ie. raising priority, adding a note) **except** for when severity is raised.