// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   secure: true,// true for 465, false for other ports
//   port: 465,
//   auth: {
//     user: 'grupo12ecommerce@gmail.com',
//     pass: 'oamnzlpjavzxyell',
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });
// module.exports = {
//   transporter,
// };
                                 
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'grupo12ecommerce@gmail.com',
        pass: 'Ecommerce12'
    }
});

async function sendMail(mail, subject, text) {
    try {
    const email = await transporter.sendMail({
        from: 'grupo12ecommerce@gmail.com', // TODO: email sender
        to: mail, // TODO: email receiver
        subject: subject,
        text: text
    }, (err) => {
        if (err) {
            return consol.log('Error occurs');
        }
        return consol.log('Email sent!!!');
    });
    return email;
} catch (error) {
    console.log(error)
}
}

module.exports = {  sendMail };