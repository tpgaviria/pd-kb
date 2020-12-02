---
title: "Service Directory"
slug: "service-directory"
excerpt: "Use the Service Directory's flexible search engine to drill into relevant information and perform actions on services"
hidden: false
createdAt: "2019-08-08T20:06:27.521Z"
updatedAt: "2020-10-08T23:18:35.164Z"
---
The Service Directory allows everyone to search for the services they go on call for and learn more about the other services in their organization. The Service Directory is a searchable, high-level aggregate view of all the services your organization has represented in PagerDuty and their corresponding owners. From the Service Directory, you can dive into each individual service to learn more about it, make changes to the settings or metadata, and take further action. 

Use the Service Directory to [save your favorite questions](https://support.pagerduty.com/docs/service-directory#section-saving-searches-and-filters) about your services, like:

- *Which services owned by my teams had incidents in the last week?*
- *How many of the services in my organization have the word “database” in them?*
- *Are there any services that have never had an incident and are currently unowned by team? (Should we delete those services from PagerDuty?)*
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1593c9a-service-directory-overview.png",
        "service-directory-overview.png",
        1253,
        1006,
        "#f5f5f6"
      ]
    }
  ]
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The Service Directory is generally available on all PagerDuty plans and replaces the old Services list view. If you have any feedback regarding this feature, please [contact PagerDuty Support](mailto:support@pagerduty.com)."
}
[/block]
#Navigating to the Service Directory

In your PagerDuty account, navigate to **Services** :fa-arrow-right: **Service Directory**. You can still access the old Services list view by clicking on the **Return to previous version of Service list** link on the top of the page.

The Service Directory can also be accessed via the following link: 
`https://[YOUR-SUBDOMAIN].pagerduty.com/service-directory`

#Searching

When searching in the Service Directory, the query string will be matched against the service name and description. By default, the results will be ordered by relevance. Currently, the Service Directory provides the following fields with high-level context about your services:

##Service Name and Description
The name and description of your PagerDuty service. You can search for text in the name or description in the search bar at the top of the screen. Service Owners can edit a service name or description from the **More** menu or by navigating to the Service Details by clicking the service's name. For best practices on naming your services, please see our [Service Configuration Guide](https://support.pagerduty.com/docs/service-configuration-guide). 

##Team Name
The team that is associated with the service will be displayed. To learn more about how teams are associated with services, please check out our Knowledge Base article on [Teams](https://support.pagerduty.com/docs/teams). If your account does not have the teams feature available, the associated escalation policy will be displayed instead.

##On Call Now
The current on-call users for your service will be displayed. This will display the users on call at the first level of the escalation policy. If there are three users or more on call, this field will display the number of the users on call. You can click through to the service details page to see the full list of current on-call users. If no one is currently on call for the service, this information will be highlighted so that you can easily identify gaps in on-call coverage.

##Last Incident
The date and time of the last incident that was triggered on that service. You can click the link to quickly access the details for that last incident. If a service has never had any incidents, the field will be blank. 

##Open Incidents
The current number of triggered and acknowledged incidents on the service. You can click the links to view the open incidents on the service with a triggered or acknowledged status. 

##Service Incident State
Provides the current status of any incidents on the service from any of the following:

**No Open Incidents**: There are currently no open incidents on the service.
**Awaiting Response**: There are one or more open incidents on the service with a Triggered status.
**Response in Progress**: There are one or more open incidents on the service with an Acknowledged status.
**Disabled**: The service is currently disabled and will not trigger any new incidents.
**Maintenance**: The service is currently in maintenance mode.

##Search by integration key
The Service Directory allows you to search by integration key, returning a list of services where the key is configured. To search by integration key, you’ll need to prepend your search with `key` so that the search looks like `key:INTEGRATION-KEY-HERE`.

#Filtering and Sorting

Search queries, filters and sorting can be combined to refine your search results. You can use the following filters to narrow down your search results:

* **Team**
* **Business Service**
* **Last Incident**
* **Sort By**

##Team
The TEAM filter defaults to all of your teams, but can easily be adjusted to include All teams, No teams, or one specific team. If your service is not associated with a team, it will not appear with a team filter applied. Please note that this filter is only available to accounts with the [Teams](https://support.pagerduty.com/docs/teams) feature. 

##Business Service
The BUSINESS SERVICE filter allows you to filter for the technical services associated with a [Business Service](https://support.pagerduty.com/docs/business-services). Please note that you will need to configure your Business Services in order for the options to populate in this filter. 

##Last Incident
The LAST INCIDENT filter allows you to filter by services that have had a recent open incident. The current options are Any time, Within 24 hours and Within 7 days. 

##Sort
The SORT BY dropdown lets you further organize your search results. When navigating to the Service Directory, this will default to alphabetical order. Once you enter a search query, the sort will default to order by relevance. The sorting options include most relevant, Service name (A-Z), Service name (Z-A), Oldest incident and Most recent incident. If services have never had an incident, the Last Incident Time is considered infinite, so will be ordered after all other incidents for Most Recent Incident.  

#Saving Searches and Filters
The Service Directory makes it easy for you to customize and save a view of the services that are important to you. As you type your search and apply filters, the query parameters dynamically build in the URL. You can link to or bookmark the URL for a customized overview of your services.

#Additional Service Directory Actions

##Create a New Service
Located on the far right of the main Service Directory screen, click **+New Service**. Please note that this is only available to users with [permissions to create new services](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f6ebae-Screen_Shot_2020-03-02_at_10.16.48_AM.png",
        "Screen Shot 2020-03-02 at 10.16.48 AM.png",
        1200,
        245,
        "#f0f0f1"
      ]
    }
  ]
}
[/block]
##View Service Incidents
If you can see the service information from the Service Directory, you can navigate directly to an individual service’s detailed view of current incidents and other information, including upcoming maintenance windows and on call rotation. Located under the **More** menu on the far right of a service listing. 

##View Service Integrations
Depending on your permissions for a particular service, you can navigate directly to specific information about the integrations on that service. Located under the **More** menu on the far right of a service listing.
 
##Edit Service Settings
Depending on your permissions for a particular service, you can navigate directly its settings page to edit configuration choices, update escalation policy information, and modify metadata like the name and description. Located under the **More** menu on the far right of a service listing.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/02ca579-service-directory-settings.png",
        "service-directory-settings.png",
        1194,
        435,
        "#f6f5f7"
      ]
    }
  ]
}
[/block]
#FAQ

##When I search, what’s the default order?
The Service Directory will match the search query against the service name and service description, ordering the results from highest relevance to lowest. 

##Why does it say “3 people on call” instead of their names?
If your service has currently 3 or more people on call at the first level of the escalation policy, the Service Directory will display the number of users on call for that service. You can click the link through to the service details to view the full list of users that are on call.

##Why don’t I see any services?
If you are not seeing any services populate, check to see if you have any filters applied. You may want to adjust your team filter to **All teams** and your incident filter to **Any time**. If you are still not seeing any results, you may need to contact your PagerDuty Admin to confirm that you have the correct permissions to view the services in question. 

##What permissions are required to use the Service Directory?
Everyone can view services in the Service Directory that they have [View permissions for](https://support.pagerduty.com/docs/user-roles). Only users who have permission to create a new service or edit a service can take those actions from the Service Directory.  

##Where is the list of maintenance windows? 
The list of all active and previous maintenance windows is still located on the previous Services list and can be accessed from the **Maintenance Windows** tab. You can still schedule a maintenance window from a service details page and see upcoming maintenance windows for that service as well.