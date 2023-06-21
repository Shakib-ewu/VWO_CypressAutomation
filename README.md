# practise.cydeo.com - Cypress Automation Project

Welcome to the Cydeo project! This project showcases the usage of Cypress for automating tests on the Cydeo web application.
## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Cypress automation project demonstrates how to write end-to-end tests for a web application using Cypress. It includes sample tests, fixtures,mocha awesome report,screenshots,video records, and page objects to help you understand the best practices and patterns for creating automated tests with Cypress.

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Shakib-ewu/Cydeo_Fulls-site_TestAutomation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Cydeo_Fulls-site_TestAutomation
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Project Structure

The project structure is organized as follows:

```
├── cypress
│   ├── fixtures
│   │   └── exampleData.json
│   ├── integration
│   │   └── tests
│   │       ├── home.spec.js
│   │       └── login.spec.js
│   ├── page-objects
│   │   ├── homePage.js
│   │   └── loginPage.js
│   ├── support
│   │   ├── commands.js
│   │   └── index.js
│   └── plugins
│       └── index.js
├── .gitignore
├── cypress.json
├── package.json
└── README.md
```

- `cypress/fixtures`: Contains sample data fixtures used in the tests.
- `cypress/integration`: Contains test files organized by test suites.
- `cypress/page-objects`: Contains page object files representing the application's pages or components.
- `cypress/support`: Contains custom Cypress commands and global test setup files.
- `cypress/plugins`: Contains custom plugins for Cypress.
- `cypress.json`: Cypress configuration file.

## Writing Tests

Tests in this project are written using the Cypress testing framework. You can find the example test files in the `cypress/e2e` directory. Each test file showcases different aspects of Cypress testing, such as interacting with page elements, making assertions, and handling asynchronous operations.

## Running Tests

To run the tests, use the following command:

```bash
npm run test
```

This will launch the Cypress Test Runner, where you can select and run individual tests or the entire suite.

## Reporting

After running the tests, the Cypress Test Runner generates an HTML report with detailed test results and screenshots. You can find the report in the `cypress/reports` directory.

## Contributing

Contributions to my practise.cydeo.com project are welcome! If you find any issues or have ideas for improvements, feel free to open a pull request or submit an issue through GitHub. Please follow the existing coding style and conventions when making contributions.


## Contact

For any questions or inquiries, please contact Sakib Sarkar at imam.ewu@gmail.com.

## Report Screenshots
<img src="pictures/1.JPG">
<img src="pictures/2.JPG">
         
