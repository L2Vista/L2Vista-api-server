//import the node-fetch package
const axios = require('axios');
require("dotenv").config();
const { COVALANT_KEY } = process.env;
// Async function to handle the request
async function getAddressTxInfo(address) {
    const queryURL = `https://api.covalenthq.com/v1/zora-testnet/address/${address}/transactions_summary/`;
    const options = {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${COVALANT_KEY}`  // Ensure you add the actual token after "Bearer "
        }
    }

    try {
        const response = await axios.get(queryURL, options);
        return response
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
// getAddressTxInfo("0xa40aa030A3ba4f42FDCd2B7bC33d5B03770290ea")