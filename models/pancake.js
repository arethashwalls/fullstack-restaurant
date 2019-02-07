const orm = require('../config/orm');

module.exports = {
    selectAll: () => {
        return orm.selectAll('pancakes');
    },
    insertOne: valueObj => {
        return orm.insertOne('pancakes', valueObj);
    },
    updateOne: (valueObj, conditionObj) => {
        return orm.updateOne('pancakes', valueObj, conditionObj);
    }
}