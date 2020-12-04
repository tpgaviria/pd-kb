---
title: "Extensions and Add-ons"
slug: "extensions-add-ons"
hidden: false
createdAt: "2017-05-10T19:31:42.308Z"
updatedAt: "2020-10-08T22:35:28.225Z"
---
## Extensions

Extensions are additional features that help streamline your incident response and communication. Based on your user permissions, there are two ways to manage service extensions: via the Service Details page or the Extensions page.

##Managing Extensions on the Service Details Page
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Admin, Manager (team role), Global Admin or Account Owner roles can manage extensions on the Service Details page. Those with a Manager team role and lower level base role (i.e. Responder, Observer, or Restricted Access) can **only** manage extensions from the service details page. \n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
To add an extension to a service, go to **Services** :fa-arrow-right: **Service Directory**. Select the service that you would like to add your extension to and click the **Integrations** tab. Under **Extensions and Add-Ons**, click **Add or manage extensions for this service** and then click the **New Extension** button. From there, select the **Extension Type**, **Name**, and paste the Extension URL in the **Details** section. 

Additionally, you can **edit** and **delete** extensions on each Service Details page by clicking on the settings gear. 

##Managing Extensions on the Extensions Page
[block:callout]
{
  "type": "warning",
  "body": "Admin, Manager, Global Admin or Account Owner roles can manage extensions on the Extensions page.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).",
  "title": "Required User Permissions"
}
[/block]
The Extensions page allows you to view and manage all of your service extensions, persistent conference bridges and add-ons.

Read more information about add-ons [here](#section-add-ons).

To manage your Extensions, go to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions**. Once you are on the Extensions page, you will be able to see the current Extensions that have been added to all of your services.

To add an extension, click on the **+New Extension** button. From there, select the **Extension Type**, **Name**, and **Service** that you want to add the Extension to, as well as the Extension URL in the **Details** section. 

Additionally, you can **edit**, **copy an extension to another service**, and **delete** extensions on this page by clicking on the settings gear. 
## Add-ons

Add-ons are a way to enhance your ability to manage the full incident lifecycle. Add-ons can add functionality to your PagerDuty experience with apps hosted outside of the core PagerDuty product, but are still accessible within the PagerDuty web UI. This means that you now have the power to add your own scripts and web pages to your PagerDuty environment.

Add-ons provide you with the ability to embed web apps to your PagerDuty incidents or a dedicated dashboard. These web apps can interact with our APIs, which means you can customize the PagerDuty web UI to provide additional functionality that is not yet available within our UI, provide interactive reports on your infrastructure and incident response, and more.
[block:callout]
{
  "type": "info",
  "title": "Response Header Requirements",
  "body": "The server that hosts the add-on must permit loading the document within a frame by setting the following response headers:\n\n`X-Frame-Options: allow-from https://YOUR-SUBDOMAIN-HERE.pagerduty.com`\n`Access-Control-Allow-Origin: https://YOUR-SUBDOMAIN-HERE.pagerduty.com`"
}
[/block]
##Install an Add-on

1. Go to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions** and click the **Add-ons** tab.
2. Click **New Add-on**.
3. Enter a **Name**, choose your display preference (**Its own page** or **Incidents**), and **URL**.
4. Click **Save**.

###Add-on Display Preferences

There are two display preference options for add-ons:

* **Its own page** - This will add a link to the add-on to a top-level Add-ons menu.
* **Incidents** - This will embed your add-on within the incident page of selected services, or on all services if no services are selected.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Add-ons installed on **Incidents** pages can be customized after installation to display on different services, or all services, without re-installing the add-on. However, it is not possible to change an add-on's display preference between **Incidents** and **Its own page** without uninstalling and re-installing the add-on."
}
[/block]
##Uninstall an Add-on

1. Go to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions** and click the **Add-ons** tab.
2. Click :fa-times: next to the add-on you wish to remove.
3. Click **Delete** on the confirmation dialog.

##Where can I Find Installed Add-ons?

Once you've installed an add-on, you will have a new **Add-ons** drop-down menu in your navigation bar. Clicking on this menu will display a list of all add-ons you currently have installed within your account. 
[block:callout]
{
  "type": "success",
  "body": "You don't have to develop your own add-ons from scratch to get custom dashboards and reports.\n\nThe [Visibility Console](https://support.pagerduty.com/docs/visibility-console) is customizable framework that provides complete operational awareness of the critical elements of your IT infrastructure. [Ask our Sales team](mailto:sales@pagerduty.com) about PagerDuty Visibility to learn more.",
  "title": "Tip"
}
[/block]