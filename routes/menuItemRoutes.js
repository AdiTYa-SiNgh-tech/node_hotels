const express = require('express');
const router = express.Router();
const menuItem = require('./../models/menuItem')


router.post('/' , async(req , res)=>{
  try{
    const data = req.body;

    const newItem = new menuItem(data);

    const response = await newItem.save();
    console.log('new menu item saved');
    res.status(200).json(response)

  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal storage errror ' })
  }
})


router.get('/' , async (req , res)=>{
  try{
    const data = await menuItem.find();
    console.log('data fetched successfully');
    res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({error :'Internal storage errror' })
  }
})

router.get('/:recipytype' ,async(req,res)=>{
  try{
    const recipytype = req.params.recipytype;
    if(recipytype == 'sweet' || recipytype == 'spicy' ||recipytype == 'sour'){
      const response = await menuItem.find({taste : recipytype});
      console.log('response fetched');
      res.status(200).json(response);
    }
    else{
      res.status(400).json({error : 'Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal storage errror' });
  }
})
router.put('/:id' , async(req , res) =>{
  try{
    const menuId = req.params.id;
    const data = req.body
    const response = await menuItem.findByIdAndUpdate(menuId,data,{
      new : true,
      runValidators: true
    })
    if(!response){
      res.status(404).json({error : 'Menu item not found' })
    }
    console.log('data updated');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal storage errror' })
  }
})
//comment added for testing purpose
module.exports = router;