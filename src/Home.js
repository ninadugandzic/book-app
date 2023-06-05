import BookCard from './BookCard';

const Home = () => {
    const books = [
        { id: 1, title: 'The Book Thief', author: 'Markus Zusak' },
        { id: 2, title: 'The Name Of The Rose', author: 'Umberto Eco' },
        { id: 3, title: 'Dracula', author: 'Bram Stoker' },
    ];
    return (
        <div className="booksMain">
            {books.map((book)=> (
                <div className="card" key={book.id}>
                    <BookCard title={book.title} author={book.author}/>


                </div>
            ))}
        </div>


    );
}

export default Home;