---
title: "Maintenance Windows"
slug: "maintenance-windows"
excerpt: "Temporarily disable a service, along with its integrations and incidents"
hidden: false
createdAt: "2017-05-10T15:37:31.163Z"
updatedAt: "2020-10-09T21:05:26.037Z"
---
Maintenance windows temporarily disable a service, including all of the integrations for the service, for a set period of time. A service disabled under a maintenance window is considered to be in maintenance mode.

No new incidents will be triggered while a service is in maintenance mode. Existing incidents will not resolve; they will remain open and continue to notify users on the expected escalation policy until manually resolved.

When a maintenance window ends the service will immediately exit maintenance mode and incidents can start triggering again.
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Admin, Manager, Global Admin or Account Owner roles can manage maintenance windows.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]

## Scheduling Maintenance

##Disable a Service

From a service's page, click **More**, select **Disable Service**, and confirm the disable prompt. This service is now indefinitely disabled; click **More** and select **Enable** to allow incidents to trigger on this service again.

##Immediately Put a Service in Maintenance Mode

1. Go to **Services** :fa-arrow-right: **Service Directory**.
2. Click on the name of the service you would like to put into immediate maintenance.
3. In the **Activity** tab, scroll to the bottom and click **+New Maintenance Window**.
4. Your service will already be populated under **Which services are affected**?, you may *optionally* select other services from the dropdown if there are others you wish to put in maintenance mode.
5. Under **Why is this maintenance happening?** enter a brief description to give team members context.
6. Select *Start now and end in** and select the end time of **15 minutes, 30 minutes, 60 minutes, 2 hours** or **4 hours** and click **Create Maintenance Window**.

##Schedule a Maintenance Window

1. Go to **Services** :fa-arrow-right: **Service Directory**.
2. Click on the name of the service you would like to put into immediate maintenance.
3. In the **Activity** tab, scroll to the bottom and click **+New Maintenance Window**.
4. Your service will already be populated under **Which services are affected**?, you may *optionally* select other services from the dropdown if there are others you wish to put in maintenance mode.
5. Under **Why is this maintenance happening?** enter a brief description to give team members context.
6. Select **Start at a Scheduled Time** and select your **Time Zone**. Enter window start and end dates and times in dialogue window.
5. Click **Create Maintenance Window**.
## Confirm that a Service is in Maintenance Mode

1. The Maintenance Windows tab at **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: **Maintenance Windows** shows current, future, and past maintenance windows across all services. 
2. :fa-wrench: appears next to a service on the **Services** page.
3. :fa-pause: appears next to a service on the **Services** page.
4. <span style="border: 1px solid #484848 !important; border-radius: 25px; padding: 4px 10px;">:fa-wrench: <strong>In Maintenance</strong></span> appears at the top of a service's individual page.
## Take a Service out of Maintenance Mode

1. Go to **Services** :fa-arrow-right: **Service Directory** and select the **Maintenance Windows** tab.
2. Under **All Maintenance Windows**, find your desired maintenance window and click **Update** to its right.
3. Click the red **End Now** button the end the maintenance window.
## Recurring Maintenance Mode for Services

If you perform regularly scheduled maintenance that results in notifications being sent from your monitoring system to PagerDuty, you can use our API to create recurring maintenance windows in PagerDuty to prevent incidents from being triggered during these maintenance periods.

We've created a few different tools to help make this process easy for users who prefer a web UI, as well as those who would rather work in the command line:

* [Ruby 2.x Compatible Script (pd_maintenance_windows_v2.rb)](https://gist.github.com/lfepp/16a670d7a5e21afa5302401c2fe91653) (Note: You will need a v2 REST API key.) 
* [Python 2 Compatible Script](https://gist.github.com/lfepp/32afebc59aa4b88a733bcc1b4f7236f9) (Note: You will need a v2 REST API key.) 

Please note the Ruby scripts will not run as is, but require you to substitute your own values for the variables at the points indicated in the source code. Once the substitutions have been made, the script will allow you to create maintenance windows programmatically.

Other values as set in the script you may want to change also. For instance, the maintenance start and end time are 2 hours apart; please change this to adjust the length of time for the maintenance window. The script as written will also create 20 maintenance windows, separated from each other by a week's time; please adjust these values to either adjust the number of windows or the length of time between windows.
## Frequently Asked Questions

## Will incidents created before the service is put in maintenance mode be automatically resolved?

No; existing open incidents will remain in their current state.

Moreover, incidents will not be automatically resolved through the Events API either. Maintenance mode is like flipping the "off" switch for all integrations; no actions can be taken through the Events API for all of that service's integrations when it is in a maintenance period, or disabled.