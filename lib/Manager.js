// bring in data captured from Employee prompts
const Employee = require("./Employee");

// Manager is an extension of Employee
class Manager extends Employee {
    constructor(name , id , email , officeNumber) {
        // get values extended from Employee
        super(name , id , email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'
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
            role: this.role,
            officeNumber: this.officeNumber()
        };
    }
};

module.exports = Manager;