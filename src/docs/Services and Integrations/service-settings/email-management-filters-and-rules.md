---
title: "Email Management: Filters and Rules"
slug: "email-management-filters-and-rules"
excerpt: "Use filters and create rules to customize how email integrations process events"
hidden: false
createdAt: "2017-05-10T15:59:28.238Z"
updatedAt: "2020-10-09T21:11:13.581Z"
---
# Advanced Email Management: Extracting Information with Regular Expressions

When using the **regular expression** (also called regex) option to create an incident key for email management rules, you will need to use a capture group, which in regex is defined as anything between a set of parentheses "( )".

![](https://files.readme.io/860a907-ebbf611-Screen_Shot_2017-01-20_at_9.56.55_AM.png)


[block:callout]
{
  "type": "warning",
  "title": "Important note regarding HTML emails and content encoding",
  "body": "Email management regular expressions are compared on the text of the email _after decoding_ per the encoding specified by `Content-Transfer-Encoding`. However, `Content-Type` is ignored, i.e. if after base64-decoding (if the encoding is base64) the underlying message is HTML, and there is no plain text copy of the email included, then *the regular expression will be run on the HTML code,* not on the text that would result after rendering the HTML or stripping out HTML tags.\n\nThus, if the emails are sent only as HTML (`Content-Type: text/html`), note that any regex written to match the text content alone may not work. HTML tags and hidden linebreaks / whitespace can potentially interfere with your regular expressions matching the input as expected.\n\nSee [Troubleshooting](#section-a-regular-expression-that-should-match-the-body-is-not-matching) for further details."
}
[/block]
##Capture Group
A capture group will tell PagerDuty to create an incident key from the text contained within the parentheses. If the unique identifier within the capture group changes (i.e. a ticket ID # or host ID #) you can use `\d+`, which tells PagerDuty to capture all subsequent digits.

Similarly, if you want to capture a specific number of digits you could use `\d` to stand in place of each digit. For example, you could use `\d\d\d\d` or `\d{4}` if the unique identifier always contains 4 digits.

##What if my Unique Identifier Already has Parentheses?
In some instances your unique identifier may already have parentheses around it. For example, let’s say you want to create an incident key based on the ticket numbers contained within the parentheses of this Zendesk email:

![](https://files.readme.io/7536a64-32fe6b0-zendesk.jpg)

In this case you would use a backslash (`\`) at the beginning; the backslash is an escape character that tells PagerDuty "the following character should be treated as text."

![](https://files.readme.io/c6cfe85-6dc7e56-incident_key_zendesk.jpg)

##Specifics of PagerDuty's Capture Group Implementation
PagerDuty's email management rules use Google's [RE2](https://github.com/google/re2) for regular expression handling, and additionally adds some custom behavior. Some specific things to be aware of:
- You are not allowed to use nested groups, so if you try and use this regular expression, you will get an error while saving the service `(([0-9])[0-9])`.
- If you give multiple capture groups, we will concatenate what is captured in each group together, using the `-` character. For example if you match `([a-z])([a-z])` against "ab", we will use "a-b" as the extracted data.
- We always add two options to your regular expression (both of which are documented in the RE2 documentation) when extracting data.
    - `s`, which means that the `.` special character this will also match newlines (`\n`).
    - `m`, this is called multi-line mode, which causes `^` and `$` to match the beginning and end of lines in addition to beginning and end of the entire text.
    - A consequence of these two behaviors and regex greediness is that `(.*)$` will match everything until the end of the document — we recommend using ([^\n]*) if you just want to match everything until the end of the line.

##External Resources
[Regex101](https://regex101.com/) is a regular expression editor and a great resource to double-check your regex, and it provides a quick reference for common expressions.  Be sure to select the **Golang** flavor in the left column and enable the *single line* and *multi line* flags.


##Other Options
One thing to note — it is not necessary to always use regex when building an incident key. Using the "all text between" drop down option is a quick and easy way to tell PagerDuty to create an incident key between A and B. Or if your incident key never changes you could use the "everything" drop-down.

![](https://files.readme.io/c3a9f65-56de3fe-Screen_Shot_2017-01-20_at_9.58.33_AM.png)

# Limit Noise with Email Integration Filters

Email filters in PagerDuty [email integrations](https://www.pagerduty.com/docs/guides/email-integration-guide/) allow you to disregard certain messages arriving at the integration email address. An email's subject, body, and from address can be checked against either a safelist or blocklist [regular expression](https://support.google.com/analytics/answer/1034324?hl=en) (regex) filter. Messages that don’t pass the filter will be silently discarded. 

In general, we suggest using [Regex101](https://regex101.com/) to test your regular expressions. If your regular expression works with the sample text you enter into Regex101 using the **Golang** flavor with *single line* and *multi line* options enabled, it should work for text of the same format in PagerDuty also. Please reference our [regex tips and examples](#section-regular-expression-tips-examples) article for more information on how regex work.

## Configure a Regex Filter

To set up a regex filter:

1. Go to **Services** :fa-arrow-right: **Service Directory** and select the service with the email integration.
2. Go to the **Integrations** tab and click the email integration you want to edit, then click **Edit Integration**.
3. Under Email Filters, select one of the email filters:
    - **Accept all incoming email**: PagerDuty will not filter out any emails that are sent to your integration email address.
    - **Accept email only if it matches ONE OR MORE rules below**: Emails will only be accepted if they match at least one filter rule.
    - **Accept email only if it matches ALL of the rules below**: Emails will only be accepted if they match all filter rules
4. Configure your rules — whether the email subject, body, and from address should match or not match the regex.
5. In the edit fields, enter the value to match or not match (this field will not be available if **is anything** was selected).
6. Click **Save**.
[block:callout]
{
  "type": "info",
  "body": "Regular expressions are case sensitive. We suggest using a pipe (`|`) to capture different upper/lowercase strings. i.e. `(Down|DOWN|down)`",
  "title": "Note"
}
[/block]
Below is an example of how to use email filters to filter events based on their critical/noncritical status. In this example, you send emails with the subjects CRITICAL and NONCRITICAL to PagerDuty, but you only want those with CRITICAL in the subject to trigger incidents.
1.  Go to **Services** :fa-arrow-right: **Service Directory** and select the service with the email integration.
2. Go to the **Integrations** tab and click the email integration you want to edit, then click **Edit Integration**.
3. Under Email Filters, select **Accept email only if it matches ALL of the rules below**.
4. Add two filter rules:
    1. The first rule should be **The email subject matches the regex** `CRITICAL`.
    2. The second rule should be **The email subject does not match the regex** `NONCRITICAL`.

![](https://files.readme.io/1b16a53-86365ce-Screen_Shot_2017-02-07_at_1.45.09_PM.png)

The **Accept email only if it matches ALL of the rules below** option ensures that both rules will be applied to incoming events. The reason you need both filter rules is because NONCRITICAL contains the word CRITICAL, so the second rule prevents messages with the subject NONCRITICAL from being accepted, even though it contains the word CRITICAL. 

It's also important to note that regex filters are case sensitive, so if your email subject contains **Critical**, **critical**, or any other variation that is not **CRITICAL**, the message will not be accepted using this example. Email filters cannot be made case insensitive using `(?i)` like email management rules can. We suggest using a pipe (`|`) to capture different upper/lowercase strings if you do not use one case everywhere, for example: `(Critical|critical|CRITICAL)`.
5. Click **Save changes**.

# Regular Expression Tips & Examples

Regular expressions are a fairly standard and well-documented way of matching text, and can be used in [email-based integrations](https://www.pagerduty.com/docs/guides/email-integration-guide/) to either include or exclude certain keywords from creating incidents. Even using Google on the first try for specialized regular expressions will often return good results, since people have been using them to complete the same simple tasks for decades.

Here is an example of a common regular expression:

Your service is receiving emails, however you only want the service to create incidents and notify you if they are either critical or severe, as determined by your monitoring system, which sends out notifications starting with the words "CRITICAL" or "SEVERE" in the subject line when the occasion arises.

The regular expression you would use to only match incidents of this type would be: `^(CRITICAL|SEVERE)`

The `^` means the subject line starts with this, and `(CRITICAL|SEVERE)` means the starting word can be either "CRITICAL" or "SEVERE".

##Case Sensitivity
Regular expression rules are case sensitive, so "DOWN", "down", and "Down" are all considered different strings and will not both match against the same regex. You can make your email management rules case insensitive by adding `(?i)` to the beginning of the line, for example: `(?i)(critical)`

This will capture all cases: "critical", "CRITICAL", "cRiTicAL", etc.

![](https://files.readme.io/3b50b74-Screen_Shot_2018-06-12_at_3.08.18_PM.png)


[block:callout]
{
  "type": "info",
  "body": "The case insensitivity modifier `(?i)` will only work with email management rules, it will **not work** with email filters. Due to this issue, we suggest using a pipe (`|`) to capture different upper/lowercase strings for email filters, for example: `(Down|DOWN|down)`",
  "title": "Note"
}
[/block]
##Testing
Writing regular expressions can be difficult, but [Regex101](https://regex101.com/) is a very helpful tool for editing regular expressions and making sure that the expression is correct.

![](https://files.readme.io/068e122-Screen_Shot_2020-09-24_at_12.39.39_PM.png)

To test an expression in Regex101, enter your test string (in this example, the body from which you want to extract the node for use as the alert key for grouping purposes) and then make sure that your entered regular expression shows a *Group 1* **match** within the test string.

##Examples
[block:parameters]
{
  "data": {
    "h-0": "Filtering For",
    "h-1": "Filter Options and Regular Expression",
    "0-0": "\"Open Escalations\" or \"[JIRA] Commented:\"",
    "0-1": "`((Open Escalations)|(\\[JIRA\\] Commented:))+`",
    "1-0": "- All emails that contain \"Priority 1\" or \"Priority 2\" and \"Failed\" in the subject\n- AND contains \"Warning to Failed\" or \"Normal to Failed\" in the message body\n- AND only accepts emails from \"test@gmail.com\"",
    "1-1": "- The email subject matches the regex: `([\\s\\S]*)(Priority 1 | Priority 2)+([\\s\\S]*)(Failed)+`\n- AND the email body matches the regex: `(Warning to Failed)|(Normal to Failed)`\n- AND the from address matches the regex: `test@email.com`",
    "2-0": "Only trigger incidents from specific domains",
    "2-1": "`(domain1.com|domain2.com|domain3.com|domain4.com)+`",
    "3-0": "Filter out e-mail replies that include \"RE:\" or \"FWD:\" at the beginning of the e-mails",
    "3-1": "The email subject does not match the regex `\\ARE:|\\AFWD:`"
  },
  "cols": 2,
  "rows": 4
}
[/block]
# Replies and Email Forwards are Triggering a New Incident

By default, PagerDuty email integrations accept any messages from any sender, including messages addressed to multiple recipients. When someone replies to all recipients on an email with recipients that include the email integration address, an email will be sent to the email integration address. This results in a new incident being opened in addition to the original incident from the initial send. 

If you want to forward emails to your email integration address, and have additional forwards de-duplicate to your open incident, you can use email management rules to prevent replies from triggering extraneous incidents.

To set up the email management rule:
1. Go to your email integration and click **Edit**.
2. Under **Email Management**, select the option **Open and resolve alerts based on custom rules**.
3. Create a rule:
    1. **Trigger** an incident if **Any of the following conditions apply:**
    2. The email **subject matches the regular expression:** `.*`
    3. For the incident key, have the rule state: **In the email subject, match this regular expression:** `(?:(?i)re: |fwd: )?(.*)`
4. Click **Save changes** at the bottom of the page.
[block:callout]
{
  "type": "info",
  "body": "This regular expression is case insensitive, so any version of \"RE:\" or \"FWD:\" will de-duplicate the email trigger to the open incident.",
  "title": "Note"
}
[/block]


![](https://files.readme.io/8291ef1-2b2ad20-RE_-_Email_Parse_-_PagerDuty.jpg)

Replies and forwards will now be appended to the existing incident as additional triggers.

# Trigger and Resolve Alerts with Email Management Rules

By default, PagerDuty opens a new incident every time an email is received at the integration address of an [email integration](https://www.pagerduty.com/docs/guides/email-integration-guide/). Depending on how your monitoring tool works, this behavior might not be desirable.

The first line of defense in limiting unnecessary noise in email integrations are [email filters](#section-limit-noise-with-email-integration-filters). These filters select which of your inbound events will become events on your service, and which events will be discarded. 

Once an event is accepted by your email filters, email management rules may be used to determine the way accepted events will behave. PagerDuty's email management feature allows you to automatically resolve incidents from email integrations by creating custom rules to parse messages and specify how they should be handled.
- [Control when a New Incident is Triggered](#section-control-when-a-new-incident-is-triggered)
- [Auto-Resolve Existing Events with Alert/Incident Keys](#auto-resolve-existing-events-with-alert/incident-keys)
- [Creating your Rules](#section-creating-your-rules)

##Control when a New Incident or Alert is Triggered

You can control when PagerDuty creates new incidents or alerts in response to emails by adjusting your integration settings.

To set how new incidents will be created in your email integration:
1.  Go to **Services** :fa-arrow-right: **Service Directory**.
2. Click on the name of the service that contains the integration, then go to the **Integrations** tab and click the name of the integration to find the **Edit** button.
3. Under the **Email Management** section, choose a new setting, then click **Save**.

The following settings are available, stating either incident *or* alert depending on how you've configured your service's Incident Behavior settings (step 6 of [this section](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service)):

- **Open a new incident/alert for each trigger email**: Each email sent to the integration email address opens a new incident.
- **Open a new incident/alert for each new trigger email subject**: Emails with the same subject line de-duplicate. For example, if PagerDuty previously opened a new incident because it received an email with the subject “Host Down”, a second email with the same subject will not cause create a new incident. Instead, the new email will be appended to the existing incident’s activity log.
- **Open a new incident/alert only if an open incident does not already exist**: The integration can have only one open incident at any time. If an email is received while the integration already has an open incident, it is appended to the existing incident’s activity log.
- **Open and resolve incident/alerts based on custom rules**: This option will be explored in-depth in the next section of this article.

The last two options above will append incoming emails matching the criteria to existing alerts/incidents, as shown below:

![](https://files.readme.io/db9101e-89bd320-Screen_Shot_2017-01-27_at_5.08.49_PM.png)

##Auto-Resolve Existing Events with Alert/Incident Keys
Selecting the last option in your email management rules -- **create and resolve incidents based on custom rules** -- allows you to automatically resolve incidents from email integrations by parsing message content.

Email management uses a set of rules that is applied to any incoming email. Each rule has three components:
1. A **condition** that tells PagerDuty if the email should create an event
2. A **condition** that tells PagerDuty if the email should resolve an event
2. An **alert** or **incident key** that tells PagerDuty how to match one email with another email.

![](https://files.readme.io/ec16b93-64bdf9d-Screen_Shot_2017-01-31_at_4_00_31_PM.png)

In the example above, the **alert/incident** key has been highlighted in green. The **conditions** are in caps: DOWN for trigger, UP for resolve.
[block:callout]
{
  "type": "info",
  "title": "Auto-Resolving with an Alert Key",
  "body": "For a pair of trigger and resolve email management rules to work together, the alert key in both rules **must be a perfect match.** The alert key is what allows your service to pair events and apply resolve rules to existing events."
}
[/block]
##Creating your Rules
1. Specify if PagerDuty should trigger or resolve an incident and the criteria of the email.
2. Specify the alert/incident key — the alert/incident key de-duplicates emails that have the same identifiers, and will append the email to an existing alert or incident.
3. Optional — you can add additional criteria in the Custom Field if you'd like to extract additional data from the email. This can be useful with certain integrations, like Zendesk. This allows you to bring the most pertinent information from your emails to the foreground. As an example, here is an incident where a rule was written pulling all text from the body of the email after the word **hello** into Custom Details:

![](https://files.readme.io/5a96370-email-management-custom-details-example.png)


[block:callout]
{
  "type": "info",
  "body": "If an email matches your \"resolve\" rule but there is no open incident for that email to resolve **OR** the email's incident key does not match an existing open incident, then this rule will not be applied.",
  "title": "Note"
}
[/block]
Just as with email filters, you can use regular expressions to create complex management rules - however regular expression are not mandatory. You can review how to create a regular expression in [Regular Expression Tips & Examples](#section-regular-expression-tips-examples).

In some cases, you may want to create an additional rule by clicking **Add Another Rule**. When you create multiple rules, PagerDuty will apply the first rule to the incoming email, and if it doesn't match it will attempt to apply the second rule. The hierarchy continues in this order until it reaches your last rule. There is a limit of ten rules per service. Rules may be re-arranged by clicking the **Move up** and **Move down** buttons on each rule.

Finally, if an email doesn't match any of the rules, PagerDuty will either create a generic incident or discard the email. Use the drop down menu to specify your preference — you can either **create a generic incident** or **discard it** (the email).

![](https://files.readme.io/fa6f368-35cdbdf-Screen_Shot_2017-01-31_at_5.59.17_PM.png)

# Troubleshooting Email Management Rules

Email management is a powerful tool for giving responders an accurate state of your system, but it can sometimes be tricky.

Here are some solutions to frequently seen problems.
* [My trigger emails are not making it through](#section-trigger-email-are-not-making-it-through)
* [My resolve emails are not resolving incidents](#section-resolve-emails-are-not-resolving-incidents)
* [I'm getting an error message](#section-error-message-email-handler-email-action-rules-value-extractors-matcher-must-have-at-least-one-capture-group-)
* [A Regular Expression That Should Match the Body Is Not Matching](#section-a-regular-expression-that-should-match-the-body-is-not-matching)

##Trigger Email are not Making it Through
First, check your email filters. PagerDuty evaluates email filters before management rules in order to reduce noise and ensure all emails come from a verified sending address.

If you think the filters might be dropping email, try resetting them to "Accept all incoming email" and then try again. Keep in mind that changes to your email filters will not be applied to events that came in before the changes were made.

If you are using filters, double-check your regular expressions to ensure that you are actually letting your desired emails through.

If you're still not seeing emails you expect, scroll to the bottom of your email management rules, and make sure "Create a generic incident" is selected. This is the default setting for handling emails that don't match your rules, but if another user changed it, any unmatched emails will be discarded.

![](https://files.readme.io/d6dd5c9-e407d40-email_management.png)

##Resolve Emails are not Resolving Incidents
Three things are required to successfully resolve an incident:
1. A rule that tells PagerDuty when an email should be considered a trigger notice
2. A rule that tells PagerDuty when an email should be considered a resolve notice
3. A shared incident key between the two emails

Verify that you have the correct rules set. PagerDuty will display the extracted incident key on the incident page, so you can verify it is the same between your trigger and resolve emails.

![](https://files.readme.io/9543e47-0e9dd37-email_management_2_.png)

Specific reasons a resolve email might not be successfully resolving:
1. You are extracting an incident key with a regular expression, and it is not extracting the key correctly.
2. The email body was poorly encoded in some way (for example, if it was UTF-8 encoded, but contained the byte \xFF).
3. There is a trailing space in either your trigger or resolve rules, but not in both. This means that one email has an incident key with an additional space, and therefore will not match.

##Error Message: "Email handler email action rules value extractors matcher must have at least one capture group"
This error message means that you need to specify a capture group in your regular expression. Oftentimes, this can be resolved by enclosing your regular expression in parentheses.

## A Regular Expression That Should Match the Body Is Not Matching

If you have checked your email management rules against the email, and it seems like a regular expression that should match isn't working for some strange reason, check to see whether the emails are being sent in both plain text and HTML, or plain text. If the emails are only getting sent in HTML, the HTML tags may be interfering with the pattern matching.

If the email also includes a plain text version, then the rule will still be able to find a match. However, if the emails are being sent as HTML-only, note that the regular expression may not match because there are HTML tags and elements interspersed within the text content that makes up the searched-for pattern. It may help to view the raw email that was checked for a match in the email rules.
[block:callout]
{
  "type": "info",
  "title": "To view the source code of the email sent to the integration",
  "body": "Go to **View Message** in the incident detail view. This should take you to a page displaying the full details of the original event sent in. The URL should be formatted as follows:\n\n```\nhttps://{subdomain}.pagerduty.com/incidents/{incident_id}/log_entries/{log_entry_id}\n```\n\nNext, click \"View Raw Message\" and you will see the source code of the email including headers."
}
[/block]
While viewing the source code, note that email management rules that operate on the body of the email use the raw body as input, after decoding (i.e. if the `Content-Transfer-Encoding` of the body is `base64`, it will be decoded from base 64, or if it's `quoted-printable`, then QP escape sequences will be replaced with the actual characters to represent the underlying content of the message). Thus, to view the true source of the email that the regular expressions are compared against, one must decode the text.

### Base64-encoded Text

``` 
Content-Transfer-Encoding: base64
```

Base64-encoded messages are not humanly readable, but are easily decoded into a plain text message using a broad variety of software. One of the simplest and most effective is the `base64` command line program already available on many Linux-based and Unix-based systems, including Mac OS X. 
[block:callout]
{
  "type": "info",
  "title": "Example of base64-encoded text",
  "body": "**Decoded** (Regex runs on this text):\n```\nAll work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.\nThe quick fox jumps over the lazy brown dog.\n```\n\n**Encoded** (Regex does not run on this text):\n```\nQWxsIHdvcmsgYW5kIG5vIHBsYXkgbWFrZXMgSmFjayBhIGR1bGwgYm95LiBBbGwgd29yayBhbmQg\nbm8gcGxheSBtYWtlcyBKYWNrIGEgZHVsbCBib3kuClRoZSBxdWljayBmb3gganVtcHMgb3ZlciB0\naGUgbGF6eSBicm93biBkb2cuCg=\n```\n\nDecoding with `base64`:\n```\nbase64 -D < file-containing-base64-message.txt\n# or this:\ncat file-containing-base64-message.txt | base64 -D\n```"
}
[/block]
### Quoted-Printable Text 

```
Content-Transfer-Encoding: quoted-printable
```

Messages with [Quoted-printable](https://en.wikipedia.org/wiki/Quoted-printable) encoding are much easier for humans to read without decoding (if the message is written in mostly [ASCII](https://en.wikipedia.org/wiki/ASCII) characters), but there are also a variety of tools available for decoding.

When reading quoted-printable encoded text raw, one must be aware of the _escape sequences_  of characters that constitute part of the encoding or that are a representation of a character and not their literal selves. Non-[ASCII](https://en.wikipedia.org/wiki/ASCII) characters will be represented as escape sequences, as will equals signs. 

Furthermore, lines are limited to 76 characters, and if need be to limit line length, the line in the final encoded text will be broken two or more lines with a linebreak and an equals sign at the end of every line but the last in the series.
[block:callout]
{
  "type": "info",
  "title": "Example of quoted-printable encoding",
  "body": "**Decoded** (Regex runs on this text):\n\n```\nAll work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy.\nThe quick fox jumps over the lazy brown dog.\nE = mc^2\n```\n\n**Encoded** (Regex does not run on this text): \n\n```\nAll work and no play makes Jack a dull boy. All work and no play makes Jack=\n a dull boy.\nThe quick fox jumps over the lazy brown dog.\nE =3D mc^2\n```"
}
[/block]