var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Recipe = require('../models/recipe');
const User = require('../models/user');

const cors=require('cors');
const { append } = require('express/lib/response');
const dbURL='mongodb+srv://alexudrea:passw123@cluster0.dhclb.mongodb.net/cookbok?retryWrites=true&w=majority';//misspelled cookbook and cant edit so cookbok it is
router.use(
  cors ({
    origin: "*"
  })
);
mongoose.connect(dbURL)
.then((result) => console.log(result))
.catch((err) => console.log(err));

// GET users listing.
router.get('/', function(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<p>Hello World</p>");
  res.end();
});

router.get('/add_recipe', (req, res) => {
  const recipe = new Recipe({
      title: 'omlette 2',
      ingredients: '53 eggs',
      time_to_prepare: 0.5,
      how_to_prepare: 'just do it'
  })

  recipe.save()
  .then((result) => {res.send(result)})
  .catch((err) => {console.log(err)});
})

router.get('/add_user', (req, res) => {
  const user = new User({
      username: 'user2',
      password: 'pass2'
  })

  user.save()
  .then((result) => {res.send(result)})
  .catch((err) => {console.log(err)});
})


router.post('/add_recipe', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );   
  const recipe = new Recipe(req.body);
  recipe.save()
  .then((result) => {res.send(result)})
  .catch((err) => {console.log(err)});
})




router.get('/all_recipes', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  Recipe.find()
  .then((result) => {
    res.send(result);
    res.end();})
  .catch((err) => {console.log(err)})
})

router.get('/all_users', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  User.find()
  .then((result) => {
    res.send(result);
    res.end();})
  .catch((err) => {console.log(err)})
})


router.get('/single_recipe:_id', (req, res) =>{
  let id = req.params._id;
  Recipe.findById(id)
  .then((result) => {
    res.send(result);
    res.end();})
  .catch((err) => {console.log(err)})
})


module.exports = router;
