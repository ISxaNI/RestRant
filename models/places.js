const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    pic: String, 
    cuisines: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/Restaurant.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/Bar.jpg' 
}]