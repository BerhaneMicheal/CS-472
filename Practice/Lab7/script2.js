class BankAccount {
    constructor(accountName, deposit) {
        this._accountName = accountName;
        this._deposit = parseFloat(deposit);
    }

    get accountName() {
        return this._accountName;
    }

    get deposit() {
        return this._deposit;
    }

    depositAmount(amount) {
        this._deposit += parseFloat(amount);
    }

    debitAmount(amount) {
        if (amount > this._deposit) {
            alert('Insufficient balance!');
            return;
        }
        this._deposit -= parseFloat(amount);
    }

    static accountInfoList = [];
}

document.getElementById('createtaskButton').addEventListener('click', () => {
    const accountName = document.getElementById('name').value;
    const deposit = document.getElementById('deposit').value;
    const newAccount = new BankAccount(accountName, deposit);

    BankAccount.accountInfoList.push(newAccount);
    updateAccountList();
});

document.getElementById('depositButton').addEventListener('click', () => {
    const accountName = document.getElementById('name').value;
    const depositAmount = document.getElementById('depositAmount').value;
    const account = BankAccount.accountInfoList.find(acc => acc.accountName === accountName);
    if (account) {
        account.depositAmount(depositAmount);
        updateAccountList();
    } else {
        alert('Account not found!');
    }
});

document.getElementById('debittaskButton').addEventListener('click', () => {
    const accountName = document.getElementById('name').value;
    const debitAmount = document.getElementById('debitAmount').value;
    const account = BankAccount.accountInfoList.find(acc => acc.accountName === accountName);
    if (account) {
        account.debitAmount(debitAmount);
        updateAccountList();
    } else {
        alert('Account not found!');
    }
});


function updateAccountList() {
    const accountList = document.getElementById('taskList');
    accountList.value = '';

    BankAccount.accountInfoList.forEach(account => {
        accountList.value += `Account name: ${account.accountName} Balance: $${account.deposit}\n`;
    });
}
