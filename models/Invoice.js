const mongoose = require('mongoose');

const invoiceItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  taxes: [{ title: String, rate: Number }]
});

const invoiceSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  invoiceNumber: {type: String},
  currency: String,
  items: [invoiceItemSchema],
  subtotal: Number,
  totalTaxes: Number,
  totalAmount: Number
});

 
const Invoice = mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;