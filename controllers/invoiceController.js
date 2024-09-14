const Invoice = require('../models/Invoice');


// create new invoice
exports.createInvoice = async (req, res) => {
  const { date, invoiceNumber, currency, items } = req.body;

  let subtotal = 0, totalTaxes = 0;
  items.forEach(item => {
    let itemTotal = item.price * item.quantity;
    let itemTaxes = item.taxes.reduce((acc, tax) => acc + (tax.rate / 100) * itemTotal, 0);
    subtotal += itemTotal;
    totalTaxes += itemTaxes;
  });

  const totalAmount = subtotal + totalTaxes;

  const newInvoice = new Invoice({
    date, invoiceNumber, currency, items, subtotal, totalTaxes, totalAmount
  });
  

  try {
    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// get all invoices
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// get a specific invoice
exports.getInvoiceById = async (req ,res) => {
  const { id } = req.params;  // Extract invoice id from the request params

  try {
    const invoicedata = await Invoice.findById(id);  // Find invoice by ID

    if (!invoicedata) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json(invoicedata);  // Send the found invoice as JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// edit a specific invoice
exports.editInvoice = async (req, res) => {
  const { items } = req.body;

  // Recalculate subtotal, totalTaxes, and totalAmount
  let subtotal = 0;
  let totalTaxes = 0;

  items.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    totalTaxes += item.taxes.reduce((sum, tax) => sum + (itemTotal * tax.rate / 100), 0);
  });

  const totalAmount = subtotal + totalTaxes;

  const updatedInvoice = {
    ...req.body,
    subtotal,
    totalTaxes,
    totalAmount
  };

  try {
    const result = await Invoice.findByIdAndUpdate(req.params.id, updatedInvoice, { new: true });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error updating invoice' });
  }
}


