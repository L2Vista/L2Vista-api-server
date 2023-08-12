//import the node-fetch package
const axios = require('axios');
const { chianNameAndChainID } = require('../constant/chainInfo');
require("dotenv").config();
const { COVALANT_KEY } = process.env;

// Async function to handle the request
async function getAddressTxInfo(address) {
    const options = {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${COVALANT_KEY}`  // Ensure you add the actual token after "Bearer "
        }
    }

    const responses = [];
    
    for(let info of chianNameAndChainID) {
        let chainName = info[0];
        let queryURL = `https://api.covalenthq.com/v1/${chainName}/address/${address}/transactions_summary/`;
        try {
            const res = {};
            const response = await axios.get(queryURL, options);
            res.chainName = info[0];
            res.chainId = info[1];
            res.data = response.data.data;
            responses.push(res)
        } catch (error) {
            console.error("Error fetching data:", error);
            return error
        }
    }

    console.log("response >>", responses);
    return responses;
}

// Async function to handle the request
async function test() {
    let queryURL = "https://api.covalenthq.com/v1/eth-goerli/address/0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5/transactions_v2/";
    const options = {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${COVALANT_KEY}`  // Ensure you add the actual token after "Bearer "
        }
    }
    const response = await axios.get(queryURL, options);
    console.log("response >>", response.data.data);
}

// Async function to handle the request
async function getPaginationTransactions(address,page) {
    const options = {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${COVALANT_KEY}`  // Ensure you add the actual token after "Bearer "
        }
    }
    const responses = [];
    
    for(let info of chianNameAndChainID) {
        let chainName = info[0];
        let queryURL = `https://api.covalenthq.com/v1/${chainName}/address/${address}/transactions_v3/page/${page}/?", {method: 'GET', headers: headers}`;
        try {
            const res = {};
            const response = await axios.get(queryURL, options);
            res.chainName = info[0];
            res.chainId = info[1];
            res.data = response.data.data;
            responses.push(res)
        } catch (error) {
            console.error("Error fetching data:", error);
            return error
        }
    }

    console.log("response >>", responses);
    return responses;
}

module.exports = {
    getAddressTxInfo,
    getPaginationTransactions
}

test()