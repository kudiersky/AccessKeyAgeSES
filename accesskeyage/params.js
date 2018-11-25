exports.params = {
    tableName : "AccessKeyAge", //name of table
    region: process.env.region, //region for DDB
    keyAgeLowerLimit: process.env.threshold, //key age query lower limit.  

    
};