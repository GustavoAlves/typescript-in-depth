"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenteItem...');
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (publisher) {
            this._publisher = publisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
        console.log("Department: " + ReferenceItem.department);
    };
    ReferenceItem.department = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map