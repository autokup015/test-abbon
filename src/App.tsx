import type { FC } from "react";

import { I18nProvider } from "./locales";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App: FC = () => {
  return (
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  );
};

export default App;
