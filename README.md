# Parking Cost Calculator


## Table of Content

- [Parking Cost Calculator](#parking-cost-calculator)
  - [Table of Content](#table-of-content)
  - [Setup](#setup)
  - [Run and install](#run-and-install)
  - [Running the tests and reports](#running-the-tests-and-reports)
  - [The Kata](#the-kata)
  - [Tests written](#tests-written)


## Setup
 This project is setup using
 * Node `V18.19.1`
 * Yarn `v1.22.22`
 * Playwright `latest vesrion`

## Run and install

Open your terminal and run either `yarn install` or `yarn yarnInstall` from the Vscode NPM scripts panel

## Running the tests and reports

For running the test, please open your temrinal and run `yarn test`

For running the report, please run `yarn report`

## The Kata

The kata is a Pakring Cost claculator, the website is broken down into:

* Parking lot selector
* Entry/Leaving date and time
  * Date selector 
    * Popup Calander selector
    * Text field date entry
  * Text field time entry with AM/PM radio button
* Calculate button
* Parking Rates: The parking rates defined the calculation for each type of parking lot define either per day(s) or hour(s).


## Tests written

The test initally generated using [Playwright test Generator](https://playwright.dev/docs/codegen)

Basic flow:
Calculating One Day rate for:

 * Valet Parking
 * Short-Term Parking
 * Economy Lot Parking

Error Flow:

* Trigger an error message for no date entered or selected
* Entering invalid entry time, will generate a random bill. So the test will currently fail as its a bug
* Entering invalid leave time, will generate the proper error message. I used that as expected error message, for previous test.




