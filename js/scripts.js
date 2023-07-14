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
        this.toppings = [];
    }
}