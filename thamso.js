function doi() {
    let amountMoney = +document.getElementById('giatri').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    let result = 0;
    if (select1 === 'VND' && select2 === 'USD') {
        result = amountMoney / 23000;
    }
    if (select1 === 'USD' && select2 === 'VND') {
        result = amountMoney * 23000;
    }
    if (select1 === 'VNĐ' && select2 === 'VNĐ') {
        result = amountMoney
    }
    if (select1 === 'USD' && select2 === 'USD') {
        result = amountMoney
    }
    document.getElementById('result').innerHTML = result + '';
}