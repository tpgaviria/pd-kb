---
title: "Adding and Removing Users"
slug: "users"
excerpt: "Add or delete users from your PagerDuty account. Resend user invitations or adjust User Limits."
hidden: false
createdAt: "2017-02-08T05:53:48.903Z"
updatedAt: "2020-10-09T19:49:54.112Z"
---
#Add a User
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Admin, Global Admin, and Account Owner base roles can add users.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).\n\n**Note**: Free plans are limited to five users."
}
[/block]
To add a user: 
1. Go to **People** :fa-arrow-right: **Users**.
2. Click **Add Users** in the top right corner of the page.
3. Enter the user's **Name** and **Email**.
4. Select the desired **Role** for the user.
5. *Optional*: Select a **Team** from the dropdown to add the user to this team.
6. Click **Add**. If you are adding more than one user, repeat steps 3-5. 
7. Click **Send Invites**.

When you click **Send Invites**, an email will be sent to each user's email address. They will be prompted to accept the invitation to PagerDuty, choose a password, and set up their user profile.

#Common Issues When Adding Users

There are 3 common reasons why you may not be able to add a user to your account:

1. You do not have permission to add a user based on your user role. See above [Required User Permissions callout](https://support.pagerduty.com/docs/users#section-add-a-user). 
2. There are [User Limits](https://support.pagerduty.com/docs/users#section-user-limits) set on your account.
3. You are trying to add a user that already exists in the account. To check if this user already exists in your account, navigate to **People** :fa-arrow-right: **Users** and search their name/other details in the left hand search bar. 

## User Limits

If you are an Account Owner or Admin and you receive an error trying to add users, you may see something similar to the message in the screenshot below (i.e. **0 Users Created. 1 User NOT Created: [Name_of_User]**):
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f61d79-adding-removing-users-user-limit-dialog.png",
        "adding-removing-users-user-limit-dialog.png",
        838,
        280,
        "#e7eef0"
      ]
    }
  ]
}
[/block]
This error is the result of having a **User Limit** or **Stakeholder Limit** on your account, or the result of attempting to add a user that already exists in the account.

For example, if your User Limit is set to 20, and there are already 20 users on your account, then neither the Account Owner nor an Admin would be able to add additional users until the User Limit is increased.

To change or remove the User Limit:
[block:callout]
{
  "type": "warning",
  "body": "Only Account Owners can change or remove the User Limit.",
  "title": "Required User Permissions"
}
[/block]
1. Go to **User Icomn** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Account Settings** tab.
2. Scroll down to the **Account Limits** section.
3. Set the desired limits, or click :fa-remove: to remove the limit entirely.
4. Click **Save changes**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9cc0a18-adding-removing-users-account-limits.png",
        "adding-removing-users-account-limits.png",
        904,
        622,
        "#eceeec"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "If you cannot see the Account Limits section on your Account Settings page, your account may have a user limit built into its pricing plan. In this case, please refer to [our section on User Charges](https://support.pagerduty.com/docs/billing-invoices-payments#section-user-charges) to add more users.",
  "title": "Account Limits Not Available"
}
[/block]
#Resend a User Invitation
[block:callout]
{
  "type": "warning",
  "body": "Admin, Global Admin, and Account Owner base roles can resend user invitations.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).",
  "title": "Required User Permissions"
}
[/block]
You can resend an invitation to a user if they cannot locate the first email that was sent.

1. Go to **People** :fa-arrow-right: **Users**.
2. Click **Resend Invite** for the applicable user.

A new invitation email will be sent directly to the email associated with their PagerDuty account. Once a user has accepted an invitation and logged in to their account, the **Resend Invite** link will no longer appear next to the user.

#Delete a User
[block:callout]
{
  "type": "warning",
  "body": "Admin, Global Admin, and Account Owner base roles can delete users.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).",
  "title": "Required User Permissions"
}
[/block]
To delete a user:
1. Go to **People** :fa-arrow-right: **Users**.
2. Locate the user that you would like to delete, and click **Delete**.
3. Confirm that you would like to delete them.
[block:callout]
{
  "type": "info",
  "body": "The offboarding feature allows administrators to easily deprovision users from their associated escalation policies, schedules and assigned incidents. PagerDuty accounts with [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions), which come standard with Business and Digital Operations plans, have access to the offboarding feature. Please read our [Offboarding](https://support.pagerduty.com/docs/offboarding) article for more information.",
  "title": "Offboarding"
}
[/block]
#Common Issues When Deleting Users

There are 3 common reasons why you may not be able to delete a user on your account:

* You do not have permission to delete a user based on your user role. See above [Required User Permissions callout](https://support.pagerduty.com/docs/users#section-delete-a-user). 
* The user is still on-call, now and/or in the future, on a schedule and/or escalation policy. To check which schedules and/or escalation policies this user is still on-call for, navigate to **People** :fa-arrow-right: **Users** :fa-arrow-right: and click their **name**. On the right hand side, you will see their escalation policies and schedules in the **Upcoming On-Call** and **On-call Schedules** widgets.
* There is at least one open incident assigned to that user.
[block:callout]
{
  "type": "info",
  "body": "You may not delete yourself or the Account Owner. If you wish to delete yourself, you will need the Account Owner or an Admin to do so for you. If you wish to delete the Account Owner, [the Account Owner must first transfer account ownership](https://support.pagerduty.com/docs/change-account-owner) to a different user on the account, and then you can go back and delete the previous owner.",
  "title": "Deleting Yourself or the Account Owner"
}
[/block]