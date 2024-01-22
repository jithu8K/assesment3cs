import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import CartItem from "./CartItem";
const drawerWidth = '60%';
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight({
  totalItems,
  cartItems,
  handleRemoveFromCart,
  handleAddToCart,
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="cart"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: "none" }) }}
      >
        {/* <MenuIcon /> */}
        <StyledBadge badgeContent={totalItems} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div>

        {
          cartItems.length !== 0 &&
          cartItems.map((item)=>{
            console.log(item)
            return(
              <CartItem item={item}
              handleRemoveFromCart={handleRemoveFromCart}
              handleAddToCart={handleAddToCart}
              />
            )
          })
        }
        </div>
      </Drawer>
    </Box>
  );
}
