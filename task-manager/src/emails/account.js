const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'joshuamcarter@icloud.com',
    subject: 'Welcome to the Task Manager Thank you!',
    text: `Welcome to the app ${name} please let us know if we can help in any way`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'joshuamcarter@icloud.com',
    subject: 'We are sorry to see you leave!',
    text: `Hey ${name} please let us know what we can do to improve your experience`,
  });
};

module.exports = { sendWelcomeEmail, sendCancellationEmail };
