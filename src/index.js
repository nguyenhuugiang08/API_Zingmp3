const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes')

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions));

route(app);

app.listen(process.env.PORT || 4000,()=>{
    console.log('successfully');
})