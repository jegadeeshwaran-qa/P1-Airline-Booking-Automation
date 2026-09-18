import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../pages/flight-booking.page';
import { PassengerDetailsPage } from '../pages/passenger-details.page';
import { PaymentPage } from '../pages/payment.page';

async function goToPayment(page: any) {
  const flightBookingPage = new FlightBookingPage(page);
  const passengerDetailsPage = new PassengerDetailsPage(page);

  await flightBookingPage.open();

  await flightBookingPage.searchOneWay(
    'Singapore',
    'Sydney',
    '2026-10-15'
  );

  await flightBookingPage.selectFlightAndContinue();

  await passengerDetailsPage.enterPassengerDetails(
    'John Test',
    'john.test@example.com',
    '+6591234567'
  );

  await passengerDetailsPage.continueToPayment();
}

test('Payment page displays the total amount', async ({ page }) => {
  const paymentPage = new PaymentPage(page);

  await goToPayment(page);

  await expect(paymentPage.total).toBeVisible();
});

test('User cannot complete booking without payment details', async ({ page }) => {
  const paymentPage = new PaymentPage(page);

  await goToPayment(page);

  await paymentPage.completeBooking();

  await expect(paymentPage.bookingSuccess).not.toBeVisible();
});

test('User can complete booking with valid payment details', async ({ page }) => {
  const paymentPage = new PaymentPage(page);

  await goToPayment(page);

  await paymentPage.enterPaymentDetails(
    '4111111111111111',
    '12/30',
    '123'
  );

  await paymentPage.completeBooking();

  await expect(paymentPage.bookingSuccess)
    .toContainText('Booking Confirmed');

  await expect(paymentPage.bookingReference).toBeVisible();
});