# AccesskeyAgeTableGenerator

## Getting Started

This lambda will retreive access key data and store them in a DDB. Further a SES templated email will be sent to a predefined SES email.

### Prerequisites

aws credentials
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