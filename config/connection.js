const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'Fallen Falling',
    database: process.env.DB_NAME || 'fullstack_db'
})

connection.connect((err) => {
    if (err) return console.log(err.stack);
    console.log(`\nConnected as ID ${connection.threadId}.`)
})

module.exports = connection;