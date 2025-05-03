const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWJoaW5hdi1jZ2kiLCJhIjoiY2s5b2t1b21hMDFuMTNnbWU3aHYybzFzaCJ9.lbfQDyPrtM1eCH-qiFpQaA&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find Location, Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode