---
title: "Apps"
slug: "apps"
hidden: false
createdAt: "2020-04-16T21:05:31.717Z"
updatedAt: "2020-06-03T00:45:13.388Z"
---
# Adding Apps
Users with the appropriate permissions can add an app to their PagerDuty account following the installation instructions in the app’s documentation. 

## Authorizing OAuth 2.0 Apps
Users are presented with a prompt when authorizing an app with OAuth 2.0 functionality.

**Published Authorization Prompt**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1592f59-screencapture-pdt-jbaldo-pagerduty-oauth-authorize-2020-04-16-16_48_17.png",
        "screencapture-pdt-jbaldo-pagerduty-oauth-authorize-2020-04-16-16_48_17.png",
        2880,
        1446,
        "#f3f5f4"
      ]
    }
  ]
}
[/block]
### Security Warnings

When an app has not been reviewed by PagerDuty, the user sees a warning message. The exact message varies depending on which of these scenarios apply.

**Internally Developed Apps**
Unpublished apps that were developed within your organization, but not enabled by an admin.

*Message:* “This app was created by a developer in your PagerDuty organization but has not been reviewed or approved by PagerDuty.”

**All Other Unpublished Apps**
Unpublished apps which are not admin approved and were not developed by a member of your PagerDuty organization.

*Message:* “This app was enabled by an admin of your PagerDuty organization but has not been reviewed or approved by PagerDuty.”

**Unpublished App Prompt With Warning Message**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/057abf9-screencapture-pdt-jbaldo-pagerduty-oauth-authorize-2020-04-16-16_15_33.png",
        "screencapture-pdt-jbaldo-pagerduty-oauth-authorize-2020-04-16-16_15_33.png",
        2880,
        1446,
        "#f4f5f2"
      ]
    }
  ]
}
[/block]
# Removing Apps
Removing an app from an account will depend on how the app connects to PagerDuty. Refer to the app’s documentation, and general information about removing apps is below:

* **OAuth2**: Revoke application access from the [profile page](https://support.pagerduty.com/docs/configuring-a-user-profile#section-revoking-application-access) of the user who added the app.
* **Events Integrations**: [Delete the integration](https://support.pagerduty.com/docs/services-and-integrations#section-delete-an-integration-from-a-service) from the service.
* **Webhooks**: [Delete the extension](https://support.pagerduty.com/docs/extensions-add-ons#section-managing-extensions-on-the-service-details-page) from the service.