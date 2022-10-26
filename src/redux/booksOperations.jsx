import actions from "./booksActions";
import { getBooks, addBook, removeBook } from "../booksApi/booksApi";

const isDuplicate = ({name, phone}, contacts) => {
const normalizedName = name.toLowerCase()
    const normalizedPhone = phone.toLowerCase()
    
    const result = contacts.find(item => {
        return (normalizedName === item.name.toLowerCase() && normalizedPhone === item.phone.toLowerCase())
    })
    return result
}

export const fetchBooks = () => {
    const func = async (dispatch) => {
        dispatch(actions.fetchBooksLoading())
        try {
            const data = await getBooks();
            dispatch(actions.fetchBooksSucces(data))
        } catch (error) {
               const { message, response } = error
            const errorData = {
                message,
                status: response.status
            }
            dispatch(actions.fetchBooksError(errorData))
        }
    }
    return func
};

export const addBookToList = (data) => {

    const func = async (dispatch, getState) => {
             try {
            dispatch(actions.addBookLoading())
                    const result = addBook(data)
                      dispatch(actions.addBookSucces(result))
                    } catch (error) {
            const { message, response } = error
            const errorData = {
                message,
                status: response.status
            }
            dispatch(actions.addBookError(errorData))
        };
    };
    return func;
};

export const removeBookToList = (id) => {

    const func = async (dispatch) => {
    
        try {
            dispatch(actions.removeBookLoading())
        
            removeBook(id)
          
            dispatch(actions.removeBookSucces(id))
            
        } catch (error) {
            const { message, response } = error
            const errorData = {
                message,
                status: response.status
            }
            dispatch(actions.removeBookError(errorData))
        };
    };
    return func;
};