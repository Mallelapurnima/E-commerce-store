

const Cart=require('../models/Cart')
module.exports.list=(req,res)=>{
    Cart.find({userId:req.user._id})
    .then((carts)=>{
        res.json(carts)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    const cart=new Cart({
        userId:req.user._id,
        productId:body.productId,
        quantity:body.quantity
    })
    cart.save()
    .then((carts) => {
    
        res.json(carts)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id =req.params.id
    Cart.findByIdAndDelete(id)
    .then((carts)=>{
        res.json(carts)
    })
    .catch((err)=>{
        res.json(err)
    })
}