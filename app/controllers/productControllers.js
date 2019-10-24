const Product=require('../models/Product')
const {upload}=require('../middlewares/fileUpload')
module.exports.list=(req,res)=>{
    Product.find()
     .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })
}

    
    

    

    




    module.exports.create=('/', upload.single('myImage'), (req, res) => {
        const body = req.body
    
        const imageUrl = req.file.destination
        body.imageUrl = imageUrl.slice(1) + req.file.filename
           const product=new Product(body)
    product.save()
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })
})



module.exports.show=(req,res)=>{
    const id=req.params.id
    Product.findById(id)
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Product.findByIdAndDelete(id)
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })
}
