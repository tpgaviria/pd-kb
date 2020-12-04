---
title: "Notification Settings"
slug: "notification-settings"
excerpt: "Configure phone call notifications to adjust for voicemail and phone extension numbers"
hidden: false
createdAt: "2017-05-11T20:12:58.340Z"
updatedAt: "2019-11-11T23:27:22.625Z"
---
##Dialing Extensions and Introducing a Delay before Voicemail
If you want PagerDuty to notify you via a phone number that requires you to dial an extension, or you want to introduce a delay so that our voice message is timed correctly to speak after the beep, you can set this up by editing your contact methods.

Simply enter the phone number and then add comma(s), by itself for a delay or followed by a number for a direct extension. Each additional comma represents a 1-second pause (please see additional examples below).

###Setting your Contact Method to Dial a Phone Number with an Extension
- 415-555-5555,1234
    Dial 415-555-5555, wait **one** second, then dial 1234
- 415-555-5555,,,1234
   Dial 415-555-5555, wait **three** seconds, then dial 1234
- 415-555-5555,,1,,,2,987
    Dial 415-555-5555, wait **two** seconds, dial 1, wait **three** seconds, dial 2, wait **one** second, dial 987

<Callout type="info" title="Info">
In some cases you may need to add commas for pauses before **AND** after your direct extension depending on your phone system.",
  "title": "Note
</Callout>



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9e99402-notification-settings-edit-phone-number.png",
        "notification-settings-edit-phone-number.png",
        1080,
        110,
        "#e8edec"
      ]
    }
  ]
}
[/block]
###Setting your Contact Method to Dial a Phone Number and Wait for Voicemail
- 415-555-5555,,,,,,
    Dial 415-555-5555, wait **six** seconds (to account for the 'Please leave a message after the tone...' delay), then leave a message.