exports.params = {
    tableName : process.env.tableName, //name of table
    region: process.env.region, //region for DDB //key age query lower limit.  
    keyAgeLowerLimit: process.env.keyAgeLowerLimit,
    bounceAddress: process.env.bounceAddress,
    toAddress: process.env.toAddress,
    sourceAddress: process.env.sourceAddress
 };