---
title: "Using the Mobile App"
slug: "mobile-app"
hidden: false
createdAt: "2017-05-11T23:05:49.775Z"
updatedAt: "2020-10-09T22:20:16.398Z"
---
#New to the Mobile App?
The mobile app is available on the Apple Store and Google Play:
[block:html]
{
  "html": "<div><a href=\"https://apps.apple.com/us/app/pagerduty/id594039512\">\n<img border=\"0\" alt=\"Download on the App Store\" src=\"https://files.readme.io/179997a-Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg\">\n</a><a href='https://play.google.com/store/apps/details?id=com.pagerduty.android&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img border=\"0\" alt='Get it on Google Play' src='https://files.readme.io/357da2b-google-play-badge.png' height=22% width=22%/></a>\n</div>\n"
}
[/block]
The mobile app allows you to trigger, acknowledge, and resolve incidents. You can add responders, add incident subscribers, send status updates, run response plays, reassign incidents and add notes. With schedules, you can easily create overrides and view your upcoming on call shifts. You can also customize your ringtones and set behavior for high and low urgency incidents all from your settings page. 
[block:callout]
{
  "type": "info",
  "title": "Supported Operating Systems and Configuration",
  "body": "The app is supported on iOS 11.0 and up, and Android 5 and up. We do not support rooted devices."
}
[/block]
#Mobile App Walkthrough

The walkthrough screenshots below are from our Android app, and the iOS app is very similar.

##Open Incidents Screen

When first opening the PagerDuty app, you will be prompted to enter your email address/password or subdomain to login.

After login, you should see the Open Incidents screen, similar to the following:

![](https://files.readme.io/cf42eae-OpenIncidents.png)

[/block]
The **Mine** tab shows all triggered and acknowledged incidents assigned to you. The **All** tab shows all triggered and acknowledged incidents in the account. If you have a [Responder role](https://support.pagerduty.com/docs/advanced-permissions) or higher, you will also see the **My Teams** tab, which will show all incidents assigned to your teams.

##Using the Mobile App During an Incident 
During an incident, you will be able to see all activity on the Open Incidents screen (:fa-bars: :fa-arrow-right: **Open Incidents**). 

###Acknowledging Incidents

If a triggered incident is assigned to you, the banner at the top will turn red. Your incidents will be under the **Mine** tab on the **Open Incidents** screen. You can acknowledge an incident by swiping left and tapping **Ack**, tapping the incident and tapping the **Ack** button on the incident details page, or you can acknowledge directly from a push notification. Push notifications will look similar to the one below. PagerDuty push notifications provide the incident number, service, and incident description.

![](https://files.readme.io/407ee67-TriggerPushNotification.png)

[/block]
Once you acknowledge the incident, the banner will turn yellow. 

![](https://files.readme.io/ecf5734-AcknowledgedIncident.png)

[/block]
###Snoozing Incidents
You will see **Ack** and **Resolve** buttons on the incident details page of a triggered incident. After an incident is acknowledged, the **Ack** button becomes a **Snooze** button. You can also [snooze](https://support.pagerduty.com/docs/editing-incidents#section-snooze-an-incident) an incident by swiping left on an acknowledged incident.

###Incident Details and Other Actions
Tap an incident to enter the incident details screen. The incident detail screen contains incident information, timeline and a status updates section.

![](https://files.readme.io/730f974-Incident_Details_Screen.jpg)

[/block]
- Tap the **Timeline** tab to view the incident’s timeline.
- Tap the **Status Updates** tab to add incident subscribers and [send status updates](https://support.pagerduty.com/docs/using-mobile-status-dashboard#section-product-capabilities). 
- Tap **More** on the bottom-right to view a drop-down of incident action options including the ability to [run a response play](https://support.pagerduty.com/docs/response-automation), [change or add priority](https://support.pagerduty.com/docs/incident-priority), edit incident title, [add responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders), [snooze](https://support.pagerduty.com/docs/editing-incidents#snooze-an-incident), [unacknowledge](https://support.pagerduty.com/docs/incidents#unacknowledging-an-incident), [reassign](https://support.pagerduty.com/docs/reassigning-and-delegating-incidents), [add a note](https://support.pagerduty.com/docs/editing-incidents#section-add-a-note-to-an-incident) or [subscribe](https://support.pagerduty.com/docs/communicating-with-stakeholders#add-subscribers-to-an-ongoing-incident). 




![](https://files.readme.io/23b4968-Incident_Actions.jpg)

[/block]
### Related Incidents
[block:callout]
{
  "type": "info",
  "body": "This Related Incidents feature is currently available as part of our Digital Operations plan or can be purchased via Event Intelligence, an add-on to our Professional, Team (legacy) or Business plans. If you would like to sign up for a trial of this and other Event Intelligence features, please contact our [Sales Team](https://www.pagerduty.com/contact-sales/)."
}
[/block]
On the incident details screen, you can select the [Related Incidents](doc:related-incidents) blue button to review suggested incidents that are impacting other responders and PagerDuty services.

You can select an incident under the Related Incidents list which will open the corresponding incident details screen and press the back button to return to the original incident.

![](https://files.readme.io/8bac54c-Related_Incidents.jpg)

[/block]
###Resolving Incidents
To resolve, tap the **Resolve** button or swipe right. You can customize your swipe actions within the :fa-bars: :fa-arrow-right: **Settings** menu. You can still add notes even after an incident has been resolved. To view resolved incidents, navigate to :fa-bars: :fa-arrow-right: **Resolved Incidents**.  

![](https://files.readme.io/b8127f9-ResolveIncident.png)

[/block]
##Trigger an Incident
To trigger an incident, open the app, navigate to :fa-bars: :fa-arrow-right: **Open Incidents** screen, tap the :fa-ellipsis-v: icon and select **New Incident**.

![](https://files.readme.io/3ff6683-NewIncident.png)

[/block]
Enter the following:

* **Name**: A meaningful name for the incident.
* **Description** *(optional)*: A meaningful description of the incident.
* **Service**: Select the affected service.
* **Assign to** *(optional)*: You may select an escalation policy or user other than the service's default escalation policy. This overrides who the incident is assigned to. 
* **Priority** *(optional)*: You may add a priority if necessary.


Tap **Create** to trigger the incident. 

![](https://files.readme.io/6760d4f-NewIncident-Text.png)

[/block]
##Escalation Policies Screen
The Escalation Policies screen (:fa-bars: :fa-arrow-right: **Escalation Policies**) shows your escalation policies as well as your teams' and all of your organization’s escalation policies.

![](https://files.readme.io/01bc12d-EscalationPolicy.png)

[/block]
Selecting an escalation policy will show who is on-call at each level. Select a user to see their contact info and schedule details.

![](https://files.readme.io/7d7600f-On-CallEP.png)

[/block]


![](https://files.readme.io/ba6926c-AbrahamLincoln.png)

[/block]
##Users Screen
The **Users** screen (:fa-bars: :fa-arrow-right: **Users**) lists users and their login email address. Selecting a user will show their contact methods and escalation policies where they are on-call. You can email, call, or SMS a user from your device by tapping on a user's email address or phone number.

![](https://files.readme.io/cf0e485-UsersList.png)

[/block]


![](https://files.readme.io/27336e6-AbrahamLincoln.png)

[/block]
##Settings Screen
From the **Settings** screen (:fa-bars: :fa-arrow-right: **Settings**), you can select a custom push notification sound, as well as sounds for high and low-urgency notifications. You can also change your notification behavior, configure your own swipe actions, contact support, or check for critical PagerDuty-related issues by tapping **PagerDuty System Status**. For more information on notification configuration options, check out our [Mobile Notification Settings](https://support.pagerduty.com/docs/mobile-notification-settings) article. 

![](https://files.readme.io/0012f48-MobileAppSettings.png)

[/block]
You can also change how PagerDuty notifications are displayed on your device (i.e. how many notifications to show at once, whether or not you want notifications to be shown when your device is locked, etc.) by launching the **Settings** app and going to **Notifications** :fa-arrow-right: **PagerDuty**.

![](https://files.readme.io/8e59bbe-using-mobile-app-android-notification-settings.png)

}
[/block]


![](https://files.readme.io/3cf63b6-using-mobile-app-iphone-notification-settings.png)

}
[/block]
## Automatic vCard Updates

If you would like the PagerDuty vCard to auto-update, please follow instructions [here](https://support.pagerduty.com/docs/notification-phone-numbers#automatically-update-vcard-in-the-pagerduty-mobile-app).

##Live Updating
With incident live updating, incident pages and detail screens will stay up-to-date with the latest information and incident statuses, eliminating the need to manually refresh these pages in order to get updates. 

While on an incident list, when new incidents come in, a button will appear near the top of the screen indicating how many new incidents are ready to be shuffled into the list. After pressing that button, new incidents will be shuffled in and the view will move to the latest, highest priority incident. Alternatively, you can pull the screen down to refresh, where the button will disappear and the new incidents will be shuffled in, but the view will not change.

Live updating is **on** by default. If you would like to to disable Live Updating, navigate to the :fa-bars: :fa-arrow-right: **Settings** tab of the mobile app. Under the **Performance** section, toggle **Live Updating** off.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "While on live screens, push notifications will not show up in the app as to not distract users from triaging incidents. The push notifications will still be logged in your notifications list and in the incident’s timeline."
}
[/block]
##Scheduling Overrides
To schedule an override from the mobile app, navigate to :fa-bars: :fa-arrow-right: **Schedules** and select your desired schedule.

![](https://files.readme.io/46c8183-SchedulesList.png)

[/block]
Click on the shift you would like to override.

![](https://files.readme.io/a496b6b-ScheduleView.png)

[/block]
Adjust the user and the time constraints as necessary, and tap **Override**.

![](https://files.readme.io/bdb5bcc-ScheduleOverride.png)

[/block]


![](https://files.readme.io/0602cc2-ScheduleOverrideFinalView.png)

[/block]

## Mobile App Permissions

As of app version 5.72, new downloads of the mobile app will ask for the permission to access your contacts. For existing app users, you can access this under the **Settings** tab in the mobile app. 

The way we use the **Manage Contacts** permission is by importing the PagerDuty vCard, which you can also find on our [Knowledge Base](https://support.pagerduty.com/docs/notification-phone-numbers). We will automatically keep this up to date when we add or remove numbers from the vCard. 

We will **not**  send messages, calls, or notifications to any contact within your contacts list. We will **not** use this permission for marketing, data gathering, or for research purposes. 

If you choose to deny this permission, the app will still function as intended. However, you may miss calls if the PagerDuty phone number is blocked or marked as spam by your provider. For iOS users, installing the contact card allows you to enable an override for Do Not Disturb, and will ensure silencing unknown numbers doesn't affect calls from PagerDuty. You can always manually download the vCard from our Knowledge Base, however you will need to periodically check to see if it has been updated, and if so, you’ll need to download it again. 

![](https://files.readme.io/9771ef8-pagerduty-mobile-app-permissions.png)

[/block]
# Advanced Mobile Security

Add an additional layer of mobile app security by setting up Advanced Mobile Security on your PagerDuty account. 

Enabling this feature will require users to set a passcode (“PIN”) after logging in to the mobile app. This passcode is stored locally on the user’s device and will need to be entered to access the app. On iOS, users can choose to use phone biometric features like Face-ID. Administrators can also set a timeout which will additionally require the passcode when the timeout has elapsed. 


[block:callout]
{
  "type": "warning",
  "title": "Requirements",
  "body": "* Customers on our [**Business** and **Digital Operations** pricing plans](https://www.pagerduty.com/pricing/) have access to the App Lock feature.\n* Note: Advanced Mobile Security is configured within the web app as opposed to the mobile app."
}
[/block]
To set up App Lock:

1. In the PagerDuty web app, navigate to **User Icon** :fa-user:  :fa-arrow-right: **Account Settings**  :fa-arrow-right: **Mobile Security Settings**.
2. Select **On** from the drop-down to enable the **Mobile App Lock Setting**.
3. Choose an **App Lock Timeout** value which will control how long it will take for the app to lock and require to enter a passcode. 
4. Click **Save Changes**.

![](https://files.readme.io/d0f8061-MobileSecurity.png)

[/block]
Once the setting is enabled, users will be prompted to enter a new passcode when they log into their PagerDuty mobile app. 



![](https://files.readme.io/0e793bd-mobile-android-applock-enterpasscode-light.png)

[/block]

[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you have forgotten your passcode or would like to change it, you can select the “Forgot passcode?” link which will log you out of the entire app to set up a new one."
}
[/block]