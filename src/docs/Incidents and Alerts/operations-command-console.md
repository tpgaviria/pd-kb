---
title: "Operations Command Console"
slug: "operations-command-console"
hidden: true
createdAt: "2017-11-08T18:34:00.414Z"
updatedAt: "2018-02-14T01:05:00.493Z"
---
In order to effectively ensure the continued health of your infrastructure and overall business you need information at the incident, service, responder, and infrastructure contexts at all times. PagerDuty's [Operations Command Console](https://www.pagerduty.com/applications/) is a customizable framework that provides complete operational awareness of the critical elements of your IT infrastructure, allowing you to gain enhanced insights that accelerate incident response.
- [Accessing the Console](#section-accessing-the-console)
- [Applications](#section-applications)
- [Console Features](#section-console-features)

##Accessing the Console
[block:callout]
{
  "type": "info",
  "body": "If the Operations Command Console is available to your account all users will see and have access to the **Command Console** option in the main menu.\n\nPlease [contact our sales team](https://www.pagerduty.com/contact-sales/) if you do not see Command Console in the main menu and would like to see a demo or start a trial of the Operations Command Console."
}
[/block]
##Applications
The following applications are available in the Operations Command Console:
###Infrastructure Health
Infrastructure Health is a core component of the Operations Command Console. This application provides a comprehensive visualization of the clusters of alerts and events occurring across your IT infrastructure and delivers infrastructure-wide context that is vital for improving incident management within your organization. With a comprehensive timeline of events, IT teams are able to view their alert clusters across services or tech stacks in a graphical and easy to understand interface that is ideal for pattern matching. With all the data in one place, organizations can finally gain an understanding of their ever expanding infrastructure and begin to measure performance across their critical apps and services. Learn more about the [Infrastructure Health Application](#section-infrastructure-health-application).

###Service Health
Service Health displays an up-to-the-minute status of your PagerDuty service's health status. It also gives you the ability to **Focus** on any of those services that may be affecting multiple other services and causing **Major Incidents** to occur. This is a foundational application for the Console and one that anchors several other console configurations.

###Major Incidents
Incidents designated as [high urgency](/docs/service-settings#section-enable-urgencies) will appear in the Major Incidents application. You can Focus on specific incidents to see their relationship with your services, responders, and overall infrastructure.

###Responders
Responders allows you to quickly identify which team and which escalation policy is covering, online and working to remediate open incidents.

##Console Features
###Focus
Focusing on any of the entries in a given application highlights related content in the other applications, providing a deep context around the item in focus. To focus on an incident, hover over the incident and click on the **Focus** option that appears for that incident.

###Details View
Select the details feature for more information on specific incident or services. To view details for an incident or service, hover over the item and click on the **Details** option that appears for that incident.

###Search
The Service Health and Major Incidents applications let you quickly filter out information of interest. Simply click the search icon (magnifying glass) to get started.

###Customization
You can adjust the layout of the console, as well as the applications you want to appear. Application layout can be changed by clicking the **Console Settings** (gear) button in the upper right hand corner of the page. A single application can also be expanded to encompass the entire screen by clicking the maximize button in the upper right hand corner of any application. Display customization is per-user, so go ahead and set things ups how you like without fear that your changes will impact anybody else on your team.
## Infrastructure Health Application

The Infrastructure Health Application allows a view all of your events and alerts across your entire infrastructure in a single view. This holistic view empowers you to understand the complexities of your infrastructure and ultimately improve event management throughout your organization.

The infrastructure aggregates the linear data from the Alerts Tab and Incident Dashboard to offer a visual timeline of events and alerts across your PagerDuty services. Users can identify noisy low value alerts, uncover patterns in data, and juxtapose contextual events, like deploys or tweets, against alerts.
[block:callout]
{
  "type": "info",
  "body": "The Infrastructure Health Application can be accessed via the [Operations Command Console](#section-accessing-the-console). If you'd like to enable this feature, please contact our [Sales Team](https://www.pagerduty.com/contact-sales/).",
  "title": "Note"
}
[/block]
For the best experience with this application, we recommend expanding the Infrastructure Health Application to fill your screen.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/266ec65-pasted_image_0.png",
        "pasted image 0.png",
        1436,
        789,
        "#22333f"
      ]
    }
  ]
}
[/block]
##Infrastructure Health Application Features 

###Click, Drag, Select and Zoom-in
Zoom-in on sections of data for more granularity on areas of interest. Data ranges can also be altered by time duration: 1, 6 and 24 hours; 7, 14 and 30 days. Time duration of data can be configured in the upper right hand corner of the application when the application is fully expanded.

###Data Cluster Sizes
The time period represented in the differently-size colored data clusters depends on the time period selected in the application. For the 1–24 hour view, each cluster will include data in 5 minute intervals. For the 7–14 day view, data is clustered hourly. In the 30 day view your data clusters will be segmented into clusters of 6 hours.

###Pivot Data On Source or Service
Get a completely new perspective on your data using the Source and Service Pivot. Please note that only integrations that emit our [Common Event Format (PD-CEF)](doc:pd-cef) will display when pivoting on Source.

###Using Filters
In the search bar below these pivot points you may also filter which individual sources or services are represented in your data to fine tune what data is on display. Filtering may be done by text or regex. Clicking on individual services or sources in the list below the search bar allows for filtering as well.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7c57797-IHA_img2.png",
        "IHA_img2.png",
        496,
        445,
        "#e6e8df"
      ]
    }
  ]
}
[/block]
###Accessing Cluster Details
Hovering over a cluster of will create a dialog box with details about data in that cluster. Clicking on the cluster will generate a scrollable dialog box with information about the data, including individual events' severity, priority, source, and integration.

##Frequently Asked Questions
###Do all alerts appear in the Infrastructure Health Application?
Any event that creates a log entry in PagerDuty will appear in the Infrastructure Health Application. However, the Source pivot will only display data that has been migrated to our [PagerDuty Common Event Format](doc:pd-cef). 

###How often does the Infrastructure Health Application update?
Data flows into the Application in real time. If an event is triggered, and the user immediately reloads the Application, the event will appear. The Application also auto refreshes every 1 minute, so the user is not required to reload the page.

###How do I bring in contextual events, like deploys or tweets?
If you want to bring more event data into your Infrastructure Health Application, you have many options.
- We have [over 150 out of the box integrations](https://www.pagerduty.com/integrations/). Take a look through these to find out which will work best for you.
- You can use our Custom Event Transformer tool to integrate PagerDuty with any tool that can send an HTTP request. You can also use the Customer Event Transformer to edit the JSON payload PagerDuty receives. More info can be found in our [CET Dev Docs](https://v2.developer.pagerduty.com/docs/creating-an-integration-inline) and [CET Integration Guide](https://www.pagerduty.com/docs/guides/custom-event-transformer/).
- See the [example use case](#section-example-use-case-for-the-infrastructure-health-application) for more info about setting up the Infrastructure Health Application.

###What is the y-axis of the Infrastructure Health Application?
By default, the y-axis will display your PagerDuty Services. Each Service is represented by a swimlane in the y-axis. If you select the Source pivot, the y-axis will update to display all of the unique sources from which your data is coming.

###How do I display multiple alerts and events in the same swimlane of the Application?
You can use our services group feature to roll multiple integrations into a single service. This will allow you to visualize all events and alerts happening within the service in a single swimlane in the Infrastructure Health Applications. More info: Services Group Blog Post

###How many days of data will the Application Display?
The Infrastructure Health Application displays up to 30 days worth of data.
## Example Use Case for the Infrastructure Health Application

Integrating inbound tweets into your PagerDuty [Infrastructure Health Application](#section-infrastructure-health-application) is a great way to track user responses to deploys and outages. Twitter does not support webhooks, so an intermediary tool is necessary in order to send events from Twitter to PagerDuty. You can use a tool like Zapier or Microsoft Flow. The following guide provides an example of how to integrate Twitter with the Infrastructure Health Application using Zapier.

##Integration Instructions

###In PagerDuty

1. Set up a new Twitter service in PagerDuty, or add a Twitter extension as a generic webhook to an existing service. 
2. For a new Twitter service, select the custom event transformer integration type as the **Integration Type**.
3. We suggest setting the notification urgency for the service as [suppressed](doc:event-management-tools#section-suppression-and-event-rules) to prevent alerting for incoming tweets.
4. On your Twitter service's individual page, select the **Integrations** tab and click on **Custom Event Transformer**. Then click **Add Integration**.
5. Select **Edit Integration**.
6. Delete the JavaScript that appears on the **Edit Integration** page 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/93a2ec7-delete_javascript.png",
        "delete javascript.png",
        779,
        514,
        "#e9f5e2"
      ]
    }
  ]
}
[/block]
7. Here is an example of what can be pasted into the JavaScript field. You can map these fields to meet your specific needs. Ensure that `event_class` is set to `"tweet"` in order to have Twitter events appear as small blue "T's" in the Infrastructure Health Application interface so that they are easily differentiated from alerts.
[block:code]
{
  "codes": [
    {
      "code": "var body = PD.inputRequest.body;\n\nvar cef_event = {\n event_type: 'cef',\n creation_time: new Date(body.created_at),\n severity: \"Info\",\n priority: body.retweet_count,\n client: \"Twitter\",\n client_url: body.url,\n event_class: \"tweet\",\n message: body.text,\n details: body.user.description,\n source_component: \"Twitter\",\n source_origin: \"Twitter\",\n reporter_component: \"Twitter\",\n local_instance_id: body.id,\n event_action: PD.Trigger\n};\n\nPD.emitCEFEvents([cef_event]);",
      "language": "javascript"
    }
  ]
}
[/block]
###In Zapier

8. Create a zap in Zapier to fire webhooks from Twitter to PagerDuty. Be sure to choose **Twitter** when prompted to select a trigger app.
9. When asked to Select Twitter Trigger, opt for **Search Mentions**.
10. On the next screen you will be prompted to enter the search term you are interested in tracking in Twitter.
11. Next you will be asked to Choose an Action App. Select the **Webhooks by Zapier** option.
12. You will be prompted to Choose Action. For this step, click the radio button to select **POST: Fire off a single POST request as a form or JSON**.

###Return to PagerDuty 

13. Go back to your Twitter service's individual service page and click on the **Integrations** tab. Then click on the **Custom Events Transformer**.
14. Copy the URL provided under **Integration URL**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bedd813-CET_link.png",
        "CET link.png",
        905,
        328,
        "#394c64"
      ]
    }
  ]
}
[/block]
###Return to Zapier

15. Paste the PagerDuty URL into Zapier on the **Set up Webhooks by Zapier POST** page.
16. Test, and select field.
17. Click **Finish**.