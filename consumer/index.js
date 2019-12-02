const express = require('express');
require("dotenv").config();
const connectToRabbitMQ = require('./src/config/rabbitmq');
const DeliveryEvents = require('./src/events/DeliveryEvents');
let amqpConn;

const app = express();

app.use(express.json());
app.use((req, _, next) => {
    req.amqpConn = amqpConn;
    next();
})

app.listen(8081, async () => {
    console.log("Running on port 8081");
    amqpConn = await connectToRabbitMQ();

    const deliveryEvents = new DeliveryEvents(amqpConn);
    deliveryEvents.index();
});