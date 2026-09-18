# Airline Booking Automation

## Project Overview

This project automates key flight booking scenarios using Playwright with TypeScript.

The project is built on a QA practice flight booking application and focuses on validating common airline booking workflows from flight search to booking confirmation.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub
- Page Object Model (POM)

## Automated Scenarios

The project covers 12 functional test scenarios:

### Flight Search
- Search for a valid one-way flight
- Validate search without origin and destination
- Validate same origin and destination
- Verify one-way flight behavior
- Verify available flight results

### Flight Selection
- Sort flight results by price
- Select a flight and continue to passenger details

### Passenger Details
- Validate invalid passenger email
- Enter valid passenger details and continue to payment

### Payment & Booking
- Verify payment page displays the total amount
- Verify booking cannot be completed without payment details
- Complete booking with valid payment details and verify booking confirmation

## Project Structure

```text
P1-Airline-Booking-Automation/
│
├── tests/
│   ├── flight-search.spec.ts
│   ├── flight-selection.spec.ts
│   ├── passenger-details.spec.ts
│   └── payment-booking.spec.ts
│
├── pages/
│   ├── flight-booking.page.ts
│   ├── passenger-details.page.ts
│   └── payment.page.ts
│
├── test-data/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md