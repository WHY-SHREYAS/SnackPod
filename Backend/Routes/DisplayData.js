const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
  try {
    if (!global.food_items || !global.foodCategory) {
      return res.status(500).send("Global data not loaded yet");
    }

    res.send([global.food_items, global.foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});


router.get('/food_category', (req, res) => {
  try {
    res.send(global.foodCategory); // Send only category data
  } catch (error) {
    console.error("Error in /api/food_category:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
