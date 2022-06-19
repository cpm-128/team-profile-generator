# Team Profile Generator
<a href="#license"><img src="https://img.shields.io/badge/license-mit-informational"></img></a>

## Description
A comand-line application that dynamically generates an HTML webpage containing information about emplyees on a software engineering team from a user's input.

### User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles.

## Table of Contents
- <a href="#acceptance-criteria">Acceptance Criteria</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#mock-up">Mock-Up</a>
- <a href="#deployed-application">Deployed Application</a>


## Acceptance Criteria
GIVEN a command-line application that accepts user input . . .

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter:
- the team manager’s name
- employee ID
- email address
- office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to
- add an engineer
- or an intern or
- to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s:
- name
- ID
- email
- GitHub username
and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s:
- name
- ID
- email
- school
and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
## Installation
- Clone to repository from GitHub locally.
- Open the repo, in the root directory, in VS Code.
- Use _npm install_ to install Inquirer.
- The application is invoked by using the following command: _node index.js_
## Usage
To quickly generate a team summary.

## Mock-Up
<img src="./images/mock-up.png">

## Deployed Application
### Screencapture
1. Terminal
<img src="./images/">

2. Generated Webpage
<img src="./images/">

### Video Walk Through
<a href="">Watch here.</a>

## License
MIT License

Copyright (c) [2022] [Colleen Maher]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.