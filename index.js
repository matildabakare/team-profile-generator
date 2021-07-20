const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const promptUser = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your team member',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of your team member!');
              return false;
            }
          }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of your team member',
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please select the role of your team member!');
                  return false;
                }
            }
        }
        
    ]);
};



function init() {
    promptUser()
    .then((data) => {
        var stringOutput = generateMarkdown(data);
        writeToFile('SAMPLEREADME.md', stringOutput);
    })

}


//data.name, data.role