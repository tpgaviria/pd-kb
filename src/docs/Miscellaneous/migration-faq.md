---
title: "Migration FAQ"
slug: "migration-faq"
hidden: true
createdAt: "2019-07-25T21:08:52.112Z"
updatedAt: "2020-10-08T21:23:08.643Z"
---
#FAQ: General

##How will this migration process work?

**Short description**: See [this deck](https://pagerduty.box.com/s/gqb539miym8rv27vs4h6yf1w327eiq3j) for a diagram outlining the migration process.

**Long description**: PagerDuty will be assisting in migrating, or copying over, your configuration on a predetermined migration date. This migration will copy over your user profile, schedules, escalation policies, etc. and will not impact your existing PagerDuty account. All services will be migrated in a **Disabled** state so that no incidents will trigger on your new account during this migration (incidents will still trigger normally on your existing account).  After this migration is complete, you will have **5 business days** to log in to your new account to review what was migrated and configure any integrations or extensions that were not able to migrate. After 5 business days, there will be a brief cutover period where PagerDuty will **activate** all of your services in your new account and **disable** all of your services in your existing account. When this happens, your incidents will start to trigger on your new account and will stop triggering on your existing account.

##What changes should I expect throughout this migration process?

**Before the migration date**:
* Your account may need to upgrade to [advanced permissions](https://support.pagerduty.com/docs/advanced-permissions).   
* Your teams may need to be put into a [team hierarchical](https://support.pagerduty.com/docs/team-hierarchy) structure. 

**On the migration date**:
* You will start to receive on-call handoff notifications for your schedules and escalation policies on the new account.
* You may receive an automated email inviting you to log in to to the new account.

**After the migration date**:
* You may have incidents triggering on both accounts for a brief amount of time during the cutover (period (while services are enabled on the new account and disabled on your existing account).

##What will and will not be migrated by PagerDuty?
[block:parameters]
{
  "data": {
    "h-0": "PagerDuty will migrate",
    "h-1": "PagerDuty will not migrate (with approx time to manually configure)",
    "0-0": "* Users and their notification rules\n* On-call schedules and escalation policies\n* Services \n* Integration keys (both email and API)\n* Some extensions (see below for full chart of extensions that will migrate) \n* Add-ons\n* Conference bridges\n* Teams\n* Response plays",
    "0-1": "* Some extensions (see below for full chart of extensions that will not migrate) - approx time. 3 min/extension\n* API Access keys (for the REST API) - approx time. 5 min/key\n* REST v1 API URL endpoints  - approx time. 2 min/endpoint\n* Object IDs - approx time. 2 min/objectID\n* Incident history - approx time. 5 min/download\n* Postmortems - approx time. 2 min/download\n* Timezone of the System, Team, and User reports (these are based on the account level time zone) - cannot be migrated\n* Event rules (global and service-level rulesets) and account-level integration keys (located under **Services** :fa-arrow-right: **Event Rules**)\n* Any beta features - approx time. 5 min per feature"
  },
  "cols": 2,
  "rows": 1
}
[/block]
##What extensions will and will not migrate?
[block:parameters]
{
  "data": {
    "h-0": "Extensions that will migrate",
    "h-1": "Extensions that will not migrate",
    "0-0": "* Generic v1 webhook\n* Generic v2 webhook\n* Custom incident actions\n* Slack (new✴ and legacy)",
    "0-1": "* HipChat (new✴  and legacy)\n* ServiceNow (v4.0+)\n* Statuspage.io✴✴\n* JIRA (server and cloud/software)"
  },
  "cols": 2,
  "rows": 1
}
[/block]
✴ New Slack and New HipChat extensions will migrate and appear on your services after the migration. However, steps will need to be taken to re-authenticate the extensions and specify which channel or room the extension should authenticate to. The ideal time to authenticate the new chat extensions is immediately after the cutover to minimize any downtime and ensure users on the source account are able to use their existing chat extension until the cutover.
✴✴ Statuspage.io extensions will migrate, however the integration itself will need to be re-authenticated on the statuspage.io side to point to the appropriate service(s) on the new, migrated account.

#FAQ: Integrations, Triggering Incidents, and the API

##Terminology to Know

Before reading the below FAQs, please note the following terms and definitions:

**Integration key**: The email and API keys which are used to trigger PagerDuty incidents. These keys are located in the **Integrations** tab of your service's page. Email integration keys are in this format: `sample@yoursubdomain.pagerduty.com`. API integration keys are a 32-character string. 

**API Access Key**: These are 20-character string keys which are used to access the PagerDuty REST API. API Access Keys can be created by an Admin under **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **API Access** *or* by an individual user (if you are using [advanced permissions](https://support.pagerduty.com/docs/advanced-permissions)) under the **User Settings** tab of their profile page.

**Source Account**: The PagerDuty account from which objects will be migrated.

**Destination Account**: The PagerDuty account to where objects will be migrated.

**Migration Date**: Date when objects from Source will be copied to Destination:
* Incidents will still trigger in Source
* Source objects will be muted in Destination

**Cutover Date**: Date when migrated objects from Source will be **live** in Destination: 
* Incidents will now trigger in Destination
* Incidents will NOT trigger in Source

**Locking Date**: Date when the Source account will be locked, 5 business days after the Cutover date.

##Are all of my integration keys going to migrate to the new account?
Instead of "migrating" or "copying over" your existing integration keys, PagerDuty is going to **map** them to new ones which will be created on the new account.

##Will integrations with monitoring tools (i.e. New Relic, Sensu, DataDog, email, etc.) stop working after the migration?
No. When PagerDuty is in the process of migrating your configuration into the new account, there will be no impact to your existing PagerDuty account. Your existing account will continue to operate normally and incidents will continue to trigger normally. 

##Will incidents start triggering on both PagerDuty accounts at the same time after the migration is complete?
No. After the migration is complete, incidents will continue to trigger on your existing account and will not trigger on the new account. Incidents will stop triggering on your existing PagerDuty account after your services on the new account are enabled/activated and the services on your existing account are disabled/deactivated. This process will happen 5 business days after PagerDuty completes the migration. This process will mark the cutover date when incidents will start to trigger on the new account and completely stop triggering on your existing account.

##When will my incidents start to trigger on the new account?
Incidents will start to trigger 5 business days after PagerDuty has migrated your account. A cutover date and time will be established with your PagerDuty account owner to enable/activate your migrated services on the new account and to disable the services on your existing account. This cutover will **start** triggering incidents on the new account and **stop** triggering incidents on your existing account. 

##What does "enabling/activating" and "disabling/deactivating" a service mean?
PagerDuty services can be enabled and disabled. An enabled service can trigger incidents. A disabled service cannot trigger incidents.

##Will I need to reconfigure all of my integrations keys so that they start triggering incidents on the new account?
No. All email and API integration keys will be mapped to new integration keys located in your services on the new account. This means that you will not need to reconfigure your integration keys as they will still continue to trigger incidents after the migration. 

##Will I need to re-configure any integrations with tools that requires a REST API key?
**Yes**. If you are using an integration that requires a REST API key, then you will need to create a new REST API key on the new account and enter in that new key into your integration's configuration. [Here is a list of documented PagerDuty integrations that require a REST API key](https://support.pagerduty.com/v1/docs/using-the-api#section-integrations-that-require-rest-api-access). The ideal time to update the API key within your tooling depends on the tool you are using. If the tool allows you to connect to multiple API keys, add it in as a second key prior to the cutover so there is no downtime. If the tool only allows you to connect to a single API key, update the key immediately after the cutover.

##Can I add a new integration key to my services on or before the migration date?
**No**. Do **not** create any new integration keys on the migration date and 24 hours prior to the migration date. PagerDuty will be making a copy of your existing integration keys and mapping them to new integration keys on the new account. Creating a new integration key on the day of or less than 24 hours prior to the migration date opens up the risk of PagerDuty not "catching" your new integration key so that it can be mapped to a new integration key on the new account. 

##What is the difference between the events API and the REST API?
The events API is used to trigger incidents from a monitoring tool and requires a 32-character integration key on your PagerDuty service. The REST API is used to read, write, and update PagerDuty information and configuration and requires a 20-character API Access Key, which can be generated in your user profile under the **User Settings** tab (**Note** that you can also create incidents through the [v2 Incident Create REST API](https://v2.developer.pagerduty.com/docs/incident-creation-api)).  

[Learn more about the difference between the events and REST API](https://support.pagerduty.com/v1/docs/apis)

#FAQ: Account Access

##When will I get access to the new account?
You will receive an email invitation to log in to the new account when the migration is complete. 

#FAQ: What to do Before and After the Migration Date

##What actions are required from me before the migration date?
* Remove any un-used services, escalation policies, schedules, etc. from your account to ensure that necessary objects and configuration are moved to the new account.
* Clean-up and/or create new schedules, escalation policies, etc. that you will want to migrate into the new account *before the migration date. Any configuration added to your account after the migration date will not be migrated for you.*
* Customer Success will reach out directly to you if there is a naming conflict between your configuration and what already exists in the new PagerDuty account. In which case, you will be required to rename your schedules, escalation policies, services, and email integration prefixes that may already exist on the new account.
* Customer Success will notify you if any additional actions are required.
* Ensure that the destination account does not have email domain restrictions. You can check this by navigating to your **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Account Settings** tab and scroll to **Email Domain Restriction**. Ensure that both **Login Email Address** and **Contact/Notifications Email Address** are both **unchecked** and click **Update Email Domain Settings. You may put restriction back in place after the migration is complete.

##What actions are required from me after the migration date?

After the migration is complete, you will have **5 business days** to log in to the new account and prepare for incidents to start triggering on this account. **This is important, since not every single part of your PagerDuty configuration is able to migrate**. Below is a table with a list of action items that you should complete within **5 business days** after the migration has completed to ensure that you are ready for incidents to start triggering on the new account:
[block:parameters]
{
  "data": {
    "h-0": "Action Item",
    "h-1": "Description",
    "h-2": "Resources",
    "0-0": "* Log in to the new account\nand review/confirm your user profile",
    "0-1": "Review your user profile and verify that all of your contact information and notification rules are correct.",
    "0-2": "N/A",
    "1-0": "* Configure extensions on your services",
    "1-1": "Not all extensions will migrate. Review the extensions that you are using and reconfigure them on the new account",
    "1-2": "**Popular example extensions that do not migrate**:\n* [HipChat extension guide](https://www.pagerduty.com/docs/guides/hipchat-extension-guide/)\n* [StatusPage.io](https://www.pagerduty.com/docs/guides/statuspage-io-integration-guide/)\n\n**Will migrate, but will need to be re-authenticated**:\n* [Slack extension guide](https://www.pagerduty.com/docs/guides/slack-integration-guide/)",
    "2-0": "* Create API Access Keys",
    "2-1": "API Access Keys are located on the **Apps & Add-ons** :fa-th-large: :fa-arrow-right: **API Access** page. Personal API Access Keys are located on the User Settings tab of your user profile. These keys cannot be migrated across accounts so new ones will need to be generated.",
    "2-2": "Some PagerDuty-documented integrations require an API Access Key. Check [this list](https://support.pagerduty.com/v1/docs/using-the-api#section-integrations-that-require-rest-api-access) to see if an integration you are using requires an API Access Key. If you require a Read Only API Access Key, then you can create one in your user profile on the User Settings tab.",
    "3-0": "* Configure new Object IDs in your scripts",
    "3-1": "If you are referencing a specific object ID in PagerDuty's REST API, then you will need to modify that object ID in your scripts based on the new one generated on the new account after the migration.",
    "3-2": "[Learn more](https://v2.developer.pagerduty.com/docs/getting-started) about PagerDuty’s REST API",
    "4-0": "* Download Webcal feeds or iCal files",
    "4-1": "Webcal feeds and iCal files are specific to a user's profile and a schedule. If you are currently using these feeds or files, you will need to download new ones from your profile and/or schedule in the new account",
    "4-2": "[Exporting webcal feeds and iCal files](https://support.pagerduty.com/docs/schedules-in-apps#section-calendar-apps)",
    "5-0": "* Log in to the new account from the mobile app",
    "5-1": "This will ensure that you are able to access your incidents that will start to trigger on the the new account.",
    "5-2": "Make sure you are on version 4.5 or above of the PagerDuty mobile app so that you can log in to multiple accounts at the same time by going to the mobile app :fa-bars: menu :fa-arrow-right: **Accounts**. Use the new subdomain as the subdomain to log in.",
    "6-0": "* Download Incident history *(optional)*",
    "6-1": "Incident data and history will not migrate.",
    "6-2": "Incident data can be downloaded from **Analytics** :fa-arrow-right: **Reports** :fa-arrow-right: **Incidents** tab.",
    "7-0": "* Download postmortems *(optional)*",
    "7-1": "Postmortems reports will not migrate.",
    "7-2": "Postmortems can be downloaded from **Incidents** :fa-arrow-right: **Postmortems**. Click to view a Postmortem and Save as PDF."
  },
  "cols": 3,
  "rows": 8
}
[/block]
##Can I create new services, schedules, etc. on my existing account when the migration is done?
Yes, you can still manage your existing configuration, *however*, any changes that you add to your existing account will not migrate over to the new account after PagerDuty finishes the migration. In other words, if you want your configuration to migrate over to the new account, then make sure that the configuration is already in place on your existing account before the migration date, *or* make sure to add your configuration to the new account when you get access to it.

##What will happen to our existing PagerDuty account after the cutover?
Your existing account will remain accessible for **5 business days** after the cutover to allow users to download remaining incident history and postmortems. After **5 business days**, your account will be deactivated and no longer accessible.