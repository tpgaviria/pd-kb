---
title: "Teams"
slug: "teams"
excerpt: "Create Teams to customize information presented to specific users"
hidden: false
createdAt: "2017-06-15T08:13:22.217Z"
updatedAt: "2020-10-09T20:13:00.693Z"
---
Teams allow users to customize the UI so that they only see information relevant to specific escalation policies, or groups of escalation policies. For example, a DevOps team member may only want to see the users, incidents, schedules and services associated with DevOps escalation policies. Likewise, a Support team manager may only want to see information relevant to his or her team.

Teams are available on Business and Digital Operations plans. Please [contact our sales team](mailto:sales@pagerduty.com) if you would like to upgrade to a plan featuring Teams.

## Create a Team
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Manager, Global Admin or Account Owner roles on plans with [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions).\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
It is recommended that you create schedules and escalation policies before creating a Team. When you add an escalation policy to a Team, the escalation policy's users and schedules will be automatically assigned to your Team. For guidance on the basics of configuring your account, check out our [Quick Start Guide](https://support.pagerduty.com/docs/quick-start-guide).

1. Go to the **People** menu and select **Teams**.
2. Click **New Team**. **Name** the team and select the appropriate **Escalation Policies**. The users associated with the selected escalation policies will be associated with this team. Click **Save**.
[block:callout]
{
  "type": "info",
  "body": "You can add up to 100 unique escalation policies per team.",
  "title": "Note"
}
[/block]
## Edit or Delete Teams

1. Navigate to **People** :fa-arrow-right: **Teams** and click the :fa-cog: to the right of the Team name.
2. 

* **If you are editing a Team**: Click **Edit**. You may edit the **Name**, **Escalation Policies**, **Users** and **Tags**. When you are finished editing, click **Save**. 
* **If you are deleting a Team**: Click **Delete**. A dialog will appear that will prompt you to **Edit Rulesets, Escalation Policies, Services and Schedules** and **Reassign Incidents** associated with the Team, with the option to reassign incidents to another team via the dropdown. Once you have performed these tasks, click **Delete Team**. 

###Add Users or Escalation Policies to a Team

To manually add a user or escalation policy to a team, click the :fa-cog: and select **Edit**. Type the user's name or escalation policy name into the **Users** or **Escalation Policies** fields, select the name when it populates and then click **Save**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/02a22da-teams-add-users-eps.png",
        "teams-add-users-eps.png",
        1418,
        424,
        "#f3f3f3"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Users can be on multiple teams, but escalation policies can only be associated with one team.",
  "title": "Note"
}
[/block]
###Edit Team Roles 

To change a user's role within a Team, go to **People** :fa-arrow-right: **Teams** and click on the **team name**. Under **Team Role**, click the **dropdown** and select a new role. 

All other edits to Schedules, Escalation Policies and Services can be made on their corresponding tabs:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ed18c83-teams-edit-team-role.png",
        "teams-edit-team-role.png",
        1710,
        572,
        "#f1f1f2"
      ]
    }
  ]
}
[/block]
###Remove Users or Escalation Policies From a Team

To remove users or escalation policies from a team, navigate to **People** :fa-arrow-right: **Teams** :fa-arrow-right: :fa-cog: for your desired team :fa-arrow-right: **Edit**. Click the **x** next to the user name or escalation policy you wish to remove and click **Save**.

##Manage Primary Team

Some organizations may want users to have primary teams for billing purposes. To designate a user's primary team:

1. Navigate to **People**, select **Users** and click the **name** of the desired user. 
2. Select the **Permissions & Teams** tab and click the **Manage primary team** button in the Teams & Team Roles section. 
3. On the next screen you will have the option to search and select the user's desired primary team, or you may remove one by clicking the **Unset primary team** button. Click **Confirm Selection** to save. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7038556-teams-manage-primary-team.png",
        "teams-manage-primary-team.png",
        1196,
        646,
        "#f2f1f0"
      ]
    }
  ]
}
[/block]
4. You will now be able to see the user's primary team in the Teams & Team Roles section.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8808902-teams-primary-team-saved.png",
        "teams-primary-team-saved.png",
        474,
        232,
        "#ededee"
      ],
      "sizing": "80"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "A user must already be a team member of the selected primary team. You may add users to a  New Team or add a user to an existing team through the Teams page to select a primary team that the user is not already on."
}
[/block]
##Filter by Teams

To filter the view in PagerDuty use the drop-down in the top right corner to quickly bring back team-specific information. You can choose to view all teams, any teams you're associated with, or a specific user, depending on your permissions.
[block:callout]
{
  "type": "info",
  "body": "If a user is not on any teams they will still be visible by selecting **All Teams**.",
  "title": "Note"
}
[/block]
To quickly see all users in a team go to the team drop-down menu and select the DevOps team:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b939a6b-teams-team-view-only.png",
        "teams-team-view-only.png",
        524,
        900,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
Go to **People** :fa-arrow-right: **Users** and only Users associated with that selected team will appear.

Similarly, you can filter escalation policies associated with that team by selecting **Escalation Policies** from the **People** menu as well as the **Incidents** page.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "There is a limit of 500 users per team."
}
[/block]