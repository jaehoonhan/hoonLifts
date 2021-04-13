// Exercise API endpoints
const router = require('express').Router();
// Use exercise model
let Exercise = require('../models/exercise.model');

// GET Request
//rooturl/exercises/
router.route('/').get((req, res) => {
    // .find() mongoose command 
    Exercise.find()
        // return exercises as JSON
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET Request
//rooturl/exercises/add
router.route('/add').post((req, res) => {

    // save exercise attritubes
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    // Create new Exercise
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });
    // .save() mongoose command
    newExercise.save()
        .then(() => res.json('Exercise added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;