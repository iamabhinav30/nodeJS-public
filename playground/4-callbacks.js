const doWorkCallback = (callBackFunction) => {
    setTimeout(() => {
        // callBackFunction('THis is error', null)
        callBackFunction('undefined, [1,12,"Abhinav"]')
    }, 2000);
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})

















//  setTimeout(() => {
//     console.log('2 sec are up')
// }, 2000)

// const names = ['Abhinav', 'Singh', 'Yadav']
// const shortNames = names.filter((name) => {
//     return name.length <= 5
// })
// console.log(shortNames)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }
// geocode('Philadelphia', (data) => {
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
// const add = (num1, num2, sum) => {
//     setTimeout(() => {
//         const data = num1 + num2
//         sum(data)
//     }, 2000);
// }
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })




















