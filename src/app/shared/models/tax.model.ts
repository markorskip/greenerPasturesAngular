export class Taxes {
  annual: Annual;
  perPayPeriod: PerPayPeriod;
}
export class PerPayPeriod {
  taxJurisdication: TaxJurisdication;
}

export class Annual {
  taxJurisdication: TaxJurisdication;
}

export class TaxJurisdication {
  federal: Federal;
  state: State;
  fica: Fica;
}

export class Federal {
  taxDetails: TaxDetails;
}

export class State {
  taxDetails: TaxDetails;
}

export class Fica {
  taxDetails: TaxDetails;
}

export class TaxDetails {
  amount: number;
}

export class Error {
  code: number;
  message: string;
  fields: string;
}
