import { Box, Button, IconButton, TextField } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import React from "react";
import { useAuth } from "../../hooks/useAuth";

function FormLogin() {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const [error, setError] = React.useState({ email: false, password: false });
  const { loginWithEmail, authLoad } = useAuth();

  const onChange = (e) => {
    const { name, value } = e.target;
    const field = { ...form, [name]: value };
    validate(field);
    setForm(field);
  };

  const validate = (field) => {
    const { email, password } = field;
    let err = { email: false, password: false };
    if (email.length === 0) err.email = true;
    if (password.length < 8) err.password = true;
    setError(err);
    return Object.entries(err).every((v) => v[1] === false);
  };

  const onSubmit = () => {
    if (validate(form)) loginWithEmail(form.email, form.password);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={{ my: "1rem" }}>
        <TextField
          id="form-email"
          label="Email"
          error={error.email}
          helperText={"Field Required"}
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
          error={error.password}
          helperText={"Minimum Input 8 Character"}
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
        <Button variant="contained" type="submit" onClick={onSubmit}>
          {authLoad ? "loading" : "Login"}
        </Button>
      </Box>
    </>
  );
}

export default FormLogin;
