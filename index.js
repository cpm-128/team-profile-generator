// required modules
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// completed employee data will need to be push to an array
const teamProfileArr = [];

// inquirer prompts from command line
const managerPrompt = () => {
    return new Promise((res, rej) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.name , answers.id , answers.email , answers.officeNumber);
            teamProfileArr.push(manager);
            res();
        });
    });
};
// end managerPrompt

const employeePrompt = () => {
    return new Promise((resolve, rej) => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'What type of team member would you like to add next?',
                choices: ['Engineer' , 'Intern' , {
                    name: 'I do not want to add anymore team members.',
                    value: false
                }]
            },

            // name
            {
                when: ({ employeeType }) => employeeType === 'Engineer',
                type: 'input',
                name: 'name',
                message: "What is your engineer's name?"
            },
            {
                when: ({ employeeType }) => employeeType === 'Intern',
                type: 'input',
                name: 'name',
                message: "What is your intern's name?"
            },

            // id
            {
                when: ({ employeeType }) => employeeType === 'Engineer',
                type: 'input',
                name: 'id',
                message: "What is your engineer's id?"
            },
            {
                when: ({ employeeType }) => employeeType === 'Intern',
                type: 'input',
                name: 'id',
                message: "What is your intern's id?"
            },

            // email
            {
                when: ({ employeeType }) => employeeType === 'Engineer',
                type: 'input',
                name: 'email',
                message: "What is your engineer's email?"
            },
            {
                when: ({ employeeType }) => employeeType === 'Intern',
                type: 'input',
                name: 'email',
                message: "What is your intern's email?"
            },

            // github or school
            {
                when: ({ employeeType }) => employeeType === 'Engineer',
                type: 'input',
                name: 'github',
                message: "What is your engineer's GitHub username?"
            },
            {
                when: ({ employeeType }) => employeeType === 'Intern',
                type: 'input',
                name: 'school',
                message: "What is your intern's school?"
            }
        ]).then(answers => {
            if (answers.employeeType) {
                switch (answers.employeeType) {
                    case 'Engineer':
                        const engineer = new Engineer(answers.name , answers.id , answers.email , answers.github);
                        teamProfileArr.push(engineer);
                        break;
                    case 'Intern':
                        const intern = new Intern(answers.name , answers.id , answers.email , answers.school);
                        teamProfileArr.push(intern);
                        break;
                }
                return employeePrompt.then(() => resolve());
            } else {
                return resolve();
            }
        })
    });
};
// end employeePrompt

managerPrompt();