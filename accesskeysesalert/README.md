# Accesskey SES Alert

## Getting Started

This Lambda and will send an Email using SES with a HTML table of key ages over a coded value (70days default)

Query table for items over threshold => Generates SES email to env variable address.


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
an existing DDB table. Built by AccessKeyAge Lambda.

### Installing

Intention: to depoly deployed with Terraform to Accounts. The lambda can be uploaded as a .zip file. 

```
index.zip
```

### Lambda

Use Cron job, to email recipent when required below set to daily 0900.

```
cron(0 09 * * ? *) 
```

## Role required for Lambda

```json

    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "organizations:ListAccounts",
                "ses:SendEmail",
                "ses:SendRawEmail",
                "ec2:Describe*",
                "dynamodb:*"
            ],
            "Resource": "*"
        }
    ]
}
```


## Environmental Variables

```
ReturnPath = registed SES Email 

SourceAddresses = registed SES Email 

ToAddresses = registed SES Email 

region = region of SES domain

threshold = limit for lowest key age

```

## Authors

Jake Kudiersky

## License

This project is licensed under the MIT License
