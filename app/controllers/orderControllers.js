const Order=require('../models/Order')
module.exports.list=(req,res)=>{
    Order.find({ userId: req.user._id })
    .then((orders)=>{
        res.json(orders)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const order=new Order({userId:req.user._id,addressId:body.addressId})
    order.userId=req.user._id
    order.save()
    .then((orders)=>{
        res.json(orders)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Order.findByIdAndDelete(id)
    .then((orders)=>{
        res.json(orders)
    })
    .catch((err)=>{
        res.json(err)
    })
}
