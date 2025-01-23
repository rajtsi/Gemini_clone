const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const dotenv = require('dotenv');
dotenv.config();
const key = process.env.OPENAI_API_KEY;
const { GoogleGenerativeAI } = require("@google/generative-ai");

const response = require('express');
const errorResponse = require("../utils/errorResponse");

const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.summaryHandler = async (req, res ,next) => {

   try {

                                const text = req.body.text;
                                let prompt= `Summarize text : ${text}`;
                                const result = await model.generateContent(prompt);
                                let generatedText = result.response.text();
                                return res.json({ response: generatedText });
    

    } catch (err) {
        
        console.error("Error while processing the request:", err.message);

        // Use next() to pass the error to your error-handling middleware
        return next(err);
        
    }
};

exports.paraHandler = async (req, res ,next) => {

    try {
 
                                 const text = req.body.text;
                                 let prompt= `Generate Paragraph on : ${text}`;
                                 const result = await model.generateContent(prompt);
                                 let generatedText = result.response.text();
                                 return res.json({ response: generatedText });
     
 
     } catch (err) {
         
         console.error("Error while processing the request:", err.message);
 
         // Use next() to pass the error to your error-handling middleware
         return next(err);
         
     }
 };

 exports.chatHandler = async (req, res ,next) => {

    try {
 
                                 const text = req.body.text;
                                 let prompt= `Answer similar to Gemini ai chatting with user , use your name as 'ChatBot' and respond like a chatbot , user text is : ${text}`;
                                 const result = await model.generateContent(prompt);
                                 let generatedText = result.response.text();
                                 return res.json({ response: generatedText });
     
 
     } catch (err) {
         
         console.error("Error while processing the request:", err.message);
 
         // Use next() to pass the error to your error-handling middleware
         return next(err);
         
     }
 };
 
exports.checkLogin = async (req, res, next) => {
    try {  console.log("checkLogin");
      // Retrieve the token from cookies or headers
      const token =
        req.cookies?.refreshToken || req.headers.authorization?.split(" ")[1];
      
        console.log(token);
      // If no token is found, deny access
      if (!token) {
        return next(new errorResponse("You are not logged In ", 401));
      }
  
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
     console.log(decoded);
      // Find the user from the decoded token
      const user = await userModel.findById(decoded.id);

     
      if (!user) {
        return next(new errorResponse("You are not logged In ", 401));
      }
  
      // Attach the user to the request object for downstream use
      req.user = user;
      next();
    } catch (error) {
       return next(new errorResponse("You are not logged In ", 401));
    }
  };
  