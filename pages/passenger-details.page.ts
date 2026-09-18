import { Page, Locator } from '@playwright/test';

export class PassengerDetailsPage {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly continueToPaymentButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.name = page.getByTestId('flight-passenger-name');
    this.email = page.getByTestId('flight-passenger-email');
    this.phone = page.getByTestId('flight-passenger-phone');
    this.continueToPaymentButton = page.getByTestId(
      'flight-continue-to-payment'
    );
  }

  async enterPassengerDetails(
    name: string,
    email: string,
    phone: string
  ) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.phone.fill(phone);
  }

  async continueToPayment() {
    await this.continueToPaymentButton.click();
  }
}