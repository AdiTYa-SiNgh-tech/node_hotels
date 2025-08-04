const express = require('express');
const router = express.Router();
const Person = require('./../models/Person')

//Post route to add a person
router.post('/' ,async (req , res)=>{
  try{
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal server error '})
  }

})

router.get('/' , async (req,res)=>{
  try{
    const data = await Person.find();
    console.log('data fetched successfully');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({ error  : 'Internal storage errror'})
  }
})

router.get('/:workType', async(req , res)=>{
  try{
    const workType = req.params.workType; //Extract the work from the URL parameter
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      const response = await  Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);

    }else{
      res.status(404).json({error : 'Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error :'Internal storage errror' })
  }
})
router.put('/:id' , async(req,res)=>{
  try{
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(personId,updatedPersonData ,{
      new:true,
      runValidators: true
    })
    if(!response){
      return res.status(404).json({error : 'No user found with this id'})
    }
    console.log('data updated');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal storage errror' })
  }

})
router.delete('/:id' , async(req,res)=>{
  try{
    const personId =  req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error : 'No user found with this id'})
  }
  console.log('data deleted');
  res.status(200).json(response);
}
  catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal storage errror' })
  }
})
module.exports = router;