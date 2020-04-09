const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { user,password } = request.body;
    
        const session = await connection('user')
      .where('user',user)
      .where('password',password)
      .select('id')
      .first();
      
      if(!session){
        return response.status(400).json({error: 'Nenhum usuário encontrado'});
      }
      return response.json(session);
    

    
  }
}