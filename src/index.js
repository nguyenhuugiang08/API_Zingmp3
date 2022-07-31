const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes')

var whitelist = ['http://localhost:3000', 'https://zing-clone-react-app.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

route(app);

app.listen(process.env.PORT || 4000, () => {
  console.log('successfully');
})