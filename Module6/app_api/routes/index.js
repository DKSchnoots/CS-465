const express = require('express'); // Express app
const router = express.Router(); // Router Logic

// Import controllers to route
const tripsController = require('../controllers/trips');

// Define Route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method route tripList
    .post(tripsController.tripsAddTrip); // POST Method route tripAddTrip

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;