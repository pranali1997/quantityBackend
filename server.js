const express=require('express');
const bodyParser=require('body-parser')
const app=express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())


//setting notes routes to express app
require('./main/source/routes/routes')(app)

//listening to request
app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
    
});
