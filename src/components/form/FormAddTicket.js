import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { addTicketApi } from "../../api/ticketAPI";

function FormAddTicket({ onSave }) {
  // state for handling form and error value
  const [form, setForm] = React.useState({
    detail: "",
    customer: "",
    priority: "",
    date: "",
  });
  const [error, setError] = React.useState({
    detail: { state: false, message: "" },
    customer: { state: false, message: "" },
    priority: { state: false, message: "" },
    date: { state: false, message: "" },
  });

  // form validation function
  const validate = (field) => {
    const { detail, customer, priority, date } = field;
    let err = {
      detail: { state: false, message: "" },
      customer: { state: false, message: "" },
      priority: { state: false, message: "" },
      date: { state: false, message: "" },
    };
    if (detail.length === 0) err.detail = { state: true, message: "Field Required" };
    if (customer.length === 0) err.customer = { state: true, message: "Field Required" };
    if (priority.length === 0) err.priority = { state: true, message: "Field Required" };
    if (date.length === 0) err.date = { state: true, message: "Field Required" };
    setError(err);
    return Object.entries(err).every((v) => v[1].state === false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const field = { ...form, [name]: value };
    validate(field);
    setForm(field);
  };

  const resetForm = () => {
    setForm({
      detail: "",
      customer: "",
      priority: "",
      date: "",
    });
    setError({
      detail: { state: false, message: "" },
      customer: { state: false, message: "" },
      priority: { state: false, message: "" },
      date: { state: false, message: "" },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate(form)) {
      onSave(form);
      resetForm();
    }
  };
  return (
    <Card sx={{ mb: 5 }}>
      <CardContent>
        <Typography variant="h5">
          <b>Add Ticket</b>
        </Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <TextField
                error={error.customer.state}
                helperText={error.customer.message}
                label="Customer Name"
                name="customer"
                value={form.customer}
                onChange={onChange}
                variant="standard"
                sx={{ width: "100%", my: 1 }}
              />
              <TextField
                error={error.detail.state}
                helperText={error.detail.message}
                id="standard-multiline-flexible"
                label="Detail"
                name="detail"
                multiline
                rows={3}
                value={form.detail}
                onChange={onChange}
                maxRows={4}
                variant="standard"
                sx={{ width: "100%", my: 1 }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth sx={{ my: 1 }} error={error.priority.state}>
                <InputLabel>Priority</InputLabel>
                <Select
                  onChange={onChange}
                  value={form.priority}
                  label="Priority"
                  name="priority"
                  variant="standard"
                >
                  <MenuItem value={"high"}>High</MenuItem>
                  <MenuItem value={"medium"}>Medium</MenuItem>
                  <MenuItem value={"low"}>Low</MenuItem>
                </Select>
                <FormHelperText>{error.priority.message}</FormHelperText>
              </FormControl>
              <TextField
                error={error.date.state}
                helperText={error.date.message}
                value={form.date}
                onChange={onChange}
                name="date"
                type="date"
                variant="standard"
                sx={{ width: "100%", mt: 3, pl: 1 }}
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default FormAddTicket;
