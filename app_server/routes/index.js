const express = require('express');
const router = express.Router();
const cntrlmain = require('../controller/other');
const ctrllocations = require('../controller/location');
var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};
let searchedData = [];

/* GET home page. */
router.get('/', ctrllocations.homelist);
router.get('/fruits', ctrllocations.fruits);
router.get('/vegtables', ctrllocations.vegtables);
router.get('/pulses', ctrllocations.pulses);
router.get('/roots', ctrllocations.roots);
let searcheddata=[]
// New route for search
const rendersearch = (req,res, { searchedData }) =>{
    console.log("this is searched data",searchedData)
    res.render('searchResults', { searchedData });
}
router.get('/search', (req, res) => {
  const path = '/api/fruits';
  const searchQuery = req.query.query;

  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };

  request(requestOptions, (err, response, fruitsdata) => {

    if (searchQuery) {
      for(i=0;i<fruitsdata.length;i++){
        if(fruitsdata[i].season==req.query.query){
            searchedData=fruitsdata[i];
            console.log("this is search",searchedData);
        }
      }
    }

    rendersearch(req,res, { searchedData });
    // Replace 'searchResults' with your actual view name
  });
});






const renderfruits = (req, res, { fruitsdata, searcheddata }) => {
  res.render('fruits',{fruitsdata, searcheddata});
}
const fruits = function(req, res) {
  const path = '/api/fruits';
  const searchQuery = req.query.query;

  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };

  let searchedData = [];
  request(requestOptions, (err, response, fruitsdata) => {

    if (searchQuery) {
      // Filter the data based on the search query
      searchedData = data.filter(fruit => fruit.season.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    renderfruits(req, res, { fruitsdata, searcheddata });
  });
};



module.exports = router;
