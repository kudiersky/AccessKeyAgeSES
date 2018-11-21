# AccesskeySESAlert

## Getting Started

This app runs from the terminal and will send an Email using SES with a HTML table of key ages over a coded value (70days default)

Query table for items over threshold => Generates SES email to hard coded address.

run node index.js

<pre>

  Access Key Age Alert
  
  Access keys over 70 days 

+----------------------------------+---------+------------------------+<br />
|               KeyID              |  Username  |     Age             |<br />
+----------------------------------+---------+------------------------+<br />
| AIDAI5NDMG44DFAEKUPOK            |  akiller   |    80 days          |<br />
| AIDAI5NDERD2333DFUIIL            |   adudd    |    122 days         |<br />
+----------------------------------+---------+------------------------+<br />
</pre>

### Prerequisites

aws credentials
node.js 
npm
aws-sdk
ran AccessKeyAge stash.customappsteam.co.uk/scm/cfl/accesskeyage.git to generate a table that this app queries.
Registered Emails receipient and originator.


### Installing

Intention: to depoly deployed with Terraform to Accounts

## Authors

Jake Kudiersky

## License

This project is licensed under the MIT License
