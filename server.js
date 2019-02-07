const express = require('express');

const orm = require('./config/orm');

orm.updateOne('pancakes', {pancake_name: 'strawberry'}, {pancake_name: 'blueberry'})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})