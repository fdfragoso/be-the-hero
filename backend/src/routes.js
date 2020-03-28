const express = require('express');

const NgoController = require('./controllers/NgoController')
const routes = express.Router();

// route to list the ngos on the data bank
routes.get('/ngos', NgoController.index); 

// route to insert ngo on the data bank
routes.post('/ngos', NgoController.create); 

module.exports = routes;

/**
 * ROUTES / RESOURCES
 * 
 * HTTP METHODS
 * 
 * GET - SEARCH DATA ON BACKEND
 * POST - CREATE DATA ON BACKEND
 * PUT - INSERT DATA ON BACKEND
 * DELETE - DELETES DATA ON BACKEND
 * 
 * TYPES OF PARAMETERS
 * 
 * QUERY - SENT PARAMTERS NAMED ON THE ROUTE AFTER "?"
 * ROUTE PARAMETERS - PARAMETERS TO IDENTIFY RESOURCES
 * REQUEST BODY - REQUISITION BODY, USED TO CREATE OR UPDATE RESOURCES
 */