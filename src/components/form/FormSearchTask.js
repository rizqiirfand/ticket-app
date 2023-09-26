import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { searchTaskApi } from "../../api/searchAPI";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function FormSearchTask() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSearch = (event) => {
    handleClick(event);
    setLoading(true);
    const text = event.target.value;
    searchTaskApi(text)
      .then((res) => setResult(res))
      .finally(() => setLoading(false));
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={handleSearch}
        placeholder="Search Tasks…"
        inputProps={{ "aria-label": "search" }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableAutoFocus={true}
        disableEnforceFocus={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List sx={{ width: 250, maxHeight: 250, overflowY: "scroll" }}>
          {loading ? (
            <CircularProgress sx={{ ml: 14 }} size={20} />
          ) : result.length <= 0 ? (
            <Typography sx={{ m: 1 }} variant="caption" color="gray">
              Task Not Found
            </Typography>
          ) : (
            result.map((dt, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton>
                  <ListItemText primary={dt.title} />
                </ListItemButton>
              </ListItem>
            ))
          )}
        </List>
      </Popover>
    </Search>
  );
}

export default FormSearchTask;
