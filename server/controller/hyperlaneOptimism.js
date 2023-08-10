//import from the generated directory
const graphClient =  require('../public/graphql/.graphclient')

const dispatchesQuery = 
`query {
    dispatches(first: 5) {
      id
      sender
      destination
      recipient
    }
  }
`

const dispatchIdsQuery =
`
query {
  dispatchIds(first: 5) {
    id
    messageId
    blockNumber
    blockTimestamp
  }
}
`

async function getQueryData() {
  const dispatchesResult = await graphClient.execute(dispatchesQuery, {})
  console.log((dispatchesResult["data"]["dispatches"]))

  const dispatchIdsResult = await graphClient.execute(dispatchIdsQuery, {})
  console.log((dispatchIdsResult["data"]["dispatchIds"]))
}

getQueryData()

module.exports = {
    getQueryData
}