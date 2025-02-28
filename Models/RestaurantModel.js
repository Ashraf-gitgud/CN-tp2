const moongoose = require('mongoose')
const RestaurantSchema = new moongoose.Schema({
    name: String,
    country: String,
    rating: Number,
    chefs: [{type: mongoose.Schema.Types.ObjectId,ref:'Chef'}],
    recettes: [{type: mongoose.Schema.Types.ObjectId,ref:'Recette'}]
})
module.exports = mongoose.model('Restaurant',RestaurantSchema)