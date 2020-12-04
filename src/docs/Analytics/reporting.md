---
title: "Reporting"
slug: "reporting"
hidden: false
createdAt: "2017-05-11T23:13:30.105Z"
updatedAt: "2020-11-17T20:33:44.059Z"
---
## Advanced Reporting

Advanced Reporting is available on Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring Advanced Reporting. In addition to [Basic Reporting](#section-basic-reporting), these accounts include the following reports, found under the **Analytics** :fa-arrow-right: **Reports** menu:

- [System Report](/docs/analytics#section-system-report)
- [Team Report](/docs/analytics#section-team-report)
- [User Report](/docs/analytics#section-user-report)

User, Team, and System reports use the account-level time zone for filtering and display. The account-level time zone is also used for drilldowns.

Incident .csv exports for Advanced Reporting reports include timestamps in the account-level time zone. 

If a Team organization filter is applied when viewing advanced reporting, reports will display data for the Team filtered, and the reported incidents will be filtered to reflect the escalation policies on that team.
[block:callout]
{
  "type": "info",
  "body": "The CSV is currently limited to a maximum of 20,000 records. After 20,000 rows, the export will be truncated, so if your CSV contains exactly 20,000 rows, you may have partial data.",
  "title": "Note"
}
[/block]
##System Report

The system report provides an overview of your account by escalation policies and services.

Incidents created prior to May 2013 do not have an escalation policy ID associated with them, and will not be visible within the system report when filtering by escalation policy. However, you can still view these incidents by service.

###Parameters
Set the data rollup period by selecting **Daily**, **Weekly**, or **Monthly**. Filter by date range. The date filters will filter incidents according to when the incident was created. 

Data may be sorted by either *service* or *escalation policy*.

You can review data by the:
- Number of High-Urgency Incidents
- Mean Time to Acknowledge High-Urgency Incidents
- Median Time to Acknowledge High-Urgency Incidents
- 90th Percentile Time to Acknowledge High-Urgency Incidents
- Mean Time to Resolve High-Urgency Incidents
- Median Time to Resolve High-Urgency Incidents
- 90th Percentile time to Resolve High-Urgency Incidents
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b78e056-reporting-system-report-views.png",
        "reporting-system-report-views.png",
        2262,
        1322,
        "#f2f2f2"
      ]
    }
  ]
}
[/block]
You can drill down this report to by clicking on **View Incidents**, or view the escalation policy by clicking **View Policy** under the *Actions* column.

Below the incidents graph you may select which escalation policies or services you would like to view. Services or escalation policies may be selected by checking the boxes to the left of each item.

###Data
[block:parameters]
{
  "data": {
    "0-0": "***Service/Escalation Policy***",
    "0-1": "The service or escalation policy that is being reported on.",
    "1-1": "The number of incidents during the time period for that service or escalation policy.",
    "2-1": "The average time between when an incident is triggered and it is acknowledged by a user. Reassign, resolve, and escalation actions do not imply acknowledgement.",
    "3-1": "The average time between when an incident triggered and when is it resolved. Acknowledge, reassign, and escalation actions do not imply resolution.",
    "4-1": "How many of these incidents were escalated before being resolved.",
    "1-0": "***High-Urgency Incidents*** ",
    "2-0": "***MTTA (Mean time to acknowledge)***",
    "3-0": "***MTTR (Mean time to resolve)***",
    "4-0": "***Escalated High-Urgency Incidents***"
  },
  "cols": 2,
  "rows": 5
}
[/block]
###Use Case
Compare Summary Metrics for escalation policies or services to the previous month. These statistics may be viewed in the bottom right hand corner of your system report page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c03df22-reporting-summary-metrics.png",
        "reporting-summary-metrics.png",
        512,
        802,
        "#f5f5f4"
      ]
    }
  ]
}
[/block]
##Team Report
The team report allows you to compare metrics across teams, see if you’re falling within targets, and understand the impact of incident count on response efficiency. It's a good way for team members and leads to get a holistic sense of their performance and operational load over time.

###Parameters
Data may be sorted by either one or all escalation policies.

Set the data rollup period by selecting **Daily**, **Weekly**, or **Monthly**. Filter by date range. The date filters will filter incidents according to when the incident was created.

###Data
[block:parameters]
{
  "data": {
    "6-1": "Shows the number of people the incident was escalated to.",
    "5-1": "Shows the description of the incident.",
    "4-1": "This shows who resolved the incident; if it says 'Not Available' the incident was not  directly resolved by a user.",
    "3-1": "Shows the length of time it took to resolve the incident.",
    "2-1": "Shows the date and time the incident was triggered.",
    "1-1": "This is the service name that the incident was triggered on, by clicking on the service  name you can view that service.",
    "0-1": "You can click the incident number to see the incident details and the incident log.",
    "6-0": "***Escalation Count***",
    "5-0": "***Description***",
    "4-0": "***Resolved By User***",
    "3-0": "***Time to Resolve***",
    "2-0": "***Opened On***",
    "1-0": "***Service***",
    "0-0": "***Incident Number***"
  },
  "cols": 2,
  "rows": 7
}
[/block]
### Use Case
Summary Metrics for escalation policies or services as compared to the previous month are also present. These statistics may be viewed in the bottom right hand corner of your system report page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/feac680-reporting-team-summary-metrics.png",
        "reporting-team-summary-metrics.png",
        508,
        1180,
        "#f4f5f4"
      ]
    }
  ]
}
[/block]
##User Report
User reporting provides detailed information about individual responders in PagerDuty. Only users who have been assigned at least one incident will appear in User reports.
[block:callout]
{
  "type": "info",
  "body": "It’s important to keep in mind that while PagerDuty is providing insight into individual usage patterns, we are not assigning any judgment of performance or giving a meaning to any particular number. As such, we advise against inferring anything without careful consideration of your incident management processes and workflows.",
  "title": "Note"
}
[/block]
###Parameters
Filter by date range. The date filters will filter incidents according to when the incident was created.

###Data
[block:parameters]
{
  "data": {
    "0-0": "***Time On Call***",
    "1-0": "***High-Urgency Incidents***",
    "2-0": "***Acknowledged***",
    "3-0": "***Timeout Escalations***",
    "4-0": "***Manual Escalations***",
    "5-0": "***Reassignments*** ",
    "6-0": "***Mean time to Acknowledge***",
    "0-1": "The total time that a given user was on-call on one or more schedules assigned to escalation policies during the specified time frame\\*.",
    "1-1": "The total number of high-urgency incidents assigned to a given user during the specified time frame.",
    "2-1": "The percentage and the total number of assigned incidents acknowledged by the user. Only explicit incident acknowledgment counts; reassign, resolve, and escalation actions do not imply acknowledgement.",
    "3-1": "The percentage and total number of assigned incidents that are escalated due to timeouts.",
    "4-1": "The percentage and total number of assigned incidents that are manually escalated away from a user without acknowledgement.",
    "5-1": "The percentage and total number of a user’s assigned incidents that are manually reassigned to a user who is not on the original escalation policy, or to another escalation policy.",
    "6-1": "The average time between when an incident is first assigned to a user and when the incident is first acknowledged by that user. Reassign, resolve, and escalation actions do not imply acknowledgement."
  },
  "cols": 2,
  "rows": 7
}
[/block]
Percentages are calculated by dividing the action—such as acknowledging an incident—by the total number of incidents assigned to a user.

\**Time on call is not recorded when users are placed directly on an escalation policy level outside of a schedule. If a user is concurrently on-call on two schedules, that time is not counted twice. Please note that Time on Call data was not recorded before 12:00 AM (UTC), October 31st, 2015.* 
## Basic Reporting

Basic reporting is offered on any level of PagerDuty plan. There are two reports found under the **Analytics** :fa-arrow-right: **Reports** menu:

- [Notification Volume](#section-notifications-report)
- [Incident Volume](#section-incidents-report)

Visit the [Data Export](#section-data-export) section to read about exporting reports. 

Incident and Notification reports in Basic Reporting use the user's configured time zone for filtering and display. Incident .csv exports include timestamps in the account-level time zone. Notification exports include timestamps in UTC.
[block:callout]
{
  "type": "info",
  "body": "The CSV is currently limited to a maximum of 20,000 records. After 20,000 rows, the export will be truncated, so if your CSV contains exactly 20,000 rows, you may have partial data.",
  "title": "Note"
}
[/block]
##Notifications Report
The notifications report allows you to view specific details about all of the notifications that are sent to your users in both graphical and tabular form. To view this report, navigate to **Analytics** :fa-arrow-right: **Reports** :fa-arrow-right: **Notifications** tab.

###Parameters
Set the data rollup period by selecting Daily, Weekly, or Monthly. Filter by date range.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1303e74-reporting-notifications-date-range.png",
        "reporting-notifications-date-range.png",
        836,
        578,
        "#eaecea"
      ]
    }
  ]
}
[/block]
View incidents report data, by clicking on **View Online** or **Download CSV** under the **Actions** column.

###Data
[block:parameters]
{
  "data": {
    "0-0": "**Date** ",
    "1-0": "**Notification Type**",
    "2-0": "**Address** ",
    "3-0": "**User** ",
    "3-1": "User that received the notification",
    "2-1": "Email address or phone number the notification was sent to",
    "1-1": "The contact method used for the notification",
    "0-1": "Date of the notification"
  },
  "cols": 2,
  "rows": 4
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a897b3d-reporting-notification-report-details.png",
        "reporting-notification-report-details.png",
        2166,
        924,
        "#f1f2f2"
      ]
    }
  ]
}
[/block]
##Incidents Report
The incidents report gives a detailed view of an incident's service, its duration, and who resolved it as well as whether it escalated. To view this report go to **Analytics** :fa-arrow-right: **Reports** :fa-arrow-right: **Incidents** tab.

###Parameters
Set the data rollup period by selecting Daily, Weekly, or Monthly. Filter by date range.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bbbd3eb-reporting-incidents-report-date-range.png",
        "reporting-incidents-report-date-range.png",
        846,
        584,
        "#ebedeb"
      ]
    }
  ]
}
[/block]
View incidents report data, by clicking on View Online or Download CSV under the Actions column.

###Data
[block:parameters]
{
  "data": {
    "0-0": "**Incident Number**",
    "0-1": "You can click the incident number to see the incident details and the incident log",
    "1-1": "This is the service name that the incident was triggered on, by clicking on the service  name you can view that service",
    "1-0": "**Service** ",
    "2-0": "**Opened On**",
    "2-1": "Shows the date and time the incident was triggered",
    "3-1": "Shows the date and time the incident was resolved",
    "3-0": "**Resolved On**",
    "4-0": "**Resolved By User**",
    "4-1": "This shows who resolved the incident; if it says 'Not Available' the incident was not  directly resolved by a user",
    "5-1": "Shows the length of time it took to resolve the incident",
    "5-0": "**Duration**",
    "6-0": "**Escalated?**",
    "6-1": "Shows whether the incident had to be escalated and how many times"
  },
  "cols": 2,
  "rows": 7
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a91b2d3-reporting-incident-report-details.png",
        "reporting-incident-report-details.png",
        2326,
        972,
        "#eeeff0"
      ]
    }
  ]
}
[/block]
##Data Export
All incident reports are exported in the account's time zone. You can use our API to create an incident report under a specified time zone:
- [Incidents API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1incidents~1%7Bid%7D/get)
- [Using Time Zones with the API](https://v2.developer.pagerduty.com/docs/types#time-zone)

You can also use our API to include the description of each incident in your report. 
## Exporting Advanced Reporting Data to CSV

Users with Advanced Reporting available to their account can download a CSV file with more information to open up a number of powerful reporting options for your PagerDuty account. You can utilize the raw data as is, or use the generated CSV as a starting point to build your own custom reports.
[block:callout]
{
  "type": "info",
  "body": "Advanced Reporting is available on current Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring Advanced Reporting.",
  "title": "Note"
}
[/block]
##CSV Fields
With basic reporting, the exported CSV will include the following columns of information:
- `#`
- Service
- Opened On
- Resolved On
- Resolve By
- Duration
- `#`Escalations

With advanced reporting, the exported CSV will include additional columns of information:
- id
- incident_number (# column in basic report)
- description
- service_id
- service_name (Service column in basic report)
- escalation_policy_id
- escalation_policy_name
- created_on
- seconds_to_first_ack
- seconds_to_resolve (Duration column in basic report)
- auto_resolved
- escalation_count (the number of people the incident was escalated to)
- auto_escalation_count
- acknowledge_count
- assignment_count
- acknowledged_by_user_ids
- acknowledged_by_user_names
- assigned_to_user_ids
- assigned_to_user_names
- resolved_by_user_id
- resolved_by_user_name

##Options to Download the CSV
From the **Analytics** :fa-arrow-right: **Reports** menu:
- Go to **System**, click any **View Incidents** link, and click **Download CSV**.
- Go to **Team**, click **See All Incidents from *[dates]***, and click **Download CSV**.
- Go to **Incidents** report, and click any **Download CSV** link.

The CSV you download will be filtered based on the report selected before hitting the download link: **Service** or **Escalation Policy** for the System report, **Escalation Policy** for the Team Report, and **Date Range** for any report.

The CSV is currently limited to a maximum of 20,000 records. After 20,000 rows, the export will be truncated, so if your CSV contains exactly 20,000 rows, you may have partial data.

##Template for Pivot Table Creation
You can access a template that will provide different ways to use the Advanced Reporting CSV at the link below. The template is view only, but contains instructions to make a copy of the file, fill in data from your CSV, and use the pivot tables to see a full spectrum of what’s happening with your PagerDuty incidents.

You can access this template [here](http://pduty.me/CSVTemplate). Please use the **Instructions** tab first to read the instructions and tips for use.

If you are not seeing all data in the pivot tables when using this template, check your report editor for applied filters. Under any of the *Filter* fields, click **Show: _ Items** and click either **Select All** or the fields you would like to see.