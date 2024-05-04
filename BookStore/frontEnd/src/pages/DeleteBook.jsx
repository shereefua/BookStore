import React, { useEffect,useState } from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';
import BackButton from '../../component/BackButton';
import  Spinner from '../../component/spinner.jsx';
import { useSnackbar } from "notistack";




const DeleteBook = () => {
const [loading, setLoading]= useState(false);
const navigate = useNavigate();
const {id} = useParams()
const { enqueueSnackbar } = useSnackbar();

const handleDeleteBook= ()=>{
  setLoading(true);
  axios.delete(`http://localhost:5000/books/${id}`)
  .then(()=>{
    setLoading(false);
    enqueueSnackbar('deleted succufuly', {variant:'success'})
    navigate('/')
  }).catch(()=>{
    setLoading(false)
       enqueueSnackbar("error", { variant: "error" });
    //alert('an error happened , check console')
  })

}
  return (
      
    <section className='p-4'>
      <span><BackButton/></span>
     
      {loading ? <Spinner/> : ''}

      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>

        <h3 className='text-2xl'> are u sure want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full'   onClick={handleDeleteBook}>
            DeleteBook
        </button>

      </div>



            


    </section>



    
  )
}

export default DeleteBook