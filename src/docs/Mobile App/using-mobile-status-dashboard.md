---
title: "Mobile Status Dashboard"
slug: "using-mobile-status-dashboard"
hidden: false
createdAt: "2020-03-26T07:00:30.902Z"
updatedAt: "2020-10-09T22:22:16.406Z"
---
## Mobile Status Dashboard

View the current status of incident-impacted business services and provide status updates to stakeholders across your organization through the PagerDuty mobile app.

## View Mobile Status Dashboard
[block:callout]
{
  "type": "info",
  "title": "Editing the Status Dashboard",
  "body": "If you're looking to make changes to your status dashboard, for example, modifying the business services and subscriptions to them, this can be achieved through the Web UI. You can read more about editing status dashboards [here](doc:status-dashboard)."
}
[/block]
To view the status dashboard in the mobile app, navigate to the :fa-bars: menu and select **Status Dashboard**. The main screen will present the top-level business services across the account. 

When there are no incidents with priority open on any of the supporting technical services, then the business service will show as **operational**. There will be a green banner at the top of the screen and a green suitcase icon next to each business service on the status dashboard:


![](https://files.readme.io/9929eef-Photo_-_Google_Photos-2.jpg)

If a business service has a triggered or acknowledged incident which does not impact the status dashboard, it did not meet the priority requirement set under the [business service](https://support.pagerduty.com/docs/business-services). To **view the disrupted technical service**, tap the **name** of the disrupted business service: 

![](https://files.readme.io/1ef96b9-Photo_-_Google_Photos-3.jpg)

When a business service is **disrupted**, a red banner will display at the top of the screen and the disrupted business service will display the priority of the incident which is impacting it. If there are multiple incidents impacting the same business service, the highest priority will be displayed next to the business service. Multiple business services impacted will be ordered via the highest priority:

![](https://files.readme.io/7c7ce9c-Photo_-_Google_Photos-4.jpg)

When selecting a disrupted business service, you can view the disrupted technical service dependent on it.

![](https://files.readme.io/07e9d2d-Photo_-_Google_Photos-5.jpg)

You will be able to review the corresponding on-call details and volume of active incidents on a disrupted service when selecting a disrupted technical service.

![](https://files.readme.io/c666390-Photo_-_Google_Photos-6.jpg)


## Product Capabilities


[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F5bK_CEnZPkM%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5bK_CEnZPkM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5bK_CEnZPkM%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=5bK_CEnZPkM",
  "title": "PagerDuty Mobile App: Add a Status Update Associated with Business Services and Change Priority",
  "favicon": "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico",
  "image": "https://i.ytimg.com/vi/5bK_CEnZPkM/maxresdefault.jpg"
}
[/block]
A responder can [publish status updates](doc:communicating-with-stakeholders#section-sending-status-updates-to-subscribers) to the users subscribed to the incident by selecting the **Status Updates** tab and then selecting the **+** sign next to **Published Updates** in the respective incident.


![](https://files.readme.io/a95d292-Photo_-_Google_Photos-7.jpg)

When writing a status update, you can select **change** to make modifications prior to publishing. 

![](https://files.readme.io/38f8f1f-Photo_-_Google_Photos-10.jpg)

Users can add more subscribers to the incident, adjust priority of the incident as well as add additional business services and their respective subscribers the status update should be published against. Select **Done** to save changes.


![](https://files.readme.io/43f0ae3-Photo_-_Google_Photos-8.jpg)

Once a status update has been sent, it will be displayed within the incident **Status Updates** tab.

![](https://files.readme.io/4d03062-Photo_-_Google_Photos-9.jpg)
