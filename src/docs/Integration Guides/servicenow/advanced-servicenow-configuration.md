---
title: "Advanced ServiceNow Configuration"
slug: "advanced-servicenow-configuration"
excerpt: "How to leverage the full power and versatility of the ServiceNow and PagerDuty integration."
hidden: false
createdAt: "2017-09-22T20:26:50.470Z"
updatedAt: "2020-10-09T23:16:29.880Z"
---
[block:callout]
{
  "type": "danger",
  "body": "The following article illustrates ways you may choose to customize workflows in the ServiceNow integration. Please note, however, that any customizations which alter the integration’s out-of-the-box behavior will not be supported by the PagerDuty Support team.
</Callout>


ServiceNow is a complex enterprise integration that allows for versatile configurations with your PagerDuty account to meet the specific criteria of your unique business. Below are some guidelines for customizing your ServiceNow integration with advanced configurations.

# Best Practices for Automation

It is strongly recommended that between inbound field rules, priority synchronization, webhook import customization and the basic behavior of the integration (i.e. mapping between configuration items / assignment groups and PagerDuty services / escalation policies), there is no overlap in terms of automated modification to records in ServiceNow (such as Assignment Rules).

Make sure that in any given automation, you do not modify any fields that are already set automatically by some other feature of the integration, or used by the integration in the mapping of objects between ServiceNow and PagerDuty.

For example, if you map configuration items to PagerDuty services in the integration, do not set the CI field of an incident automatically in the inbound field rules. Especially if you have enabled priority synchronization, do not define any rules that set the **Urgency**, **Impact** or **Priority** fields in ServiceNow incidents.

Keeping automation simple and non-overlapping will help you avoid unpredictable or unstable behavior. 

# Inbound Field Rules

You can define rules for automatically setting values for fields in the ServiceNow incident based on fields in the data of the webhook from PagerDuty. Required fields can be set when creating or modifying incidents automatically through the integration. Additionally, custom JavaScript code can be run in the process of importing incident lifecycle data into ServiceNow.

Two example rules, which are disabled by default but available for reference and adaptation, are available with the base installation of the app:

* *Configuration item - set from payload on trigger*
* *Configuration Item - set default on trigger**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4e9dddf-inbound_field_rules.png",
        "inbound_field_rules.png",
        3190,
        554,
        "#353f4e"
      ],
      "caption": "The Inbound Field Rules menu"
    }
  ]
}
[/block]
## Basic Setup

1. To begin, go to **PagerDuty** &rarr; **Configuration** &rarr; **Inbound Field Rules** &rarr; **New** to open the form to create a new field rule. Ensure **Active** is checked, if you wish to make it active immediately.
2. Select the *PagerDuty Webhook Type* to specify which incident lifecycle event the rule should be applied at. For a list of webhook types, see [Webhooks Overview: Webhook Types](https://developer.pagerduty.com/docs/webhooks/v2-overview/#webhook-types).
3. Select the ServiceNow Incident field to be populated, and define how the field should be set:
* **Set Default Value:** use a fixed value to populate the field.
* **Set From PagerDuty Webhook Payload:** Using dot notation, specify the namespace path to the property of the PagerDuty webhook to be used.
4. When setting a default value, a freeform text field will appear in which you can specify the value to set for the field.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/75fae27-inbound_field_rules2.png",
        "inbound_field_rules2.png",
        3188,
        894,
        "#dee5e7"
      ],
      "caption": "Inbound Field Rule definition form"
    }
  ]
}
[/block]
## Setting Based on the Payload

When setting from the webhook payload, a field named **PagerDuty webhook payload field** will appear in which you can enter the property of the webhook to reference.

To see properties that are available, you can look in *Webhook Import Rows*; sample JSON-encoded objects should be saved in the **Payload** column.

A few examples of fields in the PagerDuty webhook payload one could specify:

* `log_entries`: the log entry object associated with the incident lifecycle event. See [Log Entries API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1log_entries/get) for the expected schema of such objects.
  * `log_entries.channel`: if the event is `incident.trigger`, this will be the original data received by PagerDuty that triggered the incident. This could be useful if the incident originated from an upstream monitoring tool.
  * `log_entries.service`: The service on which the incident was triggered / to which it corresponds.
  * `log_entries.teams`: An array of `TeamReference` objects
* `event`: the [Webhook Type](https://developer.pagerduty.com/docs/webhooks/v2-overview/#webhook-types)
* `incident`: the incident object (see "Response Schema" in the [Incidents API reference](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1incidents~1%7Bid%7D/get))

## Running a Lookup Script

By enabling this option, you can run custom JavaScript to perform additional actions in lieu of each field rule to obtain additional data, and define the final value to be applied to the ServiceNow incident field. A text area box will appear when checking the “Run lookup script”.

Within the scope of the script, there will be variable named **`value`** defined, whose value will be that of the property retrieved from the webhook payload, specified in the *PagerDuty webhook payload field*.

By the end of the script, define a value for the variable **`result`**, and that value will be used to populate the field. It is not necessary to commit or save the record at the end of the script.

## Testing Your New Inbound Field Rule

If you are setting a field from PagerDuty webhook, you can test the rule you created by pressing the **Test Set From PagerDuty Webhook Payload** button. This will allow you to specify the Webhook Payload Field name (such as `log_entries.channel`), provide a sample payload (copied from one of your *Webhook Import Rows* table), then verify the returned value. 

# Priority Synchronization

Priority levels set for incidents in PagerDuty can automatically set the priority levels on the linked incident in ServiceNow, and vice versa.

When the priority is modified on the incident in ServiceNow, it is updated in real-time in PagerDuty. Similarly, the incident priority is set when initially triggering the incident in PagerDuty.

When changing the priority on a PagerDuty incident, the change will be reflected in ServiceNow after the next webhook event is sent to ServiceNow for the incident. 
[block:callout]
{
  "type": "success",
  "title": "Best Practices",
  "body": "Should the priority of an incident need to change, it is best practice to leave a text note as soon as it has been changed to inform all of the relevant stakeholders.
</Callout>


## Importing PagerDuty Priorities

The first step is to define some incident priorities in your PagerDuty account, by going to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Incident Priorities.**

Once that is complete, navigate in ServiceNow to **PagerDuty** &rarr; **Configuration** &rarr; **Refresh PagerDuty Priorities.** Once this is done, the priorities will populate into the table `x_pd_integration_pagerduty_priority`, whose contents are displayed under **Priorities**.

## Defining the Priority Mapping 

Once you have imported your PagerDuty priorities, go in ServiceNow to **PagerDuty** &rarr; **Configuration** &rarr; **Priorities**. You will find there a predefined list of your PagerDuty Priorities, which can then be mapped to ServiceNow Urgency and Impact value pairs. The computed ServiceNow priority value will also be shown in the table.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3302c89-define_priority.png",
        "define_priority.png",
        1476,
        548,
        "#373f48"
      ],
      "caption": "The Priority Data Lookup list"
    }
  ]
}
[/block]
To edit how incident priorities in PagerDuty map to priorities in ServiceNow, click on the **PagerDuty priority** field in the mapping in question to edit the record and set a value for its corresponding **ServiceNow Impact** and **ServiceNow Urgency**. On save, the ServiceNow Priority will be computed and shown in the table.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/550f9d3-define_priority2.png",
        "define_priority2.png",
        1478,
        545,
        "#373f48"
      ],
      "caption": "The priority mapping form"
    }
  ]
}
[/block]
# Customized Automation

If you need further automation to be taken in the webhook import process (when data and events from PagerDuty are synchronized to ServiceNow) beyond inbound field rules, the preferred way is to edit the `PagerDutyInboundCustomScript` Script Include. This script include will not be modified in future releases, and so any local modifications to the source code can be safely made without concern for incorporating changes from software updates.

The script is found in ServiceNow under **PagerDuty** &rarr; **Configuration** &rarr; **Configuration Files** &rarr; **Script Includes**.

Within the source code of that script include, you will find a function `customPostTransformActivity` defined in the prototype declaration of the `PagerDutyInboundCustomScript` include. This is the function where you will define code to run in lieu of all the other actions taken when webhook data from PagerDuty, corresponding to the PagerDuty incident, is translated into incident data in ServiceNow. This function will be executed during the *Webhook Import* process (see under *How the Integration Works for further details on this).

Within the scope of that function, the three parameters available as local variables are as follows:

1. `source` ([GlideRecord](http://wiki.servicenow.com/index.php?title=GlideRecord#gsc.tab=0)): the webhook import row. Note the property `source.payload`, which contains a JSON string representing the payload of the webhook.
2. `target` ([GlideRecord](http://wiki.servicenow.com/index.php?title=GlideRecord#gsc.tab=0)): the ServiceNow incident to be created or updated, depending on the action.
3. `action` (string): will be `insert` if a new incident record in ServiceNow is being created, or `update` if an existing one is being updated.