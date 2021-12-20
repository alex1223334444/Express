var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recipe = require('../models/recipe');

const dbURL='mongodb+srv://alexudrea:passw123@cluster0.dhclb.mongodb.net/cookbok?retryWrites=true&w=majority';//misspelled cookbook and cant edit so cookbok it is

mongoose.connect(dbURL)
.then((result) => console.log(result))
.catch((err) => console.log(err));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add_recipe', (req, res) => {
  const recipe = new Recipe({
      title: 'omlette',
      ingredients: '5 eggs',
      time_to_prepare: 0.5,
      how_to_prepare: 'just do it'
  })

  recipe.save()
  .then((result) => {res.send(result)})
  .catch((err) => {console.log(err)});
})

router.get('/all_recipes', (req, res) => {
  Recipe.find()
  .then((result) => {res.send(result);})
  .catch((err) => {console.log(err)})
})


module.exports = router;
