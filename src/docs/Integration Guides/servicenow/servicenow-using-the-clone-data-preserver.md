---
title: "ServiceNow: Using the Clone Data Preserver"
slug: "servicenow-using-the-clone-data-preserver"
hidden: false
createdAt: "2018-08-22T18:17:11.299Z"
updatedAt: "2020-05-01T19:57:01.942Z"
---
In some cases, you may want to clone your ServiceNow production data to a new dev instance. While there can be many motivations for doing so, problems with the PagerDuty integration can occur if the data is cloned without using a Clone Data Preserver. In this article we'll discuss how to avoid common issues that come with replicating an environment in ServiceNow.

## What is the Clone Data Preserver? 
The Clone Data Preserver is a feature within ServiceNow that you can use to define what data should **not** be replaced when cloning one environment into another. 

## Why should I use this?
When you clone your environment, you also clone the PagerDuty integration. When this happens you lose PagerDuty configuration in the target destination, such as the CI or AG mappings, service IDs, and API keys. To clone the PagerDuty integration and have it remain in a functional state, you'll need to utilize the Clone Data Preserver to preserve certain PagerDuty fields beforehand. In the walkthrough below, we'll be creating the Clone Data Preservers in our Production environment, prior to cloning anything to our Dev instance.
[block:callout]
{
  "type": "info",
  "title": "Required Permissions",
  "body": "Please keep in mind that in order to use the Clone Data Preserver feature, your ServiceNow role must include `clone_admin` or `admin`"
}
[/block]

[block:api-header]
{
  "title": "Creating the Clone Data Preservers by Importing an Update Set"
}
[/block]
As an alternative to creating the Clone Data Preservers manually, you can import one of the following update sets to the origin ServiceNow instance. In keeping with our prod to dev example, you would import the appropriate update set onto your prod instance before cloning over to your new dev instance. 

[This update set](https://github.com/PagerDuty/servicenow-updatesets) will work for both v5 and v6 of the PagerDuty integration.

Note that this update set only preserves the PagerDuty Settings configuration. To preserve the mappings for Users, Assignment Groups, and Configuration Items, a ServiceNow administrator can follow the instructions below to manually preserve those records. 
[block:api-header]
{
  "title": "Creating the Clone Data Preservers Manually"
}
[/block]
To begin, navigate to System Clone :fa-arrow-right: Preserve Data, and select New. We'll begin by addressing the PagerDuty fields in the sys_properties table. In total, we will make 4 separate Clone Data Preservers.

Once you've created a new record for the Clone Data Preserver, select the **sys_properties** table, as shown in the below screenshot. Try to make the name of the Clone Data Preserver as descriptive as possible for your own reference later.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/903b701-Clone_Data_Preserver.png",
        "Clone_Data_Preserver.png",
        2162,
        632,
        "#f3f3f4"
      ]
    }
  ]
}
[/block]
 From here, we're going to be creating **OR** conditions for the following Names. 

- **Name Is** x_pd_integration.default_user OR
- **Name Is** x_pd_integration.instance_url OR
- **Name Is** x_pd_integration.sn2pd_mapping OR
- **Name Is** x_pd_integration.default_service OR
- **Name Is** x_pd_integration.api_key OR
- **Name Is** x_pd_integration.webhook_restapi OR
- **Name Is** x_pd_integration.sn_auth_user OR
- **Name Is** x_pd_integration.sn_auth_userpwd


Go ahead and save your changes. Once this Clone Data Preserver is created, we'll **create another for the `sys_user` table.** 

Navigate to **System Clone :fa-arrow-right: Preserve Data**, and select **New**.  Select `sys_user` as your table, and add the following condition and save your changes:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/22badca-CDP-User-Mapping.png",
        "CDP-User-Mapping.png",
        2802,
        760,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]
Create a new Clone Data Preserver for the `sys_user_group` table with the following conditions:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3939763-CDP-AG-Mappings.png",
        "CDP-AG-Mappings.png",
        2800,
        1106,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
Lastly, create a new Clone Data Preserver for the `cmdb_ci ` table with the following conditions:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e3eac54-CDP-CI-Mappings.png",
        "CDP-CI-Mappings.png",
        2806,
        848,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]
Note that for the Users, Assignment Groups, and Configuration Items preservers above, it will preserve the entire record in the target instance, not just the PagerDuty ID values within that record. Additionally, these conditions are tailored for the out-of-box integration. Customers who have implemented customizations to the PagerDuty ID Fields may need to alter their queries for each Clone Data Preserver.