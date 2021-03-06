---
title: "Mobile Notification Settings"
slug: "mobile-notification-settings"
hidden: false
createdAt: "2018-12-17T18:31:50.872Z"
updatedAt: "2020-10-13T22:46:49.557Z"
---
## Enabling Sound for PagerDuty Notifications

To enable sound for your PagerDuty notifications, you will need to assign both High and Low Urgency notifications a ringtone. In the PagerDuty app, you can do this from the :fa-bars: :fa-arrow-right: **Settings** menu as shown below. **By default, low urgency notifications will be silent**. With the notification sounds set and no other settings enabled, the PagerDuty notifications will also be muted when your phone is set to Do Not Disturb or when your volume is muted.  
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1f223da-MobileAppSettings-Notifications1.png",
        "MobileAppSettings-Notifications1.png",
        1073,
        1751,
        "#0d0c0c"
      ]
    }
  ]
}
[/block]

## Do Not Disturb and System Volume Settings in Android 9+


[block:callout]
{
  "type": "danger",
  "title": "Android Work Profiles and Do Not Disturb",
  "body": "Due to a Work Profile limitation from Android, Overriding Do Not Disturb, and System Volume will not work when the PagerDuty app is under a Work Profile."
}
[/block]

In Android 9 and up, if you'd like to bypass Do Not Disturb, you can enable **High-Urgency Override Do Not Disturb**. 

If your phone does not have Do Not Disturb turned on, but your volume slider is set to 0, PagerDuty notifications will be silent. To change this, you can enable **High- Urgency Override System Volume** on the same page. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/347069e-MobileAppSettings-Notifications1_copy.png",
        "MobileAppSettings-Notifications1 copy.png",
        1073,
        1751,
        "#100c0c"
      ]
    }
  ]
}
[/block]

## Bypassing Do Not Disturb on Android 8

As of Android 8, bypassing Do Not Disturb can be less intuitive since there may be additional steps to set it up successfully. 

1. Ensure that you have **Override System Volume** enabled in the app. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/36015a1-MobileAppSettings-Notifications4.png",
        "MobileAppSettings-Notifications4.png",
        1073,
        1751,
        "#0c0c0c"
      ]
    }
  ]
}
[/block]
2. Selecting this option will take you to the **Do Not Disturb access** page. From here, enable **PagerDuty** and accept the prompt. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a37d6e9-Screenshot_1545412645.png",
        "Screenshot_1545412645.png",
        1080,
        1920,
        "#f4f5f5"
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
        "https://files.readme.io/ac88619-Screenshot_1545412652.png",
        "Screenshot_1545412652.png",
        1080,
        1920,
        "#828282"
      ]
    }
  ]
}
[/block]
3. At this point, we recommend that you test to see if your High Urgency notifications are able to bypass Do Not Disturb. 

If you're still having an issue, you may have to configure this option manually as we have shown below. 

1. Select **Settings** and then select **Apps & notifications**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1a598ee-Screenshot_1545325927.png",
        "Screenshot_1545325927.png",
        1080,
        1920,
        "#f2f3f1"
      ]
    }
  ]
}
[/block]
2. Click **App info** and select **PagerDuty** in the app list. Then select **Notifications**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f629c8-Screenshot_1545325968.png",
        "Screenshot_1545325968.png",
        1080,
        1920,
        "#f3f2f1"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Don't see this option when you select Notifications?",
  "body": "If you select Notifications and don't see the menu below, you'll need to send a test notification or trigger an incident in order to receive a push notification. Once you've received your first push notification, the menus will populate."
}
[/block]
3. Ensure that the **High-Urgency** and **Low-Urgency** toggles are both set to **on**. Next, **tap the text** for **High Urgency Notifications**. This will take you to a different menu. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/67f4ea9-Screenshot_1545325957.png",
        "Screenshot_1545325957.png",
        1080,
        1920,
        "#e2ebea"
      ]
    }
  ]
}
[/block]
4. On this menu, **Override Do Not Disturb** will be an option at the bottom of the screen. Make sure to toggle this **on**. Keep in mind, if you'd like your Low Urgency Notifications to override Do Not Disturb, you'll need to go back to the previous menu and select the text for Low Urgency Notifications. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b03ede1-Screenshot_1545325982.png",
        "Screenshot_1545325982.png",
        1080,
        1920,
        "#e0e9e8"
      ]
    }
  ]
}
[/block]
# iOS: Critical Alerts

Critical Alerts for iOS allow push notifications to bypass an iPhone’s DND and silent mode settings. You can allow high urgency incidents to map to Critical Alerts and bypass **Do Not Disturb** in the mobile app by navigating to :fa-bars: :fa-arrow-right: **Settings**. Ensure that you have **Push Notifications** enabled, tap **Critical Alerts for High-Urgency** and then tap **Allow**. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1dffbb4-IMG_3463.png",
        "IMG_3463.png",
        828,
        1792,
        "#0d0c0b"
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
        "https://files.readme.io/e9ca12e-IMG_3521.PNG",
        "IMG_3521.PNG",
        828,
        1792,
        "#000000"
      ]
    }
  ]
}
[/block]
Alternatively, you can enable Critical Alerts by navigating to your device **Settings** and toggle the option within the PagerDuty app notification settings.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ad32370-IMG_3522.png",
        "IMG_3522.png",
        828,
        1792,
        "#f1eff2"
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
        "https://files.readme.io/67e579a-IMG_3523.png",
        "IMG_3523.png",
        828,
        1792,
        "#f1f1f3"
      ]
    }
  ]
}
[/block]

## iOS: Configure PagerDuty phone calls to bypass Do Not Disturb

Within the Mobile App, navigate to **Settings**. If you already had the app installed, select **Update PagerDuty Contact Card**. If this is your first time logging into the app, you'll be prompted to grant PagerDuty the **Manage Contacts** permission. You can read about how we use this permission [here](https://support.pagerduty.com/docs/mobile-app#section-mobile-app-permissions). 

Once you have the **PagerDuty Contact Card**, select it within your **Contacts menu**, and choose **Add to Favorites**. We recommend choosing the PagerDuty email address here, as the phone numbers we use are subject to change. 

Now that PagerDuty is added as a favorite, navigate to your **Do Not Disturb** settings, and select the option to **Allow Calls from Favorites**. PagerDuty phone calls will now bypass your Do Not Disturb settings. 
## MIUI and EMUI (Huawei and Xiaomi devices)

For these particular forks of Android, you may not be able to set sounds from the respective High and Low Urgency Notification Settings. Instead, you may need to navigate to:
- System Notification Settings
- Make sure High and Low Urgency Notifications are enabled
- From here, tap either High or Low Urgency to choose your sound.
## OnePlus devices

OnePlus devices running on OS 10 do not fully support Override System Volume. These devices will not always override the system volume when the phone is on silent or vibrate mode.