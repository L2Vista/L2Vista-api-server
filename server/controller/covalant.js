//import the node-fetch package
const fetch = require('node-fetch');
const queryURL = "https://api.studio.thegraph.com/query/51055/l2vistaoptimsmgoerli/v0.0.2"

/*
* Function to fetch a list of tokens from the number
* Parameter:
*     _number - Number of tokens required
*/
async function getAddressTxInfo(address){
    // URL for Covalent endpoint
    var queryURL = "https://api.covalenthq.com/v1/zora-testnet/address/0xd7a26F297590BF33440f96B93aBd6568E1ce5d58/transactions_summary/";

    var options = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': "Bearer cqt_rQrf7Ccxb3WBYybjhRKCQp8Y98gG"  // Ensure you add the actual token after "Bearer "
    },
    }

    // Async function to handle the fetch request
    async function fetchData() {
    var response = await fetch(queryURL, options);
    var queryResult = await response.json();
    console.log(queryResult);
    }

    fetchData();

}

module.exports = {

}


getAddressTxInfo()