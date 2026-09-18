import { Page, Locator } from '@playwright/test';

export class FlightBookingPage {
  readonly page: Page;
  readonly from: Locator;
  readonly to: Locator;
  readonly departureDate: Locator;
  readonly returnDate: Locator;
  readonly passengers: Locator;
  readonly oneWay: Locator;
  readonly searchButton: Locator;
  readonly sortDropdown: Locator;
  readonly flightResult: Locator;
  readonly selectFlightButton: Locator;
  readonly continueToPassengersButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.from = page.getByTestId('flight-from');
    this.to = page.getByTestId('flight-to');
    this.departureDate = page.getByTestId('flight-departure-date');
    this.returnDate = page.getByTestId('flight-return-date');
    this.passengers = page.getByTestId('flight-passengers');
    this.oneWay = page.getByTestId('flight-one-way');
    this.searchButton = page.getByTestId('flight-search');
    this.sortDropdown = page.getByTestId('flight-sort');
    this.flightResult = page.getByTestId('flight-result-GW100');
    this.selectFlightButton = page.getByTestId('flight-select-GW100');
    this.continueToPassengersButton = page.getByTestId(
      'flight-continue-to-passengers'
    );
  }

  async open() {
    await this.page.goto(
      'https://www.qapractice.com/flight-booking-scenarios'
    );
  }

  async searchOneWay(
    from: string,
    to: string,
    departureDate: string
  ) {
    await this.from.selectOption(from);
    await this.to.selectOption(to);
    await this.departureDate.fill(departureDate);
    await this.oneWay.check();
    await this.searchButton.click();
  }

  async searchWithoutOriginAndDestination(
    departureDate: string
  ) {
    await this.departureDate.fill(departureDate);
    await this.oneWay.check();
    await this.searchButton.click();
  }

  async searchWithSameOriginAndDestination(
    city: string,
    departureDate: string
  ) {
    await this.from.selectOption(city);
    await this.to.selectOption(city);
    await this.departureDate.fill(departureDate);
    await this.oneWay.check();
    await this.searchButton.click();
  }

  async sortFlightsByPrice() {
    await this.sortDropdown.selectOption('price-asc');
  }

  async selectFlightAndContinue() {
    await this.selectFlightButton.click();
    await this.continueToPassengersButton.click();
  }
}