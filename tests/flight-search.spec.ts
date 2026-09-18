import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../pages/flight-booking.page';

test('User can search for a one-way flight', async ({ page }) => {
  const flightBookingPage = new FlightBookingPage(page);

  await flightBookingPage.open();

  await flightBookingPage.searchOneWay(
    'Singapore',
    'Sydney',
    '2026-10-15'
  );

  await expect(flightBookingPage.flightResult).toBeVisible();
});

test('User cannot search without selecting origin and destination', async ({ page }) => {
  const flightBookingPage = new FlightBookingPage(page);

  await flightBookingPage.open();

  await flightBookingPage.searchWithoutOriginAndDestination(
    '2026-10-15'
  );

  await expect(flightBookingPage.flightResult).not.toBeVisible();
});

test('User cannot search with the same origin and destination', async ({ page }) => {
  const flightBookingPage = new FlightBookingPage(page);

  await flightBookingPage.open();

  await flightBookingPage.searchWithSameOriginAndDestination(
    'Singapore',
    '2026-10-15'
  );

  await expect(flightBookingPage.flightResult).not.toBeVisible();
});

test('One-way selection hides the return date field', async ({ page }) => {
  const flightBookingPage = new FlightBookingPage(page);

  await flightBookingPage.open();

  await expect(flightBookingPage.returnDate).toBeVisible();

  await flightBookingPage.oneWay.check();

  await expect(flightBookingPage.returnDate).not.toBeVisible();
});

test('Flight search displays an available flight result', async ({ page }) => {
  const flightBookingPage = new FlightBookingPage(page);

  await flightBookingPage.open();

  await flightBookingPage.searchOneWay(
    'Singapore',
    'Sydney',
    '2026-10-15'
  );

  await expect(flightBookingPage.flightResult).toBeVisible();
  await expect(flightBookingPage.selectFlightButton).toBeVisible();
});