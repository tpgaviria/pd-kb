---
title: "Operational Reviews"
slug: "operational-reviews"
hidden: false
createdAt: "2018-09-09T22:02:41.976Z"
updatedAt: "2020-10-09T22:47:42.793Z"
---
The Operational Reviews feature offers metrics for three different types of reviews, targeted at different levels of leadership in a digital business. Each review type contains scorecards intended to help facilitate weekly, monthly and quarterly operational review meetings: 

- [Team On-Call Handoff Reviews](/docs/operational-reviews#section-team-on-call-handoff-reviews)
- [Service Performance Reviews](/docs/operational-reviews#section-service-performance-reviews)
- [Business Performance Reviews](/docs/operational-reviews#section-business-performance-reviews)

These scorecards are intended to review past performance, and are not meant to serve ad-hoc or real-time analytics needs. Operational Reviews is found at **Analytics** :fa-arrow-right: **Operational Reviews** in the web app. For in-depth information on the background of why we created the Operational Reviews feature, please read our [Reviews Guide](https://reviews.pagerduty.com/).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4d7bbea-operational-reviews-overview.png",
        "operational-reviews-overview.png",
        1948,
        1024,
        "#eff2f4"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Operational Reviews is a feature of [PagerDuty Analytics](https://support.pagerduty.com/docs/pagerduty-analytics) which is included on our Digital Operations plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) for information on adding PagerDuty Analytics to your subscription."
}
[/block]
#Foundational Concepts

Each scorecard incorporates interruptions and major incidents.

##Interruptions

Interruptions are when an on-call responder receives a SMS (text), mobile push or phone call notification and when an incident is sending out (within our metrics) a unique count of notifications. The same type of notification sent from various channels (SMS, phone call, push) to the same destination are counted as one interruption. Email notifications are excluded, as email is not considered an interrupting channel.

* **Business Hours Interruptions (Color Signifier: Yellow)**: The count of interrupting notifications sent between 8am and 6pm Monday to Friday, in the user's local time. 
* **Off Hours Interruptions (Color Signifier: Orange)**: The count of interrupting notifications sent between 6pm and 10pm Monday to Friday or during 8am to 10pm over the weekend, in the user's local time. 
* **Sleep Hours Interruptions (Color Signifier: Red)**: The count of interrupting notifications sent between 10pm and 8am, in the user's local time.

##Major Incidents

A major incident is defined as any incident that requires a [coordinated response](https://support.pagerduty.com/docs/mobilize-a-coordinated-response), often across multiple teams. They are typically highly noticeable by customers, so fixing the problem is of the greatest importance. Major incidents are often referred to as [P1, P2](https://support.pagerduty.com/docs/incident-priority), or SEV-1, SEV-2 in most organizations. In PagerDuty Analytics, they are defined as the top two levels of your priority settings, or if [multiple responders are added](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders) and acknowledge. In the Business Performance Review scorecard, these designations are listed on the upper left hand side in pills that can say <span style="border: 1px solid #484848 !important; border-radius: 5px; padding: 4px 12px;">P1</span>, <span style="border: 1px solid #484848 !important; border-radius: 5px; padding: 4px 12px">P2</span>, <span style="border: 1px solid #484848 !important; border-radius: 5px; padding: 4px 12px;">SEV-1</span>, <span style="border: 1px solid #484848 !important; border-radius: 5px; padding: 4px 12px;">SEV-2</span> or <span style="border: 1px solid #484848 !important; border-radius: 5px; padding: 4px 12px;">MRI</span> for Multiple Responders Involved.

#Scorecard Configuration

Operational Reviews can be found under **Analytics** :fa-arrow-right: **Operational Reviews**. **When the Operational Reviews feature is first enabled, scorecards will automatically generate based on your account’s team data, and you do not need to manually create them**. If the Operational Reviews feature was just enabled, you may not see scorecards until your account’s performance data has been analyzed, which can take approximately one hour. If you do not see any scorecards, ensure that you are a member of at least one [team](https://support.pagerduty.com/docs/teams) so they can be created. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Operational Reviews data will only create scorecards for teams that were present in the account upon enablement. At this time, any new teams created after this point will not generate scorecards."
}
[/block]
Out of the box, each user will have a unique, default scorecard view based on their team membership and they can subscribe or unsubscribe to ones they have been assigned to. If you would like to view scorecards for a team that you are not on, you will need to join that team or create a custom scorecard that covers the team(s) with your desired data. 

Default scorecards are generated on a set schedule:

* Team On-Call Handoff Review scorecards are generated every Monday morning.
* Service Performance Review scorecards are generated the first of every month.
* Business Performance Review scorecards are generated the first of every calendar quarter.
* Custom scorecards, those that you create for yourself, are generated on the cadence set when they were created.

##Show All Scorecards

To view scorecards that you are not currently subscribed to, check the **Show me all the scorecards (including Unsubscribed)** checkbox. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9608353-operational-reviews-show-all.png",
        "operational-reviews-show-all.png",
        1206,
        430,
        "#ebebeb"
      ]
    }
  ]
}
[/block]
##Subscribe or Unsubscribe From a Scorecard

1. Navigate to **Analytics** :fa-arrow-right: **Operational Reviews** :fa-arrow-right: and select the **name** of the desired review type. 
2. **If you would like to subscribe to a scorecard**: check the **Show me all the scorecards (including Unsubscribed)** checkbox. Search for the desired scorecard and click **Subscribe** on the right side. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0896343-operational-reviews-subscribe.png",
        "operational-reviews-subscribe.png",
        2146,
        520,
        "#f2f1f2"
      ]
    }
  ]
}
[/block]
**If you would like to unsubscribe from a scorecard**: search for it and click **Unsubscribe** on the right side. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/65e856f-operational-reviews-unsubscribe.png",
        "operational-reviews-unsubscribe.png",
        2098,
        338,
        "#f3f3f5"
      ]
    }
  ]
}
[/block]
##Create a Custom Scorecard

If you would like to generate reviews of multiple, often less-related teams, you can create a custom scorecard. Custom scorecards will first generate at the end of the time period you set when you created the scorecard. For example, if you created a scorecard on Tuesday that goes from Monday 8:00am through Monday 7:59am, you will have to wait until the next Monday to see a scorecard.

1. Navigate to **Analytics** :fa-arrow-right: **Operational Reviews** :fa-arrow-right: select the **name** of the desired review type and click the green **New Review** button. 
3. On the next screen, enter:
    *  **Review Name**: A meaningful name that reflects the intended purpose of your review meeting (e.g., if you need to have a review that incorporates data from multiple teams, “Customer Support, Data, Web Triage - Team On Call HandOff Review”). 
    * **Select Teams**: Search and select the teams you would like to be reviewed. 
    * **Select Review Frequency** *(Team On-Call Handoff Reviews only)*: Select the amount of weeks between reviews, and the date and time when you would like the review to be generated. 
4. Click **Save** to create your custom scorecard. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/637e51b-operational-reviews-create-review.png",
        "operational-reviews-create-review.png",
        1202,
        566,
        "#eff0ef"
      ]
    }
  ]
}
[/block]
##Editing Scorecards

Default Team On-Call Handoff Review scorecards allow you to edit the number of weeks, days of the week, and hour of day that they are generated. Default Service Performance Review and Business Performance Review scorecards are not currently editable. Custom scorecards of any type allow you to edit any aspect of the scorecard that was customizable when created.

To edit a scorecard:

1. Navigate to **Analytics** :fa-arrow-right: **Operational Reviews** :fa-arrow-right: and select the **name** of the desired review type.
2. Search your desired scorecard and click **Edit** on the right side.
3. Edit the details available to you (please read summary of options above) and click **Save**.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "You cannot currently delete a scorecard, however clicking **Unsubscribe** will hide any unwanted scorecards from your list."
}
[/block]
##Scorecard Search

Each list of Team On-Call Handoff, Service Performance and Business Performance review scorecards has a search capability. For users who have many scorecards in their list, the search allows them to find specific scorecards quickly. To access the scorecard search, navigate to **Analytics** :fa-arrow-right: **Operational Reviews** :fa-arrow-right: select the **name** of the desired review type and search for the desired team(s) and/or scorecard name(s).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a84ed5d-operational-reviews-search.png",
        "operational-reviews-search.png",
        2564,
        824,
        "#f4f4f5"
      ]
    }
  ]
}
[/block]
#Scorecard Types

##Team On-Call Handoff Reviews

Team On-Call Handoff Reviews can help on-call teams capture and improve on alert fatigue and responder well-being. The metrics focus on interruptions to responders during business hours, off hours and sleep hours, MTTA/MTTR, escalations, and the most frequent incidents. Team On-Call Handoff Reviews are generated every Monday by default. 

###Metrics

**Team Metrics**:

* **Major Incidents**: Count of incidents on the team’s technical services with Priority (P1, P2) or Severity (Sev-1, Sev-2), and/or requiring the attention of more than one responder. 
* **High Urgency Incidents**: Count of high urgency incidents within the time period designated for the review. 
* **High Urgency Incident MTTR**: Average mean time to resolution for high urgency incidents. 
* **Off Hours Interruptions**: The count of interrupting notifications sent between 6pm and 10pm Monday to Friday or during 8am to 10pm over the weekend, in the user's local time.
* **Escalations**: Total count of escalations which occurred in the team/teams' weekly report, including both manual and time-out escalations.
* **High Urgency Incident MTTA**: The mean time to acknowledge high urgency incidents.
* **Sleep Hours Interruptions**: The count of interrupting notifications sent between 10pm and 8am, in the user's local time.
* **Loudest Service**: The service that sends out the highest number of unique interrupting notifications.
* **Loudest Incident**: A singular incident with the highest number of interrupting notifications sent out until it has been resolved.
* **Interruptions By Service**: A breakdown of interruptions per service, displayed in a pie chart.

**Individual Metrics**:

* **Company Averages This Period**: The company average shows the average interruption summary among incident responders for a specified time period. We take all individuals who were interrupted at least once, use their timezones to determine when interruptions took place, and divide the totals by the total number of interrupted individuals for the time period. We then use this data and surface comparisons on the team individual level to highlight whether any individual member experienced below or above average operational load relative to the rest of their peers.

* **Average Hours Interrupted**: The number of hours in a day where a user receives one or more interrupting notifications. The maximum is 24 per day.

* **Average Total Interruptions**: The average total interruptions per user in the time range designated for the report.

* **# Responders Interrupted This Period**: Number of responders interrupted in the period designated by the scorecard. Each user listed will also have an **Individual Vibe**:
    * **Sad face**: Given that a user has one or more sleep-hours interruptions, two or more off-hours interruption or more than five total interruptions in the past week, the user gets a Sad face.
    * **Meh face**: Given that a user has one off-hours interruption, and five or less business-hours interruptions, the user gets a Meh face.
    * **Happy face**: Given that a user has no off-hours, no sleep-hour interruptions and less than five business-hours interruptions, the user gets a Happy face. 

##Service Performance Reviews

Service Performance reviews are designed to guide smart investments into service performance. The metrics focus on aggregate measurements such as time without major incidents, MTTR for major and high urgency incidents, and details the breakdown of the incidents and services that may be worth the most attention and investment. Service Performance Reviews are generated on the 1st of every month by default.

###Metrics

* **Time W/O Major Incident**: Per the definition of [major incident](https://support.pagerduty.com/docs/operational-reviews#section-major-incidents), the calculated net duration of major incidents in a month (removing any overlapping time) and the calculated percentage of time without major incidents.
* **Time W/O High Urg. Incident**: The calculated net duration of high-urgency incidents in a month (removing any overlapping time) and the calculated percentage of time without high-urgency incidents.
* **Major Incident MTTR**: Average mean time to resolve for incidents on the service with Priority (P1, P2) or Severity (Sev-1, Sev-2), and/or requiring the attention of more than one responder. 
* **High Urgency Incident MTTR**: Average mean time to resolve for high urgency incidents on the service.
* **Major Incidents Count**: Count of major incidents. 
* **High Urgency Count**: Count of high urgency incidents. 
* **Longest Major Incident TTR**: The longest time to resolve on a major incident. 
* **Longest Urgent Incident TTR**: The longest time to resolve on a high urgency incident. 
* **Longest Incident Duration (High Urg.)**: The longest total duration from trigger to resolution on a high urgency incident. 
* **Loudest Services**: The technical services that had the highest number of interrupting notifications.
* **Most Frequent Incidents**: Reoccurring and interrupting incidents of identical description.
* **Business Service At Risk**: There are two ways of calculating the business service at risk:
    * One is to identify the business service with the longest single major incident. This is calculated by adding up the overlapping total major incident durations on the technical services that support a business service (i.e. flattening the time).
    * The second is to identify the business service with the highest major incident volume. This is calculated by adding up the major incident count on the technical services that support a business service.
* **Worst Performing Technical Services**: Services with the largest number of incidents. Incident count includes both High and Low-Urgency. Business Service affiliations and Team associations that the technical service may have will also appear here.


##Business Performance Reviews

Business Performance Reviews help business and technology leaders gain insight into how service operations affect business outcomes. The metrics focus on the company cost of operating services (hours lost responding, cost of responder time), the impact on customers (aggregate major incidents duration), and a summary of high-impact incidents from the quarter. Business Outcome Reviews are generated every calendar quarter (April 1st, July 1st, Oct 1st, and Jan 1st) by default.

###Metrics

* **Time W/O Major Incident**: Per the definition of [Major Incident](https://support.pagerduty.com/docs/how-to-triaging-major-incidents-integrating-your-itsm-toolchain#section-configure-your-incident-classification-levels-in-pagerduty), the calculated net duration of major incidents in a month (removing any overlapping time) and the calculated percentage of time without major incidents.
* **Est. Response Cost**: The estimated cost, in US dollars, that your company spent on employee incident response. This is a fixed cost calculation of $50 per hour.
* **Responder Cost in Hours**: The actual cost, in people/labor hours, that your company spent on employee response to major incidents (i.e. each engaged responder's time from ack to resolution). This is also known as your responder burn rate.
* **[Major Incidents](https://support.pagerduty.com/docs/https://support.pagerduty.com/docs/incident-priority#section-enabling-incident-priority)**: Count of incidents on the team’s technical services with Priority (P1, P2) or Severity (Sev-1, Sev-2), and/or requiring the attention of more than one responder. 
* **Major Incident MTTR**: The mean time to resolution for major incidents.
* **Most Time in Response**: The top three teams that were affected by major incidents along with the number of major incidents, cost in hours, and the percentage of time spent on unplanned effort that the incidents had caused.
* **Business Services At Risk**: There are two ways of calculating the business service at risk:
    * One is to identify the business service with the longest single major incident. This is calculated by adding up the overlapping total major incident durations on the technical services that support a business service (i.e. flattening the time).
    * The second is to identify the business service with the highest major incident volume. This is calculated by adding up the major incident count on the technical services that support a business service.
* **Technical Services Hit List**: A list of three services, in order of worst affected, that need the most attention based on frequency of major incidents. We determine the three worst services by the **Time w/o Major Incident** metric, with the lowest times shown. 
* **Major Incident Details**: View the Est. Response Cost, Duration, Technical Service and Business Services Affected for each major incident. 

#FAQ

##I just had the Operational Reviews feature enabled, why don’t I see any scorecards yet?

After enablement, it can take approximately one hour to analyze your account’s data. Please ensure you are assigned to at least one [Team](https://support.pagerduty.com/docs/teams) so that team scorecards can be generated. 

##Why don't I see all my teams on my Team On-Call Handoff Reviews?

After the feature is enabled, all existing teams will have a review generated. However, teams created after this will not have reviews added automatically. To generate reviews for new teams, you can click the [Create Review button](https://support.pagerduty.com/docs/operational-reviews#section-create-a-custom-scorecard).

##How are my default scorecards determined, and how do I change what scorecards I can see?

Out of the box, your scorecards will be generated based on the teams you are on. If you would like to view scorecards for a team that you are not on, you will need to join that team or create a custom scorecard that covers the team(s) with your desired data. 

##How do Operational Review Scorecards deal with different timezones?

Timezones are utilized in three ways: 

* To determine business, off, and sleep hours
* To display the time of an incident
* And to determine the date and time range that a scorecard covers.

When determining if an interruption happened during business, off, or sleep hours, PagerDuty uses the timezone set on the user profile. If a user has not set their timezone, the user profile will inherit the account timezone.

When displaying the details of a specific incident in one of the scorecards, PagerDuty will display time based on the user’s timezone. If a user has not set their timezone, the user profile will inherit the account timezone.

When creating a scorecard, users will need to select the time range based on the account timezone, which will be displayed. Default scorecards are generated on weekly, monthly, and quarterly cadences will be based on the account timezone.