const loginWithEmailApi = (email, password) => {
  console.log({ email, password });
  return new Promise((resolve, reject) => {
    let valid = { email: false, password: false };
    if (email === "admin") valid.email = true;
    if (password === "12345678") valid.password = true;

    let res = { status: 404, data: {} };

    if (Object.entries(valid).every((v) => v[1] === true)) {
      res.status = 200;
      res.data = { role: "admin", token: "token-admin" };
      setTimeout(() => resolve(res), 2000);
    } else {
      res.status = 401;
      res.data = valid;
      setTimeout(() => reject(res), 2000);
    }
  });
};

export { loginWithEmailApi };
