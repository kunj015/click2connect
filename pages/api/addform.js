import Photographerform from "../../models/Photographerform"
import connectDb from "../../middleware/mongoose"

const handler = async (req,res)=>{
    if (req.method == 'POST') {
        let f = new Photographerform({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                experience: req.body.experience,
                portfolio: req.body.portfolio,
                city: req.body.city,
                age: req.body.age,
                phone: req.body.phone,
                speciality: req.body.speciality,
                about: req.body.about
        })

        let newForm = await Photographerform.findOne({email:req.body.email})
        if (newForm) {
            res.status(400).json({error:"You have already submitted form please wait we will reach you soon"})
        }else{
            await f.save();
            res.status(200).json({message:"Thank you for joining us we will reach you soon"})
        }
    }else{
        res.status(400).json({error:"Some error occured"})
    }
}

export default connectDb(handler)