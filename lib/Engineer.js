const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.github = ; //github username
    }

  
    getGithub() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    }
  
    getRole() {
        return 'Engineer';
    }
  
}


module.exports = Engineer;