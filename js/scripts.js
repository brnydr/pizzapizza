class Order {
    constructor() {
        this.pizzas = [];
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
        this.price = 0;
    }
}

let order = new Order();

function getToppings() {
    let toppings = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked'); 
    checkboxes.forEach(function(checkbox) {
        toppings.push(checkbox.value);
    });
    return toppings;
}
//not adding toppings
function addPizzaToOrder() {
    
    let size = document.getElementById("size").value;
    let toppings = getToppings();
    let pizza = new Pizza(size, toppings);
    order.addPizza(pizza);
    displayPizzas(pizza)
}



function displayPizzas(pizza) {
    let li = document.createElement("li");
    let pizzaList = document.getElementById("pizzaList");
    pizzaList.append(li);
    li.innerText
    let pizzaString = pizza.size + " with " + pizza.toppings;
    li.innerText = pizzaString;
    document.querySelector("#orderSummary").classList.remove("hidden");
}

// function finalizeOrder(e) {
// e.preventDefault();
// }

window.addEventListener("load", function() {
    document.getElementById("addPizza").addEventListener("click", addPizzaToOrder);
    // document.querySelector("form").addEventListener("submit", finalizeOrder());
});
