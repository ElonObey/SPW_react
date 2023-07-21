import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../components/styles/main.css";
import {
  Button,
  Container,
  FormControl,
  TextField,
  Box,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();
  const valueRef = useRef();
  const fromPage = location.state?.from?.pathname || "/";

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const user = form.username.value;
  //   signin(user, () => navigate(fromPage, { replace: true }));
  // };

  const handleSubmitv2 = () => {
    const user = valueRef.current.value;
    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <>
      {/* <div className="login_block">
        <h1> Login page</h1>
        <p> Для перехода на {fromPage} необходимо авторизоваться </p>
        <div className="login_item">
          <form onSubmit={handleSubmit}>
            <input name="username" type="text" />
            <button type="submit"> login</button>
          </form>
        </div>
      </div> */}

      <Container
        sx={{
          mt: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper sx={{ py: 9, px: 5 }}>
          <Stack spacing={6} alignItems="center">
            <Typography variant="h4"> Login in</Typography>
            <FormControl sx={{ my: 10, gap: 5 }}>
              <TextField
                variant="standard"
                label="Your name:"
                inputRef={valueRef}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmitv2}
              >
                Login
              </Button>
            </FormControl>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
