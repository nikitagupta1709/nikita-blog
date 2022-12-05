import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

let mongo_url = process.env.MONGO_URL;
const connection = async()=>{
    try {
        mongoose.connect(mongo_url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connection established")
    } catch (error) {
        console.log(error)
    }
}

app.use("/", (req, res)=>{
    console.log("HEY THIS IS ME!!")
})

app.listen(3000, ()=>{
    try {
        connection();
        console.log("Server Listening on port 3000");
    } catch (error) {
        console.log(error)
    }
    
})