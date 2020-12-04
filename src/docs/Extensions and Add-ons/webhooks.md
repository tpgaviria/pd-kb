---
title: "Webhooks"
slug: "webhooks"
hidden: false
createdAt: "2017-05-10T19:34:59.926Z"
updatedAt: "2020-10-09T22:14:20.805Z"
---
Webhooks allow you to receive HTTP callbacks when incidents are triggered and updated. Details about the event are sent to your specified URL, such as [Slack](https://www.pagerduty.com/docs/guides/slack-integration-guide/) or your own [custom PagerDuty webhook processor](https://developer.pagerduty.com/docs/webhooks/v2-overview/).

#Add a Webhook

1. Navigate to **Services** :fa-arrow-right: **Service Directory**, then click the **name** of the service you want to add a webhook to.
2. Select the **Integrations** tab, under Extensions and Add-Ons, click **Add or manage extensions for this service** and then click **New Extension**.
3. For the **Extension Type** select your webhook type or **Generic V2 Webhook**.
4. Enter a **Name** for your webhook.
5. Enter your endpoint's **URL** in the **Details** field.
6. Click **Save**.

To test your webhook, click **New Incident** on the service to trigger a test incident, and then check your endpoint for updates. We recommend reviewing the webhook PagerDuty sends when an incident triggers. You can do this by using a tool online such as [Beeceptor](https://beeceptor.com/), [webhook.site](https://webhook.site), or [postb.in](https://postb.in/).

![](https://files.readme.io/9d610c0-webhooks-check-webhook-message.png)

#Custom Headers

Custom headers can be added to outgoing webhook requests, allowing you to input pairs of header names and header values. Up to five custom headers can be added to each webhook. For security purposes, the header values will not be visible and cannot be edited once saved. 

1. Navigate to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions**, then click the :fa-cog: icon next to the webhook extension you want to custom headers to, click **Edit**.
2. Click **+ Add Custom Header**.
3. Enter the custom **header name** and **header value**.
4. Click **Save**.

![](https://files.readme.io/e61f509-webhook-custom-headers.png)
