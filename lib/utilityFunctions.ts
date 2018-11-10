export { CalculateLateFee, MaxBooksAllowed, Purge };

function CalculateLateFee(daysLate: number): number {
    return daysLate * .25;
}

function MaxBooksAllowed(age: number): number {
    return age < 12 ? 3 : 10;
}

function Purge<T>(inventory: Array<T>): Array<T> {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length); // ta da
}

function privateFunc(): void {
    console.log('This is private...');
}