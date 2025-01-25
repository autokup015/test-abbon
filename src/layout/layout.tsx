import { Box, Stack } from "@mui/material";

import { Outlet, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import type { FC } from "react";

import { useState } from "react";
import ChangeLanguages from "../components/header/change-languages";
import UserImgProfile from "../components/header/user-img-profile";
import Footer from "../components/footer/footer";
import ListSidebar from "../components/sidebar/list-sidebar";

const drawerWidth = 240;

// ---------------------------------------------------------------------------------

const Layout: FC = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const goHomePage = () => navigate("/");

  const drawer = (
    <Box>
      <Stack height={64} alignItems="center" justifyContent="center">
        <Box
          component="img"
          src="/logo-rain.svg"
          width={30}
          height={30}
          onClick={goHomePage}
          sx={{
            cursor: "pointer",
          }}
        />
      </Stack>

      <Divider />

      <ListSidebar />
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" noWrap>
              Chonlatee Sriwichai
            </Typography>

            <Stack direction="row" alignItems="center">
              <ChangeLanguages />

              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 2, bgcolor: "white" }}
              />

              <UserImgProfile />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={undefined}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box p={3} minHeight="calc(100vh - 100px)">
          <Toolbar />

          <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
