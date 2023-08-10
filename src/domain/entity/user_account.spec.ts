import { Account } from './user_account';

describe('User Account test Unit', () => {
  it('Create account number and balace', () => {
    const account = new Account();

    const createAccount = {
      wallet: account.balance(),
      accountNumber: account.createAccountNumber(),
      accountDigit: account.createAccountDigit(),
    };

    expect(createAccount).toBeTruthy();
  });
});
