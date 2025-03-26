# Automated Testing with Cypress, TypeScript, and Mocha Reporter

## Summary
This repository is designed for automated testing using **Cypress**, **TypeScript (TS)**, **OOP (Object-Oriented Programming)**, **Cucumber**, and **Mocha Reporter**. It supports testing across multiple devices (desktop, mobile, and tablets) and generates detailed HTML reports using `cypress-mochawesome-reporter`.

The goal of this project is to provide a streamlined setup for test execution, reporting, and adaptability to various testing needs.

---

## Requirements
Before getting started, ensure that you have the following installed:
- **Node.js** (LTS version or higher)
- **npm** or **yarn**
- **Cypress**
- **Git**

Technologies used:
- **Cypress** for end-to-end test automation.
- **TypeScript (TS)** for type-safe programming.
- **Cucumber** for Behavior-Driven Development (BDD).
- **Mocha Reporter** for generating comprehensive test reports.

---

## Steps to Install
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>

2. **Install dependencies:**:
   ```bash
   npm install
3. **Verify Cypress installation:**:
   ```bash
   npx cypress verify


## Steps to Launch

You can run tests on various devices and browsers using the scripts defined in package.json:
1. **Headless mode:**:
   ```bash
   npm run test:desktop:headless

2. **Cypress UI mode:**:
   ```bash
   npm run test:desktop:headed

## Specific Browser Testing

1. **Chrome:**:
   ```bash
   npm run test:desktop:chrome:headless

2. **Firefox:**:
   ```bash
   npm run test:desktop:firefox:headless

## Steps to Create the Report

    Open the latest test report:
    ```bash
    npm run test:desktop:firefox:headless
