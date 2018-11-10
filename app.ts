import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import Encyclopedia from './encyclopedia';
import Shelf from './shelf';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import * as _ from "lodash";

let snakeCaseTitle = _.snakeCase("For Whom the Bell Tolls");
console.log(snakeCaseTitle);

function getAllBooks(): Array<Book> {
    let books = [
        { id: 1, title: "Ulysses", author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: "A Farewell to Arms", author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: "Moby Dick", author: 'Herman Melville', available: true, category: Category.Fiction },
    ];

    return books;
}

function logFirstAvailableBook(books: Array<Book> = getAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

function getBookTitleByCategory(categoryFilter: Category = Category.Fiction): Array<any> {
    console.log('Getting books in category: ' + categoryFilter + ' - ' + Category[categoryFilter]);

    const allBooks = getAllBooks();
    const filteredTitles: Array<Book> = allBooks.filter(currentBook => currentBook.category === categoryFilter);

    return filteredTitles;
}

function logBookTitles(books: Array<Book>): void {
    for (let currentBook of books) {
        console.log(currentBook.title);
    }
}

function getBookById(id: number): Book {
    const allBooks = getAllBooks();

    return allBooks.filter(currentBook => currentBook.id === id)[0];
}

function checkoutBooks(customer: string, ...booksIDs: number[]): Array<string> {
    console.log('Checking out books for ' + customer);
    let booksCheckedOut: Array<string> = [];

    for (let id of booksIDs) {
        let book: Book = getBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function printBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

const myBook = { 
    id: 1,
    title: "Ulysses",
    author: 'James Joyce',
    available: true,
    category: Category.Fiction,
    year: 1813,
    copies: 3,
    markDamaged: (reason: string) => console.log('Damaged: ' + reason)
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

let inventory: Array<Book> = getAllBooks();
let magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags'},
    { title: 'Literary Fiction Quartely', publisher: 'College Press'},
    { title: 'Five Points', publisher: 'GSU' }
];

// let purgedBooks: Array<Book> = Purge<Book>(inventory);
// purgedBooks.forEach(purgedBook => console.log(purgedBook.title));

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
magazineShelf.printTitles();

let firstMagazine: Magazine = magazineShelf.getFirst();
console.log(`${firstMagazine.publisher} - ${firstMagazine.title}`);