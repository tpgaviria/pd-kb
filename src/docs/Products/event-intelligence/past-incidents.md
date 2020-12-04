---
title: "Past Incidents"
slug: "past-incidents"
excerpt: "View previous incidents to gain helpful context during incident triage"
hidden: false
metadata: 
  title: "Past Incidents"
  description: "View previous incidents to gain helpful context during incident triage"
createdAt: "2017-08-07T20:58:15.213Z"
updatedAt: "2020-07-08T15:57:22.204Z"
---
The Past Incidents feature allows incident responders to view past resolved incidents that have similar metadata and were generated on the same service as their current active incident. Past Incidents adds helpful context for accurate triage, which can lead to shorter resolution time. Responders can see whether they or someone on their team had been involved in a previous incident, when these types of incidents have happened, and dive into incident details to discover what remediation steps were taken in the past.

<Callout type="info" title="Info">
Similar Incidents has been renamed as Past Incidents in order to [differentiate it from our new Related Incidents](https://support.pagerduty.com/docs/related-incidents#section-related-incidents-vs-past-incidents-whats-the-difference) feature.",
  "title": "Similar Incidents (Legacy Name) and Related Incidents
</Callout>




<Callout type="info" title="Info">
This feature is currently available as part of the [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) package and Digital Operations plan. If you would like to sign up for a trial of this feature and other Event Intelligence features, contact Sales at [sales@pagerdutycom](https://www.pagerduty.com/contact-us/#contact-sales).",
  "title": "Note
</Callout>


# View Past Incidents

To view Past Incidents, click your desired incident’s **Title** to see the incident details page, and then select the **Past Incidents** tab. The Past Incidents tab uses [Event Intelligence](https://support.pagerduty.com/docs/event-intelligence) to display a historical list of resolved incidents that are similar to and from the same service of the incident you are currently investigating. Past incidents are determined by four main factors: 

* The semantics of the incident title.
* How responders have responded to past incidents.
* The duration of the past incident.
* The date and time of the past incident’s creation. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bfacd55-past-incidents-overview.png",
        "past-incidents-overview.png",
        1884,
        1228,
        "#f9fafb"
      ]
    }
  ]
}
[/block]
The Past Incidents heatmap provides a high-level overview of incidents similar to the one you are viewing, that have been observed for the past six months on that service. Darker squares on the heatmap represent days when a higher concentration of past incidents while lighter squares will have a lower concentration. The legend for the number of past incidents will dynamically change relative to the range of past incidents observed in a single day. 

To drill down to a specific day, you can hover over a square to view the titles of the past incidents from that day. If you click on a square, the top five past incidents from that day will populate below in the Past Incidents list. You can then easily access those incidents for additional context by clicking on the linked incident title.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/da5300a-past-incidents-drill-down.png",
        "past-incidents-drill-down.png",
        1874,
        824,
        "#f8f5f5"
      ]
    }
  ]
}
[/block]
The Past Incidents list displays the past incidents with specific metadata fields and links. For each past incident, you can see the incident title, the duration of the incident, the date the incident was created, and the person who last changed this incident. 

**Title:** The incident title in its current state. If the incident title was manually edited, the final title will be displayed here. 

**Duration:** Duration of the incident.

**Created:** Date and time the incident was created.

**Last Changed By:** PagerDuty user who last made a change to this incident. If this incident was not edited by any PagerDuty user, this field will be blank, “--”. This can happen, for example, if the incident was triggered and then resolved by the underlying monitoring tools.
[block:callout]
{
  "type": "info",
  "title": "Important Notes",
  "body": "* Past Incidents will only return incidents from the same service as the incident you are viewing.\n\n* Past Incidents are only visible from the PagerDuty web application in the current state.\n \n* If you would like to hide Past Incidents, please [contact PagerDuty Support](https://www.pagerduty.com/contact-us/).
</Callout>


# FAQ

## Can I tell the system that this incident is not similar to my current incident if it appears in the list of Past Incidents?

Currently there are no configuration options for Past Incidents. We welcome your comments and feedback for what you would like to configure about Past Incidents. The PagerDuty Data Experience team is iterating on the designs and underlying algorithm.

## How is this different from alert grouping?

While alert grouping combines alerts that are currently part of the same incident, Past Incidents looks at similar incidents from any point in time to help users get the context needed to resolve an incident. 

## Do suppressed alerts show up in Past Incidents?

No. The goal of Past Incidents is to show relevant, similar incidents from your incident management history. If you’ve decided to suppress alerts on a service, those alerts will not be part of your service’s history.  We take that as an indication that those alerts are not relevant to your current incident and therefore will not be displayed under Past Incidents.

## Can I see Past Incidents when I write up my postmortems?

At the moment, no, but it’s a request we’ve heard! While Past Incidents are not currently an explicit part of the [postmortem builder](https://support.pagerduty.com/docs/postmortems), you can always use information from Past Incidents to help add context to the postmortem.