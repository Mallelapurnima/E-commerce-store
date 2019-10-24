const Category=require('../models/Category')
module.exports.list=(req,res)=>{
    Category.find()
    .then((categories)=>{
        res.json(categories)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.create=(req,res)=>{
    const  body=req.body
    const category=new Category(body)
    category.save()
    .then((categories)=>{
        res.json(categories)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Category.findById(id)
    .then((categories)=>{
        res.json(categories)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    category.findByAndDelete(id)
    .then((categories)=>{
        res.json(categories)

    })
    .catch((err)=>{
        res.json(err)
    })

    

}