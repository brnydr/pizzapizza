//Business Logic

class Order {
    constructor() {
        this.pizzas = [];
        this.currentId = 0;
        this.totalCost = 0;
    }
    addPizza(pizza) {
        pizza.id = this.assignId();
        this.pizzas[pizza.id] = pizza;
    }

    assignId() {
        this.currentId += 1;
        return this.currentId;
    }
 }

class Pizza {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = toppings;
        this.price = 0;
    }
}

let order = new Order();

//UI Logic

function createResetButton() {
    let newDiv = document.createElement("div");
    let orderDiv = document.getElementById("orderSummary");
    let resetButton = document.createElement("button");
    newDiv.append(resetButton);
    resetButton.innerText = "Create a new order";
    resetButton.setAttribute("id", "resetButton");
    resetButton.setAttribute("type", "button");
    resetButton.setAttribute("class", "btn btn-warning")
    orderDiv.after(newDiv);
    resetButton.addEventListener("click", resetPage);
}


function determinePrice(pizza) {
    let price = 0;
    if (pizza.size === "xl") {
        price += 16;
    } else if (pizza.size === "large") {
        price += 15;
    } else if (pizza.size === "medium") {
        price += 13;
    } else if (pizza.size === "small") {
        price += 10;
    }
    pizza.toppings.forEach(function(){
        price += 1;
    });
    return price;
}

function getToppings() {
    let toppings = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked'); 
    checkboxes.forEach(function(checkbox) {
        toppings.push(checkbox.value);
    });
    return toppings;
}

function resetCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

function addPizzaToOrder() {
    let size = document.getElementById("size").value;
    let toppings = getToppings();
    let pizza = new Pizza(size, toppings);
    price = determinePrice(pizza);
    pizza.price = price;
    order.totalCost += price;
    order.addPizza(pizza);
    displayPizzas(pizza);
    size.value = "xl";
    resetCheckboxes();
}

function displayPizzas(pizza) {
    let li = document.createElement("li");
    let pizzaList = document.getElementById("pizzaList");
    let pizzaString = "";
    pizzaList.append(li);
    if (pizza.toppings.length === 0) {
        pizzaString = pizza.size + " with just cheese" + " $" + pizza.price;
    } else {
        pizzaString = pizza.size + " with " + pizza.toppings + " $" + pizza.price;
    };
    li.innerText = pizzaString;
    document.querySelector("#orderSummary").classList.remove("hidden");
}

function finalizeOrder(e) {
    e.preventDefault();
    let orderTotal = document.getElementById("orderTotal");
    let orderDiv = document.getElementById("orderDiv");
    orderDiv.classList.add("hidden");
    orderTotal.innerText = "Your total is $" + order.totalCost;
    createResetButton();
}

function resetPage() {
    location.reload();
}

window.addEventListener("load", function() {
    document.getElementById("addPizza").addEventListener("click", addPizzaToOrder);
    document.querySelector("form").addEventListener("submit", finalizeOrder);
});
