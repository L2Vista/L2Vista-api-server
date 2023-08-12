var express = require('express');
const { txRequestedsQuery } = require('../controller/txController');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const response = {}
  try {
    const data = await txRequestedsQuery(req.query);
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
