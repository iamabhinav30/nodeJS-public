require('../src/db/mongoose')
const User = require('../src/models/user')

// 5f1c0a8cd6043536c45dd480

// User.findByIdAndUpdate('5f1c0a8cd6043536c45dd480', { age: 12 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 0 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f1c0a8cd6043536c45dd480', 5).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})