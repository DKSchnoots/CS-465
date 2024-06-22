const express = require('express'); // Express app
const router = express.Router(); // Router Logic

// Import controllers to route
const tripsController = require('../controllers/trips');

// Define Route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); // GET Method route tripList

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;