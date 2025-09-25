import cors from "cors"
import "dotenv/config";
import express from "express"

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";

// const express = require("express");

const app = express()
const PORT = process.env.PORT



// middleware
app.use(cors({
	origin : "http://localhost:5173",
}));

app.use(express.json())
app.use(rateLimiter)


// app.use((req , res , next) => {
// 	console.log("MiddleWare Alert !! ")
// 	next()
// })

app.use("/api/notes" , notesRoutes)

// In production , connect db first then start the server 
connectDB().then( () => {

	app.listen(PORT , () => {
	console.log("Port started at PORT : 5001");
	});

})




