---
title: "Impact Metrics"
slug: "impact-metrics"
hidden: false
createdAt: "2018-09-04T08:44:45.631Z"
updatedAt: "2020-10-09T22:43:23.590Z"
---
Impact Metrics allow you to quantify the impact of incidents on your business services in real-time via the [mobile Status Dashboard](https://support.pagerduty.com/docs/impact-metrics#view-impact-metrics-in-the-mobile-status-dashboard). Business stakeholders no longer have to ask the response team about the customer impact of an incident and wait for a response. With Impact Metrics they have a fully automated, live view of the impact available at any time.

#Relation to Business Services

Each impact metric should be associated with one or more business services. Together, the impact metrics for each business service should provide a clear view of how the business service is functioning. For example, a business service named "Shopping Cart" might have impact metrics such as Active Carts, Items Added, Carts Checked Out. Taken together, those metrics would provide a clear view of cart usage. If Items Added suddenly went to 0, that would be a clear indication of a negative customer impact: users cannot add items to their shopping carts.

#What makes a good Impact Metric?
Impact metrics within the mobile Status Dashboard are primarily used to show the real-time impact that a disrupted business service is having on customers. In order to be useful for this purpose, there are several criteria that a good impact metric should meet:
  * Continuously available from monitoring tools or other automated telemetry
  * Frequently measured, ideally within intervals of 5 minutes or less
  * Low latency, ideally with observations arriving within 2 minutes of being taken
 

# Creating an Impact Metric

You are able to create impact metrics through the web app.

1. Click on the **Services** menu option at the top of your web page and select **Impact Metrics**.
2. Select **Create New Impact Metric** and input a meaningful name along with a description.
3. Within the display settings, you can adjust how the impact metric graph will appear on the [mobile Status Dashboard](https://support.pagerduty.com/docs/using-mobile-status-dashboard).
     a. The y-axis minimum and maximum values define the range shown
     b. The unit type is displayed with the current value in the title
     c. The precision is used for values displayed on the y-axis and on data points
     d. The aggregation determines the value used when one data point on the graph represents multiple observations over a given time interval


4. Under **Select the Business Services where this Impact Metric should be displayed**, add one or more business services for which the impact metric should appear.
5. Once done, select **Save Changes to this Metric**.

In return, you will be provided with a corresponding corresponding ID for each impact metric. You will need this ID in order to submit observations to the REST API.

![](https://files.readme.io/dd83835-impact-metrics-details.png)

[/block]
#Sending Data to Impact Metrics
To send data to an impact metric you will first need a valid PagerDuty API token and the ID of the impact metric. For general information about interacting with the PagerDuty API, including information about API tokens and authentication, please refer to [Using the REST API](doc:using-the-api). The ID for the impact metric can be found in the [Impact Metrics list](https://support.pagerduty.com/v1/docs/impact-metrics#section-creating-an-impact-metric) on the web application.

##Request Method
```
POST
```

##Request URL

```
https://api.pagerduty.com/business_impact_metrics/<impact_metric_id>/observations
```

##Request Body

```
{
  "observation": {
    "value": <number>,
    "observed_at": "<timestamp>"
  }
}
```

**Note:**
* `value` is a JSON number
* `observed_at` is a string specifying a date and time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. The time, including seconds, is required. See the [PagerDuty API docs on types](https://v2.developer.pagerduty.com/docs/types#datetime) for more details.

##Response Code
HTTP 201 will be returned on success.

#View Impact Metrics in the Mobile Status Dashboard

To view impact metrics in the [mobile Status Dashboard](https://support.pagerduty.com/docs/using-mobile-status-dashboard), tap :fa-bars: :fa-arrow-right: **Status Dashboard** and tap your desired business service. If impact metrics have been [configured for this business service](https://support.pagerduty.com/docs/impact-metrics#creating-an-impact-metric), they will be displayed along with the business service's details. **Note**: You can view the metrics for any business service on the Status Dashboard in either the operational or disrupted states.