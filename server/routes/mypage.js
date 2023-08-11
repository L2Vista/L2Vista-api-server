var express = require('express');
const { getAddressTxInfo } = require('../controller/covalant');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const address = req.query.address;
  const response = {} 
  try {
    const data = await getAddressTxInfo(address);
    response.status = true;
    response.data = data;
    res.send(data);
  } catch (error) {
    console.log(error)
    response.status = false;
    response.data = error;
    res.send(response);
  }
});

module.exports = router;
