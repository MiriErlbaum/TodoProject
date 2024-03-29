require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const tasksRoutes = require('./routers/tasks');
const usersRoutes = require('./routers/users');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks',tasksRoutes);
app.use('/users',usersRoutes);

const PORT=process.env.PORT||5000;
const CONECTION_URL='mongodb+srv://miri26435:miri214877615@cluster0.vqr6zfd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>app.listen(PORT,()=>console.log(`server runing on port ${PORT}`)))
    .catch((error)=>console.log(error.message))
