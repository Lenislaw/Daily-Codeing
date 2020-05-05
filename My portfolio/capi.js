
class Countries {
  constructor() {
    this.limit = "100";
  }

  async getCountries() {
    const countriesResponse = await fetch(
      `https://restcountries.eu/rest/v2/all`
    );
    const country = await countriesResponse.json();

    return {
      country,
    };
  }
}

