module.exports.dateGen = function(CreateDate) {

    d = new Date(),
        difference = (d - CreateDate);

    var oneDay = 1000 * 60 * 60 * 24; //convert to millisecs
    return (Math.floor(difference / oneDay))

}