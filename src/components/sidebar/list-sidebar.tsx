import type { FC } from "react";

import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";

import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Contact",
    subMenu: [
      {
        name: "List",
        to: "/contact/list",
      },
      {
        name: "Create",
        to: "/contact/create",
      },
    ],
  },
];

// ---------------------------------------------------------------------------------

const ListSidebar: FC = () => {
  const navigate = useNavigate();

  // --------------------------- Function ---------------------------

  const handleGoPage = (path: string) => {
    navigate(path);
  };

  return (
    <List component="nav">
      {navItems.map((item) => {
        if (item.subMenu) {
          return (
            <HandleCollapse
              key={`main-collapse-${item.name}`}
              data={item.subMenu}
              handleGoPage={handleGoPage}
            />
          );
        }

        return (
          <ListItemButton
            key={`button-${item.name}`}
            onClick={() => handleGoPage(item.to)}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default ListSidebar;

// ---------------------------------------------------------------------------------

type THandleCollapse = {
  data: Array<{
    name: string;
    to: string;
  }>;

  handleGoPage: (page: string) => void;
};

const HandleCollapse: FC<THandleCollapse> = ({ data, handleGoPage }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* COLLAPSE */}

      {data.map((item, index) => (
        <Collapse
          key={`sub-collapse-${item.name}-${index}`}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleGoPage(item.to)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
    </>
  );
};
