var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactSchema = new Schema({
    username: String,
    name: String,
    email: String,
    smiley: String
});

var Contacts = mongoose.model('Contacts', contactSchema);

module.exports = Contacts;
