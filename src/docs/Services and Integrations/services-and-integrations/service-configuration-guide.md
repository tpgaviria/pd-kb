---
title: "Best Practices: Service Configuration Guide"
slug: "service-configuration-guide"
hidden: false
createdAt: "2019-05-29T21:12:38.755Z"
updatedAt: "2019-08-26T20:37:52.032Z"
type: "link"
link_url: "https://community.pagerduty.com/t/service-configuration-guide/1660"
---
#Benefits of Intuitive Service Configuration

Configuring your services to be specific, intuitively-named, and reflective of your infrastructure needs will deliver value and ease-of-use to all teams using the PagerDuty platform. With purposeful setup, you'll experience the following benefits:

* **Relevant context**: When services are configured within the context of your infrastructure, responders can triage and resolve incidents quickly and effectively.
* **Reduced noise**: With intuitive naming conventions you can ensure focused and accurate noise suppression, alert grouping, and the prevention of unnecessary notifications. 
* **Actionable insights from Analytics**: Intuitive service design contextualizes impact and aggregated performance metrics within your infrastructure, your teams, and your business.
* **Reliable communication**: When business services are configured with multiple teams in mind, business stakeholders and go-to-market teams can use PagerDuty Visibility to communicate status updates during incidents, which reduces overhead and stress for response teams.
* **Reduced duplication and manual configuration errors**:  Using event rules, dynamic notifications and service hierarchies provides granular control over how events are received and directed. Using event routing with intuitive service design makes it easy to filter out relevant data and send events to the correct service. 
* **Flexibility**: When services reflect components of your infrastructure, as opposed to individual tools, you can easily move integrations as teams change ownership and process.
* **Improved MTTA + MTTR**: Intuitive service design ensures that incidents are sent to the right people who know how to fix the issue at hand.
* **Focused collaboration and communication**: The Modern Incident Response product allows you to mobilize responders, engage stakeholders with status updates, and set up conference bridge collaboration. When services are configured intuitively, you ensure that responders and stakeholders have the right context to communicate effectively.

#Intuitive Service Configuration

Services organize events from outside tools into alerts and incidents in PagerDuty, then they connect those incidents to responders on their associated escalation policy. You can use PagerDuty services to reflect different kinds of components, like microservices, vertical applications, or shared infrastructure layers. Beyond reflecting services as technical components, you can also use PagerDuty services to act as support queues, to represent specific customers, or for other use cases where you need to represent a scope of ownership for a team.

Regardless of how you model your services, we recommend the following practices:

* Name your service logically and with enough context so that anyone interacting with the service understands what it is meant to represent. Example: “Shopping Cart”, “Shopping Cart - App Server”.
* Avoid using only acronyms, so that new responders on a team don’t have to look it up.
    * Leave out words like “PagerDuty” or “Alert”; these words are already included when PagerDuty sends notifications.
    * Avoid including the name of the monitoring tool in the service name, as this information is already included in the incident and does not describe what the incident is affecting. 
* Include helpful information in the service description to help new team members or people outside your team. 
    * Information can include what the service is, what it is for and how it affects the business or end-users.
    * Links can be included in descriptions, so add links to additional documentation, runbooks, or code repositories.
    * We also encourage teams to include their service-level SLAs, SLOs, and SLIs, and communication channels where other teams can ask questions.

#Service Use Cases

##Services as Technical Components

A PagerDuty service generally represents an application, microservice, or piece of infrastructure owned by a team. For example, a service can be a specialized component used by an application, like a user authentication service, or a piece of shared infrastructure like a database.

###Recommended Practices

* Start by considering who is responsible for the service you are setting up. A service should be wholly owned by the team on-call for it. 
    * If multiple teams share responsibility for a service, it’s better to split that service up (if possible) into separate services. 
    * The people on the team share responsibility for the service through escalation policies that include back-up responders and escalation contacts, and Schedules that rotate individuals on a regular cadence.
* Services should be set up granularly enough to help identify the source of problems. 
    * If two microservices always behave as one, and fixing a problem on one means fixing it also on another, it might make sense to combine them. 
* If you have a monolith, consider how you will address on-call responsibilities for it. Monoliths tend to be the cause of a lot of incidents, both actionable and non-actionable.
    * If one team owns the monolith, they usually don’t own any other services unless the on-call load for the monolith is low.
    * If multiple teams share responsibility for the monolith, consider gradually identifying different sources of functionality and routing those alerts to teams that have the right context. Each source of functionality can be represented as a different service in PagerDuty.
* Represent production, staging, and development environments as a single service in PagerDuty.
     * If the severity of alerts differ across these environments, send all alerts related to the different environments to a single service, and then use event rules and dynamic notifications to automate different workflows based on the content of the alert.
* Name your service logically and with enough context so that responders can read a service name at 3am and understand what part of the infrastructure needs attention. 
    * Avoid using only acronyms, so that new responders on a team don’t have to look it up.
    * Leave out words like “PagerDuty” or “Alert”; these words are already included when PagerDuty sends notifications.
    * Avoid including the name of the monitoring tool in the service name, as this information is already included in the incident.
* Include helpful information in the service description to help new team members or people outside your team.
    * Information can include what the service is, what it is for and how it affects the business or end-users.
    * Links can be included in service descriptions, so add links to additional documentation, runbooks, or code repositories.
     * We also encourage teams to include their service-level SLAs, SLOs, and SLIs, and communication channels where other teams can ask questions in the service descriptions.
* Avoid splitting up services by metadata such as datacenter, region, or monitoring vendor.
    * Combine signals from multiple monitoring vendors into one service in PagerDuty 
to create a more complete, accurate, and actionable view of the state of that service.
* Services should be attached to escalation policies with more than one level. If your organization has a central triage team that then escalates to an engineering team, consider putting the central triage team on a schedule for the first level, and the engineering team on a schedule for the second level (pictured in the examples below).
    * Successful services are usually attached to escalation policies of approximately 3 levels.  Having only the necessary people on the escalation policy eliminates confusion for the responder and the possibility of the bystander effect.   
    * Mature teams set up an escalation policy with schedules at different levels to rotate people through the responsibility levels. 

**Example escalation policy for an Application Team**:

![](https://files.readme.io/715d1c1-service-config-bp-escalation-team.png)

**Example escalation policy for a Central Team + Application Team**:

![](https://files.readme.io/be278b7-service-config-bp-central-app-ep.png)

##Services for Major Incident Response Coordination

Coordination services can be created on the PagerDuty platform to automate communication needs for [major incident response](https://support.pagerduty.com/docs/mobilize-a-coordinated-response) to coordinate or inform a specific group of people. Proactive communication can lead to more efficient incident resolution, as the primary response team can focus their efforts on resolution rather than on answering continual inquiries about status. coordination services will reduce the opportunity for errors and mistakes by automatically turning documented processes into executable actions. 

###Recommended Practices

* We encourage creating a coordination service for each unique group of people who need to be notified during a major incident. 
* We recommend creating a specific coordination [response play](https://support.pagerduty.com/docs/response-automation) that is directly tied to the coordination service.
* Include a conference bridge link or a Slack channel and leave instructions in the coordination service’s settings so people can join the conversation quickly and easily.
* Define a [priority scheme](https://support.pagerduty.com/docs/incident-priority) for your domain that reflects your company’s naming convention: Pri 1, SEV 0, etc. Configure your priority levels to be meaningful and encourage everyone to use them.
* Create matching [response plays](https://support.pagerduty.com/docs/response-automation) for each priority level and name it according to that priority level: “Priority 1 Security Response”.

##Services as Support Ticket Queues

Support queue services are integrated with a ticketing tool and are used to ensure that no support ticket or work item goes unnoticed. 

###Recommended Practices

* If your team needs to be aware of support tickets the moment they are created, we recommend creating a support queue service.
* We encourage you to enable urgencies and use Support Hours to define how and when members of your team should be notified. 
* We also encourage you to set up a two-way integration to allow the ticketing tool to auto-resolve PagerDuty incidents, and to allow PagerDuty to leave internal notes on tickets when actions are taken on the corresponding PagerDuty incident.

##Services as a Scopes of Ownership

Scope of ownership services should be connected to an escalation policy representing a team and used to contact the specific on-call person. These services ensure that when the unexpected happens, responders don’t waste time searching for a point of contact.

###Recommended Practices

* We encourage each team to have a scope of ownership service set up so that users have an easy way of contacting your on-call team member. 
* Separating your technical services from your team services ensures that the reports from other aspects of the PagerDuty product, such as Analytics, remain accurate.
* PagerDuty does not promote “hero culture” and discourages the use of services to page an individual as a primary means of responding to an incident. 
    

#Business Services 

A [business service](https://support.pagerduty.com/docs/business-services) is a function or capability provided to customers that drives a measurable business outcome. PagerDuty business services exist as related functionality to services, and can be accessed by navigating to **Configuration** :fa-arrow-right: **Business Services**. Each business service is enabled and delivered by a collection of one or more underlying technical services. 
Business services are customer-facing. In some cases the customers may be internal to the organization. For example, many organizations have an on-premise email system which is a business service typically operated by the IT department whose customers are the employees of the company.
Business services are measurable. It should always be possible to measure the business outcome for a given business service, whether or not it is actually being measured in practice. At a minimum one can measure the binary of 'available' vs. 'unavailable' over time. For more details see our Knowledge Base article on [Impact Metrics](https://support.pagerduty.com/docs/impact-metrics).
##Relationship: Business Services, Services and Integrations
The following table outlines the architecture for how these business services, services and integrations relate to one another in PagerDuty. Integrations are associated with services, and services are associated with business services. Business Services can also be linked to each other, forming a hierarchy of business services. 
[block:html]
{
  "html": "<div><table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<th>Business Services</th>\n\t\t\t<th>Technical Services</th>\n\t\t\t<th>Integrations</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\">Checkout</td>\n\t\t\t<td>Checkout - App Server</td>\n      <td>Datadog<br>\nPingdom<br>\nSplunk<br>\n</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Checkout - Customer Issues</td>\n\t\t\t<td>ZenDesk</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"3\">Catalog</td>\n\t\t\t<td>Support Tickets</td>\n\t\t\t<td>Email<br>\nZenDesk</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Search - Suggest</td>\n\t\t\t<td>API</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Inventory Database</td>\n\t\t\t<td>AWS Cloudwatch</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Customer Login</td>\n\t\t\t<td>Authentication Failure</td>\n\t\t\t<td>Sumo Logic</td>\n\t\t</tr>\n\t</tbody>\n</table></div>\n\n<style>table , td, th {\n\tborder: 1px solid #595959;\n\tborder-collapse: collapse;\n  font-family: \"arial\", sans-serif;\n  font-size: 12px;\n  width: 100%;\n}\ntd, th {\n\tpadding: 3px;\n\twidth: 30px;\n\theight: 25px;\n}\nth {\n\tbackground: #DCDCDC;\n}\n.even {\n\tbackground: #fbf8f0;\n}\n.odd {\n\tbackground: #fefcf9;\n}</style>"
}
[/block]
##Common Misconfigurations and Recommended Practices

There are situations in which it may not make sense or be feasible to map services as described above. When faced with these situations, users tend towards naming conventions and configurations that are less than optimal, and we have found alternatives that create better experiences.
[block:html]
{
  "html": "<div><table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<th>Poor Service Configuration Habits</th>\n\t\t\t<th>What Problems do They Cause?</th>\n\t\t\t<th>Recommended Practice</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Integration-as-a-service (Example: a Service called “Datadog Service”).</td>\n\t\t\t<td>When ownership changes, all services will need to be updated, rather than just one service.<br><br>\nA Datadog instance might monitor many technical services, but when people pipe Datadog alerts into only one place, there’s no way to divide out the alerts from individual technical services. This incident organization will not take advantage of the potential noise-reduction of alert grouping or historical context from the Similar Incidents section. Further, service-based analytics and Visibility metrics will report on a limited view of the truth, scoped to just one tool instead of the full set of information about the system. \n</td>\n      <td>Tools should be integrated with multiple services. Use <a href=\"https://support.pagerduty.com/docs/global-event-routing\">global event rules</a> to pipe events from one tool into multiple technical services. </td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Catch-all services (Example: “Engineering 911”).</td>\n\t\t\t<td>A catch-all service will eventually need to be broken up or replaced by several technical services owned by their respective teams. <br><br>\n\nA catch-all service will be monitoring a broad range of things. If you have one giant service where all your alerts are being sent, alert grouping and similar incidents will not work as intended. Analytics, Visibility, and Modern Incident Response features do not support using catch-all services.\n</td>\n\t\t\t<td>Break up your catch-all services into separate technical services owned by individual teams. <br><br>\n\n        Use <a href=\"https://support.pagerduty.com/docs/dynamic-notifications\">dynamic notifications</a>, and <a href=\"https://support.pagerduty.com/docs/service-event-rules-beta\">service level event rules</a> for routing and urgency.\n</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Services representing urgency of alerts (Example: “Shopping Cart - High Urgency” and “Shopping Cart - Low Urgency”).</td>\n\t\t\t<td>When you know where both high and low urgency alerts are present, you have a more complete picture of the health of what they are monitoring. <br><br>\n\nWhen ownership of the service changes, instead of updating one service in PagerDuty, you will have to update all of the “high” and “low” versions. <br><br>\n\nSeparating signals from the same service reduces the efficacy of alert grouping.  People will lose context when trying to track patterns with similar incidents because information from one service is being forked into several PagerDuty services.\n</td>\n\t\t\t<td>Combine high and low urgency services.\n\n        Use <a href=\"https://support.pagerduty.com/docs/dynamic-notifications\">dynamic notifications</a> to handle urgency of alerts.\n</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Services representing teams (Example: “Platform Team Service”).</td>\n\t\t\t<td>When service ownership changes, all monitoring integrations must be reconfigured for the teams involved.<br><br>\n\nBecause the service represents the team and not a technical service, customers will not be able to use alert grouping and similar incidents effectively. They will also not be able to effectively use Analytics, Visibility, and Modern Incident Response features, as these features are not set up to support using services as teams.<br><br>\n\nCustomers will find it difficult or impossible to configure ITSM integrations correctly.\n</td>\n\t\t\t<td>Setup your services to reflect technical services wholly owned by one team.<br><br>\n\nSet up teams and escalation policies to reflect teams and their on-call schedules. <br><br>\n\n        “Manual paging” is best done by <a href=\"https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders\">adding responders</a> to a new or existing incident, ideally through a <a href=\"https://support.pagerduty.com/docs/response-automation\">response play</a>.\n</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Services representing monitoring tools (Example: “Shopping Cart - AWS Cloudwatch”, “Shopping Cart - Datadog”, “Shopping Cart - New Relic”).</td>\n\t\t\t<td>Services set up to represent monitoring tools will increase noise and distractions for responders. <br><br>\n\nYour monitoring tools are probably monitoring a broad range of things. If you send all your Datadog alerts to one place, alert grouping and similar incidents will not work as intended. Analytics, Visibility, and Modern Incident Response features do not support using Services as monitoring tools.\n</td>\n\t\t\t<td>Setup your services to integrate with multiple monitoring tools. <br><br>\n\n        If your monitoring tool can’t send to multiple services, use <a href=\"https://support.pagerduty.com/docs/global-event-routing\">global event rules</a>.\n</td>\n\t\t</tr>\n\t</tbody>\n</table></div>\n\n<style>table , td, th {\n\tborder: 1px solid #595959;\n\tborder-collapse: collapse;\n  font-family: \"arial\", sans-serif;\n  font-size: 12px;\n  table-layout: fixed ;\n  width: 100% ;\n}\ntd {\n  width: 25% ;\n}\n}\ntd, th {\n\tpadding: 3px;\n  width: 30px;\n\theight: 25px;\n}\nth {\n\tbackground: #DCDCDC;\n}\n.even {\n\tbackground: #fbf8f0;\n}\n.odd {\n\tbackground: #fefcf9;\n}</style>"
}
[/block]
#PagerDuty Features Supporting Intuitive Service Configuration
Over the last several years PagerDuty has invested in tools to help reduce duplicate configuration and facilitate ideal Service structure configuration.

* [Multi-integration Services](https://community.pagerduty.com/t/integrations-using-multiple-integrations-per-service-to-represent-your-systems/446): Connect more than one integration to a single service and move integrations from service to service.
* [Event Routing](https://support.pagerduty.com/docs/global-event-routing): Rather than configuring monitoring tools to send to multiple integration endpoints, you can send all events to a single endpoint and adjust routing behavior from there. This helps you prioritize certain types of events and adhere to differing SLAs around those events. It also solves the limitation some monitoring tools have around sending events to more than one endpoint.
* [Dynamic Notifications](https://support.pagerduty.com/v1/docs/dynamic-notifications): Send events of multiple severities to a single service and automatically adjust notification behavior (urgency) based on their payloads.
* [Business Services](https://support.pagerduty.com/docs/business-services) and [PagerDuty Visibility](https://support.pagerduty.com/docs/pagerduty-visibility): A new service hierarchy model and business service visualization makes it easier to understand the relationship between services and connect the technical and business perspectives on an ongoing issue.
* [Visibility Console](https://support.pagerduty.com/docs/operations-command-console): Provide more visibility into cascading failures across services. Visually correlate seemingly unrelated issues and spot interdependencies, which drives down MTTR.
* [Support Hours](https://support.pagerduty.com/docs/service-settings#section-use-case-2-support-hours): Notify your responders with different levels of urgency depending on time of day.

#FAQ
##Should I use the incidents API or the events API?
[block:html]
{
  "html": "<div><table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<th>Purpose</th>\n\t\t\t<th>Supports direct assignment?</th>\n\t\t\t<th>Supports Priority?</th>\n\t\t\t<th>Supports bi-directional sync?</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><b>Events API<b/></td>\n\t\t\t<td>High-volume data ingestion from monitoring tools</td>\n\t\t\t<td>No - Service routing is used to determine who gets paged.</td>\n\t\t\t<td>No</td>\n\t\t\t<td>Yes</td>\n\t\t</tr>\n\t\t<tr>\n      <td><b>Incidents API</b></td>\n\t\t\t<td>Direct incident creation from ticketing or other human-centric tools, or for manual paging.</td>\n\t\t\t<td>Yes - can be set at creation via web UI or API. </td>\n\t\t\t<td>Sometimes. Bi-directional sync is supported using legacy incidents-only workflow but not with alerts.</td>\n\t\t\t<td>Yes - this is a core use case for many ticketing tools.</td>\n\t\t</tr>\n\t</tbody>\n</table></div>\n\n<style>table , td, th {\n\tborder: 1px solid #595959;\n\tborder-collapse: collapse;\n  font-family: \"arial\", sans-serif;\n  font-size: 12px;\n  table-layout: fixed ;\n  width: 100% ;\n}\ntd {\n  width: 100% ;\n}\n}\ntd, th {\n\tpadding: 3px;\n  width: 30px;\n\theight: 25px;\n}\nth {\n\tbackground: #DCDCDC;\n}\n.even {\n\tbackground: #fbf8f0;\n}\n.odd {\n\tbackground: #fefcf9;\n}</style>"
}
[/block]
##What are global event rules and how do they work?
 
Global event rules were created to solve the problem of having to do a lot of manual configuration of monitoring tools to get the correct team notified. It also solves the limitation some monitoring tools have around sending events to more than one endpoint. 

Global level rules allows sending events to a global endpoint and routing them to different services based on their payloads. For example, you can route “db” alerts to the “Database” service and “checkout” alerts to the “Checkout” Service. The event rules on the global endpoint also have additional features, such as thresholds, scheduled rules, rule-based priority, improved authoring UX, and adding notes to events. To learn more about event routing and how to configure it, check out the [this article](https://support.pagerduty.com/docs/global-event-routing#section-what-is-event-routing) in the PagerDuty Knowledge Base.

##When should I use Service level event Rules vs. global event rules? 

Use cases for global event rules:
  * Centralized teams responsible for managing all the events and alerts for an account.
  * Teams that are just getting started and not quite sure of their final service taxonomy.
  * Integrating with monitoring tools which do not easily support sending data to multiple endpoints.

Use cases for service level event rules:
  * Decentralized, autonomous teams who manage their own monitoring and don’t want to cross streams with other teams.
  * Integrating with monitoring tools that make it easy to send alerts to multiple endpoints.
  * Working with configuration as code tools such as Terraform.
  * Teams with granular permissions needs.

##What is intelligent alert grouping and why should I use it?

Intelligent alert grouping uses a machine learning based model to automatically group incoming alerts into an open incident on a service. The model makes decisions to group alerts based on the unique history of the service. Intelligent alert grouping observes previous groups of alerts on the service that have been created via time-based alert grouping and responder behavior (manual merging and unmerging, bulk resolving alerts). The algorithm is constantly re-evaluating it's history in order to create smarter, more meaningful grouping decisions.

Benefits of intelligent alert grouping:
  * It starts working as soon as you turn it on.
  * Reduces noise, reduces alert fatigue.
  * Combines symptoms of a problem into one fully-formed incident.
  * Provides focus in the chaos of an alert storm during an outage.

##When should I use intelligent alert grouping? 

  * The service must have alerts and incidents enabled.
  * If you have tried time-based alert grouping but want something more granular.
  * If you have noisy services that have had hundreds of alerts in the last several months, showing a history of overlapping incidents (incidents that are open at the same time).