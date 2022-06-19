// bring in data captured from Employee prompts
const Employee = require("./Employee");

// Intern is an extension of Employee
class Intern extends Employee {
    constructor(name , id , email , school) {
        // get values extended from Employee
        super(name , id , email);
        this.school = school;
    }

    // methods
    getSchool() {
        return this.school;
    }

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            role: 'intern',
            school: this.school()
        };
    }
};

module.exports = Intern;