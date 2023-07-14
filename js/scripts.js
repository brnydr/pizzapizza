class Order {
    constructor() {
        this.pizzas = {};
        this.currentId = 0;
    }

}

class Pizza {
    constructor(size, toppings) {
        this.size = size;
        this.toppings = [];
    }
}