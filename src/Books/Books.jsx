import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/booksOperations";


export default function Books() {
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchBooks()); 
   
    }, [dispatch]);
    

  return (
    <div>Books</div>
  )
}
