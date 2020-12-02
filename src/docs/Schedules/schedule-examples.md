---
title: "Schedule Examples"
slug: "schedule-examples"
excerpt: "Common use cases for more complex schedules"
hidden: false
createdAt: "2017-05-18T15:08:33.167Z"
updatedAt: "2020-10-09T20:46:27.695Z"
---
[block:api-header]
{
  "title": "Example 1: Complex Irregular Schedules"
}
[/block]
This schedule is for teams that rotate 12-hour shifts, on for one week and then off for a few.
- [Ex1. Schedule Requirements](/docs/schedule-examples#section-ex1-schedule-requirements)
- [Ex1. Schedule Configuration](/docs/schedule-examples#section-ex1-schedule-configuration)
- [Ex1. Final Schedule](/docs/schedule-examples#section-ex1-final-schedule)

##Ex1. Schedule Requirements

This schedule has 6 users that alternate shifts every other week. One week, they work Sunday-Tuesday-Thursday-Saturday (STTS). The next week, they work Monday-Wednesday-Friday (MWF). There are a total of two six-week rotations, as everyone rotates through the MWF schedule, and one staggered by three weeks, where they work through STTS.

##Ex1. Schedule Configuration

Layer 1 rotates weekly with a handoff time at the beginning of the first time restriction. It will cover the STTS days by restricting on-call duty to specific *times-of-the-week*.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac9acf3-schedule-examples-complex-irregular-layer1.png",
        "schedule-examples-complex-irregular-layer1.png",
        2124,
        764,
        "#e3e1e1"
      ]
    }
  ]
}
[/block]
Layer 2 rotates weekly with a handoff time at the beginning of its first time restriction. It will cover MWF by restricting on-call duty to specific times-of-the-week.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a97e66a-schedule-examples-complex-irregular-layer2.png",
        "schedule-examples-complex-irregular-layer2.png",
        2120,
        762,
        "#e4e2e1"
      ]
    }
  ]
}
[/block]
##Ex1. Final Schedule
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e9cae39-schedule-examples-complex-irregular-final-layer.png",
        "schedule-examples-complex-irregular-final-layer.png",
        2126,
        842,
        "#ebeaea"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Example 2: Complex Schedule for 2 Users on a 2-Day Rotation with Separate Weekends"
}
[/block]
The example below shows a complex schedule for two users that are on a two-day rotation. They are on call in the evenings from 17:00 till 8:00 in the morning. On Saturday and Sunday, responders are on-call for 24 hours from 08:00 – 08:00 the next day.
- [Ex2. Schedule Requirements](/docs/schedule-examples#section-ex2-schedule-requirements)
- [Ex2. Configuration](/docs/schedule-examples#section-ex2-configuration)
- [Ex2. Final Schedule](/docs/schedule-examples#section-ex2-final-schedule)

##Ex2. Schedule Requirements
During the weekdays, User 1 and User 2 are only on call from 17:00 to 08:00. Then they take turns covering the weekends from Friday at 17:00 to Monday at 08:00. Shifts are:
- User 1 is on-call Tuesday and Wednesday from 17:00 to 08:00.
- User 2 is on-call Thursday and Friday from 17:00 to 08:00.
- User 1 is on-call Friday at 5pm to Saturday at 08:00 and Saturday at 08:00 to Sunday at 08:00.
- User 2 then is on-call Sunday at 8am to Monday 8am, and Monday 17:00 to Tuesday 08:00.

##Ex2. Configuration
Create four layers, each with its own weekly rotation that fulfills one of the requirements listed above.

The handoff time should be the day and time that the first restriction begins. The effective date of change should be the first date that that layer's restriction begins on. *This means that the date in Step 3 for each layer will be different.*
- User 1 is on-call Tuesday and Wednesday from 17:00 to 08:00.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/13face7-schedule-examples-2day-layer1.png",
        "schedule-examples-2day-layer1.png",
        2124,
        742,
        "#efecf2"
      ]
    }
  ]
}
[/block]
- User 2 is on-call Thursday and Friday from 17:00 to 08:00.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ff41ff-schedule-examples-2day-layer2.png",
        "schedule-examples-2day-layer2.png",
        2122,
        746,
        "#efecf2"
      ]
    }
  ]
}
[/block]
- User 1 is on-call Saturday at 8:00 to Sunday at 09:00.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a706470-schedule-examples-2day-layer3.png",
        "schedule-examples-2day-layer3.png",
        2124,
        744,
        "#f0edf3"
      ]
    }
  ]
}
[/block]
- User 2 then is on-call Sunday at 8am to Monday 08:00, and Monday 17:00 to Tuesday 08:00.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f79f43a-schedule-examples-2day-layer4.png",
        "schedule-examples-2day-layer4.png",
        2126,
        746,
        "#efecf2"
      ]
    }
  ]
}
[/block]
##Ex2. Final Schedule
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ffb705b-schedule-examples-2day-final-schedule.png",
        "schedule-examples-2day-final-schedule.png",
        2124,
        1090,
        "#f2edf3"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Example 3: Complex Split Shift Rotation"
}
[/block]
This example shows how to create a time-restricted 4-person rotation. Two users split each shift.
- [Ex3. Schedule Requirements](/docs/schedule-examples#section-ex3-schedule-requirements)
- [Ex3. Configuration](/docs/schedule-examples#section-ex3-configuration)
- [Ex3. Final Schedule](/docs/schedule-examples#section-ex3-final-schedule)

##Ex3. Schedule Requirements
These users are on-call between 00:00-10:00 with a shift length of 5 hours. After 5 hours, the next user comes on-call to cover the schedule until 10:00. 

##Ex3. Configuration
1. Add four users to the schedule in Step 1.
2. Click the Restrict on-call shifts to specific times option. Restrict the schedule to 00:00-10:00.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0437200-schedule-examples-split-shift-restrictions.png",
        "schedule-examples-split-shift-restrictions.png",
        1120,
        878,
        "#f3f3f2"
      ]
    }
  ]
}
[/block]
3. Create a custom rotation type with a shift length of 12 hours. Set the handoff time to be halfway between the shift (05:00). 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/503b078-schedule-examples-split-shift-layer1.png",
        "schedule-examples-split-shift-layer1.png",
        2120,
        910,
        "#edeaeb"
      ]
    }
  ]
}
[/block]
##Ex3. Final Schedule
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8124097-schedule-examples-split-shift-final-schedule.png",
        "schedule-examples-split-shift-final-schedule.png",
        2126,
        720,
        "#f2f0f0"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Example 4: Complex Schedule with Restrictions"
}
[/block]
In this example, User 5 and User 6 trade off the early morning shift, User 3 takes the morning, and User 4 takes the evening shift during a four day week. User 1 and User 2 take shifts on the elongated weekend:

- Monday: User 5 for 7 hours, then User 3 for 6 hours, then User 4 for 11 hours.
- Tuesday: User 6 (7 hrs), User 3 (6hrs), User 4 (11hrs).
- Wednesday: User 5 (7hrs), User 3 (6hrs), User 4 (11 hrs).
- Thursday: User 6 (7 hrs), User 3 (6hrs), User 4(11 hrs).
- Friday: User 1 (12 hrs), User 2 (12 hrs).
- Saturday: User 1 (12 hrs), User 2 (12 hrs).
- Sunday: User 1 (12 hrs), User 2 (12 hrs).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b9620fd-schedule-examples-complex-restrictions-month-view.png",
        "schedule-examples-complex-restrictions-month-view.png",
        2120,
        1062,
        "#dacdce"
      ]
    }
  ]
}
[/block]
User 1 and User 2 are easy to schedule because they have consistent shifts. Create a layer for each remaining user and restrict on-call duty to specific times of the week, based on their scheduled shifts.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a7261ff-schedule-examples-complex-restrictions-layer12.png",
        "schedule-examples-complex-restrictions-layer12.png",
        2122,
        1210,
        "#f0eff0"
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
        "https://files.readme.io/6717fba-schedule-examples-complex-restrictions-layer34.png",
        "schedule-examples-complex-restrictions-layer34.png",
        2120,
        1188,
        "#f4f4f4"
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
        "https://files.readme.io/1b84ed1-schedule-examples-complex-restrictions-layer5.png",
        "schedule-examples-complex-restrictions-layer5.png",
        2122,
        540,
        "#f2f3f0"
      ]
    }
  ]
}
[/block]
The result looks like this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d5b7bb-schedule-examples-complex-restrictions-final-schedule.png",
        "schedule-examples-complex-restrictions-final-schedule.png",
        2122,
        1102,
        "#f2efef"
      ]
    }
  ]
}
[/block]
You can overlap layers to make the schedule simpler. If you put the original User 1 and User 2 layer on the bottom, you can simplify some of the restrictions. User 3 and User 4 now only need to be restricted by time of day, and so on.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2da2fb4-schedule-examples-complex-restrictions-alt-layer12.png",
        "schedule-examples-complex-restrictions-alt-layer12.png",
        2198,
        1174,
        "#f1f4f2"
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
        "https://files.readme.io/32e6174-schedule-examples-complex-restrictions-alt-layer34.png",
        "schedule-examples-complex-restrictions-alt-layer34.png",
        2200,
        1176,
        "#f0f0f2"
      ]
    }
  ]
}
[/block]
##Ex4. Final Schedule
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8fd4f45-schedule-examples-complex-restrictions-alt-final.png",
        "schedule-examples-complex-restrictions-alt-final.png",
        2122,
        1090,
        "#edecec"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Example 5: Create Primary and Secondary On-Call Schedules"
}
[/block]
Creating primary and secondary schedules is helpful if the primary responder misses a notification. In this example we are using a primary and secondary schedule.  You may add more backup schedules to an escalation policy as needed.

- [Create a Primary On-Call Schedule](/docs/schedule-examples#section-create-a-primary-on-call-schedule)
- [Create a Secondary On-Call Schedule](/docs/schedule-examples#section-create-a-secondary-on-call-schedule)
- [Create an Escalation Policy](/docs/schedule-examples#section-create-an-escalation-policy)

##Create a Primary On-Call Schedule
1. Go to **People** :fa-arrow-right: **On-Call Schedules**, and click **New On-Call Schedule**.
2. Select a **Time Zone**.
3. Enter a schedule name.
4. Complete steps 1-3:
    1. Add **Users** from the drop-down list.
    2. Select the **Rotation Type** from the drop-down menu.
    3. Set the schedule **Start Date** and **Time**.
5. Preview the schedule and click **Create Schedule**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0c57f8c-schedule-examples-primary-secondary-primary.png",
        "schedule-examples-primary-secondary-primary.png",
        2124,
        716,
        "#e6e1e2"
      ]
    }
  ]
}
[/block]
##Create a Secondary On-Call Schedule
1. Repeat the steps from the primary on-call schedule set up.
2. Add users in the secondary on-call order.
3. Complete steps 2 and 3 and click **Create Schedule**. Note that the secondary on-call rotation is different from the primary on-call rotation.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ea4e389-schedule-examples-primary-secondary-secondary.png",
        "schedule-examples-primary-secondary-secondary.png",
        2124,
        716,
        "#e9e1e3"
      ]
    }
  ]
}
[/block]
##Create an Escalation Policy
1. Go to **People** :fa-arrow-right: **Escalation Policies**.
2. Click **New Escalation Policy**.
3. Enter an **Escalation Policy Name**.
4. Select **Primary Schedule** from the drop down list.
5. Enter **Escalation Time Out**, if applicable.
6. Click **Add a new Escalation Rule**.
7. Select **Secondary Schedule** from the drop down list.
8. Click **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a71e69d-schedule-examples-primary-secondary-ep.png",
        "schedule-examples-primary-secondary-ep.png",
        2212,
        1328,
        "#f5f5f5"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Example 6: Follow-the-Sun Schedule"
}
[/block]
The "follow-the-sun" schedule is commonly used for international teams in different timezones and ensures 24/7 coverage. This  schedule has three different sets of users on-call at different times of the day and the week. In this example we have a US team and an India team.
- [Ex6. Schedule Requirements](/docs/schedule-examples#section-ex6-schedule-requirements)
- [Base Schedule](/docs/schedule-examples#section-base-schedule)
- [Team 1 (US)](/docs/schedule-examples#section-team-1-u-s-)
- [Team 2 (India)](/docs/schedule-examples#section-team-2-india-)
- [Team 3 (Weekend)](/docs/schedule-examples#section-team-3-weekend-)
- [Ex6. Final Schedule](/docs/schedule-examples#section-ex6-final-schedule)

##Ex6. Schedule Requirements
In this schedule, we'll have three rotating shifts (or layers). The first layer, for users in the US, will consist of User 1 and User 2. They will be on-call during weekdays from 08:00 – 20:00 US Pacific Time (PT) and they will rotate on a weekly basis.

The India layer will be User 3 and User 4. They will be on-call weekdays starting at 20:00 PT until 08:00 PT the next day.

The third layer will cover the weekends, and all 4 users will be on it. The person on-call during the weekend will cover the whole weekend and will rotate weekly. For clarity's sake, let's define weekend to start at Friday 20:00 PT until Sunday 20:00 PT.

##Base Schedule
To create a schedule:
1. Go to **People** :fa-arrow-right: **Schedules**, then click **New On-Call Schedule**.
2. Enter a **Name** for the schedule and select a time zone. All times that you will select will be local to this time zone.

##Team 1 (US)
1. Add the US users (users 1 and 2) by clicking on the **Add User** link **Layer 1**.
2. Select **weekly** as the rotation type, set the **handoff time** to the beginning of your shift, and select **on-call shift to specific times...** checkbox to restrict on-call shifts for this team.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9cd8204-schedule-examples-follow-sun-layer1.png",
        "schedule-examples-follow-sun-layer1.png",
        2124,
        748,
        "#f0edf2"
      ]
    }
  ]
}
[/block]
3. Restrict on-call duty to specific *times-of-the-day* and enter 08:00 to 20:00.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/31ec74e-schedule-examples-follow-sun-layer1-restrictions.png",
        "schedule-examples-follow-sun-layer1-restrictions.png",
        1118,
        874,
        "#f4f5f4"
      ]
    }
  ]
}
[/block]
4. Click **Apply** to apply time restrictions to the layer.
[block:callout]
{
  "type": "info",
  "body": "You will not need to restrict this layer to weekdays as the weekend rotation in Layer 3 will replace weekend days on the final schedule. This follows the rule that the lowest layer has precedence over any higher layer.",
  "title": "Note"
}
[/block]
##Team 2 (India)
1. Click on the **Add Another Layer** button and add users 3 and 4 to **Layer 2**.
2. Select **weekly** as the rotation type and enter the start of the shift as the **handoff time**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5caa473-schedule-examples-follow-sun-layer2.png",
        "schedule-examples-follow-sun-layer2.png",
        2124,
        746,
        "#f1f0ec"
      ]
    }
  ]
}
[/block]
3. Restrict the *times-of-the-day* for the on-call shifts to 20:00 – 08:00 (8pm to 8am next day). 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6cbe7f1-schedule-examples-follow-sun-layer2-restrictions.png",
        "schedule-examples-follow-sun-layer2-restrictions.png",
        1118,
        874,
        "#f4f5f4"
      ]
    }
  ]
}
[/block]
4. Click **Apply** to restrict the layer.

##Team 3 (Weekend)
1. Click on the **Add Another Layer** button and add all 4 users to **Layer 3**.
2. Select **weekly** as the rotation type and set the **handoff time** to the beginning of the shift. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ecc523f-schedule-examples-follow-sun-layer3.png",
        "schedule-examples-follow-sun-layer3.png",
        2122,
        914,
        "#edeaea"
      ]
    }
  ]
}
[/block]
3. Restrict the *times-of-the-week* for the on-call shifts to be from Friday 20:00 to Sunday 20:00.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ca01241-schedule-examples-follow-sun-layer3-restrictions.png",
        "schedule-examples-follow-sun-layer3-restrictions.png",
        1116,
        874,
        "#f4f5f4"
      ]
    }
  ]
}
[/block]
4. Click **Apply** to restrict the layer.

##Ex6. Final Schedule
In the upper-right corner, click **Create Schedule** to create the schedule.
###Timeline View
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2c373cb-schedule-examples-follow-sun-final-schedule.png",
        "schedule-examples-follow-sun-final-schedule.png",
        2124,
        964,
        "#eee9ea"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Example 7: Inverse Schedules on an Escalation Policy"
}
[/block]
If you have 2 or more users that rotate primary and secondary on-call shifts, you will want to create two on-call schedules and add each schedule to a separate level of an escalation policy.

Schedule example articles:
- [Ex7. Schedule Requirements](/docs/schedule-examples#section-ex7-schedule-requirements)
- [Ex7. Configuration](/docs/schedule-examples#section-ex7-configuration)
- [Ex7. Escalation Policy](/docs/schedule-examples#section-ex7-escalation-policy)

##Ex7. Schedule Requirements
This schedule has 2 users on-call. When User 1 is the first point of escalation, User 2 is the backup, receiving all incidents that User 1 does not respond to. When User 2 is the first point of escalation, User 1 is the backup, receiving all incidents that User 2 does not respond to.

##Ex7. Configuration
You will need to create 2 schedules. One for the escalation policy level 1, and the another for level 2.

###Schedule 1:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/663d9da-schedule-examples-inverse-layer1.png",
        "schedule-examples-inverse-layer1.png",
        2180,
        1280,
        "#f2f1f4"
      ]
    }
  ]
}
[/block]
###Schedule 2:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fa9f66e-schedule-examples-inverse-2.png",
        "schedule-examples-inverse-2.png",
        2156,
        1270,
        "#f2f1f4"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "You can use the **Copy this Schedule** button to clone a schedule, and then re-order the users. This option is under the :fa-cog: icon on the right side of the page.",
  "title": "Tip"
}
[/block]
##Ex7. Escalation Policy
Go to **People** :fa-arrow-right: **Escalation Policies** and either create a **New Escalation Policy**, or edit an existing one. Add Schedule 1 to Level 1 of the escalation policy. Then add Schedule 2 to Level 2 of the escalation policy.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a5b6a85-schedule-examples-inverse-ep.png",
        "schedule-examples-inverse-ep.png",
        1386,
        1318,
        "#f4f5f5"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Example 8: Schedule Users On-call Every Other Week"
}
[/block]
If you have a schedule where users are on-call every other week, you will need to create a layer within your schedule that reflects this type of rotation.
- [Ex8. Schedule Requirements](/docs/schedule-examples#section-ex8-schedule-requirements)
- [Ex8. Configuration](/docs/schedule-examples#section-ex8-configuration)
- [Ex8. Final Schedule](/docs/schedule-examples#section-ex8-final-schedule)

##Ex8. Schedule Requirements
This schedule has 4 users. 2 users are on-call during the weekdays. The other 2 are on call during the weekend. They rotate on a weekly basis. 

##Ex8. Configuration
Layer 1 will have weekday rotations. User 1 and 2 will rotate on a weekly basis with a handoff time Monday 00:00.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e1bb423-schedule-examples-every-other-layer1.png",
        "schedule-examples-every-other-layer1.png",
        2124,
        746,
        "#f0eef3"
      ]
    }
  ]
}
[/block]
Click **Add Another Layer** to create a second layer for the weekend. Layer 2 has Users 3 and 4 on a weekly rotation. Their handoff time is Saturday 00:00. Restrict this layer to the weekend.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c347448-schedule-examples-every-other-layer2.png",
        "schedule-examples-every-other-layer2.png",
        2124,
        746,
        "#f0f0ec"
      ]
    }
  ]
}
[/block]
##Ex8. Final Schedule
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e6590b1-schedule-examples-every-other-final-schedule.png",
        "schedule-examples-every-other-final-schedule.png",
        2124,
        840,
        "#e8e1e7"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Example 9: Weekday — Weekend Schedule"
}
[/block]
A weekend/weekday schedule is any schedule which requires one rotation for the working week and another for the weekend. In this case, we use one layer for each group, respectively.

To get started, navigate to **People** :fa-arrow-right: **Schedules** and click **New On-Call Schedule**. Give your schedule a name.

##Layer 1: Weekday

The first layer is the weekday layer. Each member of this layer is on-call from 00:00 Monday morning to 00:00 Saturday morning in a weekly rotation. The easiest way to schedule this is to create a [basic weekly](/docs/schedules#section-create-a-basic-weekly-schedule) rotation where the handoff time is 00:00 with a weekly rotation.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a2169b0-schedule-examples-weekday-weekend-layer1.png",
        "schedule-examples-weekday-weekend-layer1.png",
        2122,
        744,
        "#f0edf2"
      ]
    }
  ]
}
[/block]
##Layer 2: Weekend
1. To create the weekend schedule, click **Add Another Layer** below the previous one. The second layer will be the *weekend* layer.
2. Add the layer members and set the rotation type as **daily** with a handoff time of **00:00** so users start at midnight.
3. Since this layer is only on Saturday and Sunday, you will need to click the check box to **Restrict on-call shifts to specific times**. Restrict on-call shift to *times-of-the-week* from Saturday 00:00 – Monday 00:00 to create the weekend rotation. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/57fd317-schedule-examples-weekday-weekend-layer2-restrictions.png",
        "schedule-examples-weekday-weekend-layer2-restrictions.png",
        1114,
        872,
        "#f4f5f4"
      ]
    }
  ]
}
[/block]
Since the bottom layer takes precedence over other layers, the Final Schedule shows that User 1 and 2 take turns being on call Monday-Friday on a weekly basis. User 3 goes on call Saturday at 00:00. User 4 goes on call Sunday at 00:00. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ba1c82f-schedule-examples-weekday-weekend-final-schedule.png",
        "schedule-examples-weekday-weekend-final-schedule.png",
        2122,
        840,
        "#e9e0e7"
      ]
    }
  ]
}
[/block]