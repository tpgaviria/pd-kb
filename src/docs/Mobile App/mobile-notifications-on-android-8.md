---
title: "Mobile Notifications on Android 8"
slug: "mobile-notifications-on-android-8"
hidden: true
createdAt: "2017-11-14T19:22:45.532Z"
updatedAt: "2017-11-14T22:48:48.375Z"
---
A workaround for Android devices to restore original notification preferences and override system volume when you’re on-call.
## Restore Original Notification Preferences

On November 11, 2017, the PagerDuty app was migrated to Android 8.0 with the 5.10.4 release, which supports better compatibility and the ability to use new features found in Android 8.0. However, as part of these new features in Android 8.0, Google also changed the way notifications work for all its users. 

Notification settings have been moved under the Android OS settings, resulting in greater and more granular control over user notification tone settings. This means that the “volume override” feature cannot be set within the PagerDuty app anymore and customers need to follow the workaround below, which will render the same notification preferences when you’re on-call.

1. The Android OS Notification Settings can be accessed by tapping the **Incident Notification Tones** menu item within the PagerDuty in-app Settings.
2. Tap a Notification category (High Urgency Incident or Low Urgency Incident)
3. Tap **Importance** and select **Urgent - Make sound and pop on screen**
4. Tap the back arrow to return to the previous screen
5. Tap **Override Do Not Disturb** to add PagerDuty to your “Do Not Disturb” whitelist
6. Tap the back arrow to return to the previous screen
7. Pull down the full **Settings** menu from the top of the screen
8. Tap **Do not disturb** (for more on the “Do not disturb” feature click here: https://www.androidcentral.com/how-adjust-do-not-disturb-settings-android-o)
9. Enable **Do not Disturb**
10. Tap **Done**
## Adding classic PagerDuty Ringtones to Android 8

We are working on adding back the original PagerDuty tones but in the meantime, you can use Android 8.0’s custom ringtone picker to add the tones back yourself.

1. Download the desired tones from here: https://goo.gl/z7zN7e (we do plan on adding the tones back in a future release)
2. Place them in a common folder (Downloads) on your Android’s internal memory or SD Card
3. Go to Android’s Notification settings for the PagerDuty app
4. Tap on a Notification channel (High Urgency Incident or Low Urgency Incident)
5. Tap on Sound to select a tone
6. Scroll to the bottom of the list, tap on “+ Add ringtone”
7. Use the file browser to find your tone

##For Google Pixel 2
If you are using Google Pixel 2, please follow these steps:
1. Connect your phone to your computer using a USB cable. [Learn how to transfer files by USB](https://support.google.com/pixelphone/answer/2840804).
2. In the window that opens, you'll see the "Ringtones" folder. Copy your music file (MP3) into the "Ringtones" folder.
3. Disconnect your phone from your computer.

For more information please refer to the Google Community Forums: https://goo.gl/xpUYnA.

We’re sorry about the inconvenience this may have caused. The workaround will help bring back your original notification preferences, and if you have any questions, please don’t hesitate to reach out to us at support@pagerduty.com.