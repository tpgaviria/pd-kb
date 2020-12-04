---
title: "Using the REST API"
slug: "using-the-api-old"
hidden: true
createdAt: "2017-05-11T23:26:07.267Z"
updatedAt: "2020-10-09T22:35:28.399Z"
---
## Generating a General Access REST API Key

For more information about authenticating using an API key, please consult the [related documentation](https://v2.developer.pagerduty.com/docs/authentication).

For more information on the differences between the APIs, check out our article on the differences between our [REST and Events APIs](https://support.pagerduty.com/v1/docs/events-and-rest-apis). 
[block:callout]
{
  "type": "info",
  "body": "You must be an admin or account owner within PagerDuty to access your API key. REST API access is only included on the [Platform Team plan](https://www.pagerduty.com/pricing/) or higher — API access is not included on the Starter plan.",
  "title": "Note"
}
[/block]
1. Go to **Apps & Add-Ons** :fa-arrow-right: **API Access** and click **Create New API Key**.
2. Enter a **Description** that will help you identify the key later on. If you would like it to be read-only, check the *Read-only* option. 
3. Click **Create Key**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dd0cae8-API_Keys_-_PagerDuty.png",
        "API_Keys_-_PagerDuty.png",
        1162,
        556,
        "#dbdad8"
      ]
    }
  ]
}
[/block]
4. A unique API key will be generated. Copy it to a safe place and click **Close**.

Once you click Close you will be asked to confirm that you copied the API key. **This is your last chance to copy the key** — you will only be able to see the last 4 characters of the key in the PagerDuty interface after you confirm. If you lose a key you will need to delete it and create a new one.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e7e17ef-APIKeys_img3.png",
        "APIKeys_img3.png",
        613,
        463,
        "#f4f3ee"
      ]
    }
  ]
}
[/block]
Once created, you will see your key appear in the list of keys on the API Access page, with versioning noted.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6b8a068-APIKeys_img4.png",
        "APIKeys_img4.png",
        1148,
        243,
        "#ecf2f4"
      ]
    }
  ]
}
[/block]

## OpenAPI Spec

One can access and download the [OpenAPI](https://github.com/OAI/OpenAPI-Specification) JSON specification for the PagerDuty REST API at the following URL:

https://api-reference.pagerduty.com/output.json
## Integrations that Require REST API Access

The following integrations require the generation of a REST API key for setup:
- [Ansible](https://www.pagerduty.com/docs/guides/ansible-integration-guide/)
- [AppFirst](https://www.pagerduty.com/docs/guides/appfirst-integration-guide/)
- [BigPanda](https://www.pagerduty.com/docs/guides/bigpanda-integration-guide/)
- [CA UIM](https://www.pagerduty.com/docs/guides/ca-uim-integration-guide/)
- [Cloud Insights](https://www.pagerduty.com/docs/guides/cloud-insights-integration-guide/) 
- [CloudWeaver](https://www.pagerduty.com/docs/guides/cloudweaver-integration-guide/)
- [Demisto](https://www.pagerduty.com/docs/guides/demisto-integration-guide/)
- [Flowdock](https://www.pagerduty.com/docs/guides/flowdock-integration-guide/)
- [Foglight](https://www.pagerduty.com/docs/guides/foglight-integration-guide/)
- [Freshservice](https://www.pagerduty.com/docs/guides/freshservice-integration-guide/)
- [Google Stackdriver](https://www.pagerduty.com/docs/guides/stackdriver-integration-guide/)
- [Hubot](https://www.pagerduty.com/docs/guides/hubot-integration-guide/)
- [Kore](https://www.pagerduty.com/docs/guides/kore-integration-guide/)
- [Neptune.io](https://www.pagerduty.com/docs/guides/neptune-io-integration-guide/)
- [Quest Spotlight ](https://www.pagerduty.com/docs/guides/quest-spotlight-integration-guide/)
- [SaltStack](https://www.pagerduty.com/docs/guides/saltstack-integration-guide/)
- [ScienceLogic](https://www.pagerduty.com/docs/guides/sciencelogic-integration-guide/)
- [ServiceNow Enterprise](https://www.pagerduty.com/docs/guides/servicenow-integration-guide-legacy/)
- [ServiceNow Express](https://www.pagerduty.com/docs/guides/servicenow-express-integration-guide/)
- [StatusPage.io](https://www.pagerduty.com/docs/guides/statuspage-io-integration-guide/)
- [Temboo](https://www.pagerduty.com/docs/guides/temboo-integration-guide/)
- [Zapier](https://www.pagerduty.com/docs/guides/zapier-integration-guide/)
- [Zenoss 5](https://www.pagerduty.com/docs/guides/zenoss-5-integration-guide/)
- [Zenoss 4](https://www.pagerduty.com/docs/guides/zenoss-4-integration-guide/)
[block:callout]
{
  "type": "info",
  "body": "REST API access is only included on the current [Platform Team plan](https://www.pagerduty.com/pricing/) or higher. Because API access is not included on the Starter plan, the above integrations will not be available to accounts on Starter plans.",
  "title": "Note"
}
[/block]

## Generating a Personal REST API key

If your account has [Advanced Permissions](doc:advanced-permissions) enabled, users can create personal REST API keys on the **User Settings** tab of their user profile. Requests made using personal REST API keys will be restricted to the user's permissions.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ec8b19f-Responder_-_PagerDuty.png",
        "Responder_-_PagerDuty.png",
        1694,
        1454,
        "#f5f4f4"
      ]
    }
  ]
}
[/block]

## Getting Started with the REST API

The best place to start your API journey is with our [blog post introducing the API](https://www.pagerduty.com/blog/you-have-the-power/) for suggestions and examples of what other customers have done.

When you're ready for more, head over to the [PagerDuty Developer](https://v2.developer.pagerduty.com/) site for detailed documentation on our API endpoints.

You can also consult our [script library](https://github.com/PagerDuty/public-support-scripts) for examples of scripts that interact with our API. Scripts are available in Ruby, Python and PHP; most are simple `curl` calls with variables defined at the top where you will substitute your own values. These scripts should be easy to run from the command line on Unix, Linux and Mac.

Let's use `curl` to interact with the [GET schedules](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules/get_schedules) endpoint of our REST API from the command line as an example. In these examples, you will need to replace `<YOUR_API_KEY>` with a valid v2 REST API key. If you do not already have an access token, please take a look at our article on [Generating an API Key](/docs/using-the-api#section-generating-an-api-key).

With an API key, I can run the following command to list the details for all of my account's schedules:
[block:code]
{
  "codes": [
    {
      "code": "curl -H \"Accept: application/vnd.pagerduty+json;version=2\" \\\n -H \"Authorization: Token token=<YOUR_API_KEY>\" -X GET \\\n \"https://api.pagerduty.com/schedules\"",
      "language": "curl",
      "name": "Example Command"
    }
  ]
}
[/block]
I would then see the following output in my command line interface in JSON format:
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "This output has been formatted for readability. Your output may appear [minified](http://bit.ly/1QPTfNe) until you have used a program to format the JSON for readability."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n  \"schedules\": [\n    {\n      \"id\": \"P6JZ92K\",\n      \"type\": \"schedule\",\n      \"summary\": \"Admin - Global\",\n      \"self\": \"https://api.pagerduty.com/schedules/P6JZ92K\",\n      \"html_url\": \"https://webdemo.pagerduty.com/schedules/P6JZ92K\",\n      \"name\": \"Admin - Global\",\n      \"time_zone\": \"Australia/Sydney\",\n      \"description\": null,\n      \"escalation_policies\": [\n        {\n          \"id\": \"PJZ9LK2\",\n          \"type\": \"escalation_policy_reference\",\n          \"summary\": \"SiteAdmin 24x7\",\n          \"self\": \"https://api.pagerduty.com/escalation_policies/PJZ9LK2\",\n          \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/PJZ9LK2\"\n        },\n        {\n          \"id\": \"PA5W587\",\n          \"type\": \"escalation_policy_reference\",\n          \"summary\": \"Operations\",\n          \"self\": \"https://api.pagerduty.com/escalation_policies/PA5W587\",\n          \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/PA5W587\"\n        }\n      ],\n      \"users\": [\n        {\n          \"id\": \"PSAHZUD\",\n          \"type\": \"user_reference\",\n          \"summary\": \"David Shackelford\",\n          \"self\": \"https://api.pagerduty.com/users/PSAHZUD\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/PSAHZUD\"\n        },\n        {\n          \"id\": \"PRMXSSO\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Benedict Cumberbatch\",\n          \"self\": \"https://api.pagerduty.com/users/PRMXSSO\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/PRMXSSO\"\n        },\n        {\n          \"id\": \"P1BU2CE\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Dave Cliffe\",\n          \"self\": \"https://api.pagerduty.com/users/P1BU2CE\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/P1BU2CE\"\n        },\n        {\n          \"id\": \"P0VLWEU\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Samuel Clemens\",\n          \"self\": \"https://api.pagerduty.com/users/P0VLWEU\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/P0VLWEU\"\n        },\n        {\n          \"id\": \"P0YSUGZ\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Han Solo\",\n          \"self\": \"https://api.pagerduty.com/users/P0YSUGZ\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/P0YSUGZ\"\n        },\n        {\n          \"id\": \"PC92TC3\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Luke Skywalker\",\n          \"self\": \"https://api.pagerduty.com/users/PC92TC3\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/PC92TC3\"\n        },\n        {\n          \"id\": \"P79LCJF\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Andrew Bakhtiari\",\n          \"self\": \"https://api.pagerduty.com/users/P79LCJF\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/P79LCJF\"\n        },\n        {\n          \"id\": \"PQ8MK00\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Blake McMillan\",\n          \"self\": \"https://api.pagerduty.com/users/PQ8MK00\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/PQ8MK00\"\n        },\n        {\n          \"id\": \"P8GWIGI\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Colby Glieden\",\n          \"self\": \"https://api.pagerduty.com/users/P8GWIGI\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/P8GWIGI\"\n        },\n        {\n          \"id\": \"PX6RN71\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Angela Chapman\",\n          \"self\": \"https://api.pagerduty.com/users/PX6RN71\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/PX6RN71\"\n        },\n        {\n          \"id\": \"PBJEGFZ\",\n          \"type\": \"user_reference\",\n          \"summary\": \"David Lanstein\",\n          \"self\": \"https://api.pagerduty.com/users/PBJEGFZ\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/PBJEGFZ\"\n        },\n        {\n          \"id\": \"PEJV34Q\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Kyle Fitzpatrick\",\n          \"self\": \"https://api.pagerduty.com/users/PEJV34Q\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/PEJV34Q\"\n        }\n      ],\n      \"teams\": [\n        {\n          \"id\": \"PNOIFIV\",\n          \"type\": \"team_reference\",\n          \"summary\": \"Ops Team\",\n          \"self\": \"https://api.pagerduty.com/teams/PNOIFIV\",\n          \"html_url\": \"https://webdemo.pagerduty.com/teams/PNOIFIV\"\n        },\n        {\n          \"id\": \"P7W0ZIU\",\n          \"type\": \"team_reference\",\n          \"summary\": \"Monitoring Tools Team\",\n          \"self\": \"https://api.pagerduty.com/teams/P7W0ZIU\",\n          \"html_url\": \"https://webdemo.pagerduty.com/teams/P7W0ZIU\"\n        }\n      ]\n    },\n    {\n      \"id\": \"PEECITZ\",\n      \"type\": \"schedule\",\n      \"summary\": \"After Hours \",\n      \"self\": \"https://api.pagerduty.com/schedules/PEECITZ\",\n      \"html_url\": \"https://webdemo.pagerduty.com/schedules/PEECITZ\",\n      \"name\": \"After Hours \",\n      \"time_zone\": \"America/Los_Angeles\",\n      \"description\": null,\n      \"escalation_policies\": [\n        {\n          \"id\": \"P69WI9G\",\n          \"type\": \"escalation_policy_reference\",\n          \"summary\": \"John (Ops)\",\n          \"self\": \"https://api.pagerduty.com/escalation_policies/P69WI9G\",\n          \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/P69WI9G\"\n        },\n        {\n          \"id\": \"PA5W587\",\n          \"type\": \"escalation_policy_reference\",\n          \"summary\": \"Operations\",\n          \"self\": \"https://api.pagerduty.com/escalation_policies/PA5W587\",\n          \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/PA5W587\"\n        },\n        {\n          \"id\": \"PWRYUY4\",\n          \"type\": \"escalation_policy_reference\",\n          \"summary\": \"Operations - AWS\",\n          \"self\": \"https://api.pagerduty.com/escalation_policies/PWRYUY4\",\n          \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/PWRYUY4\"\n        },\n        {\n          \"id\": \"PBJRITM\",\n          \"type\": \"escalation_policy_reference\",\n          \"summary\": \"Weekends\",\n          \"self\": \"https://api.pagerduty.com/escalation_policies/PBJRITM\",\n          \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/PBJRITM\"\n        },\n        {\n          \"id\": \"PWCQTOV\",\n          \"type\": \"escalation_policy_reference\",\n          \"summary\": \"Alexis demo EP\",\n          \"self\": \"https://api.pagerduty.com/escalation_policies/PWCQTOV\",\n          \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/PWCQTOV\"\n        }\n      ],\n      \"users\": [\n        {\n          \"id\": \"PX6RN71\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Angela Chapman\",\n          \"self\": \"https://api.pagerduty.com/users/PX6RN71\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/PX6RN71\"\n        },\n        {\n          \"id\": \"P52YQZX\",\n          \"type\": \"user_reference\",\n          \"summary\": \"Dave\",\n          \"self\": \"https://api.pagerduty.com/users/P52YQZX\",\n          \"html_url\": \"https://webdemo.pagerduty.com/users/P52YQZX\"\n        }\n      ],\n      \"teams\": [\n        {\n          \"id\": \"PTN67DJ\",\n          \"type\": \"team_reference\",\n          \"summary\": \"Applications - PayPal\",\n          \"self\": null,\n          \"html_url\": null\n        },\n        {\n          \"id\": \"PRJ4D5C\",\n          \"type\": \"team_reference\",\n          \"summary\": \"ops\",\n          \"self\": \"https://api.pagerduty.com/teams/PRJ4D5C\",\n          \"html_url\": \"https://webdemo.pagerduty.com/teams/PRJ4D5C\"\n        },\n        {\n          \"id\": \"P7W0ZIU\",\n          \"type\": \"team_reference\",\n          \"summary\": \"Monitoring Tools Team\",\n          \"self\": \"https://api.pagerduty.com/teams/P7W0ZIU\",\n          \"html_url\": \"https://webdemo.pagerduty.com/teams/P7W0ZIU\"\n        }\n      ]\n    }\n  ],\n  \"limit\": 25,\n  \"offset\": 0,\n  \"total\": null,\n  \"more\": true\n}",
      "language": "json",
      "name": "Example Response"
    }
  ]
}
[/block]
On the [Schedules API index](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules/), I see that I can also pass arguments for individual schedules, by ID, with [GET schedules/{id}](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules/get_schedules_id).

I'll use the first schedule listed above, with ID `P6JZ92K`, and enter in the following `curl` command into my command line interface:
[block:code]
{
  "codes": [
    {
      "code": "curl -H \"Accept: application/vnd.pagerduty+json;version=2\" \\\n -H \"Authorization: Token token=<YOUR_API_KEY>\" -X GET \\\n \"https://api.pagerduty.com/schedules/P6JZ92K\"",
      "language": "curl",
      "name": "Example Command"
    }
  ]
}
[/block]
I would then see the following output: 
[block:code]
{
  "codes": [
    {
      "code": "{\n  \"schedule\": {\n    \"id\": \"P6JZ92K\",\n    \"type\": \"schedule\",\n    \"summary\": \"Admin - Global\",\n    \"self\": \"https://api.pagerduty.com/schedules/P6JZ92K\",\n    \"html_url\": \"https://webdemo.pagerduty.com/schedules/P6JZ92K\",\n    \"name\": \"Admin - Global\",\n    \"time_zone\": \"Australia/Sydney\",\n    \"description\": null,\n    \"escalation_policies\": [\n      {\n        \"id\": \"PJZ9LK2\",\n        \"type\": \"escalation_policy_reference\",\n        \"summary\": \"SiteAdmin 24x7\",\n        \"self\": \"https://api.pagerduty.com/escalation_policies/PJZ9LK2\",\n        \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/PJZ9LK2\"\n      },\n      {\n        \"id\": \"PA5W587\",\n        \"type\": \"escalation_policy_reference\",\n        \"summary\": \"Operations\",\n        \"self\": \"https://api.pagerduty.com/escalation_policies/PA5W587\",\n        \"html_url\": \"https://webdemo.pagerduty.com/escalation_policies/PA5W587\"\n      }\n    ],\n    \"users\": [\n      {\n        \"id\": \"PRMXSSO\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Benedict Cumberbatch\",\n        \"self\": \"https://api.pagerduty.com/users/PRMXSSO\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/PRMXSSO\"\n      },\n      {\n        \"id\": \"P1BU2CE\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Dave Cliffe\",\n        \"self\": \"https://api.pagerduty.com/users/P1BU2CE\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/P1BU2CE\"\n      },\n      {\n        \"id\": \"PSAHZUD\",\n        \"type\": \"user_reference\",\n        \"summary\": \"David Shackelford\",\n        \"self\": \"https://api.pagerduty.com/users/PSAHZUD\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/PSAHZUD\"\n      },\n      {\n        \"id\": \"P0YSUGZ\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Han Solo\",\n        \"self\": \"https://api.pagerduty.com/users/P0YSUGZ\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/P0YSUGZ\"\n      },\n      {\n        \"id\": \"PC92TC3\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Luke Skywalker\",\n        \"self\": \"https://api.pagerduty.com/users/PC92TC3\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/PC92TC3\"\n      },\n      {\n        \"id\": \"P0VLWEU\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Samuel Clemens\",\n        \"self\": \"https://api.pagerduty.com/users/P0VLWEU\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/P0VLWEU\"\n      },\n      {\n        \"id\": \"PX6RN71\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Angela Chapman\",\n        \"self\": \"https://api.pagerduty.com/users/PX6RN71\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/PX6RN71\"\n      },\n      {\n        \"id\": \"P79LCJF\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Andrew Bakhtiari\",\n        \"self\": \"https://api.pagerduty.com/users/P79LCJF\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/P79LCJF\"\n      },\n      {\n        \"id\": \"PBJEGFZ\",\n        \"type\": \"user_reference\",\n        \"summary\": \"David Lanstein\",\n        \"self\": \"https://api.pagerduty.com/users/PBJEGFZ\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/PBJEGFZ\"\n      },\n      {\n        \"id\": \"PQ8MK00\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Blake McMillan\",\n        \"self\": \"https://api.pagerduty.com/users/PQ8MK00\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/PQ8MK00\"\n      },\n      {\n        \"id\": \"PEJV34Q\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Kyle Fitzpatrick\",\n        \"self\": \"https://api.pagerduty.com/users/PEJV34Q\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/PEJV34Q\"\n      },\n      {\n        \"id\": \"P8GWIGI\",\n        \"type\": \"user_reference\",\n        \"summary\": \"Colby Glieden\",\n        \"self\": \"https://api.pagerduty.com/users/P8GWIGI\",\n        \"html_url\": \"https://webdemo.pagerduty.com/users/P8GWIGI\"\n      }\n    ],\n    \"schedule_layers\": [\n      {\n        \"name\": \"Layer 2\",\n        \"rendered_schedule_entries\": [],\n        \"rendered_coverage_percentage\": null,\n        \"id\": \"PS8Y15O\",\n        \"start\": \"2016-05-18T07:00:39+10:00\",\n        \"end\": null,\n        \"rotation_virtual_start\": \"2016-05-16T20:00:00+10:00\",\n        \"rotation_turn_length_seconds\": 604800,\n        \"users\": [\n          {\n            \"user\": {\n              \"id\": \"P0VLWEU\",\n              \"type\": \"user_reference\",\n              \"summary\": \"Samuel Clemens\",\n              \"self\": \"https://api.pagerduty.com/users/P0VLWEU\",\n              \"html_url\": \"https://webdemo.pagerduty.com/users/P0VLWEU\"\n            }\n          },\n          {\n            \"user\": {\n              \"id\": \"P0YSUGZ\",\n              \"type\": \"user_reference\",\n              \"summary\": \"Han Solo\",\n              \"self\": \"https://api.pagerduty.com/users/P0YSUGZ\",\n              \"html_url\": \"https://webdemo.pagerduty.com/users/P0YSUGZ\"\n            }\n          },\n          {\n            \"user\": {\n              \"id\": \"PC92TC3\",\n              \"type\": \"user_reference\",\n              \"summary\": \"Luke Skywalker\",\n              \"self\": \"https://api.pagerduty.com/users/PC92TC3\",\n              \"html_url\": \"https://webdemo.pagerduty.com/users/PC92TC3\"\n            }\n          }\n        ],\n        \"restrictions\": [\n          {\n            \"type\": \"daily_restriction\",\n            \"start_time_of_day\": \"20:00:00\",\n            \"duration_seconds\": 43200\n          }\n        ]\n      },\n      {\n        \"name\": \"Layer 1\",\n        \"rendered_schedule_entries\": [],\n        \"rendered_coverage_percentage\": null,\n        \"id\": \"PD3V39R\",\n        \"start\": \"2016-05-18T07:00:39+10:00\",\n        \"end\": null,\n        \"rotation_virtual_start\": \"2016-05-16T08:00:00+10:00\",\n        \"rotation_turn_length_seconds\": 604800,\n        \"users\": [\n          {\n            \"user\": {\n              \"id\": \"PSAHZUD\",\n              \"type\": \"user_reference\",\n              \"summary\": \"David Shackelford\",\n              \"self\": \"https://api.pagerduty.com/users/PSAHZUD\",\n              \"html_url\": \"https://webdemo.pagerduty.com/users/PSAHZUD\"\n            }\n          },\n          {\n            \"user\": {\n              \"id\": \"PRMXSSO\",\n              \"type\": \"user_reference\",\n              \"summary\": \"Benedict Cumberbatch\",\n              \"self\": \"https://api.pagerduty.com/users/PRMXSSO\",\n              \"html_url\": \"https://webdemo.pagerduty.com/users/PRMXSSO\"\n            }\n          },\n          {\n            \"user\": {\n              \"id\": \"P1BU2CE\",\n              \"type\": \"user_reference\",\n              \"summary\": \"Dave Cliffe\",\n              \"self\": \"https://api.pagerduty.com/users/P1BU2CE\",\n              \"html_url\": \"https://webdemo.pagerduty.com/users/P1BU2CE\"\n            }\n          }\n        ],\n        \"restrictions\": [\n          {\n            \"type\": \"daily_restriction\",\n            \"start_time_of_day\": \"08:00:00\",\n            \"duration_seconds\": 43200\n          }\n        ]\n      }\n    ],\n    \"overrides_subschedule\": {\n      \"name\": \"Overrides\",\n      \"rendered_schedule_entries\": [],\n      \"rendered_coverage_percentage\": null\n    },\n    \"final_schedule\": {\n      \"name\": \"Final Schedule\",\n      \"rendered_schedule_entries\": [],\n      \"rendered_coverage_percentage\": null\n    },\n    \"teams\": [\n      {\n        \"id\": \"PNOIFIV\",\n        \"type\": \"team_reference\",\n        \"summary\": \"Ops Team\",\n        \"self\": \"https://api.pagerduty.com/teams/PNOIFIV\",\n        \"html_url\": \"https://webdemo.pagerduty.com/teams/PNOIFIV\"\n      },\n      {\n        \"id\": \"P7W0ZIU\",\n        \"type\": \"team_reference\",\n        \"summary\": \"Monitoring Tools Team\",\n        \"self\": \"https://api.pagerduty.com/teams/P7W0ZIU\",\n        \"html_url\": \"https://webdemo.pagerduty.com/teams/P7W0ZIU\"\n      }\n    ]\n  }\n}",
      "language": "json",
      "name": "Example Response"
    }
  ]
}
[/block]
Reading the documentation again, I see that I can also pass two parameters of interest to `since` and `until`. I can include these parameters in the request as follows:
[block:code]
{
  "codes": [
    {
      "code": "curl -H \"Accept: application/vnd.pagerduty+json;version=2\" \\\n -H \"Authorization: Token token=<YOUR_API_KEY>\" -X GET \\\n \"https://api.pagerduty.com/schedules/P6JZ92K?since=2016-06-01&until=2016-07-01\"",
      "language": "curl",
      "name": "Example Command"
    }
  ]
}
[/block]
Please note that submitted data should be [encoded](https://en.wikipedia.org/wiki/Percent-encoding). This means that here and elsewhere, the first argument can be submitted at the end of the URL with a question mark (`?`), and every other argument after the first using an ampersand (`&`). You should not include quotation marks around arguments, even if the argument has a space within it (i.e. for a service named **Ops - Weekly**). Instead, using percent encoding, spaces would be represented as `%20`.

`curl` also provides a `- -data-urlencode` flag that can be used to automatically encode your parameters properly. We suggest using this flag in most situations to avoid potential issues with special characters in your parameters. I can run the same command as above with the `- -data-urlencode` flag as follows:
[block:code]
{
  "codes": [
    {
      "code": "curl -H \"Accept: application/vnd.pagerduty+json;version=2\" \\\n -H \"Authorization: Token token=<YOUR_API_KEY>\" -X GET -G \\\n - -data-urlencode \"since=2016-06-01\" \\\n - -data-urlencode \"until=2016-07-01\" \\\n \"https://api.pagerduty.com/schedules/P6JZ92K\"",
      "language": "curl",
      "name": "Example Command"
    }
  ]
}
[/block]