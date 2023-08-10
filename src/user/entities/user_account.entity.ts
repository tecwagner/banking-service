export class AccountUser {
  protected wallet = 0;
  protected accountNumber: number = Math.floor(Math.random() * 999999);
  protected accountDigit: number = Math.floor(Math.random() * 99);

  createAccountNumber(): number {
    return this.accountNumber;
  }

  createAccountDigit(): number {
    return this.accountDigit;
  }

  balance(): number {
    return this.wallet;
  }
}
