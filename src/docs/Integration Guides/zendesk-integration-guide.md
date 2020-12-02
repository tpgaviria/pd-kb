---
title: "Zendesk Integration Guide | PagerDuty"
slug: "zendesk-integration-guide"
hidden: false
createdAt: "2020-09-14T23:42:23.201Z"
updatedAt: "2020-11-05T00:35:23.358Z"
---
# Zendesk + PagerDuty Integration Benefits

* PagerDuty for Zendesk facilitates cross-team communication between IT Ops, DevOps and your Customer Service teams. Communication silos are broken down, allowing you to mobilize the right resources across teams, in real-time, every time.
* Installing the PagerDuty app for Zendesk will add an incident command console to your Zendesk account. This console allows PagerDuty to create Zendesk tickets, sync priority, and update tickets in real-time.

# How it works

* Ticket events are sent from Zendesk in JSON format to PagerDuty's Events API based on the Conditions and Actions set during Trigger configuration in Zendesk.
* These events will turn into incidents in PagerDuty, notifying the configured service’s on-call responders.
* In PagerDuty, you can also configure the Zendesk extension to sync updates bidirectionally between Zendesk and PagerDuty.


# Requirements

* **In PagerDuty**: An Admin base role is required to connect PagerDuty and provide a PagerDuty API key. If you do not have this role, please reach out to an Admin or Account Owner within your organization to configure the integration.
* **In Zendesk**: A Zendesk administrator will need to generate a Zendesk API key to configure the integration, install the marketplace app, and add any Targets or Triggers you choose to set up.
[block:callout]
{
  "type": "info",
  "title": "Looking For a Different Version?",
  "body": "Our [Zendesk v2 integration](https://support.pagerduty.com/docs/zendesk-v2-integration-guide) is also available."
}
[/block]
# Integration Walkthrough

# Adding the Incident Command Console to Zendesk:
## In PagerDuty

1. Navigate to **Apps & Add ons** :fa-th-large: :fa-arrow-right: **Extensions**.
2. Under the **Select an Extension** menu, search and select **Zendesk**.
3. Confirm that you want to add the app by clicking **Open Zendesk Page** on the popup window.
4. Click the **install the PagerDuty app** link to open a new window where you can install the Incident Command Console for your users to manage incidents. 

## In Zendesk

5. You will be directed to a new tab for the PagerDuty app in the Zendesk marketplace, click **Install**. 
6. Select your preferred account from the dropdown and then click **Install**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/488e1f8-zendesk-install-pagerduty-app.png",
        "zendesk-install-pagerduty-app.png",
        748,
        601,
        "#f4faf9"
      ]
    }
  ]
}
[/block]
7. You will be directed to your Zendesk account. Click **Install** again to complete the installation of the app in the Zendesk marketplace. 
8. You will then see PagerDuty listed under Enabled Apps (:fa-cog: :fa-arrow-right: **Manage** :fa-arrow-right: **Enabled Apps**).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c17efea-Screen_Shot_2020-11-03_at_4.11.08_PM.png",
        "Screen Shot 2020-11-03 at 4.11.08 PM.png",
        376,
        348,
        "#d6e7d9"
      ]
    }
  ]
}
[/block]
9. While still in the Zendesk admin settings, navigate to :fa-cog: :fa-arrow-right: **Channels** :fa-arrow-right: **API** to [generate a Zendesk API token](https://support.zendesk.com/hc/en-us/articles/226022787-Generating-a-new-API-token-). **Copy the API token and paste it in a safe place for future use**. **Note**: You will not have access to this key after this screen.
10. Note: If you have a previous version of the Zendesk app, you can login to Zendesk and click **Manage** from the Admin Settings to view the PagerDuty app. Click the PagerDuty icon, and then click **Update** to update the app.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8c9fcf2-Screen_Shot_2020-11-03_at_3.53.26_PM.png",
        "Screen Shot 2020-11-03 at 3.53.26 PM.png",
        648,
        890,
        "#f8f9f9"
      ]
    }
  ]
}
[/block]
# Configure Bi-directional Workflows

## Authorize the Integration
11. In PagerDuty, return to the Zendesk Extension page and click **Authorize Account** to continue configuring the integration.
12. Enter your **Zendesk subdomain**, **Zendesk user email**, and paste the **Zendesk API token** you just created in Zendesk. Click **Authorize**.
13. Click the **Get PagerDuty REST API key** link to generate a PagerDuty API key. 
14. On the API key page, click **Create New API Key**.
15. Enter a Description (e.g. `Zendesk API Key`) and click **Create Key**.
16. On the next screen, **copy the API Key and paste it in a safe place for future use**. Note: You will not have access to this key after this screen.
17. Return to the Zendesk Extension page and enter your **PagerDuty email address** and the **PagerDuty REST API key** you just created. Click **Save Changes** to save the credentials entered.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f7c478-zendesk-authorization-screen.png",
        "zendesk-authorization-screen.png",
        1018,
        697,
        "#f5f5f5"
      ]
    }
  ]
}
[/block]
## Add Services
In order to configure workflow rules, or manually create a Zendesk ticket from a PagerDuty incident, you must first map your PagerDuty services to Zendesk. 

18. Click the **Connections** tab to connect PagerDuty services to Zendesk and build automation rules. 
19. Click **Add Service** to connect a service in the integration. Select a service from the dropdown and then click **Add Service** again. 
20. A pop-up will confirm that the service webhooks are correctly configured. If there are any errors, you can click the **Check Webhooks** button to recreate broken webhooks. Repeat steps 18-19 if you would like to add more services.
21. Once a Service is added, we predefine some of the automation rules for you. If you would like to change how the integration's rules are configured, you can click the **name** of the Service to update these rules and follow instructions in the [Synced Attributes](https://support.pagerduty.com/docs/zendesk-v3#synced-attributes-optional) and [PagerDuty to Zendesk Automation](https://support.pagerduty.com/docs/zendesk-v3#pagerduty-to-zendesk-automation-optional) sections. Otherwise, the integration configuration is now complete and you may skip to [Manage PagerDuty Incidents in Zendesk](https://support.pagerduty.com/docs/zendesk-v3). 

## Configure Access Levels 
In the **Permissions** tab, you can configure if different groups should have access to all or some actions for the Incident Command Console in the Zendesk platform.

22. Navigate to the **Permissions** tab, and choose the abilities that your users should be allowed to perform in the Incident Command Console.
If you’d like to add a new Group Ability, click **Add Group Ability**, choose the group you’d like to configure, and then select the actions they can take. 
Once finished, select **Save Changes** to save the permissions. Note: These permissions only apply to the Zendesk UI. If you’d like to restrict permissions in the PagerDuty Platform, please refer to [this knowledge base article](https://support.pagerduty.com/docs/advanced-permissions).


### Synced Attributes (Optional)

Synced attributes allow you to keep PagerDuty incidents and Zendesk tickets in sync. There are two attributes that sync: Priority and Notes. 

* **To edit priority syncing**: Click the dropdown under **PagerDuty priority** and select your preferred priority or delete syncing by clicking the **X** by each priority level and click **Save Changes**. 
* **To sync notes**: Check the **Sync Notes** checkbox and click **Save Changes**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d55fa9-zendesk-synced-attributes.png",
        "zendesk-synced-attributes.png",
        1600,
        813,
        "#f8f9f8"
      ]
    }
  ]
}
[/block]
### PagerDuty to Zendesk Automation (Optional) 

1. From each **Zendesk status** dropdown, select what status the Zendesk ticket should change to when a PagerDuty incident changes status. 
2. Check the checkbox to **Automatically create Zendesk tickets** if you would like Zendesk tickets to be automatically created when there are incidents triggered for this service. If you do not select this option, you can still [create a Zendesk ticket manually from an incident](https://support.pagerduty.com/docs/zendesk-v3#create-a-zendesk-ticket-from-a-pagerduty-incident).
3. If you would like Zendesk tickets to be created for incidents with a specific Priority, check the **Set incident priority threshold** checkbox and select your preferred threshold from the dropdown.
4. From the **Zendesk ticket type** dropdown, select which type of ticket you would like to create when creating them from a PagerDuty incident.
5. Click **Save Changes**.

# Manage PagerDuty Incidents From Zendesk

After installing the PagerDuty app from the Zendesk Marketplace (step 4 of the [Integration Walkthrough](https://support.pagerduty.com/docs/zendesk-v3)), you can trigger and manage incidents right from within Zendesk. 

1. To create an incident, a Zendesk agent can navigate to a Zendesk ticket and then display Apps by clicking the **Apps** button on the right side of the screen. 
2. The PagerDuty app will appear and prompt agents to log in to their PagerDuty account. **Note**: If an agent does not have a PagerDuty account, they can still view any incidents that are linked to this incident, but they cannot take any actions to coordinate a response or communicate with stakeholders.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/55987b8-zendesk-login-incident-command-console.png",
        "zendesk-login-incident-command-console.png",
        1408,
        1128,
        "#f2f3f3"
      ]
    }
  ]
}
[/block]
3. Once the agent has logged in, they can take the following actions from the Zendesk Incident Command Console:

* **Create Incident** or **Link Incident**: [Create a new incident](https://support.pagerduty.com/docs/incidents#manually-trigger-an-incident) link to an existing open incident. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2173b04-Screen_Shot_2020-11-03_at_4.17.18_PM.png",
        "Screen Shot 2020-11-03 at 4.17.18 PM.png",
        560,
        482,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]
* **Acknowledge**: [Acknowledge](https://support.pagerduty.com/docs/incidents#incident-states) that you are working on the incident and pause any further escalation.
* **Resolve**: [Resolve](https://support.pagerduty.com/docs/incidents#incident-states) the incident.
* **Add Note**: [Add a note](https://support.pagerduty.com/docs/editing-incidents#add-a-note-to-an-incident) about the incident to communicate with internal teams following it.
* **Add Responders**: [Add more responders](https://support.pagerduty.com/docs/add-responders) to help with the incident
* **Reassign**: [Reassign the incident](https://support.pagerduty.com/docs/reassigning-and-delegating-incidents#reassign-an-incident-from-pagerduty) to a different user or to another team’s escalation policy.
* **Run Response Play**: [Run a response play](https://support.pagerduty.com/docs/response-automation) to mobilize responders, engage stakeholders with status updates, and set up conference bridge collaboration at once. **Note**: Response Plays are available on our Digital Operations plan and as part of our Modern Incident Response package. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.
* **Send a Status Update**: [Send a status update](https://support.pagerduty.com/docs/communicating-with-stakeholders#sending-status-updates-to-subscribers) to internal users that are subscribed to this incident.
* **Unlink incident**: Unlink the incident from this Zendesk ticket.

4. If you are not seeing all of these actions, you may have a limitation based on your permissions. Please contact your team’s admin user or [our Support team](https://www.pagerduty.com/contact-us/) to assist if you need additional access to these features.
5. If you would like to condense the information in the Incident Command Console, you can collapse the Detail, Timeline, or Notes headers. You can also click the :fa-cog: icon at the bottom of the Console to choose which pieces of information should be displayed.

## Automatically Trigger PagerDuty Incidents From Zendesk

There may be circumstances where you want Zendesk to automatically create PagerDuty incidents instead of creating them manually through the Incident Command Console. This can be configured by leveraging Zendesk Targets and Triggers. There are two ways that you may configure Targets and Triggers: via Rulesets or through an integration on a PagerDuty Service. 

* Using Rulesets may be beneficial if you want to build different rules based on the payload coming from Zendesk. If you would like to learn more, please visit our article on [Rulesets](doc:rulesets).
* Integrating with a PagerDuty Service directly can be beneficial if you don’t need to route alerts from Zendesk to different responders based on the event payload.

### Integrating With Rulesets

1. In your PagerDuty account, navigate to the **Services** menu and select **Event Rules**.
2. Select your preferred ruleset, or your **Default Global Ruleset**, and click on the arrow next to **Incoming Event Source** to display the Integration key information. Copy your **Integration Key** and keep it in a safe place for later use. When you have finished setting up the integration, you will return to this interface to specify how to route events from Zendesk to services in PagerDuty. Please continue to the [Configure a Target and Trigger](https://support.pagerduty.com/docs/zendesk-v3#configure-a-target-and-trigger) section of this guide.  
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9261c7a-zendesk-global-event-routing-key.png",
        "zendesk-global-event-routing-key.png",
        1600,
        731,
        "#f7f6f7"
      ]
    }
  ]
}
[/block]
### Integrating With a PagerDuty Service

1. In the **Services** menu, select **Service Directory**.

* If you are adding your integration to an existing service: Click the name of the service, select the **Integrations** tab, click **Add a new integration** and continue to the next step.
* If you are creating a new service for your integration: Please read our documentation in section [Configuring Services and Integrations](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) and follow the steps outlined in the [Create a New Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) section, then click **Add a new integration** and continue to the next step.

2. Enter an Integration Name and select **Zendesk API** from the **Integration Type** menu. Click **Add Integration**.
3. On the next screen, you will see the **Integration Key** for this integration. Copy this key and keep it in a safe place for steps below when you create a JSON body. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b7f8c97-Screen_Shot_2020-11-04_at_3.13.49_PM.png",
        "Screen Shot 2020-11-04 at 3.13.49 PM.png",
        1366,
        674,
        "#f4f2f2"
      ]
    }
  ]
}
[/block]
### Configure a Target and Trigger

1. As a Zendesk admin, navigate to the admin settings and click on the **Extensions** settings.
2. Select the option to **add target**.
3. Choose the **HTTP target >** option
4. On the HTTP Target screen, enter the following:
**Title**: Enter a title that will be identifiable when configuring Triggers in later steps.
**Url**: Enter the following value: `https://events.pagerduty.com/v2/enqueue`.
**Method**: Select POST.
**Content type**: Select JSON.
**Basic Authentication**: Leave unchecked.
Select **Create Target** from the dropdown. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/019e74e-zendesk-http-target.png",
        "zendesk-http-target.png",
        1600,
        973,
        "#fbfbfb"
      ]
    }
  ]
}
[/block]
5. Click the **Submit** button to save the target.
6. While still in the admin settings, select **Triggers** under Business Rules. Depending on your current configuration, you have the following two options:

* **If you have an existing trigger that you wish to send to PagerDuty**: Click the trigger name and modify the Actions section by clicking **Add Action**, selecting **Notify Target**, and selecting the target created above. Continue on to the next step.
* **If you are creating a new trigger**: Click **Add trigger** and enter a Trigger name and Description that describes its desired functionality. Configure your preferred Conditions that will determine when you would like Zendesk to send an event to PagerDuty. Next, in the Actions section, add an action by clicking **Add Action**, selecting **Notify Target**, and selecting the target created in the steps above. Continue on to the next step.

7. Next, you will be prompted for a JSON body that takes Zendesk Placeholder values. We have provided a sample JSON body that you can use out-of-the-box. If you want to modify the payload in any way, here are some rules to keep in mind:

* The `dedup_key` should follow the format of `Zendesk_[your_zendesk_subdomain]_{{ticket.id}}`. The PagerDuty plugin looks for Zendesk-created incidents with that pattern as a key. Changing this may result in the App Plugin not being able to retrieve the associated PagerDuty incident.
* The `routing_key` determines which account or service this information should be sent to. Paste your Integration Key here (depending on how you are integrating, this key was generated in Integrating With Global Event Routing, or Integrating With a PagerDuty Service, above).
* The `event_action` determines what PagerDuty should do once this event is received. You can specify either trigger, acknowledge or resolve here.
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
8. After configuring the JSON body, click **Create**.

# Create a Zendesk Ticket From a PagerDuty Incident

In the event that you want to create a Zendesk ticket from a PagerDuty incident, you can do so from the incident details page. You can only create Zendesk tickets from incidents for [services that are connected](https://support.pagerduty.com/docs/zendesk-v3#in-pagerduty-1). 

1. Navigate to an incident in PagerDuty, and click the incident **Title** to open the incident details page.
2. Select **More Actions** and then choose the option to create a Zendesk ticket.


# FAQ

## How do I set the priority when automatically creating an incident from Zendesk?

At this time, we aren’t able to set the priority of an incident when creating it through the Target/Trigger method. You can submit this as a feature request [with our Support team](https://www.pagerduty.com/contact-us/).