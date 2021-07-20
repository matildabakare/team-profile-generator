const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.officeNumber = ; //github username
    }

  
    getSchool() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    }
  
    getRole() {
        return 'Manager';
    }
  
}


module.exports = Manager; 