const express = require("express");
const router = express.Router();
const { handleRequest } = require("../controllers/proxyController");

router.get("/*", handleRequest);

module.exports = router;
