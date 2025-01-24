import { useState, type FC } from "react";

import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const UserImgProfile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 33, height: 33, cursor: "pointer" }}
        onClick={() => setIsOpen(true)}
      />

      {/* DIALOG */}

      <Dialog open={isOpen} onClose={handleOnClose} fullWidth maxWidth="sm">
        <DialogTitle>เปลี่ยนรูปภาพ</DialogTitle>

        <DialogContent>hello</DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={handleOnClose}>
            <Typography variant="body2">ยกเลิก</Typography>
          </Button>

          <Button variant="contained">
            <Typography variant="body2">ยืนยัน</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserImgProfile;
