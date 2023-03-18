const mqtt = require('mqtt');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true });
const Device = require('./device');
const bodyParser = require('body-parser');
// const myId = 'KartikArora01';

const app = express();
app.use(express.static('public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const port = 5001;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

client.on('connect', () => {
    client.subscribe(process.env.TOPIC); 
    console.log('mqtt connected');
});

client.on('message', (topic, message) => {
  if (topic == process.env.TOPIC) {
    const data = JSON.parse(message);

    Device.findOne({"name": data.deviceId }, (err, device) => {
      if (err) {
        console.log(err)
      }

      const { sensorData } = device;
      const { ts, loc, temp } = data;

      sensorData.push({ ts, loc, temp });
      device.sensorData = sensorData;

      device.save(err => {
        if (err) {
          console.log(err)
        }
      });
    });
  }
});
