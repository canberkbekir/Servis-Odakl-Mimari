const express = require('express');
const path = require('path');


const app = express();

//public dosyalarının path'i
const publicDirectory = path.join(__dirname, './public'); 
app.use(express.static(publicDirectory));



//parse url encoded bodies (as sent by html forms)
app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'hbs');



//DEFINE ROUTES
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'))

app.listen(5000,()=>{
    console.log('Server started on Port 5000');   
})