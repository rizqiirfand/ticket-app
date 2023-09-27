import { Dashboard, ConfirmationNumberRounded } from "@mui/icons-material";

const admin = [
  {
    title: "Overview",
    link: "/overview",
    icon: <Dashboard />,
  },
  {
    title: "Ticket",
    link: "/tickets",
    icon: <ConfirmationNumberRounded />,
  },
];

const guest = [
  {
    title: "Add Ticket",
    link: "/tickets",
    icon: <ConfirmationNumberRounded />,
  },
];

export const navigation = (role) => {
  if (role === "admin") {
    return admin;
  } else if (role === "guest") {
    return guest;
  }
};
