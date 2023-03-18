const { Board, Proximity } = require("johnny-five");
const board = new Board();
const mqtt = require('mqtt');
require('dotenv').config();
const topic =process.env.TOPIC;
const bodyParser = require('body-parser');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");


const app = express();
app.use(express.static('public'));

client.on('connect', () => {
  client.subscribe('/sensorData'); 
  console.log('mqtt connected');
});


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));


board.on("ready", () => {
  const proximity = new Proximity({
    controller: "HCSR04",
    pin: 7
  });

  proximity.on("change", () => {
    const {centimeters, inches} = proximity;
    const ts = new Date().getTime();
    const { TOPIC } = process.env;
    const message = JSON.stringify({ TOPIC, ts, centimeters});
    console.log("Proximity: ");
    console.log("  cm  : ", centimeters);
    client.publish(topic, message);
    console.log("  in  : ", inches);
    console.log("-----------------");
  });
});
