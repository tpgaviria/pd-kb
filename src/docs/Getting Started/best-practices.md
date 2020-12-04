---
title: "Getting Started: Best Practices"
slug: "best-practices"
hidden: false
createdAt: "2017-06-15T07:36:07.210Z"
updatedAt: "2017-06-15T07:45:16.126Z"
type: "link"
link_url: "https://community.pagerduty.com/t/top-10-best-practice-tips/294"
link_external: true
---
1. **Multiple notification rules**

You'll want to ensure that each user has multiple notification rules, including phone calls. Users with multiple notification methods are more likely to respond promptly and reliably.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "There is a limit of 20 high-urgency and 10-low urgency notification rules per user profile.
</Callout>


2. **Multiple escalation rules**

Avoid escalation policies with only one level. You'll want to include multiple people so that if the first person doesn't respond to or resolve the issue, you'll have a fail-safe in place to tackle the problem.

3. **Avoid email-to-SMS gateways**

These may appear attractive to the international traveler, but they are less reliable than SMS numbers and provide an additional point of failure. Based on past experience, we recommend against using these.

4. **Familiarize yourself with our APIs**

[PagerDuty's APIs](https://developer.pagerduty.com) are invaluable for requests that extend beyond our current feature set. It includes most of the functionality of our web interface with additional benefits. For instance, it can be used to create schedules of arbitrary length and overrides which are too difficult to repeatedly create manually.

The API can be particularly useful for automated creation (of schedules, users, etc.) and custom reports. If you are confused about the proper methods to interface with our API, there are a [number of open source tools](doc:api-based-tools) you can use as a reference.

5. **Explore our Knowledge Base**

You'll find [explanations of our terms](doc:glossary), [sample schedules](doc:schedule-examples), and example implementations, such has how to [use webhooks to send email notifications on incident state changes](/docs/webhooks#section-send-email-notifications-when-incidents-trigger-acknowledge-or-resolve).

A surprisingly large number of support requests are resolved through links to our [Knowledge Base](/).

6. **Consider using one of our integrations to extend our functionality**

We partner with many companies to make solutions that benefit everyone, and often work with them behind the scenes to integrate our services into theirs.

For instance, using Zapier, you can script any number of combined actions, using a ready-made solution. For more information about a available integrations, visit our [integrations page](https://www.pagerduty.com/integrations).

7. **Stay updated via our social media channels**

For updates on our service and reports on our uptime, please check our [blog](https://www.pagerduty.com/blog), [status page](https://status.pagerduty.com), and [our Twitter accounts](/docs/introduction#section--fa-twitter-twitter).

8. **Know your limits**

For international travelers using your mobile for SMS or phone calls, please be aware of the limits of your plan. This means 25 international notifications per user, per month for our Basic plan. Standard and Enterprise plans receive an unlimited number of international notifications per user, per month. For your account, the total number of available international notifications without an extra charge will be pooled across all your users. Over this total, you'll be charged an overage of $0.35 per notification. If you're interested in increasing the international notifications included with your plan, contact our [sales team](mailto:sales@pagerduty.com).

For international users in particular, please ensure that your users do not belong to a Do Not Call list, as some are very stringent and essentially prevent us from reaching your team members when you need them most.

9. **Choose your monitoring solution carefully**

This may save you a number of alerting-related headaches down the line. Think carefully about your needs when choosing an implementation.

We support Nagios, New Relic, Pingdom, Zenoss and [many others](https://www.pagerduty.com/integrations). Some monitoring tools, such as Nagios, will also automatically resolve incidents for you once an issue has been remediated.

10. **Reach out for help!**

Don't hesitate to reach out to the [PagerDuty Community](https://community.pagerduty.com) or [our support team](/docs/introduction#section-getting-help) with individual questions. Our support team has extensive experience with multiple implementations of monitoring services and may be able to help you with your needs.
[block:callout]
{
  "type": "info",
  "title": "Tip",
  "body": "When contacting support, include as many specific details as possible when creating your request, as this will enable us to move directly into troubleshooting.
</Callout>


11. **Tell us what you think!**

Contribute your feedback and, in particular, feature requests; these help us to roadmap and improve our service. We often find our beta testers through these requests, for instance, if you'd like an early sneak peek into upcoming features. If you'd like to file a feature request, email our support team.