---
title: "AWS Security Hub Integration Guide | PagerDuty"
slug: "aws-security-hub-integration-guide-pagerduty"
excerpt: "Integration Guide for AWS Security Hub"
hidden: false
createdAt: "2019-06-18T22:11:52.476Z"
updatedAt: "2020-11-13T19:50:39.176Z"
---
#PagerDuty + AWS Security Hub Integration Benefits

This integration allows you to send AWS Security Hub Findings to PagerDuty and use the PagerDuty platform to manage, organize, and respond to events relevant to your organization.

#How it Works

- As AWS Security Hub discovers Findings, it will automatically send these Findings to CloudWatch Events. As a result of this automated process by AWS Security Hub, you can define the Event Pattern in which to trigger notifications to be sent to PagerDuty through SNS Topics. Example JSON for Event Pattern is available below in step 5 of our [CloudFormation template](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-cloudformation-template).
- You can also add and/or restrict these Findings to be sent only when they’re manually triggered by [creating a Custom Action](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-custom-actions-for-manual-notifications) in AWS Security Hub, and adding that Custom Action ID ARN in the Event Pattern Resource.

#Requirements

**In AWS Security Hub**:

- If using the [CloudFormation template](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-cloudformation-template) below, you must have access to create a CloudFormation template.

**In PagerDuty**:

- This integration requires a Manager, Admin, Global Admin or Account Owner base role to configure. If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

#Integration Walkthrough

##In PagerDuty

There are two ways that AWS Security Hub can be integrated with PagerDuty: via Event Rules or through an integration on a PagerDuty Service.

##Integrating with Event Rules

Integrating with global or service-level event rules may be beneficial if you want to build different rules based on the payload coming from AWS. If you would like to learn more, please visit our article on [Rulesets](doc:rulesets).

### Configure a Global Event Rules Integration

1. From the **Services** menu, select **Event Rules** and click your **Default Global Ruleset**. 
2. On the Event Rules screen, copy your **Integration Key**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e1f37b-cloudwatch-copy-key.png",
        "cloudwatch-copy-key.png",
        2146,
        980,
        "#f7f6f7"
      ]
    }
  ]
}
[/block]
3. Once you have your **Integration Key**, the **Integration URL** will be:

`https://events.pagerduty.com/x-ere/[YOUR_INTEGRATION_KEY_HERE]`

You can now proceed to the [In the AWS Console](https://support.pagerduty.com/v1/docs/aws-security-hub-integration-guide-pagerduty#section-in-the-aws-console) section below. 


### Configure a Service Event Rules Integration

To use service-level event rules:

1. Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: select your preferred **service** :fa-arrow-right: **Integrations** tab :fa-arrow-right: **Add a new integration**. 
2. Enter an **Integration Name**, select **Use our API directly** and select your preferred Events API version ([Events API v2](https://developer.pagerduty.com/docs/events-api-v2/overview/) or [Events API v1](https://developer.pagerduty.com/docs/events-api-v1/overview/)). Click **Add Integration**.
3. Find the new integration in your integrations list and click its **name**. On the next page, copy the **Integration Key** and paste it into the following URL:

`https://events.pagerduty.com/integration/[YOUR_INTEGRATION_KEY_HERE]/enqueue`

You can now proceed to the [In the AWS Console](https://support.pagerduty.com/v1/docs/aws-security-hub-integration-guide-pagerduty#section-in-the-aws-console) section below. 

###Integrating With a PagerDuty Service

1. From the **Services** menu, select **Service Directory**.
2. It is recommended that you create a service specifically for Amazon CloudWatch notifications.
If you are creating a new service for your integration, please read our documentation in section [Configuring Services and Integrations](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) and follow the steps outlined in the [Create a New Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) section, selecting AWS Security Hub as the Integration Type in step 4. Continue with the In Datadog section (below) once you have finished these steps.

If you are adding your integration to an existing service, click the **name** of the service you want to add the integration to. Then select the **Integrations** tab and click the **New Integration** button.

3. Enter an **Integration Name** in the format `monitoring-tool-service-name` (e.g. AWS-Security-Hub-Shopping-Cart) and select AWS Security Hub from the **Integration Type** menu.

4. Click **Add Integration** to save your new integration. You will be redirected to the Integrations tab for your service.

5. Copy the **Integration URL** for your new integration. Keep this URL in a safe place for later use. You can now proceed to the [In the AWS Console](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-in-the-aws-console) section below.

##In the AWS Console 

Next you will need to configure AWS Security Hub to send CloudWatch Events to PagerDuty. You can set up CloudWatch events by using our provided [CloudFormation template](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-cloudformation-template), or you can [configure them manually](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-manually-configure-cloudwatch-events).

###CloudFormation Template 

This CloudFormation template will automatically create a new SNS Topic named `SecurityHubSNSTopic`. The CloudFormation template will prompt you to provide an Event Pattern for selected events to be routed to the SNS Topic target. The template will also prompt for the PagerDuty Integration URL generated above in step 3 of the [Integrating Global Event Rules](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-integrating-with-global-event-rules) section, or step 5 of the [Integrating With a PagerDuty Service](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-integrating-with-a-pagerduty-service) section.

1. Download the [PagerDutyCloudFormation.template file](https://github.com/PagerDuty/security-hub-cloudformation/blob/master/PagerDutyCloudFormation.template
).
2. In AWS CloudFormation, click **Create stack**.
3. Select **Template is ready** and **Upload a template file**.
4. Upload the **PagerDutyCloudFormation.template** file.
5. Give this Stack a **Name**, and specify the following parameters:

**EventPatternParameter JSON Example**:

`{
  "source": [
    "aws.securityhub"
  ]
}`

**SNSSubEndpoint Integration URL Examples**:

Integrating With Global Event Rules:
`https://events.pagerduty.com/x-ere/[YOUR_INTEGRATION_KEY_HERE]`

Integrating With a PagerDuty Service:
`https://events.pagerduty.com/integration/7c6178Yourcb469Keyb039e15c3f4499/enqueue`
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6c446fc-aws-security-hub-cloudformation-example.png",
        "aws-security-hub-cloudformation-example.png",
        2790,
        1385,
        "#e7e8e9"
      ],
      "caption": ""
    }
  ]
}
[/block]
###Manually Configure CloudWatch Events

1. In the SNS dashboard, click **Create topic**. This will be used to route alerts to PagerDuty from AWS Security Hub.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cf83ec4-AWS_Console.png",
        "AWS_Console.png",
        1701,
        654,
        "#f7f7f7"
      ],
      "caption": ""
    }
  ]
}
[/block]
2. Enter a **Name**, optionally enter a **Display name** and then click **Create topic**. You may want to name your topic after your PagerDuty service’s name.
3. Now that your topic has been created, click **Create Subscription**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/826261b-Subscription.png",
        "Subscription.png",
        1558,
        344,
        "#edecec"
      ],
      "caption": ""
    }
  ]
}
[/block]
4. In the **Protocol** field, select **HTTPS**. In the **Endpoint** field, paste the PagerDuty **Integration URL** that was generated above in step 3 of the [Integrating Global Event Rules](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-integrating-with-global-event-rules) section, or step 5 of the [Integrating With a PagerDuty Service](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-integrating-with-a-pagerduty-service) section. Click **Create Subscription** to continue.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/93bf886-aws-security-hub-subscription-endpoint.png",
        "aws-security-hub-subscription-endpoint.png",
        1790,
        694,
        "#f3f1f1"
      ],
      "caption": ""
    }
  ]
}
[/block]
5. Your Subscription ID should automatically read as **Confirmed**. Click the :fa-refresh: icon on the right hand side to refresh and ensure that the Subscription ID is not `PendingConfirmation`.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9dbea71-aws-security-hub-subscription-refresh.png",
        "aws-security-hub-subscription-refresh.png",
        1600,
        252,
        "#f2f2f2"
      ],
      "caption": ""
    }
  ]
}
[/block]
6. Next, navigate to CloudWatch and select **Rules** to create a rule that will define when to trigger an AWS Security Hub finding and where to send the finding.
7. Click the **Create Rule** button. In the Service Name field, select **Security Hub** and in the Event Type field, select your preference of what Events should be sent to PagerDuty.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a463871-Configure_Rule.png",
        "Configure_Rule.png",
        2522,
        1101,
        "#f7f7f7"
      ],
      "caption": ""
    }
  ]
}
[/block]
8. Click **Add Target** on the right to specify where to send the event.
9. Select **SNS Topic** from the dropdown and then select the **Topic** name created in Step 2 (above). Click **Configure details** to continue.
10. On the next screen, enter a **Name**, **Description** and ensure that the  **Enable** checkbox is checked. Click **Create Rule** to complete the integration.

##Custom Actions for Manual Notifications
If you would like to manually send AWS Security Hub Findings instead of automatically sending them based on an Event Pattern, you can follow this section to configure the Custom Action button in AWS Security Hub.

###AWS Security Hub Custom Action
1. Navigate to **Security Hub**
2. Select **Settings** on the left navigation panel, select the **Custom actions** tab and click the **Create custom action** button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5cec09c-aws-security-hub-create-custom-action.png",
        "aws-security-hub-create-custom-action.png",
        1259,
        354,
        "#f3f2f1"
      ]
    }
  ]
}
[/block]
3. Enter a **Name**, **Description** and **Custom Action ID**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dfa100f-aws-security-hub-custom-action-details.png",
        "aws-security-hub-custom-action-details.png",
        639,
        441,
        "#f4f3f3"
      ]
    }
  ]
}
[/block]
4. Copy the **Custom action ARN** to be used when defining the CloudWatch Event Rule.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ec64df8-aws-security-hub-arn-custom-action.png",
        "aws-security-hub-arn-custom-action.png",
        1256,
        368,
        "#f3f1f1"
      ]
    }
  ]
}
[/block]
5. Navigate to CloudWatch.
6. Select **Rules** in the left navigation panel and click the **Create Rule** button.
7. Select **Build custom event pattern**.
8. The pattern should look similar to the below example, but ensure that you replace the value “CUSTOM_ACTION_ARN_HERE” in the resources section value with the Custom Action ARN generated in step 6 above.

Example:
```
{
  "source": [
    "aws.securityhub"
  ],
  "detail-type": [
    "Security Hub Findings - Custom Action"
  ],
  "resources": [
    “CUSTOM_ACTION_ARN_HERE”
  ]
}```
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9dfe5c1-aws-security-hub-custom-event-pattern.png",
        "aws-security-hub-custom-event-pattern.png",
        1188,
        691,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]
9. Specify where the AWS Security Hub Finding should be sent under the **Target** section. If you haven’t already configured this, this is available in Steps 1-3 in the section [Manually Configure CloudWatch Events](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty#section-manually-configure-cloudwatch-events) above.

#FAQ

##What AWS Security Hub Findings will be sent to PagerDuty with this integration?

This will depend on your Event Pattern that is defined in the CloudFormation Template section, step 5 (above). By default, this configuration will send all AWS Security Hub Findings to PagerDuty. You can restrict this by adding specific ‘detail-type’ and/or adding specific resources.

##Does PagerDuty sync statuses and updates with AWS Security Hub?
No, not at this time. AWS Security Hub will send the notifications to PagerDuty, and updates will not be posted/synced back with the particular AWS Security Hub Finding.