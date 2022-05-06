var valuta = {'EUR': {'PLN': 4.15,'USD': 0.83}, 'USD': {'PLN': 3.45, 'EUR': 1.2}}
var btn = document.querySelector('.calculate-btn');
var input1 = document.getElementById('prva');
var input2 = document.getElementById('druga');
var kolicina = document.getElementById('amount');
var pokaziKolicinu = document.querySelector('.given-amount');
var pokaziValutu = document.querySelector('.base-currency');
var pokaziDrugu = document.querySelector('.second-currency');
var pokaziRezultat = document.querySelector('.final-amount');

function convertCurrency(event)
{
    event.preventDefault();
    var amount = kolicina.value;
    var from = input1.value;
    var to = input2.value;
    var result = 0;

    try{
        if(from == to)
        {
            result = amount;
        }
        else
        {
            result = amount * valuta[from][to];
        }
    }
    catch(err)
    {
        result = amount * (1/valuta[to][from]);
    }
    pokaziKolicinu.innerHTML = amount;
    pokaziValutu.textContent = from + ' = ';
    pokaziDrugu.textContent = to;
    pokaziRezultat.textContent = result;

}
btn.addEventListener('click',convertCurrency);