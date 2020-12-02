---
title: "Creating Inbound Integrations Through the REST API"
slug: "creating-inbound-integrations-through-the-rest-api"
hidden: true
createdAt: "2019-01-23T23:11:31.677Z"
updatedAt: "2019-01-26T00:23:20.194Z"
---
It is possible to create inbound integrations using the [REST API action `POST /services/{id}/integrations`](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Services/post_services_id_integrations).
[block:api-header]
{
  "title": "Choose a Vendor"
}
[/block]
If you are creating any kind of non-generic integration, you will need to specify a value for the `vendor` property of the integration. Note, you can only set the vendor when creating the integration.

The list of available integrations can be obtained through the [`/vendors` index](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Vendors/get_vendors), which is an [index endpoint](https://v2.developer.pagerduty.com/docs/endpoints#resources-index) that supports [pagination](https://v2.developer.pagerduty.com/docs/pagination). Each of the resource objects returned by this endpoint have an `id` property that will be necessary in order to construct the `vendor` property of the new integration. 

The next step, once the appropriate vendor's ID is found, is to set the `vendor` property of the integration object that you wish to create as a [resource reference](https://v2.developer.pagerduty.com/docs/references) to the vendor. Note, this can also be done by simply taking the vendor resource object and setting the `vendor` property of the integration equal to it.
[block:api-header]
{
  "title": "Select a Type For the Integration"
}
[/block]
The integration itself will still need a `type` property. If setting a vendor, one does not need to set it to anything in particular for each different vendor. Rather:

* **If creating an integration that is Events API based:** use `generic_events_api_inbound_integration`. You can tell that an integration uses the Events API if:
    * It uses [PagerDuty Connect](https://www.pagerduty.com/docs/guides/pagerduty-connect/) to set up the integration (an authorization process that takes you between the vendor's product and PagerDuty and back again during the set up process)
    * It involves an integration URL, and/or an integration key (a 32-digit hexadecimal number)
* **If creating an integration that is email-based:** use `generic_email_inbound_integration`. If setting up the integration involves an email address, it is email-based.

Once the integration is created, its type will automatically update to the appropriate value.
[block:api-header]
{
  "title": "The Request Schema"
}
[/block]
Putting it all together: for example, if creating an AWS CloudWatch integration:

* The vendor ID is `PZQ6AUS`
* The type should be `generic_events_api_inbound_integration`

Therefore, the body of the `POST` request to `/services/{id}/integrations` should look something like this:

```
{
    "integration": {
        "type": "generic_events_api_inbound_integration",
        "summary": "AWS CloudWatch Integration",
        "name": "CloudWatch",
        "vendor": {"type":"vendor_reference", "id":"PZQ6AUS"}
    }
}
```


[block:callout]
{
  "type": "info",
  "title": "If creating an email-based integration",
  "body": "You have the option of specifying an integration address by setting the `integration_email` property of the integration when creating it. If you do not specify one, an email address for the integration will be randomly generated using a [CSPRNG](https://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator), similar to how integration keys are created."
}
[/block]

[block:api-header]
{
  "title": "Obtaining the Routing Key"
}
[/block]
Once created, the body of the response will contain the integration key or integration email, which can be used to trigger, acknowledge and resolve alerts and incidents in PagerDuty.

If the integration is API-based, the `integration_key` of the `integration` object in the response will contain the key. If it is email-based, it will have a property `integration_email` containing the email address of the integration.