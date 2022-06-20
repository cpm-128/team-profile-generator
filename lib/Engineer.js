// bring in data captured from Employee prompts
const Employee = require('./Employee');

// Engineer is an extension of Employee
class Engineer extends Employee {
    constructor(name , id , email , github) {
        // get values extended from Employee
        super(name , id , email);
        this.github = github;
        this.role = 'Engineer'
    }

    // methods
    getGithub() {
        return this.github;
    };

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            role: this.role,
            github: this.github()
        }
    }
};

module.exports = Engineer;