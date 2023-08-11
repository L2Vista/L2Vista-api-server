//import the node-fetch package
const fetch = require('node-fetch');
const queryURL = "https://api.studio.thegraph.com/query/51055/l2vistaoptimsmgoerli/v0.0.1"

/*
* Function to fetch a list of tokens from the number
* Parameter:
*     _number - Number of tokens required
*/
async function transmittedsQuery(_first, _skip){
  console.log(_first, _skip)
    //define the query to fetch a list of ten tokens 
    const transmittedsQuery = 
    `query {
        transmitteds(first: ${_first}, skip: ${_skip}, orderByField: "blockTimestamp", orderByDirection: "DESC") {
          id
          configDigest
          epoch
          blockNumber
          blockTimestamp
        }
      }
    `
    //set the request options                    
    var options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: transmittedsQuery
      })
    }
    //get the response
    var response = await fetch(queryURL,options)
    //parsing the body text as JSON 
    var queryResult =  await response.json()
    //display the list of tokens tokens
    return queryResult
}

async function ccipsendRequestedsQuery(_first, _skip){
  console.log(_first, _skip)
  //define the query to fetch a list of ten tokens 
  const ccipsendRequestedsQuery = 
  `query {
    ccipsendRequesteds(first: ${_first}, skip: ${_skip}, orderByField: "blockTimestamp", orderByDirection: "DESC") {
        id
        sourceChainSelector
        sequenceNumber
        feeTokenAmount
        blockNumber
        blockTimestamp
      }
    }
  `
  //set the request options                  
  var options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: ccipsendRequestedsQuery
    })
  }
  //get the response
  var response = await fetch(queryURL,options)
  //parsing the body text as JSON
  var queryResult =  await response.json()
  //display the list of tokens tokens
  return queryResult
}

module.exports = {
  transmittedsQuery,
  ccipsendRequestedsQuery
}
