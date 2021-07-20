const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.school = ; //github username
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
        return 'Intern';
    }
  
}


module.exports = Intern;

