import React,{useState,useEffect} from 'react'
import ImageCard from './Card'
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

const HomePage = ({fetchedData,setFetchedData}) => {
// console.log(fetchedData)
const [inputData,setInputData] = useState("")
const [filteredData, setFilteredData] = useState(fetchedData && fetchedData);
const[currentPage,setCurrentPage] = useState(1);
const [currentProducts,setCurrentProducts] = useState(null)
// const [currentProducts,setCurrentProducts] = useState(fetchedData && fetchedData)
const productsPerPage = 10

// console.log(filteredData)

  const handleSearch = (e)=>{
    setInputData(e.target.value)
    const filteredList = fetchedData.filter((item)=>{
      return item.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setFilteredData(filteredList)
        // setCurrentProducts(filteredData.slice(indexOfFirstProduct,indexOfLastProduct))

  }
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = filteredData.slice(indexOfFirstProduct,indexOfLastProduct);
  const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  useEffect(()=>{
    // setFilteredData(fetchedData)
    // if(!filteredData){
      setFilteredData(fetchedData)
    // }
  },[fetchedData])
  // },[])
  useEffect(()=>{
    if(filteredData){
      setCurrentProducts(filteredData.slice(indexOfFirstProduct,indexOfLastProduct))
    }
  },[filteredData,currentProducts])
  return (
    <div 
    className='home-main-container'> 

      <div className='search-bar-container'>
        {
          filteredData && 
          <>
            <input type="text"
            value={inputData}
            onChange={handleSearch}
            />
            <button>→</button>
          </>
        }
      </div>    
      <div>
      <CCarousel controls indicators dark>
            {fetchedData && fetchedData.map((item) => {
              return (
                <CCarouselItem>
                  <CImage
                    className="d-block w-100"
                    src={item.thumbnail}
                    alt="slide 1"
                    width={600}
                    height={400}
                  />
                </CCarouselItem>
              );
            })}
          </CCarousel>
      </div>
       <div className='home-sub-container'>
        {
            currentProducts &&
            currentProducts.map((item)=>{
                return(
                    <ImageCard
                    imageSrc = {item.thumbnail}
                    title = {item.title}
                    brand = {item.brand}
                    description={item.description}
                    price={item.price}
                    id={item.id}
                    />
                )
            })
        }
       </div>
       <div className='pagination-container'>
        { filteredData &&
          Array.from({length:Math.ceil(filteredData.length/productsPerPage)},(_,i)=>i+1).map((page)=>{
            return (
              <button key={page}
              onClick={()=>paginate(page)}>
                {page}
              </button>
            )
          })
        }
       </div>
    </div>
  )
}

export default HomePage
