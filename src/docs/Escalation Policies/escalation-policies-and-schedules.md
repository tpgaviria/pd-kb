---
title: "Escalation Policies and Schedules"
slug: "escalation-policies-and-schedules"
excerpt: "Connect a schedule to a service via escalation policy. Common use cases and configurations between escalation policies and schedules."
hidden: false
createdAt: "2017-05-16T16:23:12.865Z"
updatedAt: "2020-10-09T20:52:29.028Z"
---
## Connect a Schedule to a Service via Escalation Policy

Escalation policies allow you to connect services to on-call schedules, and they ensure that the right people are notified at the right time. 

To connect a schedule to a service via escalation policy:

1. [Create an escalation policy with a schedule as a target](https://support.pagerduty.com/docs/escalation-policies#section-create-an-escalation-policy) (skip to step 3 after creating), or add your schedule to an existing escalation policy by navigating to **People** :fa-arrow-right: **Escalation Policies**. 
2. Find your desired escalation policy and click the **gear icon**, select **Edit** and then locate the escalation level where you would like to add your schedule. Search the schedule name or select it from the dropdown in the **Notify the following users or schedules** field. Click **Save**. 
3. Now that you have your schedule configured with an escalation policy,  navigate to **Services** and select **Service Directory**.
4. If you are creating a new service, click **+ New Service**. If you are adding this escalation policy to an existing service, find that service, click the **gear icon** and select **Edit Service**.
5. In the Incident Settings section, select the **Escalation Policy** created or identified in step 1 (above). 
6. Click **Save changes**.
## Escalation Policy and Schedule Use Cases

Escalation policies and schedules can be [configured](https://support.pagerduty.com/docs/escalation-policies#section-create-an-escalation-policy) in many ways to fit your team’s needs. Below are examples of common, more complex methods of configuring these features together to achieve particular goals. 

##Schedules and Escalation Levels

Configuring schedules with different [escalation policy levels](https://support.pagerduty.com/docs/escalation-policies#section-escalation-levels) allows you to satisfy two different use cases:

- [Notifying multiple users at once *based on a specific span of time*](https://support.pagerduty.com/docs/escalation-policies-and-schedules#section-notifying-multiple-users-at-once-based-on-a-span-of-time). For instance, if you want more than one person to be notified only during the weekend or after business hours. 
- [Notifying a Secondary on-call user when the Primary on-call does not respond](https://support.pagerduty.com/docs/escalation-policies-and-schedules#section-notify-a-secondary-on-call-responder-when-the-primary-does-not-respond).

###Notifying Multiple Users at Once Based on a Span of Time

In many cases, you will have a group of people on-call during business hours and a different group of people on-call off business hours, or different groups of people on-call at various times of the day. The default nature of an escalation policy is to notify *one* person at a time, but a common objective is to notify *multiple people or teams* at the *same time*. 

To notify multiple users at the same time based on a specific span of time, then you will want to: 

- [Create individual on-call schedules *for each person or team* that reflects their on-call rotations](https://support.pagerduty.com/docs/escalation-policies-and-schedules#section-create-individual-on-call-schedules-for-each-person).
- [Add each of these schedules to the appropriate layer of an escalation policy](https://support.pagerduty.com/docs/escalation-policies-and-schedules#section-add-schedules-to-an-escalation-policy).

To demonstrate this, we'll use the following example:
- George, Emily, and Jennifer are on-call during business hours 0800-1700 and should all be notified at the same time.
- Naomi, Liam, and Max are on-call outside of business hours 1700-0800 and should all be notified at the same time.
- On the weekends, both George and Naomi are on-call and should be notified at the same time.

####Create Individual On-call Schedules For Each Person

The first step is creating individual on-call schedules for each user that reflects their specific on-call rotations and times.

For example, below are George and Max's schedules. Notice that we restrict the on-call times to certain times of the week for each schedule. Max is only on-call between 1700-0800 on weekdays:

![](https://files.readme.io/95ed08c-eps-schedules-max-restrictions.png)

George is only on-call between 0800-1700 on weekdays and all day on weekends:

![](https://files.readme.io/c6365d7-eps-schedules-george-restrictions.png)

####Add Schedules to an Escalation Policy

Once we have created each user's on-call schedule, we can then add each schedule to an escalation policy.

In the screenshot below, we have added each user's schedule (6 in total) to the first layer of an escalation policy. This means that if an incident is triggered between 0800-1700, then George, Emily, and Jennifer will be assigned and notified at the same time, since they are the only users on-call within that escalation layer.

When an incident is triggered between 1700-0800, then Naomi, Liam, and Max will be assigned and notified at the same time, since they are the only users on-call within that escalation layer.

On the weekends, only George and Naomi will be assigned and notified at the same time, since they are the only ones on-call over the weekend in that escalation layer.

![](https://files.readme.io/7155957-time-dependent-ep.png)

Notice that we have set up our escalation policy so that the same group of users are re-notified after 10 minutes if they haven’t acknowledged or resolved the incident. If the group does not respond 10 minutes after that, then the incident is escalated to their manager, Tony Wagner.

###Notify a Secondary On-Call Responder When the Primary Does Not Respond

To create Primary and Secondary on-call users:

- [Create individual schedules for both the Primary and Secondary on-call levels](https://support.pagerduty.com/docs/escalation-policies-and-schedules#section-create-individual-primary-and-secondary-schedules).
- [Add each schedule to the appropriate escalation level](https://support.pagerduty.com/docs/escalation-policies-and-schedules#section-add-each-schedule-to-the-appropriate-levels).

####Create Individual Primary and Secondary Schedules

The first step is creating individual on-call schedules to represent Primary and Secondary (etc.) levels that reflect their specific on-call rotations and times.

In the example below, we have two on-call schedules: a **Primary** schedule and a **Secondary** schedule. Both schedules have the same rotation (i.e. weekly at 09:00) but with different people on-call. The person from the **Primary** schedule is our first responder and the person from the **Secondary** schedule is our back-up in case the first responder does not take action on an incident.

![](https://files.readme.io/9311f04-eps-schedules-primary-schedule.png)



![](https://files.readme.io/d5c9ff6-eps-schedules-secondary-schedule.png)

**Why create two separate on-call schedules? If I have two people on-call at the same time, wouldn't it make more sense to create one schedule with two schedule layers?**

No, please visit our section below explaining [why schedules alone are ineffective for multi-user notifications](https://support.pagerduty.com/docs/escalation-policies-and-schedules#section-why-schedules-alone-are-ineffective-for-multi-user-notifications). 

####Add Each Schedule to the Appropriate Levels

Once we have created individual on-call schedules to represent Primary and Secondary levels, we can then add each schedule to an escalation policy.

In the screenshot below, the **Primary** schedule is the first escalation level and the **Secondary** schedule is the second escalation level. Expected behavior for this escalation policy is as follows:

- When an incident is triggered, it will be immediately assigned to whomever is on-call in the **Primary** schedule.
- The **Primary** schedule user has 30 minutes to take action on the incident (i.e. acknowledge, resolve, re-assign)
- If the user on the **Primary** schedule does not take action on the incident within 30 minutes, the incident will be escalated and assigned to the user on-call on the **Secondary** schedule.
- If the person on the **Secondary** schedule does not take action on the incident in 30 minutes, then the incident is reassigned and escalated to the person on the **Primary** schedule. This is accomplished by clicking the box that says "If no one acknowledges, repeat this policy" and setting the number of policy repeats.


![](https://files.readme.io/de2d4e5-4aecd84-Create_a_new_Escalation_Policy_-_PagerDuty.png)

Alternatively, if you would like *both* of your **Primary** and **Secondary** on-call staff to be notified immediately after an incident is triggered, you can utilize multi-user alerting by adding both schedules to the same escalation level.

![](https://files.readme.io/951724f-ep-and-schedules-primary-secondary.png)


[block:callout]
{
  "type": "info",
  "body": "You must have a minimum of 5 minutes between escalation levels if you have more than one person/schedule in an escalation level.",
  "title": "Note"
}
[/block]
####Why Schedules Alone Are Ineffective For Multi-User Notifications

An important concept to grasp is that only one user can be on call per schedule, and using a schedule on its own (without an escalation policy) will not notify multiple users at once. A natural first instinct would be to add multiple layers to a schedule, however, the way PagerDuty's system works, the lowest layer on a schedule takes precedence over any others.

The following screenshot demonstrates what will happen if multiple layers are stacked on top of each other (Layer 3 takes precedence over Layers 1 and 2):

![](https://files.readme.io/01e5f2c-eps-schedules-precedence-example.png)

Thus, adding schedules and/or users to escalation policies is the only way to notify multiple users at once.

##Deactivating Schedules via Escalation Policies 


If you would like to pause or deactivate notifications from a service connected to a particular schedule, you will need to change the escalation policy used by that service.  

To change the escalation policy for a service: 

1. Navigate to **Services** and select **Service Directory**.
2. Find the service that is notifying the schedule you would like to pause or deactivate, click on **Edit** in the **Assign and Notify** settings under the **Response** tab.
3. In the **Assign to escalation policy** section, select an **Escalation Policy** that *does not* use the schedule you wish to pause or deactivate. Click **Save Changes**.
4. Repeat this process for any additional services this escalation policy is linked to.

![](https://files.readme.io/3e7481a-EscalationPolicy_on_service.png)
