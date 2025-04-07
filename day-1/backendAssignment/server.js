const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const todoRoutes = require("./routes/todo.routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;




app.listen(PORT,async()=>{
   await connectDB()
    console.log(`server running on ${PORT}`);
    
})