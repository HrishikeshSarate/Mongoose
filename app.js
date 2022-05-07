const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema =  new mongoose.Schema({
    name: {
       type: String,
       required: [true,"please check your data entry,no name specified"]
    },
        rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String  
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "keeps doctor away!"
});


//fruit.save();
const personSchema = new mongoose.Schema({

    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great Fruit."
});

pineapple.save();

const person = new Person({
    name: "amy",
    age: 12,
    favouriteFruit: pineapple
});

person.save()

const Kiwi = new Fruit({
    name: "Kiwi",
    rating: 3,
    review: "the best fruit"
});
const Banana = new Fruit({
    name: "Banana",
    rating: 6,
    review: "awesome"
});
const Mango = new Fruit({
    name: "Mango",
    rating: 3,
    review: "the King"
});

// Fruit.insertMany([Kiwi,Mango,Banana],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully logged ");
//     }
// });

// fruit.deleteOne({name:"Apple"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted the document");
//     }
// })





Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
       mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});