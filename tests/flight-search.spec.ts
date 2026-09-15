import { test, expect } from '@playwright/test';

test('User can search for a one-way flight', async ({ page }) => {
  await page.goto('https://www.qapractice.com/flight-booking-scenarios');

  await page.getByTestId('flight-from').selectOption('Singapore');
  await page.getByTestId('flight-to').selectOption('Sydney');
  await page.getByTestId('flight-departure-date').fill('2026-10-15');
  await page.getByTestId('flight-one-way').check();

  await page.getByTestId('flight-search').click();

  await expect(page.getByTestId('flight-result-GW100')).toBeVisible();
});

test('User cannot search without selecting origin and destination', async ({ page }) => {
  await page.goto('https://www.qapractice.com/flight-booking-scenarios');

  await page.getByTestId('flight-departure-date').fill('2026-10-15');
  await page.getByTestId('flight-one-way').check();

  await page.getByTestId('flight-search').click();

  await expect(page.getByTestId('flight-from')).toBeVisible();
  await expect(page.getByTestId('flight-to')).toBeVisible();
});