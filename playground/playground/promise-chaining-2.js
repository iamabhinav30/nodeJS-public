require('../../task-manager/src/db/mongoose')
const Task = require('../../task-manager/src/models/task')

// 5f1c10db28140957843be162

// Task.findByIdAndRemove('5f1c10db28140957843be162').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f1c2e880628395940ba730e').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})