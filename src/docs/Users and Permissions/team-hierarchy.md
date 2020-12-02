---
title: "Team Hierarchy"
slug: "team-hierarchy"
hidden: true
createdAt: "2018-03-28T21:13:53.829Z"
updatedAt: "2020-10-09T20:13:40.156Z"
---
[block:callout]
{
  "type": "info",
  "title": "Early Access Phase",
  "body": "Team Hierarchy is currently in Early Access, please work with your Customer Success Manager or your Account Manager to have this enabled."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f78ed44-Screen_Shot_2018-03-28_at_2.21.24_PM.png",
        "Screen Shot 2018-03-28 at 2.21.24 PM.png",
        1036,
        457,
        "#cbdcf5"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Creating and Managing a Team Hierarchy"
}
[/block]
Team hierarchies are built using existing [teams](https://support.pagerduty.com/docs/teams). To prepare for configuring a hierarchy, make sure you have created the teams that will be involved, and have decided upon a structure for your team hierarchy.

The following considerations should be made:

- Which teams will act as parent teams (more inclusive), and which will be subteams (more granular)?
- How close will your hierarchy map to the directory system or your existing organizational structure?
- How do you want to configure permissions? (For more information, see [Access and Permissions Management](https://support.pagerduty.com/docs/team-hierarchy#section-access-and-permissions-management-in-hierarchies)).

Once you have decided on a structure, you can assign a team as a parent to other subteams to start building the structure. Depending on how openly you distribute and how open lines of communication are between teams and your organization, you may want to consider utilizing public or private teams.

##Creating a Parent Team

This action will create a top-level team that does not have a parent and will have subteams.

1. Navigate to **People** :fa-arrow-right: **Teams** :fa-arrow-right: **+New team**. 
2. Enter a **Name**, associated **Escalation Policies** (if any), and leave the **Parent Team** field *blank*.
3. Click **Save**.

##Creating a Subteam 

This action will create a subteam of a parent team.
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "You must have a Manager, Global Admin or Account Owner base role, or a Manager team role on the desired team to create a subteam.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
1. Navigate to **People** :fa-arrow-right: **Teams** :fa-arrow-right: **+New team**. 
2. Enter a **Name**, associated **Escalation Policies** (if any), and select the appropriate **Parent Team** that this subteam should belong to.
3. Click **Save**.

##Deleting a Parent Team

To delete a team, you must disassociate all of its subteams first by reassigning the subteams to a different parent, or have no parent team set for them.
[block:api-header]
{
  "title": "Access and Permissions Management in Hierarchies"
}
[/block]
User roles in a hierarchical parent team will also have hierarchical access to all of its subteams, with the role in their parent team applying to objects and actions in the subteams. This rule also applies to users with a Restricted Access base role. For example, if a user with a Restricted Access base role is added to a parent team, then they will be able to view and access all subteams below the parent based on their role at the parent team level.  

Any role explicitly granted to a user in a subteam will take precedence over the role they have in a parent team, and any role inherited by a user in a subteam will be derived from the nearest parent in the hierarchy in which a role is explicitly granted to them.

To give a few examples, let us consider the diagram at the beginning of this page, and assume all teams' visibility are set to **Public**:

* A user with a team-specific *Manager* role in the *Software Division* team will have manager access to all objects within the *Software Division* team as well as manager access to all the subteams: *ABC Software*, *Acme Software* and the two subteams of the former.
* If the user has an account-level **Responder** role, they will have responder access to all the same teams in the hierarchy
* Let us assume a user has the **Observer** role in the *Support Division* team, and has been granted the **Responder** role in the *ABC Software Support* team. They will then have the Responder role in the subteams of that team, and observer role in the *Acme Support Software* team and its one subteam.

##Team Visibility

Teams can be [set to public or private](https://support.pagerduty.com/docs/advanced-permissions#section-team-privacy). Making a team private will make it invisible to anyone who is not on that team. However, when a team is part of a hierarchy, making it private will essentially override all inherited access, and access will need to be granted to the team explicitly. Furthermore, setting a parent team's visibility as private (to those not on the team) sets the subteams to private as well, but does not affect the team's members access to its tree of subteams.

Using the same example as before (see diagram), let's say we set the *ABC Software* team to private, and leave its subteams as public. This affects visibility and permissions in the following ways: 

* **Setting a team to private will override and prevent hierarchical access to it from the parent team(s).** So, no one in the *Software Division* team will have access to the *ABC Software* team.
* **Users not assigned to the private team will not be able to see that team or any of its subteams**. This also applies to further descendant subteams. So, members of the *Software Division* team will not be able to view or access the *Database* team, nor see that it is a subteam of *ABC Software*.
* **Users will always be able to see teams they are assigned to, and all their subteams,** provided the subteams are not individually set to private. So, a user assigned to *ABC Software* in the Manager role will have Manager access to that team, as well as Manager access to the *Database* team and *Foo* team, even if *ABC Software* is set to private.

##Navigating to Teams and Sub-Teams

To navigate through a team hierarchy:

1. Go to **People** :fa-arrow-right: Teams**
2. On the Teams screen, you will be able to view all the teams that you currently have access to.
3. You can click into each team to view all associated subteams and objects, and make edits, if permitted.
[block:callout]
{
  "type": "info",
  "body": "Access to view each Team will depend on your base role, your Team role, and whether a Team is public or private"
}
[/block]