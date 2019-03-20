module.exports = function(mongoose) {
    var RatesSchema = new mongoose.Schema({
        stars: {type: String, required: [true, "Stars are required."]},
        comment: {type: String},
    });
    var RateMyCakesSchema = new mongoose.Schema({
        baker: {type: String, required: [true, "Baker is required."]},
        image: {type: String, required: [true, "Image URL is required."]},
        rates: [RatesSchema],
    });
    mongoose.model('ratemycakes', RateMyCakesSchema);
}