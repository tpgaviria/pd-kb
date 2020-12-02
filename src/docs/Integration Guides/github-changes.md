---
title: "GitHub Changes Integration Guide | PagerDuty"
slug: "github-changes"
hidden: false
createdAt: "2020-08-28T23:42:06.844Z"
updatedAt: "2020-12-01T00:05:14.759Z"
---
# GitHub Changes + PagerDuty Integration Benefits

* Send notification-free events from GitHub or GitHub Enterprise to PagerDuty services regarding important changes, such as new pull requests and commits, to provide context for PagerDuty users. 
* Users may review change events within a PagerDuty service’s Recent Activity timelines during incident triage or hypercare. They can also see recent changes on incidents of that service, and navigate across all changes in a comprehensive list of Recent Changes across all services.

# How it Works

* When a GitHub pull request is closed and the branch is merged, a webhook will be sent to the endpoint of the integrated PagerDuty service. 
* These events will be viewable as change events in the service’s Recent Activity timeline, on incidents associated with that service, and in a global list of all changes. They will not generate alerts, incidents or notifications. 

# Requirements

* **In PagerDuty**: This integration requires a Manager base role or higher to configure.

* **In GitHub**: This integration requires an Admin role to configure.

# Integration Walkthrough

## In PagerDuty

[block:callout]
{
  "type": "success",
  "title": "Best Practices",
  "body": "We recommend mapping your GitHub events to the PagerDuty service that represents what you are changing. This will make it easy for responders to quickly identify recent changes on their service when they get notified for an incident."
}
[/block]
1. In your PagerDuty account, navigate to **Services** :fa-arrow-right: **Service Directory** and click the **name** of your preferred service. Select the **Integrations** tab and click **Add a new integration**. 
2. Enter an **Integration Name** in the format `Service-Name-GitHub-Changes` and select **GitHub Changes** from the **Integration Type** dropdown. Click **Add Integration**.
3. On the next screen in the Integrations list, click the **Name** of your GitHub Changes integration to view the details screen. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "On this screen you will see that the **default branch to track will be set to `master`**, if you would like to change the branch, you may optionally click **Edit Integration** on the right and enter the name of your preferred branch in the **branch** field. Click **Save Changes**"
}
[/block]
4. Next, copy the **Integration URL** which will be in the following format: `https://events.pagerduty.com/integration/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/change/enqueue` 
Keep the URL in a safe place as it will be used in later steps.

## In GitHub

1. Navigate to the GitHub repository where you would like to track changes, select the **Settings** tab and then select **Webhooks**.
2. Click **Add Webhook** on the right. Paste the **Integration URL** that was generated in PagerDuty (above) in the **Payload URL** field, and in the **Content Type** dropdown, select `x-www-form-urlencoded`. Under **Which events would you like to trigger this webhook?** select **Let me select individual events**. Check the box next to **Pull requests** and uncheck the box next to **Pushes**. Ensure that the **Active** checkbox is selected. Enter any other preferred settings and click **Add Webhook**. 
[block:callout]
{
  "type": "info",
  "body": "The push event is also supported, but shows less information in PagerDuty. The pull request event is recommended if you use GitHub's pull request functionality. Selecting both pull request and push events may result in two change events for a single action. Please select only one.",
  "title": "Note"
}
[/block]
3. To test the integration, merge a pull request to the branch that you are tracking. You can temporarily change the branch you are tracking from `master` / `main` to another test branch using the instructions in the note above. In your PagerDuty account, navigate to the integrated service, click its **title** and you should see a change event labeled as **RECENT CHANGE** in grey in the **Recent Activity** timeline:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aeeb252-Screen_Shot_2020-10-27_at_9.53.30_AM.png",
        "Screen Shot 2020-10-27 at 9.53.30 AM.png",
        2750,
        496,
        "#f3f7f5"
      ]
    }
  ]
}
[/block]
# Send and View Change Events

Please read our [Change Events](https://support.pagerduty.com/docs/change-events) article for more information on how to send change events and view them within individual services, incidents and across all services in the Service Directory.

## GitHub Actions

The GitHub Changes integration supports creating change events with [GitHub Actions](https://github.com/features/actions). To use this feature, follow the [Integration Walkthrough](https://support.pagerduty.com/docs/github-changes#integration-walkthrough) above to complete configuration, and then use the **Integration Key** with the [PagerDuty Change Events GitHub Action](https://github.com/marketplace/actions/pagerduty-change-events). 

# FAQ

## Is it possible to modify change events using event rules?

Not at this time, but we are interested to learn about what you would like to accomplish, please [contact our Support team](https://www.pagerduty.com/contact-us/) with your use cases and feedback. 

## Is it possible to send change events from multiple GitHub branches?

Yes, you can add any number of integrations to a single service, including multiple GitHub integrations.

## Are change events viewable in Slack or the PagerDuty mobile app?

Not at this time, but we would like to hear your feedback. Please [contact our Support team](https://www.pagerduty.com/contact-us/).