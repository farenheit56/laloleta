const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');
const app = express();

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