const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const rootURL = "https://api.clashofclans.com/v1";

// Common function to handle API requests
const apiGetReq = async (endpoint) => {
  try {
    const response = await axios.get(`${rootURL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      // Return error response from Clash of Clans API
      return {
        status: error.response.status,
        message: error.response.data.reason || 'Unknown error occurred',
      };
    } else {
      // Return error response for network or other issues
      return {
        status: 500,
        message: 'Internal Server Error',
        error: error.message,
      };
    }
  }
};

// Controller function to get clan data
const getClanData = async (req, res) => {
  const clanTag = encodeURIComponent(`#${req.params.tag}`);
  const apiResponse = await apiGetReq(`/clans/${clanTag}`);
  return res.status(apiResponse.status).json(apiResponse);
};

module.exports = {
  getClanData,
};
