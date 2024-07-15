// const express = require('express');
// const { getClanData } = require('../controllers/controllers');


// const router = express.Router();

// // !Routers:
// router.get('/clan/:tag', getClanData);

// module.exports = router;


const express = require('express');
const { getClanData, getClanWarLog, getPlayerData, getClanMembers } = require('../controllers/controllers');

const router = express.Router();

// Routers:
router.get('/clan/:tag', getClanData);
router.get('/clan/:tag/warLog', getClanWarLog);
router.get(`/clan/:tag/members`, getClanMembers);
router.get(`/player/:tag`, getPlayerData)

module.exports = router;
