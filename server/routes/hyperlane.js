var express = require('express');
const { dispatchesQuery } = require('../controller/query');
var router = express.Router();

/* GET users listing. */
router.get('/optimism', async function(req, res, next) {
  const response = {} 
  try {
    const data = await dispatchesQuery(3);
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
