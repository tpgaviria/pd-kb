---
title: "Account Subdomains"
slug: "change-account-subdomain"
hidden: false
createdAt: "2017-02-07T23:33:58.062Z"
updatedAt: "2019-06-07T23:52:49.365Z"
---
PagerDuty accounts are accessible via a personalized subdomain. If your company name is EveryNine Inc, you can set your account's subdomain to everynine.pagerduty.com, e9inc.pagerduty.com, or anything else as long as it is four or more characters long.

#Changing Subdomains

If you would like to change your account's subdomain for any reason, please be mindful of the following:

1. Integration email addresses for your PagerDuty services will change.
2. Users will not be notified by PagerDuty of the subdomain change. You will need to communicate the change to other members of your team so they know when and why the old subdomain will no longer be accessible.
3. Although push notifications can still be received, the mobile app will not load and users will need to log out and log back into the app:

    **iOS:** Tap :fa-bars: and go to **Accounts**, tap **Edit**, then tap :fa-minus-circle: next to the account.
    **Android:** Tap :fa-bars: and go to **Accounts**, tap :fa-ellipsis-v: next to the account, then tap **:fa-trash: Remove this Account**.

    If these steps don't work, you can reset the app in your device settings:

    **iOS:** Settings :fa-arrow-right: PagerDuty :fa-arrow-right: Reset :fa-toggle-on:
    **Android:** Settings :fa-arrow-right: Applications :fa-arrow-right: PagerDuty :fa-arrow-right: Clear Cache


4. If you have [Single Sign On](https://support.pagerduty.com/docs/sso) enabled, you will need to adjust your IdP settings to reflect your new PagerDuty subdomain.
5. There is a minimum of four characters for PagerDuty subdomains.

##Recommended Steps

To prevent any interruption in your alerting, we recommend using the following action plan  to make the necessary changes above before changing your subdomain. 


[block:parameters]
{
  "data": {
    "h-0": "Action",
    "h-1": "Additional Information",
    "0-0": "Notify users about the upcoming subdomain change",
    "0-1": "[Sample email template](https://support.pagerduty.com/docs/change-account-subdomain#section-sample-email-communication) provided",
    "1-0": "Add new email integration addresses in existing integrations",
    "1-1": "* Recommended to limit impact on alerting\n* Otherwise, existing email integration addresses can be swapped with new\nones after the subdomain change. (**NOTE**: Any emails sent to email\nintegration addresses with the old subdomain will not trigger incidents\nafter the subdomain change is complete.)",
    "2-0": "Remove old email integration addresses or add new ones",
    "2-1": "If new email integration addresses were added prior to the subdomain change, remove old email integration addresses from existing integrations for security.",
    "3-0": "Change REST API URL endpoints",
    "3-1": "Any existing scripts hosting v1 REST API URL endpoints need to reflect the new subdomain.",
    "4-0": "Change SAML endpoint URL",
    "4-1": "If SSO is configured, adjust your SAML Endpoint URL to reflect the new subdomain."
  },
  "cols": 2,
  "rows": 5
}
[/block]
When you are ready to change your subdomain, please [contact our support team](mailto:support@pagerduty.com) and a support agent can coordinate a date and time to change your subdomain for you. The change will be effective immediately.
[block:api-header]
{
  "type": "basic",
  "title": "Sample Email Communication
</Callout>


## In preparation for the subdomain change

> Hi Team,
> 
> On `MM/DD/YY` at `HH:MM PM/AM PDT`, our PagerDuty subdomain will be changed from `xxxx`.pagerduty.com to `yyyy`.pagerduty.com. This means that our email integration addresses will change. We will be working on making these adjustments to our existing integrations and scripts.
> 
> Please note that after the subdomain change, you will still receive push notifications for your incidents however you will need to log out and log back in to the mobile app to view and take action on incidents. You will also need to use `yyyy`.pagerduty.com to log in to the web app after the subdomain change, as `xxxx`.pagerduty.com will no longer be accessible.
> 
> To log out of the mobile app:
> 
> * iOS: Tap the menu icon and go to Accounts, tap Edit, then tap the remove icon next to the account.
> * Android: Tap the menu icon and go to Accounts, tap the options icon next to the account, then tap Remove this Account.
> 
> If these steps don't work, you can reset the app in your device settings:
> 
> * iOS: Settings → PagerDuty → Reset switch to ON position
> * Android: Settings → Applications → PagerDuty → Clear Cache
> 
> Please plan on logging out and logging back in to the mobile app immediately after `MM/DD/YY` at `HH:MM PM/AM PDT` to ensure that you can view and take action on your incidents via the mobile app.
> 
> Please let us know if you have any questions.

## After the subdomain change is complete

> Hi Team,
> 
> This is an update that the subdomain change has been completed.
> 
> As a reminder, you must log out and log back in to the mobile app to view and take action on incidents via the mobile app. You must also access `yyyy`.pagerduty.com to go to the web app.
> 
> To log out of the mobile app:
> 
> * iOS: Tap the menu icon and go to Accounts, tap Edit, then tap the remove icon next to the account.
> * Android: Tap the menu icon and go to Accounts, tap the options icon next to the account, then tap Remove this Account.
> 
> If these steps don't work, you can reset the app in your device settings:
> 
> * iOS: Settings → PagerDuty → Reset switch to ON position
> * Android: Settings → Applications → PagerDuty → Clear Cache