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

// POST create exercise
//rooturl/exercises/add
router.route('/add').post((req, res) => {

    // save exercise attritubes
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    // Create new Exercise and set attributes
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

// GET read exercise object by id
router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error : ' + err));
});

// DELETE exercise object by id
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
// POST update exercise by object id
router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;