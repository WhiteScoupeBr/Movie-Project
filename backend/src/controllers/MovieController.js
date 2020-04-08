const crypto = require('crypto');
const connection = require('../database/connection');

module.down('movie');
module.exports = {
  async index(request, response) {
    const idUser=request.headers.authorization;
    const movies = await connection('movie').where('idUser',idUser).select('*');
  
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
        img,
        idUser,
         } = request.body;

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
        //idUser,
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