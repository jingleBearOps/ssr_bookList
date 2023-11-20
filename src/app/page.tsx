'use client';
import BooksList from "./../components/BooksList";
import { BookInterface } from "./../interface/book.interface";
import { useState } from "react";
import { useAppDispatch } from "@/store/store";
import { deleteBook } from "@/store/book.slice";
import AddBook from "@/components/AddBook";


export default function Home() {
  const dispatch = useAppDispatch();
  const [editedBook, setEditedBook] = useState<BookInterface | undefined>();
  const handleClickBookItem = (book: BookInterface) => {
    setEditedBook(book);
  }
  const handleCLickDeleteBook = (book: BookInterface) => {
    const deleteConfirm = window.confirm("Do you really want to delete?");
    if (deleteConfirm) {
      dispatch(deleteBook(book));
    }
  }

  return (
    <main className="min-h-screen p-24" >
      <h2 className={'text-2xl font-bold text-center'}>Book Store</h2>
      <AddBook />
      <BooksList onClickBook={handleClickBookItem} onClickDelete={handleCLickDeleteBook} />
    </main>
  )
}
