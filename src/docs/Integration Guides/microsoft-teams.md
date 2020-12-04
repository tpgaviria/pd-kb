---
title: "Microsoft Teams Integration Guide | PagerDuty"
slug: "microsoft-teams"
hidden: false
createdAt: "2020-01-31T20:55:35.308Z"
updatedAt: "2020-10-07T23:08:41.827Z"
---
# PagerDuty + Microsoft Teams Integration Benefits

* Reduce downtime and streamline incident remediation by adding PagerDuty’s incident management functionality to Microsoft Teams' collaboration tools.  
* Send PagerDuty incident notifications with critical details to team channel members. 
* Team channel members will be able to view and create incidents and they can acknowledge, resolve and perform other actions within Microsoft Teams.

#How it Works
* PagerDuty’s Microsoft Teams application installs into a team and can be configured for one or more of the team’s channels. 
* Within PagerDuty, services connect to team channels. When a service has an incident, the connected channel will be notified and updated on progress.  
* Additional incident details can be viewed from the Microsoft Teams notification card.
**Note**: To use the new Microsoft Teams integration capabilities, customers will need to upgrade from the legacy Microsoft Teams connector application to the new PagerDuty application.

# Requirements

**In PagerDuty**: An Admin base role is required to connect PagerDuty to Microsoft Teams. If you do not have this role, please reach out to an Admin or Account Owner within your organization to configure the integration.

**In Microsoft Teams:** A Teams administrator will need to help perform the initial one-time install of the application. Microsoft Teams administrators are not required after the initial installation. 
[block:callout]
{
  "type": "info",
  "title": "Looking For a Different Version?",
  "body": "The guide on this page is for our latest Microsoft Teams integration. Our previous [Microsoft Teams v1 integration guide](https://www.pagerduty.com/docs/guides/microsoft-teams-integration-guide/) is also available.
</Callout>


# Integration Walkthrough

## In Microsoft Teams

1. Download the **PagerDuty** application in the [Microsoft Teams Marketplace](https://teams.microsoft.com/l/app/c8c302dc-4e77-4536-890d-0c2bffbef9cc?source=store-copy-link) app store.
2. Next, click **Add to a Team** and select a **Team** or **Channel** for initial installation. **Note**: The application will be applied to all channels within the selected team. Finally, click **Set up a bot** to install the application.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ad8578-ms-teams-select-channel.png",
        "ms-teams-select-channel.png",
        1600,
        1300,
        "#fafbfa"
      ]
    }
  ]
}
[/block]
3. Next, click **Chat** in the left hand menu. You will receive a message in a private chat confirming that installation is complete. Click into the chat message and click **Authorize** to connect your team to PagerDuty. Continue with steps in the **In PagerDuty** section, below.

If you are not a PagerDuty Admin, click the **I’m not a PagerDuty Admin** button to send a message to an Admin on your PagerDuty account and see additional instructions to complete authorization. A PagerDuty Admin must follow the below steps to authorize PagerDuty to connect to Teams:

  a. Start or open a chat with the PagerDuty bot
  b. Use the `authorize [KEY]` command and paste the key provided during application installation to receive a personal authorization link.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5091dbe-ms-teams-authorize.png",
        "ms-teams-authorize.png",
        1250,
        1352,
        "#edebeb"
      ]
    }
  ]
}
[/block]
##In PagerDuty

4. A PagerDuty login page will open in a separate window. Log in with Admin or Account Owner credentials to connect PagerDuty to the previously selected team. **Note**: If you are already logged in, this step will be bypassed. You will be directed to the Microsoft Teams Add-on page in your PagerDuty account and you should see a **success message**: 

   * "You've successfully connected the `[YOUR TEAM NAME]` team to PagerDuty". 

You can now begin mapping PagerDuty Services to your Microsoft Teams channels by proceeding to step 5.

If you receive the following **error messages**, your account may not have the correct permissions to complete set up or the connection link has expired. Please ensure your PagerDuty role is an Account Owner or Global Admin, check to see if another private chat has been sent with a renewed link and retry Step 4 of **In Microsoft Teams**. 

   * "We can't connect Microsoft Teams to PagerDuty. Authorization cannot be completed at this time. You may close this window."
   * "We can't connect Microsoft Teams to PagerDuty. The authorization link has expired or is not valid. Return to Teams to generate a new one. You may close this window."

5. Expand the team that you have connected to PagerDuty. Click **Connect Notification Channel**. Select which PagerDuty service and which Microsoft Teams channel that you would like to connect to each other from the **PagerDuty Service** and **Microsoft Team Channel** dropdowns. Click **Connect** to complete the integration. 

Once the PagerDuty service is connected to a Team’s channel, incident notifications will be posted for all channel members to view.

## Linking PagerDuty and Microsoft Teams User Accounts

To perform incident actions via Microsoft Teams incident notifications, responders must link their PagerDuty and Microsoft Teams user accounts. 

6. To receive a personal account mapping link, users can follow the below options: 

   a. **Via Channel Message**: Use the **Link Accounts** button to receive a personal account mapping link. 

**Posted in General channel after Microsoft Team connection**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3494c4f-ms-teams-link-accounts-connected.png",
        "ms-teams-link-accounts-connected.png",
        1058,
        580,
        "#f2f2f1"
      ]
    }
  ]
}
[/block]
**Posted in a channel after a PagerDuty service is connected**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/13ba3cc-ms-teams-link-account-service-connection.png",
        "ms-teams-link-account-service-connection.png",
        950,
        534,
        "#f0f1ef"
      ]
    }
  ]
}
[/block]
   b. **Via App Command**: Use app command `linkUser` in a private PagerDuty bot chat to receive a personal account mapping link. 


7. A PagerDuty login page will open in a separate window. Log in with PagerDuty credentials to link PagerDuty and Microsoft Teams user accounts. **Note**: If you have already logged in, this step will be bypassed. You will be directed to the Microsoft Teams Add-on page in your PagerDuty account and you should see a **success message**:

* “You've successfully linked your user accounts. All PagerDuty actions you perform as `[MS-TEAMS-NAME]` in Microsoft Teams will be associated with `[PAGERDUTY-NAME]` (`PAGERDUTY-EMAIL`) in PagerDuty. If this is not correct, please enter the @PagerDuty unlinkUser command in Microsoft Teams to unlink your account.”

If you receive an error, please verify the PagerDuty credentials are correct and the user account is provisioned under the correct PagerDuty account/subdomain. To find which PagerDuty Account/subdomain is connected to Teams, use the `open` app command in any channel. The Organizations PagerDuty account will open in a browser. 

## App Commands

The PagerDuty application allows users to interact with the applications bot via app commands. In any of your team channels, you may enter `@Pagerduty[COMMAND]` replacing `[COMMAND]` with any of the following:

* `help`: View the list of available commands.
* `open`: Open PagerDuty in a new browser window.
* `linkUser`: Link your PagerDuty and Teams user accounts.
* `unlinkUser`: Unlink your PagerDuty and Teams user accounts.
* `trigger`: In a Channel, complete form to create a new incident.
**PagerDuty Admins and Managers**:
* `connect [SERVICE-URL]`: In a channel, use the PagerDuty service page URL to connect a PagerDuty service to a channel.
**PagerDuty Admins**:
* `authorize [KEY]`: In a private PagerDuty bot message, use the unique key provided to authorize PagerDuty to connect to a team.
* `configure`: Open PagerDuty’s app configuration page in browser.

## Incident Actions
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4635e32-ms-teams-incident-actions.png",
        "ms-teams-incident-actions.png",
        298,
        371,
        "#f4eeef"
      ]
    }
  ]
}
[/block]
After an incident notification has been posted in a channel, channel members can **Acknowledge**, **Resolve**, and **Add note** to an incident. All incident actions performed in Microsoft Teams will update the incident in PagerDuty. To perform an incident action in Microsoft Teams, a user’s PagerDuty and Microsoft Teams account must be linked. If their account is not linked, they will receive a private bot message with a personal link to complete the process. 

# FAQ

## How do I remove the PagerDuty service from my team channel connection?

A PagerDuty Admin or Account Owner can remove a service to channel connection via PagerDuty’s Microsoft Teams extension page. 

1. Navigate to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions** :fa-arrow-right: **Microsoft Teams Integration** tile.
2. Next, click the **down arrow** next to **Notification Channels** and then click the **Remove** button next to the service to channel connection to delete.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fef7502-ms-teams-remove-channel.png",
        "ms-teams-remove-channel.png",
        2258,
        966,
        "#f5f6f6"
      ]
    }
  ]
}
[/block]
## How do I disconnect the PagerDuty app from a team? 

A PagerDuty Admin or Account Owner can disconnect via PagerDuty’s Microsoft Teams extension page. Disconnecting or un-authorizing a team removes the link between Microsoft Teams and PagerDuty. By performing a disconnect, all channel to service connections will be deleted and user account mappings will be removed. 

1. Navigate to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions** :fa-arrow-right: **Microsoft Teams Integration** tile. 
2. Click the **Disconnect** button located next to the team name to initiate disconnect. 
3. A pop-up message will appear that will require the Admin to input `disconnect` in the text field. 
4. Click **I understand my actions, Disconnect PagerDuty from Microsoft Teams** to complete disconnection.

If you choose to reauthorize an application, users will need to reinstall the application into a team.