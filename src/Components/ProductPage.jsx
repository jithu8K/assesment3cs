import React, { useState, useEffect } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import "./styles.css";
// import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import Drawer from '@mui/material/Drawer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { AddShoppingCart } from "@material-ui/icons";

const ProductPage = ({ fetchedData,handleAddToCart }) => {
  const { productId } = useParams();
  const filterProduct = (data) => {
    const temp = data.filter((item) => {
      return item.id == productId;
    });
    return temp;
  };

  return (
    <div className="product-page-main">
      {fetchedData && (
        <div className="carousel-container">
          <CCarousel controls indicators dark>
            {filterProduct(fetchedData)[0].images.map((item) => {
              return (
                <CCarouselItem>
                  <CImage
                    className="d-block w-100"
                    src={item}
                    alt="slide 1"
                    width={600}
                    height={400}
                  />
                </CCarouselItem>
              );
            })}
          </CCarousel>
        </div>
      )}
      
      <div className="table-data">
            {
                fetchedData && 
                <button
                onClick={()=>{
                  handleAddToCart(filterProduct(fetchedData)[0])
                }}
                style={{
                  height: "40px",
                  width: "155px",
                  border:"none",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  color: "red",
                  fontSize: "20px", 
                  fontWeight:"600",
                  marginBottom:"10px",
                              
               
                }}
                >Add To Cart</button>
            }
        <table>
        {fetchedData &&

           
          filterProduct(fetchedData).map((item) => {
            return (
              <tbody>
                  <tr>
                    <td>Brand</td>
                    <td>-</td>
                    <td>{item.brand}</td>
                  </tr>
                  <tr>
                  <td>Category</td>
                  <td>-</td>
                  <td>{item.category}</td>
                  </tr>
                  <tr>
                  <td>Description</td>
                  <td>-</td>
                  <td>{item.description}</td>
                  </tr>
                  <tr>
                  <td>DiscountPercent</td>
                  <td>-</td>
                  <td>{item.discountPercentage}</td>
                  </tr>
                  <tr>
                  <td>Price</td>
                  <td>-</td>
                  <td>{item.price}</td>
                  </tr>
                  <tr>
                  <td>Rating</td>
                  <td>-</td>
                  <td>{item.rating}</td>
                  </tr>
                  <tr>
                  <td>Stock</td>
                  <td>-</td>
                  <td>{item.stock}</td>
                  </tr>
                  <tr>
                  <td>Title</td>
                  <td>-</td>
                  <td>{item.title}</td>
                  </tr>
              </tbody>
            );
          })}
          </table>
      </div>
    </div>
  );
};

export default ProductPage;
