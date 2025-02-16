const nodemailer = require('nodemailer');
const { emailConfigs } = require('../config')
const cron = require('node-cron');
const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailConfigs.EMAIL_ID,
        pass: emailConfigs.EMAIL_PASS
    }
});

const sendMail = async (from, to, subject, text) => {
    try {

        cron.schedule('*/1 * * * *', async () => {
            const info = await sender.sendMail({
                from,
                to,
                subject,
                text
            })
        }
        )
    }
    catch (error) {
        console.log("error occured while sending mail", error);
    }
}
module.exports = {
    sendMail,
}