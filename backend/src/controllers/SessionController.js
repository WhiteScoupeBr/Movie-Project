const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { user,password } = request.body;
    try{
        const session = await connection('user')
      .where('user',user)
      .where('password',password)
      .select('id')
      .first();
      
      return response.json(session);
    }catch(err){
        return response.status(400).json({ error: 'Nenhum usuário encontrado' });
    }

    
  }
}