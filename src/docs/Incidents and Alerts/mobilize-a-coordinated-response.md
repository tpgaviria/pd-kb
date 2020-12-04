---
title: "Mobilize a Coordinated Response"
slug: "mobilize-a-coordinated-response"
excerpt: "Coordinate response teams for major incidents"
hidden: false
createdAt: "2018-06-28T11:48:25.302Z"
updatedAt: "2020-09-18T23:29:07.078Z"
---
A coordinated response is a cross-functional team of incident responders whose primary goal is to efficiently restore service for those impacted. Preparing for an effective coordinated response is essential for efficient operations management, whether your organization is handling a major incident that requires multiple responders to drive fast resolution, or navigating a complex, lower-impact situation that needs input from multiple parties.

<Callout type="info" title="Info">
Many of the PagerDuty capabilities referenced in this article are only available to customers on Business, Digital Operations, and Team (legacy) plans. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with these capabilities.",
  "title": "Note
</Callout>


#Preparing for a Coordinated Response

The following steps and PagerDuty features are recommended for an effective coordinated response:

* [Identify the responders necessary for the incident](https://support.pagerduty.com/docs/mobilize-a-coordinated-response#section-identifying-necessary-responders). The scope of impact, and who is affected, will usually determine this. Most organizations have a set of response teams that are used repeatedly.
* [Establish a conference bridge](https://support.pagerduty.com/docs/mobilize-a-coordinated-response#section-establish-a-conference-bridge). This will be one or more conference bridge channels in the form of a phone number, a video call, a chat room, or a physical war room where responders will gather to collaborate. It’s important to know whether you will be reusing the same bridge/call/chat/room for all responses, or will be using a new channel for each response.
* [Add responders to the incident](https://support.pagerduty.com/docs/mobilize-a-coordinated-response#section-add-responders-to-an-incident). This involves quickly and accurately engaging responders to fill the needed roles.

##Identifying Necessary Responders

A coordinated response for a major incident will typically involve the following core roles:

* **Incident commander**: Every coordinated response benefits from someone whose entire role is driving the response team’s efforts towards successful incident resolution. In some organizations, this role is referred to as an incident manager.
* **Subject matter experts (SMEs)**: These are the responders who are knowledgeable about the systems involved in the incident, and they focus their entire effort toward resolving the underlying issue (sometimes referred to as “resolvers”) to distinguish their role from others involved in the response. There are often multiple SMEs for a given coordinated response, and it’s typical that they would be drawn from different technical teams, providing the skills and knowledge necessary for the specific incident at hand.
* **Non-resolver responders**: These are responders with a specialized function outside of the domain of the incident itself. For example, an external communications liaison, an internal communications officer, etc. The specific non-resolver responders needed depends entirely on the incident at hand. For example, an internal-facing incident has no need of an external communications liaison, while a major site degradation may require a full complement.

For more background on these and other roles, refer to PagerDuty’s [Incident Response Guide](https://response.pagerduty.com/before/different_roles/).

##Establish a Conference Bridge

For an efficient coordinated response, we recommend establishing a channel where all responders know to gather for collaboration. Some organizations have a persistent conference bridge or chat room that is reused for all major incidents, while others have multiple channels available.

There are two ways to add a conference bridge during a coordinated response:

* [Manually Add a Conference Bridge to an Incident via Add Responders](https://support.pagerduty.com/docs/conference-bridge#section-manually-add-a-conference-bridge-to-an-incident-via-add-responders)
* [Automatically Add a Conference Bridge to an Incident with a Response Play](https://support.pagerduty.com/docs/conference-bridge#section-automatically-add-a-conference-bridge-to-an-incident-with-a-response-play) 

With either method, responders will receive the corresponding notification on their mobile device. Both iOS and Android recognize common phone number formats, so responders can simply tap to dial the conference bridge from their SMS notification. If the Conference Bridge is in the form of a meeting URL, for a video conference or chat channel, this is also tappable from SMS.

##Add Responders to an Incident

Adding responders allows you to receive assistance from additional users with an incident response. Typical reasons for adding responders include SEV-1/P1 responses, critical incident responses, and mobilizing teams. 

There are two ways to add responders to incidents:

* [Add responders manually to an ongoing incident](https://support.pagerduty.com/docs/add-responders#section-manually-add-responders-to-an-ongoing-incident)
* [Add responders automatically with response plays](https://support.pagerduty.com/docs/add-responders#section-automatically-add-responders-with-response-plays)

Adding responders manually gives you the flexibility to choose the exact responders needed for a given situation. However, if you prefer to have a push-button means of mobilizing a response, adding responders with pre-formulated response plays provides this efficient option.

#Other Features That Facilitate Incident Response

Instead of adding responders for additional assistance to the incident at hand, you can also: 

* [Communicate with Stakeholders](/docs/communicating-with-stakeholders) which lets you **notify stakeholders** who aren't directly involved with resolving the incident. 
* [Escalating or Delegating an Incident](/docs/reassigning-and-delegating-incidents) which **re-assigns** the incident resolution responsibilities to another user.
[block:callout]
{
  "type": "success",
  "title": "Best Practices",
  "body": "For a detailed overview on establishing best practices, as well as more examples on how you can leverage PagerDuty’s capabilities, please refer to our [Incident Response Guide](http://response.pagerduty.com/).
</Callout>

