import { useState, type FC } from "react";

import { Avatar } from "@mui/material";

import ChangeImgProfile from "../dialog/change-img-profile";
import { useUserProfileContext } from "../../provider/user-profile-img";

// ---------------------------------------------------------------------------------

const UserImgProfile: FC = () => {
  const { getUserProfileImg } = useUserProfileContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Avatar
        src={getUserProfileImg}
        sx={{ width: 33, height: 33, cursor: "pointer" }}
        onClick={() => setIsOpen(true)}
      />

      {/* DIALOG */}

      <ChangeImgProfile open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default UserImgProfile;
