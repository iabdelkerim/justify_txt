const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const userCtrl = require('./controllers'); 
const auth = require('./auth');


//connection à la base de données mongodb pour stocker les utlisateurs
mongoose.connect(your_mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true

})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log('Connexion à MongoDB échouée !'));


app.use(bodyParser.text());
//app.use(bodyParser.raw({type: 'text/plain'}));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();

});



app.post("/api/signup",userCtrl.createUser);
app.post('/api/token',userCtrl.Token);
app.post('/api/justify',auth,userCtrl.justify);


module.exports = app;

