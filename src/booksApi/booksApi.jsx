import axios from "axios";

const instance = axios.create({
  baseURL: 'https://6357ee1ec26aac906f369749.mockapi.io/api/contacts'
});

export const getBooks = async () => {
    const { data } = await instance.get("/");
    console.log(data)
    return data
};

export const addBook = async (data) => {
    const { data: result } = instance.post("/", data);
    return result
};

export const removeBook = async (id) => {
    const { data } = instance.delete(`${id}`)
    return data
}