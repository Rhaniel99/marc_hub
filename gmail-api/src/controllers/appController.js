import nodemailer from "nodemailer";
import Mailgen from "mailgen";

// ? Credenciais
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

// ? Auth 2.0
const CLIENTID = process.env.OAUTH_CLIENTID;
const CLIENTSECRET = process.env.OAUTH_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;

/** Para testes de email */
export const sendConfirmationEmail = async (req, res) => {
  // Apenas necessário se você não tiver uma conta de email real para testes
  let testAccount = await nodemailer.createTestAccount();

  // Cria um objeto transportador reutilizável usando o transporte SMTP padrão
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
      user: testAccount.user, // usuário etéreo gerado
      pass: testAccount.pass, // senha etérea gerada
    },
  });

  // Envia email com o objeto de transporte definido
  let message = {
    from: '"Fred Foo 👻" <foo@example.com>', // endereço do remetente
    to: "jiced60946@regishub.com", // lista de destinatários
    subject: "Hello ✔", // Linha de assunto
    text: "Você foi registrado com sucesso por nós.", // corpo do texto simples
    html: "<b>Você foi registrado com sucesso por nós!</b>", // corpo html
  };

  transporter
    .sendMail(message)
    .then((info) => {
      return res.status(201).json({
        msg: "Você acabou de receber um email!",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};

/** Mandando email para um usuário real */
export const sendEmail = (req, res) => {
    const { userEmail } = req.body;
  
    // Verifica se o parâmetro userEmail foi fornecido
    if (!userEmail) {
      return res.status(400).json({ error: "O parâmetro userEmail é obrigatório." });
    }
  
    let config = {
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL,
        pass: PASSWORD,
        clientId: CLIENTID,
        clientSecret: CLIENTSECRET,
        refreshToken: REFRESH_TOKEN,
      },
    };
  
    let transporter = nodemailer.createTransport(config);
  
    // ? Bloco 1
    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Bora clica aqui confia",
        link: "https://mailgen.js/",
        },
    });
  
    // ? Bloco 2 (Body) Define a estrutura do corpo do e-mail
    let response = {
      body: {
        greeting: 'Kirido',
        signature: 'Atenciosamente',
        intro: "Seu bora bill chegou!",
        table: {
          data: [
            {
              item: "Item 1",
              description: "Uma descrição bem fofa",
              price: "$10.99",
            },
            {
              item: "Item 2",
              description: "Outra descrição fofa",
              price: "$15.99",
            },
            // Adicione mais itens conforme necessário
          ],
        },
        outro: "Procurando por doutor rancho crutis",
      },
    };
  
    let mail = MailGenerator.generate(response);
  
    let message = {
      from: EMAIL,
      to: userEmail,
      subject: "Abre ai, tenho uma proposta",
      html: mail,
    };
  
    // Envia o e-mail
    transporter
      .sendMail(message)
      .then(() => {
        return res.status(201).json({
          msg: "Você enviou um email.",
        });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
  };
  