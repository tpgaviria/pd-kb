---
title: "Microsoft Teams Meeting Integration"
slug: "microsoft-teams-meeting-integration"
hidden: true
createdAt: "2020-09-21T16:32:44.524Z"
updatedAt: "2020-10-09T23:36:12.387Z"
---
[block:callout]
{
  "type": "info",
  "title": "Early Access",
  "body": "The Microsoft Teams Meeting integration is currently in Early Access with features and documentation subject to change.
</Callout>


### Create a Meeting Conference Bridge From Microsoft Teams

Users can create Microsoft Teams Meetings that will be assigned as incident-specific [Conference Bridges](https://support.pagerduty.com/docs/conference-bridge) in PagerDuty incidents. Users may also add notes from the Microsoft Teams Meeting chat, which will sync with the PagerDuty incident. 

To create a Microsoft Teams Meeting Conference Bridge:

1. After an incident notification has been posted in a Microsoft Teams channel, click **Create Meeting** from the incident actions:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81678ff-ms-teams-create-meeting.png",
        "ms-teams-create-meeting.png",
        621,
        371,
        "#f7f3f3"
      ]
    }
  ]
}
[/block]
2. You will see the confirmation message `All current responders with linked PagerDuty accounts will be added automatically`, click **Create Meeting** again.
3. You will now see the meeting link populated in the incident notification, and on the PagerDuty incident as the Conference Bridge and as a Note:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1eba5f3-ms-teams-conference-link-incident.png",
        "ms-teams-conference-link-incident.png",
        552,
        430,
        "#fafbfc"
      ]
    }
  ]
}
[/block]
### Join and Use a Microsoft Teams Meeting Conference Bridge

1. To join a Microsoft Teams Meeting Conference Bridge, click **Join the Meeting** on the incident notification:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/595fdba-ms-teams-join-meeting.png",
        "ms-teams-join-meeting.png",
        610,
        268,
        "#f5efec"
      ]
    }
  ]
}
[/block]
2. All comments made in the meeting chat (found by clicking the **Show Conversation** :fa-comment-alt: at the top of the screen) will sync with the Chat in the Microsoft Teams console, so you can request help from team members not currently in the Meeting. 
3. Adding the PagerDuty app to the Meeting allows users to perform incident actions from the Meeting. If you would like to add the PagerDuty App, click **Chat** in the Microsoft Teams console and find the chat from the Meeting. Click the :fa-video: icon and a modal will appear prompting you to Add a tab. Search for PagerDuty, **click the app** to select it and click **Save**. You will now see the incident actions available in the Meeting chat:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f50b134-ms-teams-incident-actions-meeting.png",
        "ms-teams-incident-actions-meeting.png",
        376,
        558,
        "#343032"
      ]
    }
  ]
}
[/block]