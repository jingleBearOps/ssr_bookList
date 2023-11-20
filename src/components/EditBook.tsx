'use client';
import { useState} from "react";
import Modal from 'react-modal';
import {BookInterface, Category} from "./../interface/book.interface";
import {useAppDispatch} from "@/store/store";
import { updateBook} from "@/store/book.slice";

interface EditBookProps {
    book: BookInterface;
    onEditSubmit: () => void;
    onEditCancel: () => void;
}

export default function EditBook({book, onEditCancel, onEditSubmit}: EditBookProps) {
    console.log(book)
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [newBook, setNewBook] = useState<BookInterface>(book);

    const handleAddBook = (event: any) => {
        event.preventDefault();
        dispatch(updateBook({
            id: book.id,
            bookInfo: {...newBook}
        }))
        onEditSubmit();

    }


    return (
        <>
            <Modal
                ariaHideApp={false}
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Add Book Modal"
            >
                <div className="p-8 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
                    <form onSubmit={handleAddBook} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold" htmlFor="name">
                                Name:
                                <input
                                    required
                                    id="name"
                                    type="text"
                                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    value={newBook.name}
                                    placeholder={book.name}
                                    onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
                                />
                            </label>
                        </div>
                        <div className="flex flex-col" color="black">
                            <label className="text-sm font-semibold" htmlFor="price">
                                Price:
                                <input
                                    required
                                    id="price"
                                    type="number"
                                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    value={newBook.price}
                                    placeholder={book.price.toString()}
                                    onChange={(e) => setNewBook({ ...newBook, price: parseFloat(e.target.value) })}
                                />
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold" htmlFor="category">
                                Category:
                                <select
                                    required
                                    id="category"
                                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    value={newBook.category}
                                    placeholder={book.category.toString()}
                                    onChange={(e) => setNewBook({ ...newBook, category: e.target.value as Category })}
                                >
                                    {Object.values(Category).map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold" htmlFor="description">
                                Description:
                                <textarea
                                    required
                                    id="description"
                                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    value={newBook.description}
                                    placeholder={book.description.toString()}
                                    onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
                        >
                            Update Book
                        </button>
                        <button
                            type="button"
                            onClick={() => onEditCancel()}
                            className="bg-blue-500 ms-2 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
                        >
                            Cancel
                        </button>
                    </form>
                </div>

            </Modal>
        </>
    )
}