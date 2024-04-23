# Parking Cost Calculator


## Table of Content

- [Parking Cost Calculator](#parking-cost-calculator)
  - [Table of Content](#table-of-content)
  - [Setup](#setup)
  - [Run and install](#run-and-install)
  - [Running the tests and reports](#running-the-tests-and-reports)
  - [The Kata](#the-kata)
  - [Tests written](#tests-written)
  - [Further work](#further-work)
  - [Disclaimer:](#disclaimer)


## Setup
 This project is setup using
 * Node `V18.19.1`
 * Yarn `v1.22.22`
 * Playwright `latest vesrion`
 * Tested and run on a Mac machine, I don't have a windows machine to verify the project will run correctly.

## Run and install

Open your terminal and run either `yarn install` or `yarn yarnInstall` from the Vscode NPM scripts panel

## Running the tests and reports

For running the test, please open your temrinal and run `yarn test`

For running the report, please run `yarn report`

## The Kata

The kata is a Pakring Cost claculator, the website is broken down into:

* Parking lot selector.
* Entry/Leaving date and time.
  * Date selector
    * Popup Calander selector.
    * Text field date entry.
  * Text field time entry with AM/PM radio button.
* Calculate button.
* Parking Rates: The parking rates defined the calculation for each type of parking lot define either per day(s) or hour(s).


## Tests written

The test initally generated using [Playwright test Generator](https://playwright.dev/docs/codegen)
this feature helps a lot in writing and setup whats needed to write all the tests and helps to breakdown all the common functionality to build proper Page Objects and/or utitilities functions.

Basic flow:
Calculating One Day rate for:

 * Valet Parking.
 * Short-Term Parking.
 * Economy Lot Parking.

Error Flow:

* Trigger an error message for no date entered or selected.
* Entering invalid entry time, will generate a random bill. So the test will currently fail as its a bug.
* Entering invalid leave time, will generate the proper error message. I used that as expected error message, for previous test.


## Further work

For the scope of this technical interview, I just focused on basic simple written tests and the nature of targetted website.

The next step, I will ideally focused on building Page Object model for the both basic page and the Date selector pop up pages.
This will help me to reduce all duplicate codes that can be seen in the generated tests, for examples:
 * the page actions for date and time selector. as all these should resides in the Page Objects or helper methods (if needed for data setup), as the tests should ideally only contains test verifications only and make it cleaner.
  

## Disclaimer:

I would have gone futher to write up all the [Further work](#further-work) but I'm trying to keep my work and focus on the 90min window provided for this short testing kata.



