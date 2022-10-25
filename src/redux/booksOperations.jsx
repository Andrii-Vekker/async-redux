import actions from "./booksActions";
import { getBooks, addBook, removeBook } from "../booksApi/booksApi";

export const fetchBooks = () => {
    const func = async (dispatch) => {
        dispatch(actions.fetchBooksLoading())
        try {
            const data = await getBooks();
            dispatch(actions.fetchBooksSucces(data))
        } catch (error) {
            dispatch(actions.fetchBooksError)
        }
    }
    return func
}