const express=require('express');
const port=8000;
const app=express();

app.get('/', function(req,res)
{
    return res.send('<h1>Hello World</h1>')
})
app.set('view engine','ejs');
app.set('views','./views')
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running the server:", err);
    }
    console.log("Express server is running on the port number: ", port);
})