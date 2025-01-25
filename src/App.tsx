import type { FC } from "react";

import { I18nProvider } from "./locales";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { UserProfileImgProvider } from "./provider/user-profile-img";

const App: FC = () => {
  return (
    <I18nProvider>
      <UserProfileImgProvider>
        <RouterProvider router={router} />
      </UserProfileImgProvider>
    </I18nProvider>
  );
};

export default App;
