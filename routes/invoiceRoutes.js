const express = require('express');
const {
  createInvoice,
  getInvoices,
  getInvoiceById,
  editInvoice
} = require('../controllers/invoiceController');
const router = express.Router();

router.route('/create').post( createInvoice);  // Create a new invoice
router.route("/invoices").get(getInvoices)  // Get all invoices
router.route('/invoices/:id').get( getInvoiceById);  // Get a specific invoice by ID
router.route('/invoices/:id').put( editInvoice);  // Edit an invoice by ID

module.exports = router;
