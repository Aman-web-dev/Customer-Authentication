const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const User = require('../models/Usermodels');

const router = express.Router();

 
 //api to write or post data in data base 

router.post('/', async (req, res) => {
    const { userName,email,password} = req.body;
     console.log("we Are Woking king")
    try {
      const userAdded = await User.create({
        
        userName: userName,
        email: email,
        password: password
      });
  
     return res.status(201).json(userAdded);
    } catch (err) {
      console.log(err);
     return res.status(500).json(err);
      
    }
  });
  
  
  //api to get or read data from database.
  router.get('/',async(req,res)=>{
   
    try{
  
        const showAll= await User.find();
       return res.status(201).json(showAll)
        console.log(showAll) 
    }catch (error){
    console.log(error)
  return res.send(500).json({error:error.message})
  }
  
  res.send('api is running on port')
  })
  


  //api to get data of a single user on the basis of id;

  router.get('/:id',async(req,res)=>{

    const {id} = req.params;
  
    try{

    const singleUser=await User.findById({_id:id})
   return res.status(201).json(singleUser);
    console.log(singleUser);

    }catch(err){
      return  res.status(500).json(err);
        console.log(err);

    }

  })

  //api to delete data of a single user 

   router.delete('/:id',async(req,res)=>{
     
    const {id}= req.params;
    console.log("thsi is ..................................",id)
  
    try{
      const del = await User.findByIdAndDelete({_id:id});
     return res.status(201).json(del);

    }catch(error){
      console.log(error);

      return  res.status(500).json({error:error.message});

    }
  })

  //api to update a user info 

  router.patch('/:id', async(req,res)=>{
    
    const {id}= req.params;
    const {userNameVal,emailVal,passwordVal}=req.body;

    try{
   const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true})
   console.log(updateUser);
   console.log(`${updateUser}successfully Updated`);
   return res.status(201).json(updateUser);
    }catch(error){
      console.log(error);
      return  res.status(500).json({error:error.message});

    }
  })
  



  router.post('/login',async(req,res)=>{

     const userName=req.body.userName;

     console.log(userName)

     try{

    const validateUser=await User.findOne({userName:userName});

    if(validateUser.password!==req.body.password){
      res.send("Enter a valid password");

    }

    if(validateUser.password==req.body.password){

      res.send("successFully loggedIn");
    }


  }
  catch{
    res.send("Enter a valid UserName");
  }

  })


   module.exports=router;



