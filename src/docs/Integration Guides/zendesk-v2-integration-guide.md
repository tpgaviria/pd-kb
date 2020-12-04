---
title: "Zendesk v2 Integration Guide | PagerDuty"
slug: "zendesk-v2-integration-guide"
hidden: true
createdAt: "2019-09-16T22:15:54.726Z"
updatedAt: "2020-11-05T00:35:40.577Z"
---
#Zendesk + PagerDuty Integration Benefits

* The Zendesk integration uses Extensions, Targets and Triggers to send Zendesk Support Ticket events to PagerDuty, triggering incidents.
* The PagerDuty app for Zendesk retrieves and interacts with the PagerDuty incident from the Zendesk User Interface.

#How it Works

* Ticket events are sent from Zendesk in JSON format to PagerDuty's Events API based on the Conditions and Actions set during Trigger configuration in Zendesk. 
* These events will turn into incidents in PagerDuty, notifying the configured service’s on-call responders. 

#Requirements

* **In PagerDuty**: A base role of Manager or higher is required to configure this integration. If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).
* **In Zendesk**: An Administrator role or higher is required to install the app and configure extensions and Triggers.
[block:callout]
{
  "type": "info",
  "title": "Looking for a Different Version?",
  "body": "Our [Zendesk V1 integration guide](https://www.pagerduty.com/docs/guides/zendesk-v1-integration-guide/) is also available."
}
[/block]
#Integration Walkthrough

##In PagerDuty

There are two ways that Zendesk can be integrated with PagerDuty: via Global Event Rules or through an integration on a PagerDuty Service. [Global Event Rules](https://support.pagerduty.com/docs/global-event-rules) may be beneficial if you want to build different routing rules based on the payload coming from Zendesk. [Integrating with a PagerDuty service](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) may be beneficial if you don't need to route alerts from Zendesk to different responders based on the event payload.

*Note: If you are integrating Zendesk with an existing PagerDuty service, please skip to the **Integrating with a PagerDuty Service** section of this guide.*

###Integrating With Global Event Rules

1. From the **Services** menu, select **Event Rules** and click your **Default Global Ruleset**.
2. On the Event Rules screen, click on the arrow next to **Incoming Event Source** to display the Integration key information. Copy your **Integration Key** and keep it in a safe place for later use. When you have finished setting up the integration, you will return to this interface to specify how to route events from Zendesk to services in PagerDuty. Please continue to the **In Zendesk** section of this guide.

![](https://files.readme.io/98e6ad0-cloudwatch-copy-key.png)

###Integrating With a PagerDuty Service

1. In the **Services** menu, select **Service Directory**.
2. 
   * **If you are adding your integration to an existing service**: Click the **name** of the service, select the **Integrations tab**, click **Add a new integration** and continue to step 3.
   * **If you are creating a new service for your integration**: Please read our documentation in section [Configuring Services and Integrations](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) and follow the steps outlined in the [Create a New Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) section, selecting **Zendesk API** as the **Integration Type** in step 4. Continue with step 4 (below) once you have finished these steps.
3. Enter an **Integration Name** in the format `ZendeskAPI-Service-Name` (e.g., `ZenDeskAPI-Support-Tickets`) and select **Zendesk API** from the **Integration Type** menu. Click **Add Integration**.
4. On the next screen, you will see the **Integration Key** for this integration. Copy this key and keep it in a safe place for future use. 

##In Zendesk

1. In the left hand menu, click the Admin :fa-cog: and select **Extensions** under Settings.
2. Click **Add Target** and then **HTTP Target**.

![](https://files.readme.io/13a8bd2-zendesk-ig-add-target.png)



![](https://files.readme.io/c5ee6c5-zendesk-ig-http-target.png)

3. On the HTTP Target screen, enter the following:
   * **Title**: Enter a title that will be identifiable when configuring Triggers in later steps. 
   * **Url**: Enter the following value: `https://events.pagerduty.com/v2/enqueue`. 
   * **Method**: Select **POST**.
   * **Content type**: Select **JSON**.
   * **Basic Authentication**: Leave **unchecked**.

Select **Create Target** from the dropdown and then click the **Submit** button. 


4. Next, navigate back to the Admin :fa-cog: and select **Triggers** under Business Rules. Depending on your current configuration, you have the following two options:
   * **If you have an existing trigger that you wish to send to PagerDuty**: Click the trigger **name** and modify the **Actions** section by adding an action to **Notify Target** and select the target created in step 3, above. Continue on to step 5.
   * **If you are creating a new trigger**: Click **Add Trigger** and enter a **Trigger name** and **Description** that describes its desired functionality. Configure your preferred **Conditions** that will determine when you would like Zendesk to send an event to PagerDuty. Next, in the **Actions** section, add an action to **Notify Target** and select the target created in step 3, above. Continue on to step 5.


5. Next, you will be prompted for a JSON body that takes Zendesk Placeholder values. We have provided a sample JSON body that you can use out-of-the-box. If you want to modify the payload in any way, here are some rules to keep in mind:
   * The `dedup_key` should follow the format of `Zendesk_[your_zendesk_subdomain]_{{ticket.id}}`. The PagerDuty plugin looks for Zendesk-created incidents with that pattern as a key. Changing this may result in the App Plugin not being able to retrieve the associated PagerDuty incident.
   * The `routing_key` determines which account or service this information should be sent to. Paste your **Integration Key** here (depending on how you are integrating, this key was generated in step 2 of **Integrating With Global Event Routing**, or step 4 of **Integrating With a PagerDuty Service**, above). 
   * The `event_action` determines what PagerDuty should do once this event is received. You can specify either `trigger`, `acknowledge` or `resolve` here.
   * The `payload.custom_details` is a custom object that will take in additional fields in case you want to include additional information.

```
{
  "dedup_key": "Zendesk_[your_zendesk_subdomain]_{{ticket.id}}",
  "routing_key": "[your_integration_key]",
  "event_action": "trigger",
  "payload": {
    "summary": "{{ticket.title}}",
    "source": "{{ticket.via}}",
    "severity": "critical",
    "custom_details": {
      "priority": "{{ticket.priority}}",
      "requester_name": "{{ticket.requester.name}}",
      "status": "{{ticket.status}}",
      "description": "{{ticket.description}}"
    }
  },
  "client_url": "{{ticket.link}}",
  "client": "Zendesk"
}
```

After configuring the JSON body, click **Create**.


6. Next, navigate to the [Zendesk App Marketplace](https://www.zendesk.com/apps/directory/), search for PagerDuty and install the PagerDuty app.
7. Once you’ve installed the app, navigate back to your Zendesk account, click **+Add** in the upper left corner and select **Ticket**. On the new ticket, click the **Apps** button on the upper right to display the PagerDuty application. Click **login with PagerDuty** to sign in and access PagerDuty from the Zendesk interface.

![](https://files.readme.io/1932123-zendesk-ig-apps-button.png)

8. There are two ways to test the integration:
   * Modify the ticket created in the last step to meet the Conditions for the Trigger to execute. This should automatically trigger an Event API call once the Priority is set to **URGENT**. 
   * You may also create a ticket after signing in to PagerDuty from the Zendesk interface and click the blue **Create Incident** button. On the next screen, select which PagerDuty service you would like to open an incident on. 

#FAQ
##I’m using the Business Rules Triggers in Zendesk to trigger notifications to PagerDuty, and incidents are being created, but the PagerDuty App in Zendesk is not loading the incident information on the ticket. What’s happening here?

Within the JSON Payload of your Actions from the Business Rules Triggers, ensure that the formatting of the value for `dedup_key` is `Zendesk_[your_Zendesk_subdomain]_{{ticket.id}}`. For example, if the URL to your Zendesk account is `acme.zendesk.com`, the formatting of the the `dedup_key` value should be `Zendesk_acme_{{ticket.id}}`.

##Will PagerDuty create a new Zendesk ticket if there’s a non-Zendesk-generated incident on the same service?

No, PagerDuty will not create a new Zendesk Support Ticket if there’s an incident that did not originate from Zendesk.

##How does the PagerDuty app in Zendesk look up the incident? What if there are users that shouldn’t have access those incidents?

The PagerDuty app utilizes OAuth to determine the user’s permissions to access incidents within PagerDuty. If the user does not have access to a team’s incidents, the PagerDuty app will not display that information in the side bar app.