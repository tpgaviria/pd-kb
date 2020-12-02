---
title: "Communicating with Stakeholders"
slug: "communicating-with-stakeholders"
excerpt: "Provide stakeholders with proactive information about an incident's scope of impact and progress towards resolution"
hidden: false
createdAt: "2018-06-06T19:26:12.718Z"
updatedAt: "2020-10-13T18:02:38.894Z"
---
#Effective Stakeholder Communications

Proactive stakeholder communications advise others on the scope of impact and progress of an incident. When stakeholders are given proactive status updates, the primary response team can focus on resolution rather than answering status inquiries, leading to more efficient incident response and improved [MTTR](https://support.pagerduty.com/docs/analytics#section-data). 

There are several aspects to preparing for effective stakeholder communications:

 * Establishing who to inform during an incident.
 * Understanding the various methods of adding stakeholders as subscribers to incidents.
 * Understanding how to send status updates to stakeholders.
[block:callout]
{
  "type": "info",
  "body": "This feature is available to customers on our new Business plan and Digital Operations plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.",
  "title": "Note"
}
[/block]
##Who to Inform During an Incident

For any given incident, there are usually two factors to consider when deciding which stakeholders to inform:

  * What functionality, or service, is impacted?
  * What is the scope of impact?

Most organizations will have an incident classification scheme that is used to represent the impact - such as “Priority 1” through “Priority 5”. Generally speaking, the higher the incident classification, the more stakeholders are involved. For example, a Priority 3 incident with very limited customer impact might have no need for stakeholders, while a Priority 1 incident impacting a significant portion of a service’s customers might have IT management, executive leadership, and customer support as stakeholders. Some incidents may also benefit from specific additional stakeholders such as marketing, sales, or legal.

###Organizing Stakeholders by Team

As with many aspects of incident response, preparation is essential for making the best use of in-incident response time. Proactively knowing which stakeholders are needed for various kinds of incidents can improve your incident response’s effectiveness. We suggest that you organize these stakeholders into PagerDuty teams - one team per functional area. For example, you might have the following teams of stakeholders defined:

  * IT Management Stakeholders
  * Executive Stakeholders
  * Customer Support Stakeholders
  * Sales Stakeholders

When it comes time to subscribe stakeholders to an incident, you can now pick from these defined teams rather than select many individual users one-by-one.
[block:callout]
{
  "type": "info",
  "title": "Stakeholder Users",
  "body": "Any kind of PagerDuty user can be added as an incident subscriber: the account owner, managers, responders, etc. There are also special [Full Stakeholder](https://support.pagerduty.com/docs/user-roles#stakeholder-users) and [Limited Stakeholder](https://support.pagerduty.com/docs/status-dashboard#section-limited-stakeholder-access-level) user licenses available; these users can be subscribed to incidents and receive incident status updates. Full Stakeholders have read-only access to other data in your PagerDuty account, while Limited Stakeholders only have access to view and subscribe to the status dashboard, and do not see any other parts of PagerDuty. Full Stakeholders and Limited Stakeholders cannot add, edit or delete any objects in the account. Both Stakeholder user licenses are available at a reduced price and are ideal for employees that need to be involved in internal incident communications but won't be actively participating in the resolution effort. Please contact our sales team for more information about both types of Stakeholder users."
}
[/block]
##Add Subscribers to an Incident

###Automatically Adding Subscribers at Incident Creation

You can set up PagerDuty so that certain incidents will automatically subscribe the right stakeholders when they are created. To do so: 

  1. Create a [response play](https://support.pagerduty.com/docs/response-automation#section-creating-a-response-play) that subscribes users and/or teams. If you frequently subscribe the same sets of stakeholders to incidents, you can simplify this task by adding those groups to the play. Here’s an example response play that subscribes multiple stakeholder teams:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dff8f0e-communicating-w-stakeholders-response-play.png",
        "communicating-w-stakeholders-response-play.png",
        1730,
        940,
        "#f3f3f3"
      ]
    }
  ]
}
[/block]
This is also easily done in the mobile app:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a9e4a7a-communicating-w-stakeholders-mobile-run-play.png",
        "communicating-w-stakeholders-mobile-run-play.png",
        1244,
        738,
        "#131212"
      ]
    }
  ]
}
[/block]
2. Attach the response play to a PagerDuty service by navigating to **Services** :fa-arrow-right: **Service Directory**, click the **name** of the service and select the **Response** tab. Click **Edit** to the right of the **Coordinate Responders and Stakeholders** section, select your desired **Response Play** from the dropdown and click **Save Changes**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/389a158-configurable-service-settings-add-response-play.png",
        "configurable-service-settings-add-response-play.png",
        1367,
        346,
        "#d4e1f7"
      ]
    }
  ]
}
[/block]
This will ensure that every new incident created on the service will run the response play, which will subscribe it’s stakeholders to receive all status updates subsequently published for that incident. 
[block:callout]
{
  "type": "info",
  "body": "The act of subscribing stakeholders to an incident does not cause them to receive a notification. This “silent subscription” allows you to subscribe stakeholders to an incident at any time (for example, at incident creation) and then explicitly choose to publish a status update if and when there is something noteworthy to report. Thus, stakeholders receive only curated updates, which helps avoid notification fatigue.",
  "title": "Note"
}
[/block]
###Add Subscribers to an Ongoing Incident

Users and teams can be subscribed to an active incident from the PagerDuty web app or the mobile app. 

To add subscribers to an ongoing incident in the web app:

1. On the **Incidents** page, open an incident to view the details. Go to the **Status Updates** tab on the incident details page.
2. In the **Subscribers** field, search and select the team or specific users you’d like to add.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4471a3d-communicating-w-stakeholders-add-subscribers.png",
        "communicating-w-stakeholders-add-subscribers.png",
        768,
        970,
        "#f7f6f5"
      ]
    }
  ]
}
[/block]
To add subscribers to an ongoing incident in the mobile app:

1. On the **Incidents** page, open an incident to view the details. Go to the **Status Updates** tab on the incident details page.
2. In the **Subscribers** field, tap the :fa-plus: and search and select the team or specific users you’d like to add. once selected they will automatically be added as a subscriber.

###Self-Subscribing to Incidents via Status Dashboard

For accounts with the [Status Dashboard](https://support.pagerduty.com/docs/status-dashboard) add-on product, users that [subscribe themselves to a business service on the dashboard](https://support.pagerduty.com/docs/status-dashboard#section-subscribing-to-business-services) will then be added as incident subscribers on any incidents that impact that business service. 

##Sending Status Updates to Subscribers

Once subscribed to an incident, stakeholders can expect to receive all subsequent manual status updates on that incident. Status updates can be published in three different ways: 

- A responder can compose and publish a status update ad-hoc in the incident’s Status Updates tab via the web or mobile app.
- A responder can run a response play that publishes a predefined status update via the web or mobile app.
- A responder can [publish a status update](https://api-reference.pagerduty.com/#!/Incidents/post_incidents_id_status_updates) or [run a response play](https://www.google.com/url?q=https://api-reference.pagerduty.com/%23!/Response_Plays/post_response_plays_response_play_id_run&sa=D&ust=1563467810797000&usg=AFQjCNGeLQ901hacz1PbM_yb6qvgjljeIA) that publishes a predefined one  via the API.

###Send Status Updates via Web or Mobile App

Publishing a status update ad hoc in the web or mobile app is beneficial when the content is context-dependent. For example, if a status update needs to provide details about the nature of the incident, the current impact, or the estimated resolution time:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5db3d6-communicating-w-stakeholders-status-update-web-app-example.png",
        "communicating-w-stakeholders-status-update-web-app-example.png",
        1114,
        578,
        "#f3f5f4"
      ]
    }
  ]
}
[/block]
To send a status update via the web app:

1. Navigate to the **Incidents** page in the web app and click the **Title** of the active incident to view the incident details page. 
2. Select the **Status Updates** tab. In order for a status update to be published to the Status Dashboard, it is **required** that you enter an **Incident Priority** and select the **Impacted Business Services**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7ddd503-communicating-w-stakeholders-assign-priority-impact.png",
        "communicating-w-stakeholders-assign-priority-impact.png",
        774,
        572,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]
3. Once those details have been entered or confirmed, click the **New Update** button  in the **Status Updates** section. Ensure that the following dialog confirms that your update will be published to the status dashboard:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ff876c9-communicating-w-stakeholders-status-update-web-app-dialog.png",
        "communicating-w-stakeholders-status-update-web-app-dialog.png",
        1107,
        577,
        "#f2f3f1"
      ]
    }
  ]
}
[/block]
If the dialog says that it will **not** be published to the status dashboard, return to the incident’s **Status Updates** tab and verify the required details from step 2 have been entered.
4. Enter a message and click **Send Update**. Status updates will appear in the incident timeline.

To send a status update via the mobile app:

1. Navigate to the **Incidents** page in the mobile app and click the **Title** of the active incident to view the incident details page. 
2. Select the **Status Updates** tab and tap the :fa-plus: next to Published Updates. In order for a status update to be published to the Status Dashboard, it is **required** that you enter an **Incident Priority** and select the **Impacted Business Services**. If the incident does not have these criteria, you will be prompted with a blue dialog. Tap **Change** to enter the priority and impacted Business Service(s) and tap **Done**.
3. Enter your status update text and then click the :fa-paper-plane: in the upper right to send.

###Send Status Updates via Response Play
In other situations the status update may be less context dependent. For example, notifying stakeholders about the onset of a P1 incident or announcing incident resolution. In these cases you can automate the status updates using a response play.
A response play can publish a status update in combination with subscribing stakeholders and/or adding responders. Here’s an example response play that would be suitable for attaching to a service so that whenever that service has a new incident, the identified stakeholder is subscribed and immediately receives a status update notification:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/26f2c64-communicating-w-stakeholders-response-play-status-update.png",
        "communicating-w-stakeholders-response-play-status-update.png",
        1912,
        836,
        "#f8f7f7"
      ]
    }
  ]
}
[/block]
Alternately, a response play such as the following can be used as a one-click wrap-up after an incident has been resolved, and could be run from either the web app or the mobile app:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/70dde4d-communicating-w-stakeholders-response-play-service-restored.png",
        "communicating-w-stakeholders-response-play-service-restored.png",
        1902,
        608,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]
##Status Update Notification Methods 

By default, status updates will be sent to [subscribed](https://support.pagerduty.com/docs/communicating-with-stakeholders#add-subscribers-to-an-incident) users via all email, SMS and push contact methods. It is not possible to have a time delay for status update notifications. Follow directions [in this article](https://support.pagerduty.com/docs/configuring-a-user-profile#status-update-notifications) to add, edit or delete contact methods for status update notifications.

###Email Status Update

Status update emails contain the most information about an incident:

- Who sent the status update
- Incident number and description
- When the incident was opened
- The affected service
- Incident status
- A link to the incident status page

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a893d59-communicating-w-stake-email-notification.png",
        "communicating-w-stake-email-notification.png",
        1206,
        796,
        "#f6f4f2"
      ]
    }
  ]
}
[/block]
###SMS Status Update
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6516e12-communicating-w-stakeholders-sms-status-update.PNG",
        "communicating-w-stakeholders-sms-status-update.PNG",
        538,
        237,
        "#ced5e2"
      ]
    }
  ]
}
[/block]
###Push Status Update

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a114b7e-communicating-w-stake-push-notification.jpg",
        "communicating-w-stake-push-notification.jpg",
        750,
        213,
        "#777c78"
      ]
    }
  ]
}
[/block]
###Status Dashboard Update

For incidents that appear on the status dashboard, all status updates will also be posted to the status dashboard. [See this article](https://support.pagerduty.com/docs/status-dashboard#section-updating-business-service-status) for more information on how to show an incident on the status dashboard.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/92c5171-communicating-w-stakeholders-status-dash-status-update.png",
        "communicating-w-stakeholders-status-dash-status-update.png",
        1288,
        1016,
        "#f6ebea"
      ]
    }
  ]
}
[/block]
##Remove Subscribers from an Incident 

Users assigned to the incident can remove subscribers from an incident, and subscribers can choose to unsubscribe themselves.

To remove a subscriber in the web app:

1. Go to the **Incident Details** page.
2. Click on the **Status Updates** tab.
3. Under **Subscribers**, click the name of the subscriber you want to remove.
4. Click **Remove Subscriber**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c48e70e-communicating-w-stakeholders-remove-subscriber.png",
        "communicating-w-stakeholders-remove-subscriber.png",
        1054,
        740,
        "#f2f3f3"
      ]
    }
  ]
}
[/block]
To remove a subscriber in the mobile app:

1. Go to the **Incident Details** page.
2. Select the **Status Updates** tab and tap **`#` User(s)** under **Subscribers**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb67e00-IMG_0782.PNG",
        "IMG_0782.PNG",
        748,
        659,
        "#10130f"
      ]
    }
  ]
}
[/block]
3. Next to the subscriber's name, tap **Unsubscribe**. You will see a blue dialog confirming they have been unsubscribed. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/69c8699-IMG_0783.PNG",
        "IMG_0783.PNG",
        746,
        339,
        "#0f1219"
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
        "https://files.readme.io/0a6455a-IMG_0784.PNG",
        "IMG_0784.PNG",
        750,
        217,
        "#4aa1dc"
      ]
    }
  ]
}
[/block]
# Other Features to Facilitate Incident Response

Alternatives to engaging non-incident-related stakeholders are: 

* [Add Responders](/docs/mobilizing-a-response) which allows you to receive **assistance from additional users** in incident response. 
* [Escalating or Delegating an Incident](/docs/reassigning-and-delegating-incidents) which **re-assigns** the incident resolution responsibilities to another user.