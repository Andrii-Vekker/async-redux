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
    },
      [actions.addBooksLoading]: store => {
        store.loading = true;
        store.error = null;
    },
    [actions.addBooksSucces]: (store, { payload }) => {
        store.items.push(payload);
        store.loading = false;
    },
    [actions.addBooksError]: (store, { payload }) => {
        store.loading = false;
        store.error = payload;
    },
     [actions.removeBooksLoading]: store => {
        store.loading = true;
        store.error = null;
    },
    [actions.removeBooksSucces]: (store, { payload }) => {
        store.items = store.items.filter(item => item.id !== payload);
        store.loading = false;
    },
    [actions.removeBooksError]: (store, { payload }) => {
        store.loading = false;
        store.error = payload;
    }
});

export default booksReduser