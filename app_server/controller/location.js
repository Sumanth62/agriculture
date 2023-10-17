var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
const homelist = (req, res) => {
    res.render('index', { title: "Agrofests" });

};



// -------------------------------fruits page--------------------------



let searcheddata=[]
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






// const fruits = async (req, res) => {
//     body=[];
//   const path = '/api/fruits';
//   const requestOptions = {
//     url: `${apiOptions.server}${path}`,
//     method: 'GET',
//     json: {},
    
//   };
//   await request(
//     requestOptions,
//     (err, res,body) => {
//       if (err) {
//         console.error('Error:', err);
//         // Handle the error, e.g., display an error message on the front end
//         return;
//       }
  
      
//         renderfruits(req,res,body);
      
//     },
    
//   );
// };
// -------------------------------pulses page--------------------------
// const renderpulsesPage = (req, res, pulsesdata)=>{
//   res.render('pulses',{pulsesdata});
// }
// const pulses = async (req, res) => {
//   body=[];
// const path = '/api/pulses';
// const requestOptions = {
//   url: `${apiOptions.server}${path}`,
//   method: 'GET',
//   json: {},
  
// };
// await request(
//   requestOptions,
//   (err, {statusCode}, body) => {
//     if (err) {
//       console.error('Error:', err);
//       // Handle the error, e.g., display an error message on the front end
//       return;
//     }

    
//     renderpulsesPage(req,res,body);
    
//   },
  
// );
// };


const renderpulsesPage = (req, res, pulsesdata) => {
  console.log("retrived data:from server  "+pulsesdata[0].image);
  res.render('pulses',{pulsesdata});
}
const pulses = function(req, res){
  const path = '/api/pulses';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    
  };
  request(
    requestOptions,
    (err, response, body) => {
      let data = body;
     
      renderpulsesPage(req, res, data);
    }
  );
};
// -------------------------------vegtables page--------------------------
const rendervegtables = (req, res, vegtablesdata) => {
  console.log("retrived data:from server  "+ vegtablesdata[0].name);
  res.render('vegtables',{vegtablesdata});
}
const vegtables = function(req, res){
  const path = '/api/vegtables';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    
  };
  request(
    requestOptions,
    (err, response, body) => {
      let data = body;
     
      rendervegtables(req, res, data);
    }
  );
};

// -------------------------------roots page--------------------------
const renderrootsPage = (req, res, rootsdata) => {
  res.render('roots',{rootsdata});
}
const roots = async (req, res) => {
  body=[];
const path = '/api/roots';
const requestOptions = {
  url: `${apiOptions.server}${path}`,
  method: 'GET',
  json: {},
  
};
await request(
  requestOptions,
  (err, {statusCode}, body) => {
    if (err) {
      console.error('Error:', err);
      // Handle the error, e.g., display an error message on the front end
      return;
    }
    renderrootsPage(req,res,body);
  },
  
);
};
module.exports = {
    homelist,
    fruits,
    pulses,
    vegtables,
    roots,
};