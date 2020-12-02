---
title: "Import Users from a CSV"
slug: "import-users-from-a-csv"
excerpt: "Import users to your PagerDuty account from a CSV"
hidden: false
createdAt: "2017-02-08T06:43:45.922Z"
updatedAt: "2020-09-30T15:37:15.896Z"
---
## Do It Yourself Using a Ruby Script
We've written a Ruby script that you can use to import users on your own: [:fa-file-code-o: import_users.rb](https://github.com/PagerDuty/public-support-scripts/blob/master/import_users/import_users.rb)

You'll want to pass a full-access API v2 access token, the requester email of the user making the change, and the path to your CSV file as command line arguments; here, an example command is shown:

```
import_users.rb -a tKvs3QDNi84Nl326Krdz -e admin@example.com -f ./users.csv
```

The usage instructions for the tool can be found by executing the script with a `-h` or `--help` flag:

```
import_users.rb -h
Usage: import_users.rb [options]
    -a, --access-token [String] Access Token
    -e, --requester-email [String] Requester Email
    -f, --csv-path [String] Path to CSV file
```

The CSV file can be named anything - you'll just need to make sure the path is correct.

Below is the required format for the CSV file. The email address and phone number will be set up as an immediate notification rule for the user (for both phone calls and SMS). The user's role can be `admin`, `user`, `limited_user`, `observer`, `restricted_access`, `read_only_user` (Full Stakeholder), or `read_only_limited_user` (Limited Stakeholder) and defaults to `user` if not specified. To see how these values map to values on the webpage, please refer to our section on [Roles in the REST API and SAML](https://support.pagerduty.com/docs/advanced-permissions#roles-in-the-rest-api-and-saml). You can find additional information on user roles and permissions [here](https://support.pagerduty.com/docs/user-roles).

The CSV file should be in format `name,email,role,title,country code,phone number,team 1;team 2;team 3`. There's no need to include a header in the file and the title and teams are optional. If the user is on multiple teams, they should be separated by a semicolon. Here's a sample CSV:

```
Joe User,ju@example.com,user,Operations Engineer,1,5555555555,Engineering;Operations 
Bob Dobbs,bd@example.com,admin,Director of Engineering,86,15555555554,Engineering;Operations;Leadership
```

## Have PagerDuty Import Users for You

Create a CSV file according to the above example, populate it with your users' data, and [send the file to our support team](mailto:support@pagerduty.com).
[block:callout]
{
  "type": "info",
  "body": "As with running the the Ruby script yourself, you can only include one phone number in addition to email."
}
[/block]