

var params = require('./params');
//import parameters

var AWS = require('aws-sdk');
//import AWS module

AWS.config.update({
    region: params.params.region 
  });

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: params.params.tableName,
    ProjectionExpression: "#KA, KeyID, UserName",
    FilterExpression: "#KA > :KeyAgeLowerLimit",
    ExpressionAttributeNames: {
        "#KA": "KeyAge",
    },
    ExpressionAttributeValues: {
         ":keyAgeLowerLimit": params.params.keyAgeLowerLimit
    }
};

docClient.scan(params,function(err,data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data)
    }
});