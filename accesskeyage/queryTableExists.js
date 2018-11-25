// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region 
AWS.config.update({region: process.env.region});

// Load SDK ddb
var ddb = new AWS.DynamoDB();

//import createtable build function
var createTable = require('./createTable.js');

var tableName = 'AccessKeyAge'

module.exports.queryTableExists = function(tableName){

  return tableCheck = new Promise((resolve, reject) => { //promise reloves or rejects

  //declare parameters

  var params = {
    TableName : "accessKeyAge", //takes the parameter
    };

        ddb.describeTable(params, function(err, data) { //takes error and data
        if (data){
          console.log(`${params.TableName} Table is ${data.Table.TableStatus}`)
          resolve(data)
        }

        else{
              createTable.createTable() //create the table 
              reject(err)
        }
    })
  }).catch(function(err) {
    console.log(`AWS code: ${err.code}`);
  })
}
