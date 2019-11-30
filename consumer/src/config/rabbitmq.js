const amqp = require('amqplib/callback_api');

module.exports = () => {

    return new Promise((resolve, reject) => {
        amqp.connect(process.env.AMQP_URL, function (err, conn) {

            if (err) {
                console.log("Error on connecting to AMQP", err);
                reject(err);
            }

            console.log("Connected successfully to AMQP");

            resolve(conn);

        });
    })

}

