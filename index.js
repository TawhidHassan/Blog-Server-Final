const  express = require('express');
const mongoose = require('mongoose')

const port = process.env.PORT || 5000;
const app = express();



mongoose.connect('mongodb://localhost:27017/BlogServer', {useNewUrlParser: true, useUnifiedTopology: true});


const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});



app.route('/').get((req,res)=> res.json("hello"))



app.listen(port, () =>
  console.log(`welcome your listinnig at port ${port}`)
);