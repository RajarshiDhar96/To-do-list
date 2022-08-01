// Router Page
const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.home)
//For adding new task
router.post('/create', homeController.createTask)

//For deleting task
router.post('/deleteAll', homeController.deleteTasks)


module.exports=router;


