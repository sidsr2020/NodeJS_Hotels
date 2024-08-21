const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');
// POST Method to add a menu item
router.post('/',async (req,res)=>{
    try{
        const data=req.body;// Assuming the request body contains the menu item data
        const newMenu=new MenuItem(data);
        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
// GET method to get the menu item
router.get('/',async (req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

router.get('/:taste',async (req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='Sweet' || taste=='Spicy' || taste=='Sour'){
            const response=await MenuItem.find({taste:taste});
            console.log('response fetched');
            res.status(200).json(response);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
// comment added for testing purposes
module.exports=router;
