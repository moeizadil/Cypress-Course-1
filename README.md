# Test Automation with Cypress Project

![Cypress Logo](https://cypress.io/static/img/Cypress-logo-small.png)

Welcome to the Test Automation with Cypress project! This repository contains the code and resources for implementing basic and advanced concepts of Cypress, which were learned during the "Test Automation with Cypress Part II" course offered by 10 Pearls University.

## Table of Contents

- [Introduction](#introduction)
- [Course Summary](#course-summary)
- [Features Implemented](#features-implemented)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Cypress is a powerful end-to-end testing framework that enables you to write and run tests for web applications easily. It allows you to interact with elements on the page, make assertions, and perform various actions to simulate user behavior and validate the application's functionality.

This project serves as a practical implementation of the concepts covered in the "Test Automation with Cypress Part II" course, where we learned various aspects of Cypress, including interacting with elements, using Cypress UI and CLI to run tests, working with fixtures, leveraging hooks, utilizing Cypress commands effectively, chaining elements, adding waits, conducting REST API testing using Cypress, and applying the Page Object Model in Cypress.

## Course Summary

The "Test Automation with Cypress Part II" course offered by 10 Pearls University covers the following topics:

- Introduction to Cypress and setting up the environment.
- Writing basic and advanced Cypress tests for web applications.
- Interacting with UI elements using Cypress.
- Running tests using Cypress UI and CLI.
- Working with fixtures to load data into tests.
- Utilizing hooks for test setup and teardown.
- Understanding and effectively using Cypress commands.
- Chaining elements to perform complex actions.
- Adding waits to handle asynchronous behavior.
- Conducting REST API testing with Cypress.
- Implementing the Page Object Model in Cypress to organize tests and make them maintainable.

## Features Implemented

In this project, the following features have been implemented based on the concepts learned during the course:

1. Interaction with Elements: Cypress commands have been used to interact with various UI elements such as buttons, input fields, dropdowns, etc.

2. Cypress UI and CLI: Tests can be executed both through the Cypress Test Runner UI and the command-line interface (CLI).

3. Using Fixtures: Data fixtures have been used to provide test data, making the tests more flexible and reusable.

4. Hooks: Hooks like `before`, `beforeEach`, `after`, and `afterEach` have been used to set up the environment and perform cleanup tasks before and after tests.

5. Cypress Commands: Custom Cypress commands have been created and utilized to encapsulate common actions and assertions for easier test development.

6. Chaining Elements: Cypress allows chaining multiple actions together, making it convenient to perform complex sequences of user interactions.

7. Waits in Cypress: Waits and assertions have been implemented to handle asynchronous behavior and ensure the application under test is in the expected state.

8. REST API Testing: Cypress has been used to test RESTful APIs, validating responses and verifying API functionalities.

9. Page Object Model: The Page Object Model (POM) design pattern has been adopted to organize tests into page objects, promoting maintainability and reusability.

## Getting Started

To get started with this project and run the Cypress tests locally, follow these steps:

1. Clone this repository to your local machine.

2. Ensure you have Node.js and npm (Node Package Manager) installed.

3. Install project dependencies by running the following command:

```bash
npm install
```

4. Run the Cypress tests using the Cypress Test Runner UI:

```bash
npx cypress open
```

Alternatively, run the tests in headless mode using the Cypress CLI:

```bash
npx cypress run
```

## Usage

After running the Cypress tests, you will be able to see the test results and any potential failures in the Cypress Test Runner UI. Additionally, the test results can be found in the "cypress/screenshots" and "cypress/videos" folders.

Feel free to explore the test files in the "cypress/integration" directory to see how different concepts have been implemented.

## Folder Structure

The project folder structure is organized as follows:

```
|-- cypress/
|   |-- fixtures/
|   |   |-- data.json
|   |-- integration/
|   |   |-- test_file_1.js
|   |   |-- test_file_2.js
|   |   |-- ...
|   |-- plugins/
|   |   |-- index.js
|   |-- support/
|   |   |-- commands.js
|   |   |-- index.js
|-- ...

```

- `cypress/`: The main Cypress folder containing test files, fixtures, plugins, and support files.
- `cypress/fixtures/`: Contains data fixtures used to provide test data.
- `cypress/integration/`: Contains test files that cover different aspects of the application.
- `cypress/plugins/`: Contains custom plugins used in the Cypress configuration.
- `cypress/support/`: Contains support files, such as custom Cypress commands and other utility functions.

## Contributing

We welcome contributions to this project! If you find any issues or have ideas for improvements, feel free to open a pull request or submit an issue in the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

---

We hope this project provides a practical demonstration of the concepts learned in the "Test Automation with Cypress Part II" course. Happy testing with Cypress! If you have any questions or need further assistance, please don't hesitate to reach out.

Thank you!

**Muhammad Moeiz Adil**

*Test Automation Enthusiast*
