const express = require('express');
const session = require('express-session'); 
const bodyParser=require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = process.env.PORT || 5000; //Line 3
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    genid:(req)=>{
        return uuidv4();
    },
    secret: '=fmLV*U@FL`N]]~/zqtFCch.pBTGoU',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge:60*60*1000,
        secure:false,
        httpOnly:true
    }
}));
const users=[
    {}
]
// da veruje proxiju na clientu
app.set('trust proxy',1);
app.post('/login',(req,res)=>{
    const {email,password}=req.body;

    // req.session.username = req.body.username;
    // res.send(`Hello ${req.session.username}. Your session ID is  
    // ${req.sessionID} and your session expires in 
    // ${req.session.cookie.maxAge} milliseconds.`);
})
app.get('/',(req,res)=>{
    res.send(req.sessionID);
})
app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});