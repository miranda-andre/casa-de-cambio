// import Swal from 'sweetalert2';

const campoMoeda = document.querySelector('#moeda');
const btnPesquisa = document.querySelector('#search');
const rates = document.querySelector('#rates')

btnPesquisa.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`https://api.exchangerate.host/latest?base=${campoMoeda.value}`)
    .then((response) => response.json())
    .then((data) => teste(data.rates))
    const teste = (data) => {
      const arrayCoins = Object.entries(data);
      arrayCoins.forEach(coin => {
        const divCoins = document.createElement('div');
        divCoins.className = 'coins-values';
        divCoins.innerHTML = `<img src='./coin-icon.svg'> ${coin[0]}: <span>${coin[1].toFixed(3)}</span>`;
        rates.appendChild(divCoins);
      })
    }
});