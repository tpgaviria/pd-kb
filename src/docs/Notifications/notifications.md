---
title: "Notification Content and Behavior"
slug: "notifications"
excerpt: "Content of incident notifications sent via email, SMS, phone call and push"
hidden: false
createdAt: "2017-05-11T22:22:19.532Z"
updatedAt: "2020-10-09T21:52:28.188Z"
---
Notifications are sent to the user(s) who are on-call when an incident is triggered. Depending on your pricing plan’s features, users can also be notified when they are added as responders, when a status update is published, or when a conference bridge is added to an incident. PagerDuty sends out notifications via the following channels:

- [Email Notifications](#section-email-notifications)
- [SMS Notifications](#section-sms-notifications)
- [Phone Notifications](#section-phone-notifications)
- [Push Notifications](#section-push-notifications)

Each of the above PagerDuty actions and channels will have notifications that display different information about an incident.

##Email Notifications

**Source**: no-reply@pagerduty.com
[block:parameters]
{
  "data": {
    "h-0": "PagerDuty Action",
    "h-1": "Subject Line",
    "h-2": "Body",
    "0-0": "- A new incident is triggered and the user is on call",
    "0-1": "- **One incident assigned**: “[PagerDuty Alert] You have 1 TRIGGERED Incidents (`[4cb96]`)”\n- **If multiple incidents are assigned to you, PagerDuty will bundle all incidents into one email**: “[PagerDuty Alert] You have `[3]` TRIGGERED Incidents (`[db97d]`)”\n- [More information on notification bundling](#section-notification-bundling)",
    "0-2": "“Hello `[user name]`, you have `[#]` open incident assigned to you:\n- `[incident number]`\n- `[incident title]`\n- `[View Incident link]`\n- `[conference bridge details]` (if applicable)\n- `[incident status]` \n- `[incident urgency]\n- `[user(s) assigned to the incident]`\n- `[trigger date and time]`\n- `[service name]`\n- `[escalation policy associated with the service]`\n- `[email body]*`”\n\n\n\\* *This will be the same as the **Details** field in an incident.*",
    "1-0": "- User has been added as a responder (brand new incident)",
    "1-1": "“PagerDuty response requested by `[user]`”",
    "1-2": "“`[user]` requested your response: Please help with [`[incident number]`] `[incident description]` `[link to PD incident]`”",
    "2-0": "- User has been added as a responder (existing incident)",
    "2-1": "“PagerDuty response requested by `[user]`”",
    "2-2": "“`[user]` requested your response: `[custom message]` `[link to PD incident]`”",
    "3-0": "- Status Update to an incident that a user is assigned to or subscribed to",
    "3-1": "“[PagerDuty Status] `[incident status]`: `[incident name]`”",
    "3-2": "“`[user]` updated\n- `[incident number]`\n- `[incident title]`\n- `[trigger date and time]`\n- `[service name]`\n- `[user(s) assigned to the incident]`\n- `[View Incident link]`\n- `[incident status]` \n- `[status update]` \n- `[View Status Page link]`”"
  },
  "cols": 3,
  "rows": 4
}
[/block]
###Can I enable or disable rich-text / HTML email notifications?
Yes. For each email address you have configured within your Contact Information, you can choose to receive HTML emails. If this option is unselected, basic text email notifications will be sent. To change this email setting, click your **User Icon** :fa-arrow-right: **My Profile** :fa-arrow-right: **Contact Information** :fa-arrow-right: :fa-edit: next to your email address :fa-arrow-right: edit checkboxes based on your preferences. 

Here is an example of a PagerDuty text-only email notification:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c4f9e73-notification-content-bx-text-email.png",
        "notification-content-bx-text-email.png",
        1750,
        1124,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
Here is an example of a PagerDuty HTML email notification:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/96098c8-notification-content-bx-html-email.png",
        "notification-content-bx-html-email.png",
        1254,
        1244,
        "#f8f6f6"
      ]
    }
  ]
}
[/block]
When you receive a PagerDuty email notification, the **Details** section of each incident will be truncated to 500 characters. You can include clickable links in this truncated message. The rest of the email body can be accessed in PagerDuty within the incident logs and details or via the [mobile app](/docs/mobile-app#section-mobile-app-walkthrough).

Attachments are stripped from PagerDuty email notifications and also from the incident logs. To view the original attachment, you will want to refer to the system that sent out the original attachment.

##SMS Notifications

**Source**: [Variable numbers or short codes from the PagerDuty Vcard](https://support.pagerduty.com/docs/notification-phone-numbers).
[block:parameters]
{
  "data": {
    "h-0": "PagerDuty Action",
    "h-1": "Body",
    "0-0": "A new incident is triggered and the user is on call",
    "1-0": "User has been added as a responder (brand new incident)",
    "2-0": "User has been added as a responder (existing incident)",
    "3-0": "Status Update to an incident that a user is assigned to or subscribed to",
    "0-1": "“ALRT `[incident number]` on `[service name]`: `[incident title]` Reply `[#]`: Ack, `[#]`: Resolv”",
    "1-1": "“PagerDuty #`[incident number]` (`[user]`): Please help with \"[`[incident number]`] `[incident description]`\"",
    "2-1": "“PagerDuty Alert. #`[incident number]` (`[user]`): `[custom message]` Reply `[#]`: Accept, `[#]`: Decline”",
    "3-1": "\"`[user]` has published an update to incident #`[incident number]`: `[custom message]`\""
  },
  "cols": 2,
  "rows": 4
}
[/block]
All PagerDuty SMS notifications are truncated to meet the 160 character limit for text messages.

Here is an example of a PagerDuty SMS notification:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7aa72ab-notification-content-sms.jpg",
        "notification-content-sms.jpg",
        552,
        186,
        "#dedee2"
      ]
    }
  ]
}
[/block]
If multiple incidents are assigned to you, then PagerDuty will bundle all notifications into 1 SMS notification, listing out the incident numbers and giving you the option to only ack all or resolve all incidents at once.

##Phone Notifications
**Source**: [Variable numbers from the PagerDuty Vcard](https://support.pagerduty.com/docs/notification-phone-numbers).

[block:parameters]
{
  "data": {
    "h-0": "PagerDuty Action",
    "h-1": "Recorded Phone Message",
    "0-0": "A new incident is triggered and the user is on call",
    "0-1": "“You have `[#]` triggered incidents on `[service name]`. The failure is `[incident title]`. Press `[#]` to Acknowledge, Press `[#]` to Resolve, Press `[#]` to Escalate, Press `[#]` for help or Press * to repeat this message.”",
    "1-0": "User has been added as a responder (brand new incident)",
    "1-1": "“PagerDuty Alert. `[user]` requested your response. Please help with [`[incident number]`] `[incident description]`. Press `[#]` to accept the request, Press `[#]` to decline the request\"",
    "2-0": "User has been added as a responder (existing incident)",
    "2-1": "“PagerDuty Alert. `[user]` requested your response. `[custom message]`. Press `[#]` to accept the request, Press `[#]` to decline the request”"
  },
  "cols": 2,
  "rows": 3
}
[/block]
Please read our article on [Live Call Routing](https://support.pagerduty.com/docs/live-call-routing) for more information on how Live Call Routing messages may be formatted.

##Push Notifications
[block:parameters]
{
  "data": {
    "h-0": "PagerDuty Action",
    "h-1": "Body",
    "0-0": "A new incident is triggered and the user is on call",
    "0-1": "“ALRT `[incident number]` on `[service name]` `[incident title]`”",
    "1-0": "User has been added as a responder (brand new incident)",
    "1-1": "“PagerDuty `[incident number]` (`[user]`): Please help with \"[`[incident number]`] `[incident title]`\"",
    "2-0": "User has been added as a responder (existing incident)",
    "2-1": "\"`[user]` requested your response. `[custom message]`\"",
    "3-0": "Status Update to an incident that a user is assigned to or subscribed to",
    "3-1": "\"`[user]` has published an update to incident `[incident number]`: `[custom message]`\""
  },
  "cols": 2,
  "rows": 4
}
[/block]
Here is an example of a PagerDuty push notification:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ed35fae-communicating-w-stake-push-notification.jpg",
        "communicating-w-stake-push-notification.jpg",
        750,
        213,
        "#777c78"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Notification Bundling"
}
[/block]
Given that notification volume in some cases can increase to 100 notifications in a minute, we calibrate our policies to prevent alert fatigue. Notification bundling is the incident summary we switch to when multiple simultaneous incidents are triggered and assigned to a user. PagerDuty rolls together or bundles these multiple notifications into a single summarizing notification, regardless of your notification method (phone, SMS, email, or push). All incidents that are in the triggered state (i.e. not acknowledged or resolved) will be included in the bundled notification.

The following are examples of how each contact method will notify you, in the event of near-simultaneous incidents. For this example, assume 5 incidents have been triggered on a service named "Nagios-Shopping-Cart" within a 1-minute time frame.

##Phone
`You have 5 triggered incidents on Nagios-Shopping-Cart. Press 4 to acknowledge all incidents. Press 6 to resolve all incidents. Press 0 for help or press * to repeat this message.`

##SMS
`ALRT: #100,#101,#102,#103,#104 on Nagios-Shopping-Cart. Reply 14:Ack all, 16:Resolv all`

##Email
```
You are assigned 5 triggered incidents in PagerDuty:
Please visit the following URL to manage these incidents.
https://fake-name.pagerduty.com/dashboard

1) Incident #100
   Opened on: Jan 1 at 12:00pm PST
   Service: Nagios-Shopping-Cart
   Description: Emergency in the server room
   Link: https://fake-service.pagerduty.com/i/100
```
Another way to minimize the number of notifications that you receive is to adjust your notification rules so that you are notified of an incident several minutes after it is assigned to you as opposed to immediately after it is assigned to you. Adjusting the notification rules will allow more time for incidents to aggregate and you will receive fewer notifications during a high volume period.
[block:api-header]
{
  "title": "Responding to SMS and Phone Notifications"
}
[/block]
##Responding to an SMS Notification

To reply to an SMS notification you will reply with the unique code that is provided. Here is an example:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2e67196-ack_screenshot.jpg",
        "ack_screenshot.jpg",
        750,
        1334,
        "#e9e7ed"
      ]
    }
  ]
}
[/block]
##Responding to a Phone Notification
Please respond to a phone notification by pressing:
4. Acknowledge
6. Resolve
8. Escalate — if there is another level in your escalation policy

##Responding from the Mobile Site or the App
See [Responding to Incidents in the Mobile App](/docs/mobile-app#section-responding-to-incidents-in-the-mobile-app).

##Responding to an Email Notification
At this time it is not possible to acknowledge or resolve an incident via email. To take action for the open incident you must use the PagerDuty site or mobile app, or respond via an SMS notification or phone call you receive as described below.