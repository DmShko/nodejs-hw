const sendGridMail = require("@sendgrid/mail");

require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sendGridMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {

    const emailConfig = {...data, from: 'hw06-email@it.com'}

    await sendGridMail.send(emailConfig);

    return true;
};

module.exports = sendEmail;