import React,{useState,useEffect} from 'react';
import { CCarousel,CCarouselItem,CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const ProductPage = ({fetchedData}) => {
  const {productId} = useParams();
  // const [productData,setProductData] = useState(null)
  const filterProduct = (data)=>{
    console.log(productId)
    const temp = data.filter((item)=>{return item.id == productId })
    console.log(temp[0],productId)
    
    return temp[0]
  }
  // useEffect(()=>{
  //   if(fetchedData){
  //     console.log(filterProduct(fetchedData))
  //     setProductData(filterProduct(fetchedData))
  //   }
  // },[])
  return (
    <div style={{width:"700px",height:"400px"}}>
      {
        fetchedData && 
      <div>
        <CCarousel controls indicators dark>        
        {
            filterProduct(fetchedData).images.map((item)=>{
                return(
                    <CCarouselItem>
                        <CImage className="d-block w-100" src={item} alt="slide 1" width={400} height={300} />
                    </CCarouselItem>
                )
            })
        }
        </CCarousel>
      </div>
       }
         <div>
           {/* {console.log(filterProduct(fetchedData))} */}
       {
        fetchedData && 
        Object.keys(filterProduct(fetchedData)).map((key)=>{
          return(
              <li>{filterProduct(fetchedData)[key]}</li>
              // <ul>
              //   <li>{item.category}</li>
              //   <li>{item.description}</li>
              //   <li>{item.discountPercentage}</li>
              //   <li>{item.price}</li>
              //   <li>{item.rating}</li>
              //   <li>{item.stock}</li>
              //   <li>{item.title}</li>
              // </ul>
          )
        })
      }
      </div>
    </div>
  )
}

export default ProductPage
