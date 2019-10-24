const User =require('../models/User')

//local host:3005/users/registration
module.exports.register=function(req,res){
      const body=req.body
    const user= new User({username:body.username,email:body.email,password:body.password,mobile:body.mobile,role:body.role,})
    user.save()
    .then(function(user){
        const{ _id,username,email}=user
        res.json({_id,username,email})
    })
        
    .catch(function(err){
        res.send(err)
    })
}
//localhost:3005/users/login
module.exports.login=function(req,res){
    const body=req.body
   User.findByCredentials(body.email,body.password)
   .then(function(user){
       return user.generateToken()
   })


   .then(function(user){
        //res.send(token)
       res.send(user)
   })
   .catch(function(err){
       res.send(err)
   })  
}
//localhost:3005/users/account
module.exports.account=function(req,res){
    const user=req.user
    const token=req.token
    res.send(profile)


    
    
    
}



