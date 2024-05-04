import {Link}from 'react-router-dom';
import { AiOutlineEdit  } from "react-icons/ai"
import {  BsInfoCircle  } from "react-icons/bs"
import {  MdOutlineAddBox, MdOutlineDelete} from "react-icons/md"

const Table = ({books}) => {
  return (
    <div><table className='w-full border-sepereate border-spacing-2' >
             <thead>
              <tr>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Title</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Publish year</th>
                <th className='border border-slate-600 rounded-md rounded-md'>Operations</th>
              </tr>
             </thead>

             <tbody>
              {books.map((book,index)=>{
                return (
                <tr key={book._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
                   <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishYear}</td>

                     <td className='border border-slate-700 rounded-md text-center'>
                      <div className='flex justify-center gap-x-4'>
                        {/* book.id is used for getting params (to know which one is user clicked) */}
                        <Link to={`/books/show/${book._id}`}> <BsInfoCircle className='text-2xl text-green-800'/>info</Link>
                        <Link to={`/books/edit/${book._id}`}> <AiOutlineEdit className='text-2xl text-yellow-600'/>edit</Link>
                        <Link to={`/books/delete/${book._id}`}> <MdOutlineDelete className='text-2xl text-red-600'/>delete</Link>
                      </div>
                     </td>
                </tr>
             )
              })}

             </tbody>
             
          </table></div>
  )
}

export default Table