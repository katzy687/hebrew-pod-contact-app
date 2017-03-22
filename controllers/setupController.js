var Contacts = require('../models/contactModel');

module.exports = function(app) {

   app.get('/api/setupContacts', function(req, res) {

       // seed database
       var starterContacts = [
           {
               username: 'test',
               name: 'Sarah',
               email: "Sarah@sarah.com",
               smiley: "hmm"
           },
           {
               username: 'test',
               name: 'Rachel',
               email: "Rachel@rachel.com",
               smiley: "meh"
           },
           {
               username: 'test',
               name: 'Norman',
               email: "Norman@norman.com",
               smiley: "rofl"
           }
       ];
       Contacts.create(starterContacts, function(err, results) {
           res.send(results);
       });
   });

}
