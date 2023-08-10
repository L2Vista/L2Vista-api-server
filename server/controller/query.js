//import the node-fetch package
const fetch = require('node-fetch');
/*
* Function to fetch a list of tokens from the number
* Parameter:
*     _number - Number of tokens required
*/
async function dispatchesQuery(_number){
    //set the query url
    const queryURL = "https://api.studio.thegraph.com/query/50673/hyperlaneoptimism/v0.0.1"
    //define the query to fetch a list of ten tokens 
    const dispatchesQuery = 
    `query {
        dispatches(first: ${_number}) {
          id
          sender
          destination
          recipient
        }
      }
    `
    //set the request options                    
    var options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: dispatchesQuery
      })
    }
    //get the response
    var response = await fetch(queryURL,options)
    //parsing the body text as JSON 
    var queryResult =  await response.json()
    //display the list of tokens tokens
    console.log(queryResult);
    return queryResult
}

module.exports = {
  dispatchesQuery
}