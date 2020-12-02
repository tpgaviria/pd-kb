---
title: "Time Zone Settings"
slug: "time-zones"
hidden: false
createdAt: "2017-05-15T22:44:35.750Z"
updatedAt: "2020-10-09T22:33:26.073Z"
---
Most times in the PagerDuty web UI are rendered in the desired time zone of the user currently logged in. There are some exceptions to this on the User, Team, and System reports in [Advanced Reporting](doc:analytics#section-advanced-analytics). When users are added, their personal time zones will match the [account-level time zone](/docs/time-zones#section-changing-the-account-level-time-zone) by default, and they can change their [user-level time zone](/docs/time-zones#section-changing-the-user-level-time-zone) if necessary. It’s important to note that a user profile can have a different default time zone than the account level time zone, and that all on-call schedules will be viewed in your selected time zone.
[block:callout]
{
  "type": "info",
  "body": "Any time-related information gathered via API calls, such as incident trigger times, will be displayed in UTC.",
  "title": "API Note"
}
[/block]

[block:api-header]
{
  "title": "Changing the Account-Level Time Zone"
}
[/block]
Only the Account Owner can change the account-level time zone.

1. Log in to PagerDuty as the Account Owner. 
2. In the upper right of the page navigate to the **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Account Settings** tab.
3. Under Account Details, select the Default Time Zone from the drop-down menu.
4. Click **Save changes**.
[block:api-header]
{
  "title": "Changing the User-Level Time Zone"
}
[/block]
1. Navigate to **My Profile** under the **User Icon** in the top right corner of any page.
2. Click the **Edit icon** next to the time zone under your contact information.
3. Select the desired time zone from the drop-down list.
4. Click **Save changes**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5ea6b8d-time-zone-edit.png",
        "time-zone-edit.png",
        1472,
        376,
        "#efeff0"
      ]
    }
  ]
}
[/block]
#Changing the Schedule-Level Time Zone 

When you create a new schedule, it will be set to the [account-level time zone](https://support.pagerduty.com/docs/time-zones#section-changing-the-account-level-time-zone) by default. You may, however, choose to edit the schedule to be in a different time zone than the account's. If you are changing your schedule's time zone and it has users from varying time zones, please read the following section on how [Daylight Savings Time](https://support.pagerduty.com/docs/time-zones#section-daylight-savings-time) may affect your schedules. 

To change a schedule's time zone:

1. Navigate to **People** :fa-arrow-right: **On-Call Schedules** :fa-arrow-right: :fa-cog: next to your desired schedule :fa-arrow-right: **Edit**. 
2. Under the schedule's Name and Description fields, you will see a **Time Zone** dropdown. Select your preferred time zone. 
3. Click **Save Changes**. 

#Daylight Savings Time

If your account has users in different time zones, there are a few things to keep in mind with respect to how [Daylight Savings Time (DST)](https://en.wikipedia.org/wiki/Daylight_saving_time) may impact your schedules:

* The default time zone setting of a schedule will match the [account-level time zone](https://support.pagerduty.com/docs/time-zones#section-changing-the-account-level-time-zone). You can, however, [edit the schedule's time zone](https://support.pagerduty.com/docs/editing-schedules#section-edit-schedule-time-zone-settings) if you do not wish for it to match the account’s time zone.
* Users who are not in the same time zone as the schedule will still *view* the times on that schedule as being in their time zone. For example, if an account is set to USA EST and it is 9:00, but user Marge has set her account to USA PST, she will *view* the schedule time as being 6:00.
* In the case of DST discrepancies between users and schedules, the above details still apply. These users should take note of the following and the potential impact to their schedules:
   * **Example 1**: If a schedule is set to USA EST (observing DST) at 2:00, but user Jon has his account set to [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) (not observing DST) at 7:00, when DST begins in the schedule's time zone, his view of his schedule will advance to 8:00, but his clock will remain at 7:00.
   * **Example 2**: If a schedule is set to UTC (not observing DST) at 7:00 and user Emily’s account is set to US EST at 2:00, when DST begins in Emily’s time zone, her clock will advance to 3:00, but her view of her schedule will remain at 2:00.
[block:callout]
{
  "type": "success",
  "body": "When creating schedules with users from varying time zones, we recommend noting the time zone of the schedule and communicating to any users who may be affected by its observance or non-observance of DST.",
  "title": "Best Practices"
}
[/block]