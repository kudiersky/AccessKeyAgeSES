# AccesskeyAgeTableGenerator

## Getting Started

This app runs from the terminal and will retreive access key data (exclusive of the access key value), if users in an account 
and store themin a DDB. Further a SES templated email will be sent to a predefined SES email.

### Prerequisites

aws credentials
node.js 
npm
aws-sdk
registered SES email for recipient and domain 

### Installing

To deploy this lambda. use the index.zip file will be required including module dependencies. 

### Lambda

This Lambda would require a cloudwatch event of (daily), or when the recipient would like updating.

## Environmental Variables

```
ReturnPath = registed SES Email 

SourceAddresses = registed SES Email 

ToAddresses = registed SES Email 

```

## Authors

Jake Kudiersky

## License

This project is licensed under the MIT License