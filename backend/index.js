const express = require('express');

const app = express()

app.get('/', (request, response) => {
    return response.json({
        event: "Omnistack week 11",
    });
});

app.listen(3333);