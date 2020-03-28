const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const cases = await connection('cases').select('*');

        return response.json(cases);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ngo_id = request.headers.authorization;

        const [id] = await connection('cases').insert({
            title,
            description,
            value,
            ngo_id,
        });

        return response.json({ id });
    }
};