// const express = require('express');
// const { getClanData } = require('../controllers/controllers');


// const router = express.Router();

// // !Routers:
// router.get('/clan/:tag', getClanData);

// module.exports = router;


const express = require('express');
const { getClanData } = require('../controllers/controllers');

const router = express.Router();

// Routers:
router.get('/clan/:tag',(req, res, next) => {
  console.log(`Received request for clan: ${req.params.tag}`);
  next();
}, getClanData);

module.exports = router;
