---
title: "Single Sign-On (SSO)"
slug: "sso"
hidden: false
createdAt: "2017-05-10T19:41:52.534Z"
updatedAt: "2020-10-09T22:17:18.135Z"
---
PagerDuty can be configured with Single Sign-On (SSO) to external Identity Providers such as Microsoft Active Directory (using ADFS), Bitium, OneLogin, Okta, Ping Identity, SecureAuth and others using the SAML 2.0 protocol. Alternatively, your account can also be configured to support Google authentication using the OAuth 2.0 protocol (with user consent). SSO comes with the following benefits:

* **One-Click Corporate Login**: This eliminates the need for a separate PagerDuty username and password, which means one less thing to remember.
* **On-Demand User Provisioning**: PagerDuty user accounts are created on-demand once access is granted via the SSO provider.
* **Revoke User Access**: When an employee leaves the company, administrators can remove PagerDuty access within the SSO provider rather than having to log directly into PagerDuty.

# Configure Identity Provider Single Sign-On (SAML)
[block:callout]
{
  "type": "warning",
  "title": "Requirements",
  "body": "* Customers on our Professional, Business, and Digital Operations pricing plans have access to Single Sign-On.\n\n* Only Account Owners can configure Single Sign-On."
}
[/block]
To configure SAML SSO: 

1. Search for your Identity Provider’s [integration guide](https://www.pagerduty.com/integrations/) and follow the instructions in the guide. 
2. If the guide instructs you to paste information from your Identity Provider into your PagerDuty SSO configuration page, the **Account Owner** can access SSO settings by navigating to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Single Sign-On**. Select the **SAML** radio button to continue steps in the integration guide. **Note**: Not all identity providers require this step. Please defer to the instructions in the integration guide.
3. Configure your settings related to **Allow username/password login**, **Require EXACT authentication context comparison** and **Require signed authentication requests** depending on your integration guide’s instructions and your preferences.
4. *Optional*: Under **User Provisioning** you can choose to [**Auto-provision users on first login**](https://support.pagerduty.com/docs/sso#section-optional-attributes-for-auto-provisioning) or [**Redirect non-provisioned users**](https://support.pagerduty.com/docs/sso#section-redirect-non-provisioned-users).
5. Once you are finished with the steps in your integration guide, click **Save Changes** in PagerDuty. 

### Shibboleth Configuration Help

You can hand-craft a metadata file if you wish. The contents should look similar to the following. Be sure to replace `subdomain` with your own PagerDuty subdomain.

In addition to configuration via metadata, a RelyingParty configuration, such as shown the example below, will need to be created in Shibboleth. Be sure to replace the provider URL with your own.

```
<rp:RelyingParty 
id="https://subdomain.pagerduty.com" 
provider="https://domain/idp/shibboleth" 
defaultAuthenticationMethod="urn:oasis:names:tc:SAML:2.0:ac:classes:unspecified" 
defaultSigningCredentialRef="IdPCredential"> 
<rp:ProfileConfiguration xsi:type="saml:SAML2SSOProfile" 
includeAttributeStatement="true" 
assertionLifetime="300000" 
assertionProxyCount="0" 
signResponses="conditional" 
signAssertions="never" 
signRequests="conditional" 
encryptAssertions="never" 
encryptNameIds="never" 
/> 
</rp:RelyingParty>
```

# Custom SAML Configuration

For custom SAML configurations, we provide the following metadata URL to make your configuration easier:

```
https://{subdomain}.pagerduty.com/sso/saml/metadata
```

## Required Attributes

For manual SAML configurations, we will validate and enforce the following attributes in the SAML payload:

1. Destination (sometimes labeled SAML Recipient in IdP configuration forms) is expected to be: 

```
https://{subdomain}.pagerduty.com/sso/saml/consume
```

2. Audiences (sometimes labeled SAML Audience in IdP configuration forms) is expected to be:

```
https://{subdomain}.pagerduty.com
```
[block:callout]
{
  "type": "warning",
  "body": "There should be no trailing slash. Users will receive an `HTTP 400` error when trying to log in if there is a `/` after your subdomain.",
  "title": "Important"
}
[/block]
3. Name ID is expected to be the user's email address:

```
urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
```

## Optional Attributes for Auto-Provisioning

* User names will be set to the value of the `Name` or `name` attribute we receive in your SAML payload. If there is no `Name` or `name` attribute in your SAML payload then the user's name will default to their email address.
* User roles will be set to the value of the `Role` or `role` attribute we receive, where the value must match one of our [REST API user role values](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Users/post_users): `admin`, `limited_user`, `user` or `read_only_user` (known as Stakeholder user). Accounts with [Advanced Permissions](https://support.pagerduty.com/v1/docs/advanced-permissions) may also pass an `observer` role. If there is no `Role` or `role` attribute in your SAML payload then the user's role will default to the `user` role. This [User role](doc:user-roles) is linked to the User basic role and Manager advanced permission role.
* The job title of the user will be derived from the  `jobresponsibilities` attribute in the SAML payload, if present.
[block:callout]
{
  "type": "info",
  "body": "These attributes will only be used when a user is initially created. Changing the user's email address, name, or role in your IdP will not change these values in PagerDuty; you will still need to update a user's login email address, name, or role in PagerDuty if you change them in your IdP after the user has already been automatically provisioned in PagerDuty.",
  "title": "Note"
}
[/block]
# Redirect Non-Provisioned Users

Auto-provisioning users can get responders up and running quickly, but it will affect billing. If you do not wish to auto-provision users, the Account Owner can optionally redirect non-provisioned users to a destination link, such as an internal wiki, for more information about getting provisioned in your identity provider.


![](https://files.readme.io/9ff337d-single-sign-on-redirect-non-provisioned-users.png)

# Configure Google Authentication (OAuth 2.0)

To configure Google Authentication:

1. The **Account Owner** can access SSO settings by navigating to **User Icon** :fa-arrow-right: **Account Settings** :fa-arrow-right: **Single Sign-On**. Select the **Google** radio button. 
2. Enter the **Google Domain** associated with your Google Apps account.
3. Depending on your preferences, *optionally* select whether you would like to **Allow username/password login** and/or [**Auto-provision users on first login**](https://support.pagerduty.com/docs/sso#section-optional-attributes-for-auto-provisioning). 
4. Click **Save Changes**. Users will now be prompted to login via Google Authentication. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Revoking a user's access at your SSO provider will prevent the user from logging in via SSO, but will not delete the user in PagerDuty. You must still log in to PagerDuty to delete the user."
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "GSuite Multiple Domains Limitation",
  "body": "The PagerDuty Google Auth integration supports a **single domain** and cannot be used for multiple domains available in GSuite."
}
[/block]
# User Log In via SSO

## Initial Log In via Welcome Email

When SSO has been configured, users will commonly receive an email from your Identity Provider notifying them that they can access their account via SSO. Users can log in for the first time by **clicking the provided link**. 

The following is an example from Okta, and the email will vary based on your Identity Provider:

![](https://files.readme.io/e4b11df-sso-user-email.png)

## Log In via Web App

To log in using SSO in the Web App:

1. Ensure that you are logged into your identity provider (e.g. Okta, OneLogin, etc).
2. Go to your PagerDuty account at `https://[your-pagerduty-subdomain].pagerduty.com/sign_in`.
3. Click the **Sign In With Your Identity Provider** button.

**Web App SSO Login**:

![](https://files.readme.io/ce38bb2-single-sign-on-signing-in.png)

4. Your identity provider will automatically sign you into your PagerDuty account. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "If you do not see the **Sign In With Your Identity Provider** button, or if you are unable to log in to your account, please contact your Account Owner to [troubleshoot](https://support.pagerduty.com/docs/sso#section-troubleshooting-tips) and ensure that SSO has been properly configured."
}
[/block]
## Log In via Mobile App

Login via the mobile app is very similar to the web app. To log in via the mobile app:

1. Ensure that you are logged into your identity provider on your device. Next, open the PagerDuty mobile app. 


* **If you have already logged into the mobile app via password** and would like to log in via SSO, you will need to log out first. Navigate to :fa-bars: :fa-arrow-right: **Accounts** and swipe left on the account that you would like to log out of, tap **Delete** and tap **Remove**. This will log you out of your account. When you open the app again, tap **Sign In With Your Identity Provider** and continue with step 2.
* **If you are logging in to the mobile app for the first time**, open the mobile app and tap **Sign In With Your Identity Provider**. 


![](https://files.readme.io/89b1b58-sso-mobile-app-sign-in.PNG)

2. On the next screen, enter your **PagerDuty subdomain** and tap **Sign In With Your Identity Provider** again. 

![](https://files.readme.io/669ef43-sso-mobile-subdomain.PNG)

4. Your identity provider should log you into the PagerDuty mobile app immediately, however this may vary based on provider. If you have not already logged into your identity provider as instructed in step 1, you may see an additional login screen.

## Log In via Identity Provider
[block:callout]
{
  "type": "warning",
  "body": "Most users will log in via your identity provider, and the UI will vary depending on which service you are using. The steps may be similar to the following, but **please refer to your Identity Provider's documentation for further assistance**.",
  "title": "Important"
}
[/block]
1. Log in to your Identity Provider (e.g. Okta) and search for PagerDuty in your connected apps.
2. Click PagerDuty and you will be logged into your PagerDuty account automatically. 

**Okta Example**:

![](https://files.readme.io/954c3be-sso-okta-login-example.png)

# Troubleshooting Tips

## Error "Account saml configuration x509 cert is invalid" in the web app after inserting your x509 cert

1. Confirm that you are using a valid x509 certificate. 
2. Confirm that each row in your x.509 certificate is a maximum of 64 characters.
3. Confirm there is the text `-----BEGIN CERTIFICATE-----` at the beginning of the certificate and `-----END CERTIFICATE-----` at the end of the certificate.

# FAQ

## Can I use a self-signed certificate for my SAML SSO integration?

Yes. PagerDuty will treat signatures from the identity provider as valid as long as:

* The certificate stored in the PagerDuty SAML settings matches the private key that the identity provider uses to sign SAML responses, and:
* The identity provider is configured to sign assertions.

Once these conditions have been met, users should be able to authenticate.

## Why does the Account Owner have the ability to log in using email and password after enabling SSO?

Account Owners retain the ability to log in by email address and password in the event that there is an issue with the SSO provider. This cannot be turned off.

## Can one PagerDuty Account have multiple SSO/SAML providers?

 Not at this time. Currently only one SSO option is configurable.
[block:callout]
{
  "type": "warning",
  "body": "If configuring an on-premises identity provider, you should treat its private key with utmost secrecy and take adequate security precautions."
}
[/block]
## When switching from password login to SSO, are password-using users logged out from their accounts?

Enabling SSO on the account, and then unchecking the option to **Allow username/password login**, does *not* by default log out any users currently logged in.  If you would like all users to be force-logged-out and then required to log back in via SSO, there is a [public API to manage user sessions](https://api-reference.pagerduty.com/#!/Users/delete_users_id_sessions) that an account Admin can use to log out all users after the switch to SSO has occurred.