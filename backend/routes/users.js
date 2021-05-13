// User API endpoints
const router = require('express').Router();
// use user models
let User = require('../models/user.model');

// GET Request
// rooturl/users/
router.route('/').get((req, res) => {
    User.find()
        // return json
        .then(users => res.json(users))
        // return an error
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST Request
// rooturl/users/add
router.route('/add').post((req, res) => {
    // Set new user attributes in variables
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const date = Date.now;
    // Create new user and set attributes
    const newUser = new User({
        username,
        email,
        password,
        date,
    });
    // Save user to database
    newUser.save()
        // If success
        .then(() => res.json('User added.'))
        // If error, catch and send as json
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;