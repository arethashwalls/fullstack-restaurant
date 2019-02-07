const express = require('express');
const router = express.Router();
const pancake = require('../models/pancake');

router.get('/', (req, res) => {
    pancake.selectAll()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log('\nGET request was unsuccessful.\n');
        console.log(err);
    })
});
router.post('/api/pancakes', (req, res) => {
    pancake.insertOne({
        pancake_name: req.body.pancake_name,
        devoured: false
    })
    .then(data => {
        res.json({id: data.insertId});
    })
    .catch(err => {
        console.log('\nPOST request was unsuccessful.\n');
        console.log(err);
    })
});
router.put('/api/pancakes/:id', (req, res) => {
    pancake.updateOne({
        devoured: true
    }, {
        id: req.params.id
    })
    .then(data => {
        if(data.affectedRows === 0) return res.status(404).end();
        res.status(200).end();
    })
})