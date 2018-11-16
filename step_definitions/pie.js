const I = actor()

class Mixer {
  putInside(ingredient, amount) { return ingredient }

  switchOn() {}

  switchOffAfter(minutes) {}

  lookInside() { return '' }
}

const mixer = new Mixer()

Given('I put the following ingredients inside the mixer', (ingredients) => {
  // From "features/pie.feature" {"line":7,"column":5}
  I.amOnPage("http://localhost:3000")

  for (const id in ingredients.rows) {
    if (id < 1) {
      continue;
    }

    // go by row cells
    const cells = ingredients.rows[id].cells;

    // take values
    const ingredient = cells[0].value;
    const amount = cells[1].value;
        
   mixer.putInside(ingredient, amount)
  }


  I.see('alligator')
});

When('start mixing them for {int} minutes', (minutes) => {
  // From "features/pie.feature" {"line":15,"column":5}
  // throw new Error('Not implemented yet');
  // mixer.switchOn()
  // mixer.switchOffAfter(minutes)
});

Then('I obtain a {string}', (result) => {
  // From "features/pie.feature" {"line":16,"column":5}
  // throw new Error('Not implemented yet');
  // return result === mixer.lookInside()
});
