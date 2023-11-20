import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {BookInterface} from "@/interface/book.interface";

type BooksListProps = {
    onClickBook: (book: BookInterface) => void;
    onClickDelete: (book: BookInterface) => void;
}

export default function BooksList({onClickBook, onClickDelete}: BooksListProps) {
    const books: BookInterface[] = useSelector<RootState, BookInterface[]>(state => state.book.books);


    return (
        <div className="container mx-auto my-8">

            <div className="grid grid-cols-4 gap-4 cursor-pointer">
                {books.map((book) => (
                    <div onClick={() => onClickBook(book)} key={book.id} className="border p-4">
                        <p className="text-lg font-bold mb-2">{book.name}</p>
                        <p className="mb-2">${book.price.toFixed(2)}</p>
                        <p className="mb-2">{book.category}</p>
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                onClickDelete(book);
                            }}
                            className="bg-red-500 text-white py-1 px-2"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );


}