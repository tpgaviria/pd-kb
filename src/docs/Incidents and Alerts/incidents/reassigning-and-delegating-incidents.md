---
title: "Reassigning and Delegating Incidents"
slug: "reassigning-and-delegating-incidents"
excerpt: "Reassign an incident to another user on an escalation policy, or to a specific user"
hidden: false
createdAt: "2018-06-06T19:57:56.728Z"
updatedAt: "2020-10-08T23:28:01.987Z"
---
Escalating an incident to the next user on-call from your phone will immediately reassign the incident to that user.  The original on-call user will no longer receive notifications.

##Escalate an Incident via SMS

Escalating via SMS assigns an incident to the next user on-call in the escalation policy. You can only escalate to the next on-call user in the escalation policy (see example below). To escalate to a different user, you must reassign the incident from the PagerDuty mobile app or site.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4318f6c-0f029f6-IMG_2434.png",
        "0f029f6-IMG_2434.png",
        750,
        530,
        "#e5e7e6"
      ]
    }
  ]
}
[/block]


<Callout type="info" title="Info">
The response numbers to acknowledge, resolve and escalate incidents via SMS will change depending on the number of incidents on your account and notifications sent to you already. Check the SMS for the correct response numbers for your incidents, as it is not safe to assume that the response number used in the example screen shot will be valid for your incidents.
</Callout>


##Reassign an Incident from PagerDuty

When reassigning an incident from the PagerDuty mobile app or site, you can escalate to either the next user on call, anyone within the escalation policy, or any user in your account. When you reassign the incident to an on-call user (any user in the escalation policy), the incident will continue to follow the escalation policy. However, if you assign the incident to a user listed under the Other user (all users in your account) section, the escalation will halt.

###To reassign an incident in the mobile app
1. Go to the incident you want to reassign.
2. Tap **More** on the bottom right (iOS) or tap the  action menu on the top right (Android).
3. Tap **Reassign**.
4. Tap on the **user**, **escalation level**, or **escalation policy** you want to reassign the incident to.
5. Tap **Reassign** to confirm.

###To reassign an incident in the web app
1. Go to the **Incidents** page.
2. Select the checkboxes for the incidents you want to reassign and click **Reassign**, or click on an incident number to go to that incident's detail page and click **Reassign**.
3. Select the desired **user**, **escalation policy**, or **escalation level** from the drop-down list.
4. Click **Reassign**.

##Delegating an Incident
You can "delegate" an incident to another team by assigning the incident to an escalation policy. A benefit to delegating an incident, rather than re-assigning it (which halts the current escalation process), is it will continue to follow the target escalation policy's escalation rules.

1. Go to the **Incidents** page.
2. Click on the incident that you would like to re-assign.
3. Click **Reassign**.
4. Select the **escalation policy** that you want to delegate the incident to.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/91cf514-Screen_Shot_2018-06-06_at_4.00.27_PM.png",
        "Screen Shot 2018-06-06 at 4.00.27 PM.png",
        1288,
        572,
        "#c2c4c6"
      ]
    }
  ]
}
[/block]
5. Click **Reassign**.

##Delegating Multiple Incidents
1. Go to the **Incidents** page.
2. Select the checkbox for each incident you want to delegate.
3. Click **Reassign**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f5246bb-reassigning-delegating-reassign-multiple.png",
        "reassigning-delegating-reassign-multiple.png",
        1128,
        632,
        "#f5f3f5"
      ]
    }
  ]
}
[/block]
4. Select the **escalation policy** that you want to delegate the incident to from the drop-down list.
5. Click **Reassign**.

# Other Features to Facilitate Incident Response

Instead of reassigning or deleting incidents, you can: 

* [Add Responders](/docs/mobilizing-a-response) which enables you to receive **assistance from additional users** with an incident response. 
* [Communicate with Stakeholders](/docs/communicating-with-stakeholders) which lets you **notify stakeholders** who aren't directly involved with resolving the incident.