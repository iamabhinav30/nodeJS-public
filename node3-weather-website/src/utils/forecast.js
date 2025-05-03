const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1d3f553c028c93618ad6c15c9c81390d&query=' + longitude + ',' + latitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service !!!', undefined)
        } else if (body.error) {
            callback('unable to find the location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently '
                + body.current.temperature +
                ' degree out. It feel like ' + body.current.feelslike + ' degree out')
        }
    })
}

module.exports = forecast