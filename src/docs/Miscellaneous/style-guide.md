---
title: "Style Guide"
slug: "style-guide"
excerpt: "This guide is intended to address writing and formatting style in the [ReadMe-powered knowledge base](https://pagerduty.atlassian.net/wiki/spaces/COM/pages/189708072/Knowledge+Base+v2). This should not be used as a guide for writing or formatting content elsewhere (yet)."
hidden: true
createdAt: "2017-05-11T19:30:12.576Z"
updatedAt: "2019-03-01T23:26:14.892Z"
---
## Review Process

## Creating New Articles, Sections, & Major Rewrites

If you're creating a new article, or making major changes to an existing one:

1. Go to **Documentation** and click :fa-plus: next to the section where the new article should live.
2. Write your article using the information in this style guide to make sure your writing and formatting are consistent with other articles.
3. Click **Save**.
4. Immediately click :fa-eye: to hide your page from the site navigation.
5. Have your article reviewed, revising and editing as necessary for approval. The reviewer will:
 * Check your draft against this guide
 * Suggest edits to you
 * Grant play time with Support's Little Pony
6. Click :fa-eye-slash: when approved to make your new page public.

Creating a new section?
1. Do some due diligence of working through the KB and community forums to sanity check that the content you're creating doesn't actually belong elsewhere in the KB, or elsewhere in PagerDuty documentation.
2. If you've done step 1 and you still genuinely believe you should create a new section in the KB, please talk to the [reviewers](https://support.pagerduty.com/v1/docs/style-guide#section-reviewers) listed further down in this article for a final validation before proceeding.

### Hidden Pages

[Hiding pages](https://readme.readme.io/docs/managing-pages#section-hiding-a-page) doesn't make them completely inaccessible to others, it just removes the page from the navigation menu. Anybody who knows (or successfully guesses) a page URL - like the one for this style guide - will be able to access the content.

This is great for special pages like this style guide, and articles related to Early Access features, as we can keep the page hidden and simply share the page URL with users as needed, rather than requiring them to log in to the KB for specific content. Just make the page public when the feature is generally available to all users. :tada:

### Redirects

[Redirects](https://readme.readme.io/docs/error-pages#section-redirects) should be set up for pages moved from Zendesk and whenever you change page URLs in general:

1. Go to **General Settings** :fa-arrow-right: **Error Pages**.
2. Enter the path for the old page and new URL like this: `/docs/bacon-weaving-with-confidence -> /docs/getting-started`.
3. Click **Save**.

ReadMe supports [regex in redirects](https://readme.readme.io/docs/error-pages#section-regular-expressions), which lets us redirect and [rewrite](https://www.smashingmagazine.com/2011/11/introduction-to-url-rewriting/) all possible versions of a Zendesk KB URL, as well as special URLs - like those for tickets - to their new home. When creating a redirect for a Zendesk KB article, take the path and numerical part of the URL only, then add `(.*)` to the end, as well as an arrow (`->`) and the new article path or new URL for the content that used to be at the old URL.

#### Example Redirects & URL Rewriting 

This example shows basic redirects, redirects for Zendesk articles using regex, as well as rewrites for Zendesk tickets using regex (support.pagerduty.com :fa-arrow-right: tickets.pagerduty.com):

```
/hc -> /
/hc/en-us -> /
/hc/requests -> https://tickets.pagerduty.com/hc/requests
/hc/requests/(.*) -> https://tickets.pagerduty.com/hc/requests/$1
/hc/en-us/requests -> https://tickets.pagerduty.com/hc/en-us/requests
/hc/en-us/requests/(.*) -> https://tickets.pagerduty.com/hc/en-us/requests/$1
/hc/contributions(.*) -> https://community.pagerduty.com
/hc/subscriptions -> /
/hc/en-us/subscriptions -> /
/hc/en-us/search -> https://www.pagerduty.com/community
/hc/en-us/articles/219534828(.*) -> https://community.pagerduty.com/t/pagerduty-ringtones/157
/hc/en-us/articles/213281157(.*) -> /docs/introduction
/hc/en-us/articles/202828720(.*) -> /docs/adding-removing-users
/hc/en-us/articles/202830550(.*) -> /docs/system-requirements
```

## Minor Updates to Existing Articles

If you're making small changes to an existing article, you should sanity check it against this page to make sure that your tone and formatting are consistent with the style guide before clicking Save.

## Revising & Editing Process

No one is going to throw out your full article and ask you to start from scratch. During the review process, you can expect edits such as:

**Phrasing**
* Are you calling things what they're actually called in the product?
* Are your instructions clear?
* Can you grammar good?

**Content**
* Is everything here necessary information, or are we trying too hard to do the job the marketing team already does when they write blog posts?

**Formatting**
* Does everything look clean and consistent?
* Can I tell where key steps are?
* Are headings, callouts, etc. used properly?

**Screenshots**
* Are they annotated according to this guide?
* Is every screenshot in the article actually useful?

## Reviewers

* **Hadley** - Technical Content Writer. :fa-slack: @Hadz, :fa-envelope-square: shadley@pagerduty.com
* **Kat Gaines** - Senior Manager, Customer Support. :fa-slack: @kat, :fa-envelope-square: kat@pagerduty.com

New articles and those with major rewrites should be reviewed by one of these people before being made public or shared with Early Access users. To request a review, join the [#kb](https://pagerduty.slack.com/messages/C2J67096G/) channel in Slack and mention **@screamingsuns**. One of us will pick it up and let you know if we have any suggestions for improvement and/or when your article can be made public.
## Guidelines for Creating & Rewriting Articles

## Don't Repeat Yourself

### Redundant Content & Locations

Things to ask yourself before creating any new article:

* Does this need to exist?
* Is the KB the right venue for this content?
* Does this really deserve its own spot, or can I add this information to an existing article?

#### Venue

* If you're writing about how to use standard PagerDuty features, you're probably on the right track by creating a KB article.
* If you're writing troubleshooting steps for an integration, then you should consider adding your troubleshooting steps the the integration guide (for basic troubleshooting, like making sure the PD Agent is installed) or [community forums](https://community.pagerduty.com/c/using-pagerduty/integrations) (for an in-depth troubleshooting process) instead.
* If you're writing instructions for workarounds, like using the API to make up for a lack a functionality in the product, then you should [make a community post instead](https://community.pagerduty.com/new-topic).

#### Duplicate Content

If the content you're adding to a page exists somewhere else, and you're duplicating content because it applies to your page as well, **STOP**. Take the content that's the same for both pages and move it to its own page, then link to that content from the other pages.

**Do not duplicate content across integration guides, the KB, and community forums.**

## Redundant Titles

Don't use "PagerDuty" in article titles, or repeat the section name in your page title like this:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2f663b0-duplicate-section-title.png",
        "duplicate-section-title.png",
        518,
        168,
        "#343434"
      ]
    }
  ]
}
[/block]
## Be Clear & Concise

> "On the average Web page, users have time to read at most 28% of the words during an average visit; 20% is more likely."
[How Little Do Users Read?](https://www.nngroup.com/articles/how-little-do-users-read/) by [Jakob Nielsen](https://www.nngroup.com/people/jakob-nielsen/)

### Simple Page Titles

No questions, no how-to statements, no abbreviations. Be clear and concise when naming your article:
[block:callout]
{
  "type": "success",
  "body": "\"Adding Users\"",
  "title": "This"
}
[/block]

[block:callout]
{
  "type": "danger",
  "body": "\"How do I add users?\"\n\"How to Add Users\"\n\"Adding users so that you can have people on PagerDuty and be awesome\"",
  "title": "Not This"
}
[/block]
### Get to Actionable Steps

Summaries before and after your content may work when giving a talk or presenting to a targeted crowd, but not in documentation that users are more likely to skim hoping for quick answers.

TL;DR: Don't include sentences that just state what you plan on writing about it (i.e. "This article will discuss," "This section is about," etc.)
## Formatting

[ReadMe supports some Markdown](https://readme.readme.io/docs/markdown-options), just like Discourse and Zendesk, and has a few [widgets](https://readme.readme.io/docs/widgets) to help out with formatting as well.

## Section Titles and Text

### Headers

Use proper headers instead of bolding text of section names. This will automatically generate anchor links to specific sections (where :fa-anchor: will appear on mouseover), as well as a table of contents.

* Use ReadMe's [header widget](https://readme.readme.io/docs/widgets#section-header) for major section headers (i.e. Installation, Troubleshooting, etc.) This is equivalent to the `<h1>` HTML tag.
Using the header widget instead of `#` is particularly helpful for others when editing, as it allows them to more quickly find the section of an article they want to edit.
* Use `##`, `###`, etc. for subsection headers (i.e. Ubuntu-specific section, CentOS-specific section, etc.) These are equivalent to `<h2>`, `<h3>`, etc.

Section and subsection headers in articles should also follow the same basic rules as article titles (see above), and should also clearly describe what happens in the following steps. For example, if your article is titled "Creating Services" and one of the first steps is to add an integration (several steps by itself):
[block:callout]
{
  "type": "success",
  "body": "\"Adding Integrations\"",
  "title": "This"
}
[/block]

[block:callout]
{
  "type": "danger",
  "body": "\"Set this up\"",
  "title": "Not This"
}
[/block]
### Content

Keep your paragraphs to **2-3 lines maximum** to ensure that you [don't lose your reader](https://www.nngroup.com/articles/how-little-do-users-read/), and avoid using a passive voice.

### Callouts

Use [callouts](https://readme.readme.io/docs/widgets#section-callout) for important notes, tips and warnings.

#### Callout Examples
[block:callout]
{
  "type": "info",
  "body": "**Account Owners** and **Admins** can invite new users to PagerDuty."
}
[/block]

[block:callout]
{
  "type": "info",
  "body": "This feature is available to accounts on **Standard** and **Enterprise** plans."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Account Owners can have invoices sent to additional email addresses. This setting can be found on the **Account Settings** page."
}
[/block]
## User Instructions

### Getting More Help

Don't instruct people to contact us with their questions in every article; we don't want to condition users to automatically contact us whenever they have a question. We should encourage people to try solving problems on their own by using the information that's already available in the KB, and to ask their questions in the [PagerDuty Community](https://community.pagerduty.com/) first, rather than defaulting to always contacting support.

Of course there are cases where the user can only be helped by contacting us (i.e. bugs, problems with Early Access features, or account-specific issues), so our contact info will remain readily accessible on the marketing site and knowledge base, and we'll continue to offer live chat in the product, but we don't want to encourage people reading the KB to just contact us without trying anything themselves first.

#### Related Articles

When editing an article in ReadMe you'll always see a **Learn more** box, which allows you to reference additional articles that the reader may find helpful. For example, if you're writing about email filters or management rules, use the **Learn more** box to link to an article about using regular expressions, even if you've also linked to the regex article within the content of your article.
[block:callout]
{
  "type": "danger",
  "body": "Do not create your own **See also** section of links in your articles!",
  "title": "Don't Fake It"
}
[/block]
### Clickable Things

#### Use FontAwesome icons

[ReadMe supports Font Awesome](https://readme.readme.io/docs/markdown-options#section-special-readme-features), the same icon library we use in our UI, so for buttons without text (i.e. :fa-edit:), include the [icon from Font Awesome](http://fontawesome.io/icons/) in your description rather than describing the icon.

Also, while some buttons with text may have an icon, it is in fact an icon rather than a text object, so it should not be expressed as text in our writing. Use the real Font Awesome icon if you wish to include icons in your writing.

That being said, not everything we describe needs to be accompanied by an icon, so make sure you reserve them for items that only have icons or will otherwise still look clean with an icon.
[block:callout]
{
  "type": "success",
  "title": "This",
  "body": "\"Click :fa-edit:\"\n\"Go to **Configuration** :fa-arrow-right: **Users**\"\n\"Click **Add New Service**\""
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Not This",
  "body": "\"Click edit (pencil icon)\"\n\"Go to **Configuration > Users**\"\n\"Click **+Add New Service**\""
}
[/block]
#### Bold labels

Bold the labels of objects you want a user to click, and include the name of the object in the text.
[block:callout]
{
  "type": "success",
  "title": "This",
  "body": "\"Click **New On-Call Schedule**\""
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Not This",
  "body": "\"Click New On-Call Schedule\""
}
[/block]
#### "Click" sparingly

Don't "click on the" everything, or "click" in every instruction.
[block:callout]
{
  "type": "success",
  "title": "This",
  "body": "\"Click **New Integration**\"\n\"Click the service name, then go to the **Integrations** tab\"\n\"Go to **Configuration** :fa-arrow-right: **Services**\""
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Not This",
  "body": "\"Click on the **New Integration** button\"\n\"Click on the service, then click on the **Integrations** tab\"\n\"Click on the Configuration menu, then click on Services\""
}
[/block]
#### Link appropriately

[Use descriptive links instead of saying "click here."](https://www.smashingmagazine.com/2012/06/links-should-never-say-click-here/)

CTAs to email support should say "contact our support team" and utilize a `mailto:` link for just the action portion.

CTAs to call support (or any other number) should utilize a `tel:` link so that users on mobile devices or those that can place calls from their desktop browser can be connected without having to dial the number.

Use the `&hellip;` [HTML entity](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML) for ellipses instead of making your own with three periods in a row.
[block:callout]
{
  "type": "success",
  "title": "This",
  "body": "\"Learn more about capture groups&hellip;\"\n\"Please [contact our support team](mailto:support@pagerduty.com) for assistance.\""
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Not This",
  "body": "\"Click here to learn more about capture groups...\"\n\"email [support@pagerduty.com](mailto:support@pagerduty.com)\""
}
[/block]
## Code & Commands

Use single [backticks](https://en.wikipedia.org/wiki/Grave_accent) around any commands/executables (`pd-agent` or `dig`), filenames (`PagerDuty.vbs`), directory paths (`/usr/lib/pdagent/outqueue`), etc. in a file system, and for code snippets you include inline:

>"Set `"event_type": "resolve"` to resolve an incident with Events API v1"

Use three backticks (```) around any code spanning more than a single line, and for template text that needs to be copied and pasted (i.e. JSON template for an integration).
## Screenshots & Videos

**Screenshots are not necessary** for every step of every process. Only attach screenshots of items that may not be immediately discoverable. For example, the **New Integration** button is easily discoverable since it's at the top of the page and has a primary button style (meaning it's green), whereas the **Test**, edit and delete options for user contact methods are far away from the actual data shown.

Ask yourself the tough easy questions before you even take your screenshots:

* Am I taking this screenshot because the next step is not immediately discoverable?
 * If somebody can't find the **Configuration** menu without a screenshot, they probably need to get their vision checked more than they need a screenshot pointing it out to them.
* Is including this screenshot crucial to helping the customer understand the article?
* Is it necessary to spell out this minor step with a screenshot in addition to text?
 * "Click **Edit this Schedule**" is an example instructional step which **does not require a screenshot**.
* Is breaking up the text with this screenshot meaningful?
* Are any instructional arrows on this screenshot necessary?

If you answered "No" to any of these questions, reconsider.

If you do find a screenshot is necessary for a specific process:

* Use dummy data (see below) where possible, and conceal sensitive information (i.e. integration keys, email addresses, personal phone numbers) by [changing the values in your browser's developer console](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/) before taking a screenshot.
 * Be sure to blur any sensitive information afterward if you aren't able to hide it before taking the screenshot.
* If you have a MacBook Pro with a Retina display, take screenshots on your MacBook Pro's screen rather than the Thunderbolt display. Screenshots taken on non-Retina displays are not as sharp and will look fuzzy when viewed on high resolution displays.
* Crop to the smallest region possible, as this will minimize the need to update the screenshot as our UI evolves compared to a full page screenshot. See examples of appropriate cropping below.

## Dummy Data

* Use `415-555-1212`, the main PagerDuty alert number (`415-349-5750`), and main office number (`650-989-2965`) as dummy numbers in screenshots involving phone numbers where possible. This will eliminate the need to conceal your personal number after the fact, or the chance of your personal number still being made public if a screenshot is posted with your number by mistake.
* Use `pagerduty.help` and `example.com` as dummy domains in screenshots involving email addresses where possible.

## Annotations

**Use the Preview app** to annotate your screenshots **instead of Skitch**. By taking advantage of the annotation features built-in to Preview we can make our screenshots look more polished and have them stand out when our screenshots are compared to other technical documentation using the basic arrows from Skitch.

### Rectangle

Rectangle outlines are suitable for most annotations. They should highlight something specific on a screenshot such as a required field, link, or otherwise hard to find settings.

#### Rectangle usage
`⌃⌘R` **Tools** :fa-arrow-right: **Annotate** :fa-arrow-right: **Rectangle**
Set the fill color to transparent, border color to red, and the line width to the fourth option (from the top).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1e22f41-how-to-annotations.png",
        "how-to-annotations.png",
        843,
        391,
        "#dedcde"
      ]
    }
  ]
}
[/block]
### Arrow

Arrows should be reserved for bringing attention to objects that outlines alone wouldn't easily point out. In the example below, an arrow is used to point to the OCC settings icon, since a box outline could be easily overlooked in the corner of a screenshot that large. **Use straight, horizontal arrows** or vertical arrows if a horizontal arrow won't fit neatly. Do not add arrows at an angle. Arrows, like rectangles, should also use the 4th line width (as pictured above). 

#### Arrow usage
`⌃⌘A` **Tools** :fa-arrow-right: **Annotate** :fa-arrow-right: **Arrow**
Set the border color to red and the line width to the fourth option (from the top), just as you would for a rectangle.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f49b2b0-console-settings.png",
        "console-settings.png",
        1050,
        1426,
        "#15202f"
      ],
      "caption": "Rectangle outline, arrow, and text annotations are used here to indicate where OCC's Saved Layouts option is hidden"
    }
  ]
}
[/block]
### Text

Text is an as-needed tool to complement annotations which would otherwise appear out of place without something to balance things out.

#### Text usage
`⌃⌘T` **Tools** :fa-arrow-right: **Annotate** :fa-arrow-right: **Text**
Set the font to Helvetica, color to red, and size to 30pt.

### Loupe

Although we want out documentation to be functional first and foremost, we should also strive to keep it visually appealing. Using the loupe magnification with smaller objects, such as short links or icons, can simultaneously bring immediate attention to a specified object and be more aesthetically pleasing than a plain box outline, so keep it in mind when you're taking a screenshot of small objects.

#### Loupe usage
`⌃⌘L` **Tools** :fa-arrow-right: **Annotate** :fa-arrow-right: **Loupe**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0589299-loupe.png",
        "loupe.png",
        1600,
        204,
        "#dceaf2"
      ],
      "caption": "Loupe annotation is used here to indicate where the Test option is located for a specific contact method"
    }
  ]
}
[/block]
## Videos

Use QuickTime Player, Screenflick, etc. to create short videos of things better explained by actually seeing UI actions. [Recording with QuickTime Player](http://www.idownloadblog.com/2016/02/26/how-to-record-part-of-mac-screen-quicktime/) (which is free) is very simple and produces a high quality MP4 that plays as-is in all of the browsers our web app supports without any plugins. Alternatively, tools like [Recordit](http://recordit.co/) can be used to generate GIFs, but videos should be preferred over GIFs for multiple reasons:

* Quality - MP4 videos will generally be of higher quality than an animated GIF
* File size - MP4 videos are smaller in size, especially for longer clips, so users won't have to wait as long for page content to load
* Performance - most computers have decent hardware video acceleration, but GIFs can't use hardware acceleration and take quite a bit of CPU time instead, meaning even modern computers may cry if we use them
* UX - users can pause and replay clips on their own if they'd like
[block:callout]
{
  "type": "warning",
  "title": "TODO",
  "body": "Need to find best way for us to host videos since ReadMe doesn't do video. We can use YouTube or Vimeo for something easy, HTML5's video tag linking to a file hosted in an S3 bucket, or sell our souls to GIF by converting with a tool like [screengif](https://github.com/dergachev/screengif) (the most efficient transcoding workflow with best end result I've found) unless somebody else knows of something better."
}
[/block]