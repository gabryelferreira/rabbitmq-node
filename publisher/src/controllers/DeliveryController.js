module.exports = {

    async index(req, res) {
        const item = {
            _id: 1,
            name: 'French Fries',
            price: 10
        };
        req.amqpConn.createChannel(function (err, ch) {
            const ex = 'delivery_item';
    
            const stringItem = JSON.stringify(item);
    
            ch.assertQueue(ex);
            ch.sendToQueue(ex, new Buffer.from(stringItem));
            console.log(" [x] Sent Delivery Item ", stringItem);
        });
        return res.json({
            item
        })
    }

}