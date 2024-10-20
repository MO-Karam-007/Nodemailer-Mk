const nodemailer = require("nodemailer");

function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
}

let otpCode;

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
    otpCode = generateOTP();
    const { from, to, subject, content, attachment,full_name,phone } = req.body
    const transporter = emailSetup()

    const info = await transporter.sendMail({
        from: email, // sender address
        to: [to,"api.mk.9@gmail.com"], // list of receivers
        subject, // Subject line
        text: "Hello world?", // plain text body
        html: `
          <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: grid;
            place-items: center;
            height: fit-content;
        }

        .container {
            background-color:#89CFF0;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: fit-content;
            width: 100%;
        }

        h1 {
            color: #555;
            margin-bottom: 10px;
        }
        .code{
            color:#000000;
            font-size: 16px;
            }
            

        
    </style>
    </head>
    <body>

        <div class="container">
            <h1>One of your items is requested</h1>
            <br>
            <h3 class="code">Name : ${full_name}</h3>
            <h3 class="code">email : ${email}</h3>
            <h3 class="code">Phone : ${phone}</h3>
        </div>

    </body>
</html>
    `, // html body
    })

info.code = otpCode;
    res.status(201).json({
        status: 'success',
        info,
    })


}
