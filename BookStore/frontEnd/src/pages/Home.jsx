import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {Link}from 'react-router-dom';
import { AiOutlineEdit  } from "react-icons/ai"
import { BsInfoCircle  } from "react-icons/bs"
import {  MdOutlineAddBox, MdOutlineDelete} from "react-icons/md"
import moduleName from '../../component/spinner.jsx';


const Home = () => {
  const [books, setBooks]= useState([]);
  const [loading ,setLoading]= useState(false)


  useEffect(() => {
    console.log(window.location.origin)
    setLoading(true);
   
    axios.get("http://localhost:5000/books")
    .then((res)=>{
      console.log(res)
     
      setBooks(res.data.data)
      setLoading(false)
    })
     .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });
  }, []);


  return (
    <div className='p-4'></div>
  )
}

export default Home