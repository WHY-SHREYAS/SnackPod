import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Home() {
    
    const [foodCat, setFoodCat] = useState(['Pizza', 'Burger', 'Pasta'])
    const [food_item, setfood_item] = useState([])
    

    const loadData = async ()=>{

        let response = await fetch("http://localhost:3000/api/foodData", {
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            }
        })

        response = await response.json()
        

        setfood_item = response[0]
        setFoodCat = response[1]
        // console.log(response[0], response[1])

    }
    
    
    useEffect(()=>{
        loadData()
    }, [])

    
return (
  <>
    <div><Navbar /></div>
    <div><Carousel /></div>
    <div className='container'>
      {
        foodCat.length > 0 ? (
          foodCat.map((data, index) => ( <div>
            <div key={data._id} className = "fs-3 m-3"> {data.CategoryName} 
            </div>
            <hr />
            </div>
          ))
        ) : (
          <div>{foodCat}</div>
        )
      }
      <Card />
    </div>
    <div><Footer /></div>
  </>
);

}

