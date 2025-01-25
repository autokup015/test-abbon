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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
      <DialogTitle>{t("contact.list.dialog_text_title")}</DialogTitle>

      <DialogContent>
        {t("contact.list.dialog_text_description")} {initialValue?.name} ?
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          color="inherit"
          onClick={onClose}
          data-testid="button-cancel"
        >
          {t("button.cancel")}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={confirmDelete}
          data-testid="button-confirm"
        >
          {t("button.confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContactDialog;
