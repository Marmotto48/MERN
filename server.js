const express = require("express");
const app = express();
require ('dotenv').config({ path:'./config/.env' });
const PORT = process.env.PORT;
const connectDB= require('./config/connectDB')
//middleware routing body parse
app.use(express.json())
//connect database
connectDB();

//routes
app.use("/contact", require("./routes/contacts"));

app.listen(PORT, (err)=>{
    err?console.error(err): console.log(`running on ${PORT}`)
})