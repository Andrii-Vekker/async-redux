import { createAction } from "@reduxjs/toolkit";

const fetchBooksLoading = createAction("books/fetch/loading");
const fetchBooksSucces = createAction("books/fetch/succes");
const fetchBooksError = createAction("books/fetch/error");

const addBookLoading = createAction("books/add/loading");
const addBookSucces = createAction("books/add/succes");
const addBookError = createAction("books/add/error");

const removeBookLoading = createAction("books/remove/loading");
const removeBookSucces = createAction("books/remove/succes");
const removeBookError = createAction("books/remove/error");

const actions = {
    fetchBooksLoading,
    fetchBooksSucces,
    fetchBooksError,
    addBookSucces,
    addBookLoading,
    addBookError,
    removeBookLoading,
    removeBookSucces,
    removeBookError,
};
export default actions;