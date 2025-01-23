const errorHandler = require("../middleware//errormiddleware");
const userModel = require("../models/userModel");
const errorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");

const dotenv = require('dotenv');
dotenv.config();
// JWT TOKEN
exports.sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);
  res.status(statusCode).json({
    success: true,
    token,
  });
};

//REGISTER
exports.registerContoller = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    //exisitng user
    const exisitingEmail = await userModel.findOne({ email });
    if (exisitingEmail) {
      return next(new errorResponse("Email is already register", 500));
    }
    const user = await userModel.create({ username, email, password });
    //this.sendToken(user, 201, res);
    res.status(201).json({
      success: true,
      message: "user created",
    });
    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//LOGIN
exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return next(new errorResponse("Please provide email or password"));
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new errorResponse("Invalid Creditial", 401));
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(new errorResponse("Invalid Creditial", 401));
    }
    //res
    this.sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//LOGOUT
exports.logoutController = async (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "Logout Succesfully",
  });
};


exports.checkLogin = async (req, res, next) => {
  try {  
    
     console.log("checkLogin");
    // Retrieve the token from cookies or headers
    const token =
      req.cookies?.refreshToken || req.headers.authorization?.split(" ")[1];
    
      console.log(token);
    // If no token is found, deny access
    if (!token) {
      return res.status(200).json({"success":false});
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
   console.log(decoded);
    // Find the user from the decoded token
    const user = await userModel.findById(decoded.id);

   
    if (!user) {
     return res.status(200).json({"success":false});
    }

    // Attach the user to the request object for downstream use
    req.user = user;
    user.password=undefined;
    return res.status(200).json({"user":user,"success":true});

  } catch (error) {
     return res.status(401).json({"success":false});
  }
};

