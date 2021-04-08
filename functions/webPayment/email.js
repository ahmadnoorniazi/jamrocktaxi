const nodemailer = require('nodemailer');
const ejs = require("ejs");

/**
* Here we're using Gmail to send
*/


const mailer = async (req, res) => {

        // getting dest email by query string
        const dest = req.body.dest;
        const dataParams = req.body
        const data = await ejs.renderFile(__dirname + "/emailTemplate.ejs", dataParams);
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: "jamrocktaxi@gmail.com",
              pass: "jrt12345!g"
            }
          });
        const destList = [dest,"hello@jamrocktaxi.com"]
        destList.forEach(mailAddress => {
            const mailOptions = {
                from: `JamRockTaxi #${req.body.bookingKey || "q2erd5"} <jamrocktaxi@gmail.com>`, // Something like: Jane Doe <janedoe@gmail.com>
                to: mailAddress,
                subject: 'Booking Details', // email subject
                html: data
            };

            // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
        })
}

module.exports =  mailer;
