---
title: "Status Dashboard"
slug: "status-dashboard"
excerpt: "View the current status of business services impacted by incidents, and provide status updates to stakeholders across your organization"
hidden: false
createdAt: "2019-03-28T21:29:30.713Z"
updatedAt: "2020-10-09T21:49:21.884Z"
---
PagerDuty’s status dashboard provides technical responders, business responders, and leaders a live, shared view of system health to improve awareness of operational issues. It displays the current status of key business services and sends notifications to alert users when business services are impacted. This feature improves communication between response teams and stakeholders during incidents. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/17e9d78-StatusDashboard.png",
        "StatusDashboard.png",
        2068,
        1548,
        "#f5eeed"
      ],
      "sizing": "smart"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The status dashboard feature is available on Business and Digital Operations plans. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan including the status dashboard feature.
</Callout>


# Product Capabilities
[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMaUmLBgLDBE%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DMaUmLBgLDBE&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FMaUmLBgLDBE%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=MaUmLBgLDBE&feature=youtu.be",
  "title": "Business Response: Add Subscribers and Status Updates, View Status Dashboard",
  "favicon": "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico",
  "image": "https://i.ytimg.com/vi/MaUmLBgLDBE/hqdefault.jpg
</Callout>



## Status Dashboard

Designed with business stakeholders in mind, the status dashboard provides an overview of your business services' status, showing you at a glance whether any are being affected by incidents. A business service will appear as disrupted on the status dashboard when there is an open incident on any supporting technical service mapped to it and the incident has a priority assigned. Depending on your business service settings, this incident may need a [priority assigned over a certain level](https://support.pagerduty.com/docs/business-services#section-edit-or-delete-a-business-service). When there are no incidents with priority open on any of the supporting technical services, then the business service will show as operational on the status dashboard. 

## View Status Dashboard in the Web App

To view the web Status Dashboard, log in to your PagerDuty account, navigate to **Status** in the top menu, or access via link at `YOUR-SUBDOMAIN.pagerduty.com/status-dashboard`.

## View Status Dashboard in the Mobile App

To view the mobile Status Dashboard, log in to your PagerDuty account, tap the :fa-bars: menu and tap **Status Dashboard**.

## Create Custom Dashboards 

Admins and Account Owners can create multiple custom dashboard views. This allows you to create dashboards for different business units or teams with varying multiple Business Service views. 
[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FUg1s_fsheu4%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUg1s_fsheu4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUg1s_fsheu4%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=Ug1s_fsheu4&feature=youtu.be",
  "title": "Business Response: Create a Custom Dashboard",
  "favicon": "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico",
  "image": "https://i.ytimg.com/vi/Ug1s_fsheu4/maxresdefault.jpg
</Callout>


To create a new dashboard, navigate to **Status** and click the **Business Services** dropdown and select **+ New Dashboard**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5fe6d9a-multiple-dashboard-view.png",
        "multiple-dashboard-view.png",
        2270,
        1471,
        "#f5f7f4"
      ]
    }
  ]
}
[/block]
Enter a meaningful **Name**, optionally edit the **Custom URL** and select which **Business Services** you would like to include in this dashboard view. Click **Create Dashboard** to save.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b6edcd1-status-dashboard-create-new-dash.png",
        "status-dashboard-create-new-dash.png",
        2128,
        1344,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]
## Limited Stakeholder Access Level

The Limited Stakeholder role provides users access to view and subscribe to the status dashboard, view their own user profile, and does not show any other parts of PagerDuty, whether they are using the web UI or the mobile app. This access level is great for teams who don't need to see all of the alerts, schedules, and responder details in your account. 

To set up a Limited Stakeholder user, please visit our [User Roles](https://support.pagerduty.com/docs/user-roles#section-limited-stakeholder-users) article.

# Configure Status Dashboard
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Admin, Manager, Global Admin and Account Owner base roles.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).
</Callout>


To configure the status dashboard, you must:

- [Step 1: Create business services](https://support.pagerduty.com/docs/status-communications-closed-beta#section-step-1-create-business-services) 
- [Step 2: Enable incident priority in your account](https://support.pagerduty.com/docs/status-communications-closed-beta#section-step-2-enable-incident-priority-in-your-account)

## Step 1: Create Business Services

Ideally, business services are:

- Recognizable to non-technical stakeholders
- Supported by one or more technical services in PagerDuty
 
You may have business services listed on an external status page, within a service catalog/CMDB, or defined in relation to existing health metrics from a monitoring tool.

1. Go to **Services** and select **Business Services**.
2. Click **Create New Business Service**. 
3. Enter a meaningful name that will define the business service and provide a description.
4. Enter the owner as yourself or a point of contact for the business service. *(Optional)*
5. Click **Add Upstream Dependencies** to add any technical services or business services that this service requires in order to be considered operational. For more information, please read our section on [upstream dependencies](https://support.pagerduty.com/docs/business-services#section-upstream-dependencies).
6. Click **Create Business Service** to save. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "While it is possible to configure multiple levels of business service dependencies, only the top level business services currently appear on the Status Dashboard. A “top level” business service is a business service that is not listed as an [upstream dependency](https://support.pagerduty.com/docs/business-services#section-upstream-dependencies) for another business service.
</Callout>


## Step 2: Enable Incident Priority in Your Account 

Next, follow the instructions in our section on [enabling incident priority](https://support.pagerduty.com/docs/incident-priority#section-enabling-incident-priority). Only incidents with an assigned priority will appear on your status dashboard. 

# Status Updates

During an incident, responders can update the status of a business service to indicate its disruption to business stakeholders via the status dashboard.  A business service will appear as disrupted on the status dashboard in two circumstances: 

1. When there is an open incident on any supporting technical service mapped to the business service and the incident has a [priority](https://support.pagerduty.com/docs/incident-priority) assigned. Depending on your business service settings, this incident may need a [priority assigned over a certain level](https://support.pagerduty.com/docs/business-services#section-edit-or-delete-a-business-service). 

2. When an open incident has been manually associated with a business service and the incident has a [priority](https://support.pagerduty.com/docs/incident-priority) assigned. Depending on your business service settings, this incident may need a [priority assigned over a certain level](https://support.pagerduty.com/docs/business-services#section-edit-or-delete-a-business-service). Users can manually associate an incident with a business service by selecting the appropriate business service under the **Impacted Business Services** dropdown, found in the **Status Updates** tab of **Incident Details**.
[block:callout]
{
  "type": "warning",
  "body": "A User, Manager, Admin, Global Admin or Account Owner base role or a Manager team role is required in order to manually associate business services with incidents.",
  "title": "Required User Permissions
</Callout>



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5260e2-status-dashboard-impacted-business-services.png",
        "status-dashboard-impacted-business-services.png",
        746,
        868,
        "#f4f4f5"
      ]
    }
  ]
}
[/block]
Incidents that have not been assigned a priority will not appear on the status dashboard, so that it does not become cluttered with operational noise. When the above criteria are not met, the business service will show as operational on the status dashboard.

## Send Resolution Notes as a Status Update

When resolving an incident, responders have the option to add a resolution note. This note can also be sent to subscribers as a status update if: 

* The incident has subscribers OR the incident is visible on the status dashboard
* AND the incident is resolved from the PagerDuty web app as a single resolve (versus a bulk resolve from the incident dashboard)
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a321359-resolution-status-update.png",
        "resolution-status-update.png",
        1196,
        692,
        "#f1f2f1"
      ]
    }
  ]
}
[/block]
By checking the box **Post resolution note as status update**, the note will be sent to all subscribers on the incident, regardless of whether they were added via response play or added on demand through the UI. 

## Status Update Branding
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Status update branding is available with our Modern Incident Response suite of features available on our Business and Digital Operations plans.
</Callout>


If you would like to change the logo that appears in your status update emails (it will be the PagerDuty logo by default), you may upload a custom logo with status update branding. 

To upload a custom logo:

1. Navigate to **User Icon :fa-user:** :fa-arrow-right: **Account Settings** and select the **Status Updates** tab. 
2. Click **Replace Logo** and upload the file from your device. Once uploaded, it is automatically saved. If you would like to preview how this logo will appear on your emails, click **Preview**.

If at any time you wish to switch back to the default PagerDuty logo, you can click **Reset PagerDuty Logo** on the right side of the screen.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/839968c-status-dashboard-status-update-branding.png",
        "status-dashboard-status-update-branding.png",
        2260,
        1102,
        "#f3f4f3"
      ]
    }
  ]
}
[/block]
# Subscribing to Business Services

<Callout type="info" title="Info">
Business service subscription is available with the [PagerDuty Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) suite of features. Please [contact our Sales team](https://www.pagerduty.com/contact-sales/) for information on subscriptions with Modern Incident Response.",
  "title": "Note
</Callout>


Business stakeholders can subscribe to business services they care about to stay informed about those services. Any user who subscribes to a business service will receive a notification whenever a status update is posted to the ***first*** ongoing incident (see note below) impacting that business service. These notifications are sent via email, SMS, or push, depending on the user’s preferences. All status updates also appear on the status dashboard. 
[block:callout]
{
  "type": "warning",
  "title": "Impacted Business Service Notifcations",
  "body": "This subscription will only send notifications for status updates posted to the ***first*** incident created within the business service that meets the criteria to impact the business service.\n\nAll other status updates made to incidents created within the business service during the time of the first incident will not use this subscription method until the original incident and all following incidents are resolved. \n\nOnce the business service has returned to a healthy state, the first incident to impact the business service can begin to use the status update subscriber notifications.
</Callout>



[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FXX2aP200wSw%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXX2aP200wSw&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXX2aP200wSw%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=XX2aP200wSw&feature=youtu.be",
  "title": "Business Response: Manage Subscriptions and View Contact Info",
  "favicon": "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico",
  "image": "https://i.ytimg.com/vi/XX2aP200wSw/hqdefault.jpg
</Callout>


To subscribe to a business service, navigate to **Status** :fa-arrow-right: **View My Subscriptions**. Select any business services you wish to subscribe to. Notifications will be sent to the first email, SMS, and push notification channels you have set up in PagerDuty.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/df06938-status-dashboard-view-subscriptions.png",
        "status-dashboard-view-subscriptions.png",
        1756,
        628,
        "#eef4ed"
      ]
    }
  ]
}
[/block]
# FAQ 

## How can I set incident priority automatically?

There are three ways to set incident priority: 

1. [Set priority manually from the web or mobile app](https://support.pagerduty.com/docs/incident-priority).
2. [Set priority via the REST API](https://api-reference.pagerduty.com/#!/Incidents/post_incidents). You can use [this endpoint](https://api-reference.pagerduty.com/#!/Priorities/get_priorities) to get your **priority_id** values. 
3. [Set priority via Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-setting-priority-with-event-rules). You need the Team, Business or Digital Operations plan to access this feature.