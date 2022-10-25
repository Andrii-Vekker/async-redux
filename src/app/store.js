import { configureStore } from '@reduxjs/toolkit';
import booksReduser from '../redux/booksReduser';

export const store = configureStore({
  reducer: {
    books: booksReduser
  },
});
