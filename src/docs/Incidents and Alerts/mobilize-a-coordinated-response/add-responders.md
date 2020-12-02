---
title: "Add Responders"
slug: "add-responders"
excerpt: "Add responders to ongoing incidents to receive additional assistance"
hidden: false
createdAt: "2018-06-06T19:54:39.215Z"
updatedAt: "2020-11-19T22:48:38.425Z"
---
Adding responders allows you to receive assistance from additional users with an incident response. Typical reasons for adding responders include SEV-1/P1 responses, critical incident responses, and mobilizing teams. 
[block:callout]
{
  "type": "info",
  "body": "This feature is available on Business and Digital Operations plans. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring Add Responders.",
  "title": "Note"
}
[/block]
#Add Responders to an Incident

You can request **individual users** or [**escalation policies**](https://support.pagerduty.com/docs/add-responders#section-escalation-policy-responder-notifications) as responders, with a limit of 300 Responders per incident. The requested users will receive notifications to **accept** or **decline** the request to respond to the incident. 

There are two ways to add responders to incidents:

* [Manually add responders to an ongoing incident](https://support.pagerduty.com/docs/add-responders#section-manually-add-responders-to-an-ongoing-incident)
* [Automatically add responders with response plays](https://support.pagerduty.com/docs/add-responders#section-automatically-add-responders-with-response-plays)

##Manually Add Responders to an Ongoing Incident

A user who can take action on the **open** incident can request responders within the web app and mobile app.

###In the Web App

**On an ongoing, *open* incident**:  
1. In the incident details section of an **open** incident, click the **Add Responders** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0816d3f-Add_Responders.png",
        "Add Responders.png",
        2852,
        514,
        "#f7f7f5"
      ]
    }
  ]
}
[/block]
2. Search and select the **name** of the responder or escalation policy in the **Start typing to search across Escalation Policies and Users** field. You may *optionally* add a message or a conference bridge. Finally, click **Add Responder**.

**When *manually* triggering an incident**: 
1. Click the **+ New Incident** button at the top right within the **Incidents** page or within a **Service** page.
2. In the **Additional Responders to Notify** section, search and select the **name** of the responder or escalation policy. When you have entered all necessary information for the incident, click **Create Incident**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d08e943-add-responders-add-ep-new-incident.png",
        "add-responders-add-ep-new-incident.png",
        1072,
        1254,
        "#f8f8f7"
      ]
    }
  ]
}
[/block]
###In the Mobile App

**iOS**:
1. Tap the **+** button next to Responders, *or* tap the **More** button and select **Add Responders**. 
2. Next, select the **name** of the responder you would like to add, add an *optional* message, and tap **Notify**.

**Android**:
1. Tap the :fa-ellipsis-v: in the upper right and select **Add Responder**.
2. Next, select the **name** of the responder you would like to add, add an *optional* message, and tap **Notify**.

**Note:** You can add a conference bridge address in the initial request sent to responders.

##Automatically Add Responders With Response Plays

Using Add Responders manually is a flexible way to choose the exact responders needed for a given situation. However, determining which users and escalation policies to include (often by referencing written documentation to see who fits the current incident at hand), and then selecting them one by one, chews up valuable response time and is also error-prone. 

Instead, if you are frequently mobilizing the same set of responders, you can use [response plays](https://support.pagerduty.com/docs/response-automation) to automate and accelerate the mobilization process. A response play lets you configure the users and/or escalation policies to request as additional responders in advance. Then, during an incident, a responder can run the appropriate play by choosing it from their list of available plays.

Response plays can satisfy the following use cases:

* [Add Responders Automatically During an Ongoing Incident](https://support.pagerduty.com/docs/add-responders#section-add-responders-automatically-during-an-ongoing-incident)
* [Add Responders Automatically at Incident Creation](https://support.pagerduty.com/docs/add-responders#section-add-responders-automatically-at-incident-creation)
[block:callout]
{
  "type": "info",
  "body": "Response Plays are available on our Digital Operations plan and as part of our [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) package. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature."
}
[/block]
###Add Responders Automatically During an Ongoing Incident

From the PagerDuty mobile app, a play can be run on the incident like this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b89233-add-responders-mobile-run-play.png",
        "add-responders-mobile-run-play.png",
        1256,
        740,
        "#191f26"
      ]
    }
  ]
}
[/block]
Running a play from the PagerDuty web app is similarly straightforward:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c7b8f33-add-responders-run-add-responders-play.png",
        "add-responders-run-add-responders-play.png",
        1572,
        370,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]
Immediately as the play is run, all of the additional responders identified in the play are notified, and your response team can quickly mobilize.

###Add Responders Automatically at Incident Creation

Some scenarios require a coordinated response immediately, and ideally, mobilizing a response team happens without requiring human intervention. A few situations like this include:

* When an incident is created from business metric monitoring. e.g. revenue per hour falls below a minimum required value.
* When an incident is created from user-observable failures. e.g. website is determined to be unreachable by customers.
* When a critical incident is created based on triage that has occurred upstream of PagerDuty. e.g. an ITSM tool is in use, and only P1 incidents are synchronized with PagerDuty.

In all of these cases it is beneficial to have the response team [mobilize immediately upon incident creation](https://support.pagerduty.com/docs/response-automation#section-automatically-running-a-response-play-at-incident-creation).

#Responder Notifications

Users will receive notifications that ask them to **accept** or **decline** to join an incident. 

Responder notifications are sent to one contact method per type (phone, SMS, email, push notification). We use the **first contact method of each contact method type** used to notify as incident notifications based on the [**high urgency notification rule**](https://support.pagerduty.com/docs/configuring-a-user-profile#section-notification-rules) in their user profile. 

Responder notifications are sent across all contact methods immediately when the responder request is made (i.e. t=0).

For example, a user with the high-urgency notification rules below would be notified to join an incident immediately via push and phone call on their Mobile Default phone and at +1 555-555-5555, but *they would not* be notified at their backup contact methods because they are the same contact method types and they are set at a 5 minute notification delay: 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4ef8484-add-responders-notification-rules.png",
        "add-responders-notification-rules.png",
        1160,
        378,
        "#e5e1e1"
      ]
    }
  ]
}
[/block]
##Escalation Policy Responder Notifications
If an escalation policy is requested as a responder, it will follow the escalation path until someone accepts the request to join. Alternatively, the same responder can acknowledge the incident which will also automatically accept the request to join. This escalation path for responders is separate from the escalation policy on-call for the service where the incident was generated. 

This extended acknowledge logic also applies to “bulk acknowledgement”. For example, if a user selects 5 incidents to bulk acknowledge and has pending responder notifications for 3 of those 5 incidents, the bulk update will also auto-accept the three responder requests.

#Status of Responders 

To view the status of **all requested responders** for an incident, head to the incident details section of the particular incident in the web app. On the right-hand side within the incident, there will be a list of responders and icons to indicate whether they have joined, declined, or have yet to respond to your request.

There are 3 possible responder statuses: **Joined** if the requested responder accepted the request, **Declined** if they declined the request, and **Pending** if they have yet to respond. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/51257c2-mobilizing-response-responder-statuses.png",
        "mobilizing-response-responder-statuses.png",
        988,
        922,
        "#f6f5f6"
      ],
      "caption": ""
    }
  ]
}
[/block]
In the timeline of the incident in the web app, you can see when a requested responder accepted or declined the request. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c9dfcd6-mobilzing-response-responder-status-timeline.png",
        "mobilzing-response-responder-status-timeline.png",
        1164,
        354,
        "#f7f8f8"
      ],
      "caption": ""
    }
  ]
}
[/block]
In the mobile app, additional responders have been requested if you see **Coordinated Response** next to an incident. You can also view if a responder has **joined** or **declined** the request within the timeline of the incident.

# Other Features to Facilitate Incident Response

Instead of adding responders for additional assistance to the incident at hand, you can: 

* [Communicate with Stakeholders](/docs/communicating-with-stakeholders) which lets you **notify stakeholders** who aren't directly involved with resolving the incident. 
* [Escalating or Delegating an Incident](/docs/reassigning-and-delegating-incidents) which **re-assigns** the incident resolution responsibilities to another user.