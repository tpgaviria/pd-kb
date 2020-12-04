---
title: "Custom Incident Actions"
slug: "custom-incident-actions"
hidden: false
createdAt: "2017-05-10T19:36:51.395Z"
updatedAt: "2020-10-09T22:15:39.939Z"
---
Custom incident actions provide a user assigned to an incident with a quick way to execute custom logic housed outside of the PagerDuty system. Customers can host their own custom scripts that execute when these actions are executed, which provides users with a nearly limitless number of possible actions.

##Creating a Custom Incident Action
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "Observers, Responders, Managers, Global Admins and Account Owners can create custom incident actions. \n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
1. Go to **Apps & Add-Ons** :fa-th-large: :fa-arrow-right: **Extensions**.
2. Click **+ New Extension** in the **Service Extensions tab** and search for ‘Custom Incident Action’, as the **Extension Type**. 
3. From here you will be taken to the **Custom Incident Action** extension page. If you have not yet created any custom actions, the page will display a message with information about custom incident actions. On this page, select **New Action** to create your new action.
4. You will be brought to a form where you can configure your custom action. The most important field is the **URL endpoint**, which is where we will be sending the HTTP POST requests when your custom action button is selected. 
5. When you have finished configuring your custom action, you can select **Create Action** to finish creating your action.

For more information about the payload you will receive through a PagerDuty webhook, please [visit this page](https://v2.developer.pagerduty.com/docs/webhooks-v2-overview). 

![](https://files.readme.io/190f46e-webhooks-custom-incident-action.png)

Once you have created your custom action, you will see the action button available on all incidents on that service.

![](https://files.readme.io/131006d-custom-incident-actions-incident-button.png)

When a user clicks on this button, it will fire an HTTP POST request with data on the incident to the endpoint URL specified during configuration. You can then build a script that listens for this request and executes custom logic when a request is received.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "There is a maximum of three custom incident actions per service."
}
[/block]
##Common Use Cases
###Restart Server
Create a **Restart Server** button on your incidents that, when selected, restarts the server associated with the incident. The custom action POST request will include details on the incident that would allow a single script to dynamically determine the server in need of a restart.

###Add Diagnostics
Create an **Add Diagnostics** button that fetches diagnostic data on the affected infrastructure and appends the data as a note on your PagerDuty incident. This gives your users visibility into key infrastructure data right in the PagerDuty incident.

###Revert Last Commit
Create a **Revert Last Commit** button that will revert the last commit in your repository that houses the source code for the affected service. This allows your users to quickly roll-back a bad deploy without leaving the PagerDuty platform.

###Update Status Page
Create an **Update Status Page** button that will let your users update your status page with one click. This lets your users update your customers as soon as an incident occurs.