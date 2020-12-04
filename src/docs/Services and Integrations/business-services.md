---
title: "Business Services"
slug: "business-services"
excerpt: "Create business services to model how technical services support your business infrastructure and to communicate incident status to non-technical stakeholders"
hidden: false
createdAt: "2018-09-04T08:42:52.049Z"
updatedAt: "2020-10-08T22:36:50.913Z"
---
Business services allow you to model capabilities that span multiple technical services and that may be owned by several different teams. Mapping [technical services](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) to business services gives responders context on an incident’s impact to the business. The [status dashboard](https://support.pagerduty.com/docs/status-dashboard) uses this feature to let non-technical stakeholders see when there is an incident affecting one of the business services they care about.

#Configuring Business Services
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Admin, Manager, Global Admin and Account Owner base roles can create and edit business services. Managers must have Manager level access to the team associated with the Business Service.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).
</Callout>


Ideally, business services are:

* Recognizable to non-technical stakeholders
* Supported by 1 or more technical services in PagerDuty
* Can have clearly defined [impact metrics](https://support.pagerduty.com/docs/impact-metrics) that are meaningful to non-technical services

You may have business services listed on an external status page, within a service catalog/CMDB, or defined in relation to existing health metrics from a monitoring tool.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/27141b3-business-services-overview.png",
        "business-services-overview.png",
        1930,
        1200,
        "#f8f8f9"
      ],
      "caption": ""
    }
  ]
}
[/block]
##Create a Business Service

1. Go to **Services** and select **Business Services**.
2. Click **Create New Business Service**. 
3. Enter a meaningful name that will define the business service and provide a description.
4. Enter the owner as yourself or a point of contact for the business service. *(Optional)*
5. Select the associated team from the dropdown. This will allow users with Manager level access to the team to edit the Business Service.
6. Click **Add Supporting Services** to add any technical services or business services that this service requires in order to be considered operational. For more information, please read our section on [supporting services](https://support.pagerduty.com/docs/business-services#section-supporting-services).
7. Click **Create Business Service** to save. 
[block:callout]
{
  "type": "warning",
  "body": "Sometimes there is a technical service that supports a business service but that is not critical to its function. You may prefer to omit **non-critical technical services** that support a business service, since a disruption to one of those technical services does not necessarily mean that the business service is disrupted.",
  "title": "Tip
</Callout>


##Supporting Services

Supporting services are [technical services](https://support.pagerduty.com/docs/services-and-integrations) or other business services that a business service requires in order to be considered operational. If one of the supporting services mapped to a business service experiences an incident with a [priority](https://support.pagerduty.com/docs/incident-priority) assigned, this business service will be impacted and appear on the status dashboard.

You can configure business services to set a threshold for which priority levels will change their status to impacted. For example, you may want to set a threshold so that only P1 and P2 incidents impact a business service.

To set a priority threshold:

1. Navigate to **Services** :fa-arrow-right: **Business Services** :fa-arrow-right: :fa-cog:.
2. Select the **If a supporting technical service has an open incident with a priority at or above** radio button and select your preferred priority level threshold.
3. Click **Save Changes**.

##Edit or Delete a Business Service

To edit all business service incident settings:

1. Navigate to **Services** :fa-arrow-right: **Business Services** and click the :fa-cog:.
2. Select when you would like business services to show an incident: 
   * **If a supporting technical service has an open incident with any priority assigned**
*or*
   * **If a supporting technical service has an open incident with a priority at or above** and select the **priority level**. 
3. Click **Save Changes**. 

To edit the an individual business service: 

1. Navigate to **Services** :fa-arrow-right: **Business Services**, click the **name** of the desired business service and click **Edit Business Service**.
2.  Edit the details you wish to change and click **Save Changes**. If you are deleting your business service, click **Delete Business Service**.