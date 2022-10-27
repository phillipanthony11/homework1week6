// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github=github;
        this.type="Engineer"
    }
    getName(){
        return this.name
    }
    getRole(){
        return this.type
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getGithub(){
        return this.github
    }
}
module.exports = Engineer