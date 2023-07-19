import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import React from "react";
import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function NavBars() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { user, signout } = useAuth();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessibleForwardIcon />
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{ mx: 1 }}
            >
              Fast testi
            </Typography>
          </Box>
          <ButtonGroup
            variant="text"
            sx={{ mx: 10, width: 1 / 3, flexGrow: "1" }}
          >
            <Button component={RouterLink} to="/about">
              About
            </Button>
            <Button component={RouterLink} to="/containers">
              Containers
            </Button>
            <Button component={RouterLink} to="/posts">
              Posts
            </Button>
            <Button component={RouterLink} to="/counter">
              Counters
            </Button>
            <Button component={RouterLink} to="/value">
              Value
            </Button>
            <Button component={RouterLink} to="/navbar">
              NavBars
            </Button>
          </ButtonGroup>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button onClick={goBack}>Назад</Button>
            {user ? (
              <Button
                onClick={() =>
                  signout(() => navigate("/login", { replace: true }))
                }
              >
                Выйти
              </Button>
            ) : (
              <Button onClick={() => navigate("/login", { replace: true })}>
                Войти
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default NavBars;
