const fs = require('fs');

module.exports = function (mongoose) {
    mongoose.connect('mongodb://localhost/ratemycakes1', {useNewUrlParser: true});
    let models_path = __dirname + "./../models";
    fs.readdirSync(models_path).forEach(function (file) {
        if (file.indexOf('.js') > 0) {
            require(models_path + "/" + file)(mongoose);
        }
    });
}