const account = [
  {
    email: "admin@mail.com",
    password: "12345678",
    role: "admin",
    avatar: "https://en.wikipedia.org/wiki/Candi_of_Indonesia#/media/File:Stupa_Borobudur.jpg",
  },
  {
    email: "guest@mail.com",
    password: "12345678",
    role: "guest",
    avatar: "https://en.wikipedia.org/wiki/Candi_of_Indonesia#/media/File:Stupa_Borobudur.jpg",
  },
];
const token = "token-admin";

const loginWithEmailApi = (email, password) => {
  let res = { status: 404, data: {} };

  return new Promise((resolve, reject) => {
    let valid = { email: false, password: false };
    const findAccount = account.find((acc) => acc.email === email);
    if (findAccount) {
      valid.email = true;
      if (password === findAccount.password) valid.password = true;
    }

    if (Object.entries(valid).every((v) => v[1] === true)) {
      res.status = 200;
      res.data = { role: findAccount.role, token, avatar: findAccount.avatar };
      setTimeout(() => resolve(res), 2000);
    } else {
      res.status = 401;
      res.data = valid;
      setTimeout(() => reject(res), 2000);
    }
  });
};

const loginWithTokenApi = (reqToken) => {
  let res = { status: 404, data: {} };
  return new Promise((resolve, reject) => {
    if (reqToken === token) {
      res.status = 200;
      res.data = { role: account.role, token };
      setTimeout(() => resolve(res), 2000);
    } else {
      res.status = 401;
      setTimeout(() => reject(res), 2000);
    }
  });
};

export { loginWithEmailApi, loginWithTokenApi };
