require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

const crud = require('./routes/crudRouter')

app.use('/api/data', crud);


app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Server is Running on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`)
});
