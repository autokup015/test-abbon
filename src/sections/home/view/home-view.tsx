import { Button } from "@mui/material";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HomeView: FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const goContactPage = () => {
    navigate("/contact");
  };

  return (
    <div>
      HomeView {t("welcome")}
      <Button onClick={goContactPage}>Contact page</Button>
    </div>
  );
};

export default HomeView;
