const Product = require('../models/product-model')
const cloudinary = require("../utils/cloudinary")

createProduct = async (req, res) => {
    const body = req.body
 
    const {name, description, price, image, category, quantity} = req.body;
   

    try {
        if(image) {
              const uploadRes =  await cloudinary.uploader.upload(image,{
                    upload_preset: "yzzgf0g8"
                })

            //     uploadRes.then((data) => {
            //         console.log(data);
            //         console.log(data.secure_url);
            //       }).catch((err) => {
            //         console.log(err);
            //       });

            //       // Generate 
            // const url = cloudinary.url("indo_flag", {
            //     width: 100,
            //     height: 150,
            //     Crop: 'fill'
            // });

                //console.log(url)

                if(uploadRes) {
                    const product = new Product({
                        name,
                        description,
                        category,
                        price,
                        image : uploadRes,
                        quantity
                    })

                    const savedProduct = await product.save()
                    console.log('Product Created Successfully')
                    res.status(200).send(savedProduct)
                }
        }
    }
        catch(error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a product',
//         })
//     }

//     const product = new Product(body)

//     if (!product) {
//         return res.status(400).json({success: false, error:err})
//     }

//     product.save()
//     .then(() => {
//         return res.status(201).json({
//             success: true,
//             id: product._id,
//             message: 'Product Created!',
//         })
//     })
//     .catch(error => {
//         return res.status(400).json({
//             error,
//             message: 'Product not created!',
//         })
//     })
// }

updateProduct = async (req, res) => {
    const body = req.body 


    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Product.findOne({_id: req.params.id} , (err, product) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Product not found'
            })
        }

        product.name = body.name
        product.description = body.description
        product.price = body.price
        product.category = product.category
        product.quantity = product.quantity
        product.shipping = product.shipping

        Product.save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: movie._id,
                message: 'Product updated!',
            })
        })

        .catch(error => {
            return res.status(404).json({
                error,
                message: 'Product not updated!',
            })
        })
    })



}

deleteProduct = async (req, res) => {
    await Product.findOneAndDelete({_id: req.params.id} , (err, product) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        } 

        if (!product) {
            return res
            .status(404)
            .json({success: false, error: 'Product not found'})
        }

        return res.status(200).json({success: true, data: product})
    }).catch(err => console.log(err))
}


getProductById = async (req, res) => {
    await Product.findOne({ _id: req.params.id} , (err, product) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!product) {
            return res
            .status(404)
            .json({ success: false, error: 'Product not found'})
        }

        return res.status(200).json({success: true, data: product})
    }).catch(err => console.log(err))
}


getProducts = async(req, res) => {

    try {
        await Product.find({}, (err, product) => {
            if (err) {
                return res.status(400).json({success: false, error: err})
            }
    
            if (!product.length) {
                return res
                .status(404)
                .json({success: false, error: 'Product not found'})
            }
    
            return res.status(200).json({success: true, data: products})
        })}
         
        catch(err) {
            console.log(err)
            res.status(500).send(error);
         } 
    }
    
    

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getProductById
}
