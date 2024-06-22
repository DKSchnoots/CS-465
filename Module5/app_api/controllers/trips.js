const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// Get: /trips - list all the trips
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // no filter, return all
        .exec();
        console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } 
    else 
    { // Return resulting trip list
        return res
                .status(200)
                .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const a = await Model
        .find({'code' : req.params.tripCode }) // no filter, return all
        .exec();
        console.log(a);

    if(!a)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } 
    else 
    { // Return resulting trip list
        return res
                .status(200)
                .json(a);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};