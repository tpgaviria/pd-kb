---
title: "Event Triggered Webhooks – Beta"
slug: "event-triggered-webhooks"
hidden: true
createdAt: "2020-09-29T19:03:27.143Z"
updatedAt: "2020-10-13T22:23:27.650Z"
---
Event Triggered Webhooks allow response teams to easily define a dynamic webhook using event rules, sending a custom payload to a specified endpoint. This enables responders to automate actions like restarting a server, clearing logs, and reverting bad deploys. The payload can be set using a combination of several predefined variables, created using [Dynamic Field Enrichment and Extraction](https://support.pagerduty.com/docs/dynamic-field-enrichment-extraction). Event Triggered Webhooks can be created using both global event rules and service level event rules.

[block:callout]
{
  "type": "info",
  "body": "This capability is currently in Beta for Event Intelligence & Digital Operations customers, with features and documentation subject to change. Please [reach out to our Support team](https://www.pagerduty.com/contact-us/) to enroll in the Beta program.",
  "title": "Beta"
}
[/block]
# Configure an Event Triggered Webhook

1. Navigate to **Services** :fa-arrow-right: **Event Rules**
2. In the **Do these things** section of the [event rule creation process](https://support.pagerduty.com/docs/rulesets#create-event-rules), select the **Create an incident on a service** option and select the **Advanced** tab on the right. 
3. Under **Custom Action (Webhook)**, check the **Enable Custom Action Button** checkbox and fill out the details by specifying a **Button Name**, the **API Endpoint** for the payload, and the **Parameters** to include in the payload. 
4. *Optional*: Button names and parameters can take advantage of the variables created using the [Dynamic Field Enrichment and Extraction](https://support.pagerduty.com/docs/dynamic-field-enrichment-extraction) feature in the preceding **Customize Event Fields** section to further enrich the custom action. 
5. Continue configuring the event rule and click **Save Rule**. 

![](https://files.readme.io/0b81dd0-event-triggered-webhooks-configuration.png)

[/block]
# Trigger an Event Triggered Webhook

Once the rule is created, a custom push-button action will be available the next time the rule is applied. Users can find the event triggered webhook action in the **More Actions** dropdown on the incident details page, and activity related to the custom rule action will be visible in the incident timeline.

![](https://files.readme.io/77885b7-event-triggered-webhooks-custom-incident-action.png)

[/block]
A modal will appear when the event triggered webhook action is clicked, and users can confirm the details of the webhook payload (fields were set in the rule configuration phase). If the action is triggered, a response log will be shown in the incident timeline to let users know if the webhook was successfully received. 

![](https://files.readme.io/eff71ce-event-triggered-webhooks-trigger-action-modal.png)

[/block]


![](https://files.readme.io/24d6e50-event-triggered-webhooks-incident-timeline.png)

[/block]