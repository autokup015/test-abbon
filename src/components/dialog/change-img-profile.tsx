import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import { useUserProfileContext } from "../../provider/user-profile-img";
import { useTranslation } from "react-i18next";

type TChangeImgProfileProps = {
  open: boolean;
  onClose: () => void;
};

// ---------------------------------------------------------------------------------

const ChangeImgProfile: FC<TChangeImgProfileProps> = ({ open, onClose }) => {
  const { t } = useTranslation();

  const {
    getUserProfileImg,
    listImg,
    selectedImg,
    onSelected,
    onClearSelected,
    onSaveImg,
  } = useUserProfileContext();

  const handleOnClose = () => {
    onClearSelected();

    onClose();
  };

  const handleSaveImg = () => {
    onSaveImg();

    handleOnClose();
  };

  return (
    <Dialog open={open} onClose={handleOnClose} fullWidth maxWidth="sm">
      <DialogTitle> {t("navbar.dialog_change_img.title")} </DialogTitle>

      <DialogContent>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Box
              component="img"
              src={selectedImg?.path || getUserProfileImg}
              width={200}
              sx={{ cursor: "pointer" }}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <Grid container spacing={2} textAlign="center">
              {listImg.map((item) => {
                const activeItem = selectedImg?.name === item.name ? 700 : 400;

                return (
                  <Grid item xs={6} key={`img-${item.name}`}>
                    <Box
                      component="img"
                      src={item.path}
                      width={100}
                      sx={{ cursor: "pointer" }}
                      onClick={() => onSelected(item)}
                    />

                    <Typography variant="body1" fontWeight={activeItem}>
                      {item.name}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleOnClose}
            data-testid="button-close"
          >
            {t("button.close")}
          </Button>

          <Button variant="contained" color="primary" onClick={handleSaveImg}>
            {t("button.confirm")}
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ChangeImgProfile;
