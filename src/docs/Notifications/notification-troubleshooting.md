---
title: "Notification Troubleshooting"
slug: "notification-troubleshooting"
hidden: false
createdAt: "2017-05-11T20:19:49.582Z"
updatedAt: "2020-10-13T22:32:10.684Z"
---
[block:api-header]
{
  "title": "General Push Notification Troubleshooting Guide"
}
[/block]
This is a general guide. We also have specific troubleshooting steps for [iOS](/docs/notification-troubleshooting#section-apple-push-notification-troubleshooting-guide) and [Android](/docs/notification-troubleshooting#section-android-push-notification-troubleshooting-guide).

##Notification Delivery
According to Apple and Google's official documentation, push notifications are delivered on a "best effort" basis. It's important to have backup contact methods in case push notifications are dropped or delayed.

##Download the Most Recent Version of the App
Check the [App Store](https://itunes.apple.com/us/app/pagerduty/id594039512?mt=8) and [Google Play](https://play.google.com/store/apps/details?id=com.pagerduty.android) to make sure you have the latest version of the PagerDuty app.

Please see our [System Requirements](/docs/system-requirements) for supported app versions and platforms.

##Push Notification Troubleshooting
- [Push notifications not enabled](https://support.pagerduty.com/v1/docs/notification-troubleshooting#section-not-enabled)
- [Service was Disabled or in Maintenance Mode](/docs/notification-troubleshooting#section-service-was-disabled-or-in-maintenance-mode)
- [Reset Devices and Push Notification Settings](/docs/notification-troubleshooting#section-reset-devices-and-push-notification-settings)
- [Send a Test Notification](/docs/notification-troubleshooting#section-send-a-test-notification)
- [Push Notifications for Other Apps](/docs/notification-troubleshooting#section-check-push-notifications-for-other-apps)
- [Firewall and Network Connection](/docs/notification-troubleshooting#section-check-your-firewall-network-connection)
- [Multiple or Missing Devices on the User Profile Page](/docs/notification-troubleshooting#section-check-for-multiple-or-missing-devices-on-the-user-profile-page)

## Notification Troubleshooting
Easily test and troubleshoot push notifications through the notification troubleshooting feature from within the mobile app’s :fa-bars: :fa-arrow-right: Settings screen. 

A successful push notification set up will show 3 green check marks along with the device receiving a test push notification. If an issue is identified, an error message will appear which will explain the root cause of why a test push notification can not be sent.  


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fb402b9-Screen_Shot_2020-10-13_at_3.16.29_PM.png",
        "Screen Shot 2020-10-13 at 3.16.29 PM.png",
        798,
        850,
        "#0f0f0f"
      ]
    }
  ]
}
[/block]
###Not enabled

In the mobile app, click on :fa-bars: :fa-arrow-right: :fa-cog: **Settings** and make sure you have the following settings configured:

1. **Notification Sound**: if this is set to none, click it and select a sound (this is for push notifications for your high urgency incidents).
2. **Low-Urgency Notification Sound**: if this is set to none, click it and select a sound

###Service was Disabled or in Maintenance Mode
If a service is disabled or in maintenance mode, incidents will not trigger. As a result, notifications (including push) will not go out.

###Reset Devices and Push Notification Settings
The first step to take is resetting push notification settings and preferences in PagerDuty.
1. Remove all devices under **Push** in the **Contact Methods** section of the user profile page in PagerDuty.
2. Logout of the PagerDuty app (if you're logged in)*:
    - On Android: Navigate to the **Accounts** screen, tap the menu icon on the account, and tap **Remove this account**.
    - On iOS: Navigate to the **Accounts** screen, tap **Edit** and tap the red delete icon next to the account.
3. Force close the app.
4. Open the app and login to your account.

**If these steps don't work, you can reset the app in your device settings*:
- *On Android: Open the **Settings** app, go to **Applications**, tap **PagerDuty**, then select **Clear Cache***.
- *On iOS: Open the **Settings** app, tap **PagerDuty**, then turn the **Reset** toggle to the on position.* 

###Send a Test Notification
Try the following steps:
1. Add your device as a contact method — also add a notification rule for the device.
2. Enable notifications for the PagerDuty app in your phone's Settings.
3. Confirm you have the most recent version of the mobile app.
4. Send a test notification in the web UI under **Contact Methods** on your profile page by clicking the **Test** link next to your device name.

###Push Notifications for Other Apps
Rarely Apple devices themselves can get blacklisted from Apple's Push Notifications service. If you have any other apps that use push notifications, verify you're receiving push notifications from them, too. Another place to check is your Notification Center to see when you were last able to receive a notification.

For Android, updating your phone may change the device ID. This can affect push notification delivery.

###Firewall and Network Connection
You'll need to connect to the internet to register the PagerDuty app. If the device is only connected to Wi-Fi (and no cellular connection is available), inbound and outbound TCP packets need to be sent over port 5223. It's possible that a firewall is blocking these requests.

To remove a firewall that's blocking push notification registration, turn Wi-Fi off on your phone. Logout of the PagerDuty app (if you're logged on) and log back in while on a cellular data connection. Check the user profile to see if registration was successful.

###Multiple or Missing Devices on the User Profile Page
Follow the instructions under "reset devices and push notification settings."

If you do not see your device registered under contact methods, review [how to register your mobile device for push notifications](/docs/mobile-app#section-adding-a-mobile-device).

###Blocked Devices on the User Profile Page

If you uninstall and reinstall the PagerDuty mobile app, you may find multiple instances of the same device listed under your push notifications. Since your device can only be added in once, old instances will have `Blocked` next to them. 

You can remove these by clicking the **x** to the right of these devices. Note that when you do this, any [Notification Rules](/docs/configuring-a-user-profile#section-notification-rules) associated with this old instance will also be removed automatically.

[block:api-header]
{
  "title": "Android Push Notification Troubleshooting Guide"
}
[/block]
This guide covers common troubleshooting steps for mobile app issues specific to Android devices. We suggest trying our [General Push Notification Troubleshooting Guide](https://support.pagerduty.com/docs/notification-troubleshooting#section-general-push-notification-troubleshooting-guide) before moving onto this guide.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you do not see your device registered under your contact methods, you may need to [add your device as a contact method](/docs/mobile-app#section-adding-a-mobile-device)."
}
[/block]
##Not Receiving Push Notifications
Google Play Services must be enabled in order to receive push notifications on your Android device. If Google Play Services are enabled and the [general troubleshooting steps](/docs/notification-troubleshooting#section-general-push-notification-troubleshooting-guide) have not resolved the issue, it may be necessary to reset the app. To reset the app, go to **Settings** :fa-arrow-right: **Apps** :fa-arrow-right: **PagerDuty** and tap **Clear Data**.

##Delayed Notifications
If you are experiencing delayed notifications on Android 6.0 and newer, it may be due to Doze mode. You can turn off Doze for PagerDuty by going to **Settings** :fa-arrow-right: **Battery** :fa-arrow-right: **Battery Optimization** :fa-arrow-right: **All Apps** :fa-arrow-right: **PagerDuty** and selecting **Don’t Optimize**.

##Override System Volume
Some versions* of our Android app offer a feature called Override System Volume. The availability of this feature may differ based on your specific device** and/or other installed apps. It is an experimental feature, and we recommend testing it before using it for production notifications.


[block:callout]
{
  "type": "danger",
  "title": "",
  "body": "Due to a Work Profile limitation from Android, Overriding Do Not Disturb, and System Volume will not work when the PagerDuty app is under a Work Profile."
}
[/block]
For **Android 8** (Oreo) and **Android 9** (Pie), you can override **Do Not Disturb** by going to your **phone settings** (outside of the PagerDuty app) > **Apps & notifications** :fa-arrow-right: **PagerDuty** :fa-arrow-right: **Notifications**. Here you should see an option to turn on high and low urgency notifications. 

If you find that the PagerDuty notifications are still not overriding Do Not Disturb for **Android 8** (Oreo) and **Android 9** (Pie), you'll need to set them through Android Settings. The steps to get there are:

- Select Settings
- Select Apps and Notifications
- Select App Info
- Find PagerDuty in the list
- Select App Notifications
- From here, select Advanced and make sure High and Low Urgency are both turned on
- Then, click on "High Urgency"
- This will take you to the menu where you can allow PagerDuty to override Do Not Disturb

For **Android 7** (Nougat) and lower, this feature is in the mobile app under **Settings** :fa-arrow-right: **Override System Volume**. The app will attempt to override the system volume settings and use maximum volume for PagerDuty notifications.

For **Android 6** (Marshmallow) devices, there is an extra setting that needs to be configured. Under **Security** :fa-arrow-right: **Do Not Disturb permissions** :fa-arrow-right: **PagerDuty**, turn on PagerDuty to allow it to override your Do Not Disturb settings. 

For **Android 5** (Lollipop) and **Android 6** (Marshmallow), we suggest adding PagerDuty as a **Priority** app to avoid missing push notifications. To add PagerDuty as a Priority App:
1. Choose the **Sounds and Notification** listing
2. Select the PagerDuty app and activate **Priority**

**Override System Volume has been introduced, removed, and re-introduced due to its experimental nature and breaking changes from new releases of the Android platform. If you don't see the option in the app, make sure you have the latest version from Google Play.*

*** OnePlus devices on Android 10 do not support override system volume for the PagerDuty app. *

##Other Sound Issues
If you are receiving push notifications but are unable to hear a sound check the following:
- Android requires a sound to be selected for push notifications. Select a sound under **Settings** :fa-arrow-right: **Sound & Notification** :fa-arrow-right: **Default Notification Ringtone**.
- For Android 6.0 and newer, [make sure the app is set as a prioritized app in priority mode](https://support.google.com/nexus/answer/6111295?hl=en).
- For Android 6.0 and newer, [check to see if the app is being silenced by Doze mode](https://www.androidpit.com/android-m-tips-and-tricks).
- Check to see if any other volume-manipulating apps are running.
[block:api-header]
{
  "title": "Apple Push Notification Troubleshooting Guide"
}
[/block]
This guide covers common troubleshooting steps for mobile app issues specific to iOS devices. We also suggest checking out our [General Push Notification Troubleshooting Guide](/docs/notification-troubleshooting#section-general-push-notification-troubleshooting-guide).

If you do not see your device under contact methods, see [Adding a Mobile Device for Push Notifications](/docs/mobile-app#section-adding-a-mobile-device-for-push-notifications).

##Check the Notification Center
In iOS, it is possible to turn off notifications for individual apps. In the Settings app, tap Notification Center and make sure the PagerDuty app is listed and enabled to play sounds and show Alerts or Banners. These are the app's default settings. If you don't see the PagerDuty app in your Notification Center, it is possible you didn’t allow PagerDuty to send push notifications when installing the app. Apple suggests following these steps:
1. Delete the PagerDuty app from your device.
2. Turn off your device completely and turn it back on.
3. Go to **Settings** :fa-arrow-right: **General** :fa-arrow-right: **Date & Time** and set the date ahead a day or more.
4. Turn the device off completely again and turn it back on.
5. Reinstall PagerDuty and tap **Allow** when prompted to allow push notifications.

##Verify Your Device is Registered with PagerDuty
After authenticating, we sync your device's push notification token to PagerDuty's servers. This allows us to send push notifications. In PagerDuty, confirm that your device is listed on your profile page under **Contact Methods** and **Notification Rules**. If it is not in either section, or you see multiple devices, you'll need to allow notifications when opening the app for the first time. You may also delete and re-install the app to allow notifications and register your device.

##Send a Test Notification
After confirming that your device is listed on your User Profile page (for both contact methods and notification rules), notifications for the PagerDuty app are enabled under Settings, and you’re using the latest version of the PagerDuty app, try sending a test notification. You can do this in the web UI under **Contact Methods** on your User Profile page by clicking the **Test** link next to your device name.

##Push Notification Doesn't Emit a Sound
If you can see push notifications coming through, but are not receiving a notification sound, in addition to checking sound settings, [make sure that your device's Ring/Silent switch is set to Ring](https://support.apple.com/en-us/HT203794). If your device is on silent or vibrate, then PagerDuty notifications will also be on silent or vibrate.

Lastly, check that you are signed in to your Apple ID on your iOS device. Go to **Settings** :fa-arrow-right: **iTunes & App Store** and enter your Apple ID and password.
[block:callout]
{
  "type": "info",
  "body": "Previewing the \"Default\" sound in the PagerDuty app will not play anything due to an Apple API limitation, but the sound will still play when the push notification arrives.",
  "title": "Note"
}
[/block]

[block:api-header]
{
  "title": "Apple Watch Notification Troubleshooting"
}
[/block]
If there is an issue receiving notifications on your Apple Watch, make sure that you've [added your iPhone as a device](/docs/mobile-app#section-adding-a-mobile-device-for-push-notifications).

You'll need to be able to receive short code messages in order to receive **SMS notifications**. Contact your carrier for help with short code messages. Please see [Troubleshooting Notifications Issues](/docs/notification-troubleshooting#section-troubleshooting-notifications-issues) for more info.

If you are not receiving **push notifications**, our [Apple Push Notification Troubleshooting Guide](/docs/notification-troubleshooting#section-android-push-notification-troubleshooting-guide) has more info.

##Quick checks:
1. Your watch must be **on your wrist** to receive notifications.
2. Your **iPhone must be locked** to receive watch notifications.
3. On your iPhone, **notifications must be turned ON** for both the PagerDuty app **AND** the Apple Watch app.
You can find this under **Settings** :fa-arrow-right: **Notifications** :fa-arrow-right: **PagerDuty** :fa-arrow-right: **Allow Notifications**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fac8a35-allow_notifications.png",
        "allow_notifications.png",
        750,
        317,
        "#f2eef6"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Troubleshooting Notifications Issues"
}
[/block]
- [Incident Escalation](/docs/notification-troubleshooting#section-incident-escalation)
- [SMS: Restriction on Short Code Messaging](/docs/notification-troubleshooting#section-sms-restriction-on-short-code-messaging)
- [SMS: India's DND Registry](/docs/notification-troubleshooting#section-sms-india-s-dnd-registry)
- [Push Notifications](/docs/notification-troubleshooting#section-push-notifications)

##Incident Escalation

You may not receive notifications to all of your notification rules because an incident assigned to you has been escalated to another user per an escalation policy.

For example:
1. Your notification rules are set to push notify you immediately, email you after 1 minute, and call you after 5 minutes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ef169e7-notification-troubleshooting-notification-rules.png",
        "notification-troubleshooting-notification-rules.png",
        1478,
        812,
        "#e9eced"
      ]
    }
  ]
}
[/block]
2. You are on level 1 of an escalation policy where incidents are escalated after 5 minutes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0655bb3-notification-troubleshooting-ep-levels.png",
        "notification-troubleshooting-ep-levels.png",
        1058,
        746,
        "#f3f3f3"
      ]
    }
  ]
}
[/block]
3. When an incident is triggered, you receive the push notification immediately, and one minute later the email notification. You do not receive a phone call.
4. This is because the incident was escalated to the level 2 on-call user (Ryan) at the 5 minute mark. Since the incident was escalated to someone else it is no longer assigned to you at 5 minutes, so PagerDuty will not send you a phone call notification.

In this case, you will want to change your notification rules to call you in <5 minutes OR change the escalation policy to escalate incidents after 6 or more minutes.

##SMS: Restriction on Short Code Messaging
Depending on which country you're located in and which cellular provider you're using, there may be a variety of issues that can affect your ability to receive PagerDuty SMS notifications.

Some mobile carriers restrict messages from or to short codes. Typically, all PagerDuty SMS notifications are sent from the short code "PDUTY" (73889). If you aren't receiving PagerDuty notifications via SMS and your phone number meets any of the below conditions, you may need to contact your provider to verify that your account is allowed to receive SMS notifications from short codes.
1. Pay-as-you-go number.
2. Any number that was a pay-as-you-go and is now on a standard plan.
3. Any number that is or was used by a business in the past.

###Specific Provider Issues with Short Codes
1. T-Mobile USA has a default content filter set. In order to remove the content filter set, you must specifically call T-Mobile and authorize PagerDuty's short code numbers (73889, 42752, and 43105).
2. If you recently upgraded your device with T-Mobile, they may have put a block on the account from receiving messages from short codes.

##SMS: India's DND Registry
In India: Please make sure that your number is not in the national DND registry. The government provides a [lookup utility](http://www.nccptrai.gov.in/nccpregistry/search.misc) you can use to determine if a number is listed.

##Push Notifications
If you are not receiving **push notifications**, see our [push notification troubleshooting guide](/docs/notification-troubleshooting#section-general-push-notification-troubleshooting-guide) for general tips. Push notification issues can be OS-specific, so once you've read over the general troubleshooting guide, take a look at our [Android](/docs/notification-troubleshooting#section-android-push-notification-troubleshooting-guide) and [Apple](/docs/notification-troubleshooting#section-apple-push-notification-troubleshooting-guide) guides.