---
title: "Dynamic Field Enrichment & Extraction"
slug: "dynamic-field-enrichment-extraction"
hidden: true
createdAt: "2020-08-14T23:09:05.774Z"
updatedAt: "2020-10-13T21:16:10.124Z"
---
Dynamic Field Enrichment & Extraction is a tool to normalize event payloads using Event Rules. This capability allows you to copy important data from any combination of source event fields into any PagerDuty Common Event Format (CEF) field. Translate difficult machine terms and code into helpful context for responders so they can effectively respond to the problem. Dynamic Field Enrichment & Extraction can also be used to enhance Event Intelligence capabilities by customizing alerts, influencing the Intelligent Alert Grouping and Intelligent Triage machine learning algorithms. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dad0bfe-DFEE_Configuration.png",
        "DFEE Configuration.png",
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
[block:callout]
{
  "type": "info",
  "title": "Early Access",
  "body": "This capability is currently in Early Access and is available to all Event Intelligence & Digital Operations customers. Its features and documentation are subject to change."
}
[/block]
# Configure Dynamic Field Enrichment & Extraction

1. In the **Customize Event Fields** section of your event rule, under **Define Custom Variable**, create a variable from event fields by entering a **Name**. Use a short descriptive name to represent the value that you will use later on to define a CEF field. Then enter a **Value** for the variable and the origin **Source**. Values are defined using valid RE2 regular expression syntax, and you can add as much complexity as you want with Regex to customize what part of each field you capture into a variable. You may also use **Sample Events** on the right as a reference for variables by clicking **Show Details**. You may add multiple variables by clicking **Add Variable** in the upper right of the Customize Event Fields panel, or delete variables by clicking the trashcan icon directly to the right of the variable.

2. Next, under **Replace Event Field**, select your preferred **Common Event Field (CEF)** from the left dropdown. Select whether you would like to use **Regex** or a **Template** from the right hand dropdown. If you are using a text Template, you can reference a variable defined in step 1 using `{{ }}` brackets (e.g. `{{class}}`) in the **Value** field. If you are using Regex, enter a **Value** and the origin **Source**.

Configure the rest of the event rule to your preference and then click **Save Rule** in the lower right of the screen.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d88fb46-DFEE_Alert_Logs.png",
        "DFEE Alert Logs.png",
        2237,
        470,
        "#f9f9f9"
      ],
      "caption": "Users can see the dynamic field enrichment & extraction updates that were applied to the alert in the Alert Details page both in the Details section and the Alert Log."
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