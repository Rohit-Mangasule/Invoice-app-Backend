# Invoice-app-Backend
# Invoice Management Backend System

This backend project is developed using **Node.js**, **Express.js**, and **MongoDB**, following the **MVC architecture** to ensure maintainability, scalability, and clarity. The application provides a comprehensive invoicing system with functionalities for creating, editing, viewing, and deleting invoices. The database operations are efficiently handled using **Mongoose**, a popular ODM (Object Data Modeling) library for MongoDB.

## 1) Project Description

The **Invoice Management Backend** is a RESTful API that supports various CRUD (Create, Read, Update, Delete) operations. The project is designed to manage invoices efficiently, allowing users to:
- Create new invoices.
- Fetch the details of all available invoices.
- Fetch a specific invoice by its unique ID.
- Update invoice details such as item prices, quantities, taxes, and other metadata.
- Delete invoices.

### REST API Endpoints

The backend exposes the following endpoints for managing invoices:

- **POST** `/create`: Create a new invoice.
  - Payload: Invoice details including `date`, `invoiceNumber`, `currency`, `items`, `taxes`, etc.
  - Calculates subtotal, taxes, and total amounts automatically.
  
- **GET** `/invoices`: Fetch all invoices.
  - Retrieves a list of all created invoices with details such as subtotal, total, and taxes.

- **GET** `/invoices/:id`: Get a specific invoice by its ID.
  - Retrieves the details of a single invoice by its unique identifier.

- **PUT** `/invoices/:id`: Update a specific invoice by its ID.
  - Allows editing of the invoice’s item details, taxes, and overall amounts.

- **DELETE** `/invoices/:id`: Delete an invoice by its ID.
  - Removes the selected invoice from the database.

### MVC Architecture

This project is organized following the **Model-View-Controller (MVC) Architecture**:

- **Models**: Represent the structure of the invoice data stored in MongoDB using Mongoose schemas. Each invoice consists of fields like `date`, `invoiceNumber`, `items`, `taxes`, `subtotal`, and `totalAmount`.

- **Controllers**: Handle the business logic and communicate between the models and routes. They process incoming requests, interact with the model, and send appropriate responses.

- **Routes**: Define the API endpoints that the frontend or any client can call to interact with the application. These routes map to the corresponding controller functions to perform actions like creating, fetching, editing, or deleting invoices.

---

## 2) Tech Stack

This backend was built using the following technologies:

- **Node.js**: The runtime environment used to execute JavaScript on the server side.
- **Express.js**: A fast and lightweight web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing invoice data in a flexible, JSON-like format.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB that provides schema-based solutions to model and manage data.
- **MVC Architecture**: Model-View-Controller design pattern for separating concerns and organizing the codebase.
- **Axios**: For making HTTP requests from the frontend to the backend API.

---

## 3) Getting Started

### How to Clone the Project

To get started with the backend of this project, follow the steps below:

1. **Clone the Backend Repository**:
   ```bash
   git clone https://github.com/Rohit-Mangasule/Invoice-app-Backend
   cd backend

2. **Install Dependencies: Make sure you have Node.js installed. Install the required dependencies by running:**
    ```bash
        npm install
    ```

3. **Set Up Environment Variables: Create a .env file in the root of the project and add your MongoDB URL as follows:**
    ```
    MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/invoices?retryWrites=true&w=majority
    ```

4. **Run the Server: Start the backend server on port 8080 by running:**
    ```
    node server.js
    ```

The backend server should now be running on https://invoice-app-backend-zfw9.onrender.com.


**How to Test the APIs**

Once the backend is running, you can test the API endpoints using tools like Postman or cURL. For example, to create a new invoice, send a POST request to https://invoice-app-backend-zfw9.onrender.com/create with the required payload.

**Frontend Repository**

You can find the frontend for this project [here](https://github.com/Rohit-Mangasule/Invoice-app-Frontend). The frontend interacts with the backend via the RESTful API to display and manage invoices.