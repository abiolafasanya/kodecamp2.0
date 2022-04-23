require("dotenv").config();

const environments = {};

module.exports = {
    'port': process.env.PORT || 4000,
    'host': `http://localhost:4000/api/v1`,
    'secret': 'ZPUyxiyqGiYyXutHJfG3jTrpnDsh0XqK',
    'application_name': 'Ecommerce API',
    "mongodb_uri": process.env.MONGODB_URI || "",
    "local_mongodb_uri": process.env.MONGODB_URI_LOCAL || "mongodb://localhost:27017/ecommerce",
};