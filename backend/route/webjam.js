const router = require('express').Router();
let Webjam = require('../models/webjam.model');

router.route('/').get((req, res) => {
    Webjam.find()
        .then(users => res.json(webjam))
        .catch(err =>res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(requ.body.duration);
    const date = Date.parse(req.body.date);

    const newWebJam = new Webjam({
        username,
        description,
        duration,
        date,
    });

    newWebJam.save()
        .then(() => res.json('Webjam added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;