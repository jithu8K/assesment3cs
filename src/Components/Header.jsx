import React from "react";
import { Link } from "react-router-dom";
import projectLogo from "./footerLogo.png";
import "./styles.css";
import PersistentDrawerRight from "./draw";

const Header = ({
  totalItems,
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  console.log(cartItems);
  return (
    <div className="header-component">
      <div>
        <img src={projectLogo} alt="" />
      </div>
      <div className="header-comp-sub">
        <Link to="/">
          <div className="header-home-btn">Home</div>
        </Link>
        <div>
          <PersistentDrawerRight
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            totalItems={totalItems}
            cartItems={cartItems}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React from 'react'
// import { Link } from 'react-router-dom'
// import projectLogo from "./footerLogo.png"
// import "./styles.css"
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// const Header = () => {
//   const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//       right: -3,
//       top: 13,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: '0 4px',
//     },
//   }));
//   return (
//     <div className='header-component'>
//       <div>
//         <img src={projectLogo} alt="" />
//       </div>
//       <div className='header-comp-sub'>
//         <Link to="/"><div className='header-home-btn'>Home</div></Link>
//         <div>
//           <IconButton aria-label="cart">
//       <StyledBadge badgeContent={4} color="secondary">
//         <ShoppingCartIcon />
//       </StyledBadge>
//     </IconButton>
//     </div>
//       </div>
//     </div>
//   )
// }

// export default Header
