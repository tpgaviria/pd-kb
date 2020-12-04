---
title: "Slack Integration Guide | PagerDuty"
slug: "slack-integration-guide"
hidden: false
createdAt: "2019-04-22T22:40:49.924Z"
updatedAt: "2020-11-23T23:46:16.019Z"
---
#Slack + PagerDuty Integration Benefits

* The new Slack integration, like the [V1 integration](https://www.pagerduty.com/docs/guides/slack-v1-integration-guide/), allows you to acknowledge and resolve PagerDuty incidents from the Slack user interface. 
* This update includes new incident response capabilities: [trigger](https://support.pagerduty.com/docs/incidents#section-triggering-an-incident-with-web-ui-email-or-api) and [escalate](https://support.pagerduty.com/docs/reassigning-and-delegating-incidents#section-reassign-or-delegate-an-incident) incidents and run [response plays](https://support.pagerduty.com/docs/response-automation) from Slack. Additionally, users will now be able to create on-demand Slack channels from PagerDuty incidents.
* The new Slack integration also has improvements such as an updated notification design with more context from monitoring tools, and actions that respect PagerDuty [user permissions](https://support.pagerduty.com/docs/user-roles).
 
#How it Works
 
* Users can trigger, acknowledge, resolve, escalate, add notes and run response plays within Slack, which will send events to PagerDuty, resulting in the corresponding incident actions. 
* When a PagerDuty incident is triggered outside of Slack, an event is sent to the mapped Slack workspace, which generates a message with the incident's details in the designated channel. Users can then perform actions (listed above) within Slack, or within PagerDuty, and the actions will be synced bi-directionally. 
 
#Requirements
**In PagerDuty**: 
* **Initial Configuration**: This integration requires an Admin, Global Admin or Account Owner base role to perform the [initial configuration](https://support.pagerduty.com/docs/slack-integration-guide#section-initial-configuration). This includes mapping your PagerDuty account to your Slack workspace. 
* **Service-Level Configuration**: Once your PagerDuty account has been mapped to your Slack workspace (see above) users with a Manager team role or base role can [add the Slack extension to services](https://support.pagerduty.com/docs/slack-integration-guide#section-add-the-slack-extension-to-a-service).
* **Using the Integration**: In order to use the [Slack slash command](https://support.pagerduty.com/docs/slack-integration-guide#available-slash-commands) `/pd trigger` to trigger a PagerDuty incident, you must have a PagerDuty user license. I.e., all Slack users who have mapped their Slack and PagerDuty accounts can trigger incidents from the Slack interface. Other actions, such as acknowledging, resolving, viewing incident details, adding a note, escalating or running a Response Play follow the PagerDuty [user permissions](https://support.pagerduty.com/docs/user-roles) for each action.
* If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

**In Slack**: You need to be a workspace admin or owner. 
[block:callout]
{
  "type": "info",
  "title": "Looking for Another Version?",
  "body": "The [Slack V1 integration guide](https://www.pagerduty.com/docs/guides/slack-v1-integration-guide/) is also available."
}
[/block]
#Integration Walkthrough
##Initial Configuration
To begin the integration, you will need to map your PagerDuty account to your Slack Workspace. If this has already been performed, please skip ahead to the [Add the Slack Extension to a Service](https://support.pagerduty.com/docs/slack-integration-guide#section-add-the-slack-extension-to-a-service) section.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "* Multiple Slack workspaces can be mapped to a single PagerDuty account by repeating the below steps for each workspace.\n* At this time, mapping multiple PagerDuty accounts to a single Slack workspace is not supported."
}
[/block]
1. Navigate to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions**.
2. Select **Slack**.
3. On the Slack Workspace Mapping screen, click the **Install App into Workspace** button to connect your PagerDuty account to your Slack workspace. Connecting your PagerDuty account to your Slack workspace ensures that the PagerDuty bot is present and that PagerDuty slash commands can be executed from any Slack channel.
4. On the next screen, you will be asked to authorize the PagerDuty for Slack extension to perform the following actions:

* **Confirm your identity on PagerDuty**
* **Access and modify information about your channels**: In order to send prompts to Slack users to associate their Slack and PagerDuty usernames, the extension needs to obtain user IDs from the associated channel. The modify channels access is only used for the per-incident, on-demand Slack channel feature.
* **Add slash commands and add actions to messages (and view related content)**
* **Access information about your workspace**: This allows the extension to access your team’s profile information and it is used for Slack user association. The list of members from the channel endpoint only gives PagerDuty your Slack ID and this allows it to obtain necessary usernames.
* **Send messages as [Workspace Name] for Slack**: This allows the extension to post to specific channels in your Slack workspace.
* **Access your workspace’s profile information**: Similar to the above, this allows the extension to access your team’s profile information and it is used for Slack user association. The list of members from the channel endpoint only gives PagerDuty your Slack ID and this allows it to obtain necessary usernames.
* **Send messages as you**: This is used to post notifications into the selected channel when a PagerDuty incident has been triggered, updated or resolved.

Click **Allow** to authorize. Once this step is complete, you can then begin connecting PagerDuty services to a specific Slack channel. Continue to [Add the Slack Extension to a Service](https://support.pagerduty.com/docs/slack-integration-guide#section-add-the-slack-extension-to-a-service) to complete the integration. 

##Add the Slack Extension to a Service

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: **Integrations** tab :fa-arrow-right: **Add or Manage Extensions** :fa-arrow-right: **+ New Extension**.
2. Select **Slack V2** from the dropdown menu and enter a friendly **Name** for the integration, such as `SlackV2-Service-Name` (e.g. If your service name is Shopping Cart, the extension name would be `SlackV2-Shopping-Cart`). Next, select the **Service** that you would like to integrate with the Slack extension. In the **Details** section, you can select which updates you want sent to Slack: **Escalate**, **Resolves**, **Acknowledgements**, **Reassign** and **Notes** actions. Click **Authorize** to continue.
3. On the authorization screen, ensure that you are in the correct Slack **workspace** by checking the dropdown in the upper right hand corner. Please note that if you plan to use Slack V1 and V2 at the same time, you will need to integrate Slack V2 into the same workspace. Next, in the **Choose a channel...** dropdown, search and select the channel where you would like PagerDuty to send messages. This authorization screen has many of the same permissions listed above in step 4, with the following differences:

   * **Access information about your direct messages**: In order to send prompts to Slack users to associate their Slack and PagerDuty usernames, the extension needs to obtain user IDs from multi-party direct messages (i.e., private messages to a specific group of users).
   * **View email addresses of people on your workspace**: This allows the extension to access your team’s profile information and it is used for Slack user association. 

Once you have reviewed these permissions, click **Authorize**. You may add the Slack extension to multiple services by repeating steps 5-7.

![](https://files.readme.io/9acbeac-slack-ig-service-authorization-screen.png)

4. The Slack integration is now complete. You should see a message in your designated Slack channel that the PagerDuty integration has been added. If you set up the integration on a private channel, add **@pagerduty** to your channel. 
5. When an incident is triggered, the trigger message in Slack will show **Acknowledge** and **Resolve** buttons, and under the **More actions…** menu, you will see the options **View Details**, **Add a Note**, **Escalate** or **Run a Play**. 

![](https://files.readme.io/875352b-slack-ig-incident-message.png)

#Available Slash Commands
Once the updated integration has been installed, new slash commands will be available. These slash commands can be run from Slack channels that are configured with PagerDuty:

* `/pd help`: Displays a help message with a list of these available slash commands.
* `/pd trigger`: Trigger a new PagerDuty incident within the Slack interface.
* `/pd unlink`: Unlink your current Slack user from your PagerDuty user.
* `/pd invite @ [Slack User Name]`: Invites the specified Slack user as a responder to your PagerDuty account.
* `/pd oncall`: View who is on call for a PagerDuty service.
[block:callout]
{
  "type": "warning",
  "body": "`/pd oncall` requires channel-specific permissions. You must invite `@PagerDuty` to private Slack channels in order to use this Slack Slash Command.\n\nIt is not possible to use this command in other direct messages outside of a direct message with `@PagerDuty`.",
  "title": "Required Permissions"
}
[/block]
#Creating On-Demand Slack Channels
With the updated Slack integration, PagerDuty users can create on-demand Slack channels within PagerDuty. These can be created on the Incident Details screen in the web application by clicking **Set Channel**. You will have the ability to create new public or private channels or associate an existing channel to an incident. 
[block:callout]
{
  "type": "warning",
  "title": "User Permission Notes",
  "body": "* When you click **Set Channel** you may be prompted to authorize the connection between your PagerDuty and Slack accounts again, as PagerDuty will now be creating a channel behalf of your individual Slack user account.\n* You will only be able to view channels that you have permission in Slack to access. \n* If you do not have permission in Slack to create channels, you will not be able to create them from the **Set Channel** link in a PagerDuty incident. \n* If your PagerDuty account has multiple Slack workspaces connected, you will have the option to pick which workspace to use."
}
[/block]
If you would like to use this feature and don’t see it in your PagerDuty account, please [reach out to our Support team](https://www.pagerduty.com/contact-us/). 

![](https://files.readme.io/3cc8387-add_slack_channel.png)

# Create an Incident Trigger Slack Workflow

[Slack workflows](https://slack.com/help/articles/360053571454-Set-up-a-workflow-in-Slack) can be used to trigger PagerDuty incidents from Slack with pre-configured details such as service and priority.

1. In your Slack desktop, click your **workspace name dropdown** in the top left and select **Tools** :fa-arrow-right: **Workflow Builder**. Click **Create** on the right, enter a **workflow name**, such as `Trigger PD incident`, and click **Next**. 
2. Click **Select** next to **Shortcut**, select your preferred channel under **Which channel?**, enter a name under **Add a short name**, such as `Trigger PD incident`, and then click **Next**.
3. Next, to create a form for users to enter incident Titles and Descriptions, click **Add Step** and then click **Add** next to **Create a form**. Enter a **Title** for the form, such as `Trigger PD incident`, enter `Title` under **Add a question**, select **Short answer** and ensure **Make this required** is checked. Next, click **Add Question** and enter `Description` under **Add a question**, select **Short answer**, ensure **Make this required** is checked and click **Done**. Uncheck **Send submitted responses to a channel or to someone in a DM** and then click **Save** to save both forms.
4. Next, click **Add Step**, select the **Steps from Apps** tab, search and then select **Trigger Incident**. You will be prompted to sign into your PagerDuty account, click **Sign in**. Once signed in, the Trigger Incident Step will be added to your Slack workflow. Select your preferred **Impacted service**, *optionally* select the **Assign to** user and *optionally* select your preferred **Priority**. Next, under **Title** click **Insert a variable** and select **Response to: “Title”** to add the Title form. Similarly, under **Description**, click **Insert a variable** and select **Response to: “Description”** and then click **Save**. If you would like to add an *optional* message to be sent with this workflow, continue to step 5. If you do not want to add a message, skip to step 6. 
5. **Send a Message With Workflow** *(Optional)*: Click **Add Step** and click **Add** next to **Send a message**. Under **Send this message to:** select **Channel where workflow started**. Under **Message text** enter your preferred message to be sent with the workflow. You have the option to include variables such as **Impacted technical service**, **Incident number**, **Incident title** and **Incident url** by clicking **Insert a variable** under the message form. Click **Save**.
6. Finally, click **Publish** in the upper right to publish your workflow. 

## Use an Incident Trigger Slack Workflow

1. In your Slack desktop, enter a channel with an Incident Trigger Slack Workflow configured and click the **Shortcuts** :fa-bolt: at the bottom left of your text field and select the `Trigger PD incident` workflow. 
2. Enter the **Title** and **Description** of the incident and click **Submit**.
3. The incident will be created in PagerDuty and you will be able to see the incident details in your Slack channel.

# Granular Bot Permissions

Slack now uses granular bot permissions, as detailed in the [Bot Token Scopes table](https://support.pagerduty.com/docs/slack-integration-guide#bot-token-scopes). All channel connections will be affected by granular bot permissions, but new connections will closely follow Slack workspace security settings. Creating channel connections could require users to have additional Slack permissions or Admin authorization, as detailed in the **Approve App Update** section below.

## Approve App Update

There are two Slack settings that may impact the app update:

* App Updates require a Slack Admin approval.
* Only Slack Admins or Slack app Managers can create PagerDuty service to Slack channel connections. 

If a user does not have the correct Slack user permissions, then a notification will be sent to Slack admin to approve connection. If a Slack Admin does not approve the new changes, users will not be able to create new Slack channel and PagerDuty service connections. If your Slack account has not restricted these settings, no action is necessary. 

To approve the app update as a Slack Admin:

1. Navigate to the Slack Admin portal and search for the PagerDuty app.
2. At the top right of the page, click **Approve** next to **Manage app for entire workspace?** and approve PagerDuty app changes.

## Bot Token Scopes
[block:parameters]
{
  "data": {
    "h-0": "OAuth Scope",
    "h-1": "Slack Description",
    "h-2": "PagerDuty Request Reason",
    "0-0": "`app_mentions:read`",
    "1-0": "`channels:join`",
    "2-0": "`channels:manage`",
    "3-0": "`channels:read`",
    "4-0": "`chat:write`",
    "5-0": "`chat:write.public`",
    "6-0": "`commands`",
    "7-0": "`groups:read`",
    "8-0": "`groups:write`",
    "9-0": "`im:read`",
    "10-0": "`im:write`",
    "11-0": "`incoming-webhook`",
    "0-1": "View messages that directly mention `@pagerduty` in conversations that the app is in.",
    "1-1": "Join public channels in a workspace.",
    "2-1": "Manage public channels that PagerDuty has been added to and create new ones.",
    "3-1": "View basic information about public channels in a workspace.",
    "4-1": "Send messages as `@pagerduty`.",
    "5-1": "Send messages to channels `@pagerduty` isn't a member of.",
    "6-1": "Add shortcuts and/or slash commands that people can use.",
    "7-1": "View basic information about private channels that PagerDuty has been added to.",
    "8-1": "Manage private channels that PagerDuty has been added to and create new ones",
    "9-1": "View basic information about direct messages that PagerDuty has been added to.",
    "10-1": "Start direct messages with people.",
    "11-1": "Post messages to specific channels in Slack.",
    "0-2": "Used for interactions with PagerDuty bot and responding to commands.",
    "1-2": "After a public channel has been created, we will use this scope to join the channel.",
    "2-2": "This will allow us to create public channels.",
    "3-2": "Getting user IDs from a channel in order to prompt those users about associating their PagerDuty user to their Slack username.",
    "4-2": "Used to post incident notifications to channels in Slack.",
    "5-2": "Used to post incident notifications to channels in Slack.",
    "6-2": "Used for interactions with the PagerDuty bot and responding to commands.",
    "7-2": "Access information about a user’s private channels: Getting user IDs from a private channel in order to prompt those users about associating their PagerDuty user to their slack username.",
    "8-2": "This will allow us to create a private channel for PagerDuty incident.",
    "9-2": "Getting user IDs from a multi-party direct message (private messages to a specific group users) in order to prompt those users about associating their PagerDuty user to their Slack username.",
    "10-2": "Replying to a multi-party direct message about associating their PagerDuty user to their Slack username.",
    "11-2": "PagerDuty communicates with Slack via webhooks to notify users of a new incident in PagerDuty. Used to post to channels in slack."
  },
  "cols": 3,
  "rows": 12
}
[/block]
# FAQ

##If I already have the Slack V1 extension installed, can I update to V2?
You will need to add Slack V2 as a new extension, and once you're finished testing, delete the Slack V1 extension. You'll then need to complete the Workspace mapping step (Step 3 of [Initial Configuration](https://support.pagerduty.com/docs/slack-integration-guide#section-initial-configuration), above) to connect your Slack Workspace to PagerDuty. 

##How do I know if I’m using V1 or V2 integration when looking at the Slack notification?
If the notification in Slack contains "More Actions" menu, you are using the updated V2 integration.

##If I don’t connect my PagerDuty and Slack accounts, can I still action notifications in Slack?
No. The Slack V2 integration, unlike V1, requires you to connect so that it can respect PagerDuty [user permissions](https://support.pagerduty.com/docs/user-roles).

##I changed my channel from public to private, and now my incidents aren't posting to Slack. 
You'll need to invite the PagerDuty bot into your Slack channel after you set it to private.

##Do I need to install anything separate to use the slash command?
No. In the V2 integration, this is no longer a separate app. You do need to ensure that you map the Slack extension and your Slack workspace to PagerDuty (step 4 of the Integration Walkthrough), and then the /pd trigger command will function. **Note**: At the moment in V2, only PagerDuty users can use /pd trigger. If you want to allow anyone to use the slash command, you should keep the legacy slash command integration in place.

##Can I add multiple Slack workspaces to a single PagerDuty account?
Yes, multiple workspaces can be mapped to a single PagerDuty account by repeating the [Initial Configuration](https://support.pagerduty.com/docs/slack-integration-guide#initial-configuration) and [adding the extensions to services](https://support.pagerduty.com/docs/slack-integration-guide#add-the-slack-extension-to-a-service) for each workspace.

##Can I use the same Slack workspace for multiple different PagerDuty accounts?
At this time, mapping multiple PagerDuty accounts to a single Slack workspace is not supported.

##How do I provide feedback, suggestions and/or bugs?
Please [contact our Support team](https://www.pagerduty.com/contact-us/). 

##How do I view on-call information in Slack?
You can do this by running the /pd oncall command.

##What do I do if I’m seeing a `403_client_error` when running the /pd trigger command?
You are likely attempting to trigger an incident from a Slack channel that is not connected to PagerDuty. Ensure that you have connected Slack to PagerDuty as shown in step 3 above.