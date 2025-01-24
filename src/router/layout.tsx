import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import "../index.css";

const Layout = () => {
  return (
    <Stack spacing={1}>
      <Header />

      <Outlet />

      <Footer />
    </Stack>
  );
};

export default Layout;

// ---------------------------------------------------------------------------------

const Header = () => {
  return <Box>header</Box>;
};

const Footer = () => {
  return <Box>Footer</Box>;
};
