import BackButton from '../../component/BackButton';
import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate ,useParams} from "react-router-dom";
import Spinner from '../../component/spinner'
import {useSnackbar} from 'notistack'

const  EditBook = () => {
const [title,setTitle]= useState('');//handling the data
const [author,setAuthor]= useState('');//handling the data
const [publishYear,setPublishYear]= useState('');//handling the data
 const [loading ,setLoading]= useState(false)

const Navigate= useNavigate();
const {id}= useParams();
const {enqueueSnackbar}=useSnackbar();

useEffect(()=>{
 setLoading(true);
 axios.get(`http://localhost:5000/books/${id}`)
 .then((res)=>{
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear)
      setTitle(res.data.title)
      enqueueSnackbar('book edited succufuly',{variant:'success'})
 }).catch((err)=>{
    setLoading(false)
    //alert('an error happend , check console');
    enqueueSnackbar("error", { variant: "error" });
    console.log(err)
 })
},[])





 const HandleEditBook=()=>{
  const dtaa={
    title,
    author,
    publishYear,
  };
  setLoading(true);

  axios.put(`http://localhost:5000/books/${id}`,dtaa)
  .then(()=>{
    setLoading(false)
    
    Navigate('/')//this will automaticaly navigate to back after the task
  })
  .catch((err)=>{
   // setLoading(false)
    console.log(err)
    alert('an error occured, plese chck console')
  })
    
 }


  return (
    <section className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>create book</h1>

      {loading ? <Spinner/> : ''}

      <section className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx auto '>

          <div id="success-message" className="">
            <p>Book successfully created!</p>
           </div>

        <div className='my-4'>
          <label className='text xl mr-4 text-gray-500'>title</label>
          <input
           type='text'
           placeholder='enter title'
           value={title}
           onChange={(e)=> setTitle(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

          <div className='my-4'>
          <label className='text xl mr-4 text-gray-500'>author</label>
          <input
           type='text'
           placeholder='enter author namre'
           value={author}
           onChange={(e)=> setAuthor(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

          <div className='my-4'>
          <label className='text xl mr-4 text-gray-500'>PublishYear</label>
          <input
           type='number'
           placeholder='enter year'
           value={publishYear}
           onChange={(e)=> setPublishYear(e.target.value)}
           className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={HandleEditBook}>save</button>

      </section>

    </section>
  )
}

export default EditBook;
