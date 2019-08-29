/* library to send email notifications */
const nodemailer = require('nodemailer');
const loggerLib = require('../libs/loggerLib');
const responseLib = require('../libs/responseLib');
const appConfig = require("../../config/appConfiguration");

let sendEmail = (toEmail, emailTitle, emailMessage) => {
    return new Promise((resolve) => {
        /* define transporter */
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: '587',
            secureConnection: 'false',
            tls: {
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            },
            auth: {
                user: appConfig.emailId,
                pass: appConfig.password
            }
        });
        /* define mail options */
        const mailOptions = {
            from: appConfig.emailId,
            to: toEmail,
            subject: `Issue Tracking Tool: ${emailTitle}`,
            html: emailMessage
        };
        /* send mail */
        try{
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    loggerLib.error('Sent Mail Failed!', 'emailLib.sendMail', 10);
                    let response = responseLib.generate(true, 'Send email failed', 500, null);
                    resolve(response);
                }
                else {
                    loggerLib.info('Mail Sent Successful!', 'emailLib.sendMail', 10);
                    resolve(info);
                }
            });
        }catch (err){
            resolve(err);
        }
    });
}

module.exports = { sendEmail: sendEmail }
