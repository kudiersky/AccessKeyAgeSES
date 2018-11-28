exports.params = {
    tableName : process.env.tableName, //name of table
    region: process.env.region, //region for DDB
    keyAgeLowerLimit: process.env.keyAgeLowerLimit //key age query lower limit.    
};