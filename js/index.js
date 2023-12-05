// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((sau) => {
  if (state.whiteSauce) {
    sau.style.visibility = 'hidden';
  } else {
    sau.style.visibility = 'visible';
  }
});
  
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((cru) => {
    if (state.glutenFreeCrust) {
      cru.style.visibility = 'hidden';
    } else {
      cru.style.visibility = 'visible';
    }
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  if (!state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }
  if (!state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  }
  if (!state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let price = 10;
  if (state.pepperoni) {
    document.querySelector('.price>ul>li:nth-child(1)').style.display = 'block';
    price++;
  } else {
    document.querySelector('.price>ul>li:nth-child(1)').style.display = 'none';
  }
  if (state.mushrooms) {
    document.querySelector('.price>ul>li:nth-child(2)').style.display = 'block';
    price++;
  } else {
    document.querySelector('.price>ul>li:nth-child(2)').style.display = 'none';
  }
  if (state.greenPeppers) {
    document.querySelector('.price>ul>li:nth-child(3)').style.display = 'block';
    price++;
  } else {
    document.querySelector('.price>ul>li:nth-child(3)').style.display = 'none';
  }
  if (state.whiteSauce) {
    document.querySelector('.price>ul>li:nth-child(4)').style.display = 'block';
    price += 3;
  } else {
    document.querySelector('.price>ul>li:nth-child(4)').style.display = 'none';
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.price>ul>li:nth-child(5)').style.display = 'block';
    price += 5;
  } else {
    document.querySelector('.price>ul>li:nth-child(5)').style.display = 'none';
  }
  document.querySelector('aside>strong').innerHTML = `$${price}`;
  // console.log(document.querySelector('aside>strong').innerHTML);
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});