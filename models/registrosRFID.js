const mongoose = require('mongoose');

const registroRFIDSchema = new mongoose.Schema({
    rfidnumber : {
        type: String,
        required: true
    }
   
   
}, {timestamps : true})



module.exports = mongoose.model('registroRFID', registroRFIDSchema);
