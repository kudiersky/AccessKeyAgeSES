module.exports.sendMail = function(keyData) {

  var AWS = require('aws-sdk');
  AWS.config.update({region: 'eu-west-1'});
  
  var ses = new AWS.SES();

AWS.config.apiVersions = {
    ses: '2010-12-01',
    // other service API versions
  };

  var ses = new AWS.SES();

  var Subject = 'Account Access Key Age Status'
  /* The following example sends a formatted email: */

var payLoad = keyData

var params = {
    Destination: {
     BccAddresses: [
     ], 
     CcAddresses: [
        
     ], 
     ToAddresses: [
        "jake.kudiersky@kpmg.co.uk"
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
    ReturnPath: "jake.kudiersky@kpmg.co.uk", 
    Source: "jake.kudiersky@kpmg.co.uk"
   };
   ses.sendEmail(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
   })

}