const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/mixer', (req, res) => {
  // output the list of the ingredients
  // ouput the content of the mixer
  // output a form needed to add an ingredient inside the mixer
  // output a form needed to run the mixer for X minutes
  const form = `
    <form method="post" action="/mixer">
      <label for="ingredient">
        Ingredient
        <input type="text" name="ingredient" />
      </label>
      <label for="amount">
        Amount
        <input type="text" name="amount" />
      </label>
      <button>Add</button>
    </form>
  `
    res.send(form);
});

app.post('/mixer', (req, res) => {
  // look for the ingredient in the post
  // console.log(Object.keys(req))
  console.log(req.body)
  // put the ingredient inside the mixer
  // forward to /
})

app.listen(3000, () => console.log('Gator app listening on port 3000!'));