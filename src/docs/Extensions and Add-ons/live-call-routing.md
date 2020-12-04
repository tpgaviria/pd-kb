---
title: "Live Call Routing"
slug: "live-call-routing"
hidden: false
createdAt: "2017-05-25T15:20:02.827Z"
updatedAt: "2020-10-28T19:19:35.242Z"
---
Live Call Routing allows you to expand your customer support by directing incoming phone calls and voicemails to on-call responders. A fixed, dedicated number (local or toll-free) will be provided, which will dynamically route calls or voicemails to the on-call responder in PagerDuty.
[block:callout]
{
  "type": "warning",
  "body": "**Please note that this guide will only be relevant after a PagerDuty employee has enabled Live Call Routing on your account.** \n\n* Live Call Routing is available as an add-on to customers on Professional, Team (legacy), Business, and included in Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.\n* All users with the exception of Limited Users can view, add, edit and delete numbers on the Live Call Routing page once enabled.",
  "title": "Requirements
</Callout>


##Add a Live Call Routing Number

1. Navigate to **Apps & Add-Ons :fa-th-large: :fa-arrow-right: Live Call Routing**.
2. Click **New Routing Number**.
3. Select the [**Country**](https://support.pagerduty.com/docs/live-call-routing#section-supported-countries-regular-phone-numbers) where you'd like the number to be based and enter the **area code**, *(optional)*, if available.
4. Click **Continue**.
5. Enter a **Name** for the routing number. You will see your Live Call Routing number automatically generated below this name.
6. Under **What should happen when a call is connected?** choose one of the following options: 


* **[Play greeting and go to voicemail. Send the voicemail recording to the current on-call responder.](https://support.pagerduty.com/docs/live-call-routing#section-play-greeting-and-go-to-voicemail)**
* **[Play greeting and call the current on-call responder.](https://support.pagerduty.com/docs/live-call-routing#section-play-greeting-and-call-the-current-on-call-responder)** Then select your preferences:
   * Show the incoming caller's number on the call display (Default). 
   * [Show `[YOUR-LCR-NUMBER-HERE]` on call display](https://support.pagerduty.com/docs/live-call-routing#section-show-the-live-call-routing-number-on-your-phones-display).
   * How long before call escalates to the next level (seconds): Select how many seconds you would like to pass before escalating.

You may also choose the following *optional* settings: 

* **Skip Numbers that were already dialed on other EP levels**.
* **Resolve Incident when call is completed with on-call user**.


7. Under **How should caller be greeted on the call?** choose one of the following options:


* **Read a greeting message for me**: Enter the message that you would like the caller to hear when they call via automated message. If you would [prefer that service names are not listed in this message](https://support.pagerduty.com/docs/live-call-routing#section-prevent-live-call-routing-from-reading-your-services-names), check the **Only play this greeting, do not read out the service name(s)** checkbox.
* [**Upload my own audio file to use as the greeting**](https://support.pagerduty.com/docs/live-call-routing#section-upload-your-own-audio-message): You may upload your own MP3 audio file to play instead of an automated message. Click **Choose File**, select your **audio file** and then proceed with the following steps.


8. Select an associated **Service** (this is where incidents will trigger) and this service will be automatically assigned Keypad # 1. [To add more services](https://support.pagerduty.com/docs/live-call-routing#section-tie-multiple-services-to-a-live-call-routing-number), click **Add Another Service**.
9. When you are finished adding your services, click **Update Routing Number**. This will save your Live Call Routing number.

To add additional Live Call Routing lines, or to request a toll free Live Call Routing number, please [reach out to our Sales Team](https://www.pagerduty.com/contact-sales/).

##Supported Countries (Regular Phone Numbers)
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Numbers in all countries are subject to availability and the list of supported countries is subject to change.
</Callout>


- Canada
- Israel
- South Africa 
- Puerto Rico (U.S.)
- United Kingdom of Great Britain and Northern Ireland
- United States

##Supported Countries (Toll-Free Numbers)
A *toll-free* Live Call Routing number can be configured for the following countries (subject to availability). 
- Canada
- United Kingdom of Great Britain and Northern Ireland
- United States

If you would like to set up a Live Call Routing number in a country that is not listed here, please reach out to your Customer Success Manager or [PagerDuty Support](https://www.pagerduty.com/support/) to confirm current availability.

<Callout type="info" title="Info">
While the list above represents countries where we can currently create an inbound Live Call Routing number, responders can *receive* Live Call Routing-generated calls in any [supported country](doc:supported-countries).",
  "title": "
</Callout>


##Choose a Connection Type
You can configure Live Call Routing to either:

* [Play greeting and go to voicemail](https://support.pagerduty.com/docs/live-call-routing#section-play-greeting-and-go-to-voicemail). Send the voicemail recording to the current on-call responder.

or

* [Play greeting and call the current on-call responder](https://support.pagerduty.com/docs/live-call-routing#section-play-greeting-and-call-the-current-on-call-responder).

The following information is meant to help you understand how each option behaves.

###Play Greeting and Go to Voicemail
- This setting triggers an incident after the caller leaves a voicemail.
- The caller's message is attached to a new triggered incident, which is assigned to the on-call responder on the first level of the escalation policy. If more than one person is on-call, PagerDuty will assign the incident to all responders on the **first escalation rule**.
- The incident will then escalate according to the service's escalation policy.

####Listen to a Voicemail
To listen to a voicemail appended to an incident, you will need to navigate to either the incidents page or view the incident itself, you will need to click the **show details** link to expand the incident's details. Click the Listen to Recording link and you will be able to listen to the voicemail.

To listen to the voicemail from the mobile app, tap the incident to view the incident details. Then, tap the **Listen to Recording** link.

###Play Greeting and Call the Current On-Call Responder
- PagerDuty will attempt to connect the caller with the on-call responder on the first level of the escalation policy. 
- You can configure how long each responder has to answer the call before it will escalate to the next responder. The default is 20 seconds.
- If more than one responder is on-call, PagerDuty will randomly cycle through all responders on an escalation level. 
- If a responder has more than one phone number on their user profile, PagerDuty will call them at the first number listed on their Contact Information tab.
- PagerDuty creates an **acknowledged** incident when someone picks up, and **resolves** the incident when the call ends.
- If the responder does not answer the call, PagerDuty will attempt to contact on-call responders at each remaining level of the escalation policy until someone answers. Please note that **PagerDuty will not attempt to call the first level responders again**. Even if the escalation policy is configured to repeat one or more times, it will only go through the escalation policy **one time**.
- If still no one answers, the caller will be prompted to leave a message. An incident will trigger, with the incident description containing the inbound caller ID, and it will be assigned to the on-call responder on the first level of the escalation policy.
- The incident will then escalate as expected according to the service's escalation policy.

####Show the Live Call Routing Number on Your Phone's Display
For calls that connect directly with responders, you can select an option to show the Live Call Routing number, instead of the caller's number, when a call is received. This can be helpful to add to a contacts list, for example, so it is clear when a call is related to PagerDuty and Live Call Routing.
[block:callout]
{
  "type": "warning",
  "body": "This feature is currently only available for US- and Canada-based Live Call Routing numbers. The number that appears on the call display of responders' phones is not configurable for Live Call Routing numbers outside of Canada and U.S.A. due to restrictions in these countries. It will usually be shown as the number of the original caller (rather than the Live Call Routing number).
</Callout>


###Prevent Live Call Routing from Reading Your Services' Names
If you select **Read a greeting message for me** (Step 7 of [Add a Live Call Routing Number](https://support.pagerduty.com/docs/live-call-routing#section-add-a-live-call-routing-number)) Live Call Routing will, by default, attempt to read your services' names to the caller so they can be connected to the correct escalation policy. If your services reference internal jargon, this information may not make sense to the caller.

You can configure Live Call Routing to only play the greeting, and not read out services' names. Please note that if you select this option, you'll need to update the greeting with more caller-friendly information.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f21fbc-lcr-do-not-play-service-names.png",
        "lcr-do-not-play-service-names.png",
        952,
        312,
        "#f4f1f1"
      ]
    }
  ]
}
[/block]
##Upload Your Own Audio Message
You may choose to upload your own audio file to be played for the caller, instead of an automated message. Select **Upload my own audio file to use as the greeting** and upload an MP3 file. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9d53358-lcr-upload-audio-file.png",
        "lcr-upload-audio-file.png",
        950,
        292,
        "#f1eded"
      ]
    }
  ]
}
[/block]
##Tie Multiple Services to a Live Call Routing Number
You can associate up to 9 services with a single Live Call Routing number and set up a phone tree-like structure. When dialing in, an automated voice will announce, "Press 1 for Nagios Critical. Press 2 for Datadog Alerts... etc." Depending on the caller's selection, after a brief moment they'll be connected with the appropriate response team.

To change the order, in which services are announced (most critical first, for instance), you can rearrange the list of services on a routing number's **Edit** screen.

##Troubleshooting

###"You have reached a PagerDuty Live Call Routing line that is not set up yet; please call back later" 
If you hear this message when calling your Live Call Routing number, here are some things you should check:

1. Is your Live Call Routing instance associated with at least one service?
2. Are the service(s) using your Live Call Routing instance [disabled or in a maintenance window](doc:maintenance-windows)?
3. Is anyone on call for this service? Note that [no incident can trigger if no one is on call](https://support.pagerduty.com/docs/why-incidents-fail-to-trigger#section-nobody-was-on-call).
4. Do the on-call responders in the service's escalation policy have a phone contact method listed in the [Contact Information](doc:configuring-a-user-profile#section-contact-information) section of their user profile? Note that **Live Call Routing will not check the SMS field**, so on-call responders must have a number listed in the **Phone** field of their contact information in order for it to work.