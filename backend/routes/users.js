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
    // Create new user
    const username = req.body.username;
 
    const newUser = new User({username});
    // Save user to database
    newUser.save()
        .then(() => res.json('User added.'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;