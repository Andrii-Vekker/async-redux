import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, addBookToList, removeBookToList } from "../redux/booksOperations";


export default function Books() {
  const books = useSelector(state => state.books.items)

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchBooks()); 
   
    }, [dispatch]);
    

  return (
    <div>Books
      <ul>
        {books.map(book => {
        
          return <li key={book.id}>{book.name}  :  {book.phone}
            <span style={{ color: "red", cursor: "pointer" }}>&times;</span></li>
})}
      </ul>
    </div>
  )
}
