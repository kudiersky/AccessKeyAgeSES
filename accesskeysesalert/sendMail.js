module.exports.sendMail = function(keyData) {

  var AWS = require('aws-sdk')

  var params = require('./params');

  AWS.config.update({region: params.params.region})
  
  var ses = new AWS.SES()

AWS.config.apiVersions = {
    ses: '2010-12-01',
  };

  var ses = new AWS.SES()

  var Subject = 'Account Access Key Age Status' //make a varaible 

var payLoad = keyData

var params = {
    Destination: {
     BccAddresses: [
     ], 
     CcAddresses: [
        
     ], 
     ToAddresses: [
      params.params.toAddress //env variable for to address
     ]
    }, 
    Message: {
     Body: {
      Html: {
       Charset: "UTF-8", 
       Data: payLoad
      }, 
      Text: {
       Charset: "UTF-8", 
       Data: '123'
      }
     }, 
     Subject: {
      Charset: "UTF-8", 
      Data: Subject
     }
    }, 
    ReplyToAddresses: [
    ], 
    ReturnPath: params.params.toAddress, // for bounces
    Source: params.params.sourceAddress// source address
   };
   ses.sendEmail(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data, 'message successfully sent') // successful response
   })
}