---
title: "AWS Personal Health Dashboard Integration Guide | PagerDuty"
slug: "aws-personal-health-dashboard"
excerpt: "Integration Guide for AWS Personal Health Dashboard"
hidden: false
createdAt: "2018-10-30T12:56:28.955Z"
updatedAt: "2020-11-13T19:51:13.836Z"
---
#Integration Overview

PagerDuty’s integration with AWS Personal Health dashboard enables you to immediately receive notifications about problems with AWS Services, via PagerDuty. This can be especially helpful when there are infrastructure problems that may be impacting your services. This is a one-way integration, sending both issues and scheduled changes to PagerDuty.

Follow the instructions below to configure AWS Personal Health Dashboard with PagerDuty. If you have any questions or need any assistance, please [contact our Support team](https://www.pagerduty.com/contact-us/).

# In PagerDuty 

There are two ways that AWS Personal Health Dashboard can be integrated with PagerDuty: via Event Rules or through an integration on a PagerDuty Service.

##Integrating with Event Rules

Integrating with global or service-level event rules may be beneficial if you want to build different rules based on the payload coming from AWS. If you would like to learn more, please visit our article on [Rulesets](doc:rulesets).

### Configure a Global Event Rules Integration

1. From the **Services** menu, select **Event Rules** and click your **Default Global Ruleset**. 
2. On the Event Rules screen, copy your **Integration Key**.

![](https://files.readme.io/6df99e3-cloudwatch-copy-key.png)

3. Once you have your **Integration Key**, the **Integration URL** will be:

`https://events.pagerduty.com/x-ere/[YOUR_INTEGRATION_KEY_HERE]`

You can now proceed to the [In the AWS Management Console](https://support.pagerduty.com/docs/aws-personal-health-dashboard#in-the-aws-management-console) section below. 

### Configure a Service Event Rules Integration

To use service-level event rules:

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: select your preferred **service** :fa-arrow-right: **Integrations** tab :fa-arrow-right: **Add a new integration**. 
2. Enter an **Integration Name**, select **Use our API directly** and select your preferred Events API version ([Events API v2](https://developer.pagerduty.com/docs/events-api-v2/overview/) or [Events API v1](https://developer.pagerduty.com/docs/events-api-v1/overview/)). Click **Add Integration**.
3. Find the new integration in your integrations list and click its **name**. On the next page, copy the **Integration Key** and paste it into the following URL:

`https://events.pagerduty.com/integration/[YOUR_INTEGRATION_KEY_HERE]/enqueue`

You can now proceed to the [In the AWS Management Console](https://support.pagerduty.com/docs/aws-personal-health-dashboard#in-the-aws-management-console) section below. 

##Integrating with a PagerDuty Service

Integrating with a PagerDuty Service directly can be beneficial if you don’t need to route alerts from AWS to different responders based on the event payload. You can still use [service-level event rules](https://support.pagerduty.com/docs/event-management#section-configure-event-rules-for-a-service) to perform actions such as suppressing.

1. From the **Services** menu, select **Service Directory**.
2. On your Services page: If you are creating a new service for your integration, click **+ New Service**. It is recommended that you create a service specifically for AWS Personal Health Dashboard notifications.
If you are adding your integration to an existing service, click the name of the service you want to add the integration to. Then click the **Integrations** tab and click **Add a new integration**.

3. Select AWS Personal Health Dashboard from the** Integration Type** menu and enter an **Integration Name**.
If you are creating a new service for your integration, in General Settings, enter a **Name** for your new service. Then, in Incident Settings, specify the** Escalation Policy**, **Notification Urgency**, and **Incident Behavior** for your new service.
4. Click the **Add Service** or** Add Integration** button to save your new integration. You will be redirected to the Integrations page for your service.
5. Copy the **Integration URL** for your new integration.

# In the AWS Management Console

1. In the **Services** search bar, search and select Simple Notification Service (SNS). On the SNS dashboard, select **Topics** from the left menu and click **Create Topic**. This will be used to route alerts to PagerDuty from AWS
2. Enter a **Topic name** (you may want to name your topic after your PagerDuty service’s name) and **Display name**, then click **Create topic**. 
3. Now that your topic has been created, Select **Subscriptions** in the left menu and click **Create Subscription**.
4. Make sure **HTTPS** is the selected Protocol. Paste your **Integration URL** from step 5 (above) into the **Endpoint** field, ensure that the **Enable raw message delivery** checkbox is **unchecked** and click **Create Subscription**.
5. Your subscription should be automatically confirmed. Click the refresh icon to make sure the **Subscription ID** is not *PendingConfirmation*.

![](https://files.readme.io/507bcbe-GuardDuty-Pending-Confirmation.png)

6. To navigate to the AWS Personal Health Dashboard, click on the **Alerts** icon in the top navigation bar, then select **View all alerts**, and then select **Dashboard** in the left navigation bar.

![](https://files.readme.io/683ae05-PHD-Alerts.png)



![](https://files.readme.io/2ad11e1-PHD-Dashboard-Left-Nav.png)

7. To create an [alarm](https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html), click **Set up notifications with CloudWatch Events** in the upper right hand corner. Enter **Health** as the **Service Name**. 
Decide if you want to route all AWS Personal Health Dashboard notifications or only ones for specific services. For all events, set **Event Type** to **All Events** or alternatively select **Specific Health events** then choose the services you are interested in.

![](https://files.readme.io/1802734-PHD-Create-a-Rule.png)

8. Click **Add target**, select **SNS topic** in the dropdown menu, select the **Topic** you created above (in steps 1-5) and then click **Configure details**. In the **Configure rule details** section, assign a name and optional description for the rule, then click **Create Rule**.

![](https://files.readme.io/ace7391-PHD-Add-Target.png)



![](https://files.readme.io/9335e40-PHD-Configure-Rule-Details.png)

9. Now that you have configured CloudWatch to send AWS Personal Health Dashboard notifications to PagerDuty, your responders will immediately be notified when AWS is experiencing problems.

Congratulations, you have now integrated AWS Personal Health Dashboard with PagerDuty! For more information on how to adjust settings to deduplicate events within PagerDuty, please visit our article on [Event Management](https://support.pagerduty.com/docs/event-management).