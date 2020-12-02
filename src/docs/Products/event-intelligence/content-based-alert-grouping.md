---
title: "Content Based Alert Grouping"
slug: "content-based-alert-grouping"
hidden: false
createdAt: "2020-07-08T23:56:42.721Z"
updatedAt: "2020-11-24T23:58:09.050Z"
---
Content Based Alert Grouping enables services with predictable, homogenous alert data to have customized alert grouping without training an algorithm. With Content Based Alert Grouping, alerts that share an exact match on a set of chosen fields will be grouped together into the most recent open incident. If an incident remains open for 24 hours, grouping stops and any future alerts will trigger a new incident. Similar to other alert grouping mechanisms, Content Based Alert Grouping will only group alerts on the same service.
[block:callout]
{
  "type": "info",
  "body": "This feature is available as part of the [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) package or on Digital Operations plans. If you would like to sign up for a trial of Intelligent Alert Grouping and other Event Intelligence features, please [contact our Sales team](https://www.pagerduty.com/contact-us/#contact-sales).",
  "title": "Note"
}
[/block]
# Configure Content Based Alert Grouping
[block:callout]
{
  "type": "warning",
  "body": "User, Admin, Manager, Global Admin or Account Owner roles can configure Content Based Alert Grouping.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).",
  "title": "Required User Permissions"
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Important Notes",
  "body": "* Content Based Alert Grouping requires data to be formatted in [Common Event Format (PD-CEF)](https://support.pagerduty.com/docs/pd-cef).\n* Alerts will only be grouped on exact matches for the entire selected fields."
}
[/block]
1. Select **Services** :fa-arrow-right: **Service Directory** and click the **name** of the service where you would like to use Content Based Alert Grouping.
2. Select the **Response** tab and click **Edit** under the **Alert Grouping** section.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5af7dcd-content-based-alert-grouping-overview.png",
        "content-based-alert-grouping-overview.png",
        1245,
        474,
        "#f6f8f7"
      ],
      "caption": ""
    }
  ]
}
[/block]
3. Select the **Content-Based** radio button, then click **Create Grouping**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b202c03-content-based-alert-grouping-create-grouping.png",
        "content-based-alert-grouping-create-grouping.png",
        1150,
        545,
        "#dfe8f7"
      ],
      "caption": ""
    }
  ]
}
[/block]
4. Select whether you want alerts to be grouped if **All** or **Any** specified fields match. If **All** is selected, an exact match on every specified field name must occur for alerts to be grouped. If **Any** is selected, alerts will be grouped when there is an exact match on at least one of the specified fields. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/40a43e7-content-based-alert-grouping-select-fields.png",
        "content-based-alert-grouping-select-fields.png",
        1360,
        671,
        "#bac0cc"
      ]
    }
  ]
}
[/block]
5. There are two methods for specifying alert grouping fields: 

* On the right side of the screen, select a recently received alert to see the data payload off that specific alert. Directly click on the fields you want to group on and they will be added to your configuration. OR:
* Select your preferred PagerDuty Alert Fields from the dropdown:
   * **Class**
   * **Component**
   * **Group**
   * **Severity**
   * **Source**
   * **Summary**
   * **Custom Details**: To use Custom Details field as your grouping criteria, select **Custom Details** from the drop-down menu, and enter your **custom field name**. Be sure that your spelling and capitalization exactly match the alert field which you would like to use for grouping. To use a nested Custom Details field, use dot-notation to specify the field name. **Note**: Dot-notation will only work if your field is nested within an object (not a string).

6. Click **Save Alert Grouping Settings** to complete configuration.

# FAQ

## How long will alerts group into an incident?

Until the incident is resolved, or up to 24 hours. After this time a new incident will be created. 

## If I have selected ‘Any’ for field matching criteria and the following occurs: Alert A has an exact match on one specified field with Alert B; Alert B has an exact match on a different field with Alert C; Alert C has no matching fields with Alert A. How are alerts grouped?

Alert A and B would be grouped into one incident. A new incident would be created for Alert C. Content based alert grouping does not chain fields with subsequent alerts and alerts are grouped into the most recent incident where there is an exact match. 

## How do I use a nested Custom Details field as part of my Content Based Alert Grouping configuration?

Use dot-notation to specify nested Custom Details fields, such as `field_name.nested_field1`. **Note**: Dot-notation will only work if your field is nested within an object (not a string). For example, if your Custom Details looks like `{"field_name": "nested_field1 = value, nested_field2 = value"}` , entering `field_name.nested_field1` will not allow you to group on the nested field. If you want to group on a value from a string, first extract it using [Event Rules](https://support.pagerduty.com/docs/rulesets#dynamic-field-enrichment--extraction).

##Can I manipulate or merge content of different fields to use as alert grouping criteria?

Yes, with [Dynamic Field Enrichment & Extraction](https://support.pagerduty.com/docs/rulesets#dynamic-field-enrichment--extraction).