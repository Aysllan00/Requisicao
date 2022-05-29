import fetch from "node-fetch";
//var express = require('express');
import express from "express";

var app = express();
app.listen(5501, () => console.log('Conectado'))
app.use(express.static('public'));

const options = {
method: 'GET',
json: true,
headers: {
    'User-Agent': 'request'
}
};

app.get('/api', async (request, response) => {

  const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=EXI&interval=5min&apikey=0ZWXW9IYMFL3DR7W';
  const fetch_response = await fetch(url, options);
  const dat = await fetch_response.json();
  response.json(dat);
});
 