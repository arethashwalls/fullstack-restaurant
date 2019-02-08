const express = require('express');
const router = express.Router();
const pancake = require('../models/pancake');

router.get('/', (req, res) => {
    pancake.selectAll()
    .then(data => {
        console.log(data);
        res.render('index', {pancakes: data})
    })
    .catch(err => {
        console.log('\nGET request was unsuccessful.\n');
        res.status(500).end();
    })
});
router.post('/api/pancakes', (req, res) => {
    pancake.insertOne({
        pancake_name: req.body.pancake_name,
        devoured: false
    })
    .then(data => {
        console.log(data);
        res.json({id: data.insertId});
    })
    .catch(err => {
        console.log('\nPOST request was unsuccessful.\n');
        res.status(500).end();
    })
});
router.put('/api/pancakes/:id', (req, res) => {
    pancake.updateOne({
        devoured: true
    }, {
        id: req.params.id
    })
    .then(data => {
        console.log(data);
        if(data.affectedRows === 0) return res.status(404).end();
        res.status(200).end();
    })
    .catch(err => {
        console.log('\nPUT request was unsuccessful.\n');
        res.status(500).end();
    })
})

module.exports = router;