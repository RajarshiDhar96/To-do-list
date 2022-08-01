
const Task=require('../models/home.js')

//HOME PAGE URL
module.exports.home=function(req,res)
{
    Task.find({},function(error, tasks)
    {
        if(error)
        {
            console.log("Error in fetching tasks from Database");
            return;
        }
        return res.render('home',{
            title:"TO-DO-LIST",
            taskList:tasks  
        })
    })


    
}

// FOR ADDING NEW TASK
module.exports.createTask=function(req,res)
{
   
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

        
        res.redirect("back");
    }
    
    )
}
//FOR DELETING THE TASK
module.exports.deleteTasks=function(req,res)
{
   
    
    //IF THERE IS NO TASK IN LIST
    if (Object.keys(req.body).length === 0) 
    {
        // Do something
       
        res.redirect('back')
     }
     let ids=req.body.taskId
     //IF SINGLE TASK IS GETTING DELETED
    if(typeof(ids)=="string")
    {
        Task.findByIdAndDelete(ids, function(err)
        {
            if(err)
            {
                console.log("Error in deleting(single task) from database");
                return
            }
        })

    }
    //IF MULTIPLE TASKS ARE GETTING DELETED 
    else
    {
        for(let i of ids)
        {
            Task.findByIdAndDelete(i, function(err)
            {
                if(err)
                {
                    console.log("Error in deleting(single task) from database");
                    return
                }
            }) 
        }
        
    }
    return res.redirect("back")
}