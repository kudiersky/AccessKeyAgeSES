//exports.handler = function(event, context) {

var AWS = require('aws-sdk');

var formatData = require('./formatData');

AWS.config.update({region: 'eu-west-1'});

var docClient = new AWS.DynamoDB.DocumentClient();

var keyAgeLowerLimit = 70;

var params = {
    TableName: "AccessKeyAge",
    ProjectionExpression: "#KA, KeyID, UserName, Active",
    FilterExpression: "#KA > :keyAgeLowerLimit",
    ExpressionAttributeNames: {
        "#KA": "KeyAge",
    },
    ExpressionAttributeValues: {
         ":keyAgeLowerLimit": keyAgeLowerLimit
    }
};

docClient.scan(params,function(err,data) {
    if(err) {
        console.log(err);
    } else {
        formatData.formatData(data)
    }
}); 

//}