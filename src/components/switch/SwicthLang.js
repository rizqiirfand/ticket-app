import React from "react";
import { useTranslation } from "react-i18next";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { Language } from "@mui/icons-material";

function SwicthLang() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { i18n } = useTranslation();

  const switchLanguange = (val) => {
    i18n.changeLanguage(val);
    handleClose();
  };

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <Language />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Button sx={{ p: 2 }} onClick={() => switchLanguange("en")}>
          En
        </Button>
        <Button sx={{ p: 2 }} onClick={() => switchLanguange("id")}>
          Id
        </Button>
      </Popover>
    </div>
  );
}

export default SwicthLang;
