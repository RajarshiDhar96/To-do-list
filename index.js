const express=require('express');
const port=8000;
//used for firing up the express
const app=express();
let alert = require('alert'); 
// used to fecth the data in key value format
app.use(express.urlencoded({ extended: true }));

app.use(express.static('assets'));


//Routes
app.use('/',require('./routes'))

//Setting View Engine
app.set('view engine','ejs');
//Setting View Directory
app.set('views','./views')
//include the database configuration when the server is firing up
const db=require('./config/mongoose')
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running the server:", err);
    }
    console.log("Express server is running on the port number: ", port);
})