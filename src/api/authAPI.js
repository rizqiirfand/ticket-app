const loginWithEmailApi = (email, password) => {
  console.log({ email, password });
  return new Promise((resolve, reject) => {
    let valid = { email: false, password: false };
    if (email === "admin") valid.email = true;
    if (email === "12345678") valid.password = true;
    if (Object.entries(valid).every((v) => v[1] === true)) {
      setTimeout(resolve({ role: "admin", token: "token-admin" }), 2000);
    } else {
      setTimeout(reject(valid), 2000);
    }
  });
};

export { loginWithEmailApi };
