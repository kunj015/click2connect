import Contactform from "../../models/Contactform";
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{
    if (req.method == 'POST') {
        let f = new Contactform({
                name: req.body.name,
                email: req.body.email,
                message: req.body.message
        })
        await f.save();
        res.status(200).json({message:"Contact Form submitted"})
    }else{
        res.status(400).json({error:"Some error occured"})
    }
}

export default connectDb(handler)