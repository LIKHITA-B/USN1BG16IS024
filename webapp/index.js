var express=require('express');
var app=express();
//middleware should be created first

/*
app.use('/',(req,res,next)=>
{
    console.log('2nd');
    res.send("this is my middleware function");
    next();//calls the next function

})*/
//require mongoose
var mongoose=require('mongoose');


//require body parser
//converts the data that is entered into json code
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//make connection to database
//here postdbapp is database name
mongoose.connect("mongodb://localhost:27017/postdbapp",{useNewUrlParser:true});


//create a schema for database
var postschema=new mongoose.Schema({
    title:String,
    description:String
}) ;

// to convert schema to model
var pdata=mongoose.model("pdata",postschema,"pdata");
//1st pdata for user name and next is table name 

//call index.html in express.js
app.get('/',(req,res)=>{
    res.sendfile(__dirname+"/index.html");
})

app.post('/addpost',(req,res)=>{
    var myData=new pdata(req.body);
    myData.save()
    .then(item=>{
        res.send("title & description saved");
    })
    .catch(err=>{
        res.status(400).send("sending data failed");
    })
})
/*
app.get('/',(req,res)=>{
    console.log('1st');
    //next();
    //can make this middle ware aso 
})
*/
app.listen(3000,()=>{
    console.log('server at port 3000');
})