---
title: "GitLab Changes Integration Guide | PagerDuty"
slug: "gitlab-changes"
hidden: false
createdAt: "2020-11-02T18:53:38.182Z"
updatedAt: "2020-11-25T19:09:57.802Z"
---
# GitLab + PagerDuty Integration Benefits

* Send notification-free events from GitLab to PagerDuty services regarding merge request events, to provide context for anyone using PagerDuty. 
* Responders may review change events within a PagerDuty service’s Recent Activity timelines during incident triage or hypercare. They can also see recent changes on incidents of that service, and navigate across all changes in a comprehensive list of Recent Changes across all services.

# How it Works

* When a `merge_request` event occurs within a GitLab repository, a webhook will be sent to the endpoint of the integrated PagerDuty service. 
* These events will be viewable as change events in the service’s Recent Activity timeline, on incidents associated with that service, and in a global list of all changes. They will not generate alerts, incidents or notifications. 

# Requirements

**In PagerDuty**: This integration requires a Manager base role or higher to configure.

**In GitLab**: This integration requires a Maintainer, Admin or Owner role to configure.

# Integration Walkthrough

## In PagerDuty
[block:callout]
{
  "type": "success",
  "title": "Best Practices",
  "body": "We recommend mapping your GitLab events to the PagerDuty service that represents what you are changing. This will make it easy for responders to quickly identify recent changes on their service when they get notified for an incident."
}
[/block]
1. In your PagerDuty account, navigate to **Services** :fa-arrow-right: **Service Directory** and click the **name** of your preferred service. Select the **Integrations** tab and click **Add a new integration**. 
2. Enter an **Integration Name** in the format `Service-Name-GitLab` and select **GitLab Changes** from the **Integration Type** dropdown. Click **Add Integration**.
3. On the next screen in the Integrations list, click the **Name** of your GitLab integration to view the details screen. 

**Note**: On this screen you will see that the **default branch to track will be set to `main,master`**, if you would like to change the branch, you may optionally click **Edit Integration** on the right and enter the name of your preferred branch in the **branch** field. If you would like to add multiple branches, add each with a space separation. Click **Save Changes**

4. Next, copy the **Integration URL** which will be in the following format: `https://events.pagerduty.com/integration/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/change/enqueue` 
Keep this URL in a safe place for later use.

## In GitLab

1. Navigate to the GitLab project where you would like to track changes, select the **Settings** menu on the left, and then select **Webhooks**.
2. Paste the **Integration URL** generated in PagerDuty (above) in the **URL** field. Under the **Trigger** header, deselect **Push events** and select **Merge request events**. Click **Add Webhook**. 
3. Once added, you will see the webhook appear below these settings. To test the integration, create a `merge_request` in the integrated project. In your PagerDuty account, navigate to the integrated service, click its **title** and you should see a change event labeled as **RECENT CHANGE** in grey in the **Recent Activity** timeline:

![](https://files.readme.io/ded82f4-gitlab-changes-test-event.png)

# Send and View Change Events

Please read our [Change Events](https://support.pagerduty.com/docs/change-events) article for more information on how to send change events and view them within individual services, incidents and across all services in the Service Directory.

# FAQ

## Is it possible to modify change events using event rules?

Not at this time, but we are interested to learn about what you would like to accomplish, please [contact our Support team](https://www.pagerduty.com/contact-us/) with your use cases and feedback. 

## Is it possible to send change events from multiple GitLab branches?

Yes, you can add any number of integrations to a single service, including multiple GitLab integrations. Once you have added an integration for a new branch to your PagerDuty service, click **Edit Integration** to add the correct branch name and click **Save Changes**.

## Are change events viewable in Slack or the mobile app?

Not at this time, but we would like to hear your feedback, please [contact our Support team](https://www.pagerduty.com/contact-us/).