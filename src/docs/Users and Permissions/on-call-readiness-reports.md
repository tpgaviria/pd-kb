---
title: "On-Call Readiness Reports"
slug: "on-call-readiness-reports"
hidden: false
createdAt: "2020-09-18T02:33:09.555Z"
updatedAt: "2020-11-24T18:08:46.088Z"
---
On-Call Readiness Reports help organizations improve incident response quality by ensuring responders have optimal [notification rule configurations](https://support.pagerduty.com/docs/configuring-a-user-profile#notification-rules). When responders have well-configured notification rules, they are better prepared to go on-call and are less likely to miss notifications, decreasing Mean Time To Acknowledge. Every report provides a Team-filtered overview of each responders’ on-call readiness status, and can optionally send them email instructions on how to best configure their notification rules. 

<Callout type="info" title="Info">
On-Call Readiness Reports are available on Business and Digital Operations plans. Please [contact our Sales team](https://www.pagerduty.com/contact-us/) if you would like to upgrade your account to include On-Call Readiness Reports.",
  "title": "Note
</Callout>


# Create an On-Call Readiness Report

[block:callout]
{
  "type": "warning",
  "body": "Team Managers can create On-Call Readiness Reports for teams that they are Managers or members of. Admins and Account Owners can create On-Call Readiness Reports for all teams.",
  "title": "Required User Permissions
</Callout>


1. Navigate to **Analytics** :fa-arrow-right: **On-Call Readiness** and click **Create a New Report**.
2. **Readiness Profile**: You may *optionally* edit the name of the report by clicking the :fa-pencil-alt: next to the auto-populated name and clicking **Save Changes**. Next, select an on-call readiness profile:

   * [Never miss a page](https://support.pagerduty.com/docs/on-call-readiness-reports#never-miss-a-page)
   * [Try every notification method](https://support.pagerduty.com/docs/on-call-readiness-reports#try-every-notification-method)
   * [More than email](https://support.pagerduty.com/docs/on-call-readiness-reports#more-than-email)
   * [Must include phone](https://support.pagerduty.com/docs/on-call-readiness-reports#must-include-phone)

   Once selected, click **Next** to continue. 

3. **Search and Filter**: On the next screen, you will see that by default, the teams that you are a member of, or manager on, will be selected. If you wish to change these teams, search and select specific teams that you would like to target for improving readiness by clicking into the dropdown. Once you have selected your preferred team(s), click **Apply**.
4. Next you will see a preview of the selected Team’s/Teams’ **Readiness Summary** and **Readiness Details**. Click the team dropdown under Readiness Details to see a detailed view of how each user compares to the report’s criteria. Click **Next** to continue.

5. **Notify Users**: On the next screen, you will see a summary of the emails that will be sent to your selected responders. It will display:

   * **Recipients**: The number of recipients.
   * **Sender**: This will be PagerDuty by default. You may change this by clicking **Edit** and selecting the preferred sender from the dropdown and clicking **Save Changes**.
   * **Subject**: The default subject of the email.
   * **Documentation Link** *(optional)*: By default the email will direct users to follow documentation in the [PagerDuty Knowledge Base](https://support.pagerduty.com/). If you wish to link to internal documentation instead, you can do so by clicking **Add one**, pasting the documentation URL and clicking **Save Changes**.

6. Once you have reviewed the above information, you may click **Send Email** to send to the selected recipients, or **Save & Close** to save the report and email settings to be used at a later time. If you choose to send the email, click **Confirm** when the confirmation pop-up appears.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4ef053-on-call-readiness-email-template.png",
        "on-call-readiness-email-template.png",
        431,
        816,
        "#f3f6f4"
      ]
    }
  ]
}
[/block]
## Edit an On-Call Readiness Report

1. Navigate to **Analytics** :fa-arrow-right: **On-Call Readiness** and click the **Name** of the report. 
2. You may edit the following pages:
**Readiness Profile**: By default, the report will be at the **Search and Filter** teams step, but you may also change the Readiness Profile by clicking **Previous**. Once you have chosen your Readiness Profile, click **Next** to return to Search and Filter.
**Search and Filter**: You may edit your selected teams by clicking into the dropdown under **Search and select specific teams that you would like to target for improving readiness** and clicking **Apply**. Click **Next** to edit the email details. 
**Notify Users**: On this page you may edit the Sender by clicking **Edit**, selecting the sender from the dropdown, and clicking **Save Changes**. 

Once finished with edits to all of the above pages, click **Send Email** or **Save & Close** on the Notify Users page to save your changes.

## Edit On-Call Readiness Settings
[block:callout]
{
  "type": "warning",
  "body": "Admins and Account Owners can edit On-Call Readiness Settings.",
  "title": "Required User Permissions
</Callout>


To change the default On-Call Readiness profile to fit your organization:

1. Navigate to **Analytics** :fa-arrow-right: **On-Call Readiness** :fa-arrow-right: **Settings**. You may also find these settings by navigating to the **User Icon**(:fa-user:) :fa-arrow-right: **Account Settings** :fa-arrow-right: **On-Call Readiness**.
2. Select your preferred [default report profile](https://support.pagerduty.com/docs/on-call-readiness-reports#on-call-readiness-report-profiles) and click **Save Changes**.

# Delete an On-Call Readiness Report

1. Navigate to **Analytics** :fa-arrow-right: **On-Call Readiness**. 
2. Hover over the **Name** of your report and click the :fa-trash:. A confirmation pop-up will appear, click **Delete** to delete the report.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2701210-on-call-readiness-delete-report.png",
        "on-call-readiness-delete-report.png",
        259,
        41,
        "#f8f9fc"
      ]
    }
  ]
}
[/block]
# On-Call Readiness Report Profiles 

## Never miss a page

The **Never miss a page** profile ensures that responders have high urgency notification rules configured with every contact method (email, SMS, phone call, and push). It also ensures that they have delays set between the notification rules in case they miss the first notification.

## Try every notification method

The **Try every notification method** profile ensures that responders have high urgency notification rules configured with every contact method (email, SMS, phone call, and push) which provides resiliency in case of delivery failures. 

## More than email

The **More than email** profile ensures that responders have high-urgency notification rules configured with at least one non-email/silent contact method (SMS, phone call, or push).

## Must include phone

The **Must include phone** profile ensures that responders have high-urgency notification rules configured with phone call notifications. It also ensures that they have delays set between the notification rules to prevent them from receiving many notifications at the same time. This is usually the most reliable way to be woken up at night.

# On-Call Readiness Responder Emails

When a Team Manager or Admin sends out emails from the On-Call Readiness Report, the users from the selected teams that do not meet the report’s criteria will receive emails similar to the below, prompting them to configure their notification rules properly: 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/92a49e3-on-call-readiness-example-email.png",
        "on-call-readiness-example-email.png",
        597,
        538,
        "#eff4f1"
      ]
    }
  ]
}
[/block]
# Mobile Notification Rule Templates

Facilitate [notification rule](https://support.pagerduty.com/docs/configuring-a-user-profile#notification-rules) configuration by choosing one of our pre-made templates through the mobile app. 

New users downloading the PagerDuty mobile app for the first time will be going through an onboarding wizard, which includes fast and easy notification rule set-up using our [on-call readiness](https://support.pagerduty.com/docs/on-call-readiness-reports) notification rule templates. 

These templates include notification rule presets which were crafted to signify different levels of urgency. Choosing a template will clear other notification rules, and it will prompt users who already have custom rules to confirm they would like to apply these changes. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b072442-on-callreadiness-mobile-templates.png",
        "on-callreadiness-mobile-templates.png",
        610,
        584,
        "#e1e6e5"
      ]
    }
  ]
}
[/block]