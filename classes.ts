import * as Interfaces from './interfaces';
export { UniversityLibrarian, ReferenceItem };

class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

}

abstract class ReferenceItem {
    // title: string;
    // private year: number;

    // constructor(title, year) {
    //     console.log('Creating a new ReferenteItem...');
    //     this.title = title;
    //     this.year = year;
    // }

    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenteItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(publisher: string) {
        this._publisher = publisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}