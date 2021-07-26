
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,// true for 465, false for other ports
  port: 465,
  auth: {
    user: 'grupo12ecommerce@gmail.com',
    pass: 'oamnzlpjavzxyell',
  },
  tls: {
    rejectUnauthorized: false,
  },
});
module.exports = {
  transporter,
};