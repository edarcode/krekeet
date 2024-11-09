export const sendMailService = async (data: Data) => {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

const URL = "https://krekeet-api.onrender.com/send_mail";

type Data = {
  from: string;
  msg: string;
  name?: string;
  countryCode?: string;
  num: number;
  serv: string;
};
