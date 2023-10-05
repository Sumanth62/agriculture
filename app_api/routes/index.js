const express = require('express');
const router = express.Router();
const  fruits = require('../controllers/fruits');
// const ctrlReviews = require('../controllers/reviews');
const  vegtables = require('../controllers/vegtables');
const pulses = require('../controllers/pulses');
const roots = require('../controllers/roots');

// locations
// --------------fruits route-------------
router
  .route('/fruits')
  .post(fruits.fruitsCreate)
  .get(fruits.fruitsReadAll);

router
  .route('/fruits/:fruitsid')
  .get(fruits.fruitsReadOne)
  .put(fruits.fruitsUpdateOne)
  .delete(fruits.fruitsDeleteOne);
  module.exports = router;
// -------------- vegtabless route-------------
router
  .route('/vegtables')
  .post(vegtables.vegtablesCreate)
  .get(vegtables.vegtablesReadAll);

router
  .route('/vegtables/: vegtablesid')
  .get( vegtables.vegtablesReadOne)
  .put( vegtables.vegtablesUpdateOne)
  .delete( vegtables.vegtablesDeleteOne);
//   // --------------pests route-------------
  router
  .route('/pulses')
  .post(pulses.pulsesCreate)
  .get(pulses.pulsesReadAll)

router
  .route('/pulses/:pulsesid')
  .get(pulses.pulsesReadOne)
  .put(pulses.pulsesUpdateOne)
  .delete(pulses.pulsesDeleteOne);
// --------------roots rout-------------
  router
  .route('/roots')
  .post(roots.rootsCreate)
  .get(roots.rootsReadAll)

router
  .route('/roots/:rootsid')
  .get(roots.rootsReadOne)
  .put(roots.rootsUpdateOne)
  .delete(roots.rootsDeleteOne);

  
  module.exports = router;
//   // reviews
//   // router
//   //   .route('/locations/:locationid/reviews')
//   //   .post(ctrlReviews.reviewsCreate);
  
//   // router
//   //   .route('/locations/:locationid/reviews/:reviewid')
//   //   .get(ctrlReviews.reviewsReadOne)
//   //   .put(ctrlReviews.reviewsUpdateOne)
//   //   .delete(ctrlReviews.reviewsDeleteOne);