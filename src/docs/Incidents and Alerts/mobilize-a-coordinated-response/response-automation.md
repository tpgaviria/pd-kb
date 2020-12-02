---
title: "Response Plays"
slug: "response-automation"
excerpt: "Create packaged incident actions that can be run at the click of a button, or automatically at incident creation"
hidden: false
createdAt: "2017-08-22T23:19:06.953Z"
updatedAt: "2020-10-07T03:07:35.267Z"
---
[block:callout]
{
  "type": "info",
  "body": "Response Plays are available on new Business and Digital Operations plans. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.",
  "title": "Note"
}
[/block]

[block:api-header]
{
  "title": "What Is A Response Play?"
}
[/block]
Response plays let you create packages of incident actions that can be applied at any time to an incident with just a single button click or that can be immediately applied to all new incidents created on a service. This enables you to take a complex activity, like assembling a response team of multiple on-calls and an incident commander, and make it available to anyone that needs to use it. Grouping up these actions into a reusable play has several benefits:

  * Turn documented processes into executable objects.
  * Reduce the opportunity for errors and mistakes while following incident response processes.
  * Drastically cut down on the time taken to execute incident response processes.  
[block:api-header]
{
  "title": "What Can A Response Play Do?"
}
[/block]
The current set of actions that can be a part of a response play include:

* **Mobilize a Response** (Notify responders other than the assignee to help resolve the incident.)
* **Engage Stakeholders** (Subscribe people who are not directly involved with resolving the incident to receive **status updates**.)
* **Publish Status Updates** (Send a prepared status update to all subscribers attached to the incident, to keep them aware of the incident’s progress.)
* **Add a Conference Bridge** (View the conference bridge details on the incident details page.)
[block:api-header]
{
  "title": "Example Usage"
}
[/block]
A response play can be used directly by on-call engineers during triage when they determine something they’ve been paged for is bigger than expected. A service can also be configured to run a response play automatically whenever an incident opens on that service.
[block:api-header]
{
  "title": "Create A Response Play"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Manager, Global Admin or Account Owner base roles can create response plays. At this time, Team-based roles do not have the ability to grant Response Play creation access to other users without these base roles.\n\nTo check what role you have, or if you need your permissions adjusted, please visit our section on [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
1. Navigate to **Incidents** :fa-arrow-right: **Response Plays**. 
2. Click the **New Response Play** button and enter a **Name** and *optional* **Description** and **Team**. 
3. Next, select your preferred settings options in the **What should happen when this play runs?** and **Who can run this play on demand?** sections (more details below). 
4. Once you have made your selections, click **Create Play**.

##What should happen when this play runs?

This section allows you to set what actions you would like the response play to take when it is run on an incident. Options for these actions are:

- Set conference bridge details for incident
- Notify responders other than the assignee to help resolve the incident
- Subscribe people who are not directly involved with resolving the incident to receive status updates
- Publish a status update to all subscribers

###Set conference bridge details for incident

You can automatically include meeting details for a conference bridge in the incident details. This will make the meeting details available to responders looking at the incident in the mobile app or in the web app. Note: to send meeting details in the request to responders itself, you must also include it directly in the custom message to responders.

Select the **Share conference bridge information with responders** option to enter the meeting details including Dial-in Number and/or Meeting URL. 

###Notify responders other than the assignee to help resolve the incident

If your account has access to the [add responders](https://support.pagerduty.com/docs/add-responders) feature, you can select [**Escalation Policies**](https://support.pagerduty.com/docs/add-responders#section-escalation-policy-responder-notifications) and/or **Users** to notify as additional responders on an incident. You can choose to **Send the default message to the responders...** or you can select **Send a custom message to responders** (details below).

####Send a custom message to responders

You may also want to use a custom responder message - this allows you to specify a conference bridge phone number or URL, or a Slack channel where the response will be taking place. 

Check the **Notify responders other than the assignee to help resolve the incident** option, then select **Send a custom message to responders** and enter your custom message.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e463f96-response-plays-send-custom-message.png",
        "response-plays-send-custom-message.png",
        1720,
        694,
        "#f2f1f0"
      ],
      "border": false,
      "sizing": "smart"
    }
  ]
}
[/block]
Phone numbers should be formatted like 234-567-8912,,,,1234#, where a comma (,) represents a one-second wait and pound (#) completes access code input.

Responders will be able to tap on the phone number and/or video call URL directly from the SMS they receive.

Here are phone number formats that will work:

+1-234-567-8912
+1(234) 567-8912
+1 (234) 567-8912
(234) 567-8912
234.567.8912
234-567-8912
1-234-567-8912
1 (234) 567-8912

###Subscribe people who are not directly involved with resolving the incident to receive status updates

If your account has access to the [add subscribers](https://support.pagerduty.com/docs/communicating-with-stakeholders) feature, you will have the option to select **Users** and/or **Teams** to subscribe to the incident when you run this play. 

####Publish a status update to all subscribers

If your account has access to [add subscribers](https://support.pagerduty.com/docs/communicating-with-stakeholders) feature, you may also include a status update message that will be added when you run this play on an incident. 

##Who can run this play on demand?

You have the option of associating a response play to a team. At the moment only one team can be assigned to a response play. The team determines when the play will be shown in the Run a Play listing dropdown. 

In this setting, you have the following options:

  * *No one can run this play on demand*: This ensures that the play will not be suggested to responders when looking at an incident. This is useful for plays attached to services that automatically trigger incidents.
  * *All incident responders*: This play will be shown to all responders, regardless of what team they are on.
  * *Incident responders on a specific team* (only available if the play is associated with a team): The play will be shown on an incident's Run a Play listing, but only when the active user is a member of the play's team. 

#Edit a Response Play

1. Navigate to **Incidents** :fa-arrow-right: **Response Plays**.
2. Click the :fa-cog: to the right of your desired response play and select **Edit**.
3. Edit your response play based on the settings defined in the above sections. 
4. Click **Save Changes**.
[block:api-header]
{
  "title": "Running A Response Play On An Incident"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "All roles, with the exception of Limited and Full Stakeholders, can run response plays on incidents."
}
[/block]
From the Incident details page, you can **Run a Play** from the button bar of the incident. You can select any play from the list.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/29454ff-response-plays-run-a-play.png",
        "response-plays-run-a-play.png",
        1624,
        666,
        "#f0eeee"
      ],
      "border": false
    }
  ]
}
[/block]
A confirmation box will pop up to confirm your selection for running the play. 

If you added responders to a play, your responders will have the ability to **Accept** or **Decline** your request.
[block:api-header]
{
  "title": "Automatically Running A Response Play At Incident Creation"
}
[/block]
You can run a response play whenever an incident is created on a service. Choose the service and click :fa-edit: **Edit Service**. Once on the edit screen, you can choose or clear the response play that will be used for new incidents on the chosen service by editing the **Response Play** field.
[block:api-header]
{
  "title": "Running A Play From The Mobile App"
}
[/block]
You can download the app from the [App Store](https://itunes.apple.com/us/app/pagerduty/id594039512) for iOS or [Google Play](https://play.google.com/store/apps/details?id=com.pagerduty.android) for Android. Screenshots are from our iOS app, and the Android app is very similar.

Open an incident and click **More**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0efe74-mobile_1.jpeg",
        "mobile_1.jpeg",
        750,
        1334,
        "#212836"
      ],
      "sizing": "smart",
      "border": false
    }
  ]
}
[/block]
Tap **Run a Play**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eff1113-mobile_2.jpeg",
        "mobile_2.jpeg",
        750,
        1334,
        "#f7f1f8"
      ],
      "border": false,
      "sizing": "smart"
    }
  ]
}
[/block]
Confirm that you want to Run the play
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5afcb35-step_3.jpg",
        "step_3.jpg",
        750,
        1334,
        "#131b23"
      ],
      "border": false,
      "sizing": "smart"
    }
  ]
}
[/block]