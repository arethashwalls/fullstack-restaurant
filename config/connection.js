const mysql = require('mysql');

const connection = 
    process.env.CLEARDB_DATABASE_URL ?
        mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
    :
        mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Fallen Falling',
            database: 'fullstack_db'
        });

connection.connect((err) => {
    if (err) return console.log(err.stack);
    console.log(`\nConnected as ID ${connection.threadId}.`)
})

module.exports = connection;