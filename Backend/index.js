const  express= require("express");
require("dotenv").config();
const mongoose = require('mongoose');

const cors= require('cors');
const routes=require('./Routes/BigScreenRoutes');
const app=express();

//middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/BigScreen', routes);








const connectAndlisten=async()=>{
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(4000,()=>{
        console.log("Connected to DB and Listeninng");
    })
}
connectAndlisten();

  