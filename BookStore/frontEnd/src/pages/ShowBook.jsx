
import BackButton from '../../component/BackButton';
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Spinner from '../../component/spinner'


const ShowBook = () => {
  const [content, setContent]= useState({});//handling the data
  const [loading ,setLoading]= useState(false);  
  const {id}= useParams();//to know what was the user clickd

  

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/books/${id}`)
    .then((e)=>{
      setContent(e.data)
      setLoading(false)
      
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  },[])
  
  return (
    <div className='p-4'><BackButton/>
    <h1 className='text-3xl my-4'>show book</h1>
    {loading ? (<Spinner/>) : (
      <section className='flex flex-col border-2 border-sky-400 rounded -xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4'>id</span>
          <span>{content._id}</span>
        </div>

         <div className='my-4'>
          <span className='text-xl mr-4'>title</span>
          <span>{content.title}</span>
        </div>

         <div className='my-4'>
          <span className='text-xl mr-4'>Author</span>
          <span>{content.author}</span>
        </div>

         <div className='my-4'>
          <span className='text-xl mr-4'>publishYear</span>
          <span>{content.publishYear}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4'>created time</span>
          <span>{new Date(content.createdAt).toString()}</span>
        </div>

        <div className='my-4'>
          <span className='text-xl mr-4'>last updated time</span>
          {new Date(content.updatedAt).toString()}
        </div>


      </section>
    ) }
    
    
    
    </div>
    

     
  )
}

export default ShowBook