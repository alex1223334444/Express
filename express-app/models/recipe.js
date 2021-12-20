const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients:{
        type: String,
        required: true
    },
    time_to_prepare:{
        type: Number,
        required: true
    },
    how_to_prepare:{
        type: String,
        required: true
    }
},{timestamps: true});

const Recipe = mongoose.model('Recipe',recipeSchema);
module.exports = Recipe;