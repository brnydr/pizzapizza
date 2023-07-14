# Describe:
`Order()`

## Test:
It should create a new order object

## Code:
`let newOrder = new Order()`

## Expected Output:
`newOrder = {pizzas:{} currentId: 0}`

*pass*

# Describe: 
'Pizza()'

## Test:
It should create a new pizza object

## Code:
`let newPizza = new Pizza()`

## Expected Output:
`newPizza = {size: "", toppings: []}`

*pass*

# Describe:
`Order.prototype.addPizza()`

## Test:
It should add a pizza object to the pizzas property of the order object

## Code:
`newOrder.addPizza(newPizza)`

## Expected Output:
`newOrder = {pizzas: {0: {size: "", toppings: []}} currentId: 0}`

*pass*

# Describe:
`Order.prototype.assignId()`

## Test:
It should assign an id to a pizza object

## Code:
`newOrder.addPizza(newPizza)`

## Expected Output:

`newOrder = {currentId: 1, pizzas: {1: {size: "", toppings: []}}}`

*pass*

# Describe:
`addPizzaToOrder()`

## Test:
It should add a pizza object to the pizzas property of the order object

## Code:
`newOrder.addPizza(newPizza)`

## Expected Output:
`newOrder = {pizzas: {1: {size: "", toppings: []}} currentId: 1}`

*pass*

