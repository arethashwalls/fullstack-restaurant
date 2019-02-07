const connection = require('./connection');

module.exports = {
    selectAll: (table) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM ??', [table], function (err, data) {
                console.log(`\nQuerying: ${this.sql}`);
                if(err) reject('\norm.selectAll was unsuccessful. See error below.\n\n' + err);
                resolve(data);
            });
        });
    },
    insertOne: (table, valueObj) => {
        return new Promise((resolve, reject) => {
            const colNames = Object.keys(valueObj);
            const valNames = Object.values(valueObj);
            connection.query(`INSERT INTO ?? (??) VALUES (?)`, [table, colNames, valNames], function (err, data) {
                console.log(`\nQuerying: ${this.sql}`);
                if(err) reject('\norm.insertOne was unsuccessful. See error below.\n\n' + err);
                resolve(data);
            });
        });
    }
}