---
title: "Jira Cloud Integration Guide | PagerDuty"
slug: "jira-cloud"
excerpt: "Integration Guide for Jira Cloud"
hidden: false
createdAt: "2018-08-17T01:32:06.336Z"
updatedAt: "2020-10-09T23:06:24.283Z"
---
Jira Software is a project management tool that enables collaboration between teams within an organization. This guide will walk you through the process of configuring the Jira extension, so that you can create Jira issues from your PagerDuty incidents.

This extension currently only works with JIRA Cloud for PagerDuty customers on our Starter, Team, Business or Digital Operations plans. If you're using JIRA on-premises, check out our JIRA Server extension guide [here](https://support.pagerduty.com/v1/docs/jira-server).

This integration also supports Jira Service Desk.

# In Jira Software

Before you can start adding the extension to your services, your JIRA admin must first go to your JIRA instance and add the **PagerDuty Add-on** as follows:

1. Find the [PagerDuty Jira Cloud Extension](https://marketplace.atlassian.com/apps/1218243/pagerduty-jira-cloud-extension?hosting=cloud&tab=overview) add-on in the Atlassian Marketplace.
2. Once the app is installed, click **Manage** to go into it. On the following screen, click **Configure**.
3. You will see a key in the instructions that populate – copy this key, as it will need to be copied into PagerDuty.
4. You can go into PagerDuty to add the JIRA Extension. Note that for security reasons, **the key in the previous step must be used within 30 minutes.**

# In PagerDuty 
[block:callout]
{
  "type": "warning",
  "body": "You will need `admin` or `account owner` user permission in PagerDuty to create the Jira authentication token.",
  "title": "Note
</Callout>


1. Go to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions.**
2. Once you are on the **Extensions** page, click the **Jira Cloud** tile.
3. Your Jira admin should have already added the PagerDuty Add-on in Jira following the instructions above. Paste in your **Jira key** found in Step 3 above and click the **Connect Jira Account** button.
4. To add the Jira extension to your service(s), select the service(s) you want to add the extension to from the dropdown. Then, select the Jira project that you want to connect to that PagerDuty service. When you are done, click **Connect Jira Project**. 
5. After Connecting, you will be taken to a configuration page where you can: 
   * Select a **Configuration Name**. We recommend to use the name of the Jira project. For example: "Create Bug (Project Name)".
   * Choose a **Jira Issue Type**.
   * Choose an option for **Create Issues Mode**:
     - **Manually**: Must click the Configuration Name under the More Actions button on an incident details.
     - **Automatically**: PagerDuty will automatically create Issues in Jira
  * Create a Jira Query Language (JQL) statement which can automatically create PagerDuty incidents if a Jira issue matches the JQL **at creation**. Note: The issue must be in the same Jira project and be the same Jira Issue type. This will not work with Jira issues updated to match the JQL statement. If you are using Jira Service Desk, incidents are created from JQL *before* [automation rules](https://confluence.atlassian.com/servicedeskcloud/automating-your-service-desk-732528900.html) are applied.
   * Map the status of PagerDuty incidents to the status of Jira Issues.
   * Optionally, sync PagerDuty incident priority levels with Jira priority levels.
   * Optionally, sync custom fields between a PagerDuty Attribute and Jira Issue Field Name.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cdf7e1b-Jira_Cloud_-_JQL.png",
        "Jira Cloud - JQL.png",
        2272,
        2184,
        "#fbfbfb"
      ]
    }
  ]
}
[/block]
6. To create a Jira issue from a PagerDuty incident, go to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click your desired **Service**. Then open one of the incidents on your service.
7. On the incident details page of your incident, click **More Actions** :fa-arrow-right: **Create Jira Issue**. 
8. When a JIRA issue has been created, you will see a confirmation message appear, and you can click to **View Jira Issue**, which will open the JIRA issue in a new tab. If you refresh the page, you will also see it listed in the incident.

# Jira Ops 

PagerDuty’s Jira Software integration supports Jira Ops projects. These projects can be connected to PagerDuty Services using the instructions above. If you already have PagerDuty connected to your Jira Cloud instance, you will need to delete your Jira configuration from PagerDuty, then re-setup the integration. This is so that an additional authorization step can be performed.

**It is highly recommended that you document existing mappings you may have between PagerDuty and Jira.**

To delete the configuration data:
1. Go to the **Apps and Add-Ons** :fa-th-large: menu and select **Jira Cloud**.
2. Expand the **How to uninstall** link under the configuration table.
3. Click the **Delete Configuration** button.

## Jira Service Desk Required Steps

Follow instructions [here](https://support.pagerduty.com/docs/jira-server#section-jira-service-desk-required-steps) in order to configure the Jira Service Desk integration.

## FAQ 

### Can I add configure the Jira Cloud extension with multiple services?

Yes you can, you can continue to select multiple PagerDuty services in step 4 under the **In PagerDuty** section.

###Is this integration bi-directional?

Yes! You can create Jira issues from PagerDuty incidents and PagerDuty incidents from Jira issues.

**Note**: As users are not mapped from PagerDuty to Jira, a Jira status is not able to move the PagerDuty status to **Acknowledged**. 

The flow of status changes can not move backwards on PagerDuty via the mapping of statuses.

You can create PagerDuty incidents from Jira issues by navigating to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Jira Cloud** (Edit on Jira Cloud Extension Page) :fa-arrow-right: **Edit the Jira Cloud Configuration** :fa-arrow-right: check the **Create incidents with JQL** box and then input your JQL query in the following field. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fbfd880-jira-cloud-jql-incident-config.png",
        "jira-cloud-jql-incident-config.png",
        751,
        583,
        "#f8f6f6"
      ]
    }
  ]
}
[/block]
### Can I create multiple JIRA issues for the same incident?

No, only one Jira issue will be created.

### Can I create Jira issues from resolved PagerDuty incidents? 

Yes, but it will create them with status "Done" in JIRA.

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
3. A text box input will appear. Enter the value you'd like to use for the **label** field. Note you can add multiple values by using a comma as a delimiter. (I.E: *blue,red*) However, due to restrictions on Jira's end, **this field does not allow any white space to be passed in.**

### How can I populate the **Reporter** or **Assignee** field from PagerDuty?

 You can populate this field while configuring the Jira Project in PagerDuty: 
1. Click the **New Field** button to create a custom field to sync data.
2. Choose **Constant value** as the **PagerDuty Attribute**.
3. In the text box, input the Jira username.

### When I update the PagerDuty incident's status, the Jira ticket isn't getting updated. What's happening?

This can happen for the following reasons:

* The Jira project's workflow requires some fields be populated when setting it to that given state, and those fields aren't populated. You can configure the Jira extension to populate them when creating Jira incidents using the above method.
* The Jira project's workflow does not permit the transition between the issue states corresponding to the previous and current PagerDuty incident states. For instance, if your Jira workflow does not permit setting a "To-Do" status Jira ticket directly to "Done", and the Triggered status in PagerDuty maps to To-Do while the Resolved status maps to Done, then if a triggered incident is resolved (i.e. without acknowledging it first) then the ticket will not move to the Done state because this modification is not permitted per your Jira project's configured workflow.

### I just updated the  **priority** of a PagerDuty incident, why didn't the **priority** update in the Jira issue?

The Jira Issue is only updated when the PagerDuty incident triggers an action that would trigger a v2 webhook - full list of actions can be viewed [in our webhook documentation.](https://v2.developer.pagerduty.com/docs/webhooks-v2-overview#webhook-types). If you'd like PagerDuty to trigger an action for PagerDuty incident priority changes, please make a feature request to support@pagerduty.com.

### Why do I receive a "JIRA test failed: cannot change status to requested state" error when trying to create a test issue?

The "Create Test Issue" in PagerDuty tries to create a Jira issue and automatically maps it to the Resolved mapping in Jira. You will see this error if the [workflow](https://confluence.atlassian.com/adminjiraserver072/working-with-workflows-828787890.html) for your Jira project does not allow the Jira issue to transition directly from the Triggered status mapping to the Resolved status mapping. 

Please create a Jira Issue from a normal PagerDuty incident to determine if the integration works as expected.