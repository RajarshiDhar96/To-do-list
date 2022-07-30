const Task=require('../models/home.js')
module.exports.home=function(req,res)
{
    return res.render('home',{
        title:"To-Do-List"
    })
}


module.exports.createTask=function(req,res)
{
    console.log("I am inside create");
    Task.create({
        name:req.body.name,
        date:req.body.date,
        category:req.body.category

    },
    function(err, newTask)
    {
        if(err)
        {
            console.log("Error in creating contact");
            return
        }

        console.log("********", newTask);
        res.redirect("back");
    }
    
    )
}