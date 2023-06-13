import connectDb from "../../middleware/mongoose"
import User from "../../models/User";

const handler = async (req,res)=>{
    if (req.method == 'POST') {
        let user = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password:req.body.password
        })
        let newUser = await User.findOne({email:req.body.email})
         if(newUser){
            res.status(400).json({error:"User already Exist"})
         }else{
             await user.save();
             res.status(200).json({message:"Signed Up Successfully"})
         }
    }else{
        res.status(400).json({error:"Some error occured"})
    }
}

export default connectDb(handler)