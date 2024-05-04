
import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

//book contains data, onclose to closee the modal
const BooksModal = ({book, onclose}) => {
  return (
    <section className="fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 z-50 flex justify-center items"
     onClick={onclose}>

    <div onClick={(event)=> event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col realative">

     <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onclose} />
   
    <h3 className="text-lg font-bold mb-2">{book.title}</h3>

      <h4 className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-lg" />
      </h4>

      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-lg" />
        <p className="my-1">{book.author}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Perferendis possimus, nam ipsa commodi magni nemo saepe numquam pariatur debitis,
         sint esse cum ab ut placeat distinctio quasi vitae! Temporibus, quisquam.
        </p>
      </div>

     </div>
    
    
    
    </section>
  )
}

export default BooksModal;