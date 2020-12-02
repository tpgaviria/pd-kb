---
title: "Nucleus Integration Guide | PagerDuty"
slug: "nucleus-integration-guide"
excerpt: "Integration Guide for Nucleus"
hidden: true
createdAt: "2019-06-05T16:48:46.514Z"
updatedAt: "2019-06-06T11:35:43.626Z"
---
#PagerDuty + Nucleus Integration Benefits
- Notify on-call responders based on vulnerabilities within Nucleus.
- Create high and low urgency incidents based on the severity of the vulnerability and the notification rules configured in Nucleus.
- Nucleus, in conjunction with PagerDuty, automates time-consuming manual tasks associated with vulnerability management such as vulnerability analysis, prioritization, notification and remediation.

#How it Works
- In Nucleus, you can create rules that will trigger PagerDuty incidents when vulnerability data meets rule criteria. This means that you can define granular scenarios to task incidents to a specific service. This allows you to automate workflow around vulnerability management via connection to PagerDuty.
- When vulnerability data meets notification rule criteria in Nucleus, events will be sent to PagerDuty, creating incidents that will notify responders.
- Once the incident in PagerDuty has been resolved, it will automatically update the event in Nucleus and the status will appear as ‘Mitigated’. 
 
#Requirements
- PagerDuty integrations require an [Admin base](https://support.pagerduty.com/docs/user-roles) role for account authorization. If you do not have this role, please reach out to an Admin or Account Owner within your organization to configure the integration.

# Integration Walkthrough
## In PagerDuty
1. From the **Configuration** menu, select **Services**.
2. **If you are adding your integration to an existing service**, click the name of the service you want to add the integration to. Then select the **Integrations** tab and click the **New Extension** button.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dd6985f-nucleus-ig-new-extension.png",
        "nucleus-ig-new-extension.png",
        1058,
        804,
        "#f1f4f0"
      ]
    }
  ]
}
[/block]
**If you are creating a new service** for your integration, please read our documentation in section [Configuring Services and Integrations](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) and follow the steps outlined in the [Create a New Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) section, selecting **Don't Use an integration** as the **Integration Type** in step 4. Continue with step 3 (below) once you have finished these steps.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fa885e0-setup-integration-nucleus.png",
        "setup-integration-nucleus.png",
        512,
        323,
        "#fafafa"
      ]
    }
  ]
}
[/block]
3. On the newly created service, select the **Integrations** tab and click **+ New Extension**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a078ba4-nucleus-ig-new-extension.png",
        "nucleus-ig-new-extension.png",
        1058,
        804,
        "#f1f4f0"
      ]
    }
  ]
}
[/block]
4. Select **Generic V2 Webhook** as the **Extension Type** and enter a **Name** for the extension. In the **Details** field, you will enter the URL to your Nucleus instance with /public/index.php/webhook/pagerduty appended. (Example: `https://Nucleus-trial1.nucleussec.com/nucleus/public/index.php/webhook/pagerduty`) .Click **Save**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/832d53d-extension-type-nucleus.png",
        "extension-type-nucleus.png",
        971,
        112,
        "#f3e8e5"
      ]
    }
  ]
}
[/block]
5.  Once you have added the extension, navigate to the **Configuration** menu, select **API Access**, then click **+ Create New API Key**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/37c192d-api-access.png",
        "api-access.png",
        512,
        292,
        "#c0c2c6"
      ]
    }
  ]
}
[/block]
6. Enter a description for the key, and click **Create Key**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2c07244-create-key.png",
        "create-key.png",
        512,
        230,
        "#eef0ee"
      ]
    }
  ]
}
[/block]
7. Copy and paste the **API key** into a safe place before closing the dialogue box.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fea17f8-nucleus-key.png",
        "nucleus-key.png",
        512,
        402,
        "#f1efed"
      ]
    }
  ]
}
[/block]
##In Nucleus
1. Navigate to **Project Administration** and click **Connectors**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/75f49e1-connectors.png",
        "connectors.png",
        244,
        583,
        "#303b48"
      ]
    }
  ]
}
[/block]
2. In the **Issue Trackers** section, click the **PagerDuty** icon.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f552124-issue-trackers.png",
        "issue-trackers.png",
        715,
        274,
        "#f1f0f3"
      ]
    }
  ]
}
[/block]
 3. On the **Setup PagerDuty Connector** pop-up screen, enter the **API Key** and click **Save Changes** at the bottom of the screen. If a success message appears, click **Retrieve Data**. If you do not receive a success message, please ensure you have entered the API Key correctly and try again.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/743cc6d-setup-connector.png",
        "setup-connector.png",
        512,
        151,
        "#cacbce"
      ]
    }
  ]
}
[/block]
4. Select the **PagerDuty Service** and **Default Requester** from their respective dropdowns and click **Save Changes**.
**Optional**: Select the **Default Escalation Policy** or **Default Assignee**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bbbd05b-connector-service-requester.png",
        "connector-service-requester.png",
        512,
        347,
        "#edeef0"
      ]
    }
  ]
}
[/block]
5. Once saved, click **Verify Connection** to ensure everything is working properly. Once the connection is verified, a 'Success!" status will appear at the top of the pop-up screen. If you do not receive a success message, please ensure you have entered the API Key correctly, make sure your service is enabled, and try again.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9adc590-necleus-success.png",
        "necleus-success.png",
        512,
        104,
        "#a5a4a8"
      ]
    }
  ]
}
[/block]
#FAQ
**Can I create a PagerDuty incident within Nucleus?**

Yes, you can create an incident within Nucleus and it will automatically be created in PagerDuty. This will allow your security analysts and vulnerability managers to disperse incidents to the relevant team/individuals to be fixed without leaving the Nucleus app.

**Is this integration supported bidirectionally?**

Currently, changes to Nucleus-generated incidents can only be made in PagerDuty. Bidirectional functionality is on the roadmap but has not been developed yet.

**What types of security threats/alarms/events will create an incident in PagerDuty?**

Incidents created in PagerDuty will be related specifically to vulnerability findings. This means that when new vulnerability scans are uploaded to Nucleus, findings that meet certain criteria will automatically create incidents in PagerDuty. Users also have the option of manually creating incidents from vulnerability findings within Nucleus.

**How does Nucleus know what types of incidents to create in PagerDuty?**

In Nucleus, you can create rules that will trigger PagerDuty incidents when vulnerability data meets rule criteria. This means that you can define granular scenarios to task incidents to a specific service. This allows you to automate workflow around vulnerability management via connection to PagerDuty.

**Can I assign specific vulnerability findings to different escalation policies within the Nucleus UI?**

Yes, every time you create a PagerDuty incident within the Nucleus UI, you can select the escalation policy to which that incident will be assigned. You can also set a default escalation policy for easier manual assignment. Finally, for each notification rule, you can define under what circumstances different vulnerability findings are assigned to different escalation policies.