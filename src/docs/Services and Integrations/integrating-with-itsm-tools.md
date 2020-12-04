---
title: "Integrating PagerDuty With ITSM Tools"
slug: "integrating-with-itsm-tools"
excerpt: "Integrate PagerDuty's incident response capabilities with your ITSM tools"
hidden: false
createdAt: "2017-12-07T23:17:26.112Z"
updatedAt: "2020-09-18T23:18:51.446Z"
---
ITSM tools typically excel at ticketing-related workflows and are used to create and track all customer and service-desk-reported incidents. However, ITSM tools usually don’t have effective response capabilities, particularly for critical impact incidents requiring urgent response. Because of this, PagerDuty’s extensive [incident response capabilities](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) are commonly used to augment an ITSM tool deployment. In this configuration, certain incidents in the ITSM tool are synchronized into PagerDuty, at which point PagerDuty’s coordinated response and stakeholder communication features can be leveraged.

PagerDuty integrates with a number of ITSM tools, including:
  * [ServiceNow](https://support.pagerduty.com/docs/servicenow-integration-guide)
  * [ServiceNow Express](https://www.pagerduty.com/docs/guides/servicenow-express-integration-guide/)
  * [Remedy](https://www.pagerduty.com/docs/guides/bmc-service-desk-integration-guide/)
  * [JIRA](https://support.pagerduty.com/docs/jira-cloud)

Many of the ITSM tool integrations also synchronize PagerDuty incident changes back to the originating ticket in the ITSM tool; these synchronized changes include escalations, re-assignments, priority changes, state changes, and notes.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "* **Ticketing integrations**: Jira and Jira Service Desk are available our Professional, Team (legacy), Business, and Digital Operations plans.\n* **Advanced ITSM integrations**: ServiceNow, Remedy and Cherwell are only available on our Business and Digital Operations plans.\n\nPlease [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring the above integrations."
}
[/block]
#Integrating Monitoring Tools and ITSM Systems via PagerDuty

ITSM systems often don’t integrate well with monitoring tools, as they are inherently designed to work with human-speed data, rather than the machine-speed data flows that monitoring tools generate. In cases where ITSM systems are used with monitoring tools, it often results in a “swivel-chair” workflow: in this form of integration, a user works directly with a monitoring tool; then when they determine an incident is occurring, they switch applications and manually create a ticket in the ITSM system, using clipboard cut-and-paste to move the data over. This workflow is cumbersome, error-prone, and provides no direct linkage between operational data and ITSM tickets.

Using PagerDuty to integrate monitoring tools and ITSM systems results in an improved workflow. [Integrating a monitoring tool](https://support.pagerduty.com/docs/services-and-integrations#section-add-integrations-to-an-existing-service) with PagerDuty is extremely simple, and can often be completed in just a few minutes. Once the monitoring tool is integrated, events will be sent to PagerDuty, where they can be routed to services and turn into an incident, have event rules applied, be filtered out if appropriate, and much more. Any incident that requires attention will be automatically assigned to the appropriate responder according to scheduled on-call rotations. For straightforward issues, the initial responder can handle the issue directly; in other cases the responder will triage the incident and classify it using the established [incident priority](https://support.pagerduty.com/docs/incident-priority) levels.

At this point, many organizations will want to have an ITSM ticket created to track the incident. Instead of creating a ticket manually, the responder can simply click a button within PagerDuty to create an ITSM ticket.

After the ITSM ticket is created, the PagerDuty incident and ITSM ticket are linked, and updates to the PagerDuty incident will be reflected in the ITSM ticket. This is beneficial in many ways:
  * **Incident response orchestration**: PagerDuty has response mobilization, stakeholder communication, and other response orchestration capabilities, all of which can be leveraged directly from the PagerDuty incident.
  * **Data linkage**: For review and reporting purposes, the ITSM ticket is linked to the PagerDuty incident, which in turn is linked to the underlying monitoring tool alerts. This linkage makes post-incident analysis, including postmortems, much more efficient.
  * **Auto-resolution**: If the monitoring tool detects that the underlying issue has recovered, the corresponding PagerDuty incident will receive this update, resolve itself, and then reflect that resolution to the ITSM ticket.
  * **Minimized noise**: The right tickets are created in the ITSM system, rather than too many (if monitoring tool alerts are fed directly in) or too few (if manual ticket creation is the norm).

PagerDuty’s [ServiceNow](https://www.pagerduty.com/docs/guides/servicenow-integration-guide/) and [JIRA](https://support.pagerduty.com/docs/jira-cloud) extensions support this type of managed integration with ITSM systems, with support for additional ITSM systems coming in the future.