import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../pages/flight-booking.page';
import { PassengerDetailsPage } from '../pages/passenger-details.page';

async function goToPassengerDetails(page: any) {
  const flightBookingPage = new FlightBookingPage(page);

  await flightBookingPage.open();

  await flightBookingPage.searchOneWay(
    'Singapore',
    'Sydney',
    '2026-10-15'
  );

  await flightBookingPage.selectFlightAndContinue();
}

test('Passenger details require a valid email address', async ({ page }) => {
  const passengerDetailsPage = new PassengerDetailsPage(page);

  await goToPassengerDetails(page);

  await passengerDetailsPage.enterPassengerDetails(
    'John Test',
    'invalid-email',
    '+6591234567'
  );

  await passengerDetailsPage.continueToPayment();

  await expect(passengerDetailsPage.email).toBeVisible();
});

test('User can enter valid passenger details and continue to payment', async ({ page }) => {
  const passengerDetailsPage = new PassengerDetailsPage(page);

  await goToPassengerDetails(page);

  await passengerDetailsPage.enterPassengerDetails(
    'John Test',
    'john.test@example.com',
    '+6591234567'
  );

  await passengerDetailsPage.continueToPayment();

  const cardNumber = page.getByTestId('flight-card-number');

  await expect(cardNumber).toBeVisible();
});