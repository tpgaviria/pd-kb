---
title: "Event Management"
slug: "event-management"
excerpt: "Methods for alert noise reduction"
hidden: false
metadata: 
  title: "Event Management"
  description: "service event rules, deduplication, suppression"
createdAt: "2017-05-10T20:01:38.515Z"
updatedAt: "2020-10-09T21:18:53.620Z"
---
Event management reduces notification fatigue and helps your team focus on tackling the right issues at the right time. The following methods are effective ways to prevent notification fatigue: 

- [Deduplicating Incidents](#section-deduplicating-incidents) (for services with API integrations).
- [Adjusting your Email Management Settings](#section-adjust-your-email-management-settings) (for services with email integrations).
- [Using Dynamic Notifications](#section-dynamic-notifications) to set alert severity.
- [Using Event Rules](#section-event-rules) to automatically deduplicate or suppress alerts.

#Deduplicating Incidents

For services with API integrations, if multiple incidents are triggering for the same issue, your team will be notified for each duplicate incident. To group these incidents, you will want to include `dedup_key` (Events API v2) or `incident_key` (Events API v1) in your parameters for triggering incidents.

PagerDuty de-duplicates incidents based on the `dedup_key`/`incident_key` parameter — this identifies the incident to which a trigger event should be applied. If there are no open (unresolved) incidents with this key, a new incident will be created.

If there is already an open incident with a matching key, this event will be appended to that incident's alert log as an additional **Trigger** log entry.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f79c46f-event-management-deduplicating-incidents.png",
        "event-management-deduplicating-incidents.png",
        1584,
        372,
        "#f8f9fb"
      ]
    }
  ]
}
[/block]
If the event key field isn't provided, PagerDuty will automatically open a new incident with a unique key.

To learn more about how to deduplicate incidents, please visit our [Developer Docs](https://v2.developer.pagerduty.com/docs/events-api-v2#alert-de-duplication).

#Adjust your Email Management Settings
If you have an [email integration](https://www.pagerduty.com/docs/guides/email-integration-guide/) you can change your incident creation settings so that incidents are only triggered under certain conditions.

There are four types of email management settings: 
- **Open a new alert/incident for each trigger email**: Each email sent to the service's email address will open a new incident.
- **Open a new alert/incident for each new trigger email subject**: Incidents are de-duped based on the subject of the trigger emails. For example, if two emails with the same subject are sent to this service's email address, the first opens a new incident, and the second is appended to this incident.
- **Open a new alert/incident only if an open incident does not already exist**: An email sent to the service's email address will only open a new incident if they service has no open incidents; otherwise, the email will be appended to the open incident.
- **Create and resolve alerts/incidents based on custom rules**: Use [regular expressions](/docs/email-management-filters-and-rules#section-advanced-email-management-extracting-information-with-regular-expressions) to parse incident triggers and resolves.

The last three incident creation settings are ones that allow alert/incident de-duplication and reduce the number of notifications being sent. 

To change the incident creation settings for your email integration service:
1. Go to **Services** :fa-arrow-right: **Service Directory**.
2. Click on the **name** of the service that houses the integration, then select the **Integrations** tab. Click into your email integration and click **Edit Integration** on the right hand side. 
3. Select the appropriate email management setting from the four options provided above.
4. Click **Save changes**.

For more in-depth information about email management settings, please visit our article about [email filters and email management rules.](https://support.pagerduty.com/docs/email-management-filters-and-rules) 

##Email Truncation
If an email that triggered an incident is not displayed in its entirety in PagerDuty, it may have been truncated due to its size.

If the email (including headers, attachments, etc.) is under 96 KB, the message can pass through without truncation. If the message is over 96 KB, the following can happen:
1. Any parts of the email body where the Content-Type are not matched by this regular expression will be discarded:
    `/(text\/(plain|html)|multipart\/)/`
This means PDF files and similar attachments will be stripped.
2. Text parts (Content-Type of `text/plain` or `text/html`) will be truncated to 32 KB.
3. If the resulting total email size (including headers, attachments, etc.) still exceeds 192 KB then we will reject the message.

You can tell if a message has been truncated or had attachments removed by checking for the headers `X-PagerDuty-Truncated-Part` or `X-PagerDuty-Removed-Attachments` when viewing the raw message. You can view the raw message on the incident's individual page by clicking **View Message** on an incident log entry, then **View Raw Message**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2a6d9aa-event-management-email-truncation.png",
        "event-management-email-truncation.png",
        595,
        142,
        "#f1eae5"
      ]
    }
  ]
}
[/block]
###Email Size Limits
If an email is over 10 MB, our server will reject it.

###Incident Key Truncation
If the incident key of the email that triggered an incident is more than 255 characters it will be truncated to 255 characters.

###Truncation of Incident Details in Email Notifications
When you receive a PagerDuty email notification, the **Details** section of each incident will be truncated to 500 characters. That said, the entire email body is accessible in the PagerDuty web UI via the incident logs and details, or via the mobile app.

#Dynamic Notifications

Dynamic notifications allow you to generate alerts with a severity field. When an incident is generated from an alert, the alert’s severity field allows you to filter how responders are notified, if they are notified at all. Please read our [Dynamic Notifications](https://support.pagerduty.com/docs/dynamic-notifications) article for configuration instructions and more information.

#Event Rules

Event rules define automated actions to take on alerts created by services, based on conditions that apply to information in the inbound events' payloads. Event rules can perform actions such as deduplicating or automatically suppressing alerts altogether. Depending on your use case, there are two types to choose from:

* **Global Event Rules**: When a new integration event stream has more than one service destination, you can use global event rules and a global Integration Key to ingest and route your events to the right service. When an event is routed to a service that contains service event rules, then it will also be evaluated by service event rules at the time of event ingestion, after global event rules have been evaluated. If your existing service integrations have the same event stream integrated into multiple services, consider migrating those integrations to a global ruleset and use routing rules to direct events to the correct services. Please read our [Rulesets](https://support.pagerduty.com/docs/rulesets#section-global-rulesets) article for configuration instructions and more information.
* **Service Event Rules**: When integrations already exist on a service, you can use service event rules to evaluate your events instead of migrating them to a global event rule. Service event rules only apply to events generated by the service where they are configured. Please read our [Rulesets](https://support.pagerduty.com/docs/rulesets#section-service-event-rules) article for configuration instructions and more information.
[block:callout]
{
  "type": "success",
  "title": "Best Practices",
  "body": "For more information on use cases for global vs service event rules, please [visit our Service Configuration Guide FAQ](https://community.pagerduty.com/forum/t/service-configuration-guide/1660)."
}
[/block]
#Suppressing Alerts

Suppression, as opposed to setting alert severity, allows you to send events to PagerDuty without triggering any notifications. Suppressed alerts are stored in PagerDuty and available for forensics, analysis, and context, but do not create incidents. Suppressed alerts can be viewed in the alerts list as well as the [Infrastructure Health Application](doc:operations-command-console#section-infrastructure-health-application).

To suppress an alert if it matches a given set of conditions, select **Suppress** as the [action to take when you are building your event rules](https://support.pagerduty.com/docs/rulesets#section-event-rule-actions).

##Viewing Suppressed Alerts
Suppressed alerts are filtered out of the incidents dashboard by default, including the incidents page for the service on which the suppressed alerts were triggered. Moreover, because suppressed events do not trigger incidents, they will not be visible in the mobile app.

They can be viewed in the Alerts page under **Incidents > Alerts**.

Here is an example of a suppressed event. It looks very similar to other alerts, but has "Suppressed" in the severity field and is not assigned/assignable.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a7236ae-event-management-suppressed-event.png",
        "event-management-suppressed-event.png",
        987,
        552,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
The incident below was triggered on a service with alerts set up to trigger as suppressed by default.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1bb86c1-event-management-event-via-api.png",
        "event-management-event-via-api.png",
        687,
        720,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]
#FAQ

##What is the difference between deduplication and suppression?

* **Deduplication**: Alerts with the same incident key are grouped together into the same incident and do not generate multiple notifications. 
* **Suppression**: Alerts are filtered by the conditions set in your event rules, and *those that match your criteria* are suppressed and stored in PagerDuty to be available for forensics, analysis, and context. The major difference between suppressed and deduplicated alerts is that suppressed alerts do not create *incidents*. Suppressed alerts can be viewed in the alerts list as well as the [Infrastructure Health Application](doc:operations-command-console#section-infrastructure-health-application).