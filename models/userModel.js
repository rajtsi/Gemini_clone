const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const JWT= require("jsonwebtoken");
const cookie=require("cookie");


// model
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        require:[true,"user name is required reqire"],
        unique:[true,'user name exists already']
    },
    email:{
        type:String,
        require:[true,"email is require"],
        unique:[true,'email exists already']
    },
    password:{
        type:String,
        require:true,
        minlength:[6,"len should be 6 minimum"]

    }



});


userSchema.pre("save", async function (next){
   if(!this.isModified('password')){ next();}
   this.password = await bcrypt.hash(this.password ,10);
   next();
});


userSchema.methods.matchPassword = async function (password) 
{
    return await bcrypt.compare(password,this.password,);
}


userSchema.methods.getSignedToken = function (res) {

  

    const accessToken = JWT.sign(
      { id: this._id },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: 10000 }
    );
  
    const refreshToken = JWT.sign(
      { id: this._id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: 10000 }
    );
  
    res.cookie("refreshToken", `${refreshToken}`, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Enable only in production
      sameSite: 'strict' // CSRF Protection
    });
  
    return { accessToken, refreshToken };
  };
  
  





const User=mongoose.model("User",userSchema);

module.exports=User;