const express = require('express')
const thingRouter = express.Router();


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

thingRouter.route("/")
.get((req, res, next) => {

    const requestedThing = req.query.type
    if(requestedThing){
        const foundThing = inventoryItems.filter(thing => thing.type === requestedThing)
        res.send(foundThing)
    }else if(!requestedThing){

    res.send(inventoryItems)
    }
})
thingRouter.route("/price")
.get((req, res, next) => {
    if (req.query.price < 500){
        const cheapItems = inventoryItems.filter( item => item.price < 500)
        res.send(cheapItems)
    } else if (req.query.price > 500 && req.query.price < 1000){
        const notCheapItems = inventoryItems.filter(item => item.price > 500 && item.price < 1000)
        req.send(notCheapItems)
    }else if (req.query.price > 1001){
        const expensiveItems = inventoryItems.filter( item => item.price > 1001)
        res.send(expensiveItems)
    }
})



module.exports = thingRouter