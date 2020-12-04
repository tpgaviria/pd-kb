---
title: "Jira Server v3 Integration Guide | PagerDuty"
slug: "jira-server-v3"
excerpt: "Integration Guide for Jira Server"
hidden: true
createdAt: "2018-08-17T01:05:57.803Z"
updatedAt: "2020-10-09T23:10:55.607Z"
---
This integration is for Jira **Server** (self-hosted) for Jira Server 7.2.0 - 8.4.0, which can be downloaded from the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1218226/pagerduty-for-jira-server/version-history#b306010). If you use Jira Cloud, please see the Jira Cloud [integration guide](https://support.pagerduty.com/v1/docs/jira-cloud).

PagerDuty's integration with Jira Server enables customers to have bi-directional sync between Atlassian Jira Software. Incidents triggered in PagerDuty can automatically open an issue in Jira and includes the ability to populate issue fields, whether they are out-of-box or custom. Issues in Jira can also trigger a PagerDuty incident, helping you notify your team of time-sensitive issues.

Additional capabilities include: Incident priority synchronization, notes synchronization and state mapping.

This integration also supports Jira Service Desk.
[block:callout]
{
  "type": "info",
  "title": "Looking For a Different Version?",
  "body": "This guide is for the Jira Server v3 integration. If you would like to use the latest version, please go to our [Jira Server v4 integration guide](https://support.pagerduty.com/docs/jira-server)."
}
[/block]
# Create PagerDuty Authentication Token
[block:callout]
{
  "type": "warning",
  "body": "You will need an Admin or Account Owner user permission in PagerDuty to create the Jira authentication token.",
  "title": "Required User Permissions"
}
[/block]
In PagerDuty, you'll need to add the Jira Server extension. A unique authentication token will be created. The token will be used in Jira for the next step.

1. In the top right corner of your screen, click **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions**.
2. Click **+ New Extension** and select **Jira Server**. A screen will appear prompting you to open the Jira Server Extension page, click **Open Jira Server Page**.
3. From the Jira Server configuration page, copy the **Authentication Token** to be used later on in this guide.

![](https://files.readme.io/536852a-jira-server-authentication-token.png)

4. Login to your Jira Server application. **Note:** you can’t connect PagerDuty to Jira Server until you paste the authentication token into the PagerDuty add-on in Jira.

# Add PagerDuty Plugin in Jira

In Jira, you'll need to download the [PagerDuty for Jira Server plugin](https://marketplace.atlassian.com/apps/1218226/pagerduty-jira-server-extension?hosting=server&tab=overview) and add your PagerDuty authentication token.
[block:callout]
{
  "type": "warning",
  "body": "At minimum, you must have permission to perform the following actions in Jira: \n* Create, update and comment on issues\n* Run JQL searches\n* Read Projects\n* Read Settings (i.e., globally configured Priorities)",
  "title": "Required User Permissions"
}
[/block]
1. From the **Jira Administration** menu in the top right corner, click **Add Ons.**


![](https://files.readme.io/1f71e2a-jira-server-integration-admin.png)

2. Click the **Add-ons** tab, then click **Find new add-ons** in the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1218226/pagerduty-jira-server-extension?hosting=server&tab=overview). Search for    **PagerDuty for Jira Server** and click the **Install** button. 

![](https://files.readme.io/d0b6f82-jira-server-integration-addinginjjira.png)

3. After returning to the **Manage Add On** page, select the **PagerDuty Add On**, and click **Configure**.

![](https://files.readme.io/e32deb8-jira-server-integration-plugin.png)

4. Add the **Authentication Token** you copied from the PagerDuty extension configuration and click **Save.**


5. Ensure a user account with the name **PagerDuty** was created in Jira, with write access to applicable issues / projects. You can check out the minimum required project roles in our [FAQ](https://support.pagerduty.com/docs/jira-server#section-faq).

# Connect PagerDuty to Jira Server

The last step is to connect PagerDuty to Jira and configure the mapping between a PagerDuty Service and a Jira project.

1. Add the URL of your Jira server and click **Connect JIRA Server.**


![](https://files.readme.io/31bd375-jira-server-integration-connect.png)

2. If the connection was successful, you should be able to select a PagerDuty service and corresponding Jira project. After selecting both, click **Connect JIRA Project**. 


![](https://files.readme.io/7a51b56-jira-server-integration-connect2.png)

3. After Connecting, you will be taken to a configuration page where you can: 
   * Select a **Configuration Name**. We recommend to use the name of the Jira project. For example: "Create Bug (Project Name)".
   * Choose a **Jira Issue Type**.
   * Choose an option for **Create Issues Mode**:
     - **Manually**: Must click the Configuration Name under the More Actions button on an incident details.
     - **Automatically**: PagerDuty will automatically create Issues in Jira
   * Create a Jira Query Language (JQL) statement which can automatically create PagerDuty incidents if a Jira issue matches the JQL. Note: The issue must be in the same Jira project and be the same Jira Issue type. If you are using Jira Service Desk, incidents are created from JQL *before* [automation rules](https://confluence.atlassian.com/servicedeskserver041/automating-your-service-desk-969530933.html) are applied.
   * Map the status of PagerDuty incidents to the status of Jira Issues.
   * Optionally, sync notes between PagerDuty and Jira. **Note: this option requires you to select a user, and each note appear as coming from this user
   * Optionally, sync PagerDuty incident priority levels with Jira priority levels.
   * Optionally, sync custom fields between a PagerDuty Attribute and Jira Issue Field Name.

![](https://files.readme.io/e993613-jira-server-integration-config.png)

[/block]
4. Click **Create Test Issue** to test the connection between PagerDuty and your JIRA Server. You should see a success message at the top of the modal and the new ticket will be visible in JIRA.
5. Click **Save**, and you’re done :tada: .

## Jira Service Desk Required Steps
If you are integrating PagerDuty with Jira Service Desk, you need to ensure that the PagerDuty user account in Jira has the necessary permissions.

1. Add the **jira-servicedesk-users** group to the PagerDuty user account
2. For each of your Service Desk projects, ensure that the PagerDuty user account has **Service Desk Team** access.
    a. From the **Jira Administration** menu in the top right corner, click **Projects.**
    b. Select your Jira Service Desk project.
    c. Click the **Users and roles** tab under the Project settings navigation bar.
    d. Select the **Add users to a role** button. 
    e. Add the **jira-servicedesk-users** group or **PagerDuty** user to the **Service Desk Team** role

![](https://files.readme.io/d23f787-Screen_Shot_2018-10-31_at_7.33.35_AM.png)

 You can learn more about managing users and roles on the [Atlassian website](https://confluence.atlassian.com/adminjiracloud/managing-project-roles-776636382.html). 

## FAQ

### Is this integration bidirectional?

Yes! You can create Jira issues from PagerDuty incidents and PagerDuty incidents from Jira issues.

**Note:** As users are not mapped from PagerDuty to Jira, a Jira status is not able to move the PagerDuty status to **Acknowledged**. 

### What items are created in Jira with this integration?

When you install the add-on from the Atlassian Marketplace, a user is created in Jira called `PagerDuty`. Please ensure this user has write access to applicable issues / projects.

### What if my JIRA Server is behind a firewall?

In order to allow bidirectional integration between PagerDuty and your JIRA Server, it may be necessary for you to configure your firewall to allow for incoming traffic from PagerDuty. You can find more information about this and safelisting IP addresses in our [knowledge base](https://support.pagerduty.com/docs/whitelisting-ips#section-what-are-pagerdutys-ips-for-whitelisting-and-firewall-purposes). You’ll specifically need to safelist IPs for PagerDuty [webhooks](https://support.pagerduty.com/docs/whitelisting-ips#section-webhooks), the [REST API](https://support.pagerduty.com/docs/whitelisting-ips#section-rest-api), and specific IPs for [Jira Server](https://support.pagerduty.com/docs/whitelisting-ips#section-jira-server-integration).

### Does the JIRA Server integration support mandatory custom fields?

Yes. You can have PagerDuty populate Jira fields. This can be defined when [configuring](https://support.pagerduty.com/v1/docs/jira-server#section-connect-pagerduty-to-jira-server) the integration in PagerDuty.

### When triggering a test incident, I am getting an error that says “Sorry, you can’t create any issues right now, as you need to have access to a JIRA application to be able to create issues“. How can I fix this?

When this extension is created, it should create a user called `PagerDuty` in JIRA. This user requires write access to the applicable issues / projects in order for the integration to work.

To make sure this is set up correctly, you can follow these steps in JIRA:

1. In your JIRA account, click the :fa-cog: icon near the top right :fa-arrow-right: User Management button.
2. You will be prompted to enter a Jira Administrator Username and Password.
3. Select the `PagerDuty` user.
4. After Selecting the `PagerDuty` user, select the `View Project Roles` button at the top right. You should then be brought to the permissions for the specific Jira projects. (**NOTE: The user's name in JIRA must be `PagerDuty`- any other name, even `PagerDuty1`, will not work).

Once you have set this user’s permissions, try sending a test incident again.

### How do I map priorities from Jira to PagerDuty? 

It's possible to map priorities while connecting the [Jira project in PagerDuty](https://support.pagerduty.com/v1/docs/jira-server#section-connect-pagerduty-to-jira-server). To add or change priority mapping for existing Jira projects, go to your Jira Server extension page in PagerDuty  and select :fa-cog: :fa-arrow-right: **Edit** for the applicable Jira project. 

### What if I only want specific Jira Issues to trigger Incidents?

You can execute more granular control over what triggers a PagerDuty Incident by using JQL in the PagerDuty-side configuration. You can find this by navigating to Extensions in your PagerDuty account. Once you select your Jira Server Extension, you'll be able to edit preexisting Service to Project mappings by selecting :fa-cog:, and you can also add new ones. It is very important that the JQL first be tested in Jira to ensure it matches the issues you'd like to have trigger your PagerDuty Incidents. For example, let's say I only want to trigger a PagerDuty Incident if a high-priority ticket is opened in my SRE Project. The JQL I use might look something like this:

`(status = Open AND project = SRE ) AND priority = High OR priority = Highest`

You can use different JQL for each Project you add, so there's no need to craft a catch-all JQL statement for all of your Jira Projects.

**Note:** Automatic PagerDuty incident creation via JQL is possibly for new and existing Jira Issues.

###When I try to save the Authentication Token in Jira, I see an error. What’s going on?

The most common cause of this issue is that app.pagerduty.com is not accessible from your Jira Server. In this case, you’ll need to check your Network and Firewall settings to ensure our IP addresses are whitelisted. You can read more about this [here](https://support.pagerduty.com/docs/whitelisting-ips#section-what-are-pagerdutys-ips-for-whitelisting-and-firewall-purposes). A final possibility is that your Authentication Token has expired, and is now invalid. The Authentication Token you get from PagerDuty expires after 15 minutes of inactivity- so if you generated the token in PagerDuty and waited longer than 15 minutes before adding it to Jira, you’ll need to refresh the PagerDuty page to generate a new token to use.

### While linking my Jira Project in PagerDuty, I get an error and my Project can’t be added.

If you’ve already made sure that you’ve whitelisted the [PagerDuty IP addresses](https://support.pagerduty.com/docs/whitelisting-ips#section-what-are-pagerdutys-ips-for-whitelisting-and-firewall-purposes), check your SSL certificate. While we do support HTTP, you’ll run into this issue if your Jira instance has an expired or invalid SSL Cert set up.

### When I try to click ‘Create a Test Issue’ from PagerDuty, I get an error or nothing is created in my Jira Instance.

You'll want to double check a few things: 

* In Jira, check that the PagerDuty user exists and has administrative rights to the Project you’re attempting to open a ticket within.
* In Jira, review if there are required mandatory fields. If they are, then you should sync PagerDuty fields with the mandatory Jira fields while [configuring](https://support.pagerduty.com/v1/docs/jira-server#section-connect-pagerduty-to-jira-server) the integration in PagerDuty.
* In PagerDuty, ensure there is a v2 [REST API key](https://support.pagerduty.com/v1/docs/using-the-api#section-generating-a-general-access-rest-api-key) with the description "API Key for add-on JIRA Server".

### What types of Jira fields can I populate from PagerDuty? 

With the PagerDuty integration for Jira, you can populate the following types of fields:
* Any field that takes a string
* Labels
* Number Fields
* Select Lists (single & multi-choice)
* Text fields (single & multi-line)
* URLs
* User Pickers (single user)

### How can I populate the **label** fields from PagerDuty?

You can populate this field while configuring the Jira Project in PagerDuty: 
1. Click the **New Field** button to create a custom field to sync data.
2. Choose **Constant value** as the **PagerDuty Attribute**.
3. A text box input will appear. Enter the value you'd like to use for the **label** field. Note you can add multiple values by using a comma as a delimiter. (I.E: *blue,red*)

**Please note:** The "Create Test Issue" does not respect the comma as a delimiter, and will create a Jira Issue with one label. The comma delimiter should work as expected for Jira Issues created from a PagerDuty incident.

### How can I populate the **Reporter** or **Assignee** field from PagerDuty?

 You can populate this field while configuring the Jira Project in PagerDuty: 
1. Click the **New Field** button to create a custom field to sync data.
2. Choose **Constant value** as the **PagerDuty Attribute**.
3. In the text box, input the Jira username.

### When I update the PagerDuty incident's status, the Jira ticket isn't getting updated. What's happening?

This can happen for the following reasons:

* The Jira project's workflow requires some fields be populated when setting it to that given state, and those fields aren't populated. You can configure the Jira extension to populate them when creating Jira incidents using the above method.
* The Jira project's workflow does not permit the transition between the issue states corresponding to the previous and current PagerDuty incident states. For instance, if your Jira workflow does not permit setting a "To-Do" status Jira ticket directly to "Done", and the Triggered status in PagerDuty maps to To-Do while the Resolved status maps to Done, then if a triggered incident is resolved (i.e. without acknowledging it first) then the ticket will not move to the Done state because this modification is not permitted per your Jira project's configured workflow.

One way that you can ensure the workflow configuration does not interfere is by editing the statuses corresponding to acknowledged and/or resolved, and enabling transitions from all other statuses to it.

![](https://files.readme.io/418bc7c-Screen_Shot_2019-04-08_at_10.25.45_AM.png)

[/block]
### I just updated the  **priority** of a PagerDuty incident, why didn't the **priority** update in the Jira issue?

The Jira Issue is only updated when the PagerDuty incident triggers an action that would trigger a v2 webhook - full list of actions can be viewed [in our webhook documentation](https://v2.developer.pagerduty.com/docs/webhooks-v2-overview#webhook-types). If you'd like PagerDuty to trigger an action for PagerDuty incident priority changes, please make a feature request to support@pagerduty.com. 

### How does PagerDuty authenticate when connecting to Jira Server?

The HTTP request to Jira will include an `Authorization` header containing a JSON Web Token (JWT) as a Bearer token.

### Why do I receive a "JIRA test failed: cannot change status to requested state" error when trying to create a test issue?

The "Create Test Issue" in PagerDuty tries to create a Jira issue and automatically maps it to the Resolved mapping in Jira. You will see this error if the [workflow](https://confluence.atlassian.com/adminjiraserver072/working-with-workflows-828787890.html) for your Jira project does not allow the Jira issue to transition directly from the Triggered status mapping to the Resolved status mapping. 

Please create a Jira Issue from a normal PagerDuty incident to determine if the integration works as expected.

### What are the minimum required permissions for the **PagerDuty** user in Jira?

Below is a list of the minimum required [project roles](https://confluence.atlassian.com/adminjiracloud/managing-project-roles-776636382.html) for the **PagerDuty** user in Jira:

* Create Issues
* Edit Issues
* Transition Issues
* Resolve Issues