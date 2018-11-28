exports.handler = function(event, context) {

    var AWS = require('aws-sdk');

    var queryTableExists = require('./queryTableExists.js');

    var createTable = require('./createTable.js');

    var listUsers = require('./listUsers.js');

    var params = require('./params');

    // Set the region 
    AWS.config.update({
        region: params.params.region
    });

    // Load SDK ddb
    var ddb = new AWS.DynamoDB();

    queryTableExists.queryTableExists() //run synchronously 

    var params = {
        TableName: params.params.tableName
    };
    ddb.waitFor('tableExists', params, function(err, data) { //waits for the table to read active
        if (err) console.log(err, err.stack); // an error occurred
        else

            console.log(`Table is ${data.Table.TableStatus}`);

        listUsers.listUsers()
    });

}