---
title: "ServiceNow Integration Guide | PagerDuty"
slug: "servicenow-integration-guide"
excerpt: "Configuring the v7 Integration"
hidden: false
createdAt: "2020-07-30T23:07:58.534Z"
updatedAt: "2020-11-18T21:47:29.477Z"
---
# ServiceNow + PagerDuty Integration Benefits

* Leverage ServiceNow’s workflow and ticketing capabilities with PagerDuty’s robust on-call scheduling, notifications and escalations.
* Run Response Plays, post status updates and set the impacted Business Service on a PagerDuty incident all from the ServiceNow interface. 
* Perform Assignment Group and priority mapping to PagerDuty escalation policies.
* Provision Business and technical services from ServiceNow to PagerDuty along with their dependency relationships.
* Author custom code for outbound REST API calls.
* MID server support.

#How it Works

Incident communication between ServiceNow and PagerDuty is bi-directional, allowing users to  trigger, reassign, resolve, use response plays, post status updates and set impacted Business Services in either system. The following workflows are supported:

* Third party monitoring tool integrations detect an issue and trigger an incident in PagerDuty. Users receive notifications from PagerDuty and they can acknowledge/resolve via PagerDuty. A ServiceNow ticket is opened when a PagerDuty incident is triggered and above actions are kept in sync for the lifecycle of the incident.
* A ticket is filed in ServiceNow, which automatically triggers an incident in PagerDuty and notifies the user. The user takes ownership via PagerDuty and above actions from PagerDuty are kept in sync with ServiceNow.

#Requirements

**In ServiceNow**: 

* A ServiceNow Administrator role is required for configuration. 
* This article details installing the latest version 7 of our ServiceNow integration, which is certified for ServiceNow Kingston, London, and Madrid, New York, Orlando and Paris. 

**In PagerDuty**: 

* An Admin, Global Admin or Account Owner base role is required for configuration. 
* If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

#Quick Links

* More information on [How the integration works](/docs/servicenow) and [Advanced Configuration](/docs/advanced-servicenow-configuration)
* [Troubleshooting the ServiceNow integration](/docs/servicenow-troubleshooting-guide)
* [Frequently Asked Questions](/docs/servicenow-faq)
[block:callout]
{
  "type": "info",
  "title": "Looking for another version?",
  "body": "[V6 of our ServiceNow Integration](https://support.pagerduty.com/docs/servicenow-integration-guide-v6) is also available.
</Callout>


#Integration Walkthrough

#Step 1: Complete ServiceNow Pre-Install Requirements

##1.1 ServiceNow Application Access Controls

In order for the integration to function, a ServiceNow administrator must allow configuration access in the following ServiceNow tables. In the left hand application navigator, search **System Definition** and select the **Tables** module. Search for and open the following records and perform the specified actions: 
[block:parameters]
{
  "data": {
    "h-0": "`sys_user`, `sys_user_group`, and `sys_user_grmember`",
    "0-0": "Select the Application Access tab and ensure the following are checked:\n\n- **Can read**\n- **Can create**\n- ** Can Update**\n- **Allow configuration**\n\nClick **Update** in the upper right of each to save.",
    "h-1": "",
    "h-2": "",
    "0-1": "",
    "0-2": ""
  },
  "cols": 1,
  "rows": 1
}
[/block]
## 1.2 Integration Installation

Install the [PagerDuty integration from the ServiceNow Store](https://store.servicenow.com/sn_appstore_store.do#!/store/application/39a9d9664f834e00dd657bb28110c77b/7.0.2?referer=%2Fstore%2Fsearch%3Flistingtype%3Dallintegrations%25253Bancillary_app%25253Bcertified_apps%25253Bcontent%25253Bindustry_solution%25253Boem%25253Butility%26q%3Dpagerduty&sl=sh).

###1.3 Add PagerDuty Fields to Views (Optional)

If you wish to view the PagerDuty ID fields within ServiceNow, they will need to be manually added to the Group, User and Incident views. This will make it easier to see which ServiceNow objects are mapped to PagerDuty. Instructions are detailed in [Show or hide fields on a form](https://docs.servicenow.com/bundle/jakarta-platform-administration/page/administer/form-administration/task/t_ConfigureAForm.html) in ServiceNow’s documentation.

1. It is recommended that you add the PagerDuty fields to the User and Group list views by clicking the gear icon in the upper left corner of the grid to customize the display of columns. This will make them visible in your list views only.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f94e5b9-servicenow-personalize-list.png",
        "servicenow-personalize-list.png",
        750,
        213,
        "#8a9797"
      ]
    }
  ]
}
[/block]
2. The following is the list of available PagerDuty fields that you can add to the various list views or forms in ServiceNow: 

[block:parameters]
{
  "data": {
    "0-0": "User list view and user form",
    "1-0": "Group list view and individual Group form",
    "2-0": "CMDB CI Application list view and individual CI form",
    "3-0": "Incident list view and Incident form",
    "0-1": "- PagerDuty service\n- PagerDuty escalation\n- PagerDuty webhook\n- PagerDuty team\n- PagerDuty schedule",
    "1-1": "- PagerDuty service\n- PagerDuty escalation\n- PagerDuty webhook\n- PagerDuty team\n- PagerDuty schedule",
    "2-1": "- PagerDuty service\n- PagerDuty webhook",
    "3-1": "- PagerDuty ID",
    "h-0": "List Views and Forms",
    "h-1": "PagerDuty Fields"
  },
  "cols": 2,
  "rows": 4
}
[/block]
# Step 2: Configuration In PagerDuty

## 2.1 Create a PagerDuty API Access Key 

 1. Log in to your PagerDuty account in the web app. Navigate to **Apps and Add-Ons** :fa-th-large: :fa-arrow-right: **API Access**.
 2. On the API Access Keys page, click the **Create New API Key** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/537174f-servicenow-create-pagerduty-api-access-key.png",
        "servicenow-create-pagerduty-api-access-key.png",
        1169,
        161,
        "#ebf1f1"
      ]
    }
  ]
}
[/block]
3. In the dialog that pops up, enter a **Description** for your key. You will also have the option to create the key as Read-only; leave this box **unchecked** as a full API key is required. Click **Create key** to save.
4. Next you will see a dialog displaying your API key. **Copy this key and save it in a secure place**, as you will not have access to the key after this step. If you lose a key that you created previously and need access to it again, you should remove the key and create a new one. Click **Close** once you have successfully copied and saved your key.

##2.2 Create a Default PagerDuty User Account for ServiceNow

This integration requires ServiceNow to have access to your PagerDuty account both by an API token and a PagerDuty user account. The PagerDuty user account is required so that non-PagerDuty users can take action in ServiceNow and the actions will be reflected in PagerDuty.

1. In your PagerDuty account, navigate to **People**, select **Users** and click the green **Add Users** button.
2. Enter `ServiceNow User` in the **Name** field and enter any valid email address in the **Email** field. Copy this email and save it in a safe place for later steps when you will be entering it into ServiceNow. Once you have saved this email, select **Manager** as the **Base Role** and click **Add** and **Send Invitations** to save. 
3. You will now see the ServiceNow User in your PagerDuty Users list. Click the **user name** and take note of the 7-character alphanumeric user ID in the URL of this page. E.g., If your URL reads `https://your-subdomain.pagerduty.com/users/PXXXXXX` the user ID would be `PXXXXXX`. Copy this user ID and keep it, along with this users’ email, in a safe place. In later steps, you will also be entering this user ID into ServiceNow.

# Step 3: Configuration in Your ServiceNow Instance

##3.1 Create a ServiceNow User Account For Webhook Authentication

The PagerDuty integration also requires a ServiceNow user account to operate under. This enables PagerDuty to sync actions back to ServiceNow via webhooks. This design serves as a security feature, and allows you to control the integration’s permissions and roles within ServiceNow.

1. Log in to your ServiceNow instance. In the ServiceNow application navigator, search **Organization** :fa-arrow-right: **Users** and click **New** to create a new user account for PagerDuty application use. 
2. Enter  a **User ID**, **First/Last name** and **Password** for the user. You can use any desired username and password. **Copy the username and password and keep them in a safe place**, as you will need to provide them in the PagerDuty Settings (within the ServiceNow UI) in a later step. If the **Web service access only** and **Internal Integration User** options are available, you can optionally select these checkboxes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3110243-servicenow-enter-user-information.png",
        "servicenow-enter-user-information.png",
        960,
        898,
        "#faf5f4"
      ]
    }
  ]
}
[/block]
3. In the  **Email** field, enter the same email that you entered for the new user in PagerDuty (step 2 of the **Create a Default User Account for ServiceNow** section, above). This will result in requests being properly formatted with a PagerDuty-From header. Click **Submit** and then search and click into the user profile.
4. Under the **Roles** tab, select **Edit** and assign to the user the following three roles: `itil`, `rest_service`, and `x_pd_integration.admin`. Click **Save** to be returned to the User form.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/903dd64-servicenow-add-roles.png",
        "servicenow-add-roles.png",
        1199,
        828,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]
The new user account that you created requires the ability to make API requests. This allows PagerDuty to create incidents in ServiceNow and action existing Incidents (such as changing assignment). If your ServiceNow instance allows all users to perform REST API calls, providing the itil and the `x_pd_integration.admin` role should be sufficient. If REST API access is restricted by role, provide the necessary role to the user account. In many cases, this is either the  `snc_platform_rest_api_access` or the  `rest_service` role. 
5. In the **PagerDuty ID** field, enter the 7 character user ID of the default PagerDuty user account (generated in step 3 of Create a Default PagerDuty User Account for ServiceNow, above).

To summarize what should be completed this far:

  * A default PagerDuty user account has been created for ServiceNow to use.
  * An API Key has been created in PagerDuty.
  * A ServiceNow user account has been created for the PagerDuty integration to use.
  * The above user accounts have been mapped to each other via their shared email address and the PagerDuty User ID. 

If all of these prerequisites have been fulfilled, **Update** the user record in ServiceNow. You may now begin configuring the PagerDuty Settings page in ServiceNow.

##3.2: Configure PagerDuty Settings in ServiceNow

Please note that most of the settings for the integration can be set by navigating to the **PagerDuty** application :fa-arrow-right: **Configuration** :fa-arrow-right: **PagerDuty Settings**, accessed through the application navigator of your ServiceNow instance:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3f0365c-servicenow-pagerduty-settings.png",
        "servicenow-pagerduty-settings.png",
        2090,
        1284,
        "#b9bdbe"
      ]
    }
  ]
}
[/block]
You may see a warning at the top of the page indicating that you need to switch into the PagerDuty application scope. Proceed with this step if you are prompted. Once done, the PagerDuty Settings page should become editable.

1. In your ServiceNow instance, navigate to **PagerDuty** :fa-arrow-right: **Configuration** :fa-arrow-right: **PagerDuty Settings** in the application navigator, and enter the **user ID** and **password** of the new ServiceNow user into the **ServiceNow user for authentication** and **ServiceNow user password for authentication** fields.

2. Input information in the following fields:
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Input Instructions",
    "0-0": "Default PagerDuty User ID to use",
    "1-0": "REST API endpoint URL",
    "2-0": "PagerDuty instance URL",
    "3-0": "PagerDuty API access key",
    "0-1": "Enter the **user ID of the default user you created in PagerDuty** (the 7-character alphanumeric ID starting with `P` from step 3 of the Create a Default User Account for ServiceNow section above).\n\n **Setting the default PagerDuty user, and doing so correctly, is important**. The default PagerDuty ID must be a PagerDuty user ID, not a ServiceNow user ID or email address. Moreover, the PagerDuty user's default role must be at least Manager or higher. This ensures that ServiceNow users who do not have a PagerDuty account can perform the provisioning of users/groups, etc. If not all of these conditions are met, the integration will be unable to reassign or resolve incidents in PagerDuty when they are reassigned or resolved by a user in ServiceNow who does not have any corresponding PagerDuty account. It may also impact the ability to provision users and groups from ServiceNow to PagerDuty.",
    "1-1": "This should be left as the default, `https://api.pagerduty.com`.",
    "2-1": "Enter your **PagerDuty subdomain URL**. e.g. `yoursubdomain.pagerduty.com`.",
    "3-1": "Enter the **API key** generated in the steps above."
  },
  "cols": 2,
  "rows": 4
}
[/block]
 Once you have provided the necessary configuration on the PagerDuty Settings page, click **Save**.

3. Validate that the integration works by clicking **Configuration** :fa-arrow-right: **Test REST API Connection**. You should get a Connection test successful (200) response if everything is working properly:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8ea5315-servicenow-rest-api-connection.png",
        "servicenow-rest-api-connection.png",
        1429,
        478,
        "#c3c7c7"
      ]
    }
  ]
}
[/block]
4. Validate that the ServiceNow user account was successfully configured by clicking **Configuration** :fa-arrow-right: **Test ServiceNow User Authentication**. You should get a ServiceNow user authentication test successful (200) response if everything is working properly. Upon successful completion of the two tests, initial configuration is now complete. 

5. Validate that the Default User settings were properly configured. To do this, click **Test Default User Settings**. You should see a series of success messages. If there are any changes required, you will be informed of what changes are required.

##3.3 Add the ServiceNow Extension to an Existing PagerDuty Service

**If you would like to add the ServiceNow extension to an existing PagerDuty service**, as opposed to creating a new one, use the following instructions. **If you wish to create a new service**, please skip this section and move on to [Step 3.4: Review PagerDuty Settings in ServiceNow](https://support.pagerduty.com/docs/servicenow-integration-guide#34-review-pagerduty-settings-in-servicenow).

###Option 1: Manually Configure the Extension in PagerDuty

*This option requires that you have access to the username and password of the ServiceNow account that PagerDuty uses.*

1. In your PagerDuty account, navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the service **name** and click **Create Extension**.
2. In the **Extension Type** field, search and select **ServiceNow (v7)** and enter a **Name** in the format `servicenow-service-name` (e.g., servicenow-shopping-cart). In the following fields, enter:
[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Input Instructions",
    "0-0": "ServiceNow URL",
    "1-0": "ServiceNow User ID and ServiceNow Password",
    "2-0": "Sync Options",
    "3-0": "Incident Type",
    "0-1": "Enter the **URL in the following format**: \n`https://[INSTANCE-NAME].service-now.com/api/x_pd_integration/pagerduty2sn`",
    "1-1": "Enter the **User ID** and **Password** created in step 2 of the **Create an Integration User Account For Webhook Authentication** section, above.",
    "2-1": "Choose your preference:\n\n- **Sync All Incidents** will sync all new incidents to your ServiceNow instance.\n- **Manually Sync Incidents** allows you to choose which incidents you want to sync, by adding the option to **Sync with ServiceNow** on the incident details page.",
    "3-1": "Choose your preference:\n\n- **Incident** will create Incidents in ServiceNow. \n- **Security Incident** will generate a ServiceNow Security Incident."
  },
  "cols": 2,
  "rows": 4
}
[/block]
3. Click **Save**.

###Option 2: Use the ServiceNow Integration to Provision the PagerDuty Extension

*This method does not require access to the username and password of the ServiceNow account that PagerDuty uses. Instead, access to the x_pd_integration.admin role in ServiceNow is required so that you can provision a new PagerDuty Extension using the integration.*

1. Identify how ServiceNow maps to PagerDuty. ServiceNow can map Configuration Groups and Assignment Groups to PagerDuty, or just Assignment Groups. This is configured on the [PagerDuty Settings](https://support.pagerduty.com/docs/servicenow-integration-guide#34-review-pagerduty-settings-in-servicenow) page within ServiceNow.

   * If you are only mapping Assignment Groups, navigate to the Assignment Group that you want to map to PagerDuty.
   * If you map Configuration Items to PagerDuty, navigate to the Configuration Item that you want to map to PagerDuty.

2. Open the record in ServiceNow. You should see a number of PagerDuty fields that are blank. You will be populating the **PagerDuty Service** field. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If the PagerDuty Service ID is not blank, it means that the object is already mapped to PagerDuty.
</Callout>


3. In PagerDuty, using your web browser, navigate to **Services** :fa-arrow-right: **Service Directory** and select the existing service that is configured. In the URL bar, you will find the 7-character **Service ID** starting with the letter `P`. Copy the Service ID to your clipboard.
4. In ServiceNow, paste the Service ID in the **PagerDuty Service** field.
5. Click **Save**. If you are redirected back to the list view in ServiceNow, open the record again. 
6. In the **Related Links** section, you should now see an option to **Provision Webhook**. Selecting this option will create the corresponding extension in PagerDuty and complete the mapping for you.

##3.4 Review PagerDuty Settings in ServiceNow

Other global settings for the PagerDuty integration can be found in the same **PagerDuty** :fa-arrow-right: **Configuration** :fa-arrow-right: **PagerDuty Settings** page as used above to configure the API connection. Depending on your preferences, you may choose to use the following settings:
[block:parameters]
{
  "data": {
    "h-0": "Settings",
    "h-1": "Options",
    "0-1": "- **Choose ServiceNow to PagerDuty mapping**: Select whether or not Assignment Groups should map to PagerDuty or if Configuration Items and Assignment Groups should map to PagerDuty. You can learn more about the differences in the section **Choose how PagerDuty Objects Map to ServiceNow Objects**.\n\n- **Incident state value to use when PagerDuty resolves an incident**: Select the integer value associated with the “Resolved” state in your ServiceNow instance. If this value is customized please be sure to select the appropriate value here.\n\n- **Resolve PagerDuty incident if ServiceNow incident is assigned to a group that doesn’t exist in PagerDuty**: Choose whether or not an incident in PagerDuty should be resolved if it is assigned to a group that doesn’t exist (has been mapped to) PagerDuty. This is useful if not all ServiceNow Groups are mapped to PagerDuty escalation policies.\n\n- **Create a new PagerDuty user if one is not found with the ServiceNow user’s email**: Optionally auto provision users involved in ServiceNow into PagerDuty when they are assigned or manage an incident in ServiceNow. This may impact billing on your account.\n\n- **Do not assign the ServiceNow incident until a PagerDuty user has acknowledged the incident**.\n\n- **Provision current Assignment Group members into PagerDuty when provisioning Assignment Groups**: Optionally auto provision all users who are part of an Assignment Group when the Assignment Group is provisioned into PagerDuty.\n\n- **Create PagerDuty Schedule when provisioning Assignment Groups**: Automatically create a new schedule for Assignment Groups that are provisioned by ServiceNow into PagerDuty. When a schedule is created, the Manager for the Assignment Group will be added to the schedule. The schedule then needs to be populated with other users in PagerDuty.\n\n- **Use PagerDuty teams**: Make use of the PagerDuty teams functionality along with assignment groups in ServiceNow.\n\n- **Create PagerDuty Team when provisioning Assignment Groups**: When enabled, a PagerDuty team will be created when you provision an Assignment Group from ServiceNow to PagerDuty. This will also, by default, provision the Manager user of that group, even if the setting Provision current Assignment Group members into PagerDuty when provisioning Assignment Groups is not enabled.\n\n- **Enable Response Mobilizer**: When enabled, you will be able to add one or more users as responders to an existing incident from the ServiceNow interface. Response Mobilizer features are part of the PagerDuty Modern Incident Response add-on product, which is purchased separately from the PagerDuty platform. \n\n- **Enable Conference Bridges**: When enabled, you will be able to add conference bridge information to an incident, from the ServiceNow interface. Conference Bridge features are part of the PagerDuty Modern Incident Response add-on product, which is purchased separately from the PagerDuty platform. \n\n- **Enable Response Play feature**: When enabled, you will be able to run response plays in PagerDuty from the ServiceNow interface. Response Plays are available on our Digital Operations plan and as part of our PagerDuty Modern Incident Response package.\n\n- **Enable Status Update Feature**: When enabled, you will be able to compose and send Status Updates to the PagerDuty Status Dashboard from the ServiceNow interface. The Status Dashboard is available on PagerDuty Team, Business and Digital Operations plans.",
    "0-0": "Integration Behavior",
    "1-0": "PagerDuty Settings",
    "2-0": "ServiceNow Settings",
    "3-0": "Legacy Settings",
    "1-1": "- **PagerDuty instance URL**: The URL to your PagerDuty instance.\n\n- **PagerDuty API access key**: The API key that was generated as part of the configuration process, used to authenticate with the PagerDuty REST API.\n\n- **Default User ID**: This PagerDuty account will be used to make API requests (from ServiceNow to PagerDuty) if the user performing an action in ServiceNow does not exist in PagerDuty.Omitting this field could result in incidents not being created in PagerDuty if created by a ServiceNow users that is not provisioned in PagerDuty.\n\n- **REST API Endpoint**: This field should not need to be changed.",
    "2-1": "- **ServiceNow user for authentication**: The username that PagerDuty should use to authenticate with ServiceNow for webhook delivery.\n\n- **ServiceNow user password for authentication**: The corresponding password to the aforementioned user.\n\n- **ServiceNow REST endpoint for webhook callback**: Optionally modify the path that PagerDuty uses to send webhooks to. *It is recommended that you leave this value as is.*",
    "3-1": "- **Logging verbosity level**: Modify the amount of information contained in the logs for the PagerDuty integration. Default value is *info*, consider changing to *debug* if you need to troubleshoot."
  },
  "cols": 2,
  "rows": 4
}
[/block]
##3.5 Choose How ServiceNow Objects Map to PagerDuty Objects

The option **Choose ServiceNow to PagerDuty mapping** on the **PagerDuty** :fa-arrow-right: **Configuration** :fa-arrow-right: **PagerDuty Settings** page allows the following two options for the correspondence between systems:

* **ServiceNow Assignment Groups map to PagerDuty**
   * Assignment Groups will map to both a PagerDuty Service and a PagerDuty Escalation Policy
* **ServiceNow Configuration Items and Assignment Groups map to PagerDuty**
   * Configuration Items map to PagerDuty Services
   * Assignment Groups map to PagerDuty Escalation Policies

The following diagram represents the mapping between objects in both systems when Configuration Items and Assignment Groups map to PagerDuty:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f5080af-servicenow-object-mapping.png",
        "servicenow-object-mapping.png",
        736,
        348,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
# Step 4: Provisioning from ServiceNow to PagerDuty

In order to create a bi-directional sync between PagerDuty and ServiceNow, you must provision an Assignment Group PagerDuty. Assignment Groups provisioned will create PagerDuty services and associated escalation policies where ServiceNow incidents will be triggered. 

You may also *optionally* choose to provision Configuration Items, Services, Users and Priority from ServiceNow to PagerDuty.

##4.1 Provision Assignment Group(s) to PagerDuty (Required)

With the PagerDuty integration, each ServiceNow assignment group will correspond to a PagerDuty escalation policy to ensure that incidents will be assigned correctly in PagerDuty. In this latest version, assignment groups provisioned to PagerDuty as services will have a default escalation policy and you will have the option to add additional escalation policies mapped to ServiceNow incident priorities. You can also enable settings to automatically create a PagerDuty schedule and team when a group is provisioned from ServiceNow. 

Depending on which mapping you choose on the Settings page, some PagerDuty attributes will not be set on Assignment Groups:

* If you choose Assignment Groups map to PagerDuty, each Assignment Group will have a corresponding PagerDuty escalation, service, and webhook ID. Optionally, each Assignment Group will also have a PagerDuty schedule and team ID.
* If you choose Configuration Items and Assignment Groups map to PagerDuty, each Assignment Group will only have a PagerDuty escalation ID (optionally, Assignment Groups will also have a corresponding PagerDuty schedule and team ID). The PagerDuty service and webhook ID is mapped to your Configuration Items in ServiceNow.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The user provisioning assignment groups from ServiceNow to PagerDuty must have a PagerDuty user ID attached to their account in ServiceNow.
</Callout>


1. Navigate to **User Administration** and click **Groups**. Select an assignment group that you would like to provision to PagerDuty. Then, click on the **Provision Group into PagerDuty** link to deploy this group to your PagerDuty instance.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f6e5f1b-servicenow-provision-group.png",
        "servicenow-provision-group.png",
        716,
        529,
        "#faf9f9"
      ]
    }
  ]
}
[/block]
2. You should see a notification that the assignment group will be created. Once it’s complete, the **PagerDuty service**, **PagerDuty escalation**, and **PagerDuty webhook** fields will be populated within the Assignment Group.
The Assignment Group will also have a corresponding schedule ID and team ID if these were enabled in the PagerDuty Settings UI.
3. Lastly, you will find that the corresponding service and escalation policy have been created in PagerDuty. The service also has the webhook automatically created, which powers the bi-directional sync between PagerDuty and ServiceNow. The webhook contains the shared secret in the URL, enhancing the security of the communications.
4. You can also provision multiple groups at once by selecting them and clicking on the **Provision Group into PagerDuty** option from the dropdown menu on the Groups list view.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c159fd5-servicenow-bulk-provision-group.png",
        "servicenow-bulk-provision-group.png",
        541,
        313,
        "#dce2e9"
      ]
    }
  ]
}
[/block]
Please follow [documentation here](https://support.pagerduty.com/docs/servicenow-integration-guide#configure-escalation-policy-priority-mapping) to add additional priority-mapped escalation policies to your Assignment Group.

##4.2 Provision Configuration Items to PagerDuty (Optional)
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you have selected **Assignment Groups map to PagerDuty** in the PagerDuty Settings UI, you can skip this step. You will not need to provision Configuration Items into PagerDuty.
</Callout>



[block:callout]
{
  "type": "success",
  "title": "Best Practices",
  "body": "Before provisioning Configuration Items as services to PagerDuty, we recommend the following:\n\n* Read our [Service Configuration Guide](https://pagerduty.influitive.com/forum/t/service-configuration-guide/1660/#heading--business-services) for best practices in planning your PagerDuty Technical and Business service relationships.\n   * Given the [dependency relationships](https://support.pagerduty.com/docs/service-profile#service-dependencies) between Business and Technical services, review how you would like to map configuration item relationships noting the higher level CMDB classes and lower level CMDB classes. \n* Set the corresponding Assignment Group for each of the Configuration Items you will be provisioning. This simplifies the provisioning process: when you provision a single Configuration Item, it will verify that the Assignment Group exists in PagerDuty (as an Escalation Policy). If not, it will also provision the corresponding Assignment Group as a PagerDuty Escalation Policy.
</Callout>


With the PagerDuty integration, each ServiceNow configuration item can have a corresponding PagerDuty service. This integration offers an easy way to quickly generate a new PagerDuty service and webhook (which is necessary to send information back to ServiceNow). It will also populate the associated fields within ServiceNow.

Any configuration item that extends the base `cmdb_ci` table can be mapped to PagerDuty because it inherits the same field that contains the PagerDuty service ID. This makes it easy to map any type of configuration item to services in PagerDuty, although provisioning only Business Services, Technical Services and/or Applications is recommended. For each configuration item type, the form view for it will need to be modified to show the PagerDuty object ID.

There are two ways to provision Configuration Items to PagerDuty:

* [Manually provision individual CIs as services to PagerDuty](https://support.pagerduty.com/docs/servicenow-integration-guide#421-manually-provision-individual-configuration-items-to-pagerduty-optional)
* [Bulk provision multiple CIs as services to PagerDuty](https://support.pagerduty.com/docs/servicenow-integration-guide#423-bulk-provision-multiple-cis-to-pagerduty-optional)

### 4.2.1 Manually Provision Individual Configuration Items to PagerDuty (Optional)

1. In the list of Applications within your ServiceNow instance, you will notice that the **PagerDuty service**, and **PagerDuty webhook** fields are all empty for the listed groups except when the Configuration Item (CI) is mapped to PagerDuty.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/73f941a-servicenow-configuration-item-unprovisioned.png",
        "servicenow-configuration-item-unprovisioned.png",
        1242,
        158,
        "#efeaea"
      ]
    }
  ]
}
[/block]
2. Select an application (or Configuration Item) that you would like to provision to PagerDuty. Then  under Related Links, click either **Provision CI Into PagerDuty (Technical)** if you would like to provision it as a Technical service, or **Provision CI Into PagerDuty (Business)** if you would like to provision it as a Business Service. **Note**: If you would like to provision with dependencies, please read the next section on Services Provisioning Settings.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d5321f6-servicenow-manually-provision.png",
        "servicenow-manually-provision.png",
        247,
        120,
        "#ebf4f3"
      ]
    }
  ]
}
[/block]
3. You should see a notification that the Configuration Item will be created. Once it’s complete, the **PagerDuty service** and **PagerDuty webhook** fields will be populated with the PagerDuty IDs.
4. Lastly, you will find that the corresponding service and escalation policy have been created in PagerDuty. The service also has the webhook automatically created, which powers the bi-directional sync between PagerDuty and ServiceNow.

#### 4.2.2 Services Provisioning Settings (Optional)

Services Provisioning Settings is an *optional* section that allows users to provision services with pre-set [PagerDuty service dependencies](https://support.pagerduty.com/docs/service-profile#service-dependencies) based on CI classes and categories and their existing CI relationships. The process operates as following:

* The matching CIs will be provisioned, along with their entire dependency map from the CI relationships table (without depth limit) providing that CIs (from dependency map) match any criteria (any class, or any category). 
* In PagerDuty, these CIs will be created as Technical services (with Escalation Policies).
* Dependencies between them will be set (as parent-child relationships).

To configure Services Provisioning Settings and provision services:

1. Navigate to **PagerDuty** in the application navigator and click **Services Provisioning**.
2. In **Services Provisioning Settings**, from the **CI Classes List**, select the CI classes that you would like provisioned to PagerDuty and click the :fa-angle-right: to add them to the **Target CI Classes** list. You may also expand the subset by entering categories separated by commas in the **CI Categories** field. Click **Save Settings**.
3. Next, navigate and click into the CI that you would like to provision and scroll down to the **Related Links** Section. Click **Provision with dependencies (Technical)** to provision this CI to PagerDuty as a Technical service with dependencies that match the ServiceNow CI relationships table.

### 4.2.3 Bulk Provision Multiple CIs to PagerDuty (Optional)
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "* If you have selected **Assignment Groups map to PagerDuty** in the PagerDuty Settings UI, you will not be able to use this feature. If you wish to use this feature, you must select **Configuration and Assignment Groups map to PagerDuty** in PagerDuty Settings.\n* You will not be able to bulk provision CIs and services that have names that already exist within your PagerDuty account. Please check your account before provisioning to ensure you are not duplicating the names of existing services. If you have matching services, you will need to provision individual services manually (see previous section).
</Callout>


1. Navigate to **PagerDuty** in the application navigator and click **Services Provisioning**. You may skip over the [Services Provisioning Settings](https://support.pagerduty.com/docs/servicenow-integration-guide#422-services-provisioning-settings-optional) section for now, as it is optional and unrelated to bulk provisioning. 
2. Click **Custom Services Provisioning** which is where you will set the services and service relationships that will be provisioned to PagerDuty based on CIs within ServiceNow. In the **Select CI Table containing services** field, search and select the **CI table** that contains the CI you would like to provision. In the **Select the type of service to be provisioned** field, select the type of service you would like the column to be provisioned as in PagerDuty (PagerDuty only has options to create a Business Service or Technical Service). In the **Select column for Service information** field, select the column that you would like to be the name of your provisioned service. If you would like to set up a dependency relationship with another service, continue to steps 3 and 4. If you would like to provision one service without a dependency relationship, skip to step 5. 
3. *Optional*: If you would like to set up a dependency relationship with another service, in the **Select relationship between services to be provisioned** field, you will select whether this service will be a parent or child to another service. If you would like this service to be a parent service, select **consumed by** and if you would like it to be a child service, select **consumes**.
4. *Optional*: Next, in the second **Select CI table containing services** field, search and select the parent or child table containing services which will be in relationship to the service configured above. In the **Select the type of service to be provisioned** select what type of service this will be provisioned as in PagerDuty (Business Service or Technical Service). Then, in the **Select column for Service information** select select the column that you would like to be the name of your provisioned service. Click **Save Relationship** to save this relationship to the services list. **Note**: If you want to change or delete a configured relationship, you must delete them following directions in step 5 and follow the process in steps 1-4 again. You may create as many relationships as you like by repeating steps 1-4. 
5. Next, under **Step 2 of 3**, click **View Services** to review the services and their relationships. You may edit anything you see fit on this page before provisioning if necessary. **Note**: If a child CI does not have a parent CI listed (the Parent CI column will list **(empty)**), they will not be provisioned and you will see an error on the bulk provisioning screen. Parent CIs without child CIs can be provisioned, however. 
[block:callout]
{
  "type": "danger",
  "title": "Warning",
  "body": "Please carefully review the CIs on this page, as the next step will provision everything listed as services in PagerDuty. If there are CIs you do not wish to provision, please delete them by selecting their checkboxes and clicking **Delete** in the **Actions on selected rows...** dropdown at the bottom left. A confirmation dialog will appear, click **Delete**.
</Callout>


6. Return to the bulk provisioning screen and click **Provision Services** under **Step 3 of 3** to provision to PagerDuty. You should now see a success message on the bulk provisioning screen and your provisioned services in your PagerDuty account. 

If you wish to review your provisioned services in the future, you can navigate to **PagerDuty** in the application navigator and select the **PagerDuty Service Provisionings** table.

##4.3 Provision Users to PagerDuty (Optional)

1. The integration also allows you to provision users from ServiceNow to PagerDuty. In your ServiceNow Users list, you can see directly which users have already been created in PagerDuty as their **PagerDuty ID** field will be populated.
2. Select a user that has not already been provisioned to PagerDuty and click on the **Provision PagerDuty User** link to add them to your PagerDuty account:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/edb46d6-servicenow-provision-pagerduty-user.png",
        "servicenow-provision-pagerduty-user.png",
        669,
        785,
        "#fafafa"
      ]
    }
  ]
}
[/block]
3. You will then see a notice that the user is being provisioned. Upon completion, the **PagerDuty ID** field is automatically populated. The user also shows up within PagerDuty, with the same name and email address.
4. If the user has their **Business phone** or **Mobile phone** fields populated in ServiceNow, these settings will also be automatically provisioned as **Contact Methods** and **Notification Rules** in PagerDuty.
5. You can also provision multiple users at once by selecting them and clicking on the **Provision PagerDuty User** option from the dropdown menu on the Users screen.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5deb38a-servicenow-bulk-provision-users.png",
        "servicenow-bulk-provision-users.png",
        246,
        197,
        "#e3e8ee"
      ]
    }
  ]
}
[/block]
# Step 5: Test the Integration

To verify that that PagerDuty and ServiceNow are communicating:

1. Search and select **PagerDuty Incidents** in the application navigator. Click **New** to create a new incident.
2. In the **Caller** field, enter the ServiceNow user mapped to your PagerDuty account. Enter a **Short description** which will become the incident Title. In the **Assignment Group** field, search and select the Assignment Group mapped to PagerDuty. Enter any other preferred information on this page and click **Submit** in the upper right.
3. You should now see an incident in your PagerDuty account on the service that was mapped with your Assignment Group. 

Below is an incident that was assigned to the Database group which is mapped to PagerDuty. It was then reassigned to the CAB Approval group, as shown in the Activity log.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0687d54-servicenow-incident-activity.png",
        "servicenow-incident-activity.png",
        910,
        1210,
        "#fafafa"
      ]
    }
  ]
}
[/block]
Once the incident is resolved in PagerDuty, it will be resolved in ServiceNow and vice versa. ServiceNow also maintains a log of what activities have taken place within PagerDuty.

**Note**: Once you have successfully installed and configured the PagerDuty application in your ServiceNow instance, it is highly recommended that you index the following columns in ServiceNow:

  * `incident.x_pd_integration_incident` 
  * `sys_user_group.x_pd_integration_pagerduty_escalation`
  * `sys_user.x_pd_integration_pagerduty_id`
  * `cmdb_ci.x_pd_integration_pagerduty_service`
  
This will ensure optimal performance when the PagerDuty application is querying the incidents, group, user and CMDB tables

# Configure Escalation Policy Priority Mapping

The ServiceNow v7 integration allows Assignment Groups to have more than one escalation policy assigned to incidents based on incident priority in ServiceNow. For example, if you would like one escalation policy assigned to incidents with a priority of Moderate or below and another for priorities above Moderate, you could map escalation policies to this scheme. There are two ways to configure this feature: via the PagerDuty menu or on an individual Assignment Group.

To configure escalation policy priority mapping via the PagerDuty menu:

1. Navigate to **PagerDuty** in the application navigator and select **Map Priority to Escalation Policy**. 
2. Click **New** and select the **Assignment Group**, **Escalation Policy** and **Priority** you wish to map and check the **Active** checkbox.
3. Click **Submit** to save. If you would like to deactivate this mapping, return to the **Map Priority to Escalation Policy** screen, click the status in the **Active** column, uncheck the **Active** checkbox and click **Update**.

To configure escalation policy priority mapping on an individual Assignment Group:

1. Search and click into your preferred Assignment Group. Select the **PagerDuty Escalation Policies** tab and click **New**. 
2. In the **Escalation Policy** field, search and select your preferred escalation policy. In the **Priority** field, search and select which priority should be mapped to that escalation policy. Check the **Active** checkbox to activate this setting and click **Submit**.

Once configured, when an incident is assigned to that assignment group and the mapped priority, the mapped escalation policy will be assigned to that incident.

# Author Custom Code for Outbound API Calls

1. Navigate to **PagerDuty Settings** in the application navigator and scroll to the **PagerDuty API requests customization** section. 
2. Enter your custom headers, one per line without quotes (e.g., name: value).
3. Click **Save**.

You may also author custom code when configuring a MID server, below.

# Configure a MID Server

The ServiceNow v7 integration comes with *optional* [MID server](https://docs.servicenow.com/bundle/london-servicenow-platform/page/product/mid-server/reference/r-MIDServer.html) support. 

To configure a MID server:

1. Navigate to **PagerDuty** in the application navigator and select **PagerDuty Settings**. Under **PagerDuty API requests customization** check the **Use MID Server** checkbox. 
2. The **Set MID Server** field will have the default MID server auto-populated. Enter your parameters in the **ECC parameters** field. 
3. Click **Save**.

# Use PagerDuty Actions in ServiceNow

The latest version of PagerDuty’s ServiceNow integration allows ServiceNow users to utilize PagerDuty’s [Add Responders](https://support.pagerduty.com/docs/mobilizing-a-response),  [Conference Bridge](https://support.pagerduty.com/docs/conference-bridge), [Response Plays](https://support.pagerduty.com/docs/response-automation) and [Status Update](https://support.pagerduty.com/docs/status-dashboard#status-updates) capabilities within the ServiceNow interface. This suite of actions is an extension of previous versions which also allow users to trigger, reassign and resolve PagerDuty incidents from ServiceNow. To use these capabilities within ServiceNow, users must have a new role added to their ServiceNow user record: `x_pd_integration.incident_response`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dc5e74c-servicenow-pagerduty-actions.png",
        "servicenow-pagerduty-actions.png",
        2310,
        624,
        "#f4f3f3"
      ]
    }
  ]
}
[/block]
## Trigger and Resolve an Incident from ServiceNow

Note: Acknowledge is not available in ServiceNow at this time.

To trigger a PagerDuty incident from ServiceNow:

1. Search and select **PagerDuty Incidents** in the application navigator. Click **New** to create a new incident.
2. In the **Caller** field, enter the ServiceNow user mapped to your PagerDuty account. Enter a **Short description** which will become the incident Title. In the **Assignment Group** field, search and select the Assignment Group mapped to PagerDuty. Enter any other preferred information on this page and click **Submit** in the upper right.
3. You should now see an incident in your PagerDuty account on the service that was mapped with your Assignment Group. If you would like a link back to the ServiceNow incident, click the incident title in PagerDuty and click **View in ServiceNow (PD v7)** in the incident Details section.

To resolve an incident from ServiceNow:

1. Search and select **PagerDuty Incidents** in the application navigator. 
2. Click the **incident number** of your preferred incident to view its details. Select the **Resolution Information** tab and select the **Resolution Code** and enter **Resolution Notes**.
3. Click **Resolve** below. This will also resolve the incident in PagerDuty.

## Add Responders from ServiceNow

1. Search and select **PagerDuty Incidents** in the application navigator. 
2. Click the **incident number** of your preferred incident to view its details. Scroll down below the Notes tab and click **Add Responders**. Enter the **Assignment Group** and **User**. You may optionally want to add a **Message** that will be sent to the responder and/or **Add Conference Bridge** to the incident on this screen. 
3. Click **Add Responders** to send.

## Add a Conference Bridge from ServiceNow

 1. Search and select **PagerDuty Incidents** in the application navigator. 
2. Click the **incident number** of your preferred incident to view its details. Scroll down below the Notes tab and click **Add Conference Bridge**.
3. If you have a Conference Bridge already configured in PagerDuty, you may select it from the **Conference Bridge** dropdown. Otherwise, you may enter the **Dial-In Number** and/or **URL** manually. 
4. Click **Add Conference Bridge**

**Note**: You may also optionally add a Conference Bridge while you are adding responders. Please follow instructions above in **Add Responders in ServiceNow**.

## Run a Response Play from ServiceNow

1. Search and select **PagerDuty Incidents** in the application navigator. 
2. Click the **incident number** of your preferred incident to view its details. Scroll down below the Notes tab and click **Run Response Play**. 
3. Select your preferred response play from the **Select Response Play** dropdown and click **Continue** to run the play.

## Post a Status Update from ServiceNow

1. Search and select **PagerDuty Incidents** in the application navigator. 
2. Click the **incident number** of your preferred incident to view its details. Scroll down below the Notes tab and click **Send Status Update**. 
3. If there is a Business Service dependency mapped to this service, it will automatically populate in the Impacted Business Service field. If the status update will post to the Status Dashboard, you will see a dialog stating `This update will be published to your PagerDuty status dashboard`. If you do not see this dialog, please [check your configuration in PagerDuty](https://support.pagerduty.com/docs/status-dashboard#status-updates).
4. Enter your status update message in the **Status Update** field and click **Send Update**.

#Upgrade Your PagerDuty Integration

Before starting the upgrade process for your PagerDuty integration, there are some detailed action items listed under the **Tips For Upgrading** section in [this Community Post](https://community.pagerduty.com/forum/t/whats-new-servicenow-v7-integrations/1959). Specifically:

1. Revert customizations prior to upgrading from the store, as the upgrade path will not patch customized/modified files.
2. Prior to running the **Migrate Webhooks to v7** script, update the **PagerDuty Settings** page, and run both the **Test REST API Connection** and the **Test ServiceNow User Authentication** scripts to ensure a **success (200)** status code. 
3. Next, run the **MIGRATE Escalation Policies to…** script. This will ensure that the existing escalation policy to assignment group mapping is also added to the new table with the priority value empty to denote the default escalation policy.
4. Once you have successfully upgraded, determine what (if any) customizations need to be reapplied after the install. Be sure to capture these in an update set and store a copy for future reference.