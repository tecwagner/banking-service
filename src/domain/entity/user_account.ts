export class Account {
  wallet = 0;
  accountNumber: number = Math.floor(Math.random() * 999999);
  accountDigit: number = Math.floor(Math.random() * 99);

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
