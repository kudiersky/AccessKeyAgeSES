# AccesskeyAgeTableGenerator

## Getting Started

This app runs from the terminal and will retreive access key data (exclusive of the access key value), if users in an account 
and store themin a DDB.

Create Table => Get list of Users => Get Key data => put Key data to DDB

The DDB table will be created in the params.params object.

<pre>
+----------------------------------+---------+------------------------+----------------+<br />
|               KeyID              |  Username  |     Age             |  Status        |<br />
+----------------------------------+---------+------------------------+----------------+<br />
| AIDAI5NDMG44DFAEKUPOK            |  akiller   |    20               |  Active        |<br />
| AIDAI5NDERD2333DFUIIL            |   adudd    |    122              |  Active        |<br />
+----------------------------------+---------+------------------------+----------------+<br />
</pre>

### Prerequisites

aws credentials
node.js 
npm
aws-sdk

### Associated App

AccessKeySESAlert has been created to publish the keys over a stated threshold to an AWS registered email.

### Role required for Lambda

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AccessKeyDDB",
            "Effect": "Allow",
            "Action": [
                "dynamodb:*",
            ],
        }
    ]
}
```

### Installing

Intention: to depoly deployed with Terraform to Accounts


## Authors

Jake Kudiersky

## License

This project is licensed under the MIT License
