const crypto = require('crypto');
const connection = require('../database/connection');

/** Exports MovieAux Table 
Index: Fetch  movies based on the user Id, provide as parameter by the frontEnd
*/
module.exports = {
  async index(request, response) { 
    const idUser=request.headers.authorization;
    const movies = await connection('movieaux')
    .where('idUser',idUser)
    .select('*');
  
    return response.json(movies);
  },

  async update(request,response){
    const {id}=request.params;
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

      try{
          const movies = await connection('movieaux')
          .where('id',id)
          .update({
            id,
            title,
            description,
            genre,
            date,
            actors,
            url,
            img,
            idUser,
          });
      }catch(err){
          console.warn('Id nao encontrado');
      }
      

      return response.status(204).send();
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
    
    await connection('movieaux').insert({
        id,
        title,
        description,
        genre,
        date,
        actors,
        url,
        img,
        idUser,
    })

    return response.json({ id });
  },

  async delete(request,response){
      const {id}=request.params;

      try{
          const movies = await connection('movieaux')
          .where('id',id)
          .delete();
      }catch(err){
          console.warn('Id nao encontrado');
      }
      

      return response.status(204).send();
  }
};