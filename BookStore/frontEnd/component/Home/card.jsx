      
// Card.js
//import { Link } from 'react-router-dom';
import SingleCard from './SingleCard';

const Card = ({ books}) => {

  //console.log(books)
  return (
    <section className="flex flex-wrap justify-center">
      {books.map((book) => {
        return (
          <SingleCard key={`${book._id}-${book.title}`} book={book} />
        );
      })}
    </section>
  );
};

export default Card;

