const crypto = require('crypto');
const connection = require('../database/connection');

module.exports={
    async index(request, response) {
        
        const users = await connection('user').select('*');
      
        return response.json(users);
      },
    
      async create(request, response) {
        const {
            user,
            password,
             } = request.body;
    
        const id = crypto.randomBytes(2).toString('HEX');

        const verify = await connection('user')
        .where('user',user)
        .select('user')
        .first();
        
        if(!verify){
            await connection('user').insert({
            id,
            user,
            password,
            })

            return response.json({ id,user });

            
        }else{
          return response.status(400).json({ error: 'usuário já existe' });
        }

        
      },

      async delete(request,response){
        const {id}=request.params;
  
        try{
            const users = await connection('user')
            .where('id',id)
            .delete();
          console
        }catch(err){
            console.warn('Id nao encontrado');
        }
        
  
        return response.status(204).send();
    }
};