const mongoose =require('mongoose')
const Schema=mongoose.Schema
const ProductSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    categoryId:{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        
        isAvailable:{
            type:String,
            required:true
        },
        ratings:{
            type:String,
            required:true
        },
        images:[{
            type:String
        }],
        reviews: [
            {
                title: { type: String, required: true },
                userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
                rating: { type: Number },
                date: { type: Date }
            }
        ],
        sellerId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    })
    


    

const Product=mongoose.model('Product',ProductSchema)
module.exports=Product
    


