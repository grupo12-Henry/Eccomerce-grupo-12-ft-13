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

// Step 1
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'grupo12ecommerce@gmail.com',
        pass: 'Ecommerce12'
    }
});

// Step 2
let mailOptions = {
    from: 'grupo12ecommerce@gmail.com', // TODO: email sender
    to: 'julian_her_287@hotmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Hola Probando  !!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return consol.log('Error occurs');
    }
    return consol.log('Email sent!!!');
});