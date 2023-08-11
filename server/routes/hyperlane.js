var express = require('express');
const { dispatchesQuery, processIdQuery } = require('../controller/hyperlaneOp');
var router = express.Router();

/* GET users listing. */
router.get('/optimism/msgin', async function(req, res, next) {
  console.log("req >>", req.query);
  const response = {} 
  try {
    const data = await dispatchesQuery(req.query.first,req.query.skip);
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
    const data = await processIdQuery(req.query.first,req.query.skip);
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
