const mongoose = require('mongoose')

const {Schema} = mongoose

const InsertedSchema = new Schema({
    Iarray:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model('InsertedSchema',InsertedSchema)