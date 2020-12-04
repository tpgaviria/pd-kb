---
title: "PagerDuty Visibility"
slug: "pagerduty-visibility"
hidden: false
createdAt: "2018-08-28T19:10:18.375Z"
updatedAt: "2020-09-20T21:00:39.975Z"
---
PagerDuty Visibility provides technical responders, business responders and leaders a live, shared view of system health and incident impact to improve real-time decision making when operational issues affect customers. The key features of PagerDuty Visibility are: Business Services, Impact Metrics and the Visibility Console in the PagerDuty web app.

[block:callout]
{
  "type": "info",
  "body": "PagerDuty Visibility is included in our Digital Operations plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature suite."
}
[/block]


![](https://files.readme.io/2f19aff-Visibility_Final.jpg)


## Product Capabilities

##Business Services
[Business Services](doc:business-services) provide a way to model capabilities that span multiple technical services and that may be owned by several different teams. Mapping technical services to the Business Services they support lets responders see the Business Services that an incident could be affecting and, with PagerDuty Visibility, it lets others in the business see when there is an incident affecting one of the Business Services they care about.

[block:callout]
{
  "type": "success",
  "body": "All plans have access to Business Services."
}
[/block]

##Impact Metrics
[Impact Metrics](doc:impact-metrics) are a new type of integration into PagerDuty that allow you to quantify the impact of incidents on your business services in real-time. Business stakeholders no longer have to ask the response team about the customer impact of an incident and wait for a response. Instead, with Impact Metrics they have a fully automated, live view of the impact available at any time.

##Visibility Console
Designed for situational awareness in a technical context, the [Visibility Console](doc:visibility-console) is a customizable framework that provides complete operational awareness of the critical elements of your IT infrastructure. This allows you to gain enhanced insights to accelerate incident response.


## Using PagerDuty Visibility

To set up PagerDuty Visibility, the first step is to configure [Business Services](doc:business-services). While it is possible to configure multiple levels of business service dependencies, note that only the top level business services will appear in the Visibility console in the web app. 

The next step is to set up your [Impact Metrics](doc:impact-metrics). You are not required to have impact metrics for every business service, but the dashboard is most useful when each business service has between 1 and 5 metrics associated with it. **Note** that an impact metric can be associated with multiple business services if desired.

Once your impact metrics have been created and associated with your business services, you should be able to see them on the [mobile Status Dashboard](https://support.pagerduty.com/docs/impact-metrics#view-impact-metrics-in-the-mobile-status-dashboard). You will be able to see the current data for that metric in the business service details as well once you have data feeding into the integrations for each impact metric. **Note**: You can view the metrics for any business service on the Status Dashboard in either the operational or disrupted states.

A business service will appear as disrupted on the dashboard when there is an open incident on any supporting technical service mapped to it and the incident has a [priority](doc:incident-priority)  assigned. Incidents that have not been assigned a priority will not appear on the Visibility dashboard, so that it does not become cluttered with operational noise. When there are no incidents with priority open on any of the supporting technical services, then the business service will show as operational on the Visibility dashboard.

For customers with our **PagerDuty Modern Incident Response** product, any [Status Updates](doc:communicating-with-stakeholders) for the incident that is causing a business service to be disrupted will appear in the Visibility dashboard in the details for the business service. 
[block:callout]
{
  "type": "info",
  "body": "PagerDuty Modern Incident Response is included on Digital Operations plans and available as an add-on to Team and Business plans."
}
[/block]
The technical services that support each business service can also be seen on the Visibility dashboard in the details for that business service. If the business service is disrupted, the list of technical services will also indicate which of them are causing the disruption.
[block:callout]
{
  "type": "success",
  "title": "Best Practices",
  "body": "Please visit our article on [PagerDuty Visibility Best Practices](https://community.pagerduty.com/t/pagerduty-visibility-best-practices/3623) for more information on the configuration and proper use of core features supporting this add-on product."
}
[/block]