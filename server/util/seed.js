const { Locations } = require('../models/cocktailModels')

const seed = async () => {
    await Locations.bulkCreate([
        {
            lat: 32.81055,
            long: -96.810821
        },
        {
            lat: 37.7680222,
            long: -122.4670096
        },
        {
            lat: 29.4189838,
            long: -98.48351199999999
        }
    ])
    console.log('seed file sent')
}

module.exports = seed
