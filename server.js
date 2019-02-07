const express = require('express');

const orm = require('./config/orm');

orm.insertOne('pancakes', {pancake_name: "wallnut", devoured: false})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})