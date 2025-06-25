require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f1c0a8cd6043536c45dd480

User.findByIdAndUpdate('5f1c0a8cd6043536c45dd480', { age: 16 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})