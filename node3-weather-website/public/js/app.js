console.log('Client side javascript file loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = ''
    messageTwo.textContent = 'Loading.....'

    const api = '/weather?address=' + location

    fetch(api).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = 'Location is : ' + data.location
                messageTwo.textContent = 'And forcast is : ' + data.forcast
                // console.log('Location is :' + data.location + '. And forcast is : ' + data.forcast)
            }
        })
    })
})