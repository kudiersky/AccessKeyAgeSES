module.exports.createTable = function() {
  //export createTable function

  var params = require('./params');
  //load parameters 

  AWS = require('aws-sdk');
  //load aws sdk

  // Set the region 
  AWS.config.update({
      region: 'us-east-2'
  }); //hard coded region could be repaced with variable stored in variable.js as JSON 

  // Load ddb sdk
  var ddb = new AWS.DynamoDB();

  var params = {
      AttributeDefinitions: [{
              AttributeName: "KeyID",
              AttributeType: "S"
          },
          {
              AttributeName: "UserName",
              AttributeType: "S"
          },
      ],
      KeySchema: [{
              AttributeName: "KeyID",
              KeyType: "HASH"
          },
          {
              AttributeName: "UserName",
              KeyType: "RANGE"
          }
      ],
      ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
      },


      TableName: "AccessKeyAge" //replace with variable 
  };
  ddb.createTable(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
  });
};