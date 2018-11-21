
module.exports.listUsers = function(){
  
  //load aws sdk
   var AWS = require('aws-sdk');
  
   var getKeys = require('./getKeys')

  //load iam sdk
  var iam = new AWS.IAM();
  
  /// The following command lists the IAM users in the current account.

var params = { //no params required
};

iam.listUsers(params, function(err, data) {
if (err) console.log(err, err.stack); // an error occurred
else     console.log(data);           // successful response 

let list = data.Users;

console.log(list)

for (var i = 0, len = list.length; i < list.length; i++) {
      
      getKeys.getKeys(list[i].UserName) 
      
      }
  });
}