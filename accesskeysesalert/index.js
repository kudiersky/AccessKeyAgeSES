exports.handler = function(event, context) {

var AWS = require('aws-sdk');

var formatData = require('./formatData');

var params = require('./params');

AWS.config.update({region: params.params.region});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: 'AccessKeyAge',
    ProjectionExpression: "#KA, KeyID, UserName, Active",
    FilterExpression: "#KA > :keyAgeLowerLimit",
    ExpressionAttributeNames: {
        "#KA": "KeyAge",
    },
    ExpressionAttributeValues: {
         ":keyAgeLowerLimit": 70
    }
};

    docClient.scan(params,function(err,data) {
        if(err) {
            console.log(err);
        } else {
            formatData.formatData(data)
        }
    }); 
}