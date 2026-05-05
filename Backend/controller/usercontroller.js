const User=require("../models/usermodel")
exports.registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const newUser=new User({name,email,password})
        await newUser.save()
        res.status(201).json({
        message:"User registered successfully"
        })
    } catch (error) {
        res.status(400).json({
            message:"Error registering user",
            errorFF
        })
    }
}
exports.loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message:"User not found"
            })
        }

        if(user.password!==password){
            return res.status(400).json({
                message:"Invalid password"
            })
        }


        res.status(200).json({
        message:"User logged in successfully",
        name: user.name
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error logging in user",
            error
        })
    }
}