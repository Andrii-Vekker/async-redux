import { createReducer } from "@reduxjs/toolkit";
import actions from "./booksActions";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const booksReduser = createReducer(initialState, {
    [actions.fetchBooksLoading]: store => {
        store.loading = true;
        store.error = null;
    },
    [actions.fetchBooksSucces]: (store, { payload }) => {
        store.items = payload;
        store.loading = false;
    },
    [actions.fetchBooksError]: (store, { payload }) => {
        store.loading = false;
        store.error = payload;
    }
});

export default booksReduser