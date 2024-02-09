
import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let books = [{ id: 1, title: "Development", author: "Jittu" }];


app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
});


app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author } = req.body;

    let bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }


    books[bookIndex] = {
        ...books[bookIndex],
        title: title || books[bookIndex].title,
        author: author || books[bookIndex].author
    };

    res.json(books[bookIndex]);
});
app.patch('/books/:id/author', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { author } = req.body;

    let bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }


    books[bookIndex].author = author || books[bookIndex].author;

    res.json(books[bookIndex]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



