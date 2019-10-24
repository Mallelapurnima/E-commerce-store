const mongoose=require('mongoose')
const Cart=require('../models/Cart')
const Product=require('../models/Product')
const Schema=mongoose.Schema
const orderSchema=new Schema({
    orderDate:{
        type:Date,
        default:Date.now
    },
    
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    total:{
        type:Number,
        default:0
    },
    productId:{
            type:Schema.Types.ObjectId,
            ref:'Product'
        }
    
        

})
orderSchema.pre('save', function (next) {
    const order = this
    // console.log(order,"order")
    Cart.find({ userId: order.userId }).populate('productId')
        .then(cart => {
            if (cart.length == 0) {
                next({ msg: 'sorry cart is empty' })

            } else {
                let total = 0
                cart.forEach(item => {
                    console.log(item.productId,"111111111111111")
                    if (item.quantity <= item.productId.stock) {
                        Product.find({ _id: item.productId._id })
                            .then(prod => {
                                prod.stock = prod.stock - item.quantity
                                prod.save()
                                    .then()
                                    .catch(err => {
                                        console.log(err)
                                    })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                            total = total + (item.productId.price * item.quantity)
                            order.orderItem.push({ productId: item.productId._id, quantity: item.quantity, price: item.productId.price })
                        }
                    })
                    if (total == 0) {
                        next({ msg: 'product out of stock' })
    
                    } else {
                        order.total = total
                        next()
    
                    }
    
    
                }
    
            })
            .catch(err => {
                next(err)
            })
    
    
    })
    orderSchema.post('save', function (next) {
        const order = this
        const userId = order.userId
        Cart.deleteMany({ userId })
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                res.json(err)
            })
    })


const Order=mongoose.model('Order',orderSchema)
module.exports=Order