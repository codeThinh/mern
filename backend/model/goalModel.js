let mongoose = require('mongoose')

let goalSchema = mongoose.Schema({
    text: {
       type: String,
       required: [true, 'Please add a text value'] 
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)