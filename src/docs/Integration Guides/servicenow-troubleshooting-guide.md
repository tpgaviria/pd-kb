---
title: "ServiceNow Troubleshooting Guide"
slug: "servicenow-troubleshooting-guide"
excerpt: "Identifying and resolving common issues with the ServiceNow integration."
hidden: false
createdAt: "2017-09-22T20:27:15.584Z"
updatedAt: "2019-09-05T17:24:51.470Z"
---
## Common Issues and Resolution

## I cannot find the PagerDuty app in the system menu

* Make sure the PagerDuty app has been added to your current instance from the [ServiceNow store](https://store.servicenow.com).
* If you just installed the app, try a hard refresh in your browser, or log out and back in again, as the left menu may just not have been reloaded after the install process. This is the most common issue.
* Install the app to your current instance by going to System Applications, selecting Applications, and clicking the Downloads tab.

### I did all the above, but I still can't see the app. What now?
Check to see if you have any plugins that could prevent the installation from succeeding. We've seen one instance where a customer had a plugin installed that tried to encrypt each attachment within ServiceNow, which lead to the install process of the PagerDuty app looking like it succeeded but in reality it failed, so they couldn't find PagerDuty in the left-hand navigation menu.

## ServiceNow incidents do not trigger PagerDuty incidents, or updates to the incident in ServiceNow don't translate to PagerDuty

1. Check that the REST API connection by going to **PagerDuty** &rarr; **Configuration** &rarr; **Test REST API Connection**. Check that the conditions for triggering are met.
2. Check your main ServiceNow app settings, under **PagerDuty &rarr; Configuration &rarr; PagerDuty Settings**. Is auto-provisioning disabled? If so, then check to see what the value is in the field **Default PagerDuty User ID to use if auto-provisioning is disabled**.
3. See [“When is an incident sent to PagerDuty?”](doc:servicenow-faq#section-when-is-an-incident-sent-to-pagerduty-), in our ServiceNow integration FAQ page.
[block:callout]
{
  "type": "warning",
  "body": "The \"Default PagerDuty User ID\" configuration property in the ServiceNow app needs to be a PagerDuty ID, rather than an email address or ServiceNow user ID. PagerDuty IDs are upper case alphanumeric strings that begin with `P` (see: [Where do the special PagerDuty field values come from?](/v1/docs/servicenow-faq#section-where-do-the-special-pagerduty-field-values-come-from-)). \n\nThere should be only one user that has the given PagerDuty user ID in your ServiceNow instance, and the email address of that user should match the user with that ID in PagerDuty. Otherwise, some of the API calls that the integration needs to make may not succeed.\n\nThis value is used when making the REST API requests to create incidents in PagerDuty, if auto-provisioning is disabled. Thus, if it is set improperly, the requests may not succeed.",
  "title": "Default PagerDuty User ID"
}
[/block]
## Incidents in ServiceNow are not updated or created from PagerDuty

Most synchronization of data and events from PagerDuty to ServiceNow happens through webhooks sent from PagerDuty to ServiceNow. For this reason, if you notice incidents are not updating or getting created from PagerDuty, the webhook import process is what will need to be examined.

### Check webhook authentication and permissions

To test all settings, go to **PagerDuty** &rarr; **Configuration** &rarr; **Test ServiceNow User Authentication.** You should see the message:

```
x_pd_integration (PagerDutyTest): ServiceNow user authentication test successful (200)
```

If you see the following instead:

```
x_pd_integration (PagerDutyTest): ServiceNow user authentication test failed (403)
```

1. Ensure that the **ServiceNow user for authentication** and **ServiceNow password for authentication** configured in **PagerDuty** &rarr; **Configuration** &rarr; **PagerDuty Settings** are valid credentials for a ServiceNow web service access user
2. Ensure that the password is consistent between the user and the setting in the PagerDuty Configuration properties.
3. Ensure that the user for webhook authentication has the following roles:
    * `itil`
    * `rest_service`.
    * `x_pd_integration.admin`

If the password or username have changed in ServiceNow, you must also update the credentials in the ServiceNow extensions on your PagerDuty services. Alternately, in all versions 3.5 and later, you can delete the extensions, set the value of the *PagerDuty Webhook* field to blank in your provisioned assignment groups and configuration items, and then re-provision them.
### Check extensions on PagerDuty services

* Check that the URL in the extensions is correct. The host it points to should be the same subdomain of ServiceNow as the one that you have integrated with PagerDuty.

* If you have provisioned your services and webhooks in PagerDuty from a development or staging instance of ServiceNow, you will need to update your extension URLs to reflect your production instance of ServiceNow, or the bidirectional integration will not work, because webhooks would in this case be sent to the development/staging instance of ServiceNow.

### Check for assignment groups matching the escalation policy

* Make sure the escalation policy is assigned the incident in PagerDuty, whose corresponding incident in ServiceNow wasn’t updated (or for which no ServiceNow incident was created), has a corresponding assignment group in ServiceNow

* Because the escalation policy is assigned the incident, ensure there is an assignment group that has its *PagerDuty Escalation* field set to the escalation policy’s ID.

* You may need to add the two PagerDuty fields to the group form or list view to view their values.

### Check webhook import records

Check to see if the webhook messages have been saved in ServiceNow. In ServiceNow, go to **PagerDuty** &rarr; **Imports** &rarr; **Webhook Import Rows** and look for records with creation time that coincides with the time that the incident in PagerDuty was triggered, acknowledged or resolved.

### Check for required fields

If you can see that webhooks are getting through from PagerDuty to ServiceNow, but are not creating/updating an incident, try manually closing an incident in ServiceNow. If manually closing an incident requires you to enter values for certain fields, your required fields have likely been customized. Create [inbound field rules](https://support.pagerduty.com/docs/advanced-servicenow-configuration#section-inbound-field-rules) so that the required fields have a default value. 

### Check for interfering state field values

Check to see if you have any custom choices set up for the *State* field in the ServiceNow incidents model:

1. Right click on the label of the *State* field (i.e. that would say "New" or "Resolved"), 
2. Select **Configure Dictionary**
3. Switch to **Advanced view**
4. Go to the **Choices** tab and look for entries with higher numbers in the **Value** field.

The integration follows the same convention as the out-of-box state values of ServiceNow. Higher numbers imply a more advanced state (i.e. a 6 or higher would be done/resolved or some variant thereof). If the state of the incident that did not automatically resolve is of a higher numeric value, but the incident did not resolve, it is because it was treated as already resolved.

To correct this, you will need to modify the custom choice values that you have configured for the **State** field to be lower than 6, so that they are treated as an unresolved state (if they reflect that).

### Check For Interfering Data Policies

Data policies, which allow the ServiceNow administrator to create validation rules on tables, can stop the webhook import process from actually committing the changes from PagerDuty to the ServiceNow incident record, and thus block functionality of the integration such as automatic resolution of incidents.

When a data policy does this, there will not be any clear indication of it in the application-scoped logs. Rather, in the system logs, there will be an error-level log entry created at the time of the webhook import, with a message beginning with `Data Policy Exception`.

Fortunately, as of version 4 of the integration, inbound field rules give you the ability to automatically fill fields in the incident, and this can be used to fill fields as desired in order satisfy data policies.

To address this:

1. Go to **System Policy &rarr; Data Policies**, and in the list view
2. Create a new filter on the **Table** field: `=incident`
3. Make note of all the fields, and the constraints
4. Go to **PagerDuty &rarr; Configuration &rarr; Inbound Field Rules**
5. For each incident field that was part of the conditions in the data policy:
  * Create a new inbound field rule
  * Set the webhook type to *Acknowledge* or *Resolve* based on which of these events the ServiceNow incidents aren't being updated for
  * Fill the field with a default value, or dynamically based on the webhook payload.

Main article: [Advanced ServiceNow Configuration: Inbound Field Rules](doc:advanced-servicenow-configuration#section-inbound-field-rules) 

## An inbound field rule is not filling its target field with the desired value

The most common causes include:

* A business rule or some other process is overwriting the changes to the field after it is initially set by the field rule.
* The inbound field rule only applies to a specific webhook event type (i.e. Trigger/Resolve), and the change didn't occur at the specified time because that's not when the relevant webhook type came through.
* The inbound field rule is disabled

To troubleshoot:

1. Go to **PagerDuty &rarr; Configuration &rarr; Inbound Field Rules** and verify:
  * That **Enabled** is *true* for the inbound field rule in question
  * The **PagerDuty webhook type** is the expected type
2. Go to **System Definition &rarr; Business Rules** and look for all rules that modify the field, as follows:
  * Enable the field **Set field values** in the list view
  * Search filter for table: `=incident`
  * Filter out all rows with blank values for **Set field values**
  * If there is more than one page of results, search for all records such that **Set fields values** contains the column name, i.e. `*business_service`. If you find any that modify this field, that may explain why the field is not getting set according to the inbound field rule: it is being overwritten by the business rule.
  * If nothing turns up, look at all business rules that include running a script, to see if any of the scripts include setting the value of the field in question.

## Some user actions are not updated in ServiceNow from PagerDuty.

Check the user's email address in ServiceNow to make sure it matches the user's email address in PagerDuty, and that the user is provisioned.

## Incident notes are not syncing

* The user posting the note might not be [provisioned in PagerDuty](doc:servicenow#section-provisioning-linking-objects-between-systems), i.e. does not have a PagerDuty user ID assigned, and automatic provisioning (the option "Automatically create a PagerDuty user if one is not found matching the user's email") is disabled, and one of the following applies:
  * There is no value set for the option "Default PagerDuty User ID to use if auto-provisioning is disabled" in **Configuration &rarr; PagerDuty Settings**.
  * There is an incorrect/invalid value set for this option. The value must be a PagerDuty user ID, which is the uppercase alphanumeric code at the end of a given user's profile URL.

## I just upgraded and don't see the option to migrate webhooks. How do I run the migration?

You can reenable the menu item to bring it back up and run the migration. To do this:

1. Go to **System Definition &rarr; Application Menus** in ServiceNow.
2. Search by Title for the PagerDuty menu and click its name to open and edit it when it comes up.
3. Under the menu items, look for the "MIGRATE WEBHOOKS" one and check the box next to it.
4. In the **Actions on selected rows** dropdown, select "Change active state".
5. Refresh the page, go to the PagerDuty application in the system menu, and you should find the menu item.

## My ServiceNow is firing off hundreds or thousands of emails or worknote updates on an incident? 

While feedback loops can result from custom business rules and/or automation in ServiceNow, it is also possible in the integration to make the mistake of creating a webhook-powered feedback loop between ServiceNow and PagerDuty. 

This can happen if there are any business rules or other automated processes that alter the assignment group of the ServiceNow incident, and caution is not exercised when manually setting the integration fields. To give a high-level overview of an example of how this can possibly happen, let us assume the following configuration:

* There is a business rule that automatically changes the assignment group to **B** if it is placed into assignment group **A**.
* Both assignment group **A** and **B** are tied to PagerDuty escalation policy **Z.**

The feedback loop is as follows:

1. Incident changes assignment group to (or is created in) **B**.
2. PagerDuty incident triggered and assigned to **Z**.
2. Webhook (escalation restarted; `incident.delegate` or `incident.trigger` webhook).
3. Webhook import in ServiceNow assigns incident to **A**.
4. Automation changes assignment to **B**.
5. Loop repeats.

## Duplicate Incidents

### ServiceNow is creating duplicate incidents in PagerDuty

This is happening because something is circumventing the methods designed into the PagerDuty integration to avoid triggering duplicate incidents.
[block:callout]
{
  "type": "info",
  "title": "How it works",
  "body": "The integration uses the **PagerDuty Incident** field in the ServiceNow incident as a sort of semaphore in order to prevent race conditions, by filling it with a placeholder value: `---waiting---` before it is later filled with the PagerDuty incident ID once the incident in PagerDuty is created. \n\nThis placeholder value is filled in immediately when the business rule runs, and the business rule's conditions exclude the case where the field has a value that starts with `---` in it. Thus, if two updates happen in succession, before the incident triggers in PagerDuty, the business rule still won't run twice.\n\nThe incident is updated again when the PagerDuty REST API is being called to trigger the incident. To prevent other updates from triggering the same business rule again, `current.update()` is called to commit the incident with the placeholder value to the database."
}
[/block]
Assuming that there have been no customizations to the out-of-box PagerDuty integration, the most likely cause is an automation, i.e. separate business rule, that is triggering a secondary automatic update on the incident record after the initial one. The business rule **PD Trigger PagerDuty Incident** is set to run *after*, with order = 100, meaning that it runs _after_ the changes are committed to the database. So, any two updates that happen in rapid succession and asynchronously risk triggering the PagerDuty incident triggering business rule twice.

To resolve this, one will need to first find out how the secondary updates are taking place, as follows:

1. Go to **System Logs &rarr; Events**
2. Find events of name `x_pd_integration.trigger_incident` around the time of the duplicate triggering.
3. Observe the values of:
    * `param1`, the last worknotes entry,
    * `param2`, a comma-delineated list of extra parameters: current user `sys_id`, the operation (insert or update), and a boolean for whether or not the value of the assignment group or configuration item changed.
    * User ID
    * User name
4. Identify the event that was raised by the automated process based on how the event was submitted, vis-à-vis the available attributes.
5. Find some attribute of the automated update operation that can be used to distinguish it from others, i.e. made by a human.
6. Add conditions to the business rule **PD Trigger PagerDuty Incident** that exclude updates which have the distinguishing characteristics of the automated updates.

## PagerDuty is creating duplicate incidents in ServiceNow
[block:callout]
{
  "type": "info",
  "title": "How it works",
  "body": "The PagerDuty App receives webhooks and saves them in an import table, and uses an import transform map to translate them to updates to existing incidents or insertion of new incidents. It uses the **PagerDuty Incident** field in the ServiceNow incident to identify existing incidents"
}
[/block]
### Verify that coalescing on incident ID is enabled in the import transform map

1. Go to **PagerDuty &rarr; Imports &rarr; Webhook Import Service**
2. Scroll to the bottom of the page and follow the link to the **PagerDuty Webhook Import** under **Web Service Transform Maps**
3. Scroll to the bottom of the page to find the **Field Maps** section.
4. In the mapping for the field `id` &rarr; `x_pd_integration_incident`:
  * Ensure that **Coalesce** is **true**.
  * If it is false, set it to true.