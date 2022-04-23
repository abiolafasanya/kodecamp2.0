const {productModel : Model} = require('../models/product');

console.log(Model);


exports.allProduct = async (req, res) => {
    try {
        const data = await Model.find({});
        res.status(200).json({
            ok: true, 
            data,
            message: "All Products"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const data = await Model.find({_id: req.params.id});
        res.status(200).json({
            ok: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.addProduct = async (req, res) => {
    try {
        const data = await Model.create(req.body);
        res.status(200).json({
            ok: true,
            data,
            message: "Product added",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        const data = await Model.updateOne(id, req.body);
        res.status(200).json({
            ok: true, 
            message: `Product with ID: ${req.params.id} has been updated`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

exports.removeProduct = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        const data = await Model.deleteOne(id);
        res.status(200).json({
            ok: true, 
            message: `product Id: ${req.params.id} has been deleted`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

