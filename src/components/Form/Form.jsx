import { useDispatch } from "react-redux";
import { addBookToList } from "../../redux/booksOperations";
import { nanoid } from "nanoid";

export default function Form() {
const dispatch = useDispatch()
    const handleSubmit = (e) => {
    e.preventDefault()
        const formValues = {
            name: e.target.elements.name.value,
            phone: e.target.elements.number.value,
            id: nanoid()
        };
    dispatch(addBookToList(formValues))
    };

  

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="" style={{ display: "flex" }}>
                <input type="text" name="name" />
                <input type="text" name="number" />
                <button type="submit" style={{ width: "100px" }} >add</button >
            </label>
        </form>
    
    );
};
