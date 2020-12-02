---
title: "Billing, Invoices, and Payments"
slug: "billing-invoices-payments"
hidden: false
createdAt: "2017-02-07T23:21:02.463Z"
updatedAt: "2020-11-11T23:46:46.282Z"
---
[block:callout]
{
  "type": "warning",
  "body": "The Account Owner is the only user that has access to billing-related information in PagerDuty. \n\nIf you need access to view or change billing, invoice, or payment information for your account, you may find the account owner by going to **People** :fa-arrow-right: **Users** and looking for **Account Owner** in the **Role** column.",
  "title": "Required User Permissions"
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Accessing Invoices"
}
[/block]
Invoices are automatically sent to the account owner's login email address every month. They can also be viewed at by time by going to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Invoices**.

## Invoice Address

If you need a separate address to be displayed on your invoices, navigate to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Account Settings** tab :fa-arrow-right: **Update Billing Information**. Then update your address on the **Billing Information** tab. Click **Update** to save the address.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ce5d530-UpdateBillingAddress.png",
        "UpdateBillingAddress.png",
        791,
        716,
        "#f3f3f2"
      ]
    }
  ]
}
[/block]
## Invoice Emails

If another user or a member of your company's finance team would like to receive copies of the invoices each month, you can have them CC'd on all invoice and payment-related emails by going to **User Icon** :fa-arrow-right: **Account Settings**. Under the **Billing** section, enter the email address for the additional recipient in the **Invoice Email** field and click **Save changes**. Multiple email addresses can be entered here, but must be separated by commas.
[block:api-header]
{
  "type": "basic",
  "title": "User Charges"
}
[/block]
Your monthly user charge is determined by the highest number of full users on your account at any time during the month. A "full user" can have any type of role, as defined in your subscription plan. You can view the different full user license roles [here](https://support.pagerduty.com/docs/advanced-permissions#section-what-old-roles-do-the-new-roles-correspond-with-). Limited and Full Stakeholder users are billed for at a different rate as other users depending on your plan.

The number of users you currently have can be found by going to **People** :fa-arrow-right: **Users**. If you're the account owner, you can find the highest number of users in your account for the month by going to **User Icon** :fa-arrow-right: **Account Settings**.

## Purchasing more users

If you need to add users to your annual plan, you can do so by going to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Your Subscription** and clicking the **Add Users** button. This will co-term more users for your annual plan with a pro-rated amount based on when your annual subscription completes.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cdbfd9f-Account_Settings_-_PagerDuty.png",
        "Account_Settings_-_PagerDuty.png",
        162,
        47,
        "#62b90e"
      ]
    }
  ]
}
[/block]
There is no limit to the number of schedules, escalation policies, services, integrations, extensions, add-ons, or teams that can be added to your PagerDuty account. Also, users can be added to any number of schedules, escalation policies, or teams at no additional cost.
[block:api-header]
{
  "title": "Purchase Orders"
}
[/block]
If a Purchase Order Number is required on your invoices, you can add a PO number by going to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Your Subscription**. If this is a new account, you’ll need to select a subscription plan, or if you have an existing account, select **Add More Users**. Under the **Billing & Payment** section, enter your Purchase Order number and select **Complete Your Purchase** to save your changes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/03d86a4-Screen_Shot_2020-10-15_at_9.35.58_AM.png",
        "Screen Shot 2020-10-15 at 9.35.58 AM.png",
        1724,
        1268,
        "#f8f8f8"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Notification Charges"
}
[/block]
All PagerDuty customers have access to an unlimited number of email and mobile app push notifications for incidents and alerts, as well as unlimited phone and SMS notifications to numbers in the US and Canada. Customers on our Profesional, Business, or Digital Operations plans also have an unlimited number of international phone and SMS notifications.

If you're on a plan without unlimited international phone notifications, please be aware that all attempts by PagerDuty to call an on-call user are billable. This includes calls with no answer and no voicemail, as well as calls answered by voicemail (full or not).
[block:api-header]
{
  "type": "basic",
  "title": "Overage Charges"
}
[/block]
Customers without special pricing plans or unlimited international phone and SMS notifications will be charged $0.35 per notification over the number included with their plan.

You can can choose to receive a warning email when your account is near its quota for international notifications by going to **User Icon** :fa-arrow-right: **Account Settings**. Under the **Billing** section, enable the option **Contact me when my account nears the monthly limit of notifications** and click **Save changes**.
[block:api-header]
{
  "type": "basic",
  "title": "Updating Credit Card Information"
}
[/block]
Payment information can be added or updated by going to **User Icon** :fa-arrow-right: **Account Settings**. Click **Update Billing Information** if you want to change your payment method to credit card, update your existing credit card information, or add a new billing address.

If a user other than the account owner, or a member of your company's finance team would like to update this information, they can contact PagerDuty Support at 1-650-989-2965 option 3 to update the account's payment card information.
[block:callout]
{
  "type": "info",
  "body": "PagerDuty Support will never call you asking for credit card information over the phone.",
  "title": "Security Note"
}
[/block]

[block:api-header]
{
  "type": "basic",
  "title": "Credit Card Authorization Errors"
}
[/block]
If you receive a credit card authorization error, your new billing information will not be saved until the problem is corrected. In most cases authorization errors are due to address verification failure. PagerDuty verifies all billing information with your card issuer, so you may receive an authorization error even if the card has been accepted by other merchants who do not use address verification. Please make sure that you are not using an old or incorrect address, and that the postal code is correct as well.

If you recently updated your address with your card issuer and the card information you enter is not accepted by PagerDuty, please try again at a later time. Some card issuers take up to 72 hours to update your address, meaning address verification attempts will fail until this update is completed by your card issuer.

Authorization attempts may also fail if you are:

* Entering an unsupported card
We accept Visa, MasterCard, American Express, Discover and JCB.
* Entering an invalid security code
This is the 3 digit code on the back of the card if using Visa, MasterCard, Discover or JCB; or the 4 digit code above the 15 digit card number on the front of the card if using American Express.
* Entering an expired card
* Entering a card that has not yet been activated with the issuer
[block:api-header]
{
  "type": "basic",
  "title": "Annual Billing via Invoice"
}
[/block]
We allow payment via invoice (as opposed to credit card) for yearly prepayment plans.

Please [contact our sales team](mailto:sales@pagerduty.com) for a quote if you are interested in paying yearly instead of monthly.