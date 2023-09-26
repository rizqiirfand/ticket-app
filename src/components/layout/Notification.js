import { Badge, Box, Chip, IconButton, Menu, MenuItem } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useEffect, useState } from "react";
import { getNotifApi } from "../../api/notifAPI";

function Notification() {
  const [notif, setNotif] = useState([]);
  const getNotif = () => getNotifApi().then((res) => setNotif(res));
  useEffect(() => {
    getNotif();
    setInterval(async () => {
      getNotif();
    }, 10000);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleNotifMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={"notif"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {notif.map((ntf) => (
        <MenuItem onClick={handleMenuClose} sx={{ px: "2rem" }}>
          <Badge badgeContent={"new"} color="primary">
            <Chip label={ntf.title} />
          </Badge>
        </MenuItem>
      ))}
    </Menu>
  );
  return (
    <div>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton size="large" color="inherit" onClick={handleNotifMenuOpen}>
          <Badge badgeContent={notif.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }} onClick={handleNotifMenuOpen}>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={notif.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </Box>
      {renderMenu}
    </div>
  );
}

export default Notification;
