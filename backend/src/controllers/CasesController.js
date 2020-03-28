const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.params;

        const [count] = await connection('cases').count();

        const cases = await connection('cases')
          .limit(5)
          .offset((page - 1) * 5)
          .select('*');

        response.header('X-Total-Count', count['count(*)']);

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
    },

    async delete(request, response) {
        const { id } = request.params;
        const ngo_id = request.headers.authorization;

        const cases = await connection('cases')
          .where('id', id)
          .select('ngo_id')
          .first();

        if(cases.ngo_id != ngo_id) {
            return response.status(401).json({ error: 'Operation non authorized.'});  
        }

        await connection('cases').where('id', id).delete();

        return response.status(204).send();
    }
};