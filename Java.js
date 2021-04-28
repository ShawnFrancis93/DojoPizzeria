function pizzaOven(crustType, sauceType, cheese, toppings)    {
    var pizza = {
        crustType: ["deep dish", "hand tossed"],
        sauceType: ["traditional", "marinara", "bbq"],
        cheeses: ["mozzerella", "feta"],
        toppings:["pepperoni","sausage","mushrooms","olives","onions","pineapple","bacon","chicken"]
    };
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeses = cheese
    pizza.toppings = toppings

    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozerella", ["pepperoni", "sausage"])
console.log(pizza1)

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)

var pizza3 = pizzaOven("deep dish", "bbq", "mozzarella", "chicken")
console.log(pizza3)

var pizza4 = pizzaOven("hand tossed", "marinara", "mozzarella", ["pineapple", "bacon"])
console.log(pizza4)

