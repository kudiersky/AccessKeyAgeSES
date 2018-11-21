module.exports.getKeys = function(nameOfUser) {

    var addKeyData = require('./addKeyData')
    //requires addKeyData function 
    
    var iam = new AWS.IAM();

    var params = {
        UserName: nameOfUser
    };
    
    iam.listAccessKeys(params, function(err, data) {

        if (err) console.log(err, err.stack); // an error occurred

        for (var key in data.AccessKeyMetadata) {

            let keyData = {
                UserName: data.AccessKeyMetadata[key].UserName,
                Status: data.AccessKeyMetadata[key].Status,
                CreateDate: data.AccessKeyMetadata[key].CreateDate,
                AccessKeyId: data.AccessKeyMetadata[key].AccessKeyId
            }

            addKeyData.addKeyData(keyData)


        }

    });

};