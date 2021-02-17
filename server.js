const express = require('express');
const app = express();
// const pool = require('./db');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

//middleware

app.use(express.json());
app.use(cors()); 

//ROUTES

// login and register routes
app.use("/auth", require("./src/routes/jwtAuth"))

//dashboard ROUTE
app.use("/dashboard", require("./src/routes/dashboard"))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})