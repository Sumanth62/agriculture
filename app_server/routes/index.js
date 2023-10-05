const express = require('express');
const router = express.Router();
const cntrlmain = require('../controller/other');
const ctrllocations = require('../controller/location');
/* GET home page. */
router.get('/', ctrllocations.homelist);
router.get('/fruits', ctrllocations.fruits);
router.get('/vegtables', ctrllocations.vegtables);
router.get('/pulses', ctrllocations.pulses);
router.get('/roots', ctrllocations.roots);
module.exports = router;
