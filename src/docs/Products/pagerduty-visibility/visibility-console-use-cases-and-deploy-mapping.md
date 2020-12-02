---
title: "Visibility Console - Use Cases and Deploy Mapping"
slug: "visibility-console-use-cases-and-deploy-mapping"
hidden: true
createdAt: "2019-05-30T16:14:05.625Z"
updatedAt: "2019-10-30T17:42:30.890Z"
---
[block:api-header]
{
  "title": "Example Use Case for the Infrastructure Health Application"
}
[/block]
Integrating inbound tweets into your PagerDuty [Infrastructure Health Application](#section-infrastructure-health-application) is a great way to track user responses to deploys and outages. Twitter does not support webhooks, so an intermediary tool is necessary in order to send events from Twitter to PagerDuty. You can use a tool like Zapier or Microsoft Flow. The following guide provides an example of how to integrate Twitter with the Infrastructure Health Application using Zapier.

##Integration Instructions

###In PagerDuty

1. Set up a new Twitter service in PagerDuty, or add a Twitter extension as a generic webhook to an existing service. 
2. For a new Twitter service, select the custom event transformer integration type as the **Integration Type**.
3. We suggest setting the notification urgency for the service as [suppressed](doc:event-management-tools#section-suppression-and-event-rules) to prevent alerting for incoming tweets.
4. On your Twitter service's individual page, select the **Integrations** tab and click on **Custom Event Transformer**. Then click **Add Integration**.
5. Select **Edit Integration**.
6. Delete the JavaScript that appears on the **Edit Integration** page 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/93a2ec7-delete_javascript.png",
        "delete javascript.png",
        779,
        514,
        "#e9f5e2"
      ]
    }
  ]
}
[/block]
7. Here is an example of what can be pasted into the JavaScript field. You can map these fields to meet your specific needs. Ensure that `event_class` is set to `"tweet"` in order to have Twitter events appear as small blue "T's" in the Infrastructure Health Application interface so that they are easily differentiated from alerts.
[block:code]
{
  "codes": [
    {
      "code": "var body = PD.inputRequest.body;\n\nvar cef_event = {\n event_type: 'cef',\n creation_time: new Date(body.created_at),\n severity: \"Info\",\n priority: body.retweet_count,\n client: \"Twitter\",\n client_url: body.url,\n event_class: \"tweet\",\n message: body.text,\n details: body.user.description,\n source_component: \"Twitter\",\n source_origin: \"Twitter\",\n reporter_component: \"Twitter\",\n local_instance_id: body.id,\n event_action: PD.Trigger\n};\n\nPD.emitCEFEvents([cef_event]);",
      "language": "javascript"
    }
  ]
}
[/block]
###In Zapier

8. Create a zap in Zapier to fire webhooks from Twitter to PagerDuty. Be sure to choose **Twitter** when prompted to select a trigger app.
9. When asked to Select Twitter Trigger, opt for **Search Mentions**.
10. On the next screen you will be prompted to enter the search term you are interested in tracking in Twitter.
11. Next you will be asked to Choose an Action App. Select the **Webhooks by Zapier** option.
12. You will be prompted to Choose Action. For this step, click the radio button to select **POST: Fire off a single POST request as a form or JSON**.

###Return to PagerDuty 

13. Go back to your Twitter service's individual service page and click on the **Integrations** tab. Then click on the **Custom Events Transformer**.
14. Copy the URL provided under **Integration URL**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bedd813-CET_link.png",
        "CET link.png",
        905,
        328,
        "#394c64"
      ]
    }
  ]
}
[/block]
###Return to Zapier

15. Paste the PagerDuty URL into Zapier on the **Set up Webhooks by Zapier POST** page.
16. Test, and select field.
17. Click **Finish**.
[block:api-header]
{
  "title": "Mapping Deploys to the Infrastructure Health Application"
}
[/block]
Including deploys in your PagerDuty [Infrastructure Health Application](https://support.pagerduty.com/docs/visibility-console#section-infrastructure-health-application) can help you determine if a code rollback could help you in the event of a service degradation. Using PagerDuty’s Custom Event Transformer, you can track these deploys by sending an event to a specific service anytime a deploy is rolled out.

##Integration Instructions

###In PagerDuty

1. Set up a new service in PagerDuty, or add a Common Event Transformer integration to an existing service.
2. For a brand new service, select the custom event transformer integration type as the **Integration Type**.
3. When setting up this service, we suggest setting the How should responders be notified? setting to **Notify responders, do not escalate** to minimize the impact of this service on the folks who are on-call. 
4. Finalize your service setup by clicking **Add Service** at the bottom of the page.
5. After you’ve saved your service, edit the integration you added. 
6. Delete the JavaScript that appears on the **Edit Integration** page
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a709318-Mapping-Deploys-IHA-Delete-Javascript.png",
        "Mapping-Deploys-IHA-Delete-Javascript.png",
        779,
        514,
        "#f6f8f5"
      ]
    }
  ]
}
[/block]
You are now going to replace the dummy JavaScript that was in the **The code you want to execute** box, and replace it with this:
[block:code]
{
  "codes": [
    {
      "code": "var probabilityOfDeploy = 0.1\nvar body = PD.inputRequest.body;\nvar date = new Date();\nvar isodate = date.toISOString()\n\nvar cef_event_deploy = {\n  event_type: 'cef',\n  message: 'Deploying Master 3dd13:use-rounded-circle-in-carousel-example',\n  description:'Deploying Master 3dd13:use-rounded-circle-in-carousel-example',\n  creation_time: isodate,\n  client: 'GitHub',\n  client_url: 'https://github.com/twbs/bootstrap/pull/21076',\n  source_origin: 'github.com/twbs/bootstrap',\n  severity: 'info',\n  event_class: 'deploy',\n  event_action: PD.Trigger,\n  details: {\n    demo: \"demo\",\n    script: \"sedmo-populator-2.0b\",\n    time: date.getHours()\n  }\n};\n\nPD.emitCEFEvents([cef_event_deploy]);",
      "language": "javascript"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Formatting an event to send to your deploy service"
}
[/block]
Here is an example event that will trigger an event to this service, and map a deploy to your Infrastructure Health Application:
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"payload\": {\n    \"summary\": \"Example alert on host1.example.com\",\n    \"timestamp\": \"2015-07-17T08:42:58.315+0000\",\n    \"source\": \"minotoriringtool:cloudvendor:central-region-dc-01:852559987:cluster/api-stats-prod-003\",\n    \"severity\": \"info\",\n    \"component\": \"postgres\",\n    \"group\": \"prod-datapipe\",\n    \"class\": \"deploy\",\n    \"custom_details\": {\n      \"ping time\": \"1500ms\",\n      \"load avg\": 0.75\n    }\n  },\n  \"routing_key\": \"samplekeyhere\",\n  \"dedup_key\": \"samplekeyhere\",\n  \"images\": [{\n  \t\"src\": \"https://www.pagerduty.com/wp-content/uploads/2016/05/pagerduty-logo-green.png\",\n  \t\"href\": \"https://example.com/\",\n  \t\"alt\": \"Example text\"\n  }\n  \t],\n  \"event_action\": \"trigger\",\n  \"client\": \"Sample Monitoring Service\",\n  \"client_url\": \"https://monitoring.example.com\"\n}\n",
      "language": "json"
    }
  ]
}
[/block]
Many of the strings and objects in this event are optional, and an event tailored to your use case may look a bit different. One of the more important pieces of this sample event is what you put in the `payload.class` string. By setting this to `deploy`, this will tell PagerDuty to display this event as a diamond, instead of the standard colored dot that most events render to. This diamond shape will help you quickly determine which events are deploys, and which are output from monitoring tools.

This event follows the formatting of our v2 Events API. More more information how how to format events sent through the v2 Events API, please reference our [developer docs](https://v2.developer.pagerduty.com/docs/send-an-event-events-api-v2).