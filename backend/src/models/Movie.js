const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    idIMDB:{
        type:String,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    url:{
        type:String,
    },
    genre:{
        type:String,
    },
    date:{
        type:String,
    },
    actors:{
        type:String,
    },
    img:{
        type:String,
    }
});

mongoose.model('Movie',MovieSchema);