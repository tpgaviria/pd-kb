---
title: "Offboarding"
slug: "offboarding"
excerpt: "Offboard users by removing them from incidents, escalation policies and schedules"
hidden: false
createdAt: "2019-10-16T16:03:05.471Z"
updatedAt: "2020-10-09T20:16:33.785Z"
---
The offboarding feature allows administrators to easily deprovision users from their associated escalation policies, schedules and assigned incidents. When offboarding a user, a Global Admin or Account Owner can review their associated escalation policies and schedules, sending notifications to the user’s Team Manager** that they need to be replaced by another user on those objects. Administrators can also reconcile triggered and/or acknowledged incidents that were assigned to the offboarded user by reassigning them to their affiliated escalation policy or resolving them. 

** *If the user is not part of a team, Global Admins and the Account Owner will be notified to perform these actions.*
[block:callout]
{
  "type": "warning",
  "title": "Requirements",
  "body": "PagerDuty accounts with [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions), which come standard with Business and Digital Operations plans, have access to the offboarding feature."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a607adf-offboarding-open-incidents.png",
        "offboarding-open-incidents.png",
        1398,
        1266,
        "#edeced"
      ]
    }
  ]
}
[/block]
#Configure Offboarding Settings

The offboarding feature is set to *Fail the removal of any user with assigned incidents (default)**. In order to take advantage of the incident reassignment capability, the Account Owner must change this setting.

To enable incident reassignment:

1. Navigate to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **User Offboarding**.
2. Under **Default setting for Incident reassignment during user deletion process**, select **Automatically restart the incidents on their escalation policy**.

#Offboard a User
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Global Admins and the Account Owner can offboard a user."
}
[/block]
1. Navigate to **People** :fa-arrow-right: **Users**.
2. Search for/locate the user that you wish to offboard and click **Delete** on the right hand side under Actions. 
3. On the next screen, depending on whether the user has any open incidents assigned to them, you will need to either **Reassign to EP** or **Resolve** their incidents. We recommend reassigning these incidents to their associated escalation policy, which will send a notification to a different user on that escalation policy. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you choose to reassign and the offboarded user is the _only_ person on an escalation policy, the incident will be reassigned to the Account Owner."
}
[/block]
If the user does not have any open incidents assigned to them, you will not see this screen and you can continue to step 4.
4. On the next screen, you will be able to review the user’s associated escalation policies and schedules. You may proactively remove the user from these objects yourself, or, if you click **Next** it will send an email notification to Team Managers assigned to those escalation policies and schedules that they need to be replaced by another user on these objects. **Note**: If the user is not associated with any Team, or if they are on a Team without an assigned Manager, this notification email will be sent to Global Admins and the Account Owner. 
5. Once the above details have been reviewed, click **Delete User**. See our [Post-Offboarding](https://support.pagerduty.com/docs/offboarding#section-post-offboarding) section below for more details on the post-offboarding flow for Team Managers (or Global Admins and the Account Owner, if not applicable).

##Post-Offboarding
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Team Managers associated with the offboarded user will need to take actions in their PagerDuty account in the post-offboarding flow by default. However, if the user is not associated with any Team, or if they are on a Team without an assigned Manager, Global Admins and the Account Owner will receive these prompts and will need to take action."
}
[/block]
Once the user has been offboarded by a Global Admin or Account Owner, the following changes will be visible in your PagerDuty account, prompting Team Managers (default) or Global Admins and Account Owners (see Required User Permissions callout, above) to take action:

* Any incidents formerly assigned to the offboarded user will now either be resolved or reassigned to a different user based on the selections made in the [offboarding flow](https://support.pagerduty.com/docs/offboarding#section-offboard-a-user).
* The offboarded user will be stubbed on their formerly-associated escalation policies and schedules, and there will be notification banners that will instruct administrators (see Required User Permissions callout, above) to replace them with different users: 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/202acf6-offboarding-ep-inactive-user-notification.png",
        "offboarding-ep-inactive-user-notification.png",
        1920,
        1268,
        "#f7eee1"
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
        "https://files.readme.io/fc94d2f-offboarding-schedule-inactive-user-notification.png",
        "offboarding-schedule-inactive-user-notification.png",
        1966,
        1232,
        "#efe9da"
      ]
    }
  ]
}
[/block]
* Administrators (see Required User Permissions callout, above) will receive a notification email instructing them to replace them with other users on those objects. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/18fbaa9-offboarding-team-manager-email.png",
        "offboarding-team-manager-email.png",
        1492,
        1102,
        "#f3f4f5"
      ]
    }
  ]
}
[/block]
##Additional Configurations

When attempting to offboard a user via the web UI or via API, as mentioned above, the default behavior will be to automatically reassign incidents to the last escalation policy of the incident. You can *optionally* choose to turn off this behavior if it does not suit your processes by navigating to  **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Offboarding Configuration**. 

By changing this configuration, you are still required to reassign or resolve any incidents from the user in order to offboard them.