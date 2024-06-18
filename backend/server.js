const express = require('express');
const dotenv=require('dotenv');
const usersRoutes=require('./routes/usersRoutes');
const bookRouter=require('./routes/booksRoutes')
const error=require('./middlewares/errorMiddlewareHandler')

//the above line is use to extract the links in .env folder
dotenv.config();

//the above line is use to connect db this () is the javascript shortcut method to call function 
require('./config/dbConnect')();
const app=express();


//Passing body data
app.use(express.json());

//Routes 

//Users
app.use('/api/users',usersRoutes);

//Books
app.use('/api/books',bookRouter)
//Error middleware
app.use(error.errorMiddlewareHandler);

//Server
const PORT=process.env.PORT || 5000;
// if we deploy our project in any domain than it use that port no. using env(environment) else use 5000 port no.

app.listen(5000,()=>{
    console.log(`Server is up and running ${PORT}`)
})


// don
// PkAPvt18yAYG5MqN
// mongodb+srv://don:<password>@cluster0.forw98y.mongodb.net/