---
title: "Visibility Console"
slug: "visibility-console"
hidden: false
createdAt: "2020-05-07T15:58:10.775Z"
updatedAt: "2020-11-11T23:49:08.108Z"
---
The newly redesigned Visibility Console provides users with the single pane-of-glass experience to effectively monitor their digital operations in real time. This feature provides Central Ops / NOC teams and technical stakeholders with context on their technical environment at a glance, allowing them to quickly understand the health of their digital operations.

![](https://files.readme.io/692155b-Vis_Console_GIF_640_1.gif)


[block:callout]
{
  "type": "info",
  "body": "The interactive, read-only version of the Visibility Console is available as part of our Business Plan. The fully editable and customizable version of the Visibility Console is available as part of our Digital Operations plan.\n\nPlease contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to sign up for a trial or upgrade to a plan with this feature suite.",
  "title": "Note"
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Looking for a Different Version?",
  "body": "Our [Visibility Console v1](https://support.pagerduty.com/docs/visibility-console-v1) is also available."
}
[/block]
Each user in an account will have access to their own Visibility Console under **Incidents** :fa-arrow-right: **Visibility** and changes will be unique to their account. The new console currently has six new modules available with global filtering capabilities, which allow users to filter the modules by a combination of teams, services, and incident priorities. 

# Global Filtering
To show a specific group of services or incidents, simply add filter tags to the global filter bar. Click the filter bar dropdown and select your preferred tags:

* **Team:** The team tag will add all the services owned by a team to the group of services shown.
* **Service:** The service tag will add the specific service to the group of services shown.
* **Priority:** The priority tag will filter the incidents module to show only the incidents with that have priority (priority tag only filters the Incidents module).
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Filtering only impacts the Service Activity, Services, and Incidents modules."
}
[/block]


![](https://files.readme.io/2b05d0c-visibility-console-filter.png)

# Service Activity Module

The Service Activity module allows users to see incident activity across a multitude of their services at once, so that they can quickly understand their digital operations health, and identify if there’s a widespread major incident. It is ordered by most recently impacted service and will reorder itself when new incidents are triggered. It has different time windows so eyes on glass teams can monitor their digital operations in real-time, but can also see service activity in the last 24 hours. This module can be filtered to any set of teams and services.
[block:callout]
{
  "type": "info",
  "body": "The Service Activity module is currently available to all users on accounts with the Visibility product, but it is in Beta. Please [contact our Support team](https://www.pagerduty.com/contact-us/) with any feedback or requests, as the team continues to improve the module.",
  "title": "Note"
}
[/block]


![](https://files.readme.io/f834ecb-new-visibility-service-activity-console.png)

# Incidents Module

The Incidents module displays a real-time list of the most recent open incidents that have triggered based on the filters selected. It sorts the incidents by most recent trigger time and shows the status, priority, title of the incident, the service impacted, and the responders assigned. 

![](https://files.readme.io/3c07b75-visibility-console-incidents-module.png)

# Services Module

The Services module is ordered in the same way as the Service Activity module and offers additional context on the current state of a given service. Each service will display the associated team (if there is one configured), the number of open incidents, the time of the last incident, and the current state of the service.

![](https://files.readme.io/aa82038-new-visibility-console-services-module.png)

Definitions of different technical service states:

* **Awaiting Response**: The service currently has one or more incidents in a triggered state waiting on a response.
* **Response in Progress**: The service currently has one or more incidents in an acknowledged state waiting on resolution. 
* **Maintenance Window**: The service is currently in [maintenance mode](https://support.pagerduty.com/docs/maintenance-windows) or is disabled, meaning any incoming events on the service will not trigger an incident. 
* **Without Open Incidents**: The service currently has zero open incidents.

#Markdown Module
The Markdown module allows users to add any text / notes to their console. This could be used to display instructions, add hyperlinks to frequently used documentation, link to runbooks, or take general notes during an on-call shift or investigation. 

# Status Dashboard Module

The Status Dashboard module brings the information from the status page and adds that context to the console so users can monitor the status of their business services in one place. Business services can be expanded to show the status of supporting technical services ensuring stakeholders and response teams are always up to date with the live status of system health. 
[block:callout]
{
  "type": "info",
  "body": "The Status Dashboard module is only available to accounts who have Visibility and [Status Dashboard](https://support.pagerduty.com/docs/status-dashboard) features.",
  "title": "Note"
}
[/block]


![](https://files.readme.io/b9e35bc-new-visibility-status-dashboard-console.png)

# Custom URL Module

The Custom URL module allows users to embed external web pages into an iframe, in order to add external monitoring to the Visibility Console. Any PagerDuty webpage is embeddable, as well as many external status pages, and public dashboard URLs. 


![](https://files.readme.io/d693175-new-visibility-custom-url-module.png)


[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Not all webpages will allow themselves to be embedded, please read the details below to learn more."
}
[/block]
## Custom URL Module Security Limitations

The Custom URL module has some limitations in place to ensure security. 

### Custom URL Requirements

Please ensure the following for any URL that you would like to embed:

* You must use the `Content-Security-Policy: frame-ancestors` in the response header for the URL.
* Xframe is obsolete in most modern browsers, but if you are running into this issue, you may need to [set the ALLOW-FROM field](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options).

### Troubleshooting URLs That Will Not Load

Some URLs may not load for the following reasons:

* The page has [restricted CSP](https://content-security-policy.com/).
* The page explicitly [blocks Xframes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options).
* The page cannot be served over HTTPs (PagerDuty only serves over HTTPs).

# Customize the Visibility Console


[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Customers on the Digital Operations plan can customize the Visibility Console. Customers using our Visibility Beta on Business plans will not be able to customize the Visibility Console and will have a default view."
}
[/block]
Each module can be added, moved, edited or removed from the Visibility Console.

## Add a Module

To add a module that is not currently present in the console, click the **Add Module** dropdown at the top right of the screen. Select your preferred module and it will appear below.

## Move a Module

To move modules to different locations in the Visibility Console, hover over the :fa-arrows: icon at the top right of each module and drag and drop to your desired location.

## Edit a Module

To edit a module, click the :fa-cog: at the top right of the module, make your desired edits and click **Save**.

## Remove a Module

To remove a module from the console, click the **X** at the top right of the module. You will see a dialog that confirms this will remove all of its associated configuration, click **OK** to remove.

# FAQ

## When customizing the new Visibility Console, will the changes affect the other users who have access?

No. Currently, each user will have their own Visibility Console that they can customize. The layout will be saved for the user on their next session and will not affect other users.

## Why can’t I see the Infrastructure Health module or the Responders module? 

The Infrastructure Health module and the Responders module are not available in the current version of the new Visibility Console. However, new modules and functionality may be added to solve similar needs. Please [reach out to our Support team](https://www.pagerduty.com/contact-us/) with any feature requests.

## How many incidents or services does the Visibility Console load at once?

Currently, the Incidents, Services, and Service Activity modules load the top 100 most recent results. However, users can use the filtering capabilities to narrow their search and show more relevant results if needed. If there are any requests, please reach out to support. 

## Why doesn’t the Custom URL module work for me?

Due to security issues both to PagerDuty and the user, the iframe is built to ensure the new Visibility Console is safe and secure. Therefore, there are limitations to what can be embedded and what cannot. 

## Will other modules be added to the new Visibility Console?

Yes! There are currently other modules in development that are aimed to help users and organizations better monitor their real-time digital operations.

If you have any questions, please reach out to [visibility@pagerduty.com](mailto:visibility@pagerduty.com).