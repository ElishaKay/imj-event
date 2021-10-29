var md5 = require('md5');
var adminConfig = require('../config/adminconfig.js');
var settingsConfig = require('../config/settingsconfig.js');
var sg = require('sendgrid')(adminConfig.SENDGRID_API_KEY);

const ActiveCampaign = require("activecampaign");
const ac = new ActiveCampaign(process.env.ACTIVE_CAMPAIGN_HOST, process.env.ACTIVE_CAMPAIGN_KEY);

module.exports = function(app, connection) {

    const saveContactInDB = (contactData) => {
        let {firstName, lastName, address, country, phoneNumber, email} = contactData;

        connection.query('INSERT INTO emails (firstName, lastName, address, country, phoneNumber, emailaddress) VALUES (?, ?, ?, ?, ?, ?)', [firstName, lastName, address, country, phoneNumber, email], function(err, rows, fields) {
            if (err) {
                console.log('sql error when trying to save contact', err)
            } else {
                console.log('contact saved succesfully')
            }
        })
    }

    app.post('/api/v1/newemail', function(req, res) {
        saveContactInDB(req.body);
        let name = '';
        let {firstName, lastName, address, country, phoneNumber, email} = req.body;
        if(firstName && lastName){
            name = firstName + ' ' + lastName
        }

        var contact_add = ac.api("contact/add", { name, firstName, lastName, address, country, phoneNumber, email });

        contact_add.then(function(result) {
            console.log('result of attempting to add contact to active campaign: ',result);

            var eventdata = {
                tags: 'imj-event-signup',
                email
            };

            ac.api('contact/tag/add', eventdata).then(function(result) {
                console.log('success', result);
                return res.json({
                    user: req.body,
                    message: `A confirmation email has been sent to ${email}.`
                });
            }, function(err) {
                console.log('failure', err);
            });     
        }, function(err) {
                console.log('failure', err);
        });
    });

}
