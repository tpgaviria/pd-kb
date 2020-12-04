---
title: "ServiceNow v6 Integration Guide | PagerDuty"
slug: "servicenow-integration-guide-v6"
excerpt: "Configuring and installing the core ServiceNow v6 integration"
hidden: true
createdAt: "2019-06-28T21:11:51.575Z"
updatedAt: "2020-10-09T23:20:09.261Z"
---
#ServiceNow + PagerDuty Integration Benefits

ServiceNow offers advanced automation and process workflow for the enterprise environment. With this integration, you will be able to leverage ServiceNow’s workflow and ticketing capabilities with PagerDuty’s robust on-call scheduling, notifications and escalations.

#How it Works

Communication between ServiceNow and PagerDuty is bi-directional, allowing incidents to be acknowledged, delegated (reassigned to another group) and resolved in either system. The following workflows are supported:

- Third party monitoring tool integrations detect an issue and trigger an incident in PagerDuty. Users receive notifications from PagerDuty and they can acknowledge/resolve via PagerDuty. A ServiceNow ticket is opened when a PagerDuty incident is triggered and kept in sync for the lifecycle of the incident.
- A ticket is filed in ServiceNow, which automatically triggers an incident in PagerDuty and notifies the user. The user takes ownership via PagerDuty and information from PagerDuty is kept in sync with ServiceNow.

#Requirements

- **In ServiceNow**: A ServiceNow Administrator role is required to configure the integration. This article details installing the latest version 6 of our ServiceNow integration, which is certified for ServiceNow Kingston, London, and Madrid, New York and Orlando. 
- **In PagerDuty**: 
    * The ServiceNow integration is only available to accounts on Business or Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring the ServiceNow integration. 
    * An Admin, Global Admin or Account Owner base role is required for configuration. If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).
[block:callout]
{
  "type": "info",
  "title": "Looking for another version?",
  "body": "[V5](https://support.pagerduty.com/docs/servicenow-integration-guide-v5) and [V7](https://support.pagerduty.com/docs/servicenow-integration-guide) of our ServiceNow integration are also available.
</Callout>


# Quick Links

* [What’s New with PagerDuty’s ServiceNow v6 Integration](https://community.pagerduty.com/t/whats-new-with-pagerdutys-servicenow-v6-integration/4739)
* More information on [How the integration works](/docs/servicenow) and [Advanced Configuration](/docs/advanced-servicenow-configuration)
* [Troubleshooting the ServiceNow integration](/docs/servicenow-troubleshooting-guide)
* [Frequently Asked Questions](/docs/servicenow-faq)

#ServiceNow Requirements Prior to Install

##Application Access Controls
In order for the PagerDuty integration to function, a ServiceNow administrator must make the following changes:
1. In the left hand application navigator, search **System Definition** and select the **Tables** module. Search for and open the record for the User (`sys_user`) table.
2. Select the **Application Access** tab and check the  **Allow configuration** checkbox. This will allow you to provision PagerDuty users from a user form. Click **Update** to save.
[block:image]
{
  "images": [
    {
      "image": []
    }
  ]
}
[/block]
3. Next, return to the application navigator and select **System Definition** → **Tables** module. Open the record for the Group (`sys_user_group`) table. 
4. The following permissions are required so that the PagerDuty integration can map PagerDuty users to ServiceNow user records. In the **Application Access** tab, check the **Can update** checkbox so that the integration can store a PagerDuty User ID on the ServiceNow record when user provisioning is complete. Next, click the **Allow configuration** checkbox, which is required so that you can provision one or more Groups into PagerDuty from the List view. Click **Update** to save.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/00eb704-snow-v6-group-application-access.png",
        "snow-v6-group-application-access.png",
        1786,
        874,
        "#fbfafb"
      ]
    }
  ]
}
[/block]
5. Next, from the **System Definition** → **Tables** module, open the record for the Group Member (`sys_user_grmember`) table and check the **Allow configuration** option. This option is required so that PagerDuty can add an item into the bulk action menu when managing Group Members. Click **Update** to save.
[block:image]
{
  "images": [
    {
      "image": []
    }
  ]
}
[/block]
##Installation from the ServiceNow Store
1 . Click [here](https://store.servicenow.com/sn_appstore_store.do#!/store/application/39a9d9664f834e00dd657bb28110c77b) to find the appropriate application.
2. Select the option to purchase the application (there is no actual charge). Make sure to select the most recent version of the app available for your version of ServiceNow.
3. Log in to your ServiceNow account as an admin.
4. In Kingston and London, open the **System Applications** → **Applications** module and click the **Downloads** tab to view the PagerDuty Incident Resolution Platform application. In Madrid and New York, open **System Applications** → **All Available Applications** → **All**. 
5. Click **Install** on the PagerDuty application.

###Add PagerDuty Fields to Views

If you wish to view the PagerDuty ID fields within ServiceNow, they will need to be manually added to the Group, User and Incident views. This will make it easier to see which ServiceNow objects are mapped to PagerDuty. Instructions are detailed in [Show or hide fields on a form](https://docs.servicenow.com/bundle/london-platform-administration/page/administer/form-administration/concept/configure-form-layout.html) in ServiceNow’s documentation.

It is recommended that you add the PagerDuty fields to the User and Group list views by clicking the gear icon in the upper left corner of the grid to customize the display of columns. This will make them visible in your list views only.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/db83df6-snow-v6-gear-icon.png",
        "snow-v6-gear-icon.png",
        1999,
        481,
        "#a3a7ad"
      ]
    }
  ]
}
[/block]
The following is the list of available PagerDuty fields that you can add to the various list views or forms in ServiceNow: 

* User list view and user form
  * PagerDuty ID
* Group list view and individual Group form
  * PagerDuty service
  * PagerDuty escalation
  * PagerDuty webhook
  * PagerDuty team
  * PagerDuty schedule
* CMDB CI Application list view and individual CI form
  * PagerDuty service
  * PagerDuty webhook
* Incident list view and Incident form
  * PagerDuty Incident

# Configuration In the PagerDuty Web App

##Create an API Key
1. Log in to your PagerDuty account. Navigate to the **Apps & Add-Ons** :fa-th-large: menu in the upper right and select **API Access**.
2. On the API Access Keys page, click the **Create New API Key** button.
3. In the dialog that pops up, enter a **Description** for your key. You will also have the option to create the key as Read-only; leave this box **unchecked** as a full API key is required. Click **Create key** to save.
4. Next will see a dialog displaying your API key. Copy this key and save it in a secure place for later use when configuring the PagerDuty Settings page in ServiceNow. You will not have access to the key after this step. If you lose a key that you created previously and need access to it again, you should remove the key and create a new one. Click **Close** once you have successfully copied your key.

##Create a Default PagerDuty User Account for ServiceNow

The integration requires ServiceNow to have access your PagerDuty account both by an API token and a PagerDuty user account. The PagerDuty user account is required so that non-PagerDuty users can take action in ServiceNow and the actions will be reflected in PagerDuty.

1. In your PagerDuty account, navigate to **People**, select **Users** and click the green **Add Users** button.
2. Enter “ServiceNow User” in the **Name** field and enter any valid email address in the **Email** field. Copy this email and save it in a safe place for later steps when you will be entering it into ServiceNow. Once you have saved this email, select **Manager** as the **Base Role** and click **Add** and **Send Invitations** to save. 
3. You will now see the ServiceNow User in your PagerDuty Users list. Click the **user name** and take note of the 7-character user ID in the URL of this page in the format `PXXXXX`. Copy this user ID and keep it, along with this users’ email, in a safe place. In later steps, you will also be entering this user ID into ServiceNow.

# Configuration in Your ServiceNow Instance
##Create an Integration User Account For Webhook Authentication

The PagerDuty integration requires a ServiceNow user account to operate under. This enables PagerDuty to sync actions back to ServiceNow via webhooks. This design serves as a security feature, and allows you to control the integration’s permissions and roles within ServiceNow.
1. Log in to your ServiceNow instance. In the ServiceNow application navigator, search **Organization** → **Users** and click **New** to create a new user account for PagerDuty application use. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9e054ac-snow-v6-configuration-new-user.png",
        "snow-v6-configuration-new-user.png",
        976,
        456,
        "#7c818a"
      ]
    }
  ]
}
[/block]
2. Enter  a **User ID**, **First/Last name** and **Password** for the user. You can use any desired username and password. Copy the username and password and keep them in a safe place, as you will need to provide them in the PagerDuty Settings UI (within ServiceNow) in a later step. If the **Web service access only** and **Internal Integration User** options are available, you can optionally select these checkboxes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a9d61ab-snow-v6-snow-config-user-fields.png",
        "snow-v6-snow-config-user-fields.png",
        960,
        898,
        "#faf5f4"
      ]
    }
  ]
}
[/block]
3. In the  **Email** field, enter the same email that you entered for the new user in PagerDuty (step 2 of the [Create a Default PagerDuty User Account for ServiceNow](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-a-default-pagerduty-user-account-for-servicenow) section, above) . This will result in requests being properly formatted with a PagerDuty-From header.
4. Under the **Roles** tab, select **Edit** and assign to the user the following three roles: `itil`, `rest_service`, and `x_pd_integration.admin`. Click **Save** to be returned to the User form.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ca0f1ac-snow-v6-roles-list.png",
        "snow-v6-roles-list.png",
        1199,
        828,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]
This new user account requires the ability to make API requests, which allows PagerDuty to create incidents in ServiceNow and action existing Incidents (such as changing assignment). If your ServiceNow instance allows all users to perform REST API calls, providing the `itil` and the `x_pd_integration.admin` role should be sufficient. If REST API access is restricted by role, provide the necessary role to the user account. In many cases, this is either the  `snc_platform_rest_api_access` or the  `rest_service` role.
5. In the **PagerDuty ID** field, enter the 7 character user ID of the default PagerDuty user account (generated in step 3 of [Create a Default PagerDuty User Account for ServiceNow](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-a-default-pagerduty-user-account-for-servicenow)).

To summarize what should be completed this far:

- [An API Key has been created in PagerDuty.](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-an-api-key)
- [A default PagerDuty user account has been created for ServiceNow to use.](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-a-default-pagerduty-user-account-for-servicenow)
- [A ServiceNow user account has been created for the PagerDuty integration to use.](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-an-integration-user-account-for-webhook-authentication)
- The above user accounts have been mapped to each other via their shared email address and the PagerDuty User ID. (Step 3 of [Create an Integration User Account For Webhook Authentication](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-an-integration-user-account-for-webhook-authentication), above)

If all of these prerequisites have been fulfilled, **Save** the user record. You may now begin configuring the PagerDuty Settings page in ServiceNow.

##Configuring the PagerDuty Settings Page in ServiceNow
Please note that most of the settings for the integration can be set by navigating to the application navigator of your ServiceNow instance, searching for the **PagerDuty** application → **Configuration** → **PagerDuty Settings**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8acafa6-image11.png",
        "image11.png",
        1999,
        490,
        "#bfc1c5"
      ]
    }
  ]
}
[/block]
You may see a warning at the top of the page indicating that you need to switch into the PagerDuty application scope. Proceed with this step if you are prompted. Once done, the PagerDuty Settings page should be editable.

1. In your ServiceNow instance, navigate to **PagerDuty** → **Configuration** → **PagerDuty Settings** in the application navigator.
2. **ServiceNow user for authentication** and **ServiceNow user password for authentication** fields: Enter the user ID and password of the new ServiceNow user (generated in step 2 of [Create an Integration User Account For Webhook Authentication](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-an-integration-user-account-for-webhook-authentication), above).
3. **Default PagerDuty User ID to use**: Enter the user ID of the default user you created in PagerDuty (the 7-character alphanumeric ID starting with `P` from step 3 of [Create a Default PagerDuty User Account for ServiceNow](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-a-default-pagerduty-user-account-for-servicenow), above). **Note: Setting the default PagerDuty user, and doing so correctly, is important**. The default PagerDuty ID **must be a PagerDuty user ID, not a ServiceNow user ID or email address**. Moreover, **the PagerDuty user's default role must be at least Manager or higher**. This ensures that ServiceNow users who do not have a PagerDuty account can perform the provisioning of users/groups, etc. If not all of these conditions are met, the integration will be unable to reassign or resolve incidents in PagerDuty when they are reassigned or resolved by a user in ServiceNow who does not have any corresponding PagerDuty account. It may also impact the ability to provision users and groups from ServiceNow to PagerDuty.
4. **REST API endpoint URL**: This should be left as the default, `https://api.pagerduty.com`.
5. **PagerDuty API access key**: Enter the PagerDuty API key (generated in step 4 of [Create an API Key](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-an-api-key), above). 
6. Once you have provided the necessary configuration on the PagerDuty Settings page, click **Save**.
7. Validate that the integration works by clicking **Configuration** → **Test REST API Connection**. You should get a Connection test successful (200) response if everything is working properly.
[block:image]
{
  "images": [
    {
      "image": []
    }
  ]
}
[/block]
8. Validate that the ServiceNow user account was successfully configured by clicking **Configuration** → **Test ServiceNow User Authentication**. You should get a ServiceNow user authentication test successful (200) response if everything is working properly.
[block:image]
{
  "images": [
    {
      "image": []
    }
  ]
}
[/block]
9. Validate that the Default User settings were properly configured. To do this, click on **Test Default User Settings**. You should see a series of success messages. If there are any changes required, you will be informed of what changes are required.

Upon successful completion of these tests, initial configuration is now complete. 

##Adding the ServiceNow Extension to an Existing PagerDuty Service

**If you would like to add the ServiceNow extension to an existing PagerDuty service**, as opposed to creating a new one, use the following instructions. **If you wish to create a new service**, please skip this section and move onto [Additional Properties to Review](https://support.pagerduty.com/docs/servicenow-integration-guide#section-additional-properties-to-review).

###Option 1: Manually Configure the Extension in PagerDuty
*This option requires that you have access to the username and password of the ServiceNow account that PagerDuty uses.*

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the service **name** :fa-arrow-right: **Integrations** *tab* :fa-arrow-right: click the **Add or manage extensions** link in the *Extensions* section :fa-arrow-right: click the green **New Extension** button.

2. In the **Extension Type** field, search and select **ServiceNow (v6.0)** and enter a **Name** in the format `servicenow-service-name` (e.g., servicenow-shopping-cart). In the following fields, enter:
    *  **ServiceNow URL**: Enter the URL in the following format: `https://[INSTANCE-NAME].service-now.com/api/x_pd_integration/pagerduty2sn`
    * **ServiceNow User ID** and **ServiceNow Password**: Enter the User ID and Password created in step 2 of the [Create an Integration User Account For Webhook Authentication](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-an-integration-user-account-for-webhook-authentication) section, above. 
    * **Sync Options**: **Sync All Incidents** will sync all new incidents to your ServiceNow instance. **Manually Sync Incidents** allows you to choose which incidents you want to sync, by adding the option to **Sync with ServiceNow** on the incident details page.
    * **Incident Type**: **Incident** will create Incidents in ServiceNow. **Security Incident** will generate a ServiceNow Security Incident.

3. Click **Save**.

###Option 2: Use the ServiceNow Integration to Provision the PagerDuty Extension
*This method does not require access to the username and password of the ServiceNow account that PagerDuty uses. Instead, access to the x_pd_integration.admin role in ServiceNow is required so that you can provision a new PagerDuty Extension using the integration.*

1. Identify how ServiceNow maps to PagerDuty. ServiceNow can map Configuration Groups and Assignment Groups to PagerDuty, or just Assignment Groups. This is configured on the [PagerDuty Settings](https://support.pagerduty.com/docs/servicenow-integration-guide#section-configuring-the-pagerduty-settings-page-in-servicenow) page within ServiceNow.
    * If you are only mapping Assignment Groups, navigate to the Assignment Group that you want to map to PagerDuty.
    * If you map Configuration Items to PagerDuty, navigate to the Configuration Item that you want to map to PagerDuty.

2. Open the record in ServiceNow. You should see a number of PagerDuty fields that are blank. You will be populating the **PagerDuty Service** field.

    * **Note**:  If the PagerDuty Service ID is not blank, it means that the object is already mapped to PagerDuty.

3. In PagerDuty, using your web browser, navigate to **Services** :fa-arrow-right: **Service Directory** and select the existing service that is configured. In the URL bar, you will find the 7-character **Service ID** starting with the letter `P`. Copy the Service ID to your clipboard.

4. In ServiceNow, paste the Service ID in the **PagerDuty Service** field.

5. Click **Save**. If you are redirected back to the list view in ServiceNow, open the record again. 

6. In the **Related Links** section, you should now see an option to **Provision Webhook**. Selecting this option will create the corresponding extension in PagerDuty and complete the mapping for you.

## Additional Properties to Review
Once you’ve installed and configured the integration, check out the [Advanced Configuration](https://support.pagerduty.com/docs/advanced-configurations) article for more information on configuring [Priority Sync](https://support.pagerduty.com/docs/advanced-configurations#section-priority-synchronization), [Inbound Field Rules](https://support.pagerduty.com/docs/advanced-configurations#section-inbound-field-rules) and other optional configurations

Other global settings for the PagerDuty integration can be found in the same **PagerDuty → Configuration → PagerDuty Settings** page as used above, and they include:

###Integration Behavior
* **Choose ServiceNow to PagerDuty mapping**: Select whether or not Assignment Groups should map to PagerDuty or if Configuration Items and Assignment Groups should map to PagerDuty. You can learn more about the differences [below](https://support.pagerduty.com/docs/servicenow-integration-guide#section-choose-how-servicenow-objects-map-to-pagerduty-objects).
* **Incident state value to use when PagerDuty resolves an incident**: Select the integer value associated with the “Resolved” state in your ServiceNow instance. If this value is customized please be sure to select the appropriate value here.
* **Resolve PagerDuty incident if ServiceNow incident is assigned to a Group that doesn’t exist in PagerDuty**: Choose whether or not an incident in PagerDuty should be resolved if it is assigned to a Group that doesn’t exist (has been mapped to) PagerDuty. This is useful if not all ServiceNow Groups are mapped to PagerDuty escalation policies.
* **Create a new PagerDuty user if one is not found with the ServiceNow user’s email**: Optionally auto provision users involved in ServiceNow into PagerDuty when they are assigned or manage an incident in ServiceNow. This may impact billing on your account.
* **Do not assign the ServiceNow incident until a PagerDuty user has acknowledged the incident**
* **Provision current Assignment Group members into PagerDuty when provisioning Assignment Groups**: Optionally auto provision all users who are part of an Assignment Group when the Assignment Group is provisioned into PagerDuty.
* **Create PagerDuty Schedule when provisioning Assignment Groups**: Automatically create a new schedule for Assignment Groups that are provisioned by ServiceNow into PagerDuty. When a schedule is created, the Manager for the Assignment Group will be added to the schedule. The schedule then needs to be populated with other users in PagerDuty.
* **Use PagerDuty teams**: Make use of the PagerDuty teams functionality along with Assignment groups in ServiceNow. 
* **Create PagerDuty Team when provisioning Assignment Groups**: When enabled, a PagerDuty team will be created when you provision an Assignment Group from ServiceNow to PagerDuty.
* **Enable Response Mobilizer**: When enabled, you will be able to [add one or more users as responders](https://support.pagerduty.com/docs/mobilizing-a-response) to an existing incident from the ServiceNow interface. 
* **Enable Conference Bridges**: When enabled, you will be able to add [conference bridge](https://support.pagerduty.com/docs/conference-bridge) information to an incident from the ServiceNow interface. 

###PagerDuty Settings
* **PagerDuty instance URL**: The URL to your PagerDuty instance.
* **PagerDuty API access key**: [The API Key that was generated as part of the configuration process](https://support.pagerduty.com/docs/servicenow-integration-guide#section-create-an-api-key), used to authenticate with the PagerDuty REST API.
* **Default User ID**: This PagerDuty account will be used to make API requests (from ServiceNow to PagerDuty) if the user performing an action in ServiceNow does not exist in PagerDuty. Omitting this field could result in incidents not being created in PagerDuty if created by a ServiceNow users that is not provisioned in PagerDuty. 
* **REST API Endpoint**: This field should not need to be changed.

###ServiceNow Settings
  * **ServiceNow user for authentication**: The username that PagerDuty should use to authenticate with ServiceNow for webhook delivery.
  * **ServiceNow user password for authentication**: The corresponding password to the aforementioned user. 
  * **ServiceNow REST endpoint for webhook callback**: Optionally modify the path that PagerDuty uses to send webhooks to. *It is recommended that you leave this value as is.*

###Legacy Settings
  * **Logging verbosity level**: Modify the amount of information contained in the logs for the PagerDuty integration. Default value is **info**, consider changing to **debug** if you need to troubleshoot.

## Choose How ServiceNow Objects Map to PagerDuty Objects
The option **Choose ServiceNow to PagerDuty mapping** on the **PagerDuty → Configuration → PagerDuty Settings** page allows the following two options for the correspondence between systems:
* **ServiceNow Configuration Items and Assignment Groups map to PagerDuty**
  * Configuration Items map to PagerDuty Services.
  * Assignment Groups map to PagerDuty Escalation Policies.
* **ServiceNow Assignment Groups map to PagerDuty**
  * Assignment Groups will map to both a PagerDuty Service and a PagerDuty Escalation Policy.

The following diagram represents the mapping between objects in both systems when Configuration Items and Assignment Groups map to PagerDuty:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/39666ee-image13.png",
        "image13.png",
        736,
        348,
        "#f1f1f1"
      ]
    }
  ]
}
[/block]
## Provisioning Configuration Items to PagerDuty
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you have selected **Assignment Groups map to PagerDuty** in the **PagerDuty → Configuration → PagerDuty Settings** page, you can skip this step. You will not need to provision Configuration Items into PagerDuty.
</Callout>


Before provisioning your Configuration Items into PagerDuty, it is recommended that you set the corresponding Assignment Group for each of the Configuration Items you will be provisioning. This simplifies the provisioning process: when you provision a single Configuration Item, it will verify that the Assignment Group exists in PagerDuty (as an Escalation Policy). If not, it will also provision the corresponding Assignment Group as a PagerDuty Escalation Policy.
 
With the PagerDuty integration, each ServiceNow Configuration Item can have a corresponding PagerDuty Service. This integration offers an easy way to quickly generate a new PagerDuty service and webhook (which is necessary to send information back to ServiceNow). It will also populate the associated fields within ServiceNow.
 
Any Configuration Item that extends the base `cmdb_ci` table can be mapped to PagerDuty because it inherits the same field that contains the PagerDuty service ID. This makes it easy to map any type of Configuration Item to services in PagerDuty, although provisioning only Business Services, Technical Services and/or Applications is recommended. For each Configuration Item type, the form view for it will need to be modified to show the PagerDuty object ID.

1. In the list of Applications within your ServiceNow instance, you will notice that the **PagerDuty service**, and **PagerDuty webhook** fields are all empty for the listed groups except when the Configuration Item (CI) is mapped to PagerDuty.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1e8fdd5-image8.png",
        "image8.png",
        1242,
        158,
        "#efeaea"
      ]
    }
  ]
}
[/block]
2. Select an application (or CI) that you would like to provision to PagerDuty. Then, under Related Links, click the **Provision CI Into PagerDuty** link to deploy it to your PagerDuty instance.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/55b9579-image16.png",
        "image16.png",
        1590,
        972,
        "#f6f6f7"
      ]
    }
  ]
}
[/block]
3. You should see a notification that the Configuration Item will be created. Once it’s complete, the **PagerDuty service** and **PagerDuty webhook** fields will be populated with the PagerDuty IDs.
4. Lastly, you will find that the corresponding service and escalation policy have been created in PagerDuty. The service also has the webhook automatically created, which powers the bi-directional sync between PagerDuty and ServiceNow.

## Provisioning Assignment Groups to PagerDuty
ServiceNow has the concept of Assignment Groups. With the PagerDuty integration, each Assignment Group will correspond to a  PagerDuty escalation policy. You can optionally enable settings to automatically create a PagerDuty schedule and team when a group is provisioned from ServiceNow.

Depending on which mapping you choose on the **PagerDuty → Configuration → PagerDuty Settings** page, some PagerDuty attributes will not be set on Assignment Groups.

* If you choose Assignment Groups map to PagerDuty, each Assignment Group will have a corresponding PagerDuty escalation, service, and webhook ID. Optionally, each Assignment Group will also have a PagerDuty schedule and team ID.
* If you choose Configuration Items and Assignment Groups map to PagerDuty, each Assignment Group will only have a PagerDuty escalation ID (optionally, Assignment Groups will also have a corresponding PagerDuty schedule and team ID). The PagerDuty service and webhook ID is mapped to your Configuration Items in ServiceNow.

<Callout type="info" title="Info">
The user provisioning Assignment Groups from ServiceNow to PagerDuty must have a PagerDuty user ID attached to their account in ServiceNow",
  "title": "Note
</Callout>


1. Select an Assignment Group that you would like to provision to PagerDuty. Then, click on the **Provision Group into PagerDuty** link to deploy this group to your PagerDuty instance.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5807d53-image10.png",
        "image10.png",
        1999,
        1022,
        "#c8cacd"
      ]
    }
  ]
}
[/block]
2. You should see a notification that the Assignment Group will be created. Once it’s complete, the **PagerDuty service**, **PagerDuty escalation**, and **PagerDuty webhook** fields will be populated.

The Assignment Group will also have a corresponding schedule ID and team ID if these were enabled in the PagerDuty Settings UI.

3. Lastly, you will find that the corresponding service and escalation policy have been created in PagerDuty. The service also has the webhook automatically created, which powers the bi-directional sync between PagerDuty and ServiceNow. The webhook contains the shared secret in the URL, enhancing the security of the communications.
4. You can also provision multiple groups at once by selecting them and clicking on the **Provision Group into PagerDuty** option from the dropdown menu on the Groups list view.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/68c9130-image14.png",
        "image14.png",
        541,
        313,
        "#dce2e9"
      ]
    }
  ]
}
[/block]
## Provisioning Users to PagerDuty
1. The integration also allows for the provisioning of users from ServiceNow to PagerDuty. In a list of ServiceNow users, you can see directly which users have already been created in PagerDuty as their **PagerDuty ID** field will already be populated.
2. In the below example, we’ll select a user that has not already been provisioned to PagerDuty. We can then click on the **Provision PagerDuty User** link to add them to our PagerDuty account:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b5cce87-image18.png",
        "image18.png",
        1999,
        1026,
        "#c8cacd"
      ]
    }
  ]
}
[/block]
3. You then see a notice that the user is being provisioned. Upon completion, the **PagerDuty ID** field is automatically populated. The user also shows up within PagerDuty, with the same name and email address.
4. If the user has their **Business phone** or **Mobile phone** fields populated in ServiceNow, these settings will also be automatically provisioned as **Contact Methods** and **Notification Rules** in PagerDuty.
5. You can also provision multiple users at once by selecting them and clicking on the **Provision PagerDuty User** option from the dropdown menu on the Users screen.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ffdabc7-image15.png",
        "image15.png",
        246,
        197,
        "#e3e8ee"
      ]
    }
  ]
}
[/block]
# Verify that ServiceNow and PagerDuty are Communicating

You can verify that PagerDuty and ServiceNow are communicating by creating a new incident in ServiceNow and setting the **Assignment Group** field to a group that has been mapped to PagerDuty. Below is an incident that was assigned to the Database group which is mapped to PagerDuty. It was then reassigned to the CAB Approval group, as shown in the Activity log.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d0e2433-image3.png",
        "image3.png",
        910,
        1210,
        "#fafafa"
      ]
    }
  ]
}
[/block]
Once the incident is resolved in PagerDuty, it will be resolved in ServiceNow and vice-versa. ServiceNow also maintains a log of what activities have taken place within PagerDuty.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Once you have successfully installed and configured the PagerDuty application in your ServiceNow instance, it is highly recommended that you index the following columns in ServiceNow based on certain conditions listed below.\n\nFor “Assignment Group only” mapping:\n\n* `sys_user_group.x_pd_integration_pagerduty_escalation`\n* `sys_user_group.x_pd_integration_pagerduty_service`\n* `sys-user_group.x_pd_integration_pagerduty_webhook`\n\nFor “Assignment Group and Configuration Item” mapping:\n\n* `sys_user_group.x_pd_integration_pagerduty_escalation`\n* `cmdb_ci.x_pd_integration_pagerduty_service`\n* `cmdb_ci.x_pd_integration_pagerduty_webhook`\n\nRegardless of mapping, these three columns are also recommended:\n\n* `sys_user.x_pd_integration_pagerduty_id`\n* `sys_user.email`\n* `incident.x_pd_integration_incident`\n* `task.x_pd_integration_incident_id`\n\nThis will help decrease the response time when the PagerDuty application is querying the incidents, group, user and CMDB tables. PagerDuty initiates the webhook retry logic outlined [here](https://v2.developer.pagerduty.com/docs/webhook-behavior#error-handling-and-retries) if the response time exceeds a certain threshold, in which case the webhook extension will eventually get temporarily disabled.
</Callout>


#Using PagerDuty’s Add Responders and Conference Bridge Features in ServiceNow

The latest version of PagerDuty’s ServiceNow integration allows ServiceNow users to utilize PagerDuty’s [Add Responders](https://support.pagerduty.com/docs/mobilizing-a-response) and [Conference Bridge](https://support.pagerduty.com/docs/conference-bridge) features. To use these features within ServiceNow, users must have a new role added to their ServiceNow user record: `x_pd_integration.incident_response`.

# Upgrading Your PagerDuty Integration

Before starting the upgrade process for your PagerDuty integration, there are some detailed action items listed under the **Tips For Upgrading** section in [this Community Post](https://community.pagerduty.com/t/whats-new-with-pagerdutys-servicenow-v6-integration/4739). Specifically:

* Revert customizations prior to upgrading from the store, as the upgrade path will not patch customized/modified files.
* Prior to running the "MIGRATE WEBHOOKS TO v6.0" script, update the **PagerDuty Settings** page, and run both the **Test REST API Connection** and the **Test ServiceNow User Authentication** scripts to ensure a **success (200)** status code.
* Once you have successfully upgraded, determine what (if any) customizations need to be reapplied after the install. Be sure to capture these in an update set and store a copy for future reference.

# Connecting Multiple PagerDuty Services to Single Assignment Group

Depending on your use case, it may be necessary to connect many PagerDuty services to one particular Assignment Group in ServiceNow. To be able to achieve this use case, the following actions are necessary.

For each PagerDuty service, [create a ServiceNow v6 extension](https://support.pagerduty.com/docs/servicenow-integration-guide#adding-the-servicenow-extension-to-an-existing-pagerduty-service) where you enter the usual ServiceNow instance details. In the ServiceNow URL, it is necessary to add the following part that will target the destined Assignment Group in ServiceNow.

**Example**:

If the Assignment Group name is "IT HelpDesk", a standard URL may look like the following:
`https://dev70781.service-now.com/api/x_pd_integration/pagerduty2sn`

To target the Assignment Group "IT HelpDesk", you will need to append the following to the end of the URL: 
`?group=IT%20HelpDesk`

Please ensure to add `%20` as a space character encoded in the url. URLs do not allow spaces, hence all of the characters are encoded.

# Connecting Multiple PagerDuty Services to Configuration Items

Similar to the configuration in the section above, it is also possible to map multiple PagerDuty services to a single Configuration Item in ServiceNow. 

For each PagerDuty service, [create a ServiceNow v6 extension](https://support.pagerduty.com/docs/servicenow-integration-guide#adding-the-servicenow-extension-to-an-existing-pagerduty-service) where you enter the usual ServiceNow instance details. In the ServiceNow URL, it is necessary to add the following in order to target the destined Configuration Item in ServiceNow.

1. Look up the Configuration Item ID in ServiceNow by right clicking on the Configuration Item and copying the `sys_id`.
2. The ServiceNow destination URL will need to include `?ci=insert_long_sys_id_here`

**Example**:

`https://dev70781.service-now.com/api/x_pd_integration/pagerduty2sn?ci=insert_long_sys_id_here`

3. Save this extension along with other details, including username, password, and other flags.
4. *Optional*: It is also possible to combine the Assignment Group and Configuration Item specifically: 
`pagerduty2sn?group=IT%20HelpDesk&ci=insert_long_sys_id_here`

**Note**: The above works on the PagerDuty app version 6.2.05 from ServiceNow Marketplace.