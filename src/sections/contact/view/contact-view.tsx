import { Button } from "@mui/material";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const ContactView: FC = () => {
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      ContactView
      <Button onClick={goHomePage}>Home page</Button>
    </div>
  );
};

export default ContactView;
