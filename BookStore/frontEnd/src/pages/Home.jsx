import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {Link}from 'react-router-dom';
import  Spinner from '../../component/spinner.jsx';
import {  MdOutlineAddBox, MdOutlineDelete} from "react-icons/md"
import Card from '../../component/Home/card.jsx';
import Table from '../../component/Home/table.jsx'


const Home = () => {
  const [books, setBooks]= useState([]);//handling data
  const [loading ,setLoading]= useState(false);//
  const [showTable, setShowTable]=useState('table')//handling table format and card type


  useEffect(() => {
    //console.log(window.location.origin)
    setLoading(true);
   
    
    axios.get("http://localhost:5000/books")
    .then((res)=>{
  
      setBooks(res.data.data)
      console.log("Books data:", books); // to check weather its empty or not
      setLoading(false)
    })
    .then(()=>{
     console.table(books)//to check that books having data or not
    })
     .catch((error) => {
    console.error("Error fetching data:", error);
   
  });
  
  }, []);


  return (
    <section className='p-4'>


       <div className='flex justify-between items-center'>
         <h1 className='text - 3xl my-8'>Books List</h1>

           {/*buttons for table and card type */}
            <div className='flex jsutify-center items-center gap-x-4'>
                <button 
                className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                  onClick={()=> setShowTable('table')}>
                   TABLE
                </button>

                  <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                      onClick={()=> setShowTable('card')}>
                        CARD
                  </button>
            </div>


            <Link to='/books/create'>
              <MdOutlineAddBox className='text-sky-800  text-2xl'/>
              create a new book
            </Link>
          </div>
          
          
          {
  loading ? (
    <Spinner />
  ) : (
    showTable === 'table' ? (
     <Table books={books} /> // books having object ,(using prop drill method)
    ) : (
      <Card books={books} />
    )
  )
}
    </section>
  )
}

export default Home