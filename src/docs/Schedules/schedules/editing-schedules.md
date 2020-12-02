---
title: "Editing Existing Schedules"
slug: "editing-schedules"
excerpt: "Add users or create overrides on a schedule. Pause a schedule or restore previous versions."
hidden: false
createdAt: "2017-05-16T16:08:31.371Z"
updatedAt: "2020-10-09T20:21:13.138Z"
---
As new users join and other users leave your on-call rotations, you will need to edit your on-call schedules so that the right people are on-call and notified at the right times.

Any changes made to a schedule (including adding and removing users) won't affect the historical record of that schedule — changes will only apply to future dates and times. Make sure to check the effective date for changes to make sure that the schedule rotates on the right date and time when you add or remove a user.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Any changes made to a schedule (including adding and removing users) won't affect the historical record of that schedule — changes will only apply to future dates and times. Make sure to check the effective date for changes to make sure that the schedule rotates on the right date and time when you add or remove a user. If you want to revert a schedule to a previous state, please visit [this section](/docs/editing-schedules#section-restore-a-schedule-to-a-previous-version)."
}
[/block]
*If you are creating a schedule for the first time, please visit our article on [Schedule Basics](/docs/schedules).*
[block:api-header]
{
  "title": "Adding Users to Existing Schedules"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "All users, with the exception of Limited and Full Stakeholders, can be added to schedules. \n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
To add additional users to an existing on-call schedule:

1. Navigate to  **People** and select **On-Call Schedules**.
2. Click the gear icon for an existing on-call schedule and select **Edit**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a279bf2-editing-schedules-edit-schedule.png",
        "editing-schedules-edit-schedule.png",
        2120,
        806,
        "#efeff3"
      ]
    }
  ]
}
[/block]
3. Click **Select a User** to choose a user's name from the dropdown or search for it to add a user to the on-call schedule layer. When you click the user’s name, it will add them to the schedule.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7b3318f-editing-schedules-add-new-user.png",
        "editing-schedules-add-new-user.png",
        700,
        528,
        "#b7c0c8"
      ]
    }
  ]
}
[/block]
4. Repeat until required users are added. Users will move through the rotation in the top-to-bottom order they are listed in. If they are in the wrong rotation order, you can also drag and drop users into a different order.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/393263f-editing-schedules-move-user.png",
        "editing-schedules-move-user.png",
        700,
        500,
        "#aab6bb"
      ]
    }
  ]
}
[/block]
5. Click **Save Changes** in the upper right hand corner of the screen.

##Removing Users From Existing Schedules

To permanently remove a user from an on-call schedule:

1. Navigate to  **People** and select **On-Call Schedules**.
2. Click the gear icon for the existing on-call schedule and select **Edit**.
3. Click the **X** next to the user's name that you want to remove.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/17f08c7-editing-schedules-remove-user.png",
        "editing-schedules-remove-user.png",
        700,
        502,
        "#aab7bc"
      ]
    }
  ]
}
[/block]
4. Click **Save Changes** in the upper right hand corner.

# Copy a Schedule

Copying an existing schedule to make a new one with the same users and settings is an easy way to create new schedules at-scale. 

To copy a schedule:

1. Navigate to **People** :fa-arrow-right: **On-Call Schedules** :fa-arrow-right: click the :fa-cog: icon to the right of the schedule that you want to copy and select **Copy**. 
2. This will create a new schedule that copies all users and settings from the previous schedule. Add an **On-call schedule name** and make any edits necessary to the new schedule. 
3. Click **Create Schedule** to save. 
[block:api-header]
{
  "title": "Create and Delete Overrides"
}
[/block]
Overrides are used to make manual one-time adjustments to on-call schedules. Overrides are most commonly used when a user is sick, goes on vacation, or would like to swap on-call periods with someone else. 

Scheduling an override creates an override layer over the existing schedule. Scheduled overrides are displayed beneath your schedule layers, as the lowest layer before the Final Schedule (the lowest layer always takes precedence). 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d0607eb-editing-schedules-override-overview.png",
        "editing-schedules-override-overview.png",
        2116,
        898,
        "#e8e9ec"
      ]
    }
  ]
}
[/block]
You can create overrides within the [PagerDuty web UI](https://support.pagerduty.com/docs/editing-schedules#section-create-overrides-in-the-web-ui), or you can create them [using the REST API](https://support.pagerduty.com/docs/editing-schedules#section-create-overrides-using-the-rest-api). 
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "All users, with the exception of Restricted Access, Observers, Limited Stakeholders and Full Stakeholders, can create Overrides. \n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
##Create Overrides in the Web UI

There are two places to schedule overrides on existing schedules in PagerDuty: 

- [On a specific schedule shift.](https://support.pagerduty.com/docs/editing-schedules#section-override-a-specific-schedule-shift)
- [On any span of time on a schedule.](https://support.pagerduty.com/docs/editing-schedules#section-override-any-span-of-time-on-a-schedule)

###Override a specific schedule shift

Scheduling an override by clicking directly on the shift you'd like to override will pre-populate the override window with the effective dates and times, without you having to manually punch them in.

1. Navigate to **People** and select **On-Call Schedules**.
2. From the **On-Call Schedules** page or from the individual schedule's edit page, click directly on the shift that you would like to override. If need be, you can tab forward by days, weeks, and months to locate the shift you would like to override.
3. The **Schedule an Override** window will be pre-populated with the times of the shift that you just clicked. Make the necessary changes to the **Person** you're adding for the override and click **Create Override** and the override will immediately appear on the schedule.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e182490-editing-schedules-create-override.png",
        "editing-schedules-create-override.png",
        1118,
        812,
        "#f3f5f4"
      ]
    }
  ]
}
[/block]
###Override any span of time on a schedule

1. Navigate to **People** and select **On-Call Schedules**.
2. Click the gear icon for the desired on-call schedule and select **Schedule an Override**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/60e3651-editing-schedules-override-from-edit-menu.png",
        "editing-schedules-override-from-edit-menu.png",
        2116,
        800,
        "#eff0f2"
      ]
    }
  ]
}
[/block]
3. Or you can click into a schedule and select **Schedule an Override**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f73ef0-editing-schedules-override-from-schedule-page.png",
        "editing-schedules-override-from-schedule-page.png",
        540,
        670,
        "#f0dfdf"
      ]
    }
  ]
}
[/block]
4. The override window will be a pop-up. Select the **Person** and **start/end times** of the override. Click **Create Override**.

## Create Overrides in My On-Call Shifts

Follow [our documentation on My On-Call Shifts](https://support.pagerduty.com/docs/my-on-call-shifts#my-on-call-shifts-overrides) to create overrides from this feature.

##Create Overrides Using the REST API

An example Python script to schedule overrides for a user going on vacation can be found here: [vacation_overrides.py](https://github.com/PagerDuty/public-support-scripts/tree/master/overrides_bulk_operations).

To learn more about how to interact with the PagerDuty API, we recommend checking out the collection of scripts our community has created on our [Knowledge Base](/docs/third-party-tools). Our developer docs also provide more information on [creating](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules/post_schedules_id_overrides) and [deleting](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules/delete_schedules_id_overrides_override_id) overrides using the REST API.

##Delete an Override

You can delete upcoming overrides on your schedule in the event that the override is no longer needed. If an override is deleted during the middle of the scheduled shift, the regular schedule will resume from the time of the override's deletion. You cannot delete past overrides; only present or future ones.

To delete an override:

1. While on the **On-Call Schedules** page, click on the name of the schedule *or* select **View** after clicking on the gear for the schedule you would like to change.
2. In the **Upcoming Overrides** list, click the **X** to delete the override.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac811ba-editing-schedules-upcoming-overrides.png",
        "editing-schedules-upcoming-overrides.png",
        540,
        966,
        "#e9e1db"
      ]
    }
  ]
}
[/block]
#Edit Schedule Time Zone Settings

When you create a new schedule, it will be set to the [account-level time zone](https://support.pagerduty.com/docs/time-zones#section-changing-the-account-level-time-zone) by default. Please follow the instructions in our section [Changing the Schedule-Level Time Zone](https://support.pagerduty.com/docs/time-zones#section-changing-the-schedule-level-time-zone) if you would like your schedule to have a different time zone than the account. 
[block:api-header]
{
  "title": "Pause or Deactivate an On-call Schedule"
}
[/block]
Sometimes you might want to stop a schedule from being used without deleting it.

For example:

- If the schedule is a draft which you are not ready to implement. (Note, however, that you can set an effective date for future changes without deactivating your current schedule)

- If the schedule needs to be used regularly but only for special events, such as on-call shadowing.

To prevent an on-call schedule from being used, you will want to either remove the schedule from any escalation policies it is assigned to, or [change the escalation policy used by your services](https://support.pagerduty.com/docs/escalation-policy-vs-schedule#section-pause-or-deactivate-an-on-call-schedule) to one that does not use the schedule.

##Option 1: Remove a Schedule from an Escalation Policy

The right sidebar will display any escalation policies where the schedule is in use.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c63220e-editing-schedules-eps.png",
        "editing-schedules-eps.png",
        534,
        1180,
        "#ece5e1"
      ]
    }
  ]
}
[/block]
Click on the **escalation policy** you want to remove the schedule from, then click **Edit Escalation Policy** on the top right corner of the page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/620058e-editing-schedules-edit-ep.png",
        "editing-schedules-edit-ep.png",
        494,
        74,
        "#eaeaea"
      ]
    }
  ]
}
[/block]
Find your **schedule** in the **Notify the following users or schedules** field, then click the **X button** on the schedule object to remove it from the rule.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/82e0f71-editing-schedules-delete-schedule-from-ep.png",
        "editing-schedules-delete-schedule-from-ep.png",
        886,
        296,
        "#f0efef"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "If the schedule is the only target (person or schedule) in the escalation rule, you will need to click the **X button** on the rule to delete the entire rule, as each rule must contain at least one target.",
  "title": "Note"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": []
    }
  ]
}
[/block]
Click **Save** when you are done, and repeat this process for any additional escalation policies this schedule is used by.

##Option 2: Change the Escalation Policy for a Service

Please visit our article on [Escalation Policies and Services](https://support.pagerduty.com/docs/escalation-policy-vs-schedule#section-pause-or-deactivate-an-on-call-schedule) for instructions on how to change the escalation policy used by a service. This will ensure that incidents triggered for the service do not alert the schedule you want to deactivate.
[block:api-header]
{
  "title": "Restore a Schedule to a Previous Version"
}
[/block]
If you or another user alters a schedule in an undesired way, you can quickly revert a schedule back to a previously saved version. This feature also allows you to see when each saved change was made.

To revert a schedule:

1. Click on **People** :fa-arrow-right: **On-Call Schedules**.
2. Click on the name of the schedule that you wish to revert to open its details.
3. On the right hand side of the page, click on **Revert this Schedule** to view the recent changes made to that schedule.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cbb24f1-editing-schedules-revert-schedule.png",
        "editing-schedules-revert-schedule.png",
        528,
        1006,
        "#eef1f7"
      ]
    }
  ]
}
[/block]
4. Once you select one of the options from the dropdown, you will be brought to the Edit Schedule page for that version of the schedule. From here you may make additional edits, or click on **Revert Schedule** in the upper right corner of the page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/197e6bc-editing-schedules-confirm-revert.png",
        "editing-schedules-confirm-revert.png",
        2710,
        278,
        "#e2e9e6"
      ]
    }
  ]
}
[/block]
##Limitations
Currently only changes made to the schedule layers are saved and can be reverted. Overrides will *not* be affected if you revert a schedule. For now, the user's name making each change is omitted. However, this is something being considered for a later release.