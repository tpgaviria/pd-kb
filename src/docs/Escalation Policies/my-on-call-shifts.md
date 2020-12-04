---
title: "My On-Call Shifts"
slug: "my-on-call-shifts"
hidden: false
createdAt: "2020-06-17T19:42:43.463Z"
updatedAt: "2020-10-08T23:26:58.993Z"
---
My On-Call Shifts allows users to view their shifts across all escalation policies and schedules in a single, easy-to-use view. This feature displays if a user is on call now, a list of their associated shifts and what their schedule is for the upcoming weeks and months. Users can now easily create override shifts across multiple schedules because all of the shifts are accessible in one place. My On-Call Shifts is also available as a widget on the right side of the Incidents page, displaying their current shift, and when they are on call next. 

# My On-Call Shifts Page

To access the My On Call Shifts page:

Navigate to **People** :fa-arrow-right: **My On Call Shifts**. You will see shifts you are currently on-call for on the upper left, a list of your shifts below and a calendar of your upcoming shifts to the right.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/341be83-my-on-call-shifts-overview.png",
        "my-on-call-shifts-overview.png",
        1003,
        698,
        "#e1e2e8"
      ]
    }
  ]
}
[/block]
## Shift Types

Shifts types will be denoted by the following:

* Recurring schedule shifts will be in a **solid color**.
* Shifts that you are always on call for will be in a **diagonal line pattern**. 

## Parameters

You can click the left dropdown to view by:

* Month
* Week
* Day
* List

## Time Zone Views

You may change the time zone in which you view your shifts by clicking the **time zone dropdown** on the left side of the screen. 

## Edit Escalation Policy Layers and Save Settings

To add or remove escalation policy layers, click the **eye icon** to the right of the layer in your My On-Call Shifts list. These settings will be saved if you navigate away from the page. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/91c6635-my-on-call-shifts-edit-shift-view.png",
        "my-on-call-shifts-edit-shift-view.png",
        290,
        166,
        "#dddbe1"
      ]
    }
  ]
}
[/block]
## My On-Call Shifts Overrides

There are two ways to create overrides in My On-Call Shifts:

* [Using the Multi-Overrides tool](https://support.pagerduty.com/docs/my-on-call-shifts#multi-overrides-tool)
* [Clicking the Create Override button](https://support.pagerduty.com/docs/my-on-call-shifts#create-override-button)

### Multi-Overrides Tool
[block:callout]
{
  "type": "info",
  "title": "Notes",
  "body": "* If you wish to delete any overrides made with the Multi-Overrides tool, you will still need to individually delete them.\n* Multi-Overrides can only be made up to 3 months out from the current date.
</Callout>


1. Navigate to **People** :fa-arrow-right: **My On-Call Shifts**. You will see a calendar with current on-call shifts. Navigate to the dates and shifts that you would like to override. When you hover over dates, you will see drag icon arrows appear; **click and drag over the dates and shifts** you wish to override.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/698e62d-multi-overrides-drag-dates.png",
        "multi-overrides-drag-dates.png",
        470,
        286,
        "#bbcbd0"
      ]
    }
  ]
}
[/block]
2. A modal will appear with a summary of the shifts being overridden. **Select a user** from the **Who should take this shift?** dropdown. Ensure that the start and end dates/times, as well as the on-call shifts are correct. You may optionally edit the dates/times or uncheck shifts that are not desired in this step.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1cf7f4f-multi-overrides-create-override.png",
        "multi-overrides-create-override.png",
        1148,
        586,
        "#a3a7a8"
      ]
    }
  ]
}
[/block]
3. Click **Create Override**.

### Create Override Button

1. Navigate to **People** :fa-arrow-right: **My On-Call Shifts** and click **Create Override**.
2. Select the user who you would like to override your shift from the **Who should take this shift?** dropdown. *Optional*: You may edit the **START** and **END** days and times if necessary.
3. Click **Create Override**.

# My On-Call Shifts Widget

To access the My On-Call Shifts widget:

Navigate to the **Incidents** page and the widget will be on the right side of the screen. You will see shifts you are currently on-call for with dates and times, a list of your shifts and shifts that are upcoming with dates and times.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cebd1e6-my-on-call-shifts-widget.png",
        "my-on-call-shifts-widget.png",
        1229,
        586,
        "#f2f2f1"
      ]
    }
  ]
}
[/block]