---
title: "Apps"
slug: "apps-backup"
hidden: true
createdAt: "2019-10-18T16:52:41.003Z"
updatedAt: "2019-12-13T17:59:55.631Z"
---

<Callout type="info" title="Info">
For more information on apps, including how to build them, visit our [Developer Docs](https://v2.developer.pagerduty.com/docs/app-overview).
</Callout>


## Adding Apps
Any user with a PagerDuty account can add an app to their account following the installation instructions in the app’s documentation. 

## Removing Apps
Removing an app from an account will depend on how the app connects to PagerDuty. Refer to the app’s documentation, and general information about removing apps is below:

* **OAuth2**: Revoke application access from the [profile page](https://support.pagerduty.com/docs/configuring-a-user-profile#section-revoking-application-access) of the user who added the app.
* **Events Integrations**: [Delete the integration](https://support.pagerduty.com/docs/services-and-integrations#section-delete-an-integration-from-a-service) from the service.
* **Webhooks**: [Delete the extension](https://support.pagerduty.com/docs/extensions-add-ons#section-managing-extensions-on-the-service-details-page) from the service.