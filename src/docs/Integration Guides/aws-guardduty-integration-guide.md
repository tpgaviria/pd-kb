---
title: "Amazon GuardDuty Integration Guide | PagerDuty"
slug: "aws-guardduty-integration-guide"
excerpt: "Integration Guide for Amazon GuardDuty"
hidden: false
createdAt: "2018-10-30T12:55:02.453Z"
updatedAt: "2020-11-13T19:52:12.993Z"
---
#Integration Overview

PagerDuty’s integration with Amazon GuardDuty allows you to automate response workflows for  security issues that could affect your AWS infrastructure. PagerDuty ensures that the right people are notified about things like unauthorized behavior, and you can use PagerDuty’s alert grouping to reduce noise by grouping similar alerts into a single issue. This is a one-way integration, sending findings to PagerDuty.

Follow the instructions below to configure Amazon GuardDuty with PagerDuty. If you have any questions or need any assistance, please [contact our Support team](https://www.pagerduty.com/contact-us/).

# In PagerDuty 

There are two ways that Amazon GuardDuty can be integrated with PagerDuty: via Event Rules or through an integration on a PagerDuty Service.

##Integrating with Event Rules

Integrating with global or service-level event rules may be beneficial if you want to build different rules based on the payload coming from AWS. If you would like to learn more, please visit our article on [Rulesets](doc:rulesets).

### Configure a Global Event Rules Integration

1. From the **Services** menu, select **Event Rules** and click your **Default Global Ruleset**. 
2. On the Event Rules screen, copy your **Integration Key**.

![](https://files.readme.io/85a2b6c-cloudwatch-copy-key.png)

3. Once you have your **Integration Key**, the **Integration URL** will be:

`https://events.pagerduty.com/x-ere/[YOUR_INTEGRATION_KEY_HERE]`

You can now proceed to the [In the AWS Management Console](https://support.pagerduty.com/docs/aws-guardduty-integration-guide#in-the-aws-management-console) section below. 

### Configure a Service Event Rules Integration

To use service-level event rules:

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: select your preferred **service** :fa-arrow-right: **Integrations** tab :fa-arrow-right: **Add a new integration**. 
2. Enter an **Integration Name**, select **Use our API directly** and select your preferred Events API version ([Events API v2](https://developer.pagerduty.com/docs/events-api-v2/overview/) or [Events API v1](https://developer.pagerduty.com/docs/events-api-v1/overview/)). Click **Add Integration**.
3. Find the new integration in your integrations list and click its **name**. On the next page, copy the **Integration Key** and paste it into the following URL:

`https://events.pagerduty.com/integration/[YOUR_INTEGRATION_KEY_HERE]/enqueue`

You can now proceed to the [In the AWS Management Console](https://support.pagerduty.com/docs/aws-guardduty-integration-guide#in-the-aws-management-console) section below. 

##Integrating with a PagerDuty Service

Integrating with a PagerDuty Service directly can be beneficial if you don’t need to route alerts from AWS to different responders based on the event payload. You can still use [service-level event rules](https://support.pagerduty.com/docs/event-management#section-configure-event-rules-for-a-service) to perform actions such as suppressing.

1. From the **Services** menu, select **Service Directory**.
2. On your Service Directory page: If you are creating a new service for your integration, click **+ New Service**. It is recommended that you create a service specifically for Amazon GuardDuty notifications.

If you are adding your integration to an existing service, click the name of the service you want to add the integration to. Then click the **Integrations** tab and click the **Add a new integration** link.

3. Select Amazon GuardDuty from the** Integration Type** menu and enter an **Integration Name**.
If you are creating a new service for your integration, in General Settings, enter a **Name** for your new service. Then, in Incident Settings, specify the** Escalation Policy**, **Notification Urgency**, and **Incident Behavior** for your new service.
4. Click the **Add Service** or** Add Integration** button to save your new integration. You will be redirected to the Integrations page for your service.
5. Copy the** Integration URL** for your new integration.

# In the AWS Management Console

1. In the **Services** search bar, search and select Simple Notification Service (SNS). On the SNS dashboard, select **Topics** and click **Create Topic**. This will be used to route alerts to PagerDuty from AWS.

![](https://files.readme.io/bec2dcd-amazon-cloudwatch-create-topic.png)

2. Enter a **Topic name** (you may want to name your topic after your PagerDuty service’s name) and **Display name**, then click **Create topic**. 
3. Now that your topic has been created, Select **Subscriptions** in the left hand menu and click **Create Subscription**.
4. Make sure **HTTPS** is the selected Protocol. Paste your **Integration URL** from step 5 (above) into the **Endpoint** field, ensure that the **Enable raw message delivery** checkbox is **unchecked** and click **Create Subscription**.
5. Your subscription should be automatically confirmed. Click the refresh icon to make sure the **Subscription ID** is not *PendingConfirmation*.
6. Next, in the **Services** search bar, search and select the Amazon GuardDuty console. If this is your first time [setting up this service](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_settingup.html#guardduty_enable-gd), search for GuardDuty, and click Enable GuardDuty. 
7. Once you have enabled GuardDuty, you can begin building CloudWatch Event Rules to send alerts to PagerDuty. Navigate to the CloudWatch console.
8. Select **Events**, then click **Get Started** to create a rule. One or more rules can be created to send specific alerts to PagerDuty when a GuardDuty finding is opened.
9. Select **GuardDuty** as the **Service Name**, then select **GuardDuty Finding** as the Event Type.

![](https://files.readme.io/1c619e7-GuardDuty-Create-Rule.png)

[/block]
10. Click **Add a target** and select **SNS topic**, then select **Your Topic Name** (the SNS topic you created above in step 1) and then click **Configure Details**.
11. Assign a Name like *GuardDuty-to-PD-Findings* and click **Create Rule**.
12. To ensure configuration was successful, navigate back to the Amazon GuardDuty console to generate sample findings, which should trigger sample events in PagerDuty. Select **Settings**, then select **Generate Sample Findings** and then click **Findings** in the left navigation bar. You will see the sample findings that have been generated. In PagerDuty, you will see the correlating sample alert. 

![](https://files.readme.io/390393a-GuardDuty-Sample-Findings.png)



![](https://files.readme.io/3488e87-GuardDuty-Findings.png)

Congratulations, you have now integrated Amazon GuardDuty with PagerDuty! For more information on how to adjust settings to deduplicate events within PagerDuty, please visit our article on [Event Management](https://support.pagerduty.com/docs/event-management).

## FAQ

### Why are my CloudWatch events not triggering incidents in PagerDuty?

Events that are not sent properly from CloudWatch will be dropped and will not trigger alerts in PagerDuty. This integration expects to find in the `Message` property a nested JSON-encoded object from which meaningful data about the alert can be extracted to compose the PagerDuty incident. You can find details on [Amazon's SNS Message attributes here](https://docs.aws.amazon.com/sns/latest/dg/sns-message-attributes.html).

AWS also has some troubleshooting docs on their side which outline some things to [look for on the CloudWatch side](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CWE_Troubleshooting.html#NeverDeliveredToTarget).