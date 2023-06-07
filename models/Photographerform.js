const mongoose = require('mongoose');

const PhotographerFormSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    experience:{
        type:String
    },
    portfolio:{
        type:String
    },
    city:{
        type:String
    },
    age:{
        type:String
    },
    phone:{
        type:String
    },
    speciality:{
        type:String
    },
    about:{
        type:String
    }
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model('Photographerform',PhotographerFormSchema);