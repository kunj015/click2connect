


import mongoose from "mongoose";

const connectDb = handler  => async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect(`mongodb+srv://kunjsingh015:kt015015@cluster0.x9d9nvf.mongodb.net/?retryWrites=true&w=majority 
    `,{useNewUrlParser:true,useUnifiedTopology:true})
    return handler(req,res);
}

export default connectDb;