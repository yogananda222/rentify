const express = require('express');
const path = require('path');
const app = express();
const whitelist = ['https://rentify-5f5f7381b151.herokuapp.com'];
const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
  
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/dist/angular-17-e-commerce-app/browser'));
app.get('/*', function(req,res)

{res.sendFile(path.join(__dirname+'/dist/angular-17-e-commerce-app/browser/index.html'));});

app.listen(process.env.PORT || 8080);