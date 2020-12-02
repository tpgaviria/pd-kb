---
title: "How the Integration Works"
slug: "how-the-servicenow-integration-works"
excerpt: "An overview of the essential core components of the ServiceNow integration."
hidden: true
createdAt: "2017-09-22T21:48:01.626Z"
updatedAt: "2017-09-22T21:54:50.908Z"
---
Some familiarity with the components that drive each aspect of the integration workflow, and the functions they serve, can be useful for fine-grained troubleshooting or in planning how to implement a custom solution that goes beyond what is possible with the tools available in the out-of-box integration app.

Also, in the ServiceNow Enterprise integration app for PagerDuty, the source code of many of the components are not only visible, but also can be modified.

All of the source code that performs the actions underpinning the integration is in the JavaScript language, and can be viewed by going to the "Advanced" section or tab of any component's view. The application's components can be accessed by going to **PagerDuty &#9658; Configuration &#9658; Configuration files**. There you will find a page with the following tabs:

* Business Rules
* Script Actions 
* Script Includes 
* UI Actions 
* Processors
* UI Pages
* Macros
* Application Files

If you are having trouble with your ServiceNow integration, it is recommended that you first review the [ServiceNow Troubleshooting Guide](/docs/servicenow-troubleshooting-guide).

# Introduction

## Terminology

### Assignment versus Escalation and Delegation

The term **assignment** has a slightly different meaning in PagerDuty than it does in ServiceNow. When an incident is "assigned" to a user in PagerDuty, that means, in effect, it was escalated to them and they are the agents who will be notified. When an incident is first triggered, it is considered to be assigned to the first targets in the escalation policy until escalated. However, it will not assign the incident to anyone in ServiceNow until someone acknowledges it, in which case the corresponding ServiceNow incident will be assigned to them.

When an incident in ServiceNow is assigned to a user, that similarly escalates the incident to that user in PagerDuty.

The integration will also assign the ServiceNow incident to the user who acknowledged it in PagerDuty, since it is assumed that the user who acknowledged it is the one who will be working on it.

The term **delegation** refers to the act of reassigning a PagerDuty incident to a different escalation policy, or level of an escalation policy, removing it from the current escalation policy flow and starting a new escalation process.

### Provisioned versus Linked

The term **provisioned** refers to when the item in ServiceNow has an analogous record in PagerDuty, identified by one or more metadata fields, referred to as the **integration fields**. For assignment groups, these will be *PagerDuty Service* and *PagerDuty Escalation*, which will contain the IDs of a PagerDuty [Service](/docs/services-and-integrations) / [Escalation Policy](/docs/escalation-policies) pair, and in version 3.5 and later, the *PagerDuty Webhook*, which will contain the ID of the [extension](/docs/extensions-and-add-ons#section-extensions) used for the two-way integration. Users are provisioned if their *PagerDuty User* field refers to the ID of a currently-existing user in PagerDuty. Unprovisioned records will have these fields blank, or referencing nonexistent records if the records were deleted in PagerDuty.

An incident is considered **linked** if it is associated with a PagerDuty incident, in which case its status, work notes and other information pertaining to the incident can be synchronized between systems.

## Troubleshooting With Verbose Logging

To get the most detailed information about what is happening and in what order, set "Logging verbosity level" to *debug* in **PagerDuty &#9658; Configuration &#9658; Properties**. Each call to `gs.debug` in the script source will then show up in the application-scope logs, which can be viewed  under **PagerDuty &#9658; Support &#9658; Logs**.

# Disclaimer

If you modify any core component of the integration, note that upgrading the application will not work as expected, and customizations are not supported by PagerDuty.

Please see [Upgrading a ServiceNow App With Manual Changes](https://community.pagerduty.com/t/upgrading-a-servicenow-app-with-manual-changes/257) for more information on this process.

# The Core Components

Most of the tasks performed to synchronize data between PagerDuty and ServiceNow are taken in the following application files, under *Script Includes*:

* **PagerDuty:** Utilities for obtaining PagerDuty metadata, and functions for performing actions on  incidents, i.e. assigning to a user, synchronizing worknotes, and triggering new incidents.
* **PagerDutyInbound:** Functions that handle receipt and processing of webhooks from PagerDuty
* **PagerDutyProvisioning:** Handles the creation of objects in PagerDuty from ServiceNow, or in the case of users, finding existing ones that match analogous ones in ServiceNow.
* **PagerDuty_REST:** Core functions for making REST API requests, and in version 3.2.1 and earlier, Events API requests.

Each of the above defines a class constructor named after the script include. Methods of these classes are called throughout the rest of the application.

Another important file, which handles the importing of webhook data into ServiceNow incidents, is the **PagerDuty Webhook Import** Table Transform Map, which can be found under the *Application Files* tab.

# Provisioning: Linking Objects Between Systems

For any user or assignment group, user or CI in ServiceNow to be recognized by the integration, it must be provisioned.

Objects can be provisioned by clicking "Provision PagerDuty Service" or "Provision PagerDuty User" under *Related Links* in the view of the group, user, or configuration item, or by selecting several from the list view and selecting the option to provision them under the menu “actions on selected rows”.

This process will make the necessary REST API calls in the `PagerDutyProvisioning` object, note the ID of the created (or existing) records, and save them in one of the following fields:

* User:
  * *PagerDuty ID*, `x_pd_integration_pagerduty_id`: ID of a user in PagerDuty. When provisioning, if a user with identical login email to the user being provisioned is found, that user will be used, rather than creating a new user.
* Assignment Group:
  * *PagerDuty escalation*, `x_pd_integration_pagerduty_escalation`: ID of an escalation policy in PagerDuty.
  * *PagerDuty service*, `x_pd_integration_pagerduty_service`: ID of a service in PagerDuty
  * *PagerDuty webhook*, `x_pd_integration_pagerduty_webhook` (v3.5 and later): ID of the extension on the PagerDuty service.
* Configuration Items: *PagerDuty Service* and *PagerDuty Webhook*, similar to assignment groups above.

## When Users Are Auto-Provisioned

As of version 3.x, users in PagerDuty are automatically provisioned for ServiceNow users, or the ServiceNow user's record will be linked to a PagerDuty user if one exists with the same email address, in only the scenario wherein they provision an assignment group. The user performing the provisioning is themselves auto-provisioned and then automatically added as the initial member of the new escalation policy in PagerDuty.

## Special Usage of the Integration Fields

Note, one can obtain the ID of any object in PagerDuty by going to its main view page and looking in the URL in your web browser. The ID should be a string of uppercase alphanumeric characters beginning with `P`, and will be close to the end of the URL. By this method, one can manually "Provision" objects by forcefully setting the appropriate fields in the ServiceNow objects according to existing records. 

In short, for the bidirectional integration, the following is how the fields are used:

* When a ServiceNow incident is to trigger a PagerDuty incident, the *Service* field of the assignment group is used to tell which PagerDuty service to trigger it on..
* When a PagerDuty incident is to open a ServiceNow incident via webhook import, the assignment group is looked up by value of the *Escalation* field.

*It is preferable to avoid associating more than one ServiceNow group with the same escalation policy.* This is because the webhook transform map, if it finds more than one assignment group with the same escalation policy ID, will assign the ServiceNow incident to the first assignment group that it finds whose `x_pd_integration_pagerduty_escalation` column value matches the escalation policy ID in the webhook.

However, conversely, it should be possible to manually associate an assignment group with multiple services, which all use the same escalation policy, and have the integration still work smoothly. This is because (see *PagerDuty to ServiceNow: The Webhook Import Process*) it identifies the assignment group by escalation policy ID, and there's one escalation policy for all the services, so the service ID has no bearing in this part of the process. 

In the opposite direction, ServiceNow incidents can only trigger incidents in PagerDuty on one service: the one whose ID is stored in the assignment group's *PagerDuty Service* field. 

## Avoiding Feedback Loops

While many forms of automation feedback loops can result entirely from poorly-designed business rules in ServiceNow (and this is beyond the scope of this article), it is also possible in the integration to make the mistake of creating a webhook-powered feedback loop between ServiceNow and PagerDuty.

This can happen if there are any business rules or other automated processes that alter the assignment group of the ServiceNow incident, and caution is not exercised when manually setting the integration fields. To give an example of how this can happen, let us assume the following configuration:

* There is a business rule that automatically changes the assignment group to **B** if it is placed into assignment group **A**.
* Both assignment group **A** and **B** are tied to PagerDuty escalation policy **Z.**

The feedback loop is as follows:

1. Incident changes assignment group to (or is created in) **B** &#8617;
2. PagerDuty incident triggered and assigned to **Z** &#8617;
2. Webhook (escalation restarted; `incident.delegate` or `incident.trigger` webhook) &#8617;
3. Webhook import in ServiceNow assigns incident to **A** &#8617;
4. Automation changes assignment to **B** &#8617;
5. Loop repeats. &#8617;

# Business Rules: ServiceNow to PagerDuty

All aspects of the integration that concern any flow of data from ServiceNow to PagerDuty are handled by business rules. Basically, it begins when an event such as an insertion, update or deletion takes place on an incident. If the conditions of a business rule are met, the rule and its associated script are run, which invokes a transaction with the PagerDuty API to perform the necessary actions in PagerDuty.

If you are unfamiliar with ServiceNow business rules, the two-part video series [Business Rules | Best Practices](https://hi.service-now.com/kb_view.do?sysparm_article=KB0540192) from the ServiceNow knowledge base is highly recommended, as is the article [Business Rules](http://wiki.servicenow.com/index.php?title=Business_Rules#gsc.tab=0) in the ServiceNow Wiki.

When troubleshooting the flow of information from ServiceNow to PagerDuty, it will sometimes help to examine the incident to see if it passes the conditions of the relevant business rules. To view the conditions of any given business rule, open the record and enter the *Edit* view, but do not save. Once the page loads, you will see the *Filter Conditions* in a modifiable, human-readable display.

It is worth noting, the PagerDuty API calls do not always take place specifically within the business rules themselves. Rather, the business rule will raise an event that is handled by a *Script Action*.

## How PagerDuty Incidents Are Triggered

Consider the event named `x_pd_integration.trigger_incident`, handled by the **PagerDuty Trigger Incident** script action. This event is raised by one of the following business rules:

* **PD Trigger PagerDuty Incident:** An incident that has no corresponding PagerDuty incident is created (or updated) in ServiceNow, having Priority 1 or 2
* **PD Group Assign Trigger New Incident:** A preexisting incident that was previously tied to a PagerDuty incident, but that was "unlinked" by assigning it to a non-provisioned assignment group (per the business rule *PD Unlink if not PagerDuty group*)

There is an additional condition that is tested for in a dynamic manner based on the *Choose ServiceNow to PagerDuty mapping* setting: the assignment group and/or configuration item must be provisioned; see “When is an incident sent to PagerDuty?” in our ServiceNow troubleshooting FAQ.

In brief: the service in PagerDuty on which the incident will be triggered is determined by the *PagerDuty Service* field in the ServiceNow assignment group to which the incident is assigned, or the similarly-named field in the configuration item to which the incident corresponds, or (optional, to provide a catch-all) the value specified for *Default PagerDuty Service ID*.

The test for this is done in the *PagerDuty* Script Include, in the function `PagerDuty.triggerIncident`.

## How PagerDuty Incidents Are Resolved

The following business rules resolve PagerDuty incidents from ServiceNow:

* **PD Resolve PagerDuty Incident:** the incident's *State* field must change to 6 or 7 (resolved/closed) and the incident must be linked. This raises the `x_pd_integration.resolve_incident` event, handled by the **PagerDuty Resolve Incident** script action. The `PagerDuty.resolveIncident` function is called to resolve the incident.
* **PD Unlink if not PagerDuty group:** if a linked incident is assigned to a non-provisioned assignment group, it is assumed that it will be handled outside of the PagerDuty incident response process. Hence, the PagerDuty incident will be resolved. This process happens as follows:
  1. The **PagerDuty Incident** field on the ServiceNow incident record is set to to `---unlinked---`. 
  2. This sets off the business rule **PD Resolve Incident on Unlink**.

The latter of these raises the `x_pd_integration.resolve_on_unreference` event, handled by the *PagerDuty Resolve on Unreference* script action, which calls `PagerDuty.resolveOnUnreference` to resolve and post a worknote to the PagerDuty incident to indicate that it was resolved for this reason.

## Reassignment and Delegation 

Incidents in ServiceNow, when assigned to a user or assignment group, may trigger one of the following business rules:

* **PD User Assign:** If a provisioned user is assigned a linked incident, this escalates the PagerDuty incident to the user in PagerDuty, by raising the `x_pd_integration.assign_incident_user` event, which is handled by the **PagerDuty User Assign Incident** script action, which calls the `PagerDuty.assignIncidentToUser` function.
* **PD Group Policy Assign:** if the assignment group of a linked incident changes, and the new assignment group is provisioned, the corresponding PagerDuty incident will be delegated to the Escalation Policy in PagerDuty specified by the assignment group's **PagerDuty Escalation** field. This will restart escalation and notify the new assignees in the target policy.

# Worknote Synchronization

Worknotes are copied from ServiceNow to PagerDuty through the **PD Copy worknote to PagerDuty incident** business rule, which triggers the `x_pd_integration.post_worknote` event, which then invokes the `PagerDuty.postIncidentNote` function. This runs on any update of a linked incident wherein the work notes change.

The process that runs in the opposite direction is also initiated by a business rule, apart from just the UI Action *Refresh PagerDuty Notes*, which appears as an action in the context menu for any given linked incident. The action used is actually a form of polling (since posting worknotes do not trigger webhooks, this is necessary). Hence, the HTTPS request is actually initiated from the ServiceNow application. It is done through the business rule **PD Update Worknotes from PagerDuty Notes**, raising the event `x_pd_integration.import_notes` (handled by the *Import Notes from PagerDuty incident* script action). In both cases, the functions `PagerDuty.getIncidentNotes` and `PagerDuty.createNoteImports` are used to import and save notes from PagerDuty.

Worknotes from PagerDuty are imported to ServiceNow incidents as follows, as of version 3.5:

1. `PagerDuty.getIncidentNotes` is called
2. If there are any notes on the incident, the function `PagerDuty.createNoteImports` is called to create note import records
3. The **PagerDuty Note Import** table transform map is run on each new note import record to update the work notes on the incident in question.

# Webhook Import: PagerDuty to ServiceNow

Real-time updates to incidents in PagerDuty are communicated to ServiceNow through [extensions](/docs/extensions-and-add-ons#section-extensions), created on each PagerDuty service that corresponds to a provisioned assignment group in ServiceNow. When a group is initially provisioned, an extension will also be created on the service. In version 3.5 and later, an extension on the service will be provisioned automatically if one does not already exist, whenever a new incident is created.

The extensions, also known as webhooks, specify URLs in the ServiceNow instances to which JSON-encoded data is sent via HTTPS/POST requests.

## Initial receiving and importing of the webhook

The first point of entry into the ServiceNow application is the **Webhook Post** Scripted REST Resource, found in the *Application Files* tab. This component handles the receipt of the payload, validation of the webhook key / endpoint path, and generating the response. The processing of the data itself is done by the **PagerDutyInbound** Script Include, via a call to `PagerDutyInbound.processRestWebhook`.

**PagerDutyInbound** handles the saving of data. It is passed an array, `messages`, containing one or more webhook event objects as described in [Webhooks Overview](https://v2.developer.pagerduty.com/docs/webhooks-overview).

Finally, in the function `PagerDutyInbound._processData`, an import record is created for each webhook event, in the table `x_pd_integration_webhook_import`. Data saved in this table by this process, and hence a record of webhooks received, can be viewed in ServiceNow under **PagerDuty &#9658; Imports &#9658; Webhook Import Rows**.

## Translating webhook imports to ServiceNow incidents

The **PagerDuty Webhook Import** table transform map, found in the *Application Files* tab, takes records in the webhook import table and translates them to ServiceNow incident records. The PagerDuty escalation policy ID is used to identify the corresponding assignment group to which the incident should be assigned in ServiceNow; the assignment group should have its *PagerDuty Escalation* field set to the ID (which is used to identify it) of an escalation policy in PagerDuty.

In 3.5 and later, the process of finding existing records in the target table (`task`), *coalescing*, uses the PagerDuty Incident field. That is to say, it looks for an existing incident whose `x_pd_integration_incident` column matches the value of given import record's `id` column. In 3.2.1 and earlier, this was done based on the incident key field. If no existing match is found, a new incident is created within the assignment group corresponding to the escalation policy to which the incident was assigned.

Within the scope of the script, for each webhook import, the following variables dictate the actions that will be taken:

* `source`: The import record. The field `source.message_type` is of particular interest; it will be one of the [Webhook Types](https://v2.developer.pagerduty.com/docs/webhooks-overview#webhook-types).
* `action`: This will be `insert` or `update` depending on whether a new incident record is being created, or an existing incident is being updated.
* `assignOnAckOnly`: This is a boolean, determined by the setting "Only assign based on an acknowledgment from PagerDuty user": this determines whether the ServiceNow incident should be assigned based on acknowledgment from PagerDuty, or if the integration should synchronize incident assignment between ServiceNow and PagerDuty with each webhook update.
* `target`: a GlideRecord object representing the incident in ServiceNow to be created or updated

At the end of it all, the properties of the incident to be created or updated will be stored in the `target` variable, and the change will be saved after the script exits.

## Precedence and Order of Operations in Webhook Import

Throughout the webhook import process, automation and record creation in ServiceNow happens in the following order:

1. **Run the default import actions**
2. **Run dynamic field mapping rules**
3. **Run the custom script, if any**