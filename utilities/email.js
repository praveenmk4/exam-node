const nodemailer = require('nodemailer');
const config = require("./../config/config");

module.exports.sendMail = (text, message, res, err, email, sub) => {


    let auth = {
        type: 'OAuth2',
        user: config.emailUser,
        clientId: config.clientId,
        clientSecret: config.clientsecret,
        refreshToken: config.refreshToken,
    };
    console.log(auth);
    
    //create a transporter medium with a sender identity
    let transporter = nodemailer.createTransport({
 
    /*     host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        xoauth2: auth, */
      /*   debug:true,
        host: 'smtp.gmail.com',
        port: 465,
        ssl: true,
        use_authentication: true,
        user: 'quicktest2k20@gmail.com',
        pass: 'QuickTest@123' */
        host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'quicktest2k20@gmail.com',
        pass: 'QuickTest@123'
    }
    
    });
/*     nodemailer.SMTP = {
        debug:true,
        host: 'smtp.gmail.com',
        port: 465,
        ssl: true,
        use_authentication: true,
        user: 'quicktest2k20@gmail.com',
        pass: 'QuickTest@123'
    } */
    //set the mail option with nessary data
    let mailOptions = {
        from: "quicktest2k20@gmail.com",
        to: email,
        subject: sub,
        text: message + text

    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);

        }
        console.log("Message %s sent :%s", info.messageId, info.response);

    });
};