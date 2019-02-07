const express = require('express');

const orm = require('./config/orm');

orm.selectAll('pancakes')
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})