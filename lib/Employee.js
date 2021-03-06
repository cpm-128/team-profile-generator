class Employee {
    // properties
    constructor(name , id , email , role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    // methods
    getName() {
        return this.name;
    };

    getId = function() {
        return this.id;
    };

    getEmail = function() {
        return this.email;
    };

    getRole = function() {
        return this.role;
    };
};

module.exports = Employee;