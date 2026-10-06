# P1 - Airline Booking Automation

Playwright + TypeScript automation project for testing key airline booking flows.

## Project Overview

This project automates common flight booking scenarios, from flight search to booking confirmation.

## Application Under Test

QA practice airline booking application.

## Tools and Technologies

- Playwright
- TypeScript
- Node.js
- Page Object Model
- GitHub Actions

## Test Coverage

The project covers 12 functional test scenarios.

### Flight Search

- Search for a valid one-way flight
- Validate search without origin and destination
- Validate same origin and destination
- Verify one-way flight behaviour
- Verify available flight results

### Flight Selection

- Sort flight results by price
- Select a flight and continue to passenger details

### Passenger Details

- Validate invalid passenger email
- Enter valid passenger details and continue to payment

### Payment and Booking

- Verify the payment page displays the total amount
- Verify booking cannot be completed without payment details
- Complete booking and verify booking confirmation

## Automation Approach

The project uses the Page Object Model to keep page locators and reusable actions separate from test cases.

The tests include:

- Role-based locators
- Assertions
- Positive and negative scenarios
- Reusable page methods
- Functional UI testing

## Project Structure

```text
P1-Airline-Booking-Automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── flight-booking.page.ts
│   ├── passenger-details.page.ts
│   └── payment.page.ts
├── test-data/
├── tests/
│   ├── flight-search.spec.ts
│   ├── flight-selection.spec.ts
│   ├── passenger-details.spec.ts
│   └── payment-booking.spec.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Test Execution

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run tests on Chromium:

```bash
npx playwright test --project=chromium
```

## GitHub Actions CI

GitHub Actions is configured to:

1. Check out the repository
2. Install npm dependencies
3. Install Playwright browsers
4. Run the Playwright test suite

## What I Practiced

- UI automation using Playwright and TypeScript
- Page Object Model
- Flight booking workflow testing
- Positive and negative testing
- Assertions and locators
- GitHub Actions CI
