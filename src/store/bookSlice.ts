import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeBook } from "@/types";
import initBooks from "@/mockdata";

interface BookState {
  books: typeBook[];
}

const initialState: BookState = {
  books: initBooks,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<typeBook>) => {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    },
    removeBook: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        books: state.books.filter((book) => book.name !== action.payload),
      };
    },
    updateBook: (state, action: PayloadAction<typeBook>) => {
      const updatedBook = action.payload;
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.name === updatedBook.oldName) {
            return updatedBook;
          }
          return book;
        }),
      };
    },
  },
});

export const { addBook, removeBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
