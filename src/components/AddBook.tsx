'use client';
import { useState } from "react";
import Modal from 'react-modal';
import {BookInterface, Category} from "./../interface/book.interface";
import {useAppDispatch} from "@/store/store";
import {addBook} from "@/store/book.slice";

export default function AddBook() {
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newBook, setNewBook] = useState<BookInterface>({
        id: Date.now(),
        name: '',
        price: 0,
        category: Category.Biography,
        description: '',
    });

    const handleAddBook = (event: any) => {
        event.preventDefault();
        dispatch(addBook({
            ...newBook
        }));
        setIsModalOpen(false);
        setNewBook({
            id: Date.now(),
            name: '',
            price: 10,
            category: Category.Biography,
            description: '',
        })
    }


    return (
        <>
            <button
                onClick={() => {
                    setIsModalOpen(true)
                }}
                className={'p-3 text-white bg-orange-600 rounded hover:bg-orange-400'}>Add Book</button>
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
                                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500  ;"
                                    value={newBook.name}
                                    onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
                                />
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold" htmlFor="price">
                                Price:
                                <input
                                    required
                                    id="price"
                                    type="number"
                                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    value={newBook.price}
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
                                    onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
                        >
                            Add Book
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
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