import { Page, Locator } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  readonly total: Locator;
  readonly cardNumber: Locator;
  readonly expiry: Locator;
  readonly cvv: Locator;
  readonly bookButton: Locator;
  readonly bookingSuccess: Locator;
  readonly bookingReference: Locator;

  constructor(page: Page) {
    this.page = page;

    this.total = page.getByTestId('flight-total');
    this.cardNumber = page.getByTestId('flight-card-number');
    this.expiry = page.getByTestId('flight-expiry');
    this.cvv = page.getByTestId('flight-cvv');
    this.bookButton = page.getByTestId('flight-book');
    this.bookingSuccess = page.getByTestId('flight-booking-success');
    this.bookingReference = page.getByTestId('flight-pnr');
  }

  async enterPaymentDetails(
    cardNumber: string,
    expiry: string,
    cvv: string
  ) {
    await this.cardNumber.fill(cardNumber);
    await this.expiry.fill(expiry);
    await this.cvv.fill(cvv);
  }

  async completeBooking() {
    await this.bookButton.click();
  }
}