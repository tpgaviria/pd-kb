---
title: "Zoom Integration Guide | PagerDuty"
slug: "zoom-integration-guide"
hidden: false
createdAt: "2020-07-28T19:37:55.759Z"
updatedAt: "2020-11-11T17:47:39.358Z"
---
# Zoom + PagerDuty Integration Benefits

* Responders can quickly create on-demand Zoom meetings with the click of a button from a PagerDuty incident.
* Response Plays can create on-demand Zoom meetings and attach them to incidents.

# How it Works

*  On a PagerDuty incident, a responder clicks a link or they can optionally run a pre-configured Response Play to create an incident-specific Zoom ID. This information is sent as an event to AWS Lambda, which transforms it to a Zoom-compatible format and it creates a meeting ID. **Note**: This meeting ID is incident-specific and it is not a fixed conference bridge that can be reused for other incidents.
* Once the meeting ID has been created, this information is sent back through the same Lambda to PagerDuty, creating a [conference bridge](https://support.pagerduty.com/docs/conference-bridge) with the meeting ID information. 
* Responders can join the Zoom conference bridge directly from the incident in the web app and mobile app, via conference bridge notifications, or they can use [One Touch to Join](https://support.pagerduty.com/docs/conference-bridge#one-touch-to-join-conference-bridge). 

# Requirements

**In PagerDuty**: 

* **First-time Configuration**: You must have Admin or Account Owner permissions to configure the integration.
* **Using the Integration**: Users with the responder role or higher can create Zoom meetings via incidents. 

**In Zoom**: 
* **First-time Configuration**: You must have administrator permissions to configure the integration. 

# Integration Walkthrough

## In Zoom

1. [Install the PagerDuty application](https://zoom.us/oauth/signin?_rnd=1598564518255&client_id=a4OdLj9Q1SFue7KmnfrSg&redirect_uri=https%3A%2F%2Fzoom.apps.pagerduty.com%2Fapi%2Finstallation%2Fzoom_callback&response_type=code) in your Zoom account. 
2. You will see the following authorization screen. Click **Authorize**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e1c3f23-zoom-authorize-zoom.png",
        "zoom-authorize-zoom.png",
        723,
        628,
        "#f5f7f9"
      ]
    }
  ]
}
[/block]
3. On the next screen, you will be prompted to **sign into your PagerDuty account** if you have not signed in already. Once signed in, you will see another authorization screen. Click **Authorize**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2c01195-zoom-authorize-pagerduty.png",
        "zoom-authorize-pagerduty.png",
        547,
        707,
        "#f0f5ed"
      ]
    }
  ]
}
[/block]
4. After successfully installing the integration, you should see a confirmation message in your browser.

## In PagerDuty

1. Navigate to the PagerDuty incidents page and click **+ New Incident** to create a new test incident. 
2. Enter your preferred **Impacted Service** and **Title** and click **Create Incident**.
3. Within the new incident’s details, you should now see a link to **Create Zoom Meeting**. Once clicked, the zoom meeting ID link (and dial-in phone number, if configured) will populate as the conference bridge. 

# Using the Zoom Integration

## Create a Zoom Meeting Manually
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Users with a Responder role and higher can create Zoom conference bridges."
}
[/block]
1. Click the incident’s **title** to view the incident details screen. 
2. Next to **CONFERENCE ZOOM**, click **Create Zoom Meeting**. The new meeting ID will automatically populate. 
3. Responders can now click this meeting link from the incident in the web or mobile app or via conference bridge notifications and One Touch to Join.

## Create a Zoom Conference Bridge Response Play
[block:callout]
{
  "type": "info",
  "body": "[Response Plays](https://support.pagerduty.com/docs/response-automation) are only available on our Digital Operations plan and as part of our [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) package. Please [contact our Sales Team](https://www.pagerduty.com/contact-us/) if you would like to upgrade to a plan with this feature.",
  "title": "Note"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Manager, Global Admin or Account Owner base roles can create response plays. At this time, Team-based roles do not have the ability to grant Response Play creation access to other users without these base roles."
}
[/block]
1. Navigate to **Incidents** :fa-arrow-right: **Response Plays** and click **+ New Response Play**.
2. Enter a **Name**, such as `Add Zoom Conference Bridge` and **Description**. Under **What should happen when this play runs?**, check the **Add a conference bridge** checkbox and select **Meet with Zoom**. Enter any other preferred settings. **Note**: If you would like anyone to be able to create Zoom meetings via this Response Play, ensure that you select **All incident responders** under **Who can run this play on demand?**. Click **Create Play**.

### Run a Zoom Conference Bridge Response Play
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "All roles, with the exception of Limited and Full Stakeholders, can run response plays on incidents."
}
[/block]
1. Once the Zoom conference bridge Response Play has been configured (see instructions above), click an incident’s **title** to view the incident details screen. Click **Run a Play** and select the Zoom conference bridge Response Play.
2. Once run, the Zoom meeting ID will be automatically populated in the incident details next to the **CONFERENCE** heading.

# Uninstall the PagerDuty Zoom Integration

To uninstall the PagerDuty Zoom application, users must perform the uninstall through the Zoom Marketplace. When the Zoom app is uninstalled, all authorization tokens will be deleted and users will no longer be able to create Zoom Meetings from PagerDuty. 

1. Log in to your Zoom account and navigate to the Zoom App Marketplace. 
2. Select **Manage** in the top right, then click **Installed Apps**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5c76784-zoom-marketplace-manage.png",
        "zoom-marketplace-manage.png",
        882,
        81,
        "#f7f8fb"
      ]
    }
  ]
}
[/block]
3. Open the **PagerDuty** app and select the **Manage** tab.
4. Click the **Uninstall** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e823925-zoom-uninstalll.png",
        "zoom-uninstalll.png",
        1093,
        595,
        "#f4f9f6"
      ]
    }
  ]
}
[/block]
# FAQ

## Who can create a Zoom meeting in PagerDuty?

PagerDuty users with the responder role or higher can create Zoom meetings.

## I don’t see a telephone number attached to the PagerDuty incident for my Zoom Meeting. What is wrong?

If your Zoom account does not provide telephone number dial-in, only the URL will be attached to the PagerDuty incident. **Note**: Zoom recently removed telephone dial-in for free Zoom accounts, please check your Zoom account pricing plan.