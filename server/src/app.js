/////////////////////////
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const app=express();
const port=process.env.PORT || 8181;
/////////////////////////
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
/////////////////////////
app.post('/register',(req,res)=>{
    res.send({
        message:`Hello ${req.body.email}. Your Email Was Registered. Have Fun :-)`
    });
});
/////////////////////////
app.listen(port,()=>console.log(`\n\tApp Running On PORT ${port}\n`));