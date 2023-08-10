//import from the generated directory
const graphClient =  require('./.graphclient')

const dispatchesQuery = 
`query {
    dispatches(first: 1) {
      id
      sender
      destination
      recipient
    }
  }
`

async function getQueryData() {
  const dispatchesResult = await graphClient.execute(dispatchesQuery, {})
  console.log((dispatchesResult["data"]["dispatches"]))
}

getQueryData()