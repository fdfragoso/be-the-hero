const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ngo_id = request.headers.authorization;

        const cases = await connection('cases')
          .where('ngo_id', ngo_id)
          .select('*');

        return response.json(cases);
    }
}