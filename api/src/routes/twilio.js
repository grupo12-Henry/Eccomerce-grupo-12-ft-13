const accountSid = 'AC19fddcd87f8b659fa6ba29df5a028152';
const authToken = 'e741b20d0812398fe0c7e8b64065478f'; 
const client = require('twilio')('AC19fddcd87f8b659fa6ba29df5a028152', 'd59432b2c26a0ee2909140f711c2ac40');

async function sendMessage(phone, testMessage) {
        try {
        const message = await client.messages.create({
            body: testMessage,//textmessage,
            from: '+15418036054', // From a valid Twilio number//config.phone
            to: phone//recipient,  // Text this number
        })
        console.log(message.from)
        return message;
    } catch (error) {
        console.log(error)
    }
}

module.exports = { sendMessage }
