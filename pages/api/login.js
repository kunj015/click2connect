import connectDb from "../../middleware/mongoose"
import User from "../../models/User";

const handler = async (req,res)=>{
    if (req.method == 'POST') {
        let user =await User.findOne({"email":req.body.email})
        if(user){
            if(req.body.email == user.email && req.body.password == user.password){
                res.status(200).json({message:"Logged in"})
        }else{
            res.status(400).json({error:"Invalid credentials"})
        }
        }else{
            res.status(400).json({error:"User Not exist"})
        }
    }else{
        res.status(400).json({error:"Some error occured"})
    }
}

export default connectDb(handler)