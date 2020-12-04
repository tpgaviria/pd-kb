---
title: "Advanced Permissions"
slug: "advanced-permissions"
excerpt: "Overview of PagerDuty Advanced Permissions user roles"
hidden: false
createdAt: "2017-02-08T07:15:31.066Z"
updatedAt: "2020-11-16T10:50:40.993Z"
---
[block:callout]
{
  "type": "info",
  "body": "PagerDuty has two tiers of user roles depending on your account's plan. To determine which tier your role belongs to, click the **User Icon** in the upper right of your account and select **My Profile**. If you see a tab that says **Permissions & Teams**, please continue to use this article for reference. If you only see the **User Settings** tab, please visit our article on [User Roles](https://support.pagerduty.com/docs/user-roles).",
  "title": "User Role Tiers"
}
[/block]
Advanced Permissions allow you to specify the team-wide role that a user has on any given team, and also the level of access a user has to incidents and configuration objects ([services](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations), [escalation policies](https://support.pagerduty.com/docs/escalation-policies), and [schedules](https://support.pagerduty.com/docs/schedules)).

##Benefits of Advanced Permissions 
- **Increased control and security** — Teams will be able to decide who is allowed to respond to incidents and manage the configuration for their team. Individual users will also be able to create and manage their own personal API Access Keys.
- **Prevent human error** — By empowering teams to control who has access to their incidents and configuration, accidents that might interfere with a team’s process can be mitigated.
- **Limit the visibility of sensitive information** — Teams will be able to set themselves as “Private” if their incidents or configuration contain sensitive information.
[block:callout]
{
  "type": "info",
  "body": "Advanced Permissions are available to customers on our Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.\n\nIf you are already on a Business or Digital Operations plan but do not yet have advanced permissions enabled, contact [PagerDuty Support](mailto:support@pagerduty.com) to request enablement.\n\nOtherwise, if advanced permissions are not available to you, you can still use [Basic User Roles](doc:user-roles) to control what level of access your users have in your PagerDuty account.",
  "title": "Availability of Advanced Permissions"
}
[/block]

## Overview

With advanced permissions, there are three different types of roles: base roles, team roles and object roles. Each role is unique and dictates what a user has access to. 

##Base Roles

All users in an account have a base role, and when a new user is added to an account, they must be assigned one. A base role indicates the default level of access a user has to incidents and configuration objects across the entire account. 

Base roles can either be **flexible** or **fixed**. A fixed base role is a base role that *cannot* be granted more or less permissions via a team role or an object role. A flexible role is a base role that *can* be granted more or less permissions via a team role or an object role. 

Each base role is described below with an indication if they are fixed or flexible in parenthesis: 

- **Account Owner** — (fixed) Full access to create, update, and delete objects, including a user’s permissions. Account owners can also access the Billing page. This role can only be granted to one person on an account.
- **Global Admin** — (fixed) Full access to create, update, and delete objects, including a user’s permissions.
- **Manager** — (flexible) Full access to create, update, and delete objects and all of their configuration. Depending on an Account Owner or Global Admin's discretion, these roles may be given lower access levels for specific objects. 
- **Responder** — (flexible) Can take action on incidents, create incidents for any team, and create overrides.
- **Observer** — (flexible) Can view objects, but cannot make any modifications. If an Observer is assigned an incident, they will temporarily have Responder access to that incident only, and can respond and reassign. Observers are able to trigger incidents from the PagerDuty Slack app.
- **Full Stakeholder** — (fixed) Can view objects, but cannot make any modifications. Cannot be assigned or respond to incidents.
- **Limited Stakeholder** — (fixed) Can only view and subscribe to the status dashboard, view and edit their own user profile, and cannot view any other parts of PagerDuty. For more information, please read our section on [Limited Stakeholders](https://support.pagerduty.com/docs/user-roles#section-limited-stakeholder-users).
- **Restricted Access** — (flexible) By default, they cannot view or edit any objects on the account until they are given a specific team or object role.

Here is a full list of actions to which each base role can take. For **flexible** roles, this table indicates the level of access each flexible base role has *by default* on an account *before* being given more or less permissions via a team or object role.
[block:html]
{
  "html": "<div style=\"overflow-x:auto;\"><table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"2\"></td>\n\t\t\t<th colspan=\"4\">Flexible</th>\n\t\t\t<th colspan=\"4\">Fixed</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<th>Restricted access</th>\n\t\t\t<th>Observer</th>\n\t\t\t<th>Responder</th>\n\t\t\t<th>Manager</th>\n      <th>Limited Stakeholder</th>\n\t\t\t<th>Full Stakeholder</th>\n\t\t\t<th>Global Admin</th>\n\t\t\t<th>Account Owner</th>\n\t\t</tr>\n    \t<tr>\n        <td><i>Only</i> has access to the status dashboard and their own user profile. Cannot view any other account objects.</td>\n        <td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n      <td>✓</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t</tr>\n    <tr>\n\t\t\t<td>Subscribe to incidents</td>\n      <td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td>✓**</td>\n\t\t\t<td>✓**</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Create/delete personal REST API access keys/tokens matching permissions level</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Respond to incidents assigned to them</td>\n      <td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Be added on schedules and escalation policies</td>\n      <td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>View all public teams, services, schedules, escalation policies, analytics and postmortems across the entire account</td>\n      <td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n    <td>View alerts from services that they have access to in the Alerts table. (Permission to view services may be restricted by Team and/or Object roles.)</td>\n      <td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Trigger and respond to incidents for any team</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Create/delete overrides on any schedule</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n    <tr>\n\t\t\t<td>Create custom incident actions</td>\n      <td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Add/edit/delete any:<br>\n∙ On-call schedules<br>\n∙ Schedule overrides<br>\n∙ Escalation policies<br>\n∙ Services<br>\n∙ Maintenance windows<br>\n∙ Teams<br>\n∙ Response plays<br>\n∙ Business Services</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>View/edit/delete all private teams and their services, schedules, and escalation policies across the entire account</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Create/delete global API access keys</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>∙ Manage users<br>\n∙ Add new users<br>\n∙ Delete users<br>\n∙ Edit users’ profiles and passwords<br>\n∙ Configure users' base roles, team roles, and object roles</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n∙ Redact Incidents<br>\n∙ Administer the account<br>\n∙ Change the account owner<br>\n∙ Edit billing information<br>\n∙ Add/edit/delete single sign on (SSO) properties<br>\n∙ Delete the account<br>\n∙ Change pricing plans</td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n      <td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t</tbody>\n</table></div>\n\n<style>\n  table , td, th {\n\t border: 1px solid #595959;\n\t border-collapse: collapse;\n   font-size: 12px;\n}\ntable {\n   width: 20%;\n}\n\nth {\n  height: 70px;\n  padding: 0px;\n}\ntd, th {\n\tpadding: 0px;\n}\nth {\n\tbackground: #DCDCDC;\n}\n.even {\n\tbackground: #fbf8f0;\n}\n.odd {\n\tbackground: #fefcf9;\n}\n</style>"
}
[/block]
** Limited Stakeholder and Full Stakeholder subscriptions to incidents are only available on our new Business plan and Digital Operations plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.

To find your base role, click the **User Icon**, select **My Profile**, and then select the **Permissions & Teams** tab.
[block:callout]
{
  "type": "info",
  "title": "Team Responder Base Role (Legacy)",
  "body": "The Team Responder base role was deprecated as of 4/26/19. All users with this role have now been changed to a base account role of observer and their team roles will stay the same."
}
[/block]
##Team Roles 

When a user is added to a [team](https://support.pagerduty.com/docs/teams), they will also be given a team role. A user’s team role indicates the level of access that they have on that specific team. There are three different types of team roles:

- **Observer** — Can only view the configuration objects and incidents associated with that team. If an Observer is assigned an incident, they will temporarily have Responder access to that incident only, and can respond and reassign.
- **Responder** — Everything an observer team role can do, PLUS they can respond to incidents associated with that team, trigger incidents for that team, and create/delete overrides on any schedules associated with that team.
- **Manager** — Everything a responder team role can do, PLUS they can add/edit/delete schedules, escalation policies, services and service maintenance windows associated with that team. They can also add existing users to their team, as well as edit and delete their team.

When a user is added to or associated with a team for the first time, their default team role will be dependent on their base role. Users can be added to a team manually or automatically by being added to an escalation policy that is associated with a team.

[block:parameters]
{
  "data": {
    "h-0": "Base Role",
    "h-1": "Default Team Role When Added to a Team",
    "0-0": "Observer**",
    "0-1": "Observer",
    "1-0": "Stakeholder",
    "1-1": "Observer",
    "2-0": "Restricted Access**",
    "2-1": "Observer",
    "3-1": "Responder",
    "4-1": "Manager",
    "5-1": "Manager",
    "6-1": "Manager",
    "3-0": "Responder**",
    "4-0": "Manager**",
    "5-0": "Global Admin",
    "6-0": "Account Owner"
  },
  "cols": 2,
  "rows": 7
}
[/block]
**  Users with flexible base roles (Restricted Access, Observer, Responder, Manager) can have their default team roles changed to grant them more more or less permissions on a specific team.

To find your team role, click the **User Icon**, select **My Profile** and then select the **Permissions & Teams** tab. Users may also have a primary team, which some organizations may need for billing purposes. Please read our section [Manage Primary Team](https://support.pagerduty.com/docs/teams#section-manage-primary-team) for more information.

##Object Roles

Objects roles are specific levels of access given for specific configuration objects (a [schedule](https://support.pagerduty.com/docs/schedules), [escalation policy](https://support.pagerduty.com/docs/escalation-policies), and/or [service](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations)) to an individual user. There are three types of object roles: **Observer**, **Responder**, and **Manager**.
[block:parameters]
{
  "data": {
    "h-1": "Schedule",
    "h-2": "Escalation Policy",
    "h-3": "Service",
    "0-0": "**Observer** ",
    "1-0": "**Responder** ",
    "2-0": "**Manager** ",
    "0-1": "Can view",
    "0-2": "Can view",
    "1-2": "Can view",
    "2-2": "Can edit",
    "0-3": "Can view and add notes to incidents triggered on this service",
    "1-1": "Can view schedules and create/delete overrides",
    "1-3": "Can view and respond to incidents triggered on this service",
    "2-1": "Can edit schedule and create/delete overrides",
    "2-3": "Can edit, set maintenance windows, and respond to incidents triggered on this service"
  },
  "cols": 4,
  "rows": 3
}
[/block]
To find your object-level role(s),  click the **User Icon**, select **My Profile** and then select the **Permissions & Teams** tab.

##How Base, Team, and Object Roles Work Together

Base roles establish the level of access that a user has to everything across the entire account, whereas team and object roles gives users more or less access to specific configuration objects and incidents than what they would have access to at the account, or base role, level.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d3af126-advanced-permissions-roles-together.png",
        "advanced-permissions-roles-together.png",
        942,
        337,
        "#c3dfd9"
      ]
    }
  ]
}
[/block]

## Managing Roles

Base, team, and object roles can be managed by different users on the account based on their level of permissions. 
[block:parameters]
{
  "data": {
    "h-1": "Manager (team role)",
    "h-2": "Manager  (base role)",
    "h-3": "Global Admin (base role)",
    "h-4": "Account Owner (base role)",
    "0-0": "Can modify **team roles** of users on *their* team",
    "1-0": "Can modify **team roles** for any user on *any* team",
    "2-0": "Can modify **base roles** for any user",
    "3-0": "Can modify **object roles** for any user",
    "0-1": "✓",
    "0-2": "✓",
    "0-3": "✓",
    "0-4": "✓",
    "1-4": "✓",
    "2-4": "✓",
    "3-4": "✓",
    "1-3": "✓",
    "2-3": "✓",
    "3-3": "✓",
    "1-2": "✓"
  },
  "cols": 5,
  "rows": 4
}
[/block]
##Updating Base Roles
Users with an Account Owner or Global Admin base role can update other users’ base roles. 

To update a user’s base role, go to the **Permissions & Teams** tab on their user profile and click **Edit** next to their Base Role.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/88b4dca-advanced-permissions-edit-base-role.png",
        "advanced-permissions-edit-base-role.png",
        1466,
        570,
        "#eeeeef"
      ]
    }
  ]
}
[/block]
##Updating Team Roles

Users with an Account Owner, Global Admin, or Manager base role can update other users’ team roles. Users with a Manager *team role* can also update the team roles of users, but only for users on their team.

Users with an Account Owner, Global Admin, or Manager base role can update a user’s team role from the user’s profile page. Go to the **Permissions & Teams** tab on the user’s profile and select their team role from the drop-down menu under **Teams & Team Roles**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b7e0a97-advanced-permissions-edit-team-role-user-profile.png",
        "advanced-permissions-edit-team-role-user-profile.png",
        1714,
        1358,
        "#f1f1f2"
      ]
    }
  ]
}
[/block]
Users with a Manager *team role* are only able to update a user’s team role from their team’s page. Navigate to the **People** menu and select **Teams**, then click on your **Team**, select the **Users** tab and then select the appropriate role under the **Team Role** column for that user. 

If a user is not yet part of a team, please visit our section on [manually adding users to a team](https://support.pagerduty.com/docs/teams#section-add-users-or-escalation-policies-to-a-team). 

##Updating Object Roles

Users with an Account Owner or Global Admin base role can update other users’ object roles. Note that object roles can only be given to users with a flexible base role (i.e. Restricted Access, Observer, Responder, Manager).

To update a user’s base role, go to the **Permissions & Teams** tab on their user profile and click **Edit** next to their Base Role.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2a5ad9a-advanced-permissions-edit-base-role.png",
        "advanced-permissions-edit-base-role.png",
        1466,
        570,
        "#eeeeef"
      ]
    }
  ]
}
[/block]
Under **Additional Permissions**, assign an object role to a specific schedule, escalation policy, and/or service.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/30bd983-advanced-permissions-object-permissions.png",
        "advanced-permissions-object-permissions.png",
        1066,
        1264,
        "#f3f2f3"
      ]
    }
  ]
}
[/block]

## Team Privacy

With advanced permissions, teams have the option to be set to **Private** or **Public**. By default, all teams are public.

- **Public** teams can be viewed and accessed by users outside of those teams.
- **Private** teams cannot be viewed and accessed by users outside of those teams, except for users with Global Admin or Account Owner base roles (these users have access to all private teams).

When a team is set to private, users who are *not* part of that team:

[block:parameters]
{
  "data": {
    "h-0": "Will NOT Be Able To",
    "h-1": "WILL Be Able To",
    "0-0": "-  View that team’s schedules, escalation policies, services, and incidents\n\n- Find that team’s service or escalation policy when creating a new incident\n\n- Find that team’s escalation policy when reassigning or adding responders to an incident\n\n- Find that team when adding subscribers to an incident\n\n- Find that team on the team lens drop-down, on the **People** :fa-arrow-right: **Teams** page, or on the profile page of a user associated with that team",
    "0-1": "- Find the users associated with that private team on the **People** :fa-arrow-right: **Users** page\n\n- Find the users on that private team when creating, reassigning, adding responders, or adding subscribers to an incident\n\n- Find the users on that private team when creating a schedule override"
  },
  "cols": 2,
  "rows": 1
}
[/block]
**Note**: Team privacy does not currently apply to the following pages or configuration objects:
- Response plays
- Postmortems
- Analytics

##Updating Team Privacy 
Users with an Account Owner,  Global Admin, or Manager base role can set a team to public or private. Users with a Manager *team role* specific to a team can also set that team to public or private. 

To update a team’s privacy, navigate to the **People** menu, select **Teams** and then click on your desired **Team**. Navigate to the **Users** tab on that team’s page and set the **External Visibility** to either public or private.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5ab255e-advanced-permissions-external-visibility.png",
        "advanced-permissions-external-visibility.png",
        2262,
        500,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]

## Responding to Incidents From Other Teams

The team that an incident is associated with is based on the [service](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) where the incident was triggered. For example, if an incident is triggered on a service associated with the Network Operations team, then the incident is associated with the Network Operations team. If the incident is reassigned to an escalation policy or user that belongs to a different team, then the incident will still be associated with the Network Operations team.

At this point, any users who are assigned to the incident will be able to respond to it, even if they are not associated with the Network Operations team.* However, they won’t see the incident on their incidents dashboard if filtering by My Teams. Any users who are *not* assigned to the incident AND who don’t have access to respond to incidents associated with the Network Operations team** will not be able to respond to the incident.

\* These Users *must* be directly assigned to the incident to take action on it. They should show up under **Assigned to** when viewing the incident in the UI, or **Assignees** in the REST API.

\** A user with an Observer or Restricted Access base role and no team role or object role specified for the Network Operations team or its objects.

With that being said, if there is a user who needs to be able to respond to incidents for all or multiple teams, make sure that the user has either of the following:

- A **Responder** base role - this will allow them to respond to incidents associated with any team
- A **Responder** or **Manager** role on any team for which they need to respond to incidents
- A **Responder** or **Manager** object role on any service for which they need to respond to incidents
## Rest API Access

All users can create personal REST API keys or tokens on the **User Icon** :fa-arrow-right: **My Profile** :fa-arrow-right: **User Settings** page of their user profile. Keys or tokens created this way will provide access to the REST API that matches the user’s permissions.
 
For example, a user with the base role of **Manager** can create a personal API key that will allow them to edit a schedule. However, they will not be able to add new users to the account because their level of access dictates that they cannot do this. 
 
[Global API access keys](https://support.pagerduty.com/v1/docs/using-the-api) (which can be either full access or read only) can be created and managed by users with a Global Admin or Account Owner base role.
## Migrating From Basic to Advanced Permission Roles

When an account migrates from Basic to Advanced Permissions, most basic user roles are automatically mapped to advanced permissions base roles.
[block:parameters]
{
  "data": {
    "h-0": "Basic Permissions",
    "h-1": "Advanced Permissions",
    "0-0": "Account Owner",
    "0-1": "Account Owner",
    "1-0": "Admin",
    "1-1": "Global Admin",
    "1-2": "Fixed",
    "2-0": "Stakeholder",
    "2-1": "Stakeholder",
    "3-0": "User",
    "3-1": "Manager",
    "4-0": "Limited User",
    "4-1": "Responder",
    "4-2": "Flexible"
  },
  "cols": 2,
  "rows": 5
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "Please note there is not an Observer role on [Basic Permissions](https://support.pagerduty.com/docs/user-roles)."
}
[/block]

## Roles in the REST API and SAML

When provisioning a user through the REST API or SAML, the user will by default be given the **Manager** (a.k.a. **User**) role, unless specified in the user's `role` property. The value set for it must be one of a set of fixed values that is recognized by our internal APIs, or our web services will respond with status `400 Invalid Request`.

The values of the `role` field of user records, and also the permissions system, are as follows:
[block:parameters]
{
  "data": {
    "h-0": "Title",
    "h-1": "Value",
    "0-0": "**Global Admin** ",
    "0-1": "`admin`",
    "3-0": "**Manager / User** ",
    "3-1": "`user`",
    "4-0": "**Responder**",
    "4-1": "`limited_user`",
    "5-0": "**Observer**",
    "5-1": "`observer`",
    "6-0": "**Restricted Access**",
    "1-0": "**Full Stakeholder**",
    "1-1": "`read_only_user`",
    "6-1": "`restricted_access`",
    "7-0": "**Account Owner** \\**",
    "7-1": "`owner`",
    "h-2": "Flexible or Fixed",
    "0-2": "Fixed",
    "1-2": "Fixed",
    "3-2": "Flexible",
    "4-2": "Flexible",
    "5-2": "Flexible",
    "6-2": "Flexible",
    "7-2": "Fixed",
    "2-0": "**Limited Stakeholder**",
    "2-1": "`read_only_limited_user`",
    "2-2": "Fixed"
  },
  "cols": 3,
  "rows": 8
}
[/block]
\** Cannot be created through API / SAML
[block:callout]
{
  "type": "success",
  "title": "Best Practices",
  "body": "For more information on Advanced Permissions best practices, please visit our [Community post](https://community.pagerduty.com/forum/t/best-practices-with-using-advanced-permissions/1525)."
}
[/block]