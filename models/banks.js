const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        require: true
    },
    
    interest_rate: {
        type: Number,
        require: true
    },

    max_mortgage: {
        type: Number,
        require: true
    },

    advance_payment: {
        type: Number,
        require: true
    },

    mortgage_term: {
        type: Number,
        require: true
    }
})

module.exports = model('Banks', schema)