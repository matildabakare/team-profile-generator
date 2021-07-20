class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 10 + 95);
        this.email = Math.floor(Math.random() * 5 + 7);
    }
    
    
    getName() {
        return `The name of the employee is ${this.name}`;
    }

    getId() {
        return `The employee ID is ${this.id}`;
    }

    getEmail() {
        return `The employee email is ${this.email}`;
    }

    getRole() {
        this.health -= health;
      
        if (this.health < 0) {
          this.health = 0;
        }
    }
}









module.exports = Employee;