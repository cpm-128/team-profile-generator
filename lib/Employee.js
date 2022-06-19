class Employee {
    constructor(name , id , email , role) {
        // properties
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;

        // methods
        this.getName = function() {
            return this.name;
        };
        this.getId = function() {
            return this.id;
        };
        this.getEmail = function() {
            return this.email;
        };
        this.getRole = function() {
            return this.role;
        };
    }
};

module.exports = Employee;