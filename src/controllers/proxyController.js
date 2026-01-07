const cache = require("../utils/cache");
const { fetchFromCoC } = require("../services/cocService");

const handleRequest = async (req, res) => {
  try {
    // 1. Construct the API path from the URL
    // If user hits: /api/clans/%23TAG -> req.path is /clans/%23TAG
    // We treat the part AFTER /api as the CoC endpoint
    const endpoint = req.url; 
    const { refresh } = req.query; // ?refresh=true

    // 2. Create a unique cache key (e.g., "clans/%23TAG")
    const cacheKey = endpoint;

    // 3. Check Cache (unless refreshing)
    if (cache.has(cacheKey) && refresh !== "true") {
      console.log(`[CACHE] Serving: ${endpoint}`);
      return res.json({
        cached: true,
        data: cache.get(cacheKey)
      });
    }

    // 4. Fetch from API
    console.log(`[API] Fetching: ${endpoint}`);
    const data = await fetchFromCoC(endpoint);

    // 5. Save to Cache
    cache.set(cacheKey, data);

    return res.json({
      cached: false,
      data: data
    });

  } catch (error) {
    console.error(`Error fetching ${req.url}:`, error.message);
    
    if (error.response) {
      // Forward the exact error from Supercell (404, 403, 503)
      return res.status(error.response.status).json(error.response.data);
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { handleRequest };
