var express = require('express');
const { transmittedsQuery, ccipsendRequestedsQuery } = require('../controller/ccipOp');
var router = express.Router();

/* GET users listing. */
router.get('/optimism/msgin', async function(req, res, next) {
  const response = {} 
  try {
    const data = await ccipsendRequestedsQuery(req.query.first,req.query.skip);
    response.status = true;
    response.data = data;
    res.send(response);
  } catch (error) {
    response.status = false;
    response.data = error;
    res.send(response);
  }
});

router.get('/optimism/msgout', async function(req, res, next) {
  const response = {} 
  try {
    const data = await transmittedsQuery(req.query.first,req.query.skip);
    response.status = true;
    response.data = data;
    res.send(response);
  } catch (error) {
    response.status = false;
    response.data = error;
    res.send(response);
  }
});

module.exports = router;
