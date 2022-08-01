const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes')

app.use(cors());

route(app);

app.listen(process.env.PORT || 4000, () => {
  console.log('successfully');
})