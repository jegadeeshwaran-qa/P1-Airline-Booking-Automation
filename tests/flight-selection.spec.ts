import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../pages/flight-booking.page';

test('User can sort flight results by price', async ({ page }) => {
  const flightBookingPage = new FlightBookingPage(page);

  await flightBookingPage.open();

  await flightBookingPage.searchOneWay(
    'Singapore',
    'Sydney',
    '2026-10-15'
  );

  await flightBookingPage.sortFlightsByPrice();

  await expect(flightBookingPage.flightResult).toBeVisible();
});

test('User can select a flight and continue to passenger details', async ({ page }) => {
  const flightBookingPage = new FlightBookingPage(page);

  await flightBookingPage.open();

  await flightBookingPage.searchOneWay(
    'Singapore',
    'Sydney',
    '2026-10-15'
  );

  await flightBookingPage.selectFlightAndContinue();

  const passengerName = page.getByTestId('flight-passenger-name');

  await expect(passengerName).toBeVisible();
});