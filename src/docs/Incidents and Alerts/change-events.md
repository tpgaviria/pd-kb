---
title: "Change Events"
slug: "change-events"
hidden: false
createdAt: "2020-09-04T18:24:54.820Z"
updatedAt: "2020-12-01T18:02:28.409Z"
---
Change events represent service changes such as deploys, build completion, configuration updates, etc., providing contextual information that is critical during incident triage or hypercare. They can be sent via specific integrations, and they do not create alerts, incidents or notifications. See the [View Change Events](doc:change-events#view-change-events) section below for a list of places where change events are surfaced in PagerDuty.

# Configure an Integration to Send Change Events

Currently change events can be sent via these integrations:
* [GitHub Changes](https://support.pagerduty.com/docs/github-changes)
* [Relay by Puppet](https://relay.sh/integrations/pagerduty/)
* [GitLab Changes](https://support.pagerduty.com/docs/gitlab-changes)
* [Evolven](https://www.evolven.com/pagerduty-evolven-integration-benefits.html) 
* [BuildKite](https://buildkite.com/docs/integrations/pagerduty)

You may follow the instructions in the linked integration guides to configure, or you can add them via the Recent Changes page. 

## Configure Integration via the Recent Changes Page

1. Navigate to **Incidents** :fa-arrow-right: **Recent Changes** and click **+ New Change Integration** to the right.
2. Choose one of two options:

* **PagerDuty Integrations**: If you would like to select a prebuilt integration, select your preferred vendor.
* **PagerDuty Events API**: Select this option if you would like to create custom change events with the PagerDuty Events API.

3. **Select a service** that you would like to add the integration to and click **Next**.
4. On the next modal screen, copy your **Integration Key** and click **View Documentation** to see how to use the integration key to configure the rest of the integration. 

# Send Change Events via the Events API

You may also send change events to integrations [via the Events API v2](https://developer.pagerduty.com/api-reference/reference/events-v2/openapiv3.json/paths/~1change~1enqueue/post).

View the [Events API v2 Overview](https://developer.pagerduty.com/docs/events-api-v2/overview/) for guidance on when to send a change event instead of an alert event. You can send both event types using a single Events API v2 integration key.

# View Change Events

## View Change Events on a Service

Navigate to **Services** :fa-arrow-right: **Service Directory** and click the **title** of the integrated service. Under **Recent Activity** you will see change events labeled as **RECENT CHANGE** in grey in the timeline:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e54e4e0-change-events-service-view.png",
        "change-events-service-view.png",
        1445,
        269,
        "#f3f8f6"
      ]
    }
  ]
}
[/block]
## View Most Recent Change Events on an Incident

Navigate to an incident on a service with the above integration configured. Click the incident’s **Title** and you will see a section with the most recent changes in the last 24 hours, with the option to **View All** on the right. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b1d0ea3-change-events-incident-view.png",
        "change-events-incident-view.png",
        860,
        249,
        "#f7f7f9"
      ]
    }
  ]
}
[/block]
If there have been no recent changes, this section will read **No recent changes on this service in the last 24 hours**.

## View and Filter All Change Events Across Services 

To view and filter all change events across all services, navigate to **Incidents** :fa-arrow-right: **Recent Changes**. You may filter by **Team**, **Service**, integration **Type** and **Last Changed** time period. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/41b1594-change-events-recent-changes.png",
        "change-events-recent-changes.png",
        1228,
        408,
        "#f3f4f5"
      ]
    }
  ]
}
[/block]
## View Change Event Details

To view a change event's details, click the change event's **title** and you will see the **Service**, **Type**, **Timestamp**, **Summary**, **Source** and **Links** to view the pull request, the integrated repository and the user's profile.

# FAQ

## Is it possible to modify change events using event rules?

Not at this time, but we are interested to learn about what you would like to accomplish, please [contact our Support team](https://www.pagerduty.com/contact-us/) with your use cases and feedback. 

## Are change events viewable in Slack or the mobile app?

Not at this time, but we would like to hear your feedback, please [contact our Support team](https://www.pagerduty.com/contact-us/).