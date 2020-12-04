---
title: "ServiceNow v5 Integration Guide"
slug: "servicenow-integration-guide-v5"
excerpt: "Configuring and installing the core ServiceNow v5 integration"
hidden: true
createdAt: "2018-08-10T20:10:12.621Z"
updatedAt: "2020-10-09T23:21:47.354Z"
---
ServiceNow Enterprise is a powerful platform-as-a-service, which offers advanced automation and process workflow for the enterprise environment. With this integration, you will be able to leverage ServiceNow’s workflow and ticketing capabilities with PagerDuty’s robust on-call scheduling, notifications and escalations.

This article details installing the latest version 5 of our ServiceNow integration, which is certified for ServiceNow Kingston, London, and Madrid. This guide will walk you through the process of integrating your environment with PagerDuty.
[block:callout]
{
  "type": "info",
  "title": "Looking for another version?",
  "body": "Our [v4 of our ServiceNow Enterprise integration](https://www.pagerduty.com/docs/guides/servicenow-integration-guide-v4/) and [ServiceNow Express](https://www.pagerduty.com/docs/guides/servicenow-express-integration-guide/) are also available.
</Callout>


# Quick Links

* [What’s New in ServiceNow v5 Integration](https://community.pagerduty.com/t/whats-new-servicenow-v5-integration/)
* More information on [How the integration works](/docs/servicenow) and [Advanced Configuration](/docs/advanced-servicenow-configuration)
* [Troubleshooting the ServiceNow integration](/docs/servicenow-troubleshooting-guide)
* [Frequently Asked Questions](/docs/servicenow-faq)
 
Communication between ServiceNow Enterprise and PagerDuty is supported in both directions allowing incidents to be acknowledged, delegated (assigned to another group) and resolved in either system. The following workflows are supported:
* Third party monitoring tool integrations detect an issue and trigger an incident in PagerDuty. User receives a notification from PagerDuty and the user can acknowledge/resolve via PagerDuty. A ServiceNow ticket is opened when a PagerDuty incident is triggered and kept in sync for the lifecycle of the incident.
* Ticket is filed in ServiceNow. An incident is automatically opened in PagerDuty and notifies the user. Via PagerDuty, user takes ownership via PagerDuty. Information from PagerDuty is kept in sync with ServiceNow.

# ServiceNow Requirements Prior to Install

**Application Access Controls**
In order for the PagerDuty integration to function, the following changes are required in ServiceNow prior to installation. This work should be performed by a ServiceNow administrator.
1. From the **System Definition → Tables** module, open the record for the User (`sys_user`) table.
2. Click on the **Application Access** tab and enable the _Allow configuration_ option to support the action to provision PagerDuty users from a user form. Then click **Update**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/46efa50-image1.png",
        "image1.png",
        1548,
        542,
        "#fafafa"
      ]
    }
  ]
}
[/block]
3. Back in the **System Definition → Tables** module, open the record for the Group (`sys_user_group`) table.
4. In the **Application Access** tab, enable the _Allow configuration_ option to support the action to provision PagerDuty service and policy from a group form.
5. Enable the _Can create_ and _Can update_ options as well to allow PagerDuty to write the group’s service and policy IDs to the group record. Then click **Update**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5b758ce-image20.png",
        "image20.png",
        1444,
        746,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
6. From the **System Definition → Tables** module, open the record for the Group Member (`sys_user_grmember`) table and enable the _Allow configuration_ option. Then click **Update**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c555a4b-image2.png",
        "image2.png",
        1558,
        788,
        "#fafafa"
      ]
    }
  ]
}
[/block]
# Installation from the ServiceNow Store
* Click [here](https://store.servicenow.com/sn_appstore_store.do#!/store/application/39a9d9664f834e00dd657bb28110c77b) to find the appropriate application
* Select the option to purchase the application. There is no charge for this application. Make sure to select the most recent version of the app available for your version of ServiceNow.
* Log in to your ServiceNow Enterprise account as an admin.
* Open the **System Applications → Applications** module and click the **Downloads** tab to view the PagerDuty Incident Resolution Platform application.
* Click **Install** on the PagerDuty application.

**Add PagerDuty Fields to Views**
If you wish to view the PagerDuty ID fields within ServiceNow, they will manually need to be added to views. How to do this is detailed in [Show or hide fields on a form](https://docs.servicenow.com/bundle/jakarta-servicenow-platform/page/administer/form-administration/task/t_ConfigureAForm.html) in the ServiceNow documentation.

It is also recommended that you add the fields to the list view, by clicking on the gear icon in the upper left corner of the grid, to customize the display of columns. For example, in the Groups view:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7df481a-image17.png",
        "image17.png",
        1999,
        481,
        "#a3a7ad"
      ]
    }
  ]
}
[/block]
The following is the list of available fields. Adding these fields on the form views will also allow you to use the quick link to the related PagerDuty record.

* User (List and individual user form)
  * PagerDuty ID
* Group (List and individual group form)
  * PagerDuty service
  * PagerDuty escalation
  * PagerDuty webhook
  * PagerDuty team
  * PagerDuty schedule
* CMDB CI Application (List and Individual CI form)
  * PagerDuty service
  * PagerDuty webhook
* Incident
  * PagerDuty ID

# Configuration In PagerDuty

**Create a REST API Key**
This API key will be used by ServiceNow to communicate with PagerDuty. The below steps only need to be performed once during initial install.

1. From the **Apps & Add-Ons** :fa-th-large: menu in PagerDuty, select **API Access**.
2. On the **API Access** page, click the **Create New API Key** button.
3. In the dialog that pops up, you’ll be prompted to enter a **Description** for your key, and choose an **API version**. You will also have the option to create the key as **Read-only**; leave this box **unchecked** as a full API key is required.
4. Once you have filled in your options, click **Create Key**.
5. Once you click Create Key, you will see a dialog displaying your key and confirming the options you filled in on the previous step.
6. **Important:** Make sure to copy this key and save it in a secure place, as you will not have access to the key after this step. If you lose a key that you created previously and need access to it again, you should remove the key and create a new one.
7. Click **Close** once you have successfully copied your key.

# Configuration in ServiceNow
Firstly, note, most of the basic application-wide settings for the integration are set on the page **PagerDuty → Configuration → PagerDuty Settings** accessed through the system menu:
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
## Create an integration user account for webhook authentication
The integration requires a ServiceNow user account under which to operate when performing actions initiated by webhooks from PagerDuty. This design serves as a security feature, and enables you to control the permissions and roles that the integration has.

1. Under **Organization > Users**, click **New** to create a new service account in ServiceNow for the PagerDuty application to use. You will need to provide the username and password in the PagerDuty Settings UI when configuring the application.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b0d777d-Users___ServiceNow.png",
        "Users___ServiceNow.png",
        1140,
        658,
        "#8c8f96"
      ]
    }
  ]
}
[/block]
2. Set a User ID, First/Last name and Password for the user. If the **Web service access only** and **Internal Integration User** options are available, make sure that they are enabled.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e3e4f5f-sn5_user_stuff.png",
        "sn5_user_stuff.png",
        960,
        898,
        "#faf5f5"
      ]
    }
  ]
}
[/block]
3. Populate the **email** field on the integration user that was just created with an email address of a valid user in PagerDuty. This will result in requests being properly formatted with a PagerDuty-From header.
4. Under the **Roles** tab, select **Edit** and assign to the user the following three roles: `itil`, `rest_service`, and `x_pd_integration.admin`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7a59e08-image6.png",
        "image6.png",
        1200,
        840,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Madrid and later ServiceNow versions",
  "body": "If you are installing the PagerDuty integration for the first time in the Madrid platform version, add the role `snc_platform_rest_api_access` in place of `rest_service`. If you installed the PagerDuty integration while on a version earlier than Madrid, you should not need to make any changes.
</Callout>


5. Go to **PagerDuty → Configuration → PagerDuty Settings** in the ServiceNow system menu, and enter the user ID and password of the new user into the **ServiceNow user for authentication** and **ServiceNow user password for authentication** fields.
6. Validate that basic authentication is working by clicking on **Test ServiceNow User Authentication**. You should get a `ServiceNow user authentication test successful (200)` response if everything is working properly:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a92d1c7-image9.png",
        "image9.png",
        1999,
        781,
        "#b8babe"
      ]
    }
  ]
}
[/block]
## Configure the PagerDuty API connection
Go to **PagerDuty → Configuration → PagerDuty Settings** in the ServiceNow system menu, and configure the API connection by entering the following properties:
1. **Default PagerDuty User ID to use if auto-provisioning is disabled**: Enter the ID of a valid PagerDuty user ID. This will be used if the integration cannot identify a PagerDuty user account for the ServiceNow user performing the action. The value here should be the alphanumeric code beginning with `P` at the end of the user's profile URL *in PagerDuty*.
2. **REST API endpoint URL**: this should be left as the default, `https://api.pagerduty.com`.
3. **PagerDuty API access key**: enter into this field the API key generated in the steps above. API key from the previous steps.
4. Validate that the integration works by clicking on **Configuration → Test REST API Connection**. You should get a `Connection test successful (200)` response if everything is working properly:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee79680-image5.png",
        "image5.png",
        1999,
        781,
        "#b8babe"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "danger",
  "body": "**If you do not have auto-provisioning enabled, the default user ID is required** and should be set properly, or many aspects of the integration will not work.\n\nThe default PagerDuty ID **must be a PagerDuty user ID, not a ServiceNow user ID or email address.** A PagerDuty user’s ID can be found at the end of the user's PagerDuty profile page URL. It is an alphanumeric code beginning with `P`.\n\nMoreover, **the PagerDuty user's default role must be at least \"Responder\"**.\n\nFinally, **if there is a user in ServiceNow who has that PagerDuty user ID in their \"PagerDuty ID\" field, that user's email address must exactly match the login email of the user in PagerDuty.** \n\nIf not all of these conditions are met, the integration will be unable to reassign or resolve incidents in PagerDuty when they are reassigned or resolved by a user in ServiceNow who does not have any corresponding PagerDuty account.",
  "title": "Setting the default user, and doing so correctly, is important
</Callout>


## Additional Properties to Review
Once you’ve downloaded and configured the integration, check out the [Advanced Configuration](https://support.pagerduty.com/docs/advanced-configurations) article for more information on configuring [Priority Sync](https://support.pagerduty.com/docs/advanced-configurations#section-priority-synchronization), [Inbound Field Rules](https://support.pagerduty.com/docs/advanced-configurations#section-inbound-field-rules) and other optional configurations

Other global settings for the PagerDuty integration can be found in the same **PagerDuty → Configuration → PagerDuty Settings** page as used above to configure the API connection and include:

* **Integration Behavior**
  * **Choose ServiceNow to PagerDuty mapping**: Select whether or not Assignment Groups should map to PagerDuty or if Configuration Items and Assignment Groups should map to PagerDuty.
  * **Incident state value to use when PagerDuty resolves an incident**: Select the integer value associated with the “Resolved” state in your ServiceNow instance. If this value is customized please be sure to select the appropriate value here.
  * **Resolve PagerDuty incident if ServiceNow incident is assigned to a group that doesn’t exist in PagerDuty**: Choose whether or not an incident in PagerDuty should be resolved if it is assigned to a group that doesn’t exist (has been mapped to) PagerDuty. This is useful if not all ServiceNow Groups are mapped to PagerDuty escalation policies.
  * **Create a new PagerDuty user if one is not found with the ServiceNow user’s email**: Optionally auto provision users involved in ServiceNow into PagerDuty when they are assigned or manage an incident in ServiceNow. This may impact billing on your account.
  * **Do not assign the ServiceNow incident until a PagerDuty user has acknowledged the incident**
  * **Provision current Assignment Group members into PagerDuty when provisioning Assignment Groups**: Optionally auto provision all users who are part of an Assignment Group when the Assignment Group is provisioned into PagerDuty
  * **Create PagerDuty Schedule when provisioning Assignment Groups**: Automatically create a new schedule for Assignment Groups that are provisioned by ServiceNow into PagerDuty. When a schedule is created, the Manager for the Assignment Group will be added to the schedule. The schedule then needs to be populated with other users in PagerDuty.
  * **Use PagerDuty teams**: Make use of the PagerDuty teams functionality along with assignment groups in ServiceNow. 
  * **Create PagerDuty Team when provisioning Assignment Groups**: when enabled, a PagerDuty team will be created when you provision an Assignment Group from ServiceNow to PagerDuty
* **PagerDuty Settings**
  * **PagerDuty instance URL**: the URL to your PagerDuty instance.
  * **PagerDuty API access key**: The API key that was generated as part of the configuration process, used to authenticate with the PagerDuty REST API.
  * **Default User ID**: This PagerDuty account will be used to make API requests (from ServiceNow to PagerDuty) if the user performing an action in ServiceNow does not exist in PagerDuty.Omitting this field could result in incidents not being created in PagerDuty if created by a ServiceNow users that is not provisioned in PagerDuty. 
  * **REST API Endpoint**: This field should not need to be changed.
* **ServiceNow Settings**
  * **ServiceNow user for authentication**: The username that PagerDuty should use to authenticate with ServiceNow for webhook delivery.
  * **ServiceNow user password for authentication**: The corresponding password to the aforementioned user. 
  * **ServiceNow REST endpoint for webhook callback**: Optionally modify the path that PagerDuty uses to send webhooks to. _It is recommended that you leave this value as is._
* **Legacy Settings**
  * **Logging verbosity level**: Modify the amount of information contained in the logs for the PagerDuty integration. Default value is _info_, consider changing to _debug_ if you need to troubleshoot.

## Choose How ServiceNow objects map to PagerDuty objects
The option **Choose ServiceNow to PagerDuty mapping** on the **PagerDuty → Configuration → Settings** page allows the following two options for the correspondence between systems:
* **ServiceNow Configuration Items and Assignment Groups map to PagerDuty**
  * Configuration Items map to PagerDuty Services
  * Assignment Groups map to PagerDuty Escalation Policies
* **ServiceNow Assignment Groups map to PagerDuty**
  * Assignment Groups will map to both a PagerDuty Service and a PagerDuty Escalation Policy

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
**Note**: If you have selected **Assignment Groups map to PagerDuty** in the PagerDuty Properties UI, you can skip this step. You will not need to provision Configuration Items into PagerDuty.

Before provisioning your Configuration Items into PagerDuty, it is recommended that you set the corresponding Assignment Group for each of the Configuration Items you will be provisioning. This simplifies the provisioning process: when you provision a single Configuration Item, it will verify that the Assignment Group exists in PagerDuty (as an Escalation Policy). If not, it will also provision the corresponding Assignment Group as a PagerDuty Escalation Policy.
 
With the PagerDuty integration, each ServiceNow configuration item can have a corresponding PagerDuty Service. This integration offers an easy way to quickly generate a new PagerDuty service and webhook (which is necessary to send information back to ServiceNow). It will also populate the associated fields within ServiceNow.
 
Any configuration item that extends the base `cmdb_ci` table can be mapped to PagerDuty because it inherits the same field that contains the PagerDuty service ID. This makes it easy to map any type of configuration item to services in PagerDuty, although provisioning only Business Services, Technical Services and/or Applications is recommended. For each configuration item type, the form view for it will need to be modified to show the PagerDuty object ID.

1. In the list of Applications within your ServiceNow instance, you will notice that the _PagerDuty service_, and _PagerDuty webhook_ fields are all empty for the listed groups except when the CI is mapped to PagerDuty.
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
2. Select an application (or CI) that you would like to provision to PagerDuty. Then, under click on the **Provision CI Into PagerDuty** link under **Related Links** to deploy it to your PagerDuty instance.
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
3. You should see a notification that the configuration item will be created. Once it’s complete, the _PagerDuty service_ and _PagerDuty webhook_ fields will be populated with the PagerDuty IDs.
4. Lastly, you will find that the corresponding service and escalation policy have been created in PagerDuty. The service also has the webhook automatically created, which powers the bi-directional sync between PagerDuty and ServiceNow.

## Provisioning Assignment Groups to PagerDuty
ServiceNow has the concept of assignment groups. With the PagerDuty integration, each assignment group will correspond to a  PagerDuty escalation policy. You can optionally enable settings to automatically create a PagerDuty schedule and team when a group is provisioned from ServiceNow.

Depending on which mapping you choose on the Settings page, some PagerDuty attributes will not be set on Assignment Groups.

* If you choose Assignment Groups map to PagerDuty, each Assignment Group will have a corresponding PagerDuty escalation, service, and webhook ID. Optionally, each Assignment Group will also have a PagerDuty schedule and team ID.
* If you choose Configuration Items and Assignment Groups map to PagerDuty, each Assignment Group will only have a PagerDuty escalation ID (optionally, Assignment Groups will also have a corresponding PagerDuty schedule and team ID). The PagerDuty service and webhook ID is mapped to your Configuration Items in ServiceNow.

**Note**: The user provisioning assignment groups from ServiceNow to PagerDuty must have a PagerDuty user ID attached to their account in ServiceNow

1. Select an assignment group that you would like to provision to PagerDuty. Then, click on the **Provision Group into PagerDuty** link to deploy this group to your PagerDuty instance.
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
2. You should see a notification that the assignment group will be created. Once it’s complete, the _PagerDuty service_, _PagerDuty escalation_, and _PagerDuty webhook_ fields will be populated.

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
1. The integration also allows for the provisioning of users from ServiceNow to PagerDuty. Below is the list of ServiceNow users. You can see directly which users have already been created in PagerDuty as their _PagerDuty ID_ field has already been populated.
2. We’ll select a user that has not already been provisioned to PagerDuty. We can then click on the **Provision PagerDuty User** link to add them to our PagerDuty account:
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
3. You then see a notice that the user is being provisioned. Upon completion, the _PagerDuty ID_ field is automatically populated. The user also shows up within PagerDuty, with the same name and email address.
4. If the user has their _Business phone_ or _Mobile phone_ fields populated in ServiceNow, these settings will also be automatically provisioned as _Contact Methods_ and _Notification Rules_ in PagerDuty.
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
You can verify that PagerDuty and ServiceNow are communicating by assigning an incident to the group in ServiceNow. Below is an incident that was assigned to the Database group which is tied to a PagerDuty service. It was then reassigned to the CAB Approval escalation policy within PagerDuty.
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
 
**Note**: Once you have successfully installed and configured the PagerDuty application in your ServiceNow instance, it is recommended that you index the `incident.x_pd_integration_incident` column on your incident table. This will ensure optimal performance when the PagerDuty application is querying the incidents table.

# Upgrading Your PagerDuty Integration

Before starting the upgrade process for your PagerDuty integration, there are some detailed action items listed under the **Tips For Upgrading** section in [this Community Post](https://community.pagerduty.com/t/whats-new-servicenow-v5-integration/2160). Specifically:

* Revert customizations prior to upgrading from the store, as the upgrade path will not patch customized/modified files.
* Prior to running the "MIGRATE WEBHOOKS TO v5.0" script, update the **PagerDuty Settings** page, and run both the **Test REST API Connection** and the **Test ServiceNow User Authentication** scripts to ensure a **success (200)** status code.