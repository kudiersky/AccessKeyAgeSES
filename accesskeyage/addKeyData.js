module.exports.addKeyData = function(keyData) {
  //export the addKeyData function 

  var AWS = require("aws-sdk");
  // Set the region 

  var params = require('./params');
  //parameters file 

  var dateGen = require('./dateGen');
  //required functions

  AWS.config.update({
      region: params.params.region //replace with variable
  });
  //set region (include in params)

  var ddb = new AWS.DynamoDB();
  // Create DynamoDB service object

  var myTable = params.params.tableName;
  //Table Name, replace with var and store in param.js 

  
  // Add the four results
  var params = {
      TableName: params.params.tableName,
      Item: {
          'KeyID': {
              S: String(keyData.AccessKeyId)
          },
          'UserName': {
              S: String(keyData.UserName)
          },
          'KeyAge': {
              N: (String(dateGen.dateGen(keyData.CreateDate)))
          }, //taking the date and coverting it to days
          'Active': {
              S: String(keyData.Status)
          }
      }
  };
  post();

  function post() {
      ddb.putItem(params, function(err, data) {
          if (err) {
              console.log("Error", err); //log error 
          } else {
              console.log("item ammended to DB"); //logs each time an item is loaded into DB
          }
      });
  }

}