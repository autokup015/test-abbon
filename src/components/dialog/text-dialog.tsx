import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

import type { FC } from "react";

type TTextDialogProps = {
  open: boolean;
  onClose: () => void;

  title: string;
  description: string;
};

// ---------------------------------------------------------------------------------

const TextDialog: FC<TTextDialogProps> = ({
  open,
  title,
  description,
  onClose,
}) => (
  <Dialog open={open} fullWidth maxWidth="xs">
    <DialogTitle>
      <Box>
        <Typography variant="h5">{title}</Typography>
      </Box>
    </DialogTitle>

    <DialogContent>
      <Box>
        <Typography variant="body1" color="textDisabled">
          {description}
        </Typography>
      </Box>
    </DialogContent>

    <DialogActions>
      <Button variant="contained" color="success" onClick={onClose}>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

export default TextDialog;
