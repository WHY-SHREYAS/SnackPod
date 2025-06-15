const express = require('express')
const router = express.router

router.post('/foodData' , (req, res) =>{
    try {
        console.log(global.food_items, global.foodCategory)
        res.send([global.food_items])
    } catch (error) {
            console.log(error.message)
            res.send("This is an error")
    }
})


module.exports = router