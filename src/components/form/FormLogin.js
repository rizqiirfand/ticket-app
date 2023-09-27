import { Box, Button, CircularProgress, IconButton, TextField } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const { loginWithEmail, authLoad } = useAuth();
  const navigate = useNavigate();

  // state for handling form and error value
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState({
    email: { state: false, message: "" },
    password: { state: false, message: "" },
  });

  // form validation function
  const validate = (field) => {
    const { email, password } = field;
    let err = { email: { state: false, message: "" }, password: { state: false, message: "" } };
    if (email.length === 0) err.email = { state: true, message: "Field Required" };
    if (password.length < 8) err.password = { state: true, message: "Input Minimum 8 character" };
    setError(err);
    return Object.entries(err).every((v) => v[1].state === false);
  };

  // handling onchange input to update state
  const onChange = (e) => {
    const { name, value } = e.target;
    const field = { ...form, [name]: value };
    validate(field);
    setForm(field);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate(form))
      loginWithEmail(form.email, form.password).then((res) => {
        const { status, data } = res;
        if (status === 200) {
          if (data.role === "admin") navigate("/overview");
          if (data.role === "guest") navigate("/tickets");
        } else if (status === 401) {
          const isValid = data;
          let err = { email: false, password: false };
          if (!isValid.email) err.email = { state: true, message: "Wrong Email" };
          if (!isValid.password) err.password = { state: true, message: "Wrong Password" };
          setError(err);
        }
      });
  };

  // state handling for show or hide password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ my: "1rem" }}>
        <TextField
          id="form-email"
          label="Email"
          error={error.email.state}
          helperText={error.email.message}
          name="email"
          onChange={onChange}
          required
          variant="standard"
          sx={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ my: "1rem" }}>
        <TextField
          id="form-password"
          label="Password"
          name="password"
          error={error.password.state}
          helperText={error.password.message}
          variant="standard"
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          sx={{ width: "100%" }}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
      </Box>
      <Box sx={{ mt: "3rem", textAlign: "right" }}>
        <Button variant="contained" type="submit" disabled={authLoad}>
          {authLoad ? <CircularProgress size={20} /> : "Login"}
        </Button>
      </Box>
    </form>
  );
}

export default FormLogin;
