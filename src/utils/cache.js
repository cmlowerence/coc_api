const NodeCache = require("node-cache");

// STDTTL = 300 seconds (5 minutes) default cache
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

module.exports = cache;
