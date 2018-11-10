"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var shelf_1 = require("./shelf");
var _ = require("lodash");
var snakeCaseTitle = _.snakeCase("For Whom the Bell Tolls");
console.log(snakeCaseTitle);
function getAllBooks() {
    var books = [
        { id: 1, title: "Ulysses", author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: "A Farewell to Arms", author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: "Moby Dick", author: 'Herman Melville', available: true, category: enums_1.Category.Fiction },
    ];
    return books;
}
function logFirstAvailableBook(books) {
    if (books === void 0) { books = getAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function getBookTitleByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + categoryFilter + ' - ' + enums_1.Category[categoryFilter]);
    var allBooks = getAllBooks();
    var filteredTitles = allBooks.filter(function (currentBook) { return currentBook.category === categoryFilter; });
    return filteredTitles;
}
function logBookTitles(books) {
    for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
        var currentBook = books_2[_i];
        console.log(currentBook.title);
    }
}
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (currentBook) { return currentBook.id === id; })[0];
}
function checkoutBooks(customer) {
    var booksIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        booksIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, booksIDs_1 = booksIDs; _a < booksIDs_1.length; _a++) {
        var id = booksIDs_1[_a];
        var book = getBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function printBook(book) {
    console.log(book.title + ' by ' + book.author);
}
var myBook = {
    id: 1,
    title: "Ulysses",
    author: 'James Joyce',
    available: true,
    category: enums_1.Category.Fiction,
    year: 1813,
    copies: 3,
    markDamaged: function (reason) { return console.log('Damaged: ' + reason); }
};
// // Duck typing example
// printBook(myBook);
// myBook.markDamaged('torn pages');
// let logDamage: DamageLogger = (damage: string) => console.log('Damage reported: ' + damage);
// logDamage('coffee stains');
// let favoriteLibrarina: Librarian = new UniversityLibrarian();
// favoriteLibrarina.name = 'Sharon';
// favoriteLibrarina.assistCustomer('Lynda');
// Example of optionals parameters on a function
// function createCustomer(name: string, age?: number, city?: string): void {
//     console.log(name + (age ? ', ' + age : '') + (city ? ' from ' + city : ''));
// }
// createCustomer('Michele');
// createCustomer('Elena', 26);
// createCustomer('Lisa', 14, 'Melbour');
// let ref: ReferenceItem = new ReferenceItem('Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Published';
// console.log(ref.publisher);
// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printCitation();
var inventory = getAllBooks();
var magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quartely', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
// let purgedBooks: Array<Book> = Purge<Book>(inventory);
// purgedBooks.forEach(purgedBook => console.log(purgedBook.title));
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
var magazineShelf = new shelf_1.default();
magazines.forEach(function (magazine) { return magazineShelf.add(magazine); });
magazineShelf.printTitles();
var firstMagazine = magazineShelf.getFirst();
console.log(firstMagazine.publisher + " - " + firstMagazine.title);
//# sourceMappingURL=app.js.map