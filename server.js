const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();
const mongoose = require('mongoose');
const uri = 'mongodb+srv://farenheit56:t3rm1nat0r@cluster0-mvyac.mongodb.net/loleta?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
  () => { console.log('Logueado a la DB ñery') },
  err => { console.log(err) }
);

app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send();
});

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('La Loleta está escuchando en puerto '+ app.get('puerto'));
});