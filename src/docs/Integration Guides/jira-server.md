---
title: "Jira Server Integration Guide | PagerDuty"
slug: "jira-server"
hidden: false
createdAt: "2020-05-05T16:51:03.838Z"
updatedAt: "2020-10-14T17:29:17.078Z"
---
# Jira Server + PagerDuty Benefits

* Incidents triggered in PagerDuty can automatically open an issue in Jira and includes the ability to populate issue fields, whether they are out-of-box or custom. 
* Issues in Jira can also trigger a PagerDuty incident, helping you notify your team of time-sensitive issues.
* Additional capabilities include: incident priority synchronization, notes synchronization and state mapping.

# How it Works

* Based on predefined rules set in Jira, when a PagerDuty incident performs a condition’s action, a webhook is sent to Jira where it can create or update an issue.
* When a Jira issue performs a predefined condition’s action, a webhook is sent to PagerDuty where it can create or update an incident.

# Requirements

**In PagerDuty**: 

* You will need an Admin or Account Owner role in PagerDuty to create an API key.
* The Jira administrator configuring this integration needs to also be a user within the PagerDuty account with valid login credentials.

**In Jira Server**: 
* To configure the integration, you must have Jira administrator permissions.
* This integration is for Jira **Server** (self-hosted) for Jira Server 7.2.0 - 8.11.0, which can be downloaded from the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1218226/pagerduty-for-jira-server/version-history#b306010). If you use Jira Cloud, please see the [Jira Cloud integration guide](https://support.pagerduty.com/docs/jira-cloud). This integration also supports Jira Service Desk.
[block:callout]
{
  "type": "info",
  "title": "Looking For a Different Version?",
  "body": "Our [Jira Server v3](https://support.pagerduty.com/docs/jira-server-v3) integration is also available.
</Callout>


# Integration Walkthrough

## In PagerDuty

1. Navigate to **Apps & Add Ons** :fa-th-large: :fa-arrow-right: **API Access** and then click the **Create New API Key** button.
2. Enter a description, e.g. `Jira Server API Key` and click **Create Key**.
3. On the next screen, copy the **API Key** and paste it in a safe place for future use. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4efbe0f-jira-server-api-key.png",
        "jira-server-api-key.png",
        554,
        487,
        "#f6f3ee"
      ]
    }
  ]
}
[/block]
## In Jira Server

4. From the **Jira Administration** :fa-cog: menu in the top right corner, click **Manage Apps**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dfc3ad1-jira-server-manage-apps.png",
        "jira-server-manage-apps.png",
        244,
        307,
        "#d6deea"
      ]
    }
  ]
}
[/block]
5. Click the **Manage Apps** tab, then click **Find new apps** in the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1218226/pagerduty-jira-server-extension?hosting=server&tab=overview). Search for **PagerDuty for Jira Server** and click the **Install** button. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dab3523-jira-server-add-pd-app.png",
        "jira-server-add-pd-app.png",
        876,
        232,
        "#f0f2f1"
      ]
    }
  ]
}
[/block]
6. After installing, go to the **Manage Apps** page, select the **PagerDuty Add On**, and click **Configure**. 
7. Click **Login with PagerDuty** and log in on the screen that pops up to connect your PagerDuty account.
8. Click **Connect Jira to PagerDuty** to open up the next screen where you will configure your account. 
9. Paste the **API Key** you copied from PagerDuty in Step 3 and click **Save**.
10. Add the required fields for the Jira instance that you’re working in and click **Save**. The user credentials should have read/write access to the connected projects.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/21666c9-jira-server-account-integration-api-key.png",
        "jira-server-account-integration-api-key.png",
        620,
        757,
        "#f7f8fa"
      ]
    }
  ]
}
[/block]
### Configure Automation Rules

To configure automation rules via the PagerDuty web app, continue to follow instructions below. If you would like to configure automation rules via API, please check out our [Jira Server Integration API documentation](https://developer.pagerduty.com/api-reference/reference/integration-jira-service/openapiv3.json).

11. Next, you will configure automation rules, which will allow you to automatically trigger incidents, create issues, and keep status updates synchronized between PagerDuty and Jira. Navigate to **Manage Apps** :fa-arrow-right: **PagerDuty Settings** :fa-arrow-right: **Configure** :fa-arrow-right: **Rules** tab and click **Create Rule**.
12. Enter a **Rule name**, **Select PagerDuty service(s)**, **Select JIRA Project(s)**, **Select JIRA Issue Type(s)** and you may *optionally* check the **Sync comments & notes** checkbox.
13. Check the following rule options based on your preferences:

####Automatically create PagerDuty incidents from JIRA issues

* **When issue matches JQL:** Enter your preferred JQL. Select whether you would like this rule to run **On issue create** and/or **On issue update**. 
* ***Additional actions after incident is created (optional)***: Select your preferred actions. 
* Another form will auto-populate below, and you may choose to add multiple conditions, based on your preferences.


####Сreate JIRA issues from PagerDuty incidents

* **Create issue when incident**: Select your preferred **PagerDuty incident state** that will generate a Jira issue. *Optionally*, you may also choose to specify the priority and/or the urgency by selecting an option from the **AND priority is one of** and/or **AND urgency is** dropdowns. 
* **Create issue into project**: Select the **Jira project** where you would like PagerDuty incidents to generate Jira issues. Next, select the **Issue type** that you would like generated, and if your Jira issue type has any required fields, you will need to set those required fields to populate by choosing **Additional actions on issue create (optional)**. 
* Another form will auto-populate below, and you may choose to add multiple conditions, based on your preferences.


####Automatically update Jira issue

* **When PagerDuty incident has linked issue AND**: Select your preferred **PagerDuty incident state** that will update a Jira issue. *Optionally*, you may also choose to specify the priority and/or the urgency by selecting an option from the **AND priority is one of** and/or **AND urgency is** dropdowns. 
* **Actions**: Select your preferred Jira issue action that will occur based on the condition specified above.
* Another form will auto-populate below, and you may choose to add multiple conditions, based on your preferences.


####Automatically update PagerDuty incident

* **When Issue status changes to**: Select your preferred **Jira status** that will update the PagerDuty incident.
* **Actions**: Select your preferred **PagerDuty incident action** that will occur based on the condition specified above.
* Another form will auto-populate below, and you may choose to add multiple conditions, based on your preferences.

Click **Save** to save your rule(s). You should see the following webhook check dialog if the connection was successful:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ad8a50c-jira-server-webhook-success-dialog.png",
        "jira-server-webhook-success-dialog.png",
        765,
        347,
        "#f6f8fb"
      ]
    }
  ]
}
[/block]
If you receive an unsuccessful webhook error, navigate to the **Rules** tab and click the **Check webhooks…** button to troubleshoot the error. Once the webhook check has been successfully completed, you may move on to the next section to link your PagerDuty and Jira accounts.

### Link PagerDuty and Jira User Accounts

Linking PagerDuty and Jira user accounts allows us to identify which user changed an incident or issue using the integration workflows. It also allows users to define who an incident/issue should be assigned to. If a user account is not linked and if the user hasn't configured a Jira fallback user (see step 17) then the integration will not pick up those user-made changes. You can either have a Jira administrator link user accounts, or individuals can link their own PagerDuty accounts between systems. 

* **To have a Jira administrator link the accounts**: Follow steps 14-17 below. 
* **To have individual users link their accounts**: Skip to step 18. 

14. From the **Jira Administration** menu in the top right corner, click **Manage Apps**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0330977-jira-server-manage-apps.png",
        "jira-server-manage-apps.png",
        244,
        307,
        "#d6deea"
      ]
    }
  ]
}
[/block]
15. Select **Manage Apps** from the left menu, click the **PagerDuty** add-on, then click **Configure**. 
16. Under **PagerDuty settings**, click the **User mapping** tab and click **Link Users** to start mapping user accounts between systems.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f75dd73-63a6716-jira-server-user-mapping-new.png",
        "63a6716-jira-server-user-mapping-new.png",
        1230,
        600,
        "#f8f9fa"
      ]
    }
  ]
}
[/block]
17. On this page you can also set up users to be optionally mapped based on email, and a fallback user in the event that a user wants to take action on an incident but their account isn’t mapped.
18. **To have individual users link their accounts**, they will need to go to an issue in your Jira project, and click on the **Users** icon to link their user accounts. If the icon is orange, their user account isn't linked. Once linked, the icon will appear grey.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/30beca5-jira-server-connect-users.png",
        "jira-server-connect-users.png",
        832,
        812,
        "#f5f6f6"
      ]
    }
  ]
}
[/block]
Once your Jira and PagerDuty accounts have been linked, the integration is complete.

### Connect Multiple PagerDuty Accounts

To connect multiple PagerDuty accounts, navigate to the **Account Integrations** page, click **Logout** at the bottom of the page. Click **Login with PagerDuty** and log in on the screen that pops up to connect your PagerDuty account. You will need to complete Steps 1-3 (above) and complete the [Link PagerDuty and Jira User Accounts](https://support.pagerduty.com/docs/jira-server#link-pagerduty-and-jira-user-accounts) section again based on your secondary account information.

### Connect Multiple Jira Accounts

To add another Jira account, log in to the secondary Jira instance and complete steps 1-13, above. 

## Jira Service Desk Required Steps

1. If you are integrating PagerDuty with Jira Service Desk, you need to ensure that the PagerDuty user account in Jira has the necessary permissions.
2. Add the `jira-servicedesk-users` group to the PagerDuty user account in Jira.
For each of your Service Desk projects, ensure that the PagerDuty user account has **Service Desk Team** access. 
   a. From the **Jira Administration** menu in the top right corner, click **Projects**.
   b. Select your Jira Service Desk **project**.
   c. Click the **Users and roles** tab under the Project settings navigation bar.
   d. Select the **Add users to a role** button.
   e. Add the `jira-servicedesk-users` group or **PagerDuty** user to the **Service Desk Team** role.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/12d9054-jira-server-add-user-role.png",
        "jira-server-add-user-role.png",
        1600,
        760,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
You can learn more about managing users and roles on the [Atlassian website](https://confluence.atlassian.com/adminjiracloud/managing-project-roles-776636382.html).

# FAQ

## Is this integration bi-directional?

Yes! You can create Jira issues from PagerDuty incidents and PagerDuty incidents from Jira issues. 

## What if my JIRA Server is behind a firewall?

In order to allow bi-directional integration between PagerDuty and your JIRA Server, it may be necessary for you to configure your firewall to allow for incoming traffic from PagerDuty. You can find more information about this and safelisting IP addresses in our [Knowledge Base](https://support.pagerduty.com/docs/whitelisting-ips#section-what-are-pagerdutys-ips-for-whitelisting-and-firewall-purposes). You’ll specifically need to safelist IPs for PagerDuty [webhooks](https://support.pagerduty.com/docs/whitelisting-ips#section-webhooks), the [REST API](https://support.pagerduty.com/docs/whitelisting-ips#section-rest-api), and specific IPs for [Jira Server](https://support.pagerduty.com/docs/whitelisting-ips#section-jira-server-integration).

## Does the JIRA Server integration support mandatory custom fields?

Yes. You can have PagerDuty populate mandatory Jira fields. They can be defined when [configuring](https://support.pagerduty.com/docs/jira-server-integration-guide-v4#%D1%81reate-jira-issues-from-pagerduty-incidents) the **Create Jira Issues from PagerDuty incidents** settings. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8676baa-jira-server-create-jira-issues-faq.png",
        "jira-server-create-jira-issues-faq.png",
        1600,
        460,
        "#eaeef7"
      ]
    }
  ]
}
[/block]
## When testing, I don’t see an incident or issue being created. 
To troubleshoot, the Jira administrator can navigate to global settings **:fa-cog:**, select **Manage Apps**, click on the **PagerDuty** app, and click **Configure**. In the **Configuration Settings**, locate the **Debug logs** tab. With this window still open, open another tab or window on your browser and then try to test the integration’s workflow. You will be able to see any errors or successes in the debug logs as long as you keep the window open while testing.   

## When I update the PagerDuty incident's status, the Jira ticket isn't getting updated. What's happening?

This can happen for the following reasons:

* The Jira project's workflow requires that some fields be populated when setting it to that given state, and those fields aren't populated. 
* The Jira project's workflow does not permit the transition between the issue states corresponding to the previous and current PagerDuty incident states. For instance, if your Jira workflow does not permit setting a **To-Do** status Jira ticket directly to **Done**, and the **Triggered** status in PagerDuty maps to **To-Do** while the **Resolved** status maps to **Done**, then if a triggered incident is resolved (i.e. without acknowledging it first) then the ticket will not move to the **Done** state because this modification is not permitted per your Jira project's configured workflow.

One way that you can ensure the workflow configuration does not interfere is to edit the statuses corresponding to acknowledged and/or resolved, and enabling transitions from all other statuses to it.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3f1f9a2-jira-server-remove-status.png",
        "jira-server-remove-status.png",
        279,
        317,
        "#f4f5f5"
      ]
    }
  ]
}
[/block]
## I just updated the priority of a PagerDuty incident, why didn't the priority update in the Jira issue?

The Jira Issue is only updated when the PagerDuty incident triggers an action that would trigger a v2 webhook. A full list of actions can be viewed in [our webhook documentation](https://v2.developer.pagerduty.com/docs/webhooks-v2-overview#webhook-types). If you'd like PagerDuty to trigger an action for PagerDuty incident priority changes, please make a feature request [with our Support Team](https://www.pagerduty.com/contact-us/).

## Can we turn off the PagerDuty sidebar app for projects that don't use PagerDuty?

You can disable the sidebar for a specific project by navigating to that project in Jira, clicking into the **Project Settings** :fa-arrow-right: **PagerDuty integration** and toggling **off** next to **Show PagerDuty issue sidebar for this project**.

## What happens to my workflow rules when I upgrade from another version to this version (4.x.x)?

If you upgrade from another version, we maintain all your existing workflow rules in the PagerDuty web app. They will continue to use the PagerDuty integration user, and they can be edited in the PagerDuty web app. New rules can be created in Jira, and the previously-created rules will appear in a read-only format.

If you wish to upgrade these rules to the v4 version, you can recreate them by [following steps 11-13](https://support.pagerduty.com/docs/jira-server#configure-automation-rules).