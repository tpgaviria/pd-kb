---
title: "User Roles"
slug: "user-roles"
excerpt: "Overview of basic PagerDuty user roles"
hidden: false
createdAt: "2017-02-08T06:54:43.267Z"
updatedAt: "2020-11-02T16:42:52.155Z"
---
[block:callout]
{
  "type": "info",
  "title": "User Role Tiers",
  "body": "PagerDuty has two tiers of user roles depending on your account's plan. To determine which tier your role belongs to, click the **User Icon** in the upper right of your account and select **My Profile**. If you see a tab that says **Permissions & Teams**, please visit our article on [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions). If you only see the **User Settings** tab, please continue to use this article for reference."
}
[/block]

## User Roles in Your Account


[block:html]
{
  "html": "<div><table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<th>Limited Stakeholder*</th>\n\t\t\t<th>Full Stakeholder*</th>\n\t\t\t<th>Limited User</th>\n\t\t\t<th>User</th>\n\t\t\t<th>Admin</th>\n\t\t\t<th>Account Owner</th>\n\t\t</tr>\n    <tr>\n      <td><i>Only</i> has access to the status dashboard and their own user profile. Cannot view any other account objects.</td>\n\t\t\t<td>✓</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Subscribe to incidents</td>\n\t\t\t<td>✓ **</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>View:<br>\n∙ User profiles<br>\n∙ Incidents<br>\n∙ Schedules<br>\n∙ Escalation policies<br>\n∙ Services<br>\n∙ Analytics<br>\n∙ Postmortems\n      </td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Can be added on schedules and escalation policies</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Create overrides for schedules that the user is on-call for</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Trigger, acknowledge, reassign, and resolve incidents</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n    <tr>\n\t\t\t<td>Add/edit/delete postmortems</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Add/edit/delete:<br>\n∙ On-call schedules<br>\n∙ Escalation policies<br>\n∙ Services<br>\n∙ Maintenance windows<br>\n∙ Teams<br>\n∙ Response plays</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Add new users</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Delete users (cannot delete the Account Owner)</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Edit a user's profile/password</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Create/delete REST API keys</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Access billing information</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Cannot be deleted</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Change the account owner</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Enable and edit Single Sign-On (SSO) properties\\*</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Delete the account</td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t\t<td>✓</td>\n\t\t</tr>\n\t</tbody>\n</table></div>\n\n<style>table , td, th {\n\tborder: 1px solid #595959;\n\tborder-collapse: collapse;\n  font-size: 12px\n}\ntd, th {\n\tpadding: 3px;\n\twidth: 80%;\n\theight: 25px;\n}\nth {\n\tbackground: #DCDCDC;\n}\n.even {\n\tbackground: #fbf8f0;\n}\n.odd {\n\tbackground: #fefcf9;\n}\n</style>"
}
[/block]
\** Available on Professional, Team (legacy), Business, and Digital Operations pricing plans.*
\*** Limited Stakeholder and Full Stakeholder subscriptions to incidents are only available on our new Business plan and Digital Operations plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.*

##Limited Stakeholder Users

The Limited Stakeholder role provides users access to view and subscribe to the [status dashboard](https://support.pagerduty.com/docs/status-dashboard), view their own user profile, and does not show any other parts of PagerDuty, whether they are using the web UI or the mobile app. This access level is great for teams who don't need to see all of the alerts, schedules, and responder details in your account. Subscriptions to incidents are only available for Limited Stakeholders on our new Business plan and Digital Operations plan. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.

To set up a Limited Stakeholder user:

1. Go to **People** :fa-arrow-right: **Users**.
2. Click the **name** of the desired user and select the **Permissions & Teams** tab.
3.  Click **Edit** to the right of the user's Base Role and select **Limited Stakeholder** from the **Fixed** roles dropdown. Please contact your account representative if you want to purchase more Stakeholder licenses in our new, lower cost packages.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ddfacb2-status-dashboard-edit-limited-stakeholder.png",
        "status-dashboard-edit-limited-stakeholder.png",
        1070,
        696,
        "#f0f0f1"
      ]
    }
  ]
}
[/block]
##Stakeholder Users

Stakeholder users are available by default on Digital Operations plans, and can [purchased as add-on users](https://www.pagerduty.com/pricing/) on Team and Business plans. Stakeholders can view objects in an account, but cannot make modifications. The intended use case for a Stakeholder is to be added as a [Subscriber](doc:adding-users-to-existing-incidents#section-add-and-notify-subscribers) to an incident — they will receive updates about the incident, but cannot take any action. Subscriptions to incidents are only available for Stakeholders with our Modern Incident Response package. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.

Stakeholder licenses are not billed the same as full users. Please contact your Account Manager for more information.
## Checking Your User Role

To check what role you have, click the **User Icon** in the upper right of the web app and select **My Profile**. Depending on your account's plan, your user role information will be found in the following tabs:
- Free, Professional, as well as our legacy Starter and Team plans, will only have a **User Settings** tab, and you will find your **Role** information there. These role types are standard [User Roles](https://support.pagerduty.com/docs/user-roles#section-user-roles-in-your-account).
- Business and Digital Operations plans will have an additional **Permissions & Teams** tab where you can find information about your [Base Role](https://support.pagerduty.com/docs/advanced-permissions#section-base-roles) and any [Team Role(s)](https://support.pagerduty.com/docs/advanced-permissions#section-team-roles) or [Object Role(s)](https://support.pagerduty.com/docs/advanced-permissions#section-object-roles) that you may have. These role types are [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions).
## Changing User Roles


[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Admin, Global Admin and Account Owner roles.\n\nIf you're not sure what role you have, please read the above section, [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role)."
}
[/block]
If you would like your role changed, please contact an Admin, Global Admin or Account Owner on your PagerDuty account. Only the Account Owner can change their own role by [transferring account ownership](doc:change-account-owner) to another user in the account.

To change a user's role:
1. Go to **People** :fa-arrow-right: **Users**.
2. Click the **name** of the user you would like to update.
3. On their profile page, click the **Permissions & Teams** tab.
4. Click on the **Edit** icon to the right of the **Base Role** section. Select a new role from either the **Fixed** or **Flexible** dropdowns.
5. Click **Save**.