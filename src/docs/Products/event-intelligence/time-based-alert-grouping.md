---
title: "Time Based Alert Grouping"
slug: "time-based-alert-grouping"
excerpt: "Automatically group incoming alerts into open incidents based on the time they are generated"
hidden: false
createdAt: "2017-06-22T00:00:18.087Z"
updatedAt: "2020-10-08T16:16:17.508Z"
---
When enabled, Time Based Alert Grouping will automatically add incoming alerts into open incidents on a service to help keep you focused on the problem at hand. Once Time Based Alert Grouping is enabled on a service, the first new incoming alert will create a new incident. Subsequent alerts will be added to that incident for the specified time period while the incident is open.
[block:callout]
{
  "type": "info",
  "body": "Time Based Alert Grouping is available to customers on our Digital Operations, and [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature."
}
[/block]
# Configure Time Based Alert Grouping

To configure Time Based Alert Grouping:

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click your preferred service **name** :fa-arrow-right: **Response** tab :fa-arrow-right: click **Edit** under **Alert Grouping.**  ** Note**: This option is only accessible if the option to **Create alerts and incidents** is also enabled on the service (**Integrations** tab :fa-arrow-right: **Alert and Incident Settings**).
2. Select **For the following duration:** and then select the **time period** from the dropdown. Click **Save Alert Grouping Settings**.

If you choose a time window, the timer will start when an incident is triggered on a service by an alert. From there, all alerts received on that service will be grouped for the given time period. If the incident is resolved within that time period, the timer will stop, and no subsequent alerts will be grouped into that incident.  The timer will restart when the next alert on that service comes in and triggers a new incident. Otherwise, if the incident is not resolved within that time period, the incident will remain open and the next alert will trigger a new incident. All subsequent alerts will be grouped into the new incident. 

If you choose ‘Until incident is resolved’, the first alert on the service will trigger an incident and all subsequent alerts will be grouped into that incident until it is resolved, regardless of time span.

Alerts are not automatically grouped into manually triggered incidents. 

# Important Notes

1. The service must have **Incidents & Alerts** enabled in Settings. 
2. While the feature is designed to reduce notification noise, the number of times you are actually notified will be based on your Notification Rules. If you have an Acknowledgement Timeout set up on a service, and you have a rule set up to receive a phone call when that timeout is reached, you will still get that phone call.
3. Alerts not grouped in a manner that you intended can be manually moved to new or existing incidents. From the Alerts tab on the Incident Details, there is the option to “Move to a new incident” or “Move to an existing incident.”  You will see a modal offering you the option to move this alert to a new incident or move to an existing incident.

# Time Based Alert Grouping Examples

**Shopping Cart** service is configured for Time Based Alert Grouping, 1 hour time window.
[block:parameters]
{
  "data": {
    "h-1": "Example 1: Incident resolves within 45 minutes",
    "h-2": "Example 2: Incident does not resolve within 1 hour",
    "0-0": "10:00am",
    "0-1": "TRIGGERED: An alert comes in, creates Incident 1. The 1 hour timer begins, set to group all new alerts on the **Shopping Cart** service into Incident 1 until 11:05am.",
    "0-2": "TRIGGERED: An alert comes in, creates Incident 1. The 1 hour timer begins, set to group all new alerts on the **Shopping Cart** service into Incident 1 until 11:05am.",
    "1-1": "ACK: Responder acknowledges Incident 1",
    "1-0": "10:07am",
    "1-2": "ACK: Responders acknowledges Incident 1",
    "2-0": "10:15am",
    "2-1": "Five more alerts come in on Shopping Cart. Incident 1 now has 6 alerts, all triggered.",
    "2-2": "Five more alerts come in on Shopping Cart. Incident 1 now has 6 alerts, all triggered.",
    "3-0": "10:45am",
    "3-1": "RESOLVE: The responder resolves Incident 1. New alerts on the Shopping Cart service will no longer be grouped into incident 1.",
    "3-2": "Incident 1 is still in the acknowledged state, grouping alerts.",
    "4-0": "10:55am",
    "4-1": "TRIGGERED: An alert comes in on Shopping Cart service, creates Incident 2. A new 1 hour timer begins, set to group all new alerts on the Shopping Cart service into Incident 2 until 11:55am.",
    "4-2": "An alert comes in on Shopping Cart, is grouped into Incident 1.  Incident 1 now has 7 alerts: 3 resolved, 4 triggered.",
    "5-0": "11:00am",
    "5-1": "Incident 1 is resolved, Incident 2 is triggered with 1 alert.",
    "5-2": "Incident 1 is still acknowledged, the timer is up and PagerDuty will no longer actively group new alerts into Incident 1. Incident 1 is acknowledged with 7 alerts.",
    "6-0": "11:10am",
    "6-1": "An alert comes in, is grouped into Incident 2. Incident 2 now has 2 alerts.",
    "6-2": "TRIGGERED: An alert comes in, creates Incident 2. The The 1 hour timer begins, set to group all new alerts on the **Shopping Cart** service into Incident 2 until 12:10am."
  },
  "cols": 3,
  "rows": 7
}
[/block]
# FAQ

###How is this different from deduplication?

Deduplication is configured on a per-integration basis, and often requires specific event information, like an incident key or an alert key. Deduplication is great for services with one simple integration. When you have multiple integrations on a service, or your monitoring tool generates a wide variety of alerts, it can become increasingly difficult to manage. Time Based Alert Grouping allows you to group all incoming events on the service into the current incident for the specified time period, regardless of the monitoring tool from which the alert originated.

###How is this different from snoozing? 

Snoozing keeps an incident from moving up the chain of an Escalation Policy and notifying users. Snoozing does not prevent new incidents from being generated on a service. 

###Can I still manually merge incidents? 

Yes. Time Based Alert Grouping will have no effect on your ability to manually merge incidents. All grouped alerts will be merged into a single incident.

###Can alerts be grouped into a manually triggered incident?

Alerts are only grouped into incidents that were initially created by an alert. Alerts will not be grouped into incidents that are manually triggered on a service. 

###Will incidents created by REST API be grouped by Time Based Alert Grouping?

No. Like manual creation, the [incidents REST API](https://v2.developer.pagerduty.com/docs/incident-creation-api) bypasses alerts and creates incidents directly. Thus, it is not affected by Time Based Alert Grouping, which extends the behavior of how inbound events and alerts translate to triggered incidents. 

This would also apply to any and all integrations that create incidents via REST API, which includes the [ServiceNow Enterprise integration](https://www.pagerduty.com/docs/guides/ServiceNow-integration-guide/).

###Is there a limit to how many alerts can group into a single incident?

Yes - incidents are limited to 1000 alerts each. After this limit is reached, a new incident will be created and subsequent alerts will continue grouping under the new incident.