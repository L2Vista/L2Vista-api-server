var express = require('express');
const { getBalance } = require('../../controller/covalant');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const address = req.query.address;
  const nft = req.query.nft;

  const response = {} 
  try {
    const data = await getBalance(address,nft);
    response.status = true;
    response.data = data;
    res.send(response);
  } catch (error) {
    console.log(error)
    response.status = false;
    response.data = error;
    res.send(response);
  }
});

module.exports = router;
