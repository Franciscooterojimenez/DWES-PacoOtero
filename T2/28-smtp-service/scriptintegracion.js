import nodemailer from 'nodemailer';

let transporter = null;
let globalSMTPConfig = null;
export function initSmptServer(Config) {
    const {host, port} = Config;
    transporter = nodemailer.createTransport({
        host,
        port,
        secure: false,
    }) 
}

export function send(data) {
    if(transporter) throw Error('Missing transporter');

    const response = await transporter.sendMail({
        from: globalSMTPConfig.serverMail,
        ...data
    });

    console.log('from mail sent to $[data.to]');
    return response;

}

const config = {
    host: 'localhost',
    port: 1025,
    serverMail: 'server@mail.es'
}

initSmptServer(config);

send({
  from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
  to: "bar@example.com, baz@example.com",
  subject: "Hello ",
  text: "Hello world?",
  html: "<b>Hello world?</b>",
});