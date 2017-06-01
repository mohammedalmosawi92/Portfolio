var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cvSchema = new Schema({
    name: String,
    job: String,
    bio: String,
    languages: [String],
    frameworks: [String],
    databases: [String]
})

module.exports = mongoose.model("CVSchema", cvSchema);
