const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const movies = await connection('movie').select('*');
  
    return response.json(movies);
  },

  async create(request, response) {
    const {
        title,
        description,
        genre,
        date,
        actors,
        url,
        img, } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('movie').insert({
        id,
        title,
        description,
        genre,
        date,
        actors,
        url,
        img,
    })

    return response.json({ id });
  },

  async delete(request,response){
      const {id}=request.params;

      try{
          const movies = await connection('movie')
          .where('id',id)
          .delete();
        console
      }catch(err){
          console.warn('Id nao encontrado');
      }
      

      return response.status(204).send();
  }
};