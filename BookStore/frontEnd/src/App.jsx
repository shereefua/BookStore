import React from 'react';
import { Routes,Route } from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/books/create' element={<CreateBook/>}/>
       <Route path='/books/show/:id' element={<ShowBook/>}/>
      <Route path='/book/edit/:id' element={<EditBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
     
      
    </Routes>
    
  )
}

export default App