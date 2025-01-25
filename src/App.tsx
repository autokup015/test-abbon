import type { FC } from "react";

import { I18nProvider } from "./locales";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { UserProfileImgProvider } from "./provider/user-profile-img";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";
import { theme } from "./provider/font-family";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <I18nProvider>
        <UserProfileImgProvider>
          <RouterProvider router={router} />
        </UserProfileImgProvider>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;
