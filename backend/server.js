const express = require("express");
const mongoose = require("mongoose");
const data=require('./config');

const app = express();
app.use(express.json());
const cors=require("cors");
app.use(cors())

const userRouter = require('./routes/routes');

const PORT=data.APP_PORT;
const URI = data.MONGODB_URI;



mongoose.connect(URI, { useNewUrlParser: true})

//if connection get extablished successfully this will throw the results out.



  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT || 8000, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`Running on port ${PORT}`); 
    });
  })

  //this will cathc the error if any.
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.use(userRouter);

