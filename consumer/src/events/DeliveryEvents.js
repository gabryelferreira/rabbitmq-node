class DeliveryEvents {
    
    constructor(amqpConn) {
        this.amqpConn = amqpConn;
    }

    index() {
        this.amqpConn.createChannel(function (err, ch) {
            var ex = 'delivery_item';

            ch.assertQueue(ex);

            ch.consume(ex, function (msg) {
                const parsedMsg = JSON.parse(msg.content.toString());
                console.log(" [x] Delivered Item ", parsedMsg);
                ch.ack(msg);
            });
        });
    }

}

module.exports = DeliveryEvents;