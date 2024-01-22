import { Flare } from "@mui/icons-material";
import React from "react";

const CartItem = ({ handleAddToCart, handleRemoveFromCart, item }) => {
  return (
    <div className="cartItem"
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     backgroundColor:"rgba(0,0,0,0.1)",
    //     marginBottom:"5px",
    //     borderRadius:"10px"
    //   }}
    >
      {console.log(item)}
      <div  style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        <img style={{ height: "120px", width: "90px" }} src={item.thumbnail} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          alignItems:"center",
          marginRight:"40px"
        }}
      >
        <div
        style={{
            height: "45px",
            width: "45px",
            borderRadius: "10px",
            backgroundColor: "red",
            color: "white",
            fontSize: "30px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            cursor:"pointer"
          }}
          onClick={()=>{
            // handleAddToCart(item)
          }}
        >+</div>
        <div
        style={{
            height: "45px",
            width: "45px",
            borderRadius: "10px",
            backgroundColor: "red",
            color: "white",
            fontSize: "40px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            paddingBottom:"4px",
            cursor:"pointer"
          }}
          onClick={()=>{
            // handleRemoveFromCart(item.id)
          }}
        >-</div>
      </div>
    </div>
  );
};

export default CartItem;
