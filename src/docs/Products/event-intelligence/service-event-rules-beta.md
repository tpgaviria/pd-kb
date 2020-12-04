---
title: "Service Event Rules - Beta"
slug: "service-event-rules-beta"
hidden: true
createdAt: "2019-04-22T22:13:03.759Z"
updatedAt: "2020-10-09T22:40:43.143Z"
---
[block:callout]
{
  "type": "info",
  "title": "Beta Notes",
  "body": "The following article references functionality that is not yet generally available. While it is being developed, you may see changes to the look and feel and features available. If you are interested in accessing this early beta functionality, please [contact PagerDuty Support](mailto:support@pagerduty.com)."
}
[/block]
Service Event Rules define automated actions to take on alerts created by services, based on the inbound events' payloads. All events that are sent to a Service, either via Global Event Routing or directly integrated with a Service Integration, are filtered through Service Event Rules. These rules perform actions on events and dictate how they turn into incidents on a service.
## Service Event Rule Actions

- Tailoring event actions as trigger / resolve
- Field extraction for the duplication key, summary or description
- [Changing the severity](https://support.pagerduty.com/docs/dynamic-notifications) of the resulting alert.
- [Suppressing](https://support.pagerduty.com/docs/event-management#section-suppression-and-event-rules) the alert altogether 
- Adjusting incident behavior (available with [Event Intelligence](https://support.pagerduty.com/docs/event-intelligence) only):
  * Waiting to create an incident until a given threshold of identical events occur within a set time limit.
  * Adding contextual notes to an incident.
  * Changing the priority of the incident.

Service Event Rules can be scheduled for a specific time or on a recurring schedule with the [Event Intelligence](https://support.pagerduty.com/docs/event-intelligence) package. They can also be used on services that use vendor-specific and API-based integrations with JSON/[PD-CEF](https://support.pagerduty.com/docs/pd-cef) fields. For email integrations, we recommend utilizing [email management rules](https://support.pagerduty.com/docs/email-management-filters-and-rules#section-trigger-and-resolve-alerts-with-email-management-rules). 
## Creating and Formatting Service Event Rules

To use event rules on a service, that service must first be set to create [alerts and incidents](https://support.pagerduty.com/docs/alerts#section-getting-started-with-alerts-and-incidents) for inbound events. To do this, go to **Services**, select **Service Directory** and then select the **service** where you would like to configure event rules. Click **Edit Service**, locate the **Incident Behavior** section at the bottom of the screen and select **Create alerts and incidents**.

![](https://files.readme.io/f5d0156-service-event-rules-service-settings.png)



![](https://files.readme.io/9c2009a-service-event-rules-incident-behavior.png)

Rules can then be added from the individual service page in the Event Rules tab. Applying rules to a service undergoes the same process as creating [global event rules](https://support.pagerduty.com/docs/global-event-routing#section-accessing-creating-and-formatting-event-rules). 

![](https://files.readme.io/dff3d34-service-event-rules-event-rules-tab.png)

Service Event Rules operate on CEF fields in order to normalize incoming events, particularly those that have been routed by way of a global event rule. The dropdown is populated by the [mapped CEF fields](https://support.pagerduty.com/docs/pd-cef) that allow users to create rule conditions. 

##Formatting Rules 

Supported Operations:
- A field contains/does not contain a value.
- A field equals/does not equal a value.
- A field exists/does not exist.
- A field matches/does not match a regular expression. Regular expressions must use [RE2 syntax](https://github.com/google/re2/wiki/Syntax). Service Event Rules only support one (e.g. the first) capture group within the regex.

If you are new to regex, we suggest testing your rules with an online regex tester. [regex101](https://regex101.com/) and [rubular](http://rubular.com/r/G0ViTWxgFO) are both excellent tools.

##Using Negative Operations

Rules with negative operations, such as “does not contain” or “does not equal”, will match events when the field in question does not exist. 

For example:
- severity field does not equal `critical`

These rules will also match any events where the severity field does not exist. If you'd like to avoid this, you must add an additional condition that matches only when the field exists. For example:

For example, when all conditions are true:
- severity field exists
- severity field does not equal `critical`

Note that you must select that all conditions must be true for the rule to match.


## FAQ

##When should I use Service Rules vs Global Event Routing? 
PagerDuty Event Rules can be applied either globally or on individual services. This allows rules to affect different scopes of control without interfering with each other. Note that event routing can only be performed at the global rules level.

We recommend implementing rules at the smallest applicable scope. For example, if a particular service is going under maintenance, it is better to implement a suppression rule on that service than a global rule scoped to only that service. This results in fewer rules in the global ruleset, and more visibility for the service owners into actions affecting their alerts.

##Why can’t I see the Event Rules tab?
The event rules tab is only available for services that you have enabled to create alerts. Some integrations do not allow you to create alerts.

##What are the differences between Global Event Routing and Service Event Rules?
Global Event Routing and Service Level Rules are designed to work together. Global Event Routing captures events through a global integration endpoint; from there, administrators can write rules to suppress or route events to specific services. Any well-formed event sent to the global integration endpoint that does not qualify for any of the defined rules will be automatically suppressed using the ‘catch-all’ rule and will not be routed to a service. 
Service event rules do not have a default catch-all rule. When an event arrives at a service, the mandatory fields that a catch-all rule would provide already exist via the service’s configuration.
Events can be directed to a service either through the Global Event Routing rule or a direct integration on the service. You do not need to set up a separate integration key to use Service Event Rules.