const mongoose = require('mongoose');

const Movie = mongoose.model('Movie');

module.exports={

    async index(req,res){
        const {page =1} = req.query;
        const movies = await Movie.paginate({},{page, limit:10});
        console.log("hye");
        return res.json(movies);
    },


    async show(req,res){
        const movies = await Movie.findById(req.params.id);
        return res.json(movies);
    },

    async update(req,res){
        const movies = await Movie.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(movies);
    },

    async destroy(req,res){
        await Movie.findByIdAndRemove(req.params.id);
        
        return res.send();
    },

    async store(req,res){
        //Criar
        const movies = await Movie.create(req.body);
        
        return res.json(movies);
    }
};
