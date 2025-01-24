import type { FC } from "react";

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@mui/material";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const lang = [
  {
    name: "Thailand",
    img: "/th.svg",
    lang: "th",
  },
  {
    name: "English",
    img: "/en.svg",
    lang: "en",
  },
];

// ---------------------------------------------------------------------------------

const ChangeLanguages: FC = () => {
  const { i18n } = useTranslation();

  const { language } = i18n;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // --------------------------- Function ---------------------------

  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);

    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // --------------------------- Value ---------------------------

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button variant="text" onClick={handleClick}>
        <Box
          component="img"
          src={`/${language}.svg`}
          width={33}
          height={33}
          sx={{
            cursor: "pointer",
          }}
        />
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          {lang.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton onClick={() => onChangeLanguage(item.lang)}>
                <ListItemIcon>
                  <Box component="img" src={item.img} width={25} height={25} />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default ChangeLanguages;
