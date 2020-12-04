---
title: "AWS CloudTrail Integration Guide | PagerDuty"
slug: "aws-cloudtrail-integration-guide"
excerpt: "Integration Guide for AWS CloudTrail"
hidden: false
createdAt: "2018-10-30T12:56:09.439Z"
updatedAt: "2020-11-13T19:51:48.947Z"
---
#Integration Overview

PagerDuty’s integration with AWS CloudTrail enables automated response workflows for activities that could affect compliance and security issues in your AWS ecosystem. PagerDuty provides the opportunity to group alerts alongside other ongoing issues and it has seamless integrations with systems of record like JIRA and SNOW. This is a one-way integration, sending alerts to PagerDuty.

Follow the instructions below to configure AWS CloudTrail with PagerDuty. If you have any questions or need any assistance, please [contact our Support team](https://www.pagerduty.com/contact-us/).

# In PagerDuty 

There are two ways that AWS CloudTrail can be integrated with PagerDuty: via Event Rules or through an integration on a PagerDuty Service.

##Integrating with Event Rules

Integrating with global or service-level event rules may be beneficial if you want to build different rules based on the payload coming from AWS. If you would like to learn more, please visit our article on [Rulesets](doc:rulesets).

### Configure a Global Event Rules Integration

1. From the **Services** menu, select **Event Rules** and click your **Default Global Ruleset**. 
2. On the Event Rules screen, copy your **Integration Key**.

![](https://files.readme.io/811292a-cloudwatch-copy-key.png)

3. Once you have your **Integration Key**, the **Integration URL** will be:

`https://events.pagerduty.com/x-ere/[YOUR_INTEGRATION_KEY_HERE]`

You can now proceed to the [In the AWS Management Console](https://support.pagerduty.com/docs/aws-cloudtrail-integration-guide#in-the-aws-management-console) section below. 

### Configure a Service Event Rules Integration

To use service-level event rules:

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: select your preferred **service** :fa-arrow-right: **Integrations** tab :fa-arrow-right: **Add a new integration**. 
2. Enter an **Integration Name**, select **Use our API directly** and select your preferred Events API version ([Events API v2](https://developer.pagerduty.com/docs/events-api-v2/overview/) or [Events API v1](https://developer.pagerduty.com/docs/events-api-v1/overview/)). Click **Add Integration**.
3. Find the new integration in your integrations list and click its **name**. On the next page, copy the **Integration Key** and paste it into the following URL:

`https://events.pagerduty.com/integration/[YOUR_INTEGRATION_KEY_HERE]/enqueue`

You can now proceed to the [In the AWS Management Console](https://support.pagerduty.com/docs/aws-cloudtrail-integration-guide#in-the-aws-management-console) section below. 

##Integrating with a PagerDuty Service

Integrating with a PagerDuty Service directly can be beneficial if you don’t need to route alerts from AWS to different responders based on the event payload. You can still use [service-level event rules](https://support.pagerduty.com/docs/event-management#section-configure-event-rules-for-a-service) to perform actions such as suppressing.

1. From the **Services** menu, select **Service Directory**.
2. On your Services page: If you are creating a new service for your integration, click **+ New Service**. It is recommended that you create a service specifically for AWS CloudTrail notifications.

If you are adding your integration to an existing service, click the name of the service you want to add the integration to. Then click the **Integrations** tab and click the **Add a new integration** link.

3. Select AWS CloudTrail from the **Integration Type** menu and enter an **Integration Name**.
If you are creating a new service for your integration, in General Settings, enter a **Name** for your new service. Then, in Incident Settings, specify the **Escalation Policy**, **Notification Urgency**, and **Incident Behavior** for your new service.
4. Click the **Add Service** or** Add Integration** button to save your new integration. You will be redirected to the Integrations page for your service.
5. Copy the **Integration URL** for your new integration.

# In the AWS Management Console

1. In the **Services** search bar, search and select Simple Notification Service (SNS). On the SNS dashboard, select **Topics** and click **Create Topic**. This will be used to route alerts to PagerDuty from AWS.
2. Enter a **Topic name** (you may want to name your topic after your PagerDuty service’s name) and **Display name**, then click **Create topic**. 
3. Now that your topic has been created, Select **Subscriptions** in the left hand menu and click **Create Subscription**.
4. Make sure **HTTPS** is the selected Protocol. Paste your **Integration URL** from step 5 (above) into the **Endpoint** field, ensure that the **Enable raw message delivery** checkbox is **unchecked** and click **Create Subscription**.
5. Your subscription should be automatically confirmed. Click the refresh icon to make sure the **Subscription ID** is not *PendingConfirmation*.

![](https://files.readme.io/0bd4428-AWS-CloudTrail-Pending-Confirmation.png)

6. Search for **CloudTrail** in your AWS Management Console.
7. Create a **[trail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-create-a-trail-using-the-console-first-time.html)** if you do not already have one. Note that you can optionally send the trail data to a newly created S3 bucket. 
8. In the **CloudTrail** console, click the trail that you would like to integrate with PagerDuty. 

![](https://files.readme.io/285e3ff-CloudTrail-Click-Trail.png)

9. If you have not yet configured CloudTrail to deliver logs to CloudWatch logs, start by pressing the **Configure button**. If you have already integrated CloudTrail with CloudWatch Logs, choose a log group name and click **Continue**.

![](https://files.readme.io/f2476e9-CloudTrail-Configure-Trail.png)

10. On the next screen, click the **Allow** button at the bottom right to allow communication between CloudTrail and CloudWatch.
11. After configuring CloudTrail to send data to CloudWatch Logs, navigate to the **CloudWatch** console where you can configure an **Alarm** based on a CloudTrail finding.
12. In the CloudWatch console, click **Logs**, select the radio button to the left of the log group that you would like to set a filter on, then click **Create Metric Filter**.

![](https://files.readme.io/44e49f9-CloudTrail-Create-Metric-filter.png)

13. Define a [pattern](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html) for the type of activity you’d like to send to PagerDuty and click **Assign Metric**.

![](https://files.readme.io/f61d538-CloudTrail-Assign-Metric.png)

14. Choose an existing [Metric Namespace](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace) or create a new one, and name the metric. Then click **Create Filter**.

![](https://files.readme.io/0021098-CloudTrail-Create-Metric-Filter2.png)

15. After creating the Filter, click **Create Alarm**.

![](https://files.readme.io/328b25a-CloudTrail-Create-Alarm.png)

16. On the **Modify Alarm** screen, verify your alarm threshold and settings. Add a new **Action** to Send Notification(s) when the alarm state reaches **ALARM**, by clicking **+ Notification**.

![](https://files.readme.io/3c0a66f-CloudTrail-Add-Notification.png)

17. Add a notification for the **OK** state and check that your **ALARM** state notification is correct. You'll want to ensure both notifications are being sent to the **Topic** created earlier in step 2 (above). Click **Create Alarm** to save your changes. You should now see PagerDuty incidents if the alarm thresholds are breached.

![](https://files.readme.io/dae08a8-CloudTrail-Actions.png)

Congratulations, you have now integrated AWS CloudTrail with PagerDuty! For more information on how to adjust settings to deduplicate events within PagerDuty, please visit our article on [Event Management](https://support.pagerduty.com/docs/event-management).