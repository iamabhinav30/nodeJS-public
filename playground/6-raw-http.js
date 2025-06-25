const http = require('http')
url = 'http://api.weatherstack.com/current?access_key=1d3f553c028c93618ad6c15c9c81390d&query=45,-75&units=f'

const request = http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('Error', error)
})
request.end()