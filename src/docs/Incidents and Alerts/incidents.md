---
title: "Incidents"
slug: "incidents"
excerpt: "Trigger, acknowledge and resolve incidents created by service integrations"
hidden: false
createdAt: "2017-05-10T17:28:08.625Z"
updatedAt: "2020-10-09T21:14:09.446Z"
---
An incident represents a problem or an issue that needs to be addressed and resolved. Incidents trigger on a service, which prompts notifications to go out to on-call responders per the service's escalation policy.
[block:api-header]
{
  "title": "Incident States"
}
[/block]
* **Triggered** - An active service — meaning someone is on-call and the service is not disabled or in maintenance mode — will trigger an incident when it receives an event. The incident will escalate according to the service's escalation policy. By default, PagerDuty sends notifications when an incident is triggered, but not when it is acknowledged or resolved. Users create their own rules — or can use webhooks — to receive notifications when an incident is acknowledged or resolved.

* **Acknowledged** - An acknowledged incident is being worked on, but is not yet resolved. The user that acks an incident claims ownership of the issue, and halts the escalation process. Once an incident is acknowledged, the assignee will not receive notifications unless the [Incident Ack Timeout](https://support.pagerduty.com/docs/service-settings#section-acknowledgement-timeouts) is reached. Once the Incident Ack Timeout is reached, the incident returns to a **triggered** state and notifications are sent again. The escalation process also resumes.

* **Resolved** - A resolved incident has been fixed. Once an incident is resolved, no additional notifications are sent and the incident cannot be triggered again.
[block:api-header]
{
  "title": "Incident Lifecycle"
}
[/block]
##1. Received through Services
PagerDuty receives events from monitoring systems via integrations. An event creates an alert and an associated incident in PagerDuty.
[block:callout]
{
  "type": "info",
  "body": "[Suppression](https://support.pagerduty.com/docs/event-management-tools#section-suppression-and-event-rules) can be used to collect data without triggering an incident or notifying responders.",
  "title": "Note"
}
[/block]
##2. Assignment via Escalation Policies and Schedules
Unlike an alert or a suppressed event, an incident must be assigned to a user. The escalation policy determines whom an incident is assigned to. An escalation policy has one or more levels, and can accept either a schedule or a user as a target. An incident will escalate through the layers of an escalation policy until it finds someone who is on-call. This user will be notified and the incident will be assigned to them. If the user fails to acknowledge the incident before the time limit set on the escalation policy, the incident escalates to the next escalation level.

##3. Notifications via Phone, SMS, Email, or Push
Each user configures notification rules in their user profile. PagerDuty contacts users according to their notification rules until the incident is acknowledged, resolved, or escalated, either manually or due to escalation timeout.

##4. Acknowledging and Resolving
Notifications provide a way for responders to acknowledge that they're working on an incident or it's been resolved. Depending on a user's permissions, it's also possible for users who are not currently assigned to an incident to acknowledge or resolve an incident on the **Incidents** dashboard in the web UI.

For services using alerts, it is important to note that alerts cannot be acknowledged, only triggered or resolved. If all alerts in an incident are resolved, the incident will be resolved. Similarly, when an incident is resolved, all alerts under that incident are also resolved.

Resolving an incident closes the incident, while acknowledging only halts escalation. If the incident is not resolved before the end of the service's acknowledgement timeout, it re-triggers and continues to escalate.

Manually resolving an incident in the web UI will prompt a confirmation box with a final Resolve Incident button. If you’re resolving only one incident, then you can add an optional Resolution Note. The Resolution Note appears in the notes section of the incident. 

Services can also be configured to automatically resolve incidents using the Incident [Auto-Resolution](https://support.pagerduty.com/v1/docs/service-settings#section-auto-resolution) option.

# Incident Timeline

Each incident has a **Timeline** tab in the incident details page, showing timestamps of each [incident state](https://support.pagerduty.com/docs/incidents#incident-states) along with all other actions taken and notifications sent from the incident. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a8a3c08-incidents-timeline.png",
        "incidents-timeline.png",
        1233,
        463,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
#Unacknowledging an Incident

If you accidentally acknowledge an incident, you can undo this by clicking the **More Actions** button in the incident, and then **Unacknowledge Incident**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5638e2-incidents-unacknowledge-incident.png",
        "incidents-unacknowledge-incident.png",
        444,
        382,
        "#efedf0"
      ],
      "sizing": "80"
    }
  ]
}
[/block]
Unacknowledging an incident brings the incident back to a **Triggered** state, and causes notifications to be sent out again. The escalation process also resumes.

Unacknowledging an incident can only be done from the web UI.

[block:api-header]
{
  "title": "Incident Redaction"
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "This action is only available to the Account Owner. Redaction cannot be undone, not even by PagerDuty Support.",
  "title": "Required User Permissions"
}
[/block]
In the event that an incident contains sensitive information, the **Account Owner** can permanently delete the incident's details by selecting **More Actions** and clicking the **Redact Incident** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f1849c2-incidents-redact-incident.png",
        "incidents-redact-incident.png",
        1548,
        614,
        "#f6f6f6"
      ]
    }
  ]
}
[/block]
After confirming that you would like to redact an incident’s name and details, it will be updated to show who redacted the data and when.
[block:api-header]
{
  "title": "Triggering an Incident via Web UI, API or Email"
}
[/block]
There is more than one way to trigger an incident. In the PagerDuty web UI, you can trigger an incident on any service's page or on the **Incidents** page. There are two integration types — API and email — and each can be used to trigger an incident as well.
[block:callout]
{
  "type": "info",
  "body": "In order for an incident to trigger, someone must be on-call per the service's escalation policy. If no one is on-call an incident will not trigger."
}
[/block]
##Manually Trigger an Incident

Manually opening an incident on a service will trigger an incident and notify the on-call responder. A common use case for this is to test notification rules, or to contact the on-call person to let them know about an issue on a particular service.
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "All users, except Restricted Access, Observers, Limited Stakeholders and Full Stakeholders, can manually trigger incidents.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
There are two places in PagerDuty where you can manually trigger an incident:

* On the **Incidents** page, click **New Incident**.
* Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the **Name** of your desired service :fa-arrow-right: **New Incident**.

In the **Create Incident** dialog, you can optionally choose an escalation policy or a user from their respective tabs. This selection will override the *service's* escalation policy, and the incident will notify the escalation policy or user you've selected.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/09edca6-incidents-service-new-incident-change-ep.png",
        "incidents-service-new-incident-change-ep.png",
        1076,
        634,
        "#f6f5f7"
      ]
    }
  ]
}
[/block]
If you assign a manually triggered incident to yourself, PagerDuty will not notify you. The incident will be in an Acknowledged state since it is understood that you are aware of the incident and working to resolve it.

##Send an Event Through the API

If a service has an API integration, you can trigger an incident by sending a properly-formatted `POST` request with your integration key.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e328861-incidents-api-integration-key.png",
        "incidents-api-integration-key.png",
        1476,
        376,
        "#ecedeb"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "",
  "body": "More info about the Events API can be found [here](https://v2.developer.pagerduty.com/docs#the-events-api). Please see [this article](https://support.pagerduty.com/v1/docs/code-samples) for code samples in Ruby, Python, and PHP."
}
[/block]
##Send an Event to an Email Integration

If a service has an email integration, you can trigger an incident by sending an email to the integration's email address. To view an email integration's address go to **Services** :fa-arrow-right: **Service Directory**, select the service, click service's **Integrations** tab and look in the **Integration Key** field.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bc3d58a-incidents-email-integration-key.png",
        "incidents-email-integration-key.png",
        1668,
        378,
        "#edeeec"
      ]
    }
  ]
}
[/block]
When you send an email to the integration email address, an incident will trigger on that service. The incident will appear in the **Incidents** tab.
[block:api-header]
{
  "title": "Where is incident number ___?"
}
[/block]
In the past, we made sure that incidents started at #1 and never skipped a number. There can be cases, however, where we're unable to create incidents fast enough. To address this, you might notice "missing" incident numbers. We don't delete your incident numbers, so if you see a skipped number, this means it was skipped when the incident was created. You should not see this often, and it does not indicate a problem.