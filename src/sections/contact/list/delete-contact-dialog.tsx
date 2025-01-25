import type { FC } from "react";
import type { TCreateList } from "../create/schema/create-schema";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useContactList } from "../../../hook/use-contact-list";

type TDeleteContactDialogProps = {
  open: boolean;
  initialValue: TCreateList | null;
  onClose: () => void;
};

// ---------------------------------------------------------------------------------

const DeleteContactDialog: FC<TDeleteContactDialogProps> = ({
  open,
  initialValue,
  onClose,
}) => {
  const { onDeleteData } = useContactList();

  const confirmDelete = () => {
    if (!initialValue) {
      return;
    }

    onDeleteData(initialValue.id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Delete Contact List</DialogTitle>

      <DialogContent>
        Do you want to delete {initialValue?.name} ?
      </DialogContent>

      <DialogActions>
        <Button variant="contained" color="info" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={confirmDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContactDialog;
