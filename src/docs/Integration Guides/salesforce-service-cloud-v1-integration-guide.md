---
title: "Salesforce Service Cloud V1 Integration Guide | PagerDuty"
slug: "salesforce-service-cloud-v1-integration-guide"
hidden: true
createdAt: "2019-08-28T23:55:36.390Z"
updatedAt: "2020-10-09T23:23:08.056Z"
---
#Salesforce Service Cloud + PagerDuty Integration Benefits

* Customize when to notify the proper on-call team about Salesforce Service Cloud cases and route exception cases.
* Create and/or update the Service Cloud case with relevant information as soon as there’s a PagerDuty update such as an acknowledgement, resolution, reassignment, etc.
* Keep your Customer Service team up-to-date with synced notes between PagerDuty and Salesforce Service Cloud so they can provide relevant updates to customers.

#How it Works

* New Salesforce cases and their updates are sent to PagerDuty, where case information is evaluated against your sets of predefined rules. If the evaluation criteria is met, PagerDuty will perform the action that you have defined. 
* PagerDuty can also send information to Salesforce Service Cloud, where you can define the evaluation criteria against the updates made in PagerDuty and select an action to be performed in Salesforce Service Cloud.

#Requirements

**In Salesforce Service Cloud**:
* [Permissions to Install Salesforce Managed Package applications](https://help.salesforce.com/articleView?id=managing_packages.htm&type=5).
* A Salesforce Professional, Unlimited or Enterprise edition, which can allow Apex classes to be run from a Managed Package.
* Ensure that API Access is enabled on your Organization. Salesforce Organizations in Trial Mode will normally not have API access enabled.

**In PagerDuty**:
* The Salesforce integration is only available to accounts on Business or Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring the Salesforce integration.
* An Admin, Global Admin or Account Owner base role is required for configuration. If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

#Integration Walkthrough

##In PagerDuty

1. Navigate to the **Apps & Add ons** :fa-th-large: and select **API Access** and click **Create New API Key**.
3. Enter a description, e.g. “Salesforce API Key” and click **Create Key**.
4. On the next screen, copy the **API Key** and paste it in a safe place for future use. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81b67fc-salesforce-ig-new-api-key.png",
        "salesforce-ig-new-api-key.png",
        1116,
        872,
        "#f4f3f2"
      ]
    }
  ]
}
[/block]
##In Salesforce 
1. In the [Salesforce AppExchange](https://appexchange.salesforce.com/), search PagerDuty and install the app.
2. Once installed, in your Salesforce Service Cloud account, click the :fa-cog: on the right hand side and select **Setup**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/88a07ca-salesforce-ig-setup.png",
        "salesforce-ig-setup.png",
        618,
        644,
        "#f5f5f5"
      ]
    }
  ]
}
[/block]
2. In the Setup console, search for and click **Named Credentials**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9552677-salesforce-ig-named-credentials.png",
        "salesforce-ig-named-credentials.png",
        502,
        470,
        "#ebf0f4"
      ]
    }
  ]
}
[/block]
3. Click the **New Named Credential** button and enter the following information in the fields on the next screen:
   a. **Label**: `PagerDuty_API`
   b. **Name**: `PagerDuty_API`
   c. **URL**: `https://api.pagerduty.com`
   d. **Certificate**: `null`
     e. **Identity Type**: `Named Principal`
    f. **Authentication Protocol**: `Password Authentication`
    g. **Username**: `PagerDutyAPI`
    e. **Password**: Paste the **PagerDuty API Key** (generated in step 4 of the In PagerDuty section, above).
    f. **Call Out Options**:
      * **Generate Authorization Header**: UNCHECK
      * **Allow Merge Fields in HTTP Header**: CHECK
      * **Allow Merge Fields in HTTP Body**: UNCHECK
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/879cbb5-salesforce-ig-callout-options.png",
        "salesforce-ig-callout-options.png",
        470,
        240,
        "#dcdee4"
      ]
    }
  ]
}
[/block]
Click **Save** to continue.
4. Click the App Launcher :fa-th: on the left hand side, search and then click **PagerDuty Configuration**.
5. In the **SUMMARY** tab, if the Named Credential was properly configured, the **Connection** should show an **OK** message in green text.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7561d88-salesforce-ig-connection-ok.png",
        "salesforce-ig-connection-ok.png",
        1032,
        376,
        "#eeeff2"
      ]
    }
  ]
}
[/block]
6. Next, select the **OBJECT MAPPINGS** tab:
    a. **Business object mapped to PagerDuty Incident**: Select the business object that you would like to build the rules off of. **Note**: At this time, only Case objects are supported, and we will use a Case object as an example in the following steps. We currently do not support Custom Objects.
    b. **Incident Title Field**: Select the **business object case field** that you would like to be mapped to PagerDuty's **incident title**. In this example, we have chosen **Subject**.
    c. **Incident Description Field**: Select the **business object case field** that you would like to be mapped to PagerDuty's **incident description body**. In this example we have chosen **Description**.
    d. **Integration User Email**: Provide the email that belongs to the integration user who will be creating and updating the incidents in PagerDuty.
    e. **Sync Salesforce Comments to PagerDuty Notes** *(optional)*: You can sync the Salesforce Service Cloud Case Comments to PagerDuty Notes, but please be aware that syncing between the two may consume your API request limits in Salesforce Service Cloud.

**Example**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/99a4b5c-salesforce-ig-object-mappings-example.png",
        "salesforce-ig-object-mappings-example.png",
        978,
        790,
        "#f5f6f7"
      ]
    }
  ]
}
[/block]
Click **Save** to continue.
7. Next, select the **RULESETS** tab. This is where you will build the rules that apply to your business. Click the **Add Ruleset** button on the right, enter a **Ruleset Name** and click **Save**. Click the ruleset name and click the **Add Rules** button. Enter a **Rule Name**, click **Save** and then click the name of the rule. Each rule will ask for conditions that should be met prior to performing the actions specified in the latter part of the rule definition. 

<Callout type="info" title="Info">
**By default, Rulesets are disabled upon creation**. You will need to enable this ruleset once you're ready to test and use it.",
  "title": "Note
</Callout>


   **Run rule on** selections: 
   * **Case create or update**: Define the Salesforce Service Cloud field conditions that need to be satisfied for the PagerDuty package to run and perform the specified action.
   * **PagerDuty incident create or update**: Define when PagerDuty should send updates to Salesforce Service Cloud about incident changes made by other sources such as an acknowledge, resolve, reassignment, etc. This option will need additional configuration within PagerDuty to be able to authenticate and send updates to Salesforce Service Cloud. Steps are outlined in the next section.

###Configure PagerDuty to Send Incident Information to Salesforce Service Cloud *(optional)*

1. **In Salesforce Service Cloud**: [Retrieve the Security Token](https://help.salesforce.com/articleView?id=user_security_token.htm&type=5) of an integration user by navigating to their **Profile** and **Resetting the Security Token**.
2. **In PagerDuty**: Navigate to **Configuration**, select **Services**, find and then click the service where you would like to add the Salesforce Service Cloud extension. Select the **Integrations** tab and click **New Extension**.
3. In the **Extension Type** dropdown select **Salesforce Service Cloud**, enter a name in the **Name** field,  and then enter the Integration User's **Email Address**, **Password** and **Security Token** (generated in step 1 above). 

* *Optional*: For the **Salesforce RestResource URL** field, leave this blank if using the PagerDuty integration from Salesforce AppExchange. This should only be provided if a custom, in-house integration is being built.
* *Optional*: The **Use sandbox account** checkbox should be enabled if the Salesforce environment is a sandbox (test) environment.

Click **Save** to continue. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e7f9822-salesforce-ig-extension-details.png",
        "salesforce-ig-extension-details.png",
        1600,
        250,
        "#f3f3f3"
      ]
    }
  ]
}
[/block]
###Establishing Salesforce Service Cloud Rules to Perform Actions on PagerDuty Updates

In Salesforce Service Cloud, ensure that you’ve built rules that specify what should happen to the case object and fields when PagerDuty sends an update back to Salesforce Service Cloud.

1. Navigate back into Salesforce Service Cloud's Rulesets tab, and create a new ruleset and/or rule.
2. Specify **PagerDuty Update** and select the conditions that best fit the action you would like to perform.

After specifying the condition, specify the action you would like to be performed such as Setting the Case Value.

#FAQ

##Can you automatically create an incident in PagerDuty once a Salesforce Case meets certain criteria?

Yes. After specifying your evaluation conditions, select that you want to “Create an incident on a service in PagerDuty”, and select a relevant service to notify.

##If I’m a Managed Service Provider, or would like to create new cases in Salesforce based on information I get from other integrations, can I do that with this integration?

Yes. When you’re defining the rule, make sure you select **On PagerDuty Update** instead of Case create/update, specify what conditions to look for on a PagerDuty update, and what you would like Salesforce to do when it meets that criteria. For example, if you want to automatically create a Salesforce Case when a PagerDuty Incident is created on Service “XYZ”, you would have a Ruleset that looks like the following:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/004a337-salesforce-ig-faq-example.png",
        "salesforce-ig-faq-example.png",
        1600,
        777,
        "#fcfcfc"
      ]
    }
  ]
}
[/block]
Make sure you also use **Set Case field value** for *ALL* required fields in your Salesforce Case Object.