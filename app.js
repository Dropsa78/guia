import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("si funciona")
})
.catch((error)=>{
    console.log("todo mal", error)

})

const app = express();

app.use(cors());

app.listen(4050, () => {
    console.log("se oye tu", 4050);
});
