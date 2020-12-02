---
title: "Glossary"
slug: "glossary"
excerpt: "A glossary of key concepts and terminology used throughout PagerDuty"
hidden: false
createdAt: "2017-02-08T07:26:39.727Z"
updatedAt: "2020-10-08T22:42:02.898Z"
---
### Account Owner
An Account Owner has the ability to:

* Add new users
* Delete users
* Edit a user's profile/password
* Add/edit/delete on-call schedules
* Add/edit/delete escalation policies
* Add/edit/delete services
* Create/delete REST API keys
* Access all billing information
* Change the account owner or delete the account

### Acknowledged Incident
A user will acknowledge an incident if the user wants to communicate that the issue is being worked on but has not yet been resolved. Acknowledging an incident halts the escalation process. Once an incident has been acknowledged, no more notifications will be sent until the incident ack timeout is reached. If the incident ack timeout is reached then the incident will go from the acknowledged state back to the triggered state.

### Admin
An Admin can:

* Add new users
* Delete users
* Edit a user's profile/password
* Add/edit/delete on-call schedules
* Add/edit/delete escalation policies
* Add/edit/delete services
* Create/delete REST API keys

However, Admins cannot change or delete the Account Owner and do not have access to billing information.

### Auto-Escalation
Auto-escalation is when an incident is not acknowledged by the on-call user within the specified time. If this occurs, the incident is automatically escalated to the secondary on-call user or the next user in line. The default settings for auto escalation is 30 minutes, but you can change this setting.

### Contact Method

A contact method is any phone number, SMS number, email address, or push notification that is associated with a single user's profile. A combination of 10 different contact methods can be added to an individual user profile. 

### Incidents Page
The incidents page is the first screen that appears when you log in to your PagerDuty account.  
The incidents page gives you easy access to:

* Incidents that are assigned to you
* Activity for the past 7 days
* Who is on-call at that time
* When you will be on-call next

You can also view a quick count of how many incidents have been triggered, how many acknowledged incidents are currently open, and access a more detailed list of total resolved, acknowledged, and open incidents.

### Email Filters
Email filters are used within Generic Email Services to filter out certain emails from triggering incidents. Regex filters are configured to set conditions for when an email should trigger an incident and when it should not. You can set the regex filters to filter emails by email subject, by the body of the email, and/or the from address.
Regex filters allow you to set up the service to:

* Accept all incoming email
* Accept mail only if it matches one or more of the regex filter rules set up
* Accept email only if it matches all of the regex filter rules set up

### Email Management Rules:
Email management rules can be used in tandem with email filters on Generic Email Services. With email management rules, you can preset rules on a service to determine how your events will behave based on the content of your events. You can select which of your events will trigger, and you can auto-resolve related events by grouping them based by an event key.

### Escalation Policy
An escalation policy determines what user or schedule should be notified first, second and so on, when an incident is triggered. Escalation policies are attached to specific services.

### Escalation Rule
Each escalation rule represents a level of on-call duty. The first escalation rule in the escalation policy is the user that will be notified first about the triggered incident. If the first on-call user does not respond before the incident timeout, then the second on-call user or user that is on-call on a specific schedule will be notified of the triggered incident.

### Escalation Timeout
An escalation timeout is the time period where if the incident is not acknowledged or resolved, it will be escalated to the next escalation rule. The default escalation timeout is set to 30 minutes but this can be adjusted to any amount of time (in minutes).

### Incident
An incident is triggered within a service and is the event that sets off a notification to the on-call user. Incidents can only be created when there is someone on-call within an escalation policy. In other words, if there is nobody to assign an incident to at the time an event is sent to PagerDuty, then an incident will not be created.

### Incident Ack Timeout
An incident ack (acknowledgement) timeout is a service setting which allows you to specify an amount of time after which an incident will return from acknowledged back to the triggered state. Incident ack timeout is off by default, but can be adjusted to 10 minutes, 20 minutes, 30 minutes, 40 minutes, 50 minutes, 60 minutes, 90 minutes, 2 hours, 3 hours, 4 hours, 5 hours, 6 hours, 12 hours, or 24 hours in the web UI. If you need to set this to a time that is not in these options, you can do so from our [REST API](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Services/put_services_id). 

### Incident Auto-Resolution
An incident auto-resolution is a service setting which allows you to set incidents to automatically resolve after a specified amount of time. Once this time has passed, the incident is resolved and no additional notifications will be sent out. This setting is off by default, but can be adjusted to 10 minutes, 20 minutes, 30 minutes, 40 minutes, 50 minutes, 60 minutes, 90 minutes, 2 hours, 3 hours, 4 hours, 5 hours, 6 hours, 12 hours, or 24 hours. If you need to set this to a time that is not in these options, you can do so from our [REST API](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Services/put_services_id). 

### Integration
An integration is used to integrate with any monitoring tool. Integrations live on services. Many monitoring tools can integrate with PagerDuty using an API integration. However, if we do not offer an API Integration, you can use the generic email to integrate with any monitoring tool that has the ability to send emails (even in-house solutions). View a list of supported monitoring tools [here](https://www.pagerduty.com/integrations).

### Integration Email
An integration email is used in an Email Service type. When an email is sent to the integration email address, an incident is triggered in that service. The domain is already determined based on your account subdomain, but you will need to create the username.

### Looping Through Escalation Rules
Looping through escalation rules means that if the escalation policy rotates through all escalation levels and the incident is still not resolved, the incident can start back at the first on-call user and repeat all the escalation levels. The default is set to loop through the escalation policy a total of 2 times but this can be adjusted to 3, 4, 5, 6, 7, 8, 9, or 10 times.

### Maintenance Window
A Maintenance Window is used to temporarily disable a service for a set period of time. No incidents will be triggered and no notifications will be sent while a service is disabled. You can schedule a maintenance window for a future date and time or you can also "disable the service" immediately which allows you to skip over creating a maintenance period by manually controlling the maintenance period. Finally, you can select 1-click immediate maintenance, which allows you to immediately disable the service for a specified time of 5 minutes, 15 minutes, 30 minutes, or 60 minutes.

### Mobile On-Call Directory
The Mobile On-Call Directory shows you whether you are on-call or off-call at the current time. The screen displays “On-Call” or “Off-Call” and the number of triggered and acknowledged incidents are currently assigned to you. You can also view who is on-call by simply clicking on the specific escalation policy.

### Notification
A notification is sent to the user on-call when an incident has been triggered. The service name of the triggered incident and the subject of the incident is included in the notification message.
Notifications can be sent as:

* Phone Call
* SMS
* Email
* Push Notification from the PagerDuty mobile app

### Notification Rules
These are rules that determine how an individual user is notified of an incident assigned to them. You can set rules up to notify you on any of the contact methods in your profile. Individuals can set up their notification rules to notify them via phone, SMS, email, or push immediately or at any interval of 1 minute after an incident has been triggered and assigned to that user.

### On-Call Restrictions
Restrictions on an on-call schedule determine what hours during the day, and which days, a user is on-call. For example, you can set the restrictions to have a user on-call from 0900-1700 every day or you can set the restrictions to have a user on-call from 1800-0600 only Monday through Friday. 

### On-Call Schedule
An on-call schedule is a rotation that determines who is on-call at a specific time and date. On-Call Schedules are used to manage on-call rotations.

### Override
An override is used to make a one-time change to the on-call schedule.  An override is typically used if the on-call user is out sick or on vacation and you want another user to fill in for their on-call shift.

### Resolved Incident
An incident is resolved when the user has completed fixing the issue and they want the incident to be closed out. Once an incident is resolved, no additional notifications will be sent; the incident cannot be opened again.

### Rotation Type
A rotation type determines how an on-call schedule circles through the included users. Rotation types can be set to have users on-call for a day at a time or a week at a time, or the rotation can be customized to any specified number of hours, days, or weeks.

### Schedule Gaps
A gap in the schedule indicates that no one is on-call for a certain amount of time. If there is a gap in the schedule, and no one is on-call, then an incident cannot be created.

### Schedule Layer
Schedule layers are used to help build complex on-call schedules. If a user requires different on-call restrictions, they will need to be added to an additional layer on the on-call schedule. If two layers overlap one another then the "bottom" layer will take precedence.

### Service
A service may represent an application, component, or team you wish to open incidents against. Services contain integrations, as well as determine the routing and incident settings for events triggered by integrations associated with the service. 

### Trigger Incident
An incident is considered to be triggered before any user responds to the notification. Once an incident is triggered it will contact the on-call user according to their notification rules.

### User
A user can:

* Add/edit/delete on-call schedules
* Add/edit/delete escalation policies
* Add/edit/delete services