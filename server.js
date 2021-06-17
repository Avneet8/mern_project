const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const items = require('./routes/api/items');
const app = express();
const path = require('path');
//const path = require('path');
const config = require('config');



//Bodyparser Middleware
app.use(express.json());

//DB Config
//const db = require('./config/keys').mongoURI
const db = config.get('mongoURI');
//connect to mongodb
mongoose
.connect(db,{ 
    useNewUrlParser: true, useUnifiedTopology: true,
    userCreateIndex: true
 })
.then(()=>console.log("Mongodb connected"))
.catch(err=>console.log(err))
//use routes 
app.use('/api/items',require('./routes/api/items'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));

//Serve static assets if in production
const uri = process.env.MONGODB_URI;
if(process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port  = process.env.PORT || 5000;
app.listen(port,()=>console.log(`server started on port ${port}`));
