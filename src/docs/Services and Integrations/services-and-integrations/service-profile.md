---
title: "Service Profile"
slug: "service-profile"
hidden: false
createdAt: "2019-12-13T17:13:35.191Z"
updatedAt: "2020-11-03T23:42:36.500Z"
---
The service profile provides a high-level view of current context on a service's details. When collaborating across teams, you can see at-a-glance who owns the service, who’s on-call, or how to contact the Team responsible for the service. To access a service’s profile, navigate to **Services** :fa-arrow-right: **Service Directory** and click the desired service’s **name**.

![](https://files.readme.io/39b266b-service-profile-overview.png)

#Service Details
##Service Name and Description
The name and description of the PagerDuty service. Managers of a service and Global Admins can edit a service name or description inline by clicking the **Edit** button. For best practices on naming your services, please see our [Service Configuration Guide](https://community.pagerduty.com/t/service-configuration-guide/5110).

##Status
The status is the current state of the service with regards to whether there are any open incidents. 

* **No Open Incidents**: There are currently no open incidents on the service.
* **Awaiting Response**: There are one or more open incidents on the service with a Triggered status that have not been Acknowledged yet. 
* **Response in Progress**: There are one or more open incidents on the service with an **Acknowledged** status.
* **Disabled**: The service is currently disabled and will not trigger any new incidents.
* **Maintenance**: The service is currently in maintenance mode.

Status takes the following precedence: 

**Disabled** :fa-arrow-right: **Maintenance Window** :fa-arrow-right: **Active with/without incidents**.

##On Call Now
The current user(s) on call for the service. This will display the full list of users on call at the *first level* of the escalation policy. If no one is currently on call for the service, this information will be highlighted so that you can easily identify gaps in on-call coverage.

##Team
The [Team](https://support.pagerduty.com/docs/teams) that is associated with this service. If your account does not have the Teams feature available, the escalation policy associated with this service will be displayed instead.

##Communication Channel
The Communication Channel field allows you to configure a link back to your preferred communication channel where the service’s owner and/or Team can best be reached. This may be an email, URL to a Slack channel, or a link to another form of contact. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The Communication Channel added here is for your Teams’ internal use, and doesn’t impact any webhooks you may have configured."
}
[/block]
#Activity Tab
The Activity tab shows a timeline with current and recent activity for your service. 

##Recent Activity
This section will show you current incidents that have been triggered, maintenance windows, and when your service configuration was last edited. 

You can also take actions on incidents such as: **Acknowledge**, **Resolve**, **[Join Response](https://support.pagerduty.com/docs/add-responders)** or **Subscribe** to updates.

![](https://files.readme.io/cbe6470-service-profile-recent-activity.png)

##High Priority Incidents
This section shows incidents on the service with the two highest priority levels in your account (e.g. P1, P2 or SEV1, SEV2).

![](https://files.readme.io/974605a-high-priority-incidents.png)

##Suppressed Alerts
If there are [event rules](https://support.pagerduty.com/docs/event-management#section-suppression-and-event-rules) that suppress specific alerts for this service, you can view some of the most recent alerts here. 

![](https://files.readme.io/7339619-service-profile-suppressed-alerts.png)

##Maintenance Windows
If you have maintenance windows on this service, they will be listed here in order of when they are scheduled. 

#Integrations Tab

The Integrations tab includes any integrations and extensions that you connect to and receive PagerDuty alerts from. 

##Integrations
In the Integrations section, you can view and configure inbound integrations to send events to the service. You can also copy an integration key by clicking the clipboard icon next to it:

![](https://files.readme.io/fcf6d6f-service-profile-copy-integration-key.png)

###Add an Integration to a Service

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: select the **Integrations** tab :fa-arrow-right: click **Add a new integration**.
2. Enter an **Integration Name** in the format `monitoring-tool-service-name` (e.g. “Datadog-Shopping-Cart”).
3. There are three integration types:
   a.  **Select a Tool**: [Check to see if we have an existing integration for your service](https://www.pagerduty.com/integrations/). Search for your service by clicking on the dropdown menu next to *Integration Type*.
   b. **Integrate via Email**: If the tool you are integrating with this service can send email, you can [create an integration email address](https://www.pagerduty.com/docs/guides/email-integration-guide/).
c. **Use our API directly**: If the tool you are integrating with this service is able to make HTTP calls, you can trigger, acknowledge, and resolve incidents via our API. Our [developer documentation](https://v2.developer.pagerduty.com/docs) provides several examples.
4. Click **Add Integration**.

###Edit an Existing Integration

To edit an existing integration:

1.  Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: select the **Integrations** tab :fa-arrow-right: click the **Name** of your desired integration :fa-arrow-right: click **Edit Integration**.
2. On the next screen you may edit the **Integration name**, copy or **Generate a new integration key** and select how you would like alerts to be deduplicated in the **Deduplicate on** dropdown. 
3. Click **Save changes**.

###Edit Alert and Incident Settings

![](https://files.readme.io/7232deb-service-profile-alert-incident-settings.png)

To edit Alert and Incident Settings:

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: select the **Integrations** tab :fa-arrow-right: click **Edit** next to **Alert and Incident Settings**.
2. Select whether you would like to **Create both alerts and incidents** *or* **Create incidents only**.
3. Click **Save Changes**.

#Response Tab
The Response tab includes settings that help your team respond to incidents. 

##Automate 

Automate incoming alerts and how they are managed with [Event Rules](https://support.pagerduty.com/docs/event-management#section-service-event-rules) and [Alert Grouping](https://support.pagerduty.com/docs/intelligent-alert-grouping).

![](https://files.readme.io/43781e6-service-profile-automate.png)

##Assign and Notify 

Assign and notify your responders when an incident is triggered with custom [escalations](https://support.pagerduty.com/docs/escalation-policies), [notification behaviors, support hours](https://support.pagerduty.com/docs/service-settings#section-enable-urgencies), and actions.

![](https://files.readme.io/3ed4bb3-service-profile-assign-notify.png)

To edit these settings, you can click **Edit** and then change the default settings. There are four options to configure how your team is notified for an incident:

* **High-urgency notifications, escalate as needed**: Any incidents triggered with this setting will notify the on-call responder based on the high-urgency notification settings on their profile and the incident will escalate using escalation policy rules.
* **Low-urgency notifications, do not escalate**: Any incidents triggered with this setting only notify the current on-call responder based on the low-urgency notification settings on their profile, and it will not escalate the incident.
* **Dynamic Notifications based on alert severity**: Notify users about incidents classified as either high or low based on the criticality defined by the integrated monitoring tool.
* **Based on support hours**: Responders will only be notified within your predefined Support Hours. You may designate specific notification settings during and outside of Support Hours. *Optional*: You may also choose to check the **Raise urgency of unacknowledged incidents to high** checkbox.

You can learn more in our [Configurable Service Settings](https://support.pagerduty.com/docs/service-settings#section-high-and-low-urgency-incidents) article. 


##Remediate 

Remediate incidents faster with a link to your team’s runbook for triaging incidents, or a [custom incident action](https://support.pagerduty.com/docs/custom-incident-actions).

![](https://files.readme.io/d7a57ce-service-profile-remediate.png)

##Co-ordinate Responders and Stakeholders 

Coordinate responders and stakeholders by automatically adding a default conference bridge to incidents on this service and immediately [run a response play](https://support.pagerduty.com/docs/response-automation) to engage stakeholders.

![](https://files.readme.io/3091d0e-service-profile-coordinate-responders.png)

#Impact Tab

##Service Dependencies

Service Dependencies can be used to define other technical or business services that your service uses or is used by your service. If an issue arises on your service or one of the dependencies you have configured, you can use the impact tab to quickly assess the scope of the impact. 


![](https://files.readme.io/8e16314-service-dependencies.png)

You can expand each technical service to see details such as the associated escalation policy and who is currently on-call. 

### Add or Remove Service Dependencies via the Web App

1. Navigate to **Services** :fa-arrow-right: **Service Directory** and click the **title** of your desired service.
2. Select the **Impact** tab. There are two sections: Add/Edit services that this service **uses** or add/edit ones that this service is **used by**. Click **Add services** or **Edit Services** to add/edit to your desired use case. 
3. On the Edit Services screen, you may search by service name, or select one from the **Business Services** or **Technical Services** tabs. 

   * **To add a service dependency**: Click the :fa-plus: button to add your preferred service(s); you may add multiple Business and Technical services. *Optional*: You may also create a new Business or Technical service from this screen by clicking **Create a New Business Service** or **Create a New Technical Service** from each of their corresponding tabs. This will open the [Business Service](https://support.pagerduty.com/docs/business-services#create-a-business-service) or [Technical Service](https://support.pagerduty.com/docs/services-and-integrations#create-a-new-service) configuration screen in a new tab.
   * **To remove a service dependency**: Click the :fa-minus: button next to the service name.

4. Click **Save Changes**.

![](https://files.readme.io/eb7fc84-service-dependencies-add-services-web-app.png)

### Add Service Dependencies via API

You may [add service dependencies using our REST API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1service_dependencies~1associate/post).

### Service Dependencies in Incidents

You may view and add Service Dependencies from incidents using our [Technical Service Dependencies for Triage](https://support.pagerduty.com/docs/editing-incidents#technical-service-dependencies-for-triage) feature.

## Suggested Service Dependencies

Suggested Service Dependencies uses machine learning to suggest other services that may depend on your service, or that your service depends on. If incidents on your service tend to be followed by incidents on another service, or vice versa, Suggested Technical Service Dependencies will be provided. This feature ensures that a service’s dependency topography is continually up-to-date as your technical infrastructure evolves and changes. You may view Suggested Service Dependencies on individual services’ Impact tabs or on an active incident, which will have a blue pill with the number of suggested dependencies, if they are available:

![](https://files.readme.io/e242135-Screen_Shot_2020-11-03_at_3.42.09_PM.png)

### View and Add Suggested Service Dependencies

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click your desired service’s **name** :fa-arrow-right: **Impact** tab. If your service has suggested dependencies, you will be able to view them by clicking the blue **Suggested Technical Dependencies** dropdown. If the machine learning algorithm has not detected any suggested dependencies, this blue dropdown will not be available.
2. **To add a Suggested Service Dependency**: Click the :fa-check: next to the service name. **To dismiss a Suggested Service Dependency**: If you do not feel that a Suggested Service Dependency correlates with your service, click the :fa-times: next to the service name to dismiss the suggestion. **Please Note**: Once you dismiss a suggestion, it will never be shown again as a suggestion. If you change your mind, however, you may always [manually add that dependency](https://support.pagerduty.com/docs/service-profile#add-or-remove-service-dependencies-via-the-web-app). 

![](https://files.readme.io/3443904-suggested-service-dependencies-dropdown.png)

#FAQ

##What’s the difference between the service profile and the old service configuration page?
1. We’ve replaced the view of all incidents with an Activity Timeline to better highlight the most recent changes and incidents for the service.
2. We have added Suppressed Alerts as well as Maintenance windows so you can see related information that may be impacting a service.
3. We’ve added **Runbooks** and **Communication Channel** metadata to enrich your Service information.
4. We’ve consolidated various configuration settings on a single, user-friendly page with inline editing.
 

##I already have a Slack channel configured for my service, why is it not appearing under Communication channel?
Communication channels are configured separately from Slack extensions for the service. You may have a channel where you’ve configured your PagerDuty notifications to appear, but the Communication channel should be where other teams can best reach out to your team. This may or may not be the same as the channel where your Slack extension is configured.