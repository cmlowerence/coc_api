const axios = require("axios");
require("dotenv").config();

// Using RoyaleAPI Proxy
const BASE_URL = "https://cocproxy.royaleapi.dev/v1";

const fetchFromCoC = async (endpoint) => {
  try {
    // endpoint example: "/clans/%232ABC" or "/players/%239XYZ"
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${process.env.COC_API_TOKEN}`,
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // Pass the error up to the controller
    throw error;
  }
};

module.exports = { fetchFromCoC };
