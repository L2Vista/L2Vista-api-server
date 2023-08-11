//import the node-fetch package
const fetch = require('node-fetch');
const queryURL = "https://api.studio.thegraph.com/query/51055/l2vistaoptimsmgoerli/v0.0.2"

/*
* Function to fetch a list of tokens from the number
* Parameter:
*     _number - Number of tokens required
*/
async function dispatchesQuery(_first, _skip){
  console.log(_first, _skip)
    //define the query to fetch a list of ten tokens 
    const dispatchesQuery = 
    `query {
        dispatches(first: ${_first}, skip: ${_skip}, orderByField: "blockTimestamp", orderByDirection: "DESC") {
          id
          sender
          destination
          recipient
          blockNumber
          blockTimestamp
        }
        dispatchIds(first: ${_first}, skip: ${_skip},  orderByField: "blockTimestamp", orderByDirection: "DESC") {
          id
          messageId
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
        query: dispatchesQuery
      })
    }
    //get the response
    var response = await fetch(queryURL,options)
    //parsing the body text as JSON 
    var queryResult =  await response.json()
    //display the list of tokens tokens
    console.log(queryResult.data.dispatches);
    console.log(queryResult.data.dispatchIds);

    return queryResult
}

async function processIdQuery(_first, _skip){
  console.log(_first, _skip)
  //define the query to fetch a list of ten tokens 
  const processIdsQuery = 
  `query {
      processIds(first: ${_first}, skip: ${_skip}, orderByField: "blockTimestamp", orderByDirection: "DESC") {
        messageId
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
      query: processIdsQuery
    })
  }
  //get the response
  var response = await fetch(queryURL,options)
  //parsing the body text as JSON
  var queryResult =  await response.json()
  //display the list of tokens tokens
  console.log(queryResult.data.processIds);

  return queryResult
}

module.exports = {
  dispatchesQuery,
  processIdQuery
}
