const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser')
const data = require('./numdata.model');

mongoose.connect('mongodb://127.0.0.1:27017/testapp');

const PORT = 3000;


const app = express();
app.use(cors());

const numSchema = new mongoose.Schema({
    data:{
        type:Number,
        require:true
    }
},
    {timestamps: true}
)

const Numbers = new mongoose.model("Number",numSchema);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', async (req,res)=>{
    const { page = 1, pageSize = 10 } = req.query;
    const data = await Numbers.find({})
    // We multiply the "limit" variables by one just to make sure we pass a number and not a string
    .limit(pageSize * 1)
    // I don't think i need to explain the math here
    .skip((page - 1) * pageSize)
    // We sort the data by the date of their creation in descending order (user 1 instead of -1 to get ascending order)
    .sort({ createdAt: -1 });
    res.send(data);
})

app.post('/', async (req,res)=>{
    try {
        let number = new Numbers;
        number.data = req.body.num;

        console.log(number);
        await number.save();
        res.send({"data":number})
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.listen(PORT,()=>{
    console.log("localhost:3000")
})

