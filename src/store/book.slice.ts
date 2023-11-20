import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BookInterface, Category} from "./../interface/book.interface";

export interface BookState {
    books: BookInterface[];
}

const initialState: BookState = {
    books: [
        {
            id: 1,
            name: "The Great Gatsby",
            price: 15.99,
            category: Category.Fiction,
            description: "A classic novel by F. Scott Fitzgerald set in the roaring twenties."
        },
        {
            id: 2,
            name: "Sapiens: A Brief History of Humankind",
            price: 21.99,
            category: Category.History,
            description: "An exploration of the history and impact of Homo sapiens on the world."
        },
        {
            id: 3,
            name: "The Lean Startup",
            price: 24.99,
            category: Category.Business,
            description: "A guide to developing startup companies and products using efficient business practices."
        },
        {
            id: 4,
            name: "The Da Vinci Code",
            price: 18.49,
            category: Category.Mystery,
            description: "A gripping mystery thriller by Dan Brown involving secret societies and hidden codes."
        },
        {
            id: 5,
            name: "Harry Potter and the Sorcerer's Stone",
            price: 12.99,
            category: Category.Fantasy,
            description: "The first book in the famous Harry Potter series by J.K. Rowling."
        },
    ]
}

export const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    reducers: {
        addBook(state, action: PayloadAction<BookInterface>) {
            state.books.push({
                ...action.payload,
                id: Date.now()
            })
        },
        updateBook(state, action: PayloadAction<{id: number, bookInfo: BookInterface}>) {
            state.books = state.books.map(book => {
                if (book.id === action.payload.id) {
                    return {
                        ...action.payload.bookInfo,
                        id: action.payload.id
                    }
                }
                return book;
            })
        },
        deleteBook(state, action: PayloadAction<{id: number}>) {
            state.books = state.books.filter(book => book.id !== action.payload.id);
        }
    }
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;