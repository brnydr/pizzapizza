  addPizza(pizza) {
        pizza.id = this.assignId();
        this.pizzas[pizza.id] = pizza;
    }

    removePizza(pizza) {
        if (pizza.id in this.pizzas) {
            delete this.pizzas[pizza.id];
        }
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