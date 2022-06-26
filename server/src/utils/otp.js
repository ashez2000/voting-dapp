const nodemailer = require("nodemailer");

const OTPGenerator = () => {
  var string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let OTP = "";
  var len = string.length;
  for (let i = 0; i < 6; i++) {
    OTP += string[Math.floor(Math.random() * len)];
  }
  return OTP;
};

const sendOTP = async (email, otp) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "109f06366c8d49",
      pass: "9f3c9ec0ad1cdd",
    },
  });

  let info = await transporter.sendMail({
    from: '"Voting Dapp" <noreply@votingdapp.com>',
    to: email,
    subject: "OTP",
    text: `OTP: ${otp}`,
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = { OTPGenerator, sendOTP };
