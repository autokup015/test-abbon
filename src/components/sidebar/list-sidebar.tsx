import type { FC } from "react";

import {
  CircularProgress,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import TextDialog from "../dialog/text-dialog";

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
      {
        name: "Current location",
        to: "",
        function: true,
      },
    ],
  },
];

type TCurrentLocation = {
  timestamp: number;
  coords: Coords;
};

type Coords = {
  accuracy: number;
  latitude: number;
  longitude: number;
  altitude: unknown;
  altitudeAccuracy: unknown;
  heading: unknown;
  speed: unknown;
};

// ---------------------------------------------------------------------------------

const ListSidebar: FC = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // --------------------------- Function ---------------------------

  const handleGoPage = (path: string) => {
    navigate(path);
  };

  const currentLocation = () => {
    setIsLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, ErrorPermission);
    }
  };

  const ErrorPermission = () => {
    setIsOpen(true);
  };

  function showPosition(position: TCurrentLocation) {
    const { coords } = position;

    const { latitude, longitude } = coords;

    window.open(`https://www.google.com/maps?q=${latitude},${longitude}`);

    setIsLoading(false);
  }

  return (
    <>
      <List component="nav">
        {navItems.map((item) => {
          if (item.subMenu) {
            return (
              <HandleCollapse
                key={`main-collapse-${item.name}`}
                name={item.name}
                data={item.subMenu}
                isLoading={isLoading}
                handleGoPage={handleGoPage}
                handleCurrentLocation={currentLocation}
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

      {/* DIALOG */}

      <TextDialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setIsLoading(false);
        }}
        title="Error"
        description="Your permission denied"
      />
    </>
  );
};

export default ListSidebar;

// ---------------------------------------------------------------------------------

type THandleCollapse = {
  name: string;
  data: Array<{
    name: string;
    to: string;
    function?: boolean;
  }>;

  handleGoPage: (page: string) => void;
  handleCurrentLocation: () => void;

  isLoading?: boolean;
};

const HandleCollapse: FC<THandleCollapse> = ({
  data,
  name,
  isLoading = false,
  handleGoPage,
  handleCurrentLocation,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* COLLAPSE */}

      {data.map((item, index) => {
        const openIsLoading = isLoading && item.function;

        return (
          <Collapse
            key={`sub-collapse-${item.name}-${index}`}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() =>
                  item.function
                    ? handleCurrentLocation()
                    : handleGoPage(item.to)
                }
              >
                <ListItemText primary={item.name} />

                {openIsLoading && (
                  <CircularProgress size={15} color="primary" />
                )}
              </ListItemButton>
            </List>
          </Collapse>
        );
      })}
    </>
  );
};
