class Order {
    constructor() {
        this.pizzas = {};
        this.currentId = 0;
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
    }
}

let order = new Order();

//not adding toppings
function addPizzaToOrder() {
    let size = document.getElementById("size").value;
    let toppings = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked'); 
    for (let i = 0; i < checkboxes.length; i++) {
        toppings.push(checkboxes[i]);
    }
    let pizza = new Pizza(size, toppings);
    order.addPizza(pizza);

}

function displayPizzas() {

}

// function finalizeOrder(e) {
// e.preventDefault();
// }

window.addEventListener("load", function() {
    document.getElementById("addPizza").addEventListener("click", addPizzaToOrder());
    // document.querySelector("form").addEventListener("submit", finalizeOrder());
});
