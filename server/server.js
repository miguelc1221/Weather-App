const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');

const webpackConfig = require('../webpack.config.dev');
const axios = require('axios');
const config = require('./config/config');

const app = express();
const compiler = webpack(webpackConfig);

const PORT = process.env.PORT || 3000
const isProduction = process.env.NODE_ENV === 'production';

// Webpack-dev-middleware
if (!isProduction) {
	app.use(require('webpack-dev-middleware')(compiler, {
	  noInfo: true,
	  publicPath: webpackConfig.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));
}

// App Setup
app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json({ type: '*/*' }));

// Route
app.post('/api', function(req,res) {
    const city = req.body.city;
    const url = 'https://api.apixu.com/v1/forecast.json';
    const key = config.secretKey;
    const API_URL = url + '?key=' + key + '&q=' + city + '&days=5';
     
    axios.get(API_URL)
        .then(function(response) {
            return res.json(response.data)
        })
        .catch(function(err) {
            return res.json(err)
        })
    
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(PORT);
});
