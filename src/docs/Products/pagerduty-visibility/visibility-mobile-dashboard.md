---
title: "Visibility Mobile Dashboard"
slug: "visibility-mobile-dashboard"
hidden: true
createdAt: "2019-07-25T18:36:20.131Z"
updatedAt: "2019-07-25T18:38:05.041Z"
---
# Viewing Business Services within the Visibility Mobile Dashboard

You can view top-level business services within the Visibility mobile dashboard. To access, open the PagerDuty mobile app and navigate to **☰ > Visibility**.

You will see a top-level view of any disrupted business services and all healthy business services.

![](https://files.readme.io/0427e8d-visibility-mobile-dashboard.jpg)

 ## Analyzing Disrupted Business Services

![](https://files.readme.io/1e86218-visibility-best-practices-mobile-dashboard.jpg)

A business service is disrupted when an incident with a priority is triggered on a technical service connected to the business service, and the business service was not already in a disrupted state due to another incident. 

Selecting a business service will display the detailed view:

  * Name and description of the business service
  * Point of contact (if entered)
  * [Impact Metrics](doc:impact-metrics) for the business service
  * Supporting technical services

If the business service is disrupted, additional details are included:

* Priority and duration of the disrupting incident
* Timeline of any status updates *through Modern Incident Response*
* The technical services list will indicate the disrupted technical service(s)