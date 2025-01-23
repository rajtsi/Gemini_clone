const mongoose= require("mongoose");

const connectDB=async () => {
    try{
     await mongoose.connect(process.env.MONGO_URI);
     console.log(`DB connected to ${mongoose.connection.host} `);
    }catch(error){
    console.log(`MangoDB error occured of type ${error}`);
    }

    
}

module.exports =connectDB;