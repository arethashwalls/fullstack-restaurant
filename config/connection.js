const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Fallen Falling',
    database: 'fullstack_db'
});

connection.connect((err) => {
    if(err) return console.log(err.stack);
    console.log(`\nConnected as ID ${connection.threadId}.`)
})

module.exports = connection;