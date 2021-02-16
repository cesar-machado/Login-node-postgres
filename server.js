const express = require('express');
const app = express();
// const pool = require('./db');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

//middleware

app.use(express.json());
app.use(cors()); 

//ROUTES

app.use("/auth", require("./routes/jwtAuth"))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})