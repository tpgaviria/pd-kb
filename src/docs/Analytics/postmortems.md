---
title: "Postmortems"
slug: "postmortems"
hidden: false
createdAt: "2017-06-21T04:15:33.294Z"
updatedAt: "2020-10-08T22:39:35.942Z"
---
PagerDuty Postmortems allow users to learn from major incidents by providing a summary of events that transpired, how the response was handled, and what resolution steps were taken. It offers the ability to curate a timeline of activity in PagerDuty and Slack, allowing further analysis to determine follow-up actions for similar situations in the future and, ideally, help prevent them altogether. 
[block:callout]
{
  "type": "info",
  "body": "PagerDuty Postmortems is available for accounts on our Digital Operations plan and as part of the [Modern Incident Response](https://support.pagerduty.com/v1/docs/pagerduty-modern-incident-response) package. If you are interested in getting on a pricing plan that includes PagerDuty Postmortems, please feel free to [contact us](https://www.pagerduty.com/contact-sales/) for more information."
}
[/block]

[block:api-header]
{
  "title": "Creating a Postmortem"
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "Observers, Limited Users, Users, Admins and Account Owners (or their respective [advanced permission base roles](https://support.pagerduty.com/docs/advanced-permissions#section--migrating-from-basic-to-advanced-permission-roles-)) can create, modify and delete postmortems .",
  "title": "Required User Permissions"
}
[/block]
Postmortems can be created either from the **Postmortems** catalog or directly from a resolved incident.

From the Postmortems catalog (found in the **Incidents** menu of the PagerDuty web app), you can either create a new postmortem or edit an existing one.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c628cd7-postmortems-overview.png",
        "postmortems-overview.png",
        2184,
        844,
        "#f0f1f1"
      ]
    }
  ]
}
[/block]
To create a new postmortem, select **New Report**. You’ll then be prompted to give your report a name, designate an **owner** of the review process and define the time range during which your incident occurred. Keep in mind that, although multiple people may have been involved in the incident’s response, there can only be a single owner of any one postmortem.

Once you have designated an owner and specified a time range, select **Create Report** to get started adding contextual data.

You can also create your postmortem directly from a resolved incident using the **New Postmortem Report** button on that incident's details page. This automatically fills in the incident's description as the postmortem's title and will also fill in the triggered and resolved times for the incident as the start and end times for the report. All of these fields can be edited at any point during this process.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/915b817-postmortems-new-postmortem-report-incident.png",
        "postmortems-new-postmortem-report-incident.png",
        1092,
        456,
        "#f8f7f7"
      ]
    }
  ]
}
[/block]
##Adding Data Sources
To link incidents to this postmortem, enter their **incident numbers** (one at a time) and select **Associate Incident**. If you’d like to include discussions from public Slack channels, you can do so by clicking the **Connect to Slack** button. Once you’ve authorized PagerDuty to access your Slack account, you will then be prompted to select channels or rooms to include in your report.

Postmortem Builder will, by default, make available all chat messages sent and incident log entries created on the associated incidents during the time period specified in this section. You will have the opportunity later to choose which activity you’d like to include in the postmortem’s timeline.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/050388c-postmortems-data-sources.png",
        "postmortems-data-sources.png",
        1432,
        1034,
        "#f8f9f8"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "To include **Slack** content in a postmortem, a contributor must authorize PagerDuty to access Slack on their behalf, which will let that contributor see Slack content in the **Available Data** listing. Each PagerDuty user will need to authorize with Slack individually. \n\nIf your Slack user account does not have permissions to add apps to your team, you will need to first ask a Slack admin to go to Slack's App Directory and authorize the [PagerDuty Postmortems app](https://pagerduty.slack.com/apps/A51BZ1FCG-pagerduty-postmortems)."
}
[/block]
##Creating your Timeline
Select the entries from your **Available Data** to include in your timeline by hovering over their source icons and using the **+** button. You can also add multiple items at once by selecting them while holding the **shift** key and then using the **>** button to move them to the timeline. You can manually add freeform entries to your timeline by selecting **New Timeline Entry**.

Any Slack entries that are moved from the **Available Data** listing into the postmortem's **Timeline** will be visible to anyone looking at the postmortem. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a31d3d6-postmortems-timeline-data.png",
        "postmortems-timeline-data.png",
        2950,
        1694,
        "#f3f5f4"
      ]
    }
  ]
}
[/block]
##Analysis
This section allows you to summarize and reflect on the curated timeline, including incident root cause analysis and potential steps to prevent or mitigate future incidents.

The postmortem builder comes with a default template for analysis to get you started, but you can add, edit or delete the fields that users see by editing the **Report Template** in the **Settings** tab, accessible from the main postmortems catalog.

##Saving your Postmortem
Postmortems need to be saved to keep the postmortem content stored. When you are done editing your postmortem, select **Save and View Report** from the bottom of the Postmortem Builder to save the data.
[block:api-header]
{
  "title": "Exporting your Postmortem"
}
[/block]
Once you have completed your postmortem report, you can export it as a PDF by viewing it and using the **Save as PDF** button. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c2a5bef-postmortems-save-as-pdf.png",
        "postmortems-save-as-pdf.png",
        974,
        354,
        "#f2f3f1"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Customize Postmortem Template"
}
[/block]
##Why should I customize my Report Template?

The purpose of the postmortem process is to learn how to improve both system resiliency and the response process. As you learn new insights, you could customize your report and add or remove sections that apply to your team's specific use case. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8fdb528-postmortems-customize-settings.png",
        "postmortems-customize-settings.png",
        1358,
        498,
        "#f9faf9"
      ]
    }
  ]
}
[/block]
##Customize your Postmortem Template
You can customize your Postmortem Template to add or remove sections that apply to your specific use case. From the **Settings** tab (found in the **Incidents :fa-arrow-right: Postmortems** menu of the PagerDuty web app), you can customize and edit your Postmortem Report Template.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/46c56e2-postmortems-customize-template.png",
        "postmortems-customize-template.png",
        1980,
        1558,
        "#f3f3f3"
      ]
    }
  ]
}
[/block]
##Add New Postmortem Template Section
You can add a new Report Template **Section** within the **Settings** tab by clicking on the **Add Section** button. You can now edit the **Title** and **Description** of your new **section**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2fbc32a-postmortems-add-section.png",
        "postmortems-add-section.png",
        1418,
        360,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]
##Reset Postmortem Template
You can also **Reset** your Postmortem template to the default sections if needed. To **Revert** to the original default sections, click on the **Reset Template** button at the top of your **Report Template**. You will be prompted in a pop-up menu to **Reset Template** or **Cancel**. 
[block:callout]
{
  "type": "info",
  "title": "Resetting Templates",
  "body": "Resetting your **Report Template** to defaults will only affect future Postmortem Reports. This change will not affect existing Postmortem Reports."
}
[/block]

[block:api-header]
{
  "title": "Postmortem FAQ"
}
[/block]
## How can I change the Slack user associated with Postmortems?
To change the associated Slack user account, you'll have to revoke and replace the current Slack authentication **only** for the postmortems feature. 
1. Within your Slack user account, access the [My Authorizations](https://api.slack.com/tokens) section in the Slack API.
2. Locate the **PagerDuty Postmortem** app under the **Application & Scopes** column.
3. Click the trash icon to the right of the **PagerDuty Postmortem** app to remove it **only from** your chosen Slack user account.   

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4c94718-postmortem-slack.png",
        "postmortem-slack.png",
        1536,
        388,
        "#f3f3f3"
      ]
    }
  ]
}
[/block]
4. While **editing** a postmortem in PagerDuty, click the **Connect to Slack** button under the **Data Sources** section to authenticate a different Slack user account to the postmortems feature.

It’s currently not possible to choose more than one Slack user specifically for the postmortem feature.

## Is it possible to add an images or documents to a postmortem?

It’s possible to insert an external link or URL in any postmortem field which hosts the image or document externally from PagerDuty’s Postmortem. You can insert the link or URL into the section text, timeline entry summary, or in the description of a manual timeline entry within a postmortem. When the link or URL is clicked, then the image or document will open in a new tab. However, It’s currently **not** possible to insert an image directly in a postmortem.