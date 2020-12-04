---
title: "Maintenance Windows — Early Access"
slug: "maintenance-windows-v2"
hidden: true
createdAt: "2020-02-20T23:56:54.234Z"
updatedAt: "2020-10-09T21:12:41.484Z"
---
[block:callout]
{
  "type": "info",
  "title": "Early Access",
  "body": "This feature is currently in development, and documentation is subject to change."
}
[/block]
Maintenance windows temporarily disable a service, including all of the integrations for the service, for a set period of time. No new incidents will be triggered while a service is in a maintenance window. Existing incidents will not resolve; they will remain open and continue to notify users on the expected escalation policy until manually resolved. When a maintenance window ends, the service will reactivate and incidents can start triggering again.

#View Maintenance Windows
You can view all maintenance windows for all services by going to **Services** :fa-arrow-right: **Service Directory**. On the Service Directory, click on on the **Maintenance Windows** tab.

![](https://files.readme.io/1fba750-maintenance-windows-overview.png)

#Create a Maintenance Window

1. Go to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: **Maintenance Windows**.
2. Click the **+ New Maintenance Window** button.
3. In the **Which services are affected?** section, search and select the affected service(s). In the **Why is this maintenance happening?** section, add details about the maintenance window. 
4. Next, you will have two options for when you would like the maintenance window to start:


   * **Start now and end in ___**: The maintenance window will begin **immediately** after saving. Select the **end time**: 15 minutes, 30 minutes, 60 minutes, 2 hours or 4 hours. 
   * **Start at a scheduled time**: If you would like to schedule the maintenance window to **start at a time in the future**, select this option and enter the **START date** and **time** and the **END date** and **time**. 

5. Click **Create Maintenance Window** to save the maintenance window.

Once you save a maintenance window, it will immediately show up in the list of maintenance windows.  Immediate windows will appear in **Happening Now**, and Scheduled windows will appear under **All Maintenance Windows**.

Current maintenance windows will also appear on the Service Profile under the service **Status**:

![](https://files.readme.io/7e7a051-maintenance-windows-service-directory.png)

And they will appear in the **Happening Now** section of your service **Activity**:

![](https://files.readme.io/0c84197-maintenance-windows-example.png)

##End a Maintenance Window

To end your maintenance window earlier than the scheduled time:

Go to **Services** :fa-arrow-right: **Service Directory** :fa-arrow-right: **Maintenance Windows**.
Click on the name of the Maintenance Window you would like to end.
Update the **End** day and time to be now, and then click **Save Changes**.


## Recurring Maintenance Windows
If you perform regularly scheduled maintenance that results in notifications being sent from your monitoring system to PagerDuty, you can use our API to create recurring maintenance windows in PagerDuty to prevent incidents from being triggered during these maintenance periods.

We've created a few different tools to help make this process easy for users who prefer a web UI, as well as those who would rather work in the command line:

* [Ruby 2.x Compatible Script](https://gist.github.com/lfepp/16a670d7a5e21afa5302401c2fe91653) (pd_maintenance_windows_v2.rb) (Note: You will need a [v2 REST API key](https://support.pagerduty.com/docs/generating-api-keys#section-generating-a-general-access-rest-api-key).)
* [Python 2 Compatible Script](https://gist.github.com/lfepp/32afebc59aa4b88a733bcc1b4f7236f9) (Note: You will need a v2 REST API key.)

Please note the Ruby scripts will not run as is, but require you to substitute your own values for the variables at the points indicated in the source code. Once the substitutions have been made, the script will allow you to create maintenance windows programmatically.

Other values as set in the script you may want to change also. For instance, the maintenance start and end time are 2 hours apart; please change this to adjust the length of time for the maintenance window. As written, the script will also create 20 maintenance windows, separated from each other by a week's time; please adjust these values to either changet the number of windows or the length of time between windows.

#Frequently Asked Questions
##Will incidents created before the service is put in a maintenance window be automatically resolved? 

No; existing open incidents will remain in their current state.

Moreover, incidents will not be automatically resolved through the Events API either. Starting a maintenance window is like flipping the "off" switch for all integrations; no actions can be taken through the Events API for all of that service's integrations when it is in a maintenance window, or disabled.