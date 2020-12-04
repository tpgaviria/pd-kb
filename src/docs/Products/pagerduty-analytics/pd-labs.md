---
title: "PD Labs"
slug: "pd-labs"
hidden: false
createdAt: "2020-09-24T20:39:14.861Z"
updatedAt: "2020-10-27T16:44:31.165Z"
---
PD Labs allows you to explore and test drive new products from PagerDuty Analytics. Surface insights on your organization’s operational maturity and receive recommendations on how to improve it, with push-button account configuration options. To try PD Labs, navigate to **Analytics** :fa-arrow-right: **PD Labs**. 
[block:callout]
{
  "type": "info",
  "body": "* PD Labs is available for customers on our Digital Operations plan. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.\n* PD Labs is currently in Beta with features and documentation subject to change.",
  "title": "Notes"
}
[/block]


![](https://files.readme.io/7d17e3f-pd-labs-overview.png)

# Insights

Insights is a new reporting tool that surfaces data based on common use cases and the Digital Operations Maturity Model. It provides you with flexible insight tables that help you find answers to common questions about your Incident Activity, Service Performance, Team Health and Business Impact. You can also search, filter, and sort data by Team, Urgency, Priority, Date Range, as well as a number of other fields in order to view data in a way that is most useful to you.Insights can be found by navigating to **Analytics** :fa-arrow-right: **PD Labs** :fa-arrow-right: **Explore My Insights**. If you have feedback, please click the **Provide Feedback** button in the upper right of the screen.

## Filter and Search Insights

To filter and search data in any of the Insights tabs:

1. Select your preferred insights tab: [**Incident Activity**](https://support.pagerduty.com/docs/pd-labs#incident-activity), [**Service Performance**](https://support.pagerduty.com/docs/pd-labs#service-performance), [**Team Health**](https://support.pagerduty.com/docs/pd-labs#team-health) or [**Business Impact**](https://support.pagerduty.com/docs/pd-labs#business-impact).
2. In the **Select a question for `[Insights Tab Name]`** dropdown, select a question that best represents your use case.
3. You may optionally filter with the following parameters: 
  * **Teams**: You can filter further by selecting the **My Teams** tab or **All Teams** tab or search for your preferred teams. Select each preferred Team’s **checkbox** and click **Apply**.
   * **Urgency**: Select from **All**, **High** or **Low** urgency incidents.
   * **Priority**: Select from **All** or any of your account’s [preconfigured priority levels](https://support.pagerduty.com/docs/incident-priority#enabling-incident-priority).
   * **Date Range**: Select from **Last 30 Days**, **Last 7 Days**, **Last Month**, **This Month**, **Today** or **Custom Range**. If you select **Custom Range**, select the range on the calendar and click **Apply**.
4. Below, you will see data that matches the question and filters that you have set. You may search this list or filter each column to drill down to specific data. 
5. On each tab, you will have the option to **Export CSV** to the right of the data list. Export CSV will respect the view and results based on your search and filter selection.  

## Incident Activity

Incident Activity allows you to filter by the following questions and corresponding Maturity Model data:

* **Which incidents affected my response and resolution time?**: Mean Time to Acknowledge (MTTA) and Mean Time to Resolve (MTTR). 
* **Which incidents kept occurring most frequently over a period of time?**: Most Frequent Incidents rate. 
* **Were there any incidents that required multiple responders and expertise?**: Responder Count.
* **Did I deal with incident activity levels well?**: Responder Count, Escalations Count, MTTR, Mean Assignment Count, Response Effort.

## Service Performance

Service Performance allows you to filter by the following questions and corresponding Maturity Model data:

* **What was the response cost for my services?**: Response Effort (Incident Duration), Incident Count, Uptime, Notification Count, MTTR, MTTA, Responder Count.
* **What services were most active over a period of time?**: Response Effort (Incident Duration), Incident Count, Uptime, Notification Count, MTTR, MTTA, Responder Count.

## Team Health 

Team Health allows you to filter by the following questions and corresponding Maturity Model data:

* **Which responders were most interrupted during business, off, and sleep hours?**: Incident Count, Business Hour Interruptions, Off Hour Interruptions, Sleep Hour Interruptions, Notification Count
* **Which responders experienced fatigue over a period of time?**: Incident Count, Business Hour Interruptions, Off Hour Interruptions, Sleep Hour Interruptions, Notification Count
* **How were my teams impacted by incidents?**: Incident Count, Business Hour Interruptions, Off Hour Interruptions, Sleep Hour Interruptions, Notification Count, by Team

## Business Impact

Business Impact allows you to filter by the following questions and corresponding Maturity Model data:

* **How much did services cost over a period of time?**: Response Effort, Incident Count, Uptime, Notification Count, MTTR, MTTA, Responder Count.

### Response Cost for Services

The Business Service tab will provide you with a value of your cost per responder, which is set at $50 by default. If you would like to change your estimated cost per responder, you can enter that cost in the **Estimated Cost ($/hour)** field and a new total value will be calculated based on that cost and the **Total Response Hours**. 

# Recommendations

Recommendations provides a view into where your services stand in relation to the Maturity Model and it provides a single push-button configuration of helpful settings within your account to drive further maturity. Recommendations can be found by navigating to **Analytics** :fa-arrow-right: **PD Labs** :fa-arrow-right: **Explore My Recommendations**. If you have feedback, please click the **Provide Feedback** button in the upper right of the screen.

## Filter, Search and View Recommendations

1. You will see a list of all **Service Recommendations** in your account. You may optionally filter by **Teams**: You can filter further by selecting the **My Teams** tab or **All Teams** tab or search for your preferred teams. Select each preferred Team’s **checkbox** and click **Apply**. You may also search this list to drill down to specific data. 
2. Once you have filtered and searched for the data you are looking for, click the name of the **Service** to view further details about its recommendations.
3. On the next screen, you will see this service’s **Maturity Rating**, which is based on a comparison of all services across your account. You will also see the **Recommendation** for this service, with an explanation of the benefit to the service, as well as a button to automatically **Enable** the recommended configuration. Finally, you will see a **Preview** of how this recommended configuration would affect your account if enabled.  

# PagerDuty Analytics Slack Integration 

The PagerDuty Analytics Slack integration allows you to receive recurring, high-level Insights reports on Incident Activity, Service Performance, and Team Health directly to the PagerDuty app in Slack. Reports are only visible to you and they will not be shown publicly in the channels in which they are configured.
[block:callout]
{
  "type": "info",
  "body": "* The PagerDuty Analytics Slack integration is available on all plans.\n* All users can use the `/pd insights` slash command.",
  "title": "Notes"
}
[/block]
## Configure Reports

1. Configure the [PagerDuty + Slack v2 integration](https://support.pagerduty.com/docs/slack-integration-guide), if you do not have it configured already.
2. In a channel that has the PagerDuty app configured, use the Slack slash command `/pd insights` to configure recurring Insights reports. 
3. Configure your subscription:

   * **Which teams need to be included?**: Select up to 10 teams for which you would like to receive these reports. 
   * **How often do you need to be updated?**: Identify the interval for which you would like to receive these reports.
   * **When do you need the report delivered?**: Specify the day and time at which you would like to receive these reports.
  Click **Confirm** to save your settings.

4. You will then see a final confirmation message from the PagerDuty app:

![](https://files.readme.io/5758cfb-pd-labs-slack-confirmation.png)

## View Reports

On the date(s) that you have configured (see section above) you will receive a report that is only visible to you. Each report provides a high-level view of your Insights. Click each **report type** button to view the report. You have the option to **Explore incident activity on web** to see further details in the web app, and you may also **Share this report on Slack** or **Unsubscribe**.

![](https://files.readme.io/e347f08-pd-labs-slack-report.png)
