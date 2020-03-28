const express = require('express');
const crypto = require('crypto');
const routes = express.Router();
const connection = require('./database/connection');

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

 // route to list the ngos on the data bank
 routes.get('/ngos', async (request, response) => {
    const ngos = await connection.table('ngos').select('*');

    return response.json(ngos);  
});

// route to insert ngo on the data bank
routes.post('/ngos', async (request, response) => {
    
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    //connect db
    await connection('ngos').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({ id });
});

module.exports = routes;