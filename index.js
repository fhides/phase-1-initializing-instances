// Write your code here
class Breakfast{
    constructor(food,drink){
        this.food = food;
        this.drink = drink;
    }

}
class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }

}
class Dinner{
    #dessert;
    constructor(salad,soup,entree,dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}
let breakfast = new Breakfast("bread","tea");
let lunch = new Lunch("lentil vegetable soup","fish","juice");
let dinner = new Dinner("vegetable and avocado salad","beef wellington","juice");

console.log(breakfast);
console.log(lunch);
console.log(dinner);
