import { Resend } from "resend";

export const sendMail = async (from?: string, msg?: string) => {
  if (!from || !msg) return;

  const resend = new Resend(import.meta.env.PUBLIC_API_KEY_RESEND);

  const result = await resend.emails.send({
    from,
    to: [import.meta.env.PUBLIC_FROM_EMAIL_RESEND],
    subject: "KREKEET",
    html: `<p>${msg}</p>`,
  });

  return result;
};
