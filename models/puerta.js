const mongoose = require('mongoose');

const puertaSchema = new mongoose.Schema({
    numero : {
        type: String,
    
    },
    puerta :{
        type: String
    },
    acceso : {
        type : String
    },
    alarma: {
        type: String
    },
    activacion:{
        type: String
    }
   
   
}, {timestamps : true})



module.exports = mongoose.model('puerta', puertaSchema);
