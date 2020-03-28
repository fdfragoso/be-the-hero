const express = require('express');

const routes = express.Router();

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


routes.post('/users', (request, response) => {
    const body = request.body;
    
    console.log(body);

    return response.json({
        event: 'Omnistack week 11',
        name: 'Felipe Dacal Fragoso'
    });
});

module.exports = routes;