---
title: "Platform Release Notes"
slug: "platform-release-notes"
hidden: false
createdAt: "2019-01-02T17:57:19.016Z"
updatedAt: "2020-09-08T21:13:11.306Z"
---
# August 2020

**Improvements**

*Aug. 14 — [Paused Incident Notifications](https://support.pagerduty.com/docs/rulesets#paused-incident-notifications)*

As a new [Rulesets](https://support.pagerduty.com/docs/rulesets) feature, paused incident notifications allows rules to be set to create alerts, but pause incident creation and notifications for a predefined amount of time. During the pause period, new alerts will be viewable in the [Alerts table](https://support.pagerduty.com/docs/alerts#alerts-table) with a Suspended status. These suspended alerts have new actions, allowing users to Trigger an incident from the alert during the pause period, or Resolve the alert, preventing the incident and its notifications from being created altogether.

*Aug. 4 — [Visibility Console: Service Activity Module](https://support.pagerduty.com/docs/visibility-console#service-activity-module)*

The Service Activity module allows users to see incident activity across a multitude of their services at once, so that they can quickly understand their digital operations health, and identify if there’s a widespread major incident. It is ordered by most recently impacted service and will reorder itself when new incidents are triggered. It has different time windows so eyes on glass teams can monitor their digital operations in real-time, but can also see service activity in the last 24 hours. This module can be filtered to any set of teams and services.

*Aug. 21 — [Status Update Notification Preferences](https://support.pagerduty.com/docs/configuring-a-user-profile#status-update-notifications)* 

Configure notification preferences for status updates when [subscribed](https://support.pagerduty.com/docs/communicating-with-stakeholders#add-subscribers-to-an-incident) to an incident.

**Integrations**

*Aug. 21 – [ServiceNow Integration Update](https://support.pagerduty.com/docs/servicenow-integration-guide)*

The updated ServiceNow Integration allows users to run Response Plays, post status updates and set the impacted Business Service on a PagerDuty incident all from the ServiceNow interface. Administrators can perform Assignment Group and priority mapping to PagerDuty escalation policies and provision Business and technical services along with their dependency relationships. Additionally, this version allows users to author custom code for outbound REST API calls and it comes with MID server support.

# July 2020

**New Features**

*Jul. 23 — [My On Call Shifts](https://support.pagerduty.com/docs/my-on-call-shifts)*

My On-Call Shifts allows users to view their shifts across all escalation policies and schedules in a single, easy-to-use view. This feature displays if a user is on call now, a list of their associated shifts and what their schedule is for the upcoming weeks and months. Users can now easily create override shifts across multiple schedules because all of the shifts are accessible in one place. My On-Call Shifts is also available as a widget on the right side of the Incidents page, displaying their current shift, and when they are on call next.

**Improvements** 

*Jul. 31 — [New Visibility Console](https://support.pagerduty.com/docs/visibility-console)*

The newly redesigned Visibility Console provides users with the single pane-of-glass experience to effectively monitor their digital operations in real time. This feature provides Central Ops / NOC teams and technical stakeholders with context on their technical environment at a glance, allowing them to quickly understand the health of their digital operations.

*Jul. 15 — [Dependency-Aware Related Incidents](https://support.pagerduty.com/docs/related-incidents#dependency-aware-related-incidents)*

To help responders gain better understanding of the breadth and scope of incident impact, we’ve enhanced PagerDuty’s Related Incidents capability set with Dependency-Aware Related Incidents to provide real-time, contextual insights across multiple services and teams. When two incidents are triggered within five minutes of each other and one service is directly dependent on the other, these incidents will be marked as related. Similarly, if incidents occur within this time frame and share a parent Business Service, they will also be marked as related. These service relationships will be identified in the Dependency pane on individual Related Incident cards.

*Jul. 10 — [Analytics API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1analytics~1metrics~1incidents~1all/post)*

With our new Analytics API, users can get incident data aggregated from all incidents, or from services and Teams. Additionally, users can get raw data on multiple and single incidents.

# June 2020

**Improvements**

*Jun. 23 — [Extensions API: Re-enable Extensions](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1extensions~1%7Bid%7D~1enable/post)*

With our Extensions API, users can now re-enable [extensions](https://support.pagerduty.com/docs/extensions-add-ons) outside of the PagerDuty web app. 

*Jun. 1 — [Response Plays API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1response_plays/post)*

With our API for Response Plays, users can create, read, update, and delete [Response Plays](https://support.pagerduty.com/docs/response-automation) without having to log into the PagerDuty web app. Fully interact with Response Plays from your preferred interface, whether it be an ITSM tool like ServiceNow or a custom interface. 

**Integrations**

*Jun. 3 — [Splunk Integration Update](https://www.pagerduty.com/docs/guides/splunk-integration-guide/)*

The updated Splunk integration allows users to customize data that is sent from Splunk to PagerDuty. The integration also includes upgrades to support new Splunk 8 requirements. 

*Jun. 2 — [Microsoft Teams Integration Update](https://support.pagerduty.com/docs/microsoft-teams)*

The updated Microsoft Teams integration allows responders to view critical incident details within Teams. They can also acknowledge, resolve, trigger and add notes to incidents, all from one interface.

*Jun. 1 — [Jira Server Integration Update](https://support.pagerduty.com/docs/jira-server)*

The updated Jira Server and Jira Data Center integration includes a suite of features that allows users to coordinate incident response right from Jira issues using the PagerDuty sidebar. Organizations can drive synchronization and collaboration between teams with complex workflows, and map users and accounts across PagerDuty, Jira Server and Data Center. 

# May 2020

**Improvements**

*May 21 — [Service Profile](doc:service-profile)*

The new Service Profile streamlines all service configurations onto an easy-to-edit page. Responders can clearly see maintenance windows, and filter them based on status. Users can add metadata like runbooks and a communication channels to a service. Having this for as a resource on a service eases the incident triage and response process while also encouraging users to reference Services as a source of truth for their business. The Service Profile includes new metadata for services: a documentation link (use this for a wiki link, an FAQ, or a runbook), a communication chat channel (not a notification path, but helpful for finding out where a team is discussing operations issues), and (drumroll please... ) the impact tab with service dependencies.

*May 14 — [Status Update Branding](https://support.pagerduty.com/docs/status-dashboard#status-update-branding)*

Users who wish to change the logo that appears in status update emails may now upload a custom logo.

#April 2020

**New Features**

*Apr. 23 — [Intelligent Dashboards: Service Health Dashboard](https://support.pagerduty.com/docs/intelligent-dashboards#service-health-dashboard)* 

The Service Health dashboard allows for the discovery of services that drive incidents and cause increased team response effort. Detailed performance views for each service are provided to show impact of interruptions, how teams respond to incidents, and performance details by incidents and team metrics. This feature allows service owners to make key decisions on where to allocate resources, make investments and drive continual service health improvement.

*Apr. 1 — [Related Incidents](https://support.pagerduty.com/docs/related-incidents)*

The Related Incidents feature provides incident responders with the suggested 20 most recent related incidents that are impacting other responders and PagerDuty services. This feature uses a completely online and real-time machine learning algorithm to provide these insights, giving responders an at-a-glance-view of the full breadth and scope of incident impact. Related Incidents extends our machine learning capabilities beyond noise reduction, enriching incidents with deep contextual insights to help responders coordinate an effective team response and mitigate business disruption.

**Improvements**

*Apr. 15 — [Business Services API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1business_services/get)*

Admins and service owners can now use the Business Services API to automate how they define and update business services using scripts, Terraform, or other tools.

*Apr. 15 — [Business Services: Team Permissions](https://support.pagerduty.com/docs/business-services)*

Business services can now be added to a specific team, allowing team managers to create, edit, and update business services. Existing business services that are not associated to a team are globally viewable and editable by Global Admins and Account Owners. 

*Apr. 6 — [Rulesets API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1rulesets/post)*

Users now have full API access to global rulesets. New functionality includes partial updates and rule ordering.

*Apr. 6 — [Live Call Routing: Option to Resolve Incident When Responder Ends Call](https://support.pagerduty.com/docs/live-call-routing)*
 
Users now have the option to configure whether or not the corresponding PagerDuty incident is resolved after the responder ends the incoming call.

*Apr. 1 — [Past Incidents](https://support.pagerduty.com/docs/past-incidents)*

Similar Incidents has been renamed as Past Incidents to differentiate it from the Related Incidents feature. More information on the difference between these features is available in [this FAQ](https://support.pagerduty.com/docs/related-incidents#section-related-incidents-vs-past-incidents-whats-the-difference).

#March 2020

**Improvements**

*Mar. 30 — [Live Call Routing: Upload Your Own Audio Message](https://support.pagerduty.com/docs/live-call-routing#section-upload-your-own-audio-message)*

Customers who prefer to record their own Live Call Routing greeting may now upload their own MP3 audio file instead of using an automated message.

# February 2020

**Integrations**

*Feb. 25 — [Salesforce Cloud Integration: v2 Update](https://support.pagerduty.com/docs/salesforce-service-cloud-integration-guide)*

The new Salesforce Cloud integration allows users to integrate any standard Salesforce object with PagerDuty. Responders can now take advantage of expanded PagerDuty actions, such as setting urgency, adding responders, incident reassignment and running response plays by setting predefined rules and actions within the Salesforce interface. PagerDuty can also send information to Salesforce Cloud by defining evaluation criteria against the updates made in PagerDuty and designating actions to be performed in Salesforce Cloud.

# January 2020

**Improvements**

*Jan. 16 — [Rulesets](https://support.pagerduty.com/docs/rulesets)*

The new Rulesets feature is an extension of our legacy Global Event Rules feature. With Rulesets, users can route events to an endpoint and create collections of event rules, which define sets of actions to take based on event content. Accounts with Free, Starter and Team plans will have access to a single global ruleset, while Business and Digital Operations plans will now have the ability to create multiple global rulesets. For these higher-tier plans, each ruleset will have an individual endpoint and they can be associated with specific Teams, giving Team Managers edit-access to their rules. On all plans, Rulesets also expands actions available for service event rules. 

#December 2019

**Improvements**

*Dec. 2 — [Service Directory: Search by Integration Key](https://support.pagerduty.com/docs/service-directory#section-search-by-integration-key)*

The Service Directory now allows users to search by integration key, returning a list of services where the key is configured. 

#November 2019

**New Features**

*Nov. 19 — [Offboarding](https://support.pagerduty.com/docs/offboarding)*

The offboarding feature allows administrators to easily deprovision users from their associated escalation policies, schedules and assigned incidents. When offboarding a user, a Global Admin or Account Owner can review their associated escalation policies and schedules, sending notifications to the user’s Team Manager that they need to be replaced by another user on those objects. Administrators can also reconcile triggered and/or acknowledged incidents that were assigned to the offboarded user by reassigning them to their affiliated escalation policy or resolving them. This feature is available to accounts with [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions).

*Nov. 11 — [PagerDuty Analytics: Intelligent Dashboards](https://support.pagerduty.com/docs/intelligent-dashboards)*

Intelligent Dashboards measure the impact of real-time work on teams and business objectives, promoting continuous improvement in digital operations towards greater success. Digital business leaders can use flexible data visualizations to compare key metrics to industry benchmarks or teams to company averages. After making improvements in training, processes and technology investments, leaders can then monitor the performance of Teams and Services and ensure they are trending in the right direction. Intelligent Dashboards is available with the purchase of the [PagerDuty Analytics](https://support.pagerduty.com/docs/pagerduty-analytics) product.

**Improvements**

*Nov. 11 — [Operational Reviews: Edit Scorecards](https://support.pagerduty.com/docs/operational-reviews#section-editing-scorecards)*

Default Team On-Call Handoff Review scorecards now allow you to edit the number of weeks, days of the week, and hour of day that they are generated. Custom scorecards of any type now allow you to edit any aspect of the scorecard that was customizable when created.

#October 2019

**Improvements**

*Oct. 24 — [Service Directory: Filter by Business Service](https://support.pagerduty.com/docs/service-directory#section-business-service)*

In the Service Directory, users can now search for technical services associated with Business Services with a Business Service filter. 

#September 2019

**New Features**

*Sep. 26 — [Service Directory](https://support.pagerduty.com/docs/service-directory)*

The Service Directory allows everyone to search for the services they go on call for and learn more about the other services in their organization. The Service Directory is a searchable, high-level aggregate view of all the services your organization has represented in PagerDuty and their corresponding owners. From the Service Directory, you can dive into each individual service to learn more about it, make changes to the settings or metadata, and take further action. This feature replaces the old Services list view.

**Integrations**

*Sep. 25 — [Slack Integration: v2 Update](https://support.pagerduty.com/docs/slack-integration-guide)*

The v2 update to our Slack integration includes new incident response capabilities: [trigger](https://support.pagerduty.com/docs/incidents#section-triggering-an-incident-with-web-ui-email-or-api) and [escalate](https://support.pagerduty.com/docs/reassigning-and-delegating-incidents#section-reassign-or-delegate-an-incident) incidents and run [response plays](https://support.pagerduty.com/docs/response-automation) from Slack. Users will now be able to create on-demand Slack channels from PagerDuty incidents. Additionally, the new Slack integration has improvements such as an updated notification design with more context from monitoring tools, and actions that respect PagerDuty [user permissions](https://support.pagerduty.com/docs/user-roles).

*Sep. 25 — [Zendesk Integration: v2 Update](https://support.pagerduty.com/docs/zendesk-integration-guide)*

The v2 update to our Zendesk integration uses Extensions, Targets and Triggers to send Zendesk Support Ticket events to PagerDuty, triggering incidents. This update allows users to view, create and link PagerDuty incidents from the Zendesk interface, so the proper responders can be notified of critical customer issues. 

*Sep. 25 — [Salesforce Service Cloud Integration](https://support.pagerduty.com/docs/salesforce-service-cloud-integration-guide)*

The new Salesforce Service Cloud integration allows users to customize when the proper on-call team should be notified about Salesforce Service Cloud cases and it allows for exception case routing. Users can create and/or update the Service Cloud case with relevant information as soon as there’s a PagerDuty update such as an acknowledgement, resolution, reassignment, etc. This integration includes synced notes between PagerDuty and Salesforce Service Cloud, so Customer Service teams can provide relevant updates to customers. 

#August 2019

**New Features**

*Aug. 8 — [Email Domain Restriction](https://support.pagerduty.com/docs/configuring-a-user-profile#section-email-domain-restriction)*

Admins and Account Owners can now choose to restrict users to only use domains that are in the Email Domain Allow List when they change (or create) their login or contact email addresses. The restriction applies to users when updating future email addresses; existing email addresses will continue to function.

**Improvements**

*Aug. 30 — [Contextual Search - API Endpoints](https://api-reference.pagerduty.com/#!/Contextual_Search/get_tags)*

New API to manage, assign, and list Tags. A tag can be assigned to Escalation Policy, Team or User, and searches for those objects can be filtered to retrieve those with specific tags.

*Aug. 23 — [Operational Reviews: Scorecard Subscribe/Unsubscribe](https://support.pagerduty.com/docs/operational-reviews#section-subscribe-or-unsubscribe-from-a-scorecard)*

By default, users see scorecards only for the teams they are on. With subscribe/unsubscribe, users can find scorecards for teams they care about but aren't members of, and allows them to hide scorecards they don't want to see anymore.

*Aug. 1 — [Operational Reviews: Scorecard Search](https://support.pagerduty.com/docs/operational-reviews#section-scorecard-search)*

Each list of Team On-Call Handoff, Service Performance and Business Performance review scorecards has a search capability. For users who have many scorecards in their list, the search allows them to find specific scorecards quickly.

#July 2019

**New Features**

*Jul. 25 — [Status Dashboard](https://support.pagerduty.com/docs/status-dashboard)*

PagerDuty’s status dashboard provides technical responders, business responders, and leaders a live, shared view of system health to improve awareness of operational issues. It displays the current status of key business services and sends notifications to alert users when business services are impacted. This feature improves communication between response teams and stakeholders during incidents.

**Integrations**

*Jul. 16 — [Amazon EventBridge](https://support.pagerduty.com/docs/amazon-eventbridge-integration-guide)*

With Amazon EventBridge, PagerDuty customers are able to leverage the full breadth of AWS-supported integrations and functionality. When a PagerDuty incident is created or updated, an event or webhook can be sent to notify a designated Event Source in your AWS Account and Region. One can create an Event Bus to retrieve these notifications and deliver them to an AWS target such as Lambda to run a specific function, workflow, SNS topic for another notification delivery, etc.

*Jul. 10 — [ServiceNow: v6 Update](https://support.pagerduty.com/docs/servicenow-integration-guide)*

Teams are now able to [drive a coordinated response](https://support.pagerduty.com/docs/mobilize-a-coordinated-response), [add multiple responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders) and [add conference bridge](https://support.pagerduty.com/docs/conference-bridge) information to an incident from the ServiceNow interface. Admins and Account Owners can configure how different [priorities](https://support.pagerduty.com/docs/incident-priorityhttps://support.pagerduty.com/docs/incident-priority) should notify responders by mapping a Priority level to a PagerDuty Urgency level (Example: P1 incidents can call responders and P3 incidents can email). They can also customize data sent from ServiceNow to PagerDuty when creating an incident, and easily add Assignment Groups or Users.

#June 2019

**New Features**

*Jun. 22 — [One Touch to Join Conference Bridge](https://support.pagerduty.com/docs/conference-bridge#section-one-touch-to-join-conference-bridge)*

The One Touch To Join Conference Bridge feature enables rapid response team assembly by giving responders a push-button means of joining a conference bridge. This feature relies on two existing [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) features: [Conference Bridge](https://support.pagerduty.com/docs/response-bridge#section-service-level-response-bridge) and [Add Responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders). 

**Improvements**

*Jun. 28 — [PagerDuty Analytics: Scorecard Search](https://support.pagerduty.com/docs/operational-reviews)*

A new search capability for the list of Team On-Call Handoff, Service Performance and Business Performance review scorecards. For users who have many scorecards in their list, the search allows them to find specific scorecards quickly.

**Integrations**

*Jun. 19 — [AWS Security Hub](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty)*
The AWS Security Hub integration allows you to send AWS Security Hub Findings to PagerDuty and use the PagerDuty platform to manage, organize, and respond to events relevant to your organization.

#May 2019

**New Features**

*May 8 — [Contextual Search - Tagging](https://support.pagerduty.com/docs/contextual-search)*

Managers, Admins, Global Admins and Account Owners can now add tags to the following PagerDuty objects: Teams, Escalation Policies and Users. Adding this simple metadata provides extra context to help Responders and Managers organize and navigate to desired objects and easily reassign incidents.

**Improvements**

*May 31 — [Manage Your User Sessions - API Endpoints](https://api-reference.pagerduty.com/#!/Users/delete_users_id_sessions)*

New API endpoints to retrieve and delete user sessions. These can be used as part of an offboarding flow to ensure users are securely removed from all of their PagerDuty sessions.

#April 2019

**Integrations**

*Apr. 14 — [Cherwell Integration](https://www.pagerduty.com/docs/guides/cherwell-integration-guide/)*
The bi-directional Cherwell ITSM integration allows for advanced notification when incident tickets are created. 

#March 2019

**Improvements**

*Mar. 1 — [Subscribe to Business Service Notifications](https://support.pagerduty.com/docs/business-services#section-creating-business-services)*
Users with [Visibility](https://support.pagerduty.com/docs/pagerduty-visibility) and [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) can now subscribe to be proactively notified about business service disruptions and responder updates via [response plays](https://support.pagerduty.com/docs/response-automation). 

#February 2019

**New Features**

*Feb. 7 — [Event Intelligence: Preview Intelligent Alert Grouping](https://support.pagerduty.com/docs/preview-intelligent-alert-grouping)*
Service owners can now preview potential noise reduction and grouping behavior before activating [Intelligent Alert Grouping](https://support.pagerduty.com/docs/event-intelligence#section-intelligent-alert-grouping). 

**Improvements**

*Feb. 15 — [Stakeholder Notifications for Business Services](https://support.pagerduty.com/docs/business-services)*

Business stakeholders can be automatically notified when a business service goes from healthy to disrupted by connecting a [response play](https://support.pagerduty.com/docs/response-automation) to a [business service](https://support.pagerduty.com/docs/business-services). This feature is only available with the [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) package.

#January 2019

**New Features**

*Jan. 31 — [PagerDuty Analytics: Operational Reviews](https://support.pagerduty.com/docs/operational-reviews)*

The Operational Reviews feature offers metrics for three different types of reviews, targeted at different levels of leadership in a digital business. The Business Outcomes, Service Performance and Team On-Call Handoff reviews contain scorecards intended to drive meetings and provide insight into the business impact of real-time operations. 

**Improvements**

*Jan. 30 — [Recurring Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-recurring-event-rules)*

Recurring Event Rules allow Admins to set events to follow particular rules during specific hours of the day or day(s) within a week on an automatic, weekly recurring schedule. This feature is integration-specific and one can make additional changes, such as changing severity/priority, based on time of day. 

#December 2018

**Improvements**

*Dec. 1 — [Intelligent Alert Grouping Update](https://support.pagerduty.com/docs/intelligent-alert-grouping): Grouping Frequency*
Alerts that are new to a service and are seen in a short time period will be grouped together more frequently. This will reduce noise and responder alert fatigue.

#November 2018

**Improvements**

*Nov. 1 — [Events API Update: Rate Limit Increase](https://support.pagerduty.com/docs/apis)*
The Events API rate limit has been increased to 120 events/min for Starter, Team, and Business plans. Customers who require a higher rate limit for Global Event Rules may submit a request to be approved on a case-by-case basis. This increase can help facilitates the management of even higher volumes of operational data from noisier tools.

**Integrations**

*Nov. 26 — [PagerDuty + AWS CloudTrail Integration](https://support.pagerduty.com/docs/aws-cloudtrail-integration-guide)*
New native integration with AWS CloudTrail. Customers can route CloudTrail events to PagerDuty for real-time response.

*Nov. 26 — [PagerDuty + Amazon CloudWatch Integration Update](https://support.pagerduty.com/docs/aws-cloudwatch-integration-guide)*
Updates to our existing Amazon CloudWatch integration. We now support CloudWatch Events and Alarms. This update also enables customers to use CloudWatch with Global Event Rules.

*Nov. 26 — [PagerDuty + AWS Personal Health Dashboard Integration](https://support.pagerduty.com/docs/aws-personal-health-dashboard)*
New native integration with AWS Personal Health Dashboard. Customers can route Personal Health Dashboard events to PagerDuty for real-time response.

*Nov. 26 — [PagerDuty + Amazon GuardDuty Integration](https://support.pagerduty.com/docs/aws-guardduty-integration-guide)*
New native integration with Amazon GuardDuty. Customers can notify the right people about critical security issues for real-time response. 

#October 2018

**Improvements**

*Oct. 1 — [Global Event Rules Update: API](https://v2.developer.pagerduty.com/docs/global-event-rules-api)*
An API designed to help admins and developers automate the management of their Global Event Rules.

**Integrations**

*Oct. 1 — [Pivotal Cloud Foundry Integration](https://www.pagerduty.com/docs/guides/pivotal-cloud-foundry-integration-guide/)*
The Pivotal integration allows development teams to quickly onboard with a basic setup of critical PagerDuty components. 

*Oct. 1 — [Microsoft SCOM Integration](https://www.pagerduty.com/docs/guides/scom-integration-guide-2016/)*
The Microsoft SCOM integration allows customers to route infrastructure monitoring events to PagerDuty for real-time response.

#September 2018

**New Features**

*Sep. 12 — [PagerDuty Visibility](https://support.pagerduty.com/docs/pagerduty-visibility)*
PagerDuty Visibility is a new product that provides technical and business responders with a shared understanding of major incident scope and impact. This facilitates organization-wide response without technical and business responders interrupting each other for details.

*Sep. 12 — [PagerDuty Visibility: Business Services](https://support.pagerduty.com/docs/business-services)*
Business Services is a key feature of PagerDuty Visibility. It provides a way to model capabilities that span multiple technical services and may be owned by several different teams. This provides business users with customer-impact context even if they lack full understanding of the function and scope of all technical services.

*Sep. 12 — [PagerDuty Visibility: Business Impact Metrics](https://support.pagerduty.com/docs/impact-metrics)*
Impact Metrics is a key feature of PagerDuty Visibility. It allows you to quantify the impact of incidents on your business services in real time. By placing existing business impact metrics in context of major incidents, business stakeholders can have a fully automated, live view of the impact at any time.

**Improvements**

*Sep. 25 — [Event Rules Update: Rule Disablement](https://support.pagerduty.com/docs/global-event-rules#section-disable-event-rules)*
To pause an event rule’s activity, one can disable and re-enable it at a later time. This feature allows you to manually initiate integration-specific disablement during maintenance or testing on a tool.

**Integrations**

*Sep. 12 — [Jira Service Desk Integration](https://support.pagerduty.com/docs/jira-server)*
Provides Jira Service Desk users with the ability to engage on-calls via PagerDuty. Tickets in Jira Service Desk can be escalated to the on-call either automatically (by configurable criteria) or manually (on button press). Integration is bidirectional, and syncs status, priority, and notes.

*Sep. 4 — [PagerDuty + Atlassian Bitbucket Integration](https://support.pagerduty.com/v1/docs/bitbucket)*
New integration with Atlassian Bitbucket. After a change is committed to a Bitbucket repository, failures in the pipeline can be routed to PagerDuty so they can be actioned in real time.

*Sep. 4 — [PagerDuty + Atlassian Jira Cloud Integration Update](https://support.pagerduty.com/v1/docs/jira-cloud):*
Updates to our existing bidirectional Jira Cloud integration.

- Bidirectional status sync
- Bidirectional note sync between PagerDuty and Jira
- Bidirectional priority sync
- Ability to have PagerDuty populate fields in Jira (such as mandatory or custom fields)
- Ability to automatically or manually create a Jira issue from PagerDuty
- Updated sidebar widget in Jira

*Sep. 4 — [PagerDuty + Atlassian Jira Server Integration Update](https://support.pagerduty.com/v1/docs/jira-server):*
Updates to our existing bidirectional Jira Server integration.

- Bidirectional status sync
- Bidirectional note sync between PagerDuty and Jira
- Bidirectional priority sync
- Ability to have PagerDuty populate fields in Jira (such as mandatory or custom fields)
- Ability to automatically or manually create a Jira issue from PagerDuty
- Updated sidebar widget in Jira.

#August 2018

**Improvements**

*Aug. 1 — [Modern Incident Response Update: APIs](https://www.pagerduty.com/features/modern-incident-response/)*
Enables advanced API-based automation of incident response, including [mobilizing multiple responders for an incident](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents/post_incidents_id_responder_requests), sending [status updates](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents/post_incidents_id_status_updates), and [running response plays](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Response_Plays/post_response_plays_response_play_id_run).

#June 2018

**New Features**

*Jun. 7 — [Event Intelligence Product Launch](https://www.pagerduty.com/features/event-intelligence-and-automation/)*
PagerDuty Event Intelligence is a new product that looks at both digital signals and human response behavior to optimize digital operations.
Using Event Intelligence, teams can automate common manual workflows, significantly reduce operational noise, and access rich context during incident triage to speed up response.

*Jun. 7 — Event Intelligence: [Threshold Alerts](https://support.pagerduty.com/docs/event-intelligence#section-threshold-alerts)*
Threshold Alerts are a key feature of the Event Intelligence package. They allow customers to receive PagerDuty notifications only when their customized alert conditions breach specified limits, enabling, responders to effectively reduce alert noise without missing critical issues.

*Jun. 7 — Event Intelligence: [Scheduled Rules](https://support.pagerduty.com/docs/event-intelligence#section-scheduled-rules)*
Schedule Rules are a key feature of the Event Intelligence package. Customers can gain a greater degree of control over their event rules by detailing specific times in the future in which they will be active. This is particularly helpful during rules testing and planned maintenance.

*Jun. 7 — [Event Intelligence: Event Rules](https://support.pagerduty.com/v1/docs/global-event-rules)*
Event Rules is a feature release for the Event Intelligence package. Event Rules allow you to define which team receives alerts based on content in those events. 

**Improvements**

*Jun. 28 — [Response Plays Update](https://support.pagerduty.com/docs/response-automation): [Response Bridge](https://support.pagerduty.com/docs/response-bridge)*
Users can now set a Response Bridge on an incident as part of response plays, allowing responders to use their preferred web conferencing provider for coordination.

*Jun. 12 — [Incident Timeline Update](https://support.pagerduty.com/docs/incidents#section-incident-lifecycle): Escalations Itemization During [Response Mobilization](https://support.pagerduty.com/docs/mobilizing-a-response)*
All escalations during response mobilization will now be itemized in the incident timeline. This facilitates the acceleration of incident response by allowing the right people to focus on resolution. Additionally, this information can be easily included in postmortems.

**Integrations**

*Jun. 1 — Integration Updates: Migration From API v1 to API v2 Endpoints*
Updates have been made to the following integrations using v1 APIs, and API endpoints have been migrated to v2 APIs:

- [CA UIM](https://www.pagerduty.com/docs/guides/ca-uim-integration-guide/)
- [Zenoss](https://www.pagerduty.com/integrations/zenoss/)
- [Ansible](https://www.pagerduty.com/docs/guides/ansible-integration-guide/)
- [Hubot](https://www.pagerduty.com/docs/guides/hubot-integration-guide/)
- [Zapier](https://www.pagerduty.com/integrations/zapier/)

Customers using an older version should update their integration to the latest version on our [website](https://v2.developer.pagerduty.com/docs/migrating-to-api-v2).

#May 2018

**Improvements**

*May 1 — [Live Call Routing Updates: Customization and Transcription](https://support.pagerduty.com/docs/live-call-routing)*

- Ability to customize ring duration before a call escalates to the next responder
- Ability to customize the auto attendant greeting
- Transcription is available with premium Live Call Routing pricing on Team, Business, and Digital Operations plans. Please [contact our Sales team](https://www.pagerduty.com/contact-sales/) if you are interested in this feature

**Integrations**

*May 7 — [PagerDuty + Microsoft Azure Integration Update](https://www.pagerduty.com/docs/guides/azure-integration-guide/)*
Update to our existing Microsoft Azure integration. Support for the new Metric alert format with automatic syncing of PagerDuty incidents and Microsoft Azure Metric Alerts.


*May 7 — [PagerDuty + Microsoft VSTS Integration Update](https://www.pagerduty.com/docs/guides/visual-studio-team-services-integration-guide/)*
Update to our existing Microsoft VSTS integration. Automatic syncing of PagerDuty incidents with Microsoft Visual Studio Team Services Work Items.

#April 2018

**Integrations**

*Apr. 17 — [PagerDuty + Atlassian Stride](https://www.pagerduty.com/docs/guides/stride-extension-guide/)*
The Atlassian Stride extension allows you to be notified of PagerDuty incidents and acknowledge or resolve them straight from the Stride UI.

#September 2017

**Improvements**

*Sep. 28 — API Updates: v2 [Webhooks](https://support.pagerduty.com/docs/webhooks) and [Extensions](https://support.pagerduty.com/docs/extensions-add-ons#section-extensions)*
- V2 webhooks
- Extensions API endpoint: Add extensions (like webhooks, etc.) to a service over the API
- New Notes webhook type: receive a webhook whenever a note is added to an incident