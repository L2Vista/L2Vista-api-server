var express = require('express');
const { getPortfolio } = require('../../controller/covalant');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const address = req.query.address;
  const response = {} 
  try {
    const data = await getPortfolio(address);
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
