const express = require('express');
require("dotenv").config();
const connectToRabbitMQ = require('./src/config/rabbitmq');
let amqpConn;

const app = express();

app.use(express.json());
app.use((req, _, next) => {
    req.amqpConn = amqpConn;
    next();
})

app.use('/', require('./src/routes'));

app.listen(8080, async () => {
    amqpConn = await connectToRabbitMQ();
});

