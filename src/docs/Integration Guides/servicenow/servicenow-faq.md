---
title: "ServiceNow Frequently Asked Questions"
slug: "servicenow-faq"
hidden: false
createdAt: "2017-10-17T18:21:03.553Z"
updatedAt: "2020-03-04T19:27:57.420Z"
---
## How can I tell what version of the PagerDuty app for ServiceNow I am using?

In ServiceNow, go to **System Applications** &rarr; **Applications** &rarr; **Downloads** tab and find the application *PagerDuty Incident Resolution Platform*. Under the application title, you will see the version of the app.

## When is an incident sent to PagerDuty?

By default, the PagerDuty application triggers a PagerDuty incident if the service and escalation policy used for handling the incident can be determined, and if the incident’s priority is either P1 or P2.

The service and escalation policy are determined as follows:

* If the *ServiceNow to PagerDuty mapping* is set to “Assignment Groups map to PagerDuty”: the assignment group must be provisioned, i.e. its *PagerDuty Service* and  *PagerDuty Escalation* fields must be set to valid IDs of PagerDuty service and escalation policies, respectively;
* If the *ServiceNow to PagerDuty mapping* is set to “Configuration Items and Assignment Groups map to PagerDuty”:
  * The escalation policy can be determined from the assignment group, whether it is set as the assignment group of the incident or as the assignment group designated for the configuration item;
  * The service can be determined from the configuration item, OR:
  * If the configuration item is not provisioned, the service can be determined from the configuration property “Default PagerDuty Service ID to use if Configuration Item is not mapped” (this is a catch-all)
[block:callout]
{
  "type": "info",
  "title": "In versions 3.5 and earlier:",
  "body": "The PagerDuty escalation policy is not required when creating the incident, but only assignment groups can be associated with PagerDuty services."
}
[/block]
## How can I see the PagerDuty fields in ServiceNow?

As of version 4.0, there are three fields for PagerDuty on the group form: 
two fields on the incident form, one field on the user form and one field on the configuration items form. 

To make each one visible: 
1. When viewing the form you want to change, right click the grey header, 
2. Select **Configure** &rarr; **Form Layout**. The new page will have two columns. 
3. Look for the PagerDuty field(s) you want in the left column, select it and click the right arrow to add it. 
4. Save once complete. Go back to the form and you should see the new field(s) added.

You can also enable the fields in the list view; click on the gear icon in the upper left corner of the list to add the columns to the display.

## How can I manually edit the PagerDuty fields?
Right click on the field label, click **Configure Dictionary**, uncheck **Read only** on the new page, and save.

## How do I undo provisioning of a group, user or CI?

This will allow you to reset provisioning of a user, group or configuration item.

1. Enable writing to the integration fields as described above. The fields' labels all start with "PagerDuty", and their column names all start with `x_pd_`.
2. Set the values of the fields to blank.
3. Delete or rename the corresponding objects in PagerDuty to avoid name collisions, with the exception of users.

Objects must have unique names, ignoring differences in case and leading/trailing whitespace differences, which can cause errors when trying to provision them again, with the exception of users. Thus, step 3 is necessary to ensure there are no preexisting objects in the PagerDuty account with the same name.

The reason why this isn't necessary for users is because the integration does not attempt to create a new user if it can find a user with the same email address as the user in ServiceNow. Thus, existing users will not cause issues when provisioning.

## Is there any way to re-do provisioning of a ServiceNow webhook?

If you clear out the value of the *PagerDuty Webhook* field in the ServiceNow assignment group / configuration item, then a webhook will be automatically re-provisioned in PagerDuty at the time of the next incident in this group / for the CI that triggers in PagerDuty, and the integration will then save the new webhook object's ID to this field.

## Can I connect multiple PagerDuty services to a single ServiceNow group?
That's not possible at the moment. The mapping is 1-to-1.

## Where do the special PagerDuty field values come from?

The fields such as **PagerDuty Escalation** and **PagerDuty Service** that are added to the assignment group, configuration item and user tables in ServiceNow are automatically populated with IDs from PagerDuty when provisioning them. These IDs are all upper-cased alphanumeric strings that begin with `P`. The ID of any object can be obtained by navigating to view the object in PagerDuty, and examining the page URL. The ID should be near the end of the URL.

## How do I tie an assignment group or configuration item to a preexisting escalation policy or service?

To "manually" provision (i.e. create a link between preexisting objects in both PagerDuty and ServiceNow):

1. Clear out the values that contain the PagerDuty IDs, i.e. *PagerDuty Escalation*, *PagerDuty Service* etc.
2. Obtain the values of the object IDs from their respective view pages in PagerDuty
3. Put the ID values into the respective fields in the ServiceNow object (assignment group or configuration item) and save

## What fields are sent to PagerDuty when provisioning a user?

The following values are sent when provisioning:

* Display value (i.e. full name)
* Phone numbers
  * `phone`
  * `mobile_phone`
* `email`
* `title`

## Is it possible to integrate more than one PagerDuty instance with a single ServiceNow instance? 

No, not at this time. You can integrate a single PagerDuty instance with multiple ServiceNow instances, but you cannot integrate multiple PagerDuty instances with a single ServiceNow instance.