const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();
const createInvoices = require('./controllers/invoiceController')
app.use(express.urlencoded({ extended: true }));
const Routes = require('./routes/invoiceRoutes')
const mongoose = require('mongoose');
const invoice = require('./models/Invoice')

const dbUrl = process.env.MONGO_URL;
main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

app.use('' , Routes);

app.listen(8080, () => console.log('Backend server is running on port 8080'));

