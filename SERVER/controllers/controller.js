const {Product , Invoice} = require('../models');

class Controller {
    static async getAllProducts(req, res) {
        try {
            const product = await Product.findAll();
            console.log(product, '<--- product')
            if (!product) {
                res.status(404).json({message: 'Data not found'});
            }
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static async getAllInvoices(req, res) {
        try {
            const invoice = await Invoice.findAll();
            // console.log(invoice, '<--- invoice')
            if (!invoice) {
                res.status(404).json({message: 'Data not found'});
            }
            res.status(200).json(invoice)
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static  async createInvoice(req, res) {
        try {
            const {invoiceNumber, date, customer, salesperson, paymentType, notes} = req.body
            const newInvoice = await Invoice.create({invoiceNumber, date, customer, salesperson, paymentType, notes})
            res.status(201).json(newInvoice)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static async searchInvoice (req, res) {
        const {value} = req.query
        try {
            const invoice = await Invoice.findAll({
                where: {
                    customer: {
                        [Op.iLike]: `%${value}%`
                    }
                }
            })
            if (!invoice) {
                res.status(404).json({message: 'Data not found'})
            }
            res.status(200).json(invoice)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }

    static async searchProduct (req, res) {
        const {item} = req.query
        console.log(item, '<--- item')
        try {
            const product = await Product.findAll({
                where: {
                    item: {
                        [Op.iLike]: `%${item}%`
                    }
                }
            })
            if (!product) {
                res.status(404).json({message: 'Data not found'})
            }
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }








}

module.exports = Controller