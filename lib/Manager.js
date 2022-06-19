// bring in data captured from Employee prompts
const Employee = require("./Employee");

// Manager is an extension of Employee
class Manager extends Employee {
    constructor(name , id , email , officeNumber) {
        // get values extended from Employee
        super(name , id , email);
        this.officeNumber = officeNumber;
    }

    // methods
    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            role: 'manager',
            officeNumber: this.officeNumber()
        };
    }
};

module.exports = Manager;