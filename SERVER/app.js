if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
const Controller = require('./controllers/controller');
app.use(cors());

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/" , Controller.getAllProducts)
app.get("/invoices" , Controller.getAllInvoices)
app.post("/invoices" , Controller.createInvoice)
app.post("/searchInvoice" , Controller.searchInvoice)
app.get("/:Products" , Controller.searchProduct)



module.exports = {app , port}
