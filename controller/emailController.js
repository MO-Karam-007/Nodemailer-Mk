const nodemailer = require("nodemailer");

function emailSetup()
{
    return transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "api.mk.9@gmail.com",
            pass: process.env.GMIAL_PASSWORD,
        },
    })

}




exports.send = async (req, res) =>
{
    const { from, to, subject, content, attachment } = req.body
    const transporter = emailSetup()

    const info = await transporter.sendMail({
        from: "api.mk.9@gmail.com", // sender address
        to: [to], // list of receivers
        subject, // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })


    res.status(201).json({
        status: 'success',
        info,
    })


}