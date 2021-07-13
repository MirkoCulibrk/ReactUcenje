const express=require('express');
const session=require('express-session');
const app=express();
const port = process.env.PORT || 5000; //Line
app.use(cors());
app.use(session({
    name:'sid',
    resave:false,
    saveUninitialized:false,
    secret:'ssh!quiet,itdas',
    cookie:{
        maxAge:60*60*1000,
        sameSite:true,

    }
}))
app.use('/login',(req,res)=>{
    res.send({
        token:'test'
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`)); 