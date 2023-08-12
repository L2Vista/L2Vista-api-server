//import the node-fetch package
const axios = require('axios');
const { chianNameAndChainID } = require('../constant/chainInfo');
require("dotenv").config();
const { COVALANT_KEY } = process.env;
const options = {
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${COVALANT_KEY}`  // Ensure you add the actual token after "Bearer "
    }
}

// Async function to handle the request
async function getAddressTxInfo(address) {

    const responses = [];
    
    for(let info of chianNameAndChainID) {
        let chainName = info[0];
        let queryURL = `https://api.covalenthq.com/v1/${chainName}/address/${address}/transactions_v3/`;
        try {
            const res = {};
            const response = await axios.get(queryURL, options, { params: { "no-logs": true } });
            res.chainName = info[0];
            res.chainId = info[1];
            res.data = response.data.data;
            responses.push(res)
        } catch (error) {
            console.error("Error fetching data:", error);
            return error
        }
    }

    return responses;
}

// Async function to handle the request
async function getAddressInfo(address) {

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

    return responses;
}


// Async function to handle the request
async function getTokenApprovals(address) {
    const responses = [];
    
    for(let info of chianNameAndChainID) {
        let chainName = info[0];
        let queryURL = `https://api.covalenthq.com/v1/${chainName}/approvals/${address}/`;
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
    return responses;
}


async function getBalance(address,bool) {
    const responses = [];
    
    for(let info of chianNameAndChainID) {
        let chainName = info[0];
        let queryURL = `https://api.covalenthq.com/v1/${chainName}/address/${address}/balances_v2/`;
        try {
            const res = {};
            const response = await axios.get(queryURL, options, { params: { "nft": bool } });
            res.chainName = info[0];
            res.chainId = info[1];
            res.data = response.data.data;
            responses.push(res)
        } catch (error) {
            console.error("Error fetching data:", error);
            return error
        }
    }
    return responses;
}

async function getPortfolio(address) {
    const responses = [];
    
    for(let info of chianNameAndChainID) {
        let chainName = info[0];
        let queryURL = `https://api.covalenthq.com/v1/${chainName}/address/${address}/portfolio_v2/`;
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
    return responses;
}


module.exports = {
    getAddressInfo,
    getAddressTxInfo,
    getTokenApprovals,
    getBalance,
    getPortfolio
}

