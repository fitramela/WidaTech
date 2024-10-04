const {Product , Invoice} = require('../models');

class Controller {
    static async getAllProducts(req, res) {
        try {
            const product = await Product.findAll();
            if (!product) {
                res.status(404).json({message: 'Data not found'});
            }
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }








}

module.exports = Controller