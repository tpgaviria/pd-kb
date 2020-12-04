---
title: "Visibility Console v1"
slug: "visibility-console-v1"
hidden: true
createdAt: "2018-09-11T12:24:44.973Z"
updatedAt: "2020-09-20T21:12:37.240Z"
---
In order to effectively ensure the continued health of your infrastructure and overall business you need information at the incident, service, responder, and infrastructure contexts at all times. PagerDuty's [Visibility Console](https://www.pagerduty.com/applications/) is a customizable framework that provides complete operational awareness of the critical elements of your IT infrastructure, allowing you to gain enhanced insights that accelerate incident response.
- [Accessing the Console](#section-accessing-the-console)
- [Applications](#section-applications)
- [Console Features](#section-console-features)

#Accessing and Configuring the Visibility Console
[block:callout]
{
  "type": "info",
  "body": "This feature is available as part of our Digital Operations plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to sign up for a trial or upgrade to a plan with this feature suite."
}
[/block]
To set up PagerDuty Visibility, the first step is to [configure business services](https://support.pagerduty.com/docs/business-services#section-creating-business-services). While it is possible to configure multiple levels of business service dependencies, note that only the top level business services (i.e. business services with no other services relying on them) will appear in the Visibility Console. Once your business services are properly configured, you should also see them on the [Status Dashboard](https://support.pagerduty.com/docs/status-dashboard) in the web app and mobile app.

#Applications

The following applications are available in the Visibility Console:

##Infrastructure Health
Infrastructure Health is a core component of the Visibility Console. This application provides a comprehensive visualization of the clusters of alerts and events occurring across your IT infrastructure and delivers infrastructure-wide context that is vital for improving incident management within your organization. With a comprehensive timeline of events, IT teams are able to view their alert clusters across services or tech stacks in a graphical and easy to understand interface that is ideal for pattern matching. With all the data in one place, organizations can finally gain an understanding of their ever expanding infrastructure and begin to measure performance across their critical apps and services. Learn more about the [Infrastructure Health Application](#section-infrastructure-health-application).

##Service Health
Service Health displays an up-to-the-minute status of your PagerDuty service's health status. It also gives you the ability to **Focus** on any of those services that may be affecting multiple other services and causing **Major Incidents** to occur. This is a foundational application for the Console and one that anchors several other console configurations.

##Major Incidents
Incidents designated as [high urgency](/docs/service-settings#section-enable-urgencies) will appear in the Major Incidents application. You can Focus on specific incidents to see their relationship with your services, responders, and overall infrastructure.

##Responders
Responders allows you to quickly identify which team and which escalation policy is covering, online and working to remediate open incidents.

#Console Features
##Focus
Focusing on any of the entries in a given application highlights related content in the other applications, providing a deep context around the item in focus. To focus on an incident, hover over the incident and click on the **Focus** option that appears for that incident.

##Details View
Select the details feature for more information on specific incident or services. To view details for an incident or service, hover over the item and click on the **Details** option that appears for that incident.

##Search
The Service Health and Major Incidents applications let you quickly filter out information of interest. Simply click the search icon (magnifying glass) to get started.

##Customization
You can adjust the layout of the console, as well as the applications you want to appear. Application layout can be changed by clicking the **Console Settings** (gear) button in the upper right hand corner of the page. A single application can also be expanded to encompass the entire screen by clicking the maximize button in the upper right hand corner of any application. Display customization is per-user, so go ahead and set things ups how you like without fear that your changes will impact anybody else on your team.
## Infrastructure Health Application

The Infrastructure Health Application allows a view all of your events and alerts across your entire infrastructure in a single view. This holistic view empowers you to understand the complexities of your infrastructure and ultimately improve event management throughout your organization.

The Infrastructure Health Application aggregates the linear data from the Alerts Tab and Incident Dashboard to offer a visual timeline of events and alerts across your PagerDuty services. Users can identify noisy low value alerts, uncover patterns in data, and juxtapose contextual events.
[block:callout]
{
  "type": "info",
  "body": "The Infrastructure Health Application can be accessed via the [Visibility Console](#section-accessing-the-console). If you'd like to enable this feature, please contact our [Sales Team](https://www.pagerduty.com/contact-sales/).",
  "title": "Note"
}
[/block]
For the best experience with this application, we recommend expanding the Infrastructure Health Application to fill your screen.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/959db89-visibility-console-infrastructure-health.png",
        "visibility-console-infrastructure-health.png",
        1656,
        1010,
        "#f8f8f7"
      ]
    }
  ]
}
[/block]
##Infrastructure Health Application Features 

###Click, Drag, Select and Zoom-in
Zoom-in on sections of data for more granularity on areas of interest. Data ranges can also be altered by time duration: 1 hour, 6 hours, 24 hours and 7 days. Time duration of data can be configured in the upper right hand corner of the application when the application is fully expanded.

###Data Cluster Sizes
The time period represented in the differently-size colored data clusters depends on the time period selected in the application. For the 1–24 hour view, each cluster will include data in 5 minute intervals. For the 7-day view, data is clustered hourly.

###Pivot Data On Source or Service
Get a completely new perspective on your data using the Source and Service Pivot. Please note that only integrations that emit our [Common Event Format (PD-CEF)](doc:pd-cef) will display when pivoting on Source.

###Using Filters
In the search bar below these pivot points you may also filter which individual sources or services are represented in your data to fine tune what data is on display. Filtering may be done by text or regex. Clicking on individual services or sources in the list below the search bar allows for filtering as well.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/69ff1b9-visibility-console-filter.png",
        "visibility-console-filter.png",
        960,
        1052,
        "#f6f4f3"
      ]
    }
  ]
}
[/block]
###Accessing Cluster Details
Hovering over a cluster of will create a dialog box with details about data in that cluster. Clicking on the cluster will generate a scrollable dialog box with information about the data, including individual events' severity, priority, source, and integration.

#FAQ
###Do all alerts appear in the Infrastructure Health Application?
Any event that creates a log entry in PagerDuty will appear in the Infrastructure Health Application. However, the Source pivot will only display data that has been migrated to our [PagerDuty Common Event Format](doc:pd-cef). 

###How often does the Infrastructure Health Application update?
Data flows into the Application in real time. If an event is triggered, and the user immediately reloads the Application, the event will appear. The Application also auto refreshes every 1 minute, so the user is not required to reload the page.

###How do I bring in contextual events?
If you want to bring more event data into your Infrastructure Health Application, you have many options.
- We have [over 300 out of the box integrations](https://www.pagerduty.com/integrations/). Take a look through these to find out which will work best for you.
- You can use our Custom Event Transformer tool to integrate PagerDuty with any tool that can send an HTTP request. You can also use the Customer Event Transformer to edit the JSON payload PagerDuty receives. More info can be found in our [CET Dev Docs](https://v2.developer.pagerduty.com/docs/creating-an-integration-inline) and [CET Integration Guide](https://www.pagerduty.com/docs/guides/custom-event-transformer/).

###What is the y-axis of the Infrastructure Health Application?
By default, the y-axis will display your PagerDuty Services. Each Service is represented by a swimlane in the y-axis. If you select the Source pivot, the y-axis will update to display all of the unique sources from which your data is coming.

###How do I display multiple alerts and events in the same swimlane of the Application?
You can use our services group feature to roll multiple integrations into a single service. This will allow you to visualize all events and alerts happening within the service in a single swimlane in the Infrastructure Health Applications. More info: [Services Group Blog Post](https://www.pagerduty.com/blog/feature-services-group/).

###How many days of data will the Application Display?
The Infrastructure Health Application displays up to 7 days worth of data.