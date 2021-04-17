const  express = require('express');
const mongoose = require('mongoose')

const port = process.env.PORT || 5000;
const app = express();



mongoose.connect('mongodb+srv://BlogUser:Sifat15963740@cluster0.0igq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });


const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb connected");
});


app.use(express.json());


const userRoute = require("./routes/user");
app.use("/user", userRoute);


app.route('/').get((req,res)=> res.json("hello"))



app.listen(port, "0.0.0.0", () =>
  console.log(`welcome your listinnig at port ${port}`)
);