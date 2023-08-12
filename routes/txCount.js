var express = require('express');
const { txTotalRequestedsQuery } = require('../controller/txController');
var router = express.Router();

router.get('/', async function (req, res, next) {
  const response = {}
  try {
    let query = res.query;
    if (!query) {
      query = {
        fromchain: null,
        tochain: null,
        hash: null,
      }
    }
    const data = await txTotalRequestedsQuery(req.query);
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
