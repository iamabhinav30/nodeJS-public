const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const chalk = require('chalk')

const addressInput = process.argv[2]

if (!addressInput) {
    console.log(chalk.red('Please Provide the address'))
} else {
    geocode.geocode(addressInput, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)

            console.log(forecastData)
        })

    })
}

