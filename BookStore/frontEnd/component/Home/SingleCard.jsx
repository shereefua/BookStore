// SingleCard.js
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BooksModal from "./BooksModal";
import { useState } from "react";

const SingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-4 mb-4">
      <h3 className="text-lg font-bold mb-2">{book.title}</h3>
      <h4 className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-lg" />
      </h4>

      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-lg" />
        <p className="my-1">{book.author}</p>
      </div>

      <span className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModel(true)}
        />

        <Link to={`/books/show/${book._id}`}>
          <BsInfoCircle className="text-lg text-green-800 hover:text-black" />
          Details
        </Link>

        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-lg text-yellow-600 hover:text-black" />
          Edit
        </Link>

        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-600 hover:text-black" />
          Delete
        </Link>
      </span>

      {showModel && (
        <BooksModal book={book} onclose={() => setShowModel(false)} />
      )}
    </div>
  );
};

export default SingleCard;
