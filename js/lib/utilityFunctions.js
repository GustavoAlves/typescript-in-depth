"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CalculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    return age < 12 ? 3 : 10;
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function Purge(inventory) {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length); // ta da
}
exports.Purge = Purge;
function privateFunc() {
    console.log('This is private...');
}
//# sourceMappingURL=utilityFunctions.js.map