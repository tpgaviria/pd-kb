---
title: "Preview Intelligent Alert Grouping"
slug: "preview-intelligent-alert-grouping"
excerpt: "Preview how the Intelligent Alert Grouping algorithm would automatically group existing alerts"
hidden: false
createdAt: "2018-12-07T22:15:59.897Z"
updatedAt: "2020-10-28T22:26:01.487Z"
---
Before enabling [Intelligent Alert Grouping](https://support.pagerduty.com/docs/intelligent-alert-grouping) on a service, your team may want to understand how alerts will be grouped into incidents. Preview Intelligent Alert Grouping allows you to see how your own alerts would have been automatically grouped.

Preview Intelligent Alert Grouping does not change how alerts are actually grouped into incidents. It is only a preview, and cannot be applied retroactively on real alerts. To learn how to change how alerts are grouped into incidents, see [Editing Incidents](https://support.pagerduty.com/docs/editing-incidents#section-how-to-merge-incidents).
[block:callout]
{
  "type": "info",
  "body": "This feature is currently available on accounts with [Event Intelligence](https://support.pagerduty.com/docs/event-intelligence) or on the Digital Operations plan. If you have any questions or feedback, please [contact our Support team](https://www.pagerduty.com/contact-us/#contact-support).",
  "title": "Note"
}
[/block]

## How to Access the Preview

At the moment, Intelligent Alert Grouping can only be configured at the service level, so to preview Intelligent Alert Grouping, first select an appropriate service. One of the main benefits of Intelligent Alert Grouping is reducing alert noise, so services with interesting and meaningful previews tend to be services with a high volume of incidents with some variance in their incident titles.

Navigate to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: select your preferred **service** :fa-arrow-right: **Response** tab :fa-arrow-right: **Edit** to the right of the Alert Grouping section. Select **Intelligent** and then click **Preview IAG** to access the preview. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The Alert Grouping tab displays the available alert grouping options available on that service based on your pricing plan. If you do not see Intelligent Alert Grouping as an option, you can [contact our Sales team](https://www.pagerduty.com/contact-us/#contact-sales) to start a free trial of Event Intelligence."
}
[/block]


![](https://files.readme.io/0e4784d-preview-iag-on-service.png)


## Viewing Groups in Detail

The preview modal provides a rich view of how alerts would have been grouped into incidents on your service over a given period of time. Previews are generated once a day and are based on alerts from the past 45 days before the date the preview was generated.

At a high level, you can start to understand the value of enabling Intelligent Alert Grouping on your service in terms of the number of incidents that would have triggered without any alert grouping, and how many fewer incidents your team would have been notified for, had Intelligent Alert Grouping been enabled. To learn more about how the Intelligent Alert Grouping algorithm works, please see [this article](https://support.pagerduty.com/docs/intelligent-alert-grouping#section-how-does-intelligent-alert-grouping-decide-which-alerts-to-group).

You will see metrics at the top of the preview, which are all calculated based on:

* **Alerts**: The total number of alerts this service has seen within the past 45 days.
* **Incidents**: The total number of incidents within the past 45 days this service would have seen without turning on any alert grouping.
* **Number of Unique Incidents**: The number of incidents that would have been triggered within the past 45 days, if the service had Intelligent Alert Grouping turned on.
* **Number of Incidents Saved**: The number of incidents that would have been saved from a trigger within the past 45 days, if the service had Intelligent Alert Grouping turned on.

![](https://files.readme.io/7aad8a6-preview-iag-modal.png)

You can expand each potential alert group to see how many and which alerts would have been grouped together into a potential incident. The date and time listed reflect when the first incoming alert was triggered. Please note that the title of the potential incident is derived from the first incoming alert.

Some services may have a lot of alert groups  in this list. We recommend looking at some of the larger groups to get a sense of the grouping behavior of the algorithm.
## FAQ

###I just triggered an incident/alert, why is it not appearing in the preview?

Previews are not generated in real time, they are generated once a day. If you have new alert data that you’d like the preview to take into account, we recommend checking back in 24 hours to see if a preview has been regenerated.

###When will the preview on my service be updated?

New previews are calculated once a day, as long as there have been enough alerts within the last few months. If a preview is unavailable on your service, it could be because the Intelligent Alert Grouping algorithm doesn’t have enough data to generate a new preview.

At the moment, old previews will only be purged when a new preview is available to replace it.

###There are some alerts appearing under potential incidents that I wouldn’t want to be grouped together - how can I adjust these groups?

While the preview is static and cannot be changed directly, you can still provide feedback on the quality of the groups you see and this feedback will help the algorithm learn and create better groups.

To provide feedback on the groups, go to the original incident and move the alert out, or merge incidents together. For steps on how to do this, see  [Editing Incidents](https://support.pagerduty.com/docs/editing-incidents#section-how-to-merge-incidents).

Once you provide feedback, your changes will not be immediately reflected in the current preview. You may notice a difference the next time the preview is generated.

###One of my services is set to create incidents only (not alerts). Can I still use alert grouping and preview intelligent alert grouping?

Alert grouping options are available only if the service has alerts and incidents enabled. As long as you are using integrations on that service that support alerts, you can change your service settings to enable alerts and incidents. See [Enabling Alerts](https://support.pagerduty.com/docs/alerts#section-enabling-alerts) for steps on how to change your service settings. 

### Why do I see less alert groups than expected?

The alert groups table only displays groups that have a total of two or more alerts. Furthermore, currently the table can only display the top ten alert groups, sorted by the total alert count.