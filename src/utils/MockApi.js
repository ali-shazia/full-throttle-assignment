let data = require('../mocks/users.json')

/**
 * get the complete data
 */
const getAllData = () => {
    return data;
}

/**
 * get the users without the activity periods field 
 */
const getUsers = () => {
    return data.members.map(({activity_periods, ...rest}) => rest);
}

/**
 * get the users activity for the userId passed
 */
const getUserActivity = (userId) => {
    return data.members.find(member => member.id === userId)
}

/**
 * get the last active time for the userId passed
 */
const getUserLastActive = (userId) => {
    let user = data.members.find(member => member.id === userId);
    return user.activity_periods[user.activity_periods.length - 1].end_time;
}

module.exports = {
    getAllData, 
    getUsers,
    getUserActivity,
    getUserLastActive
};