---
title: "Adding Users to Existing Incidents"
slug: "adding-users-to-existing-incidents"
hidden: true
createdAt: "2017-05-10T18:06:29.667Z"
updatedAt: "2018-12-20T00:37:07.939Z"
---
## Add and Notify Subscribers


[block:callout]
{
  "type": "info",
  "body": "This feature is available to customers on our current Platform Business plan with the Modern Incident Response package, and is included on our Enterprise plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.",
  "title": ""
}
[/block]
Adding subscribers lets you notify stakeholders who aren't directly involved with resolving the incident. This could be C-level executives concerned about the health of the company, or a Support team interacting with customers during an outage, for instance.
- [Add Subscribers to an Incident](/docs/adding-users-to-existing-incidents#section-add-subscribers-to-an-incident)
- [Subscriber Notifications](/docs/adding-users-to-existing-incidents#section-subscriber-notifications)
- [Remove Subscribers from an Incident](/docs/adding-users-to-existing-incidents#section-remove-subscribers-from-an-incident)

##Add Subscribers to an Incident
1. On the **Incidents** page, open an incident to view the details. Go to the **Subscribers** tab on the incident details page.
2. Select the team or specific users you’d like to add.
3. To notify the subscribers, enter a message in the **Status Update** field and click **Notify Subscribers**. Subscriber notifications will appear in the incident timeline.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1486b0a-Subscribers_img1.png",
        "Subscribers_img1.png",
        1133,
        672,
        "#eaf7ea"
      ]
    }
  ]
}
[/block]
##Subscriber Notifications
Once subscribed to an incident, stakeholders can expect to receive all subsequent manual status updates on that incident. Subscriber notifications can be sent via email, SMS, and push notification depending on their [profile's contact methods](/docs/configuring-a-user-profile#section-contact-information).
[block:callout]
{
  "type": "info",
  "body": "We currently do not offer customized notification rules to notify on a specific channel; if you do not wish to receive updates on a certain channel we recommend leaving that contact method blank.",
  "title": "Note"
}
[/block]
Notification emails contain the most information about an incident:
- Who sent the notification
- Incident number and description
- When the incident was opened
- The affected service
- To whom the incident is currently assigned
- Incident status
- A link to the incident status page

###Email Notification
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2fb7598-Subscribers_img2.png",
        "Subscribers_img2.png",
        660,
        475,
        "#e4eee5"
      ]
    }
  ]
}
[/block]
###SMS Notification
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ecd42c4-IMG_1769.png",
        "IMG_1769.png",
        750,
        385,
        "#e6e6ed"
      ]
    }
  ]
}
[/block]
###Push Notification
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f938817-IMG_1771.png",
        "IMG_1771.png",
        748,
        250,
        "#afb5c1"
      ]
    }
  ]
}
[/block]
##Remove Subscribers from an Incident 
Users assigned to the incident can remove subscribers from an incident, and subscribers can choose to unsubscribe themselves.

If you are a user assigned to the incident and you want to remove a subscriber:
1. Go to the **Incident Details** page.
2. Click on the **Subscribers** tab.
3. Under **Subscribers**, click on the name of the subscriber you want to remove.
4. Click on **Remove Subscriber**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e1e36d0-Subscribers_img4.png",
        "Subscribers_img4.png",
        742,
        302,
        "#e5e8e7"
      ]
    }
  ]
}
[/block]
Subscribers can unsubscribe by: 
1. Going to the **Incident Status** page.
2. Click on the **Unsubscribe** button. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ae386e1-Subscribers_img3.png",
        "Subscribers_img3.png",
        741,
        451,
        "#f6f1ee"
      ]
    }
  ]
}
[/block]

## Add Responders


[block:callout]
{
  "type": "info",
  "body": "This feature is available to customers on our current Standard and Enterprise plans. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring Response Mobilizer."
}
[/block]
Adding responders enables you to receive assistance from additional users with an incident response. Typical reasons for adding responders include sev-1 responses, critical incident responses, and mobilizing teams. 

You can request **individual users** or **escalation policies** as responders, with a limit of 300 Responders per request. The requested users will have the option to accept or decline the request to respond to the incident.

##Add Responders to an Incident

A user, who can take action on the **open** incident, can request responders within the web UI and mobile app.

In the web UI:
1. Within the incident details of **open** incidents, by clicking the **Add Responders** button

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e992b12-incident-details.png",
        "incident-details.png",
        2594,
        1228,
        "#eeeeee"
      ]
    }
  ]
}
[/block]
2. While **manually** triggering an incident, by clicking the **Create New Incident** button at the top right within the **Incidents** page or within a **Service** page.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9337f81-manual-trigger-incident.png",
        "manual-trigger-incident.png",
        1236,
        1434,
        "#d8d8d7"
      ]
    }
  ]
}
[/block]
In the mobile app:
1. **iOS:** Select an **open** incident, click the **More** button at the bottom right, and select the **Add Responder** button.
2. **Android:** Select an **open** incident, click the three horizontal dots at the top right, and click the **Add Responder** button.

**Note:** You can add a conference bridge address in the initial request sent to responders.

## Responders Notifications

As a responder, you’ll receive the request to join an incident response on each of your **contact methods** used by your **high-urgency notification rules** which have the** lowest notification delay**. 

**Note:** Joined responders **do not receive additional incident notifications** after accepting the request.

## Status of Responders 

To view the status of **all requested responders** for an incident, head to the incident details section of the particular incident in the web UI. On the right-hand side within the incident, there will be a list of responders and icons to indicate whether they have joined, declined, or have yet to respond to your request.

There are 3 possible responder statuses: **Joined** if the requested responder accepted the request, **Declined** if they declined the request, and **Pending** if they have yet to respond. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f94bdb-responder-widget.png",
        "responder-widget.png",
        900,
        920,
        "#ececeb"
      ],
      "caption": "In this example, Jay has Joined the incident response, Tony has Declined the request, and Jack has yet to respond to the request"
    }
  ]
}
[/block]
In the timeline of the incident in the web UI, you can see when a requested responder accepted or declined the request. 


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b9926e0-timeline.png",
        "timeline.png",
        1932,
        368,
        "#edeeee"
      ],
      "caption": "In this example, Tony Declined the request at 9:18 by SMS"
    }
  ]
}
[/block]
In the mobile app, additional responders have been requested if you see **Coordinated Response** next to an incident. You can also view if a responder has **joined** or **declined** the request within the timeline of the incident.

## Adding Responders at Scale

For repeatable, automated mobilization of responders, you can make use of a **Response Play**. Response plays are packaged incident actions, and adding responders is one component. You can read further about the response plays feature [here.](https://support.pagerduty.com/v1/docs/response-automation)

Mobilizing a coordinated and cross-functional response can sometimes be a complicated task. Check out [our guide](https://support.pagerduty.com/docs/how-to-mobilizing-coordinated-responses) on the fundamentals of a coordinated incident response. 

If there are stakeholders in your business who need to understand what is happening with an incident or its response, but who will not be directly involved in the incident's resolution, you can use PagerDuty's [Stakeholder Communication](https://support.pagerduty.com/docs/how-to-effective-stakeholder-communications) capabilities, which let you send real-time status updates to specific sets of users. 



## Reassign or Delegate an Incident

Escalating an incident to the next user on-call from your phone will immediately reassign the incident to that user.  The original on-call user will no longer receive notifications.

##Escalate an Incident via SMS

Escalating via SMS assigns an incident to the next user on-call in the escalation policy. You can only escalate to the next on-call user in the escalation policy (see example below). To escalate to a different user, you must reassign the incident from the PagerDuty mobile app or site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f029f6-IMG_2434.png",
        "IMG_2434.png",
        750,
        530,
        "#e7e7ed"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "The response numbers to acknowledge, resolve and escalate incidents via SMS will change depending on the number of incidents on your account and notifications sent to you already. Check the SMS for the correct response numbers for your incidents, as it is not safe to assume that the response number used in the example screen shot will be valid for your incidents.",
  "title": "Note"
}
[/block]
##Reassign an Incident from PagerDuty

When reassigning an incident from the PagerDuty mobile app or site, you can escalate to either the next user on call, anyone within the escalation policy, or any user in your account. When you reassign the incident to an on-call user (any user in the escalation policy), the incident will continue to follow the escalation policy. However, if you assign the incident to a user listed under the Other user (all users in your account) section, the escalation will halt.

###To reassign an incident in the mobile app
1. Go to the incident you want to reassign.
2. Tap **More** on the bottom right (iOS) or tap the  action menu on the top right (Android).
3. Tap **Reassign**.
4. Tap on the **user**, **escalation level**, or **escalation policy** you want to reassign the incident to.
5. Tap **Reassign** to confirm.

###To reassign an incident on the site:
1. Go to the **Incidents** page.
2. Select the checkboxes for the incidents you want to reassign and click **Reassign**, or click on an incident number to go to that incident's detail page and click **Reassign**.
3. Select the desired **user**, **escalation policy**, or **escalation level** from the drop-down list.
4. Click **Reassign**.

##Delegating an Incident
You can "delegate" an incident to another team by assigning the incident to an escalation policy. A benefit to delegating an incident, rather than re-assigning it (which halts the current escalation process), is it will continue to follow the target escalation policy's escalation rules.
1. Go to the **Incidents** page.
2. Click on the incident that you would like to re-assign.
3. Click **Reassign**.
4. Select the **escalation policy** that you want to delegate the incident to.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/761b531-delegate.png",
        "delegate.png",
        695,
        397,
        "#e3ecf1"
      ]
    }
  ]
}
[/block]
5. Click **Reassign**.

##Delegating Multiple Incidents
1. Go to the **Incidents** page.
2. Select the checkbox for each incident you want to delegate.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ba76bf2-reassign.png",
        "reassign.png",
        596,
        227,
        "#f4f4f4"
      ]
    }
  ]
}
[/block]
3. Click **Reassign**.
4. Select the **escalation policy** that you want to delegate the incident to from the drop-down list.
5. Click **Reassign**.