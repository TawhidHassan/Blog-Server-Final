const  express = require('express');
const mongoose = require('mongoose')

const port = process.env.PORT || 5000;
const app = express();



mongoose.connect('mongodb://localhost:27017/instragram', {useNewUrlParser: true, useUnifiedTopology: true});


app.route('/').get((req,res)=> res.json("hello"))


app.listen(port, () =>
  console.log(`welcome your listinnig at port ${port}`)
);