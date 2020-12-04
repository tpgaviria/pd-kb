---
title: "Quick Start Guide"
slug: "quick-start-guide"
excerpt: "Get started with your new PagerDuty account"
hidden: false
createdAt: "2017-06-15T07:46:37.195Z"
updatedAt: "2020-11-11T23:31:13.091Z"
---
This guide will help you get started with your new PagerDuty account, from configuring your user profile to receiving your first notification. **Open the linked sections in new tabs and return to this guide once finished with their instructions in order to continue through each step**. If there are any terms that are unfamiliar, you may want to check out our [Glossary](doc:glossary).

#Step 1: Configure Your User Profile

Configure the following settings in your user profile:

:fa-check-square: [Contact Information](https://support.pagerduty.com/docs/configuring-a-user-profile#section-contact-information)
:fa-check-square: [Notification Rules](https://support.pagerduty.com/docs/configuring-a-user-profile#section-notification-rules)
:fa-check-square: [User Settings](https://support.pagerduty.com/docs/configuring-a-user-profile#section-user-settings)

#Step 2: Configure the Incident Notification Pipeline

Configure the following objects in your PagerDuty account so that you can open an incident on a service, which will then send a notification to a user on its associated escalation policy.
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "* Adding users and creating escalation policies and teams are actions that can only be performed by Admins, Global Admins and Account Owners. If you do not have one of the above roles, please contact an Admin or Account Owner to configure. \n* Users, Managers, Admins, Global Admins and Account Owners can create services.\n\nYou can find which users have these roles by navigating to **People** :fa-arrow-right: **Users**. For more information, check out our articles on [User Roles](https://support.pagerduty.com/docs/user-roles) and [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions).
</Callout>


:fa-check-square: [Add Users](https://support.pagerduty.com/docs/users)
:fa-check-square: [Create an On-Call Schedule](https://support.pagerduty.com/docs/schedules#section-create-a-schedule)
:fa-check-square: [Create an Escalation Policy](https://support.pagerduty.com/docs/escalation-policies#section-create-an-escalation-policy) and add the above schedule to it. 
:fa-check-square: *Optional*: [Create a Team](https://support.pagerduty.com/docs/teams#section-create-a-team) and add the above escalation policy to it. This will associate all users and schedules on the escalation policy with this team. 
:fa-check-square: [Create a Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) and add the above escalation policy to it so that users on its associated on-call schedule can begin receiving notifications. 

#Step 3: Create Your First Notification

You should now have the following configured:

:fa-check-square: Contact Information
:fa-check-square: Notification Rules
:fa-check-square: User Settings
:fa-check-square: Schedule
:fa-check-square: Escalation Policy (with the above Schedule added)
:fa-check-square: Service (with the above Escalation Policy added)

Once these have been set up, you will be ready to trigger an incident so that you can test sending notifications:

1. Edit the escalation policy created above by navigating to **People** :fa-arrow-right: **Escalation Policies** :fa-arrow-right: :fa-cog: :fa-arrow-right: **Edit**. If you are not already on Level 1 of the escalation policy, ***temporarily*** add yourself to the first level so that you are notified immediately after an incident is triggered. **Note**: If there are any other users or schedules on this first level, they will also be notified, so you may want to take note of these settings and then temporarily remove them at your own discretion. Click **Save**. 
2. Next, go to the **Services** menu and select **Service Directory**.
3. Click the **name** of the service that is attached to the above escalation policy. 
4. Click **+ New Incident** on the right hand side.
5. In the **Assign to** dropdown, select the escalation policy you just edited, above. 
6. Enter `Test Incident` as the **Title** and an *optional* **Description** for the incident. If there are others on Level 1 of the escalation policy, this is a good place to add any additional context to your test incident. 
7. Click **Create Incident** at the bottom of the window.
8. You will then see the Incident Details page for your incident. If you navigate to the **Incidents** page in the main menu, you will see it under **Open** incidents as well.
9. You should now begin to receive email, phone call, SMS, and/or push notification(s) depending on the notification rules that you configured above.
10. Return to the escalation policy and edit it back to its original settings, clicking **Save** when finished. 

Congratulations, you’ve received your first notification! From here, you can acknowledge, resolve, re-assign/escalate the incident via phone/SMS/web UI or through the mobile app.

#Moving from Trial to a Paid Account

When you’re ready to move forward from a trial account, the Account Owner can do so by going to their Profile icon :fa-arrow-right: Account Settings :fa-arrow-right: Your Subscription.

From here, select a plan, and select **Continue to plan details**.

On the **Plan Details** page, select the preferred billing cycle, full user, and stakeholder user counts. After adding billing information, review your transaction details, and click “Complete Your Purchase” to complete the transaction.