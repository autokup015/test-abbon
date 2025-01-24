import { Box, ListItemIcon, Stack } from "@mui/material";

import { Outlet, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import InboxIcon from "@mui/icons-material/MoveToInbox";

import MailIcon from "@mui/icons-material/Mail";

import type { FC } from "react";

import { useState } from "react";
import ChangeLanguages from "../components/header/change-languages";
import UserImgProfile from "../components/header/user-img-profile";

const drawerWidth = 240;

const navItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

type Props = {
  window?: () => Window;
};

// ---------------------------------------------------------------------------------

const Layout: FC<Props> = ({ window }) => {
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

  const handleGoPage = (path: string) => {
    navigate(path);
  };

  const goHomePage = () => navigate("/");

  const drawer = (
    <Box>
      <Box
        height={64}
        // sx={{
        //   bgcolor: "#1976d2",
        // }}
      >
        <Typography component="div" variant="h6" onClick={goHomePage}>
          logo
        </Typography>
      </Box>

      <Divider />

      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                onClick={() => handleGoPage(item.to)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          container={container}
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

// ---------------------------------------------------------------------------------

const Footer = () => {
  const sizeIcon = 25;

  const onCallPhone = () => {
    window.location.href = "tel:+1234567890";
  };

  const onSendEmail = () => {
    window.location.href = "mailto:atbochonlatee@gmail.com";
  };

  const onShowLine = () => {
    window.location.href = "https://line.me/ti/p/~autochonlatee";
  };

  return (
    <Box
      height={100}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        borderTop: "1px solid #eee",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Box
          component="img"
          src="/img/phone.svg"
          width={sizeIcon}
          height={sizeIcon}
          sx={{
            cursor: "pointer",
          }}
          onClick={onCallPhone}
        />

        <Box
          component="img"
          src="/img/mail.svg"
          width={sizeIcon}
          height={sizeIcon}
          sx={{
            cursor: "pointer",
          }}
          onClick={onSendEmail}
        />

        <Box
          component="img"
          src="/img/line.svg"
          width={sizeIcon}
          height={sizeIcon}
          sx={{
            cursor: "pointer",
          }}
          onClick={onShowLine}
        />
      </Stack>
    </Box>
  );
};
