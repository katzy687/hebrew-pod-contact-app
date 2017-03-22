var Contacts = require('../models/contactModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // get all contacts
    app.get('/api/contacts/:uname', function(req, res) {

        Contacts.find({ username: req.params.uname }, function(err, contacts) {
            if (err) throw err;

            res.send(contacts);
        });

    });
    // get one particular contact
    app.get('/api/contact/:id', function(req, res) {

       Contacts.findById({ _id: req.params.id }, function(err, contact) {
           if (err) throw err;

           res.send(contact);
       });

    });

    // add contact and update existing contacts
    app.post('/api/contact', function(req, res) {

        // if id exists, then do update
        if (req.body.id) {
            Contacts.findByIdAndUpdate(req.body.id, { name: req.body.name, email: req.body.email }, function(err, contact) {
                if (err) throw err;

                res.send('Success');
            });
        }

        else {

          // make new contact and save
           var newContact = Contacts({
               username: 'test',
               name: req.body.name,
               email: req.body.email,
               smiley: req.body.smiley
           });
           newContact.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });

        }

    });

    // delete one
    app.delete('/api/contact/:id', function(req, res) {

        Contacts.findByIdAndRemove({_id: req.params.id}, function(err) {
            if (err) throw err;
            res.send('Success');
        })

    });

    // delete all
    app.delete('/api/contacts/:uname', function(req, res) {

        Contacts.remove({ username: req.params.uname }, function(err) {
            if (err) throw err;

            res.send('everything deleted');
        });
    });

}
