const bookModel = require('../models/books');

module.exports = class BooksController {

    constructor(book) {
        this.author = book.author;
        this.title = book.title;
        this.isbn = book.isbn;
        this.releaseDate = book.releaseDate;
    }

    async createBookData() {
        let bookData = {
            author: this.author,
            title: this.title,
            isbn: this.isbn,
            releaseDate: new Date(this.releaseDate)
        };
        try {
            if (this.checkNull(bookData)) {
                let bookExists = await bookModel.countDocuments({isbn: this.isbn});
                if (!bookExists) {
                    let book = await bookModel.create(bookData);
                    return {
                        data: book,
                        message: 'Data fetched succesfully'
                    };
                } else {
                    return {
                        data: {},
                        message: "Book already exists"
                    };
                }
            } else {
                return {
                    data: {},
                    message: 'Invalid Input'
                };
            } 
        } catch (e) {
            throw e;
        }
    }

    async findOneBook(req) {
        let id = req.query.id;
        try {
            if (id) {
                let book = await bookModel.findOne({
                    _id: id
                }).lean();
                if (book) {
                    return {
                        data: book,
                        message: 'Data fetched succesfully'
                    };
                } else {
                    return {
                        data: book,
                        message: 'No record found'
                    };
                }
            }
        } catch (e) {
            throw e;
        }
    }

    async findAllBook() {
        try {
            let book = await bookModel.find().lean();
            if (book.length) {
                return {
                    data: book,
                    message: 'Data fetched succesfully'
                };
            } else {
                return {
                    data: book,
                    message: 'No record found'
                };
            }
        } catch (e) {
            throw e;
        }
    }

    async updateBookData() {
        let bookData = {
            author: this.author,
            title: this.title,
            releaseDate: this.releaseDate,
            isbn: this.isbn
        };
        try {
            if (this.checkNull(bookData)) {
                let book = await bookModel.findOneAndUpdate({
                    isbn: this.isbn
                } , {
                    $set: {
                        author: this.author,
                        isbn: this.isbn,
                        title: this.title,
                        releaseDate: this.releaseDate
                    }
                }).lean();
                if (book) {
                    return {
                        data: book,
                        message: 'Data fetched succesfully'
                    };
                } else {
                    return {
                        data: book,
                        message: 'Invalid Inputs'
                    };
                }
            } else {
                return {
                    data: {},
                    message: "Invalid Inputs"
                }
            }
        } catch (e) {
            throw e;
        }
    }

    checkNull(obj) {
        let valPresent = false;
        Object.keys(obj).forEach(key => {
            if (obj[key]) {
                valPresent = true;
            }
            return false;
        });
        return valPresent;
    }
};