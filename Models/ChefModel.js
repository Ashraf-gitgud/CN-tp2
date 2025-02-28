const moongoose = require('mongoose')
const chefSchema = new moongoose.Schema({
    name: String,
    nationality: String,
    age: Number
})
module.exports = mongoose.model('Chef',chefSchema)