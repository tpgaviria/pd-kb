---
title: "Incident Priority"
slug: "incident-priority"
excerpt: "Establish an incident classification scheme and add priority to incidents for effective triage"
hidden: false
createdAt: "2017-06-01T21:58:59.927Z"
updatedAt: "2020-10-09T21:18:04.251Z"
---
Incident priority allows the classification of incidents based on a level of prioritization. Just as alerts can have different levels of severity and notifications can have different levels of urgency, incidents can be classified into different levels of priority. Priority labels can be customized on a per-account basis so you can match to your existing priority scheme that may be in use in other tools.

- [Enabling Incident Priority](#section-enabling-incident-priority)
- [Prioritizing an Incident](#section-prioritizing-an-incident-during-triage)

#Establish an Incident Classification Scheme

Ideally shared organization-wide, your incident classification scheme establishes common language and criteria for communicating about levels of incidents and elements of response. It’s helpful to keep in mind that this scheme is not just for technical responders and support staff — other parts of your organization may need to be aware of incidents and their assessed impact and occasionally need to participate in incident response, as well.

There are several parts to establishing an incident classification scheme:
  * **List the incident classification levels**: This is frequently P1 through P5 (for priority), or SEV-1 through SEV-5 (for severity). Typically, the lower the number, the higher its indicated impact.
  * **Define what each level means**: Describe the incident impact and characteristics that apply for each classification level. These guidelines must be clear and objective enough that responders can accurately assess an open incident and assign exactly one level to it. However, the incident may be “upgraded” or “downgraded” as the situation evolves.
  * **Define the expected response**: For each classification level, the expected scope and response urgency must be identified. Some organizations have a formal or informal service level agreement per level, as well.

For an example and additional details on the above, see the PagerDuty [Incident Response Guide](https://response.pagerduty.com/before/severity_levels/).

Many organizations already have an incident classification scheme in place. If you don’t, putting a small number of classification levels in place is essential for an effective triage and major incident response process.  If, on the other hand, you have more than 5 or 6 classification levels, think critically about how many levels would benefit your organization in practice. The more levels you have, the more complex and time-consuming triage becomes.

#Enabling Incident Priority

When you have identified the incident classification levels you will be using, the next step is to configure PagerDuty to support those levels. Once enabled, the UI of your incident dashboard will change to include the Priority column account-wide.

To enable this feature:

1. Navigate to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Incident Priorities tab**. 
2. Click **Enable Incident Priority Levels**.
3. You can classify incidents with up to 5 different priority levels. Customize your levels with the following:
* **Priority Level**: This is frequently P1 through P5 (for priority), or SEV-1 through SEV-5 (for severity). Typically, the lower the number, the higher its indicated impact.
* **Color**: Color labels are used to draw attention to the most important incidents in a dashboard or other view. It’s best to use distinctive colors for the levels corresponding to major incidents for immediate recognition and visibility. For example, at PagerDuty we use red and orange for our two highest levels, and then blue and grey variations for lesser incident levels.
* **Description**: Describe the incident impact and characteristics that apply for each classification level. These guidelines must be clear and objective enough that responders can accurately assess an open incident and assign exactly one level to it. 
4. Click **Save** when finished.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/de90163-incident-priority-settings.png",
        "incident-priority-settings.png",
        2544,
        1098,
        "#f0f0ef"
      ]
    }
  ]
}
[/block]
When you return to the **Incidents** page, you will see that the dashboard now contains a column for Priority. The priority is also displayed in an incident's details in both the web UI and mobile app. By default, past incidents will not have a priority, but you can append a priority to a past incident from the incident details page.

#Prioritizing an Incident During Triage

Prioritizing incidents helps drive decisions around the response process and also provides valuable context for other people. When looking at an incident, the priority gives an immediate and clear indication of prior assessment that has been performed. Incident priority can be set at the time of creation, or after the incident has been triggered. The following is an incident with a priority level set:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ec1e41e-incident-priority-incident_view.png",
        "incident-priority-incident view.png",
        2056,
        410,
        "#faf8f8"
      ]
    }
  ]
}
[/block]
In addition, priority is clearly displayed on the incident dashboard, making it easy to see when critical issues are active. You can sort incidents by priority on this page, so that whether looking at incidents for a single team or across your whole organization, you can instantly see critical issues:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7f4e6f9-incident-priority-filter.png",
        "incident-priority-filter.png",
        1430,
        490,
        "#f8f7f8"
      ]
    }
  ]
}
[/block]
##Add Priority In the Web App

To set priority at incident creation:

1. Navigate to the **Incidents** page and click **New Incident**.
2. Select the priority level that you would like from the dropdown:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9714cfe-incident-priority-new-incident.png",
        "incident-priority-new-incident.png",
        1074,
        832,
        "#f6f5f5"
      ]
    }
  ]
}
[/block]
3. After completing your other incident details, click **Create Incident**.


To edit an incident's priority after it has been triggered:

1. Find the incident that you would like to prioritize. Click the name of the incident to open its details.
2. Click the **Priority** dropdown and select the priority level. This will automatically update the incident’s priority for all users across the account.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/330a6cd-incident-priority-active-incident.png",
        "incident-priority-active-incident.png",
        767,
        295,
        "#f8f5f4"
      ]
    }
  ]
}
[/block]
##Add Priority In the Mobile App

1. Navigate to the **Open Incidents** screen, tap the overflow menu (top-right corner of screen) and tap **New Incident...** .
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e2fbf3e-incident-priority-mobile-new-incident.png",
        "incident-priority-mobile-new-incident.png",
        1080,
        1920,
        "#090909"
      ]
    }
  ]
}
[/block]
2. Tap **Priority** and select the priority level from the defined list.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/da7c527-incident-priority-mobile-add-priority.png",
        "incident-priority-mobile-add-priority.png",
        1080,
        1920,
        "#131110"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/796866e-incident-priority-mobile-select-priority.png",
        "incident-priority-mobile-select-priority.png",
        1080,
        1920,
        "#040404"
      ]
    }
  ]
}
[/block]
3. After completing your other incident details, click **Create**. The incident will now have a label denoting its classification:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c33820f-incident-priority-mobile-priority-marker.png",
        "incident-priority-mobile-priority-marker.png",
        1080,
        1920,
        "#0a0909"
      ]
    }
  ]
}
[/block]
To edit an incident's priority after it has been triggered:

1. Find the incident that you would like to prioritize. Tap the incident name to open the details.
2. Tap the overflow menu and tap **Add Priority**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4a7db6d-incident-priority-mobile-add-priority-active-incident.png",
        "incident-priority-mobile-add-priority-active-incident.png",
        1080,
        1920,
        "#0a0808"
      ]
    }
  ]
}
[/block]
3. Select the priority level from the screen. 
4. Tap **Confirm** in the confirmation dialog box to change the priority.

##Add Priority Using the REST API

In addition to the features available within the PagerDuty web app, incident priority can also be used in automated systems. The incident REST API can be used to specify the priority for an incident when it is created, and all relevant priority details are included with incident objects returned from the API. You can learn more about how to [retrieve the configured incident priority scheme](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Priorities/get_priorities) and [create incidents with priority](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents/post_incidents) in our developer documentation.

Additionally, incident webhooks include full information about that incident’s priority; details are available [here](https://v2.developer.pagerduty.com/docs/webhooks-v2-overview).
[block:callout]
{
  "type": "info",
  "body": "Priority cannot be set from the Events API at this time.",
  "title": "Note"
}
[/block]
##Add Priority Using Event Rules

You can also configure event rules to automatically add priority to an incident when it is created. Please read [Setting Priority with Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-setting-priority-with-event-rules) for instructions and more information.