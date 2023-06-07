const mongoose = require('mongoose');

const ContactformSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    }
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model('Contactform',ContactformSchema);