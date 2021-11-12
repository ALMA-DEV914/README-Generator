// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

    const questions = [
        {
          type: 'input',
          message: "What's the title of your project?",
          name: 'title',
          validate: titleInput => {
            if (titleInput){
              return true;
            } else {
              console.log("Please enter your project title!");
              return false;
            }
          }
        },
        {
          type: 'input',
          message: "Add your name to the Readme",
          name: 'author',
          validate: authorInput => {
            if (authorInput){
              return true;
            } else {
              console.log("Please enter your name!");
              return false;
            }
          }
        },
        {
          type: 'input',
          message: "Write a description for your project",
          name: 'description',
          validate: descriptionInput => {
            if (descriptionInput){
              return true;
            } else {
              console.log("Please enter the description of your project!");
              return false;
            }
          }
        },
        {
          type: 'input',
          message: 'Write out installation instructions',
          name: 'install',
          default: 'npm init -y',
      
        },
        {
            type: 'input',
            message: 'Provide information of application usage',
            name: 'usage',
            default: 'See the steps'

          },
          {
            type: 'input',
            message: 'How can people contribute?',
            name: 'contribute',
            default: 'Read the guidelines'
          },
          {
              type: 'input',
              message: 'If your application has tests, say how to use them here',
              name: 'test',
              default: 'npm test',
          },
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHubUser',
            validate: githubInput => {
              if (githubInput){
                return true;
              } else {
                console.log("Please enter your github username!");
                return false;
              }
            }
          },
          {
            type: 'input',
            message:'What is your email address?',
            name:'email',
          },
          {
            type:'list',
            name: 'license',
            message: "What kind of license you are using?",
            choices: [
              'MIT',
              'GNU',
              'Apache 2.0',
              'None'
            ]     
          }
      ];
    
      function generatePage() {
        inquirer.prompt(questions)
      .then((response)=> {
        console.log(response)
    
        // set the license depending on what was chosen
        if(response.license == 'MIT')
        {
          genLicense = fs.readFileSync('MIT.txt', 'utf-8')
          licenseBadge = `[![MIT License](https://img.shields.io/badge/license-${response.license}-blue.svg)](#license)`
          licenseLink = ` https://opensource.org/licenses/MIT`
        }
        else if (response.license == 'GNU')
        {
          // Use fs.readFileSync() method to read the file 
          genLicense = fs.readFileSync('GNU.txt', 'utf-8') 
    
          licenseBadge = `[![GNU License](https://img.shields.io/badge/license-${response.license}-blue.svg)](#license)`
          licenseLink = `https://opensource.org/licenses/GPL-3.0`
            
        }
        // if Apache 2.0 license
        else if(response.license == 'Apache 2.0')
        {
          genLicense = fs.readFileSync('Apache.txt', 'utf-8')
          licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
          licenseLink = `https://opensource.org/licenses/Apache-2.0`

        }
        // Display the file content 
        else if(response.license == 'None')
        {
          genLicense = 'No license specified'
          licenseBadge = `https://choosealicense.com/(#license)`
    
        }
    
        // set the variables for the readME
        const fileName = 'GeneratedReadMe.md'
    
        // set the profile for the readME
        const profile = "https://github.com/" + response.gitHubUser
        
        // create the total contents for the readME
      let readContents = `# ${response.title}
    This project is licensed under the ${licenseBadge}.
    This is the license link ${licenseLink}.
        
    ## Description:
    ${response.description}
        
        
    ## Table of contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
        
    ## Installation
    ${response.install}

    ## Usage
    ${response.usage}
    Install node.js, download the file in your computer and open in VS code or terminal. Run node index.js and answer all the questions.
    ![See the steps](assets/images/step1.png)
    ![See the steps](assets/images/step2.png)
    ![See the steps](assets/images/step3.png)
    ## License
   ${genLicense}
  
    ## Contributing
    ${response.contribute}
    [Covenant Contributor](https://www.contributor-covenant.org/)

    ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
    
    ## Tests
    ${response.test}

    ## Questions
    For questions please contact: ${response.author}
    at  ${response.email}

    Github Profile: ${profile} `
    
    
    
    fs.writeFile(fileName, readContents, (err) => err ? console.log(err) : console.log('Success'))
      });
      }
    
    // run it to generate readME
    generatePage()
    
      
// TODO: Create a function to write README file
//function writeToFile(fileName,data) {}
    
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
 //init();