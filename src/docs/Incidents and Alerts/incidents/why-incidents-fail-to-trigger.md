---
title: "Why Incidents Fail to Trigger"
slug: "why-incidents-fail-to-trigger"
excerpt: "Troubleshooting common issues related to incident trigger failure"
hidden: false
createdAt: "2017-05-16T14:15:40.321Z"
updatedAt: "2020-10-07T22:02:41.293Z"
---
[block:api-header]
{
  "title": "Why was an Incident not Triggered or Created?"
}
[/block]
There are a few reasons why an incident would not be triggered or created in PagerDuty:
- [A Service was Disabled or Placed in Maintenance Mode](#section-a-service-was-disabled-or-placed-in-maintenance-mode)
- [Event Rules are Configured to Suppress Certain Alerts](https://support.pagerduty.com/docs/why-incidents-fail-to-trigger#section-event-rules-are-configured-to-suppress-certain-alerts)
- [Email Integration Settings are Filtering out Emails](#section-email-integration-settings-are-filtering-out-emails)
- [Email Management Rules are Appending Triggers to Existing Incidents](#section-email-management-rules-are-appending-triggers-to-existing-incidents)
- [Nobody was On-call](#section-nobody-was-on-call) 
[block:api-header]
{
  "title": "A Service was Disabled or Placed in Maintenance Mode"
}
[/block]
When a service is [disabled](/docs/maintenance-windows#section-disable-a-service) or in [maintenance mode](/docs/maintenance-windows#section-scheduling-maintenance), new incidents will not be triggered or created for that service. Because an incident is not created, PagerDuty will not send notifications to the person on-call for that service.
[block:api-header]
{
  "title": "Event Rules are Configured to Suppress Certain Alerts"
}
[/block]
If you have [Service Event Rules](https://support.pagerduty.com/docs/event-management#section-configure-event-rules-for-a-service) or [Global Event Rules](https://support.pagerduty.com/docs/global-event-rules) configured on your account, you may have event rules that are set to suppress alerts that meet certain criteria, and in those cases, an incident will not be triggered. 

For Service Event Rules, navigate to **Services** :fa-arrow-right: **Service Directory**, click the **name** of the service where you expected the incident to trigger, and select the **Response** tab. 
Under the Automate section you will either see a link to see your event rules or a message saying there are no event rules for this service. Check any event rules to see if **Suppress** is displayed under **Actions Performed**.

For Global Event Rules, navigate to **Services** :fa-arrow-right: **Event Rules**. Next, check to see if any of your event rules have **Suppress** selected under **Actions performed**, or if they have **Route to a service** selected, but also **Suppressing until more than X alerts received within X minutes** is selected:
[block:api-header]
{
  "title": "Email Integration Settings are Filtering out Emails"
}
[/block]
If you have regex filters set up on your email integration service, then you will want to check to make sure that your regex filters are not [filtering out emails](doc:email-management-filters-and-rules#section-limit-noise-with-email-integration-filters) that you want to trigger incidents.

For example, if you have the following regex filter:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7948e76-why-incidents-fail-regex-rules.png",
        "why-incidents-fail-regex-rules.png",
        1628,
        930,
        "#f1f2f2"
      ]
    }
  ]
}
[/block]
Then emails with the subject line "PROBLEM" will not trigger incidents in PagerDuty, because they are filtered out based on your regex rules.
- [View some regular expression examples](/docs/email-management-filters-and-rules#section-regular-expression-tips-examples)
- [Test your regular expressions with Regex101](https://regex101.com/) (Use the Golang flavor with the `m` and `s` flags to see exactly how PagerDuty will interpret your regex).
[block:api-header]
{
  "title": "Email Management Rules are Appending Triggers to Existing Incidents"
}
[/block]
Email integration settings also have email management rule settings. These are distinct from email filters. While email filters determine which emails trigger incidents for your service, incident creation settings determine how emails create new incidents. 

If you have either of these two email management rules for your email integration service:

- **Open a new alert only if an open incident does not already exist**
- **Open and resolve alerts based on custom rules**

...then an incident was most likely appended to an existing incident, which would explain why a new incident was not created. When a trigger is appended to an incident it will appear in the same incident timeline. [Learn more about incident creation settings](/docs/email-management-filters-and-rules#section-trigger-and-resolve-alerts-with-email-management-rules).
[block:api-header]
{
  "title": "Nobody was On-call"
}
[/block]
If no one is on-call on a service's escalation policy, PagerDuty does not have a user to assign an incident to, and we will not create a new incident. 

For example, if your escalation policy only has the following schedule associated with it, where one user is on-call from 00:00 - 08:00, if a trigger comes in between 08:01 - 23:59, no new triggers will be created in PagerDuty because no one will be on-call.

To address this, check the [escalation policy](doc:escalation-policies) associated with your service and make sure that someone will be on-call when you need incidents to trigger.
[block:callout]
{
  "type": "info",
  "body": "If you try to trigger a new incident through the website while nobody is on-call on the escalation policy associated with that service, you will receive the error **Incident could not be assigned**.",
  "title": "Note"
}
[/block]