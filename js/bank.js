function getInputValue(id) {
    const input = document.getElementById(id);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);

    input.value = '';
    return inputAmount;
}

function getDisplayValue(display, inputNum) {
    const displayValue = document.getElementById(display);
    const displayValueText = displayValue.innerText;
    const displayAmount = parseFloat(displayValueText);

    displayValue.innerText = displayAmount + inputNum;
}

function getBalanceFund(inputNum, isAdd) {
    const balanceValue = document.getElementById('balance-display');
    const balanceValueText = balanceValue.innerText;
    const balanceFund = parseFloat(balanceValueText);

    if (isAdd == true) {
        balanceValue.innerText = balanceFund + inputNum;
    }
    else {
        balanceValue.innerText = balanceFund - inputNum;
    }
}

function getFundStatus() {
    const fund = document.getElementById('balance-display');
    const fundText = fund.innerText;
    const fundBalance = parseFloat(fundText);

    return fundBalance;
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    const depositValue = getInputValue('deposit-input');

    if (depositValue > 0) {
        getDisplayValue('deposit-display', depositValue);
        getBalanceFund(depositValue, true);
    }
    else {
        prompt('Negative Balance Not Allowed!');
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawValue = getInputValue('withdraw-input');
    const currentFund = getFundStatus();

    if (withdrawValue > 0 && withdrawValue < currentFund) {
        getDisplayValue('withdraw-display', withdrawValue);
        getBalanceFund(withdrawValue, false);
    }
});