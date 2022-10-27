// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee  {
    constructor(name,id,email,office) {
        super(name,id,email);
        this.office=office
        this.type="Manager"
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
    getOfficeNumber(){
        return this.office
    }
}
module.exports = Manager