const users = []
// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data 
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate user name
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    //store user 
    const user = { id, username, room }
    users.push(user)
    return { user }


}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if ((index !== -1)) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)

    // if (!user) {
    //     return {
    //         errorMessage: 'User not found'
    //     }
    // }
    // return user
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)

}

module.exports = {
    addUser,
    removeUser,
    getUsersInRoom,
    getUser
}

// addUser({
//     id: 22,
//     username: 'Abhinav',
//     room: 'Dell'
// })
// addUser({
//     id: 21,
//     username: 'Anand',
//     room: 'Dell'
// })
// addUser({
//     id: 11,
//     username: 'vikas',
//     room: 'Delhi'
// })
// console.log(getUsersInRoom('jfkjl'))