const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db')

const productRouter = require('./routes/product')
const PORT = process.env.PORT || 3001;

const app = express();

require("dotenv").config();

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/api", (req, res) => { 
    res.json({message: "Hello from server!"});
})


app.use('/api', productRouter)
app.listen(PORT, () => { 
    console.log(`Server listening on ${PORT}`);
});


