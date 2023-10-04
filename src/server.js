const express = require('express');

const app = express();

const mongoose = require('mongoose');
const Note = require('./model/Note');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//extended: true (Nested object)
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://jayandratodawat:tryhack45@cluster0.bizbrgw.mongodb.net/?retryWrites=true&w=majority').then(function () {
    //home route
    app.get('/', function (req, res) {
        const response = { message: "API Works!" }
        res.json(response);
    });

    const noteRouter = require('./routes/Note');
    app.use('/notes', noteRouter);


    //all notes
    

})

const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
    console.log('This is Server on port : ' + `${PORT}`);
});