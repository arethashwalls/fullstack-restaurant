const connection = require('./connection');

module.exports = {
    selectAll: (table) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM ??', [table], function (err, data) {
                console.log(`\nQuerying: ${this.sql}`);
                if (err) {
                    console.log('\norm.selectAll was unsuccessful. See error below.\n');
                    return reject(err);
                }
                console.log('\norm.selectAll was successful. See data below.\n')
                return resolve(data);
            });
        });
    },
    insertOne: (table, valueObj) => {
        return new Promise((resolve, reject) => {
            const colNames = Object.keys(valueObj);
            const valNames = Object.values(valueObj);
            valNames.forEach(val => {
                if (!val || val === '') {
                    console.log('\n\norm.insertOne was unsuccessful.\n\nNull values are forbidden.');
                    return reject('\nNull values are forbidden.');
                } else {
                    connection.query(`INSERT INTO ?? (??) VALUES (?)`, [table, colNames, valNames], function (err, data) {
                        console.log(`\nQuerying: ${this.sql}`);
                        if (err) {
                            console.log('\norm.insertOne was unsuccessful. See error below.\n');
                            return reject(err);
                        }
                        console.log('\norm.insertOne was successful. See data below.\n')
                        return resolve(data);
                    });
                }
            })

        });
    },
    updateOne: (table, valueObj, conditionObj) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE ?? SET ? WHERE ?', [table, valueObj, conditionObj], function (err, data) {
                console.log(`\nQuerying: ${this.sql}`);
                if (err) {
                    console.log('\norm.updateOne was unsuccessful. See error below.\n');
                    return reject(err);
                }
                console.log('\norm.updateOne was successful. See data below.\n');
                return resolve(data);
            });
        });
    }
}