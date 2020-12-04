---
title: "Intelligent Dashboards"
slug: "intelligent-dashboards"
hidden: false
createdAt: "2019-09-20T23:08:03.903Z"
updatedAt: "2020-10-09T22:50:51.069Z"
---
Intelligent Dashboards measure the impact of real-time work on teams and business objectives, promoting continuous improvement in digital operations towards greater success. Digital business leaders can use flexible data visualizations to compare key metrics to industry benchmarks or teams to company averages. After making improvements in training, processes and technology investments, leaders can then monitor the performance of Teams and Services and ensure they are trending in the right direction.

![](https://files.readme.io/1cc4483-intelligent-dashboards-full-screen.png)


[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Intelligent Dashboards is a feature of [PagerDuty Analytics](https://support.pagerduty.com/docs/pagerduty-analytics) which is included on our Digital Operations plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) for information on adding PagerDuty Analytics to your subscription."
}
[/block]
#Product Capabilities 

##Spotlight Recommendations
Spotlight uses the Digital Operations Maturity Model to surface insights and recommended actions throughout the product. Spotlight recommendations offer insight into how organizations can improve their process and use of PagerDuty for measurable business outcomes.  At present, the dashboard generates three types of recommendations to help you strategize around High Escalations, Unactionable Incidents and Repeat Incidents. Spotlight Recommendations can be found at **Analytics** :fa-arrow-right: **Intelligent Dashboards**.

![](https://files.readme.io/1532a1a-intelligent-dashboards-spotlight.png)

###High Escalations

**Definition**: If your account had any teams (sorted by highest escalation count) that had services that were causing more than 40% of the team’s escalations (with a minimum of at least 10 escalations).

**Use Case**: Promote a culture of accountability and ownership during incident response. Ensure that the right teams are on call for the correct services and highlight potential knowledge silos.

**Sample Messages**:

[block:parameters]
{
  "data": {
    "h-1": "Condition(s) Not Met",
    "h-2": "Condition(s) Not Met",
    "0-1": "*\"None of your teams had a service that caused more than 40% of that team’s escalations. Great work!\"*",
    "0-2": "*None of your teams had a service that caused more than 40% of that team’s escalations. Great work!*",
    "0-0": "*\"98% of escalations (184) for team Hammerhead came from the service named Tiger. Make sure you are leveraging low urgency incident types and adjust the escalation policy accordingly.\"*",
    "h-0": "Condition(s) Met"
  },
  "cols": 2,
  "rows": 1
}
[/block]
###Unactionable incidents

**Definition**: If your account had any teams (sorted by highest incident count) that had more than 20% of their incidents deemed unactionable (resolved within 2 minutes). 

**Use Case**: Prevent responder burnout by reducing unnecessary interruptions. Ensure that interruptions are trustworthy and meaningful, allowing teams to focus on the work and incidents that truly matter.

**Sample Messages**: 
[block:parameters]
{
  "data": {
    "0-0": "*\"90% of recent incidents (totaling 564 response hours) on team Hammerhead may not have been actionable. Consider adjusting your monitoring thresholds or the associated escalation policy.\"*",
    "h-0": "Condition(s) Met",
    "h-1": "Condition(s) Not Met",
    "0-1": "*\"None of your teams had more than 20% unactionable incidents.  Great work!\"*"
  },
  "cols": 2,
  "rows": 1
}
[/block]
###Repeat Incidents

**Definition**: If your account had any teams (sorted by highest response hours) that had the same incident descriptions take up more than 30% of the team’s response hours (with a minimum of 3 incidents).

**Use Case**: Help teams focus on improving services and areas that are impacting them the most.

**Sample Messages**:
[block:parameters]
{
  "data": {
    "0-0": "*\"Recently, 37% of response hours (637) for team Hammerhead came from incidents with the description “ElasticSearch failure thr....” Resolving this issue could save 58 interruptions to oncall responders in the next few weeks.\"*",
    "h-0": "Condition(s) Met",
    "h-1": "Condition(s) Not Met",
    "0-1": "*\"None of your teams spent more than 30% of response hours on Repeated Incidents. Great work! \"*"
  },
  "cols": 2,
  "rows": 1
}
[/block]
##Team Performance Dashboard

The Team Performance Dashboard provides key insights and highlights trends that impact performance of your Teams and their Services. Managers using the Team Performance dashboard will be able to select either their industry benchmark or the company average as a reference line to compare their teams to. Data points that make up each metric, such as each individual team, can be drilled down by clicking into each heading. To access the Team Performance Dashboard, navigate to **Analytics** :fa-arrow-right: **Intelligent Dashboards** :fa-arrow-right: **Team Performance** tab.

###Parameters

Filter by:
* **team_scope**: My Teams or All Teams
* **time_range**: Last 7 days, Last 30 days or Last 90 days. **Note**: These time ranges are not currently adjustable.
* **Urgency**: High Urgency, Low Urgency or All Incidents
* **Major**:  Major Only or All Incidents

###Team Performance Metrics
[block:parameters]
{
  "data": {
    "0-0": "***Response Effort in Hours***",
    "1-0": "***Response Effort in Hours by Team***",
    "2-0": "***Incident Volume***",
    "3-0": "***Incident Volume by Team***",
    "4-0": "***Escalations***",
    "5-0": "***Escalations by Team***",
    "6-0": "***Interruption Volume***",
    "7-0": "***Interruption Volume by Team***",
    "0-1": "Total time in hours that all involved responders have spent resolving each incident from their acknowledgement to resolution.",
    "1-1": "Response Effort in Hours (defined above) broken out by team.",
    "2-1": "Total count of incidents.",
    "3-1": "Total count of incidents broken out by team. In cases where responders across multiple teams are involved, the count is not distinct  (e.g., if Roger from Team A and John from Team B are involved in responding to an incident, it will be counted for Team A and for Team B as well).",
    "4-1": "Total count of instances where an incident is escalated between responders assigned to an escalation policy.",
    "5-1": "Total count of escalations (defined above) broken out by team.",
    "6-1": "Total count of phone, SMS or push incident notifications sent to responders. Interruptions are grouped by Business Hours, Off Hours and Sleep Hours:\n\n- **Business Hours**: 8am-6pm Mon-Fri, based on the *user’s time zone*. \n- **Off Hours**: 6pm-10pm Mon-Fri and all day Sat-Sun, based on the *user’s time zone*.\n- **Sleep Hours**: 10pm-8am every day, based on the *user’s time zone*.\n\n*Time Zone Note*: If the user has not set their local time zone in their PagerDuty account, then account’s time zone is used.",
    "7-1": "Interruption volume (defined above) broken out by team.",
    "h-0": "Metric",
    "h-1": "Definition"
  },
  "cols": 2,
  "rows": 8
}
[/block]
###Team Details Metrics
For the Response Effort in Hours by Team, Incident Volume by Team, Escalations by Team and Interruption Volume by Team metrics, one can drill down into data for each team by clicking on the team’s name. Each Team Details page will have Incident Response and Incident Impact metrics.  Any filters applied to the Team Performance dashboard will carry over to the Team Details view as well. 

####Incident Response
[block:parameters]
{
  "data": {
    "0-0": "***MTTA***",
    "1-0": "***MTTR***",
    "2-0": "***Escalations***",
    "3-0": "***Reassignments***",
    "4-0": "***MTTR vs. Incident Volume***",
    "0-1": "Mean Time to Acknowledge",
    "1-1": "Mean Time to Resolve",
    "2-1": "Total count of instances where an incident is escalated between responders assigned to an escalation policy.",
    "3-1": "Total count of instances where an additional responder, who was not on-call for the incident, is added.",
    "4-1": "A bar chart of Incident Count with the Mean Time to Resolve in minutes transposed for comparison.",
    "h-0": "Metric",
    "h-1": "Definition"
  },
  "cols": 2,
  "rows": 5
}
[/block]
####Incident Impact
[block:parameters]
{
  "data": {
    "0-0": "***Interruption Volume***",
    "0-1": "Month-over-month trend report in volume of phone, SMS or push incident notifications sent to responders. Interruptions are grouped by Business Hours, Off Hours and Sleep Hours:\n\n- **Business Hours**: 8am-6pm Mon-Fri, based on the *user’s time zone*. \n- **Off Hours**: 6pm-10pm Mon-Fri and all day Sat-Sun, based on the *user’s time zone*.\n- **Sleep Hours**: 10pm-8am every day, based on the *user’s time zone*.\n\n*Time Zone Note*: If the user has not set their local time zone in their PagerDuty account, then account’s time zone is used.",
    "1-0": "***Response Hours Cost***",
    "1-1": "Month-over-month bar chart with the amount of response hours. Hover over each bar to see the cost of response hours.",
    "2-0": "***Incidents List***",
    "2-1": "A list of all incidents and their details for the time range parameter specified.",
    "h-0": "Metric",
    "h-1": "Definition",
    "3-0": "***MTTE***",
    "3-1": "Mean Time to Engage: A measurement of people response time, similar to MTTA, but used only for 2nd, 3rd, and nth responders.\n\nIt measures the time from the first user engagement (acknowledgement or responder request acceptance) to the last user engagement. This metric is null for incidents with a single engaged user.",
    "4-0": "***MTTM***",
    "4-1": "Mean Time to Mobilize: A measurement of the time from incident creation to the last user engagement (acknowledgement or responder request acceptance). This metric is null for incidents with a single engaged user."
  },
  "cols": 2,
  "rows": 5
}
[/block]
## Service Health Dashboard
The Service Health dashboard allows for the discovery of services that drive incidents and cause increased team response effort. Detailed performance views for each service are provided to show impact of interruptions, how teams respond to incidents, and performance details by incidents and team metrics. This feature allows service owners to make key decisions on where to allocate resources, make investments and drive continual service health improvement. To access the Service Health Dashboard, navigate to **Analytics** :fa-arrow-right: **Intelligent Dashboards** :fa-arrow-right: **Service Health** tab.

###Parameters
Filter by:
* **Team**: My Teams or All Teams
* **Major**:  Major Only or All Incidents
* **time_range**: Last 7 days, Last 30 days or Last 90 days. **Note**: These time ranges are not currently adjustable.
* **Urgency**: High Urgency, Low Urgency or All Incidents

###Service Health Metrics

[block:parameters]
{
  "data": {
    "0-0": "***Response Effort in Hours***",
    "0-1": "Total time in hours that all involved responders have spent resolving each incident from their acknowledgement to resolution.",
    "1-0": "***Response Effort in Hours by Service***",
    "1-1": "Response Effort in Hours (defined above) broken out by service.",
    "2-0": "***Incident Volume***",
    "2-1": "Total count of incidents.",
    "3-0": "***Incident Volume by Service***",
    "3-1": "Total count of incidents broken out by service.",
    "4-0": "***Escalations***",
    "4-1": "Total count of instances where an incident is escalated between responders assigned to an escalation policy.",
    "5-0": "***Escalations by Service***",
    "5-1": "Total count of escalations (defined above) broken out by service.",
    "6-0": "***Interruption Volume***",
    "6-1": "Total count of phone, SMS or push incident notifications sent to responders. Interruptions are grouped by Business Hours, Off Hours and Sleep Hours:\n\n- **Business Hours**: 8am-6pm Mon-Fri, based on the *user’s time zone*. \n- **Off Hours**: 6pm-10pm Mon-Fri and all day Sat-Sun, based on the *user’s time zone*.\n- **Sleep Hours**: 10pm-8am every day, based on the *user’s time zone*.\n\n*Time Zone Note*: If the user has not set their local time zone in their PagerDuty account, then account’s time zone is used.",
    "7-0": "***Interruption Volume by Service***",
    "7-1": "Interruption volume (defined above) broken out by service.",
    "h-0": "Metric",
    "h-1": "Definition"
  },
  "cols": 2,
  "rows": 8
}
[/block]
###Service Details Metrics
For the Response Effort in Hours by Service, Incident Volume by Service, Escalations by Service and Interruption Volume by Service metrics, one can drill down into data for each service by clicking on the service’s name. Each Service Details page will have Incident Response and Incident Impact metrics. Any filters applied to the Service Health dashboard will carry over to the Service Details view as well. 

####Incident Response

See [definitions above](https://support.pagerduty.com/docs/intelligent-dashboards#section--incident-response-). 

####Incident Impact

See [definitions above](https://support.pagerduty.com/docs/intelligent-dashboards#section--incident-impact-).

#### Incidents List
A list of all incidents and their details for the time range parameter specified.
 
#### Teams List
List of this service’s incidents specific to each team that included a responder. Service owners can see if their services have impacted other teams in the last week or month. If the number of the incidents impacting an external team increases over time, this may indicate a service ownership issue.

## Edit or Download Data

At the upper right of each data module you will see the :fa-bars: **More Actions** menu. Here you may **Download Image** on graphs, and on lists you may **Edit Pivot**, **Search** and **Download Data**. 

#FAQ
##How far back can I look at my data?
At moment 90 days, but longer time frames and custom date ranges are on the road map.