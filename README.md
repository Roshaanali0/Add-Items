# Simple Item Management API

## Introduction
This is a straightforward and minimalistic API for managing items. It allows you to create new items and store them in a MongoDB database. The API is built using Node.js, Express, and Mongoose for seamless data management.

## Features
- **Create an Item**: Add new items with essential details like name, price, description, availability, and category.
- **Simple and Efficient**: Lightweight API with minimal dependencies.
- **MongoDB Integration**: Uses Mongoose for data modeling and database interaction.

## Installation & Usage
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/item-management-api.git
   cd item-management-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     ```
4. Run the server:
   ```sh
   npm start
   ```

## API Endpoint
### Create an Item
- **Endpoint:** `POST /create`
- **Request Body:**
  ```json
  {
    "name": "Item Name",
    "price": 100,
    "description": "Item description",
    "instock": true,
    "category": "Electronics"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Item added successfully",
    "data": {
      "name": "Item Name",
      "price": 100,
      "description": "Item description",
      "instock": true,
      "category": "Electronics"
    }
  }
  ```

## Tweaking & Customization
- Modify `itemSchema` in `models/itemModel.js` to add more fields.
- Adjust API routes in `controllers/itemsController.js`.

## License
This project is open-source and can be modified as needed.

---
⚠️ **Note:** This is a simple API with basic functionality. Future enhancements may include authentication and more CRUD operations.

