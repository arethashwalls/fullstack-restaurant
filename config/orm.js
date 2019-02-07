const connection = require('./connection');

module.exports = {
    selectAll: (table) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM ??', [table], (err, data) => {
                if(err) reject('\norm.selectAll was unsuccessful. See error below.\n\n' + err);
                resolve(data);
            });
        });
    },
    
}