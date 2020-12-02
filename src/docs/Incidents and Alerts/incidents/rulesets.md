---
title: "Rulesets"
slug: "rulesets"
hidden: false
metadata: 
  title: "Rulesets"
createdAt: "2019-06-25T21:49:19.741Z"
updatedAt: "2020-11-24T00:33:15.380Z"
---
The new Rulesets feature allows you to route events to an endpoint and create collections of event rules, which define sets of actions to take based on event content. Accounts with Free, Starter (legacy), Team (legacy), and Professional plans will have access to a single global ruleset, while Business and Digital Operations plans will now have the ability to create multiple, unlimited global rulesets. For these higher-tier plans, each ruleset will have an individual endpoint and they can be associated with specific Teams, giving Team Managers edit-access to their rules.


[block:callout]
{
  "type": "info",
  "title": "What’s the difference between Rulesets and Global Event Rules?",
  "body": "Global Event Rules was a legacy feature, where all accounts only had access to a single set of global event rules, and users could configure service event rules with limited actions. The new Rulesets feature is an extension of Global Event Rules, and it allows you to create multiple, unlimited rulesets that can be assigned to Teams, and it expands actions available for service event rules."
}
[/block]
#Ruleset Types

There are two ways to organize event rules in your account, based on your integration use case:

* [Global Rulesets](#section-global-rulesets): When a new integration event stream has more than one service destination, you can use global event rules and a global Integration Key to ingest and route your events to the right service. If your existing service integrations have the same event stream integrated into multiple services, consider migrating those integrations to a global ruleset and use routing rules to direct events to the correct services. Global rulesets support event rules for email integrations, but do not support Custom Event Transformers.
* [Service Event Rules](#section-service-event-rules): When integrations already exist on a Service, you can use Service Event Rules to evaluate your events instead of migrating them to a global event rule. Service event rules support Custom Event Transformers, but do not support event rules for email integrations. 

##Global Rulesets

Events sent to a global ruleset Integration Key or emails sent to a global email address will be evaluated by the destination global ruleset. In order to create alerts and incidents on a destination service, a global event rule must have **Create an incident on a service** selected as one of its actions. When an event is routed to a service that contains service event rules, then it will also be evaluated by service event rules at the time of event ingestion, after global event rules have been evaluated. 

All plans will have access to a Default Global Ruleset that is available out-of-the-box. Accounts on Business and Digital Operations plans have the option to create multiple additional rulesets, and they can opt to assign these additional rulesets to [Teams](doc:teams). 

To access your Default Global Ruleset:

**Free, Professional, Starter (legacy), and Team (legacy) plans**: Your account will come with a single global ruleset, which you can access by navigating to **Services** :fa-arrow-right: **Event Rules**. Click **New Event Rule** to [begin creating event rules](#section-create-event-rules).

**Business and Digital Operations plans**: Navigate to **Services** :fa-arrow-right: **Event Rules** :fa-arrow-right: **Default Global Ruleset**. Click **New Event Rule** to [begin creating event rules](#section-create-event-rules). If you would like to create additional rulesets outside of this Default Global Ruleset, follow instructions in the next section. 

###Create Multiple Rulesets and Assign Teams
[block:callout]
{
  "type": "warning",
  "body": "* Account Owners, Admins and Global Admins can create/edit/delete rulesets by default. Users with Team Manager roles can create/edit/delete rulesets for their assigned Team. \n* Business and Digital Operations plans have the ability to create multiple, unlimited global rulesets, each of which can be assigned to a Team. **Note**: If you do not assign a new ruleset to a team, then it will behave as an additional global ruleset.\n* Account Owners and Admins have view access to all rulesets. Users below Admin will only be able to view rulesets associated with Teams they are assigned to. If you would like *all* users to have view access to rulesets, please contact [PagerDuty Support](support@pagerduty.com).",
  "title": "Required User Permissions"
}
[/block]
1. Navigate to **Services** :fa-arrow-right: **Event Rules** :fa-arrow-right: **Create Ruleset**. 
2. Enter a **Name**, *optionally* select a **Team** and click **Create Ruleset**. 
3. Click **New Event Rule** to begin [creating event rules](#section-create-event-rules). If you would like to create multiple rulesets with unique, individual endpoints, repeat the above steps as needed. 

##Service Event Rules

Events that are sent to any [service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) Integration Key will be evaluated by the event rules present on that service at the time that an event is ingested. This behavior is different from global rulesets, which apply rules to all inbound events sent to a global integration key. Service event rules are available on all plans. 

###Create Service Event Rules
[block:callout]
{
  "type": "warning",
  "title": "Requirements",
  "body": "In order to use service event rules, the service must be [configured to create both Alerts and Incidents](https://support.pagerduty.com/docs/alerts#section-enabling-alerts)."
}
[/block]
To create a service event rule:

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the **name** of the service where you would like to configure your event rule.
2. Click the **Response** tab. If you have not configured any rules for this service, click **Add One**. If you have configured other rules for this service, click the **`[#]` service event rule** link and then click the **+New Event Rule** button.
3. Follow the instructions in steps 1-4 of [Create an Event Rule](#section-create-event-rules). 

#Create Event Rules

Event rules allow you to set actions that should be taken on events that meet your designated rule criteria. You can choose whether you would like criteria-satisfying events to trigger incidents, or if you would like them to be suppressed and viewable in your [Alerts](https://support.pagerduty.com/docs/alerts#section-viewing-alerts) table. Depending on your plan and account add-ons, you may have [additional actions](#section-event-rule-actions) to take on incidents or suppressed alerts. 

Event rules must be created in a global ruleset or on a service. Follow the instructions in the above sections to determine [where you are creating your event rules](#section-ruleset-types), and then proceed with the following steps.

Both Global Event Rules and Service Event Rules can also be managed via [API](https://support.pagerduty.com/docs/rulesets#rulesets-api).

## Recommended Preparation
We recommend sending an alert to your PagerDuty account in order to inspect the alerts’ JSON key:value pairs and build rule conditions from there. Please [read our API documentation](https://developer.pagerduty.com/api-reference/reference/events-v2/openapiv3.json/paths/~1enqueue/post) for more information on how to send a simple alert into PagerDuty.

Example in CURL:
[block:code]
{
  "codes": [
    {
      "code": "curl --location --request POST 'https://events.pagerduty.com/v2/enqueue' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n \"payload\": {\n   \"summary\": \"Example alert on host2000.example.com\",\n   \"timestamp\": \"2020-06-17T08:42:58.315+0000\",\n   \"source\": \"monitoringtools:cloudvendor:central-region-dc-01:002000987:cluster/api-stats-prod-003\",\n   \"severity\": \"info\",\n   \"component\": \"postgres\",\n   \"group\": \"prod-datapipe\",\n   \"class\": \"deploy\",\n   \"custom_details\": {\n     \"ping time\": \"1600ms\",\n     \"load avg\": 0.90\n   }\n },\n \"dedup_key\": \"uniquededupkey\",\n \"routing_key\": \"R015DM1NF3UYE4NSWN8WBF6FS062ZZZZ\",\n \"images\": [{\n   \"src\": \"https://www.pagerduty.com/wp-content/uploads/2016/05/pagerduty-logo-green.png\",\n   \"href\": \"https://example.com/\",\n   \"alt\": \"Example text\"\n }],\n \"links\": [{\n   \"href\": \"https://example.com/\",\n   \"text\": \"Link text\"\n }],\n \"event_action\": \"trigger\",\n \"client\": \"Sample Monitoring Service\",\n \"client_url\": \"https://monitoring.example.com\"\n}'",
      "language": "curl"
    }
  ]
}
[/block]
This alert will be visible in the **Base conditions from the incoming JSON events below** section when you are configuring a rule.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f50cfc0-image.png",
        "image.png",
        2160,
        888,
        "#c3c8d4"
      ]
    }
  ]
}
[/block]
Within the sample alert JSON body, you have the option to click the decided key:value pair, and this will automatically populate the relevant rule’s conditions.

##Step 1: When events match these conditions

Depending on your preferences, indicate the **condition(s)** that should be met when this event rule searches inbound events. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/100cb18-rulesets-conditions.png",
        "rulesets-conditions.png",
        1840,
        570,
        "#d6dff7"
      ]
    }
  ]
}
[/block]
1. Select if you would like this rule to be run when **All** *or* **Any** of the following conditions are met. If you select **All**, *every* condition must be met for the rule to run. If you select **Any**, then *only one* condition must be met for the rule to run.
2. In the first condition box, select the **event field** that you would like the rule to search for from the following options:


* **Base conditions from the incoming JSON events below**: Depending on your account's activity, you may have recent events appear on the right side of the screen. To add fields from these events, click **Show Details** and click on the **field** you wish to use for this condition. This will auto-populate the field in the left hand condition box, where you may also edit and/or delete if necessary. 
* **Events Sent Through the API**: You can use the JSON field names directly, i.e. `description`. For nested fields, separate names with a dot (.), i.e. `payload.summary`. If you are sending data through additional fields, enter them exactly as they are sent to PagerDuty. For example, if your events have a `tags` field, enter that field name in your rule condition as `tags`.
* **Events Sent Through Email** (**Note**: Only available in global rulesets, not with service event rules): Rules may be based on the content of an email by entering the appropriate email field as the event field. The most common email fields are:
   * `headers.from.0.address` (the from address)
   * `headers.subject` (the subject line)
   * `body` (the email body)


If your monitoring tool sends emails with **custom headers**, you can create rules based on those headers by including the prefix headers in front of the email header name when you enter that field name in your rule *condition*.


3. In the middle dropdown, select how the above event field should be **filtered**: 


* The field contains/does not contain a value.
* The field equals/does not equal a value (this operation requires the field to be passed in as a string).
* The field exists/does not exist.
* The field matches/does not match a regular expression. Regular expressions must use [RE2 syntax](https://github.com/google/re2/wiki/Syntax ). Note that unlike service-level event rules, global rules only support one (e.g. the first) capture group within the regex.


[block:callout]
{
  "type": "info",
  "body": "Rules with negative operations, such as “does not contain” or “does not equal”, will match events when the field in question does not exist. As an example:\n\n> - severity field does not equal `critical`\n\nThese rules will also match any events where the severity field does not exist. If you'd like to avoid this, you must add an additional condition that matches only when the field exists. For example:\n\nWhen all conditions are true:\n> - severity field exists\n> - severity field does not equal `critical`\n\nNote that you must select that all conditions must be true for the rule to match.",
  "title": "Negative Operations"
}
[/block]
4. In the last condition box, enter a **value** to apply to the event field and its filter. 
5. If you only have one condition, proceed with the following steps. If you would like to add more than one condition, click **Add Condition** and repeat steps 1-4 as many times as needed. When you are finished adding conditions, proceed with the following steps.

## Step 1.1: Customize Event Fields (Optional)

## Dynamic Field Enrichment & Extraction

Dynamic Field Enrichment & Extraction is a tool to normalize event payloads using Event Rules. This capability allows you to copy important data from any combination of source event fields into any PagerDuty Common Event Format (CEF) field. Translate difficult machine terms and code into helpful context for responders so they can effectively respond to the problem. Dynamic Field Enrichment & Extraction can also be used to enhance Event Intelligence capabilities by customizing alerts, influencing the Intelligent Alert Grouping and Intelligent Triage machine learning algorithms. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c52eec6-dad0bfe-DFEE_Configuration.png",
        "dad0bfe-DFEE_Configuration.png",
        1265,
        608,
        "#e7ecf8"
      ]
    }
  ]
}
[/block]
Dynamic Field Enrichment & Extraction is composed of two functions:

* **Create Custom Variables**: Capture snippets from a source event using regex matching for later use.
* **Replace Common Event Format Fields**: Enrich and update and CEF field or even create new key values within the Custom Details object using custom variables. When events are sent to PagerDuty, they are transformed into Common Event Format. Previously, Event Rules could only replace Summary or add a Deduplication Key, and these abilities were limited to a direct mapping from one field as a full replacement. Now, this ability is extended to replace any CEF field or even create new key values within the Custom Details object.

Dynamic Field Enrichment & Extraction is available with both Global Event Rules and Service Event Rules. For Service Event Rules, custom variables must extract from CEF fields of the event payload where for Global Event Rules, custom variables can extract from any field of the event payload.

### Configure Dynamic Field Enrichment & Extraction

1. In the **Customize Event Fields** section of your event rule, under **Define Custom Variable**, create a variable from event fields by entering a **Name**. Use a short descriptive name to represent the value that you will use later on to define a CEF field. Then enter a **Value** for the variable and the origin **Source**. Values are defined using valid RE2 regular expression syntax, and you can add as much complexity as you want with Regex to customize what part of each field you capture into a variable. You may also use **Sample Events** on the right as a reference for variables by clicking **Show Details**. You may add multiple variables by clicking **Add Variable** in the upper right of the Customize Event Fields panel, or delete variables by clicking the trashcan icon directly to the right of the variable.

2. Next, under **Replace Event Field**, select your preferred **Common Event Field (CEF)** from the left dropdown. Select whether you would like to use **Regex** or a **Template** from the right hand dropdown. If you are using a text Template, you can reference a variable defined in step 1 using `{{ }}` brackets (e.g. `{{class}}`) in the **Value** field. If you are using Regex, enter a **Value** and the origin **Source**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0ab9e22-d88fb46-DFEE_Alert_Logs.png",
        "d88fb46-DFEE_Alert_Logs.png",
        2237,
        470,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
## Set a Deduplication Key with Event Rules

The `dedup_key` field is used to merge events into a single alert. Events with the same `dedup_key` can update the status of the alert they are automatically merged into.

To set a deduplication key:

1. In the **Customize Event Fields** section of your event rule, under **Define Custom Variable**, create a variable from event fields by entering a **Name**, **Value** and the **Source**. You may use **Sample Events** on the right to create these variables.
2. Next, under **Replace Event Field**, in the **Event Field (CEF)** field select **Dedup Key** from the dropdown. Select whether you would like to use **Regex** or a **Template** from the right hand dropdown. If you are using a Template, you can reference a variable defined in step 1 using `{{variable name here}}` brackets as the **Value**. If you are using Regex, enter a **Value** and the **Source**.

## Add or Replace the Summary Field with Event Rules

The `summary` field is used to create the incident title. Titles should be descriptive and tell responders what is happening.

To set a summary field:

1. In the **Customize Event Fields** section of your event rule, under **Define Custom Variable**, create a variable from event fields by entering a **Name**, **Value** and the **Source**. You may use **Sample Events** on the right to create these variables.
2. Next, under **Replace Event Field**, in the **Event Field (CEF)** field select **Summary** from the dropdown. Select whether you would like to use **Regex** or a **Template** from the right hand dropdown. If you are using a Template, you can reference a variable defined in step 1 using `{{variable name here}}` as the **Value**. If you are using Regex, enter a **Value** and the **Source**.

## Using Dynamic Field Enrichment & Extraction for Email Events

Dynamic Field Enrichment & Extraction capabilities are available only for email events sent to Global Event Rules. Users can extract from the email event using regex matching into multiple variables. Currently, only Summary and Dedup_Key Common Event Fields can be replaced for email events.

Service Event Rules do not apply to emails because they aren’t CEF and therefore, dynamic field enrichment & extraction capabilities are not available for email service integrations. 

## Enhancing Alert Grouping Capabilities

Dynamic Field Enrichment & Extraction can be powerfully leveraged for improving the accuracy for [Intelligent Alert Grouping](https://support.pagerduty.com/docs/intelligent-alert-grouping) and [Content Based Alert Grouping](https://support.pagerduty.com/docs/content-based-alert-grouping). This new capability can add and replace key information from the raw event payload to create more contextualized alerts, allowing for more flexible and accurate alert grouping options.

##Step 2: Do these things

Select which **actions** you would like this rule to take when an event meets the **condition(s)** set in Step 1. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0d07741-rulesets-actions.png",
        "rulesets-actions.png",
        1838,
        288,
        "#aec1f1"
      ]
    }
  ]
}
[/block]
1. Select whether you would like to **Create an incident** *or* **Suppress Alert**:


* **Create an incident on a service** (Global Rulesets)/**Create an incident** (Service Event Rules): On the right side of the screen, you will see the **Once your conditions are met, what would you like to happen?** section appear. Indicate your preferred settings in the following sections:
   * **Route to a Service** (Required for global rulesets only): In this dropdown, select the **service** where events that satisfy your conditions should be routed to.
   * [Actions](#section-event-rule-actions) *(Optional)*: Depending on your plan and add-on packages, you may have additional optional incident actions to choose from, such as creating an incident immediately or with trigger thresholds, setting severity, setting priority, adding notes to incidents, setting a deduplication key and/or adding/replacing the description field. 
    Once you have configured your desired actions, proceed to Step 3. 


* **Suppress Alert (do not create an incident)**: Suppressing alerts means that alerts created by events which match your specified conditions will not create incidents or notify responders. These alerts are viewable in the [Alerts](https://support.pagerduty.com/docs/alerts#section-viewing-alerts) table as suppressed. You have the option to choose from the following actions:
   * **Route to a service** *(Optional for global rulesets)*: To route the suppressed alert to a service without creating an incident, **check** this checkbox and select your preferred **service** from the dropdown.
   * [Actions](#section-event-rule-actions) *(Optional)*: Depending on your plan and add-on packages, you may have additional optional actions to choose from, such as setting severity, setting priority, setting a deduplication key and/or adding/replacing the description field. 
   Once you have configured your desired actions, proceed to Step 3.


## Event Rule Actions

In order to set an event rule to perform custom actions on incidents or suppressed alerts that meet the rule’s conditions, you must first follow the instructions in Step 1. Once completed, you will find these *optional* actions on the right side of the screen under **Once your conditions are met, what would you like to happen?**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d9c271-rulesets-event-rule-actions.png",
        "rulesets-event-rule-actions.png",
        931,
        694,
        "#ebf1fa"
      ]
    }
  ]
}
[/block]
## Paused Incident Notifications

As a new [Rulesets](doc:rulesets) feature, paused incident notifications allows rules to be set to create alerts, but pause incident creation and notifications for a predefined amount of time. During the pause period, new alerts will be viewable in the [Alerts table](https://support.pagerduty.com/docs/alerts#alerts-table) with a **Suspended** status. These suspended alerts have new actions, allowing users to **Trigger** an incident from the alert during the pause period, or **Resolve** the alert, preventing the incident and its notifications from being created altogether.
[block:callout]
{
  "type": "info",
  "body": "* The Paused Incident Notifications functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to purchase this product.\n* Paused Incident Notifications is only available on incidents generated by our [Events API](https://developer.pagerduty.com/docs/events-api-v2/overview/), and does not work with those generated from our [REST API](https://developer.pagerduty.com/docs/rest-api-v2/rest-api/).",
  "title": "Notes"
}
[/block]
To configure paused incident notifications:

1. In [Step 2: Do These Things](https://support.pagerduty.com/docs/rulesets#step-2-do-these-things), select **Create an incident on a service**. In the right hand panel in **Incident Creation** section, select **Create alert but pause notifications** as an event rule action. Enter the amount of time you would like to pass before an incident and notifications are created in the **Suspend alert for _ second(s) before triggering incident** field.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c8e8c2c-paused-incident-notifications-rule-actions.png",
        "paused-incident-notifications-rule-actions.png",
        487,
        194,
        "#f6eae8"
      ]
    }
  ]
}
[/block]
3. Click **Save Rule**.

### View and Take Action on Paused Alerts

To view alerts in a paused state, navigate to the **Alerts** table in the upper menu of the web app. Alerts with paused incident notifications will have a **Suspended** status:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0057fea-delayed-incident-notif-suspended-alert.png",
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
        "https://files.readme.io/43399fa-delayed-incident-notif-trigger-resolve.png",
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
        "https://files.readme.io/1cd7572-delayed-incident-notif-alert-log-entry.png",
        "delayed-incident-notif-alert-log-entry.png",
        762,
        185,
        "#f6f6f6"
      ]
    }
  ]
}
[/block]
## Suppress, but Create Triggering Thresholds with Event Rules

Receive PagerDuty notifications only when your customized alert conditions breach your specified limits. In this way, responders effectively reduce alert noise without missing critical issues. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The Threshold Alerts functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to purchase this product."
}
[/block]
To set a threshold, enter the **number value** of alerts that should be suppressed within a **number value** of **minutes, hours or days** before an incident is created. For example, if we set the following threshold:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b82fe02-rulesets-threshold-alerts.png",
        "rulesets-threshold-alerts.png",
        1492,
        172,
        "#f4f4f5"
      ]
    }
  ]
}
[/block]
Then if 6 or more alerts come in within a 10 minute time window, the threshold will be exceeded and an incident will be created. 

## Set Severity with Event Rules

For events that do not have a [severity level](doc:pd-cef#section-pd-cef-fields) (such as emails), users can define one, or a new severity level can be set. All [current pricing plans](https://www.pagerduty.com/pricing/) include incident severity.

To set severity, under **Alert Behavior**, check the **Set Severity** checkbox and select **info, error, warning or critical** from the dropdown.

Severity can be used for [Dynamic Notifications](doc:dynamic-notifications), which are defined by the service settings. To use Dynamic Notifications, the events must be routed to a service that sets Dynamic Notifications based on severity levels.

## Set Priority with Event Rules

[Incident priority](https://support.pagerduty.com/docs/incident-priority) allows the classification of incidents based on a level of prioritization. Incident priority must be [enabled on your account](https://support.pagerduty.com/docs/incident-priority#section-enabling-incident-priority) before it can be set with event rules. 

To set priority, under **Alert Behavior**, check the **Set Priority** checkbox and select your desired **priority level** from the dropdown.

## Add a Note to an Incident with Event Rules

[Notes](https://support.pagerduty.com/docs/editing-incidents#section-add-a-note-to-an-incident) can be used to help responders resolve incidents quicker by including information or links related to the system that the event comes from.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Adding notes via event rules is a feature of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to purchase this product."
}
[/block]
To add a note with event rules, under **Additional Context**, enter the text of the note that you would like to be added to an incident that meets your rule’s criteria. 

## Set a Custom Trigger / Resolve Action with Event Rules

If you would like to automatically trigger an alert or resolve an alert based on your event rule conditions, under **Enrichment & Transformations**, check **Set a custom trigger / resolve action** and select **Always trigger an alert** or **Always resolve an alert**. All pricing plans include incident custom trigger/resolve actions with event rules.

## Field Extraction with Event Rules

Field extraction allows you to copy important data from one event field to another. Some fields can be used by PagerDuty for automation. Extraction rules must use valid [RE2 regular expression syntax](https://github.com/google/re2/wiki/Syntax). You will find field extraction options in the **Copy important data from one event field to another. Some fields can be used by PagerDuty for automation** section of an event rule.

### Set a Deduplication Key with Event Rules

The `dedup_key` field is used to merge events into a single alert. Events with the same `dedup_key` can update the status of the alert they are automatically merged into.

To set a deduplication key, check **Set a deduplication key** and enter an **extract pattern** in the first box and enter the **Source Field** in the second box.

### Add or Replace the Summary Field with Event Rules

The `summary` field is used to create the incident title. Titles should be descriptive and tell responders what is happening.

To add or replace the summary field, check **Add or replace the summary field** and enter an **extract pattern** in the first box and enter the **Source Field** in the second box.

##Step 3: At these times 

In this step, select **when** you would like this rule to be active. Once you have made your selection, proceed to Step 4. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/68592bf-rulesets-when-should-rule-active.png",
        "rulesets-when-should-rule-active.png",
        1838,
        548,
        "#d4def7"
      ]
    }
  ]
}
[/block]
###Always

If you select **Always**, this rule will always run (24/7/365) when your conditions are met. Click **Save Rule** to create or update your event rule and proceed to Step 4.

###Scheduled Event Rules

You can gain a greater degree of control over your event rules by detailing a single specific time in the future in which they will be active. This can be useful for testing rules and for planned maintenance. Users can then specify what actions are to be performed within this specific time window. For instance, if you schedule a rule to be active during a single hour window, and the action set was to suppress alerts, alerts would be suppressed during that hour, and once it ended they would begin generating incidents again. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Scheduled Rules functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform."
}
[/block]
If you select **At a Scheduled Time**, you will be prompted to select a **Starting Date and Time** and an **Ending Date and Time**. Click **Save Rule** to create or update your event rule and proceed to Step 4.

###Recurring Event Rules

If there are specific hours of the day or day(s) within a week when you would like an event to follow a particular rule, you can set its activity on an automatic, weekly recurring schedule. This feature is specific to each individual event rule and you can make additional changes, such as changing severity/priority, based on time of day. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The Recurring Event Rules functionality is part of our [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) product, which is purchased separately from the core PagerDuty platform."
}
[/block]
To set a recurring schedule for an event rule, select **On a Recurring Schedule** and enter a **Starting Time**, an **Ending Time** and select the **Days of Week** in which you would like the rule to be active. Click **Save Rule** to create or update your event rule and proceed to Step 4.

##Step 4: Send Test Events 

###Send Events to a Global Ruleset

Each global ruleset will have an **Incoming Event Source** page that will display your routing **Integration Key**, as well as an **HTTP endpoint for API** and **Email address** that you can use for routing. 

To access the Incoming Event Source page:

**Free, Professional, Starter (legacy) and Team (legacy) plans**: Navigate to **Services** :fa-arrow-right: **Event Rules**.

**Business and Digital Operations Plans**: Navigate to **Services** :fa-arrow-right: **Event Rules** :fa-arrow-right: click the **name** of your desired ruleset to access its individual Incoming Event Source page.

Use this information to send events based on your preferred integration method: 

* Use the **Integration Key** to [integrate with your preferred tool](https://www.pagerduty.com/integrations/).
* Use the **Integration Key** to send an event through one of the Events APIs. 
   * If using the [V2 events API](https://v2.developer.pagerduty.com/docs/events-api-v2), use your routing Integration Key as your `routing_key` value in your event JSON. 
   * If using the [V1 events API](https://v2.developer.pagerduty.com/docs/events-api), use your routing Integration Key as your `service_key` value in your event JSON.
* Use the **Email address** to [send email events](https://www.pagerduty.com/docs/guides/email-integration-guide/).
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Integration Keys are case-sensitive."
}
[/block]
This will allow you to test how your event rules will modify them and take the actions configured in previous steps. Your event rule is now complete! If you would like to create more event rules, repeat steps 1-4 as needed.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5422079-rulesets-incoming-event-source.png",
        "rulesets-incoming-event-source.png",
        2480,
        940,
        "#f6f5f5"
      ]
    }
  ]
}
[/block]
###Send Events to Service Event Rules

Add your preferred [tool integration](https://support.pagerduty.com/docs/services-and-integrations#section-add-integrations-to-an-existing-service) or a [Custom Event Transformer](https://v2.developer.pagerduty.com/docs/cet) integration on the service where you configured the above rule(s). Once you have added the integration to your service, you will be directed to the **Integrations** tab, where you can access its **Integration Key**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c1154f2-copy-integration-key.png",
        "copy-integration-key.png",
        811,
        267,
        "#f4f3f3"
      ]
    }
  ]
}
[/block]
Use this Integration Key to complete your integration and send test events to your service. This will allow you to test how your event rules will modify them and take the actions configured in previous steps. Your event rule is now complete! If you would like to create more event rules, repeat steps 1-4 as needed.

#Edit Rulesets and Event Rules

##Edit a Global Ruleset's Event Rules

**Free, Professional, Starter (legacy) and Team (legacy) plans**: 

1. Navigate to **Services** :fa-arrow-right: **Event Rules**. 
2. **If you would like to add a new event rule**: Click **New Event Rule** to begin [creating event rules](#section-create-event-rules).
**If you would like to edit an existing event rule**: Click the :fa-cog: to the right of your desired rule and click **Edit Rule**. You may edit the rule’s conditions, actions and times when it should be active. 
3. Click **Save Rule**.

**Business and Digital Operations plans**: 

1. Navigate to **Services** :fa-arrow-right: **Event Rules** :fa-arrow-right: click the desired ruleset’s **name**.
2. **If you would like to add a new event rule**: Click **New Event Rule** to begin [creating event rules](#section-create-event-rules).
**If you would like to edit an existing event rule**: Click the :fa-cog: to the right of your desired rule and click **Edit Rule**. You may edit the rule’s conditions, actions and times when it should be active. 
3. Click **Save Rule**.

##Edit a Global Ruleset’s Details

**Business and Digital Operations plans**: 

1. Navigate to **Services** :fa-arrow-right: **Event Rules** :fa-arrow-right: click the desired ruleset’s **name** :fa-arrow-right: **Edit Ruleset**. **Note**: You cannot edit details of your Default Global Ruleset, you can only edit the additional rulesets that you have created.
2. Edit the ruleset’s **Name** and/or **Team** details and click **Save Ruleset**. **Note**: If you are adding the ruleset to a team, this will grant Team Managers edit-access to the ruleset. If you are removing the ruleset from a Team, this will revoke edit-access for Team Managers and it will behave as an additional global ruleset.


##Edit Service Event Rules

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: click the **Response** tab. 
2. **If you would like to add a new event rule**:  If you have not configured any rules for this service, click **Add One**. If you have configured other rules for this service, click the **`[#]` service event rule** link and then click the **+New Event Rule** to begin [creating event rules](#section-create-event-rules).
**If you would like to edit an existing event rule**: Click the **`[#]` service event rule** link, click the :fa-cog: to the right of the desired rule and select **Edit Rule**. You may edit the rule’s conditions, actions and times when it should be active. 
3. Click **Save Rule**.

#Duplicate Event Rules

If you would like to duplicate and create a new rule within a ruleset, click the :fa-cog: dropdown next to the rule and select **Duplicate Rule**. A new event rule with the same settings will be automatically created beneath the duplicated event rule. This functionality works for both [Global Rulesets](#section-global-rulesets) and [Service Event Rules](#section-service-event-rules).

#Disable Event Rules

If you would like to pause an event rule’s activity, you can disable and re-enable it at a later time. This feature allows you to manually initiate integration-specific disablement during maintenance or testing on a tool. 

To temporarily disable a rule:

**Free, Professional, Starter (legacy) and Team (legacy) plans**: 
1. Navigate to **Services** :fa-arrow-right: **Event Rules**, then click the :fa-cog: dropdown next to the rule and click **Disable Rule**. 
2. While the rule is disabled, you will see a 
<span style="border: 1px solid #484848 !important; border-radius: 25px; padding: 4px 10px;">:fa-pause: <strong>Disabled</strong></span> pill marker in the **Matching conditions** section of the rule. 

**Business and Digital Operations Plans**: 
1. Navigate to **Services** :fa-arrow-right: **Event Rules** :fa-arrow-right: click the **name** of your desired ruleset, then click the :fa-cog: dropdown next to the rule and click **Disable Rule**. 
2. While the rule is disabled, you will see a 
<span style="border: 1px solid #484848 !important; border-radius: 25px; padding: 4px 10px;">:fa-pause: <strong>Disabled</strong></span> pill marker in the **Matching conditions** section of the rule. 

If you would like to enable the rule again, click the :fa-cog: dropdown and click **Enable Rule**. 

#Rulesets API

You may also create, update, order and delete rules via our [Rulesets API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1rulesets/post) for Global Event Rules and our [Service Event Rules API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1services~1%7Bid%7D~1rules/post) for Service Event Rules.

[block:callout]
{
  "type": "info",
  "body": "Our legacy [Global Event Rules API v1](https://developer.pagerduty.com/docs/rest-api-v2/global-event-rules-api) is no longer receiving new features, and it will be fully deprecated at the end of 2020. We recommend replacing any integrations using the Global Event Rules API v1 with new integrations using our new [Rulesets API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1rulesets/post) to prepare for this change and to access new features.",
  "title": "Global Event Rules API v1 (Legacy)"
}
[/block]
#Troubleshooting Event Rules

###If None of Your Rules Are Working
This may be because you have not set up the integration key correctly in your monitoring tool. For event rules to work, you must use the integration key for the event rules you have configured. 

**Service Event Rules (All Plans)**: You will find your integration key by navigating to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the **name** of the service that has your desired event rule configured :fa-arrow-right: select the **Integrations** tab. You will see your **integration key** to the right of the integration’s name. 

**Free, Professional, Starter (legacy) and Team (legacy) plans, Global Rulesets**: You will find this key under **Services** :fa-arrow-right: **Event Rules** and it will be listed under **Incoming Event Source**. 

**Business and Global Operations plans, Global Rulesets**: You will find this key under **Services** :fa-arrow-right: **Event Rules** :fa-arrow-right: click your desired ruleset **name** and it will be listed under **Incoming Event Source**. 

If you are sending events through the Events API, use this integration key in the `service_key` field ([Events API V1](https://v2.developer.pagerduty.com/docs/events-api)) or the `routing_key` field ([Events API V2](https://v2.developer.pagerduty.com/docs/events-api-v2)).

###If One of Your Rules Is Not Working
This may be because you have not entered the field name correctly in the rule conditions. The field name is based on the data that is sent to PagerDuty, and *is not necessarily the same as the field name visible in the alert or incident in PagerDuty*. Refer to the data in your monitoring tool or integration for the correct field name.

For nested fields, format the field name with periods separating each level. For example, `field_group.sub_field.another_sub_field`.

If you have confirmed your field names are set up correctly, you may have a rule that is too broad that is ordered before the rule that is not working. Re-order your rules so that more specific rules are listed first. 

You may also want to check for rules with negative conditions ("does not contain" or "does not equal"), as these rules can match many events that do not contain the specified field. 

For nested fields, format the field name with periods separating each level of the object path. For example, `field_group.sub_field.another_sub_field`.

#FAQ

## Are email integration filters/rules, or custom event transformers supported?

This depends on where you are creating event rules:

* **Global rulesets**: Email filters/rules **are supported**. Custom event transformers **are not supported**, however, global event rules will autodetect and transform events sent to a global endpoint. 
* **Service Event Rules**: Only basic **email filters are supported**, while email rules **are not supported**. Custom event transformers **are supported**. 

## Are events transformed into our Common Event Format (CEF)?
* Events that are routed are transformed into [CEF](https://support.pagerduty.com/docs/pd-cef). 
* **Global Rulesets**: Custom Event Transforms (CETs) **are not supported**. 
* **Service Event Rules**: Custom Event Transforms (CETs) **are supported**. 

## What happens to events that don’t match any rules?

* **Global Rulesets**: Any events that are sent through event rules and do not match any rules are suppressed, and you can find them [in the alerts table](https://support.pagerduty.com/docs/alerts#section-viewing-alerts). You can change this default behavior by editing the catch-all rule at the bottom of your rules list.
* **Service Event Rules**: Any events that are sent through service event rules and do not match any will turn into incidents and *will not be* suppressed.

## Is there a way to bulk add/delete/edit global event rules?

Yes. You can leverage the [Rulesets API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1rulesets/post) to allow this functionality.

## Once an event is routed to a service from my global event rules, will the event rules I set up on my service be respected as well?

Yes. Service event rules can be used in conjunction with your global event rules this way.

## Can I send a second event with the same `dedup_key` and have it follow different actions?

If a second event with the same incident key is passed and de-duplicated into the open incident via global, team, or service event rules, the actions are not followed (ie. raising priority, adding a note) **except** for when severity is raised.

## What happens if I do not create a deduplication key for an email sent to a ruleset?

As emails are processed, the email subject will be used as a default deduplication key. In other words, emails with the same subject line will automatically be deduplicated. To change this behavior, add a custom deduplication key with an event rule action.