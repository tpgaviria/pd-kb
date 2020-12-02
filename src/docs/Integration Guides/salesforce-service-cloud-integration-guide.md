---
title: "Salesforce Cloud Integration Guide | PagerDuty"
slug: "salesforce-service-cloud-integration-guide"
hidden: false
createdAt: "2020-02-13T23:52:45.638Z"
updatedAt: "2020-10-09T23:28:06.292Z"
---
# Salesforce Cloud + PagerDuty Integration Benefits

* Orchestrate responses and actions around customer issues, sales opportunities, and other activities across your organization.
*  Customize when to notify the proper on-call team about relevant activities occurring in Salesforce Cloud.
*  Create and/or update Salesforce Cloud objects with relevant information as soon as there’s a PagerDuty update such as an acknowledge, resolve, reassign, etc.
*  Keep your teams up-to-date with synced notes between PagerDuty and Salesforce Cloud so they can provide relevant updates to customers.
*  Work where you are: set incident priority, run response plays and reassign incidents, all within the Salesforce Cloud interface. 
*  Compatible with any Salesforce Cloud standard object present in your account.
*  Each PagerDuty subdomain can be connected to multiple Salesforce Cloud objects to streamline cross-organizational collaboration.
[block:callout]
{
  "type": "info",
  "title": "Looking for a different version?",
  "body": "The [Salesforce Service Cloud V1 integration](https://support.pagerduty.com/docs/salesforce-service-cloud-v1-integration-guide) is also available."
}
[/block]
# How it Works

* Once a Salesforce Cloud object is connected to your PagerDuty instance, new record creations and updates on that object are evaluated against rules that you predefine. If the rule criteria is met, PagerDuty will perform actions specified by those predefined rules.
* PagerDuty can also send information to Salesforce Cloud, where you can define the evaluation criteria against the updates made in PagerDuty and select an action to be performed in Salesforce Cloud.

# Requirements

**In Salesforce Cloud**:
* Permissions to Install Salesforce Managed Package applications.
* A Salesforce Professional, Unlimited or Enterprise edition, which can allow Apex classes to be run from a Managed Package.
* Ensure that API Access is enabled on your Organization. Salesforce Organizations in Trial Mode will normally not have API access enabled.

**In PagerDuty**:
* The Salesforce Cloud integration is only available to accounts on Business or Digital Operations plans. Please contact our Sales Team if you would like to upgrade to a plan featuring the Salesforce Cloud integration.
* A Global Admin or Account Owner base role is required for configuration. If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on Checking Your User Role or Changing User Roles.

# Updating the Salesforce Managed Package Version
[block:callout]
{
  "type": "warning",
  "body": "If you have already configured the previous version, in order to preserve your previously created rules and rulesets, we recommend that you never uninstall the previous version of the Salesforce managed package. Instead, you can follow the instructions below to update the managed package.",
  "title": "Do Not Uninstall Previous Version"
}
[/block]
**In Salesforce**:

1. Log in as a Salesforce Admin and search for the **PagerDuty** app in the AppExchange. 
2. Click **Get It Now**  to download most recent version of the app.
3. Continue with the **Integration Walkthrough** below. 

# Integration Walkthrough

## In PagerDuty

1. Navigate to the **Apps & Add ons** :fa-th-large: icon at top right of the page, select **API Access** and click **Create New API Key**.
2. Enter a **Description** (e.g. “Salesforce Cloud API Key”) and click **Create Key**.
3. On the next screen, **copy the API Key** and **paste it in a safe place for future use**. **Note**: You will not have access to this key after this screen. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/57b0cce-salesforce-ig-new-api-key.png",
        "salesforce-ig-new-api-key.png",
        1116,
        872,
        "#f4f3f2"
      ]
    }
  ]
}
[/block]
## In Salesforce Cloud

4. Next, you will set up the API connection between PagerDuty and Salesforce Cloud. In the Salesforce AppExchange, search **PagerDuty** and **install the app**.
5. Once installed, in your Salesforce Cloud account, click the **cog icon** on the right hand side and select **Setup**.
6.  In the Setup console, search for and click **Named Credentials**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/68d217f-salesforce-ig-named-credentials.png",
        "salesforce-ig-named-credentials.png",
        502,
        470,
        "#ebf0f4"
      ]
    }
  ]
}
[/block]
7. Click the **New Named Credential** button and enter the following information in the fields on the next screen:


   a. **Label**: PagerDuty_API
   b. **Name**: PagerDuty_API
   c. **URL**: `https://api.pagerduty.com`
   d. **Certificate**: null
   e. **Identity Type**: Named Principal
   f. **Authentication Protocol**: Password Authentication
   g. **Username**: PagerDutyAPI
   e. **Password**: Paste the PagerDuty API Key (generated in step 3 of the In PagerDuty section, above).
   f. **Callout Options**:

   * Generate Authorization Header: UNCHECK
   * Allow Merge Fields in HTTP Header: CHECK
   * Allow Merge Fields in HTTP Body: UNCHECK
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f70a03b-salesforce-ig-callout-options.png",
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

8. Next, you will set up the PagerDuty extension using Salesforce Cloud OAuth. 

* **Mac OS**: On your machine, open the **Terminal** app. 
* **Windows OS**: You will need to download [OpenSSL](https://www.xolphin.com/support/OpenSSL/OpenSSL_-_Installation_under_Windows) to perform the following terminal command.

Enter the following command in the Terminal app or OpenSLL and press **Return/Enter**:

`openssl req -x509 -nodes -subj "/C=US/ST=CA/L=San Francisco/CN=pagerduty.com" -days 3650 -newkey rsa:2048 -keyout nameOfSharedKey.pem -out nameOfSalesforceCertificate.pem`

This will generate a X.509 certificate and a shared key as a local file on your computer (it will not generate in Terminal). To find the files, open **Finder** on Mac or click **File** on PC, search for `nameOfSalesforceCertificate.pem` and `nameOfSharedKey.pem` and open the files with a text editor program. These will display the certificate and shared key that you will be using in later steps, so leave the files open for now.

9. Next, in Salesforce Cloud, click the right hand **cog** and select **Setup**. In the left hand menu, select **Apps** then **App Manager** and click **New Connected App** on the right hand side. Enter the following details:


* **Connected App Name**: PagerDuty
* **API Name**: PagerDuty
* **Contact Email**: Your preferred email address.
* **API (Enable OAuth Settings)**: CHECK
* **Callback URL**: Can use any URL (e.g. `http://localhost`). This is a required field in Salesforce Cloud, but it is not used by PagerDuty.
* **Use Digital Signatures**: CHECK. Once checked, click **Choose file** and select the `nameOfSalesforceCertificate.pem` file that was created from the Terminal command in step 8.
* **Selected OAuth Scopes**: 
   * Select `Access and manage your data (api)` and click **Add**.
   * Select `Perform requests on your behalf at any time (refresh_token, offline_access)` and click **Add**.

Click **Save**. You may see the following prompt after saving: `Allow from 2-10 minutes for your changes to take effect on the server before using the connected app.` Click **Continue**.

10. Click **Edit Policies** and select **Admin approved users are pre-authorized** in the Permitted Users field, click **Save**. On the next screen, click **Manage**, scroll down to the Profiles section and click **Manage Profiles**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e0897ea-salesforce-permitted-users.png",
        "salesforce-permitted-users.png",
        844,
        810,
        "#e9e8ea"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/aafef66-salesforce-manage-profiles.png",
        "salesforce-manage-profiles.png",
        760,
        214,
        "#eeeeee"
      ]
    }
  ]
}
[/block]
11. Next, **check** the box next to the Profile of the user who will be sending the request from PagerDuty to Salesforce Cloud and click **Save**.
12. If you do not have a `System Administrator` user role in Salesforce, navigate to your **User Profile**, and click **Edit Assignments** under the the Permission Set Assignments section. Add the `PagerDutyAdministrator` permission set from **Available Permission Sets** to the **Enabled Permission Sets** column, and click **Save**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/510a441-PD-Permission-Column.png",
        "PD-Permission-Column.png",
        1794,
        756,
        "#f3f3f3"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f424cdd-PD-PermissionSet.png",
        "PD-PermissionSet.png",
        3276,
        916,
        "#e7eaed"
      ]
    }
  ]
}
[/block]
13. Finally, navigate back to **Apps** → **App Manager**, click the dropdown to the right of the **PagerDuty** connected app and select **View**. You will be using information from this screen in the steps in PagerDuty, below. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/178f7c2-salesforce-view-pd-app.png",
        "salesforce-view-pd-app.png",
        1957,
        1105,
        "#ededee"
      ]
    }
  ]
}
[/block]
## In PagerDuty (Cont.)

14. Navigate to **Apps & Add-Ons** :fa-th-large:, select **Extensions** and click **New Extension**. Enter the following information:


* **Extension Type**: Search and select **Salesforce (OAuth Flow)**.
* **Name**: Provide a name for this extension.
* **Service**: Select which **service** this webhook should be tied to.
* **Consumer Key**: Copy the **Consumer Key** from the Connected App screen in Salesforce Cloud and paste it in this field in PagerDuty.
* **Username**: Enter the Salesforce Cloud Username of the user who will be sending webhooks from PagerDuty.
* **Salesforce Shared Key**: Copy the shared key from the `nameOfSharedKey.pem` file you opened on your computer in earlier steps and paste the contents in here. It should look similar to the following, and you need to include the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c983bd8-salesforce-private-key.png",
        "salesforce-private-key.png",
        936,
        802,
        "#5b5252"
      ]
    }
  ]
}
[/block]
* **Salesforce RestResource URL**: This can be left blank if you are using the PagerDuty out-of-the-box integration. If building a custom integration, you can specify where the PagerDuty webhooks will be delivered.

Click **Save** to continue.

15. If you would like to configure a connection between PagerDuty and **multiple Salesforce Cloud objects** in your account, continue to step 16 in the next section. If you are **only using the integration with the Case object**, skip to step 20.

## Configure Connection Between PagerDuty and Salesforce Cloud Objects 

16. In Salesforce Cloud, click the **cog** icon, select **Setup**, click **Objects and Fields** in the left hand menu and select **Object Manager**.
17. Click the **Label** name of the object on which you would like to create a trigger and click **Triggers** in the left hand menu. Click **New** on the right side of the screen. 
18. Enter the following text as a trigger body, replacing `[SALESFORCE-OBJECT]` with your Salesforce Cloud object:

```
trigger PagerDuty[SALESFORCE-OBJECT]Trigger on [SALESFORCE-OBJECT] (after insert, after update) {
    if (!System.isFuture() && !System.isBatch()) {
        String oldStr = JSON.serialize(Trigger.oldMap);
        String newStr = JSON.serialize(Trigger.newMap);
        if (!Test.isRunningTest()) pagerdutyinc.PagerDutyEngineLauncher.launchByTrigger(oldStr, newStr, Trigger.isInsert);
    }
}
```

**Example**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0c77984-salesforce-apex-trigger.png",
        "salesforce-apex-trigger.png",
        2124,
        620,
        "#f2f3f1"
      ]
    }
  ]
}
[/block]
19. Click **Save**. Repeat steps 15-18 for each object on which you would like to create a trigger. Once you are finished, continue to step 19. 
20. Next, you will set up rules to trigger the bi-directional integration. Click the **App Launcher** on the left hand side, search and then click **PagerDuty Configuration**.
21. In the SUMMARY tab, if the Named Credential was properly configured, the Connection should show an OK message in green text.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/54d7814-salesforce-ig-connection-ok.png",
        "salesforce-ig-connection-ok.png",
        1032,
        376,
        "#eeeff2"
      ]
    }
  ]
}
[/block]
In the OBJECT MAPPINGS tab:


* **Integration User Email**: Provide the email that belongs to the integration user who will be creating and updating the incidents in PagerDuty.
* **Sync Salesforce Comments to PagerDuty Notes (optional)**: You can sync the Salesforce Cloud Case Comments to PagerDuty Notes, but please be aware that syncing between the two may consume your API request limits in Salesforce Cloud.


22.  You are now ready to build rules that trigger actions bi-directionally between PagerDuty and Salesforce Cloud. Select the RULESETS tab. This is where you will build the rules that will specify what should happen to the object and fields when PagerDuty sends an update back to Salesforce Cloud. Click the **Add Ruleset** button on the right, enter a **Ruleset Name** and click **Save**. Click the **ruleset name** and click the **Add Rules** button. Enter a **Rule Name**, click **Save** and then click the **name** of the rule. Each rule will ask for conditions that should be met prior to performing the actions specified in the latter part of the rule definition. 
23. In the **Choose SalesForce Object** field, search and select the **Salesforce Cloud object** that you would like to map to PagerDuty based on this rule’s criteria. 
24. Next, depending on the direction you would like actions to be triggered, make the following selection in the **Run rule on** section:

* **Salesforce to PagerDuty Actions**: Select **[OBJECT-LABEL] create or update**.

OR

* **PagerDuty to Salesforce actions**: Select **PagerDuty incident create or update**.


25. Under **When**, depending on your preferences, select **All conditions are met** OR **Any conditions are met**.
26. Click **Add Condition**. Under **Choose Field**, you will have the option to choose fields from PagerDuty or from your Salesforce Cloud object that this rule will run on. 
The following **PagerDuty Fields** are available:


* **Event Type**: Run the rule based on the [type of PagerDuty event](https://support.pagerduty.com/docs/incidents). Trigger, Acknowledge, Resolve, Assign, Escalate, [Custom](https://support.pagerduty.com/docs/custom-incident-actions) or [Delegate](https://support.pagerduty.com/docs/reassigning-and-delegating-incidents).
* **Incident Title**: Run the rule based whether the PagerDuty incident Title matches a predefined string. 
* **Incident Status**: Run the rule based on the [PagerDuty incident’s status](https://support.pagerduty.com/docs/incidents). Triggered, Acknowledged or Resolved.
* **PagerDuty Service**: Run the rule based on events generated by a [selected PagerDuty service](https://support.pagerduty.com/docs/services-and-integrations). 
* **PagerDuty Service Name**: Run the rule based on events generated by a PagerDuty service name that matches a predefined string. 
* **PagerDuty Escalation Policy**: Run the rule based on incidents assigned with a [selected PagerDuty escalation policy](https://support.pagerduty.com/docs/escalation-policies). 
* **PagerDuty Escalation Policy Name**: Run the rule based incidents assigned with a PagerDuty escalation policy name that matches a predefined string. 
* **PagerDuty Incident Priority**: Run the rule based on the selected [incident priority](https://support.pagerduty.com/docs/incident-priority).
* **Urgency**: Run the rule based on the selected [incident urgency](https://support.pagerduty.com/docs/dynamic-notifications).

The available **Salesforce Fields** vary by object label and account configuration. Please search for your object’s fields in [Salesforce’s documentation](https://help.salesforce.com/home) for more details.
 
Next, select an **Operation** and enter a **value** to complete the condition. You may choose to add multiple conditions for each rule. Once you are done adding your conditions, proceed to step 26.

27. Next, click **Add Action** and select a PagerDuty Action or Salesforce Cloud Action. You may choose multiple actions to be triggered from each rule.


**PagerDuty Actions**: 
* **Create new Incident, if there are no linked incidents**: If rule conditions are met, create a PagerDuty [incident](https://support.pagerduty.com/docs/incidents).
* **Acknowledge Incident**: If rule conditions are met, acknowledge the PagerDuty incident.
* **Resolve Incident**: If rule conditions are met, resolve the PagerDuty incident.
* **Set Incident Priority**: If rule conditions are met, set the PagerDuty incident’s [priority](https://support.pagerduty.com/docs/incident-priority) to a specified value. 
* **Run Response Play**:  If rule conditions are met, run a specified [response play](https://support.pagerduty.com/docs/response-automation) on the incident. 
* **Reassign**: If rule conditions are met, [reassign](https://support.pagerduty.com/docs/reassigning-and-delegating-incidents) the PagerDuty incident.

**Salesforce Cloud Actions**:
* **Set [SALESFORCE-OBJECT] field value**: If rule conditions are met, set an object’s specified field value.
* **Create new [SALESFORCE-OBJECT]**: If rule conditions are met, create a new specified object.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f4f244-salesforce-actions.png",
        "salesforce-actions.png",
        844,
        576,
        "#f4f4f5"
      ]
    }
  ]
}
[/block]
28. Click **Save** to complete the rule configuration. Navigate back to the RULESETS tab and click the toggle switch next to your ruleset to **Enabled**. The integration is now complete. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/33a1d64-salesforce-enable-ruleset.png",
        "salesforce-enable-ruleset.png",
        948,
        456,
        "#f5f5f5"
      ]
    }
  ]
}
[/block]
29. Finally, navigate back to your PagerDuty account and click **Services**, select **Service Directory** and click the **name** of the service that you just connected to the Salesforce OAuth Flow webhook. [Manually trigger a test incident](https://support.pagerduty.com/docs/incidents#section-manually-trigger-an-incident) on this service.
30. Once the test incident has been triggered, return to Salesforce Cloud, click the **App Launcher** and search and select **PagerDuty Logs** to see if a webhook from PagerDuty arrives. When you receive the webhook, the integration is complete. If you do not receive the webhook, check your log management tool to troubleshoot why the webhook failed to deliver. 

# FAQ
## Can you automatically create an incident in PagerDuty once a Salesforce Cloud object meets certain criteria?

Yes. After specifying your evaluation conditions, select that you want to “Create an incident on a service in PagerDuty”, and select a relevant service to notify.

## What kind of permissions do users need to use this integration?

If you use custom permissions in Salesforce, you will need to ensure that agents have the correct permissions to use and access the PagerDuty integration. There are 4 permission sets included in the managed package that can be given to users.



[block:html]
{
  "html": "<div><table>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">PagerDutyAdministrator</td>\n\t\t\t<td>\nPagerDutyConfiguration\n</td>\n\t\t\t<td>read<br>write</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyIncident Mapping</td>\n\t\t\t<td>read<br>create<br>edit<br>delete</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyRules &amp; Rulesets</td>\n\t\t\t<td>read<br>create<br>edit<br>delete</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyConfiguration Tab</td>\n\t\t\t<td>on</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">PagerDutyAuditor</td>\n\t\t\t<td>PagerDutyConfiguration</td>\n\t\t\t<td>read</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyIncident Mapping</td>\n\t\t\t<td>read</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyRules &amp; Rulesets</td>\n\t\t\t<td>read</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyConfiguration Tab</td>\n\t\t\t<td>on</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">PagerDutyManager</td>\n\t\t\t<td>PagerDutyConfiguration</td>\n\t\t\t<td>read</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyIncident Mapping</td>\n\t\t\t<td>read<br>create<br>edit<br>delete</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyRules &amp; Rulesets</td>\n\t\t\t<td>read<br>create<br>edit<br>delete</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyConfiguration Tab</td>\n\t\t\t<td>on</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">PagerDutyUser</td>\n\t\t\t<td>PagerDutyConfiguration</td>\n\t\t\t<td>read</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyIncident Mapping</td>\n\t\t\t<td>read<br>create<br>edit</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyRules &amp; Rulesets</td>\n\t\t\t<td>read</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>PagerDutyConfiguration Tab</td>\n\t\t\t<td>off</td>\n\t\t</tr>\n\t</tbody>\n</table></div>\n\n<style>table , td, th {\n\tborder: 1px solid #595959;\n\tborder-collapse: collapse;\n}\ntd, th {\n\tpadding: 3px;\n\twidth: 30px;\n\theight: 25px;\n}\nth {\n\tbackground: #f0e6cc;\n}\n.even {\n\tbackground: #fbf8f0;\n}\n.odd {\n\tbackground: #fefcf9;\n}</style>"
}
[/block]
If you do not want to add permission sets to your users, you may check their profiles and ensure the profiles have similar object permissions for their user type. 

## If I’m a Managed Service Provider, or would like to create new cases in Salesforce Cloud based on information I get from other integrations, can I do that with this integration?

Yes. When you’re defining the rule, make sure you select On PagerDuty Update instead of object create/update, specify what conditions to look for on a PagerDuty update, and what you would like Salesforce Cloud to do when it meets that criteria. For example, if you want to automatically create a Salesforce Cloud Case object when a PagerDuty Incident is created on Service “XYZ”, you would have a Ruleset that looks like the following:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/586e01e-salesforce-ig-faq-example.png",
        "salesforce-ig-faq-example.png",
        1600,
        777,
        "#fcfcfc"
      ]
    }
  ]
}
[/block]
Make sure you also use Set [SALESFORCE-OBJECT] field value for ALL required fields in your Salesforce Cloud object.

## How can I troubleshoot my integration?
We have provided a logging tool to help troubleshoot problems in the integration. Under the LOGGER tab in the PagerDuty Configuration, you can turn on logging by selecting one of the following levels and clicking **Save**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b8bf52d-salesforce-logger.png",
        "salesforce-logger.png",
        1306,
        576,
        "#f8f9fa"
      ]
    }
  ]
}
[/block]