---
title: "Safelisting IPs"
slug: "safelisting-ips"
hidden: false
metadata: 
  title: "Safelisting IPs"
  description: "Safelisting IPs"
createdAt: "2017-05-12T00:25:21.251Z"
updatedAt: "2020-09-25T16:15:10.754Z"
---
## Events APIs

The PagerDuty [Events APIs](https://developer.pagerduty.com/docs/events-api-v2/overview/), which are used for triggering, acknowledging, and resolving incidents, requires that your system be able to make outbound connections to events.pagerduty.com on TCP port 443 (for HTTPS).

`events.pagerduty.com` resolves to multiple IPs, which you can find by querying the A records using `dig` or `nslookup`.

## Example Query 1
[block:code]
{
  "codes": [
    {
      "code": "$ dig a +short events.pagerduty.com\nevents.gslb.pagerduty.com.\n54.244.255.45\n54.241.36.66\n54.245.112.46",
      "language": "shell"
    }
  ]
}
[/block]
In this example, you see that the Events API is accessible at the IPs 54.244.255.45, 54.241.36.66, and 54.245.112.46.
## REST API

To access our [REST API](https://developer.pagerduty.com/docs/rest-api-v2/rest-api/), your system must be able to make outbound connections to `api.pagerduty.com` on TCP port 443. Our REST API only allows HTTPS connections; HTTP connections are not allowed for security.

`api.pagerduty.com` usually resolve to multiple IPs as well, however these IPs will be different than the ones used for our Events API or webhooks.

## Example Query 2
[block:code]
{
  "codes": [
    {
      "code": "$ dig a +short api.pagerduty.com\n54.203.252.221\n50.112.113.201\n50.112.113.204",
      "language": "shell"
    }
  ]
}
[/block]
In this example, you see that the REST API is accessible at the IPs 54.203.252.221, 50.112.113.201, and 50.112.113.204.
## Webhooks

[Webhooks](doc:webhooks) are HTTP or HTTPS calls sent from PagerDuty to your web server on the IP and port of your choosing. The current list of IPs that our webhooks are sent from can be obtained via a HTTPS GET request to the following URL:

```
https://app.pagerduty.com/webhook_ips
```

The response will be a JSON-encoded list of IP addresses.

###Example Query
[block:code]
{
  "codes": [
    {
      "code": "curl -s https://app.pagerduty.com/webhook_ips\n[\"52.13.4.226\",\"54.176.87.101\",\"54.185.79.76\",\"54.201.209.177\",\"54.202.99.6\",\"54.212.55.143\",\"104.42.123.77\",\"50.18.129.59\",\"34.210.57.30\",\"34.210.242.134\",\"52.34.208.156\",\"34.202.21.89\",\"34.239.229.93\",\"34.231.45.166\",\"34.248.147.39\",\"54.77.228.115\",\"54.154.145.191\"]",
      "language": "curl"
    }
  ]
}
[/block]
## Updating ACLs to Account for Changes
[block:callout]
{
  "type": "danger",
  "body": "Please be aware that the IPs above are only examples, and do not necessarily reflect the *current* IPs in use. If we were to change IPs and your firewall policies were not updated, you will not be able to reach our API endpoints and/or you will stop receiving webhooks from PagerDuty.\n\nAs of this writing, there is no fixed pool or dedicated prefix in which these IP addresses reside, and whenever a host in our fleet owning a given IP address is de-provisioned, the IP address is not expected to be used again by PagerDuty.",
  "title": "These IPs can change at any time without warning."
}
[/block]
If you are hardcoding IPs into your firewall, you can use a [script to receive updates](https://github.com/PagerDuty/PD-IP-Checker) when the A records for these hostnames change, or perform lookups on the aforementioned hostnames regularly to update your configurations.

If the firewall in question is an EC2 security group, [this Python script](https://gist.github.com/Deconstrained/f29fe709f8e4ff28715f7cf715e80f13) (requires [boto](https://pypi.org/project/boto/) and Python 2.7 or later to run), given an IAM secret key with adequate permissions, can automatically update the security group with the necessary IP addresses to grant access.


## Jira Server Integration

If you are using the new Jira extension, you will also need to add the address records of `app.pagerduty.com` to any sort of safelist that controls network egress traffic; this integration makes special API calls that go through that particular hostname.