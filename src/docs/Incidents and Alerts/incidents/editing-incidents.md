---
title: "Editing Incidents"
slug: "editing-incidents"
excerpt: "Merge, snooze and add notes to incidents"
hidden: false
createdAt: "2017-06-14T21:22:56.457Z"
updatedAt: "2020-11-03T23:40:56.687Z"
---
## Merging Incidents

Merging related incidents into one incident streamlines the notification and resolution process when an incident is triggered. Merging incidents also enables you to consolidate the alert information into a single incident, helping responders identify the root cause and impact. 

##How to merge incidents

If there are two or more triggered incidents on the incident dashboard, you can merge them into a single incident. When you merge them, they will appear as a single incident with multiple alerts.

1. On the **Incidents** page, use the checkboxes to select the incidents.
2. Next, select **Merge Incidents**.
3. In the popup, you can choose which incident you would like all of the alerts to be grouped under. When merging, you also have the ability to update the incident summary to more accurately reflect the problem. 
4. The incident dashboard will show a single incident. When you click to open the Incident and view its details, the alerts that you merged will be listed as the incident details.

You can also merge incidents on the incident details page by clicking the **More Actions** button and selecting **Merge with Another Incident**. Then enter the **incident number** to merge into.

To view more granular details about what was sent you can also navigate to Show or Hide Details.

![](https://files.readme.io/98401a7-incidents-merge-incident-show-details.png)

##What happens when incidents are merged

When merging multiple incidents together, alerts will be consolidated into the selected incident. The other selected incidents will be resolved, with the reason for the resolution listed as "merged". These incidents will reference the target incident that you selected in the merge dialog.

![](https://files.readme.io/dbb9a5c-editing-incidents-merged-resolved-incidents.png)

The deduplication key, called the alert_key, will not be changed, but it will move so that it is under a single incident with other deduplication keys.

If you are using a bidirectional integration such as the Slack integration, the merged incidents will display as resolved and reference the new target incident that contains all of the alerts.

![](https://files.readme.io/1f3eb3e-editing-incidents-slack-merged-incidents.png)

When you merge the incidents, acknowledgers, assignees and responders from the source incidents are not merged. Instead, the target incident’s assigner, responder, and acknowledgers are preserved and they become the user(s) assigned to all alerts under that incident. These users may be viewed under the Timeline tab on the incident's page.

##Moving alerts to another incident

If an alert is incorrectly merged, open up the Alert details page and select **Move to Another Incident** in the upper right-hand corner. A dialog box will prompt you to move the alert to its own new Incident, or you can optionally move the alert to an existing incident in PagerDuty:

![](https://files.readme.io/11a4ff8-editing-incidents-move-alert-to-another-incident.png)

##Merged incidents and webhooks

If you are using webhooks, merging alerts into a single incident will send a resolve action through the webhooks for the source incidents with a resolve_reason of “merged.”

Webhooks will continue to update the target incident, but all past incidents that were merged into the target incident will be updated as resolved.

Likewise webhook updates will only continue to be sent for the service for that target incident; all past resolved incidents will remain resolved for other services. For example, if an incident from service A is merged into an incident for service B, only webhooks on service B will continue to be sent.

For incidents that were resolved when merged into the target incidents, the resolve webhook will trigger, if there are any that are configured. These incidents will contain reference to the new target incident ID: in the API response, the field will be merged_into_incident.
## Snooze an Incident

Snooze allows users to keep an incident in an "acknowledged" state for the following intervals of time: 1 hour, 4 hours, 8 hours, 24 hours or Other. If you choose "Other", the maximum length you can snooze an incident is one week (168 hours). As an incident responder, this means I can snooze an incident while I troubleshoot the problem — or go back to bed and avoid being woken up again by an issue that can wait until later!

##How do I snooze an incident?

You're only able to snooze acknowledged incidents. You can acknowledge an incident from either the web or mobile application. The following example outlines snoozing an incident in the web UI:

1. **Acknowledge** the incident.
2. The Acknowledge button will be replaced with a **Snooze** button. Select **Snooze** and the length of time the incident should be snoozed.

![](https://files.readme.io/d9ea5d1-editing-incidents-snooze-incident.png)


[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If the [Add Responders](https://support.pagerduty.com/v1/docs/mobilizing-a-response#section-add-responders-to-an-incident) button has been used in an incident and an escalation policy was selected, snoozing will not prevent this escalation policy from escalating."
}
[/block]
The incident log will capture all snooze actions taken on an incident. If **Other** is selected, you will have the option to select a custom snooze time, snooze until a time tomorrow, or base your snooze on [support hours](/docs/service-settings#section-enable-urgencies) for that service.

![](https://files.readme.io/0b47498-editing-incidents-snooze-options.png)

If a user does not resolve the incident within the snooze timeframe, the incident will return to a triggered state and will begin notifying the user again following their notification rules. If a different user is on call in the escalation policy when the incident retriggers, that user will also be notified.

##What happens if I reassign a snoozed incident?
Reassigning a "snoozed" incident will cancel the snooze timer. The timeout setting will reset to the default timeout setting which is configured within the service from which the incident originated. 

##What happens if another user acknowledges the incident after I snooze the incident? 
If another user acknowledges the incident we will un-snooze the incident, and the un-acknowledgement timer will start again.

##Does the Snooze feature override the auto-resolution timeout on the Service?
Yes. It also restarts the timeout counter once the incident returns to an acknowledged or triggered state. 

# Edit Incident Title

To edit an incident's title, click the current **Title** of the incident to view the details page and then click **Edit** to the right of the title. Enter your new Title and then click **Save**.
## Edit Incident Urgency

If an incident's [urgency](https://support.pagerduty.com/docs/service-settings) has been reassessed, responders can edit an incident's urgency in the web app. 

To edit incident urgency in the web app:

1. Click the incident's **title** to view the incident details screen. 
2. Next to **Urgency**, select your preferred urgency from the dropdown. 

![](https://files.readme.io/a4f2900-editing-incidents-edit-incident-urgency.png)

3. The incident's urgency will automatically update and you will see a green confirmation banner. 
## Edit Incident Duration


[block:callout]
{
  "type": "info",
  "body": "You cannot edit the duration of an incident until it has been resolved.",
  "title": "Note"
}
[/block]
PagerDuty tracks incident duration (how long an incident was open) in order to calculate metrics such as **Response Effort** and **MTTR** (Mean Time To Resolve).

Sometimes the actual effort you spent on an incident may be different from the amount of time it was open. In order to prevent skewing your metrics, you can set the actual response effort that was required to resolve an incident.

To edit the incident duration of a resolved incident:

1. Click the :fa-pencil: under **Duration** at the top right of the incident details page. 

![](https://files.readme.io/9610ae8-edit-incident-duration.png)

2. In the modal that pops up, enter in the **Actual effort** time that was required to resolve the incident in the following format: `xd xh xm`.
3. Click **Update Incident**.

![](https://files.readme.io/b021bab-edit-incident-duration-actual-effort.png)


## Add a Note to an Incident

Notes can be used to help responders resolve incidents quicker by including information or links related to the system that the event comes from.

You may want to add a note to an incident for other users to refer to. You can add this to an open or resolved incident.

##In Web UI

1. On the **Incidents** page, click on the **Title** of an incident to open up the incident details.
2. In the right hand section under **Notes**, enter your note and click **+ Add Note**.

![](https://files.readme.io/8479b91-editing-incidents-add-note.png)

##In Mobile App

1. Open the mobile app. Open the menu and tap either **Open Incidents** or **Resolved Incidents**
2. Tap on the incident you would like to add a note to to open its details.
3. On iOS, tap the More button at the bottom of the screen. On Android, tap the menu icon in the top right corner.
4. Tap **Add Note**.

![](https://files.readme.io/792385e-editing-incidents-add-note-mobile.png)

5. Enter your note and tap **Done** on iOS or **Add** on Android.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Incident notes are limited to 65535 characters."
}
[/block]
##Via Event Rules

Notes via Event Rules functionality is part of our [Event Intelligence product,](https://support.pagerduty.com/v1/docs/event-intelligence) which is purchased separately from the core PagerDuty platform.

Notes are added to incidents via the [Global Event Rules Engine](https://support.pagerduty.com/v1/docs/global-event-routing) workflows. Users first set specific criteria in which notes information will be added. Users can then detail which information or links they want to include in the note.

![](https://files.readme.io/dcb0b73-editing-incidents-add-context-response-play.png)

If the event is added to an incident, notes can be seen on that incident's details page. Notes added by event rules will list the first account user as the author.

# Technical Service Dependencies for Triage

[Service Dependency](https://support.pagerduty.com/docs/service-profile#service-dependencies) data equips triaging responders with a broader understanding of the environment surrounding their incident, allowing them to identify the root cause. When a service is experiencing an incident, and that service has Dependencies defined, relevant data about the Service Dependencies will be available on the incident details page. If the service does not yet have Dependencies defined, or is missing possible Dependencies, responders will be able to view suggested Dependencies, and easily add them from the incident details page. 

## View Technical Service Dependencies in an Incident

To view the impacted service’s Technical Service Dependencies, click the **Title** of the incident to view the incident details page. You will see the **Technical Service Dependencies** section on the right, below Notes.

![](https://files.readme.io/0b1411a-technical-service-dependencies-incident.png)

Each Dependency will have the following overview details:

* **Service Name**
* **Status**: **Open incident(s)** or **Operational** (no open incidents).

If you click the Dependency’s **Service Name** you will be able to see more granular details:

* **On-Call Now**: Responder(s) currently on call for the service.
* **Open incident(s)**: A list of current open incident(s) on the service.

## Suggested Technical Service Dependencies in an Incident

If incidents on your service tend to be followed by incidents on another service, or vice versa, Suggested Technical Service Dependencies will also be provided. If you have Suggested Technical Service Dependencies, they will be listed under a **Suggested** header with a :fa-bolt: next to the service name:

![](https://files.readme.io/6c148c7-technical-service-dependencies-suggested.png)

**To add the Suggested Technical Service Dependency**, click the **service name** and click **Add** next to **Add this service as a dependency?**.

![](https://files.readme.io/f1bf34f-technical-service-dependencies-add-suggested.png)

## Add Technical Service Dependencies From an Incident

1. Click the **Title** of the incident to view the incident details page. You will see the **Technical Service Dependencies** section on the right, below Notes.
2. Click **+ Add Service Dependency**.
3. You will be directed to the [Service Dependencies](https://support.pagerduty.com/docs/service-profile#service-dependencies) page of that service. There are two sections to this page: Add services that this service **uses** or add ones that this service is **used by**. Click **Edit Services** to add to your desired use case. 
4. On the Edit Services screen, you may search by service name, or select one from the **Business Services** or **Technical Services** tabs. Click the :fa-plus: button to add your preferred service(s); you may add multiple Business and Technical services. *Optional*: You may also create a new Business or Technical service from this screen by clicking **Create a New Business Service** or **Create a New Technical Service** from each of their corresponding tabs. This will open the [Business Service](https://support.pagerduty.com/docs/business-services#create-a-business-service) or [Technical Service](https://support.pagerduty.com/docs/services-and-integrations#create-a-new-service) configuration screen in a new tab.
5. Click **Save Changes**.