const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('load', () => {
    console.log(xhr.responseText);
    const response = JSON.parse(xhr.responseText);

    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active')

    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = '';

    const valute = response.response.Valute;
    Object.entries(valute).forEach(([code, currency]) => {

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const codeDiv = document.createElement('div');
        codeDiv.classList.add('item__code');
        codeDiv.textContent = currency.CharCode

        const codeValue = document.createElement('div');
        codeValue.classList.add('item__value');
        codeValue.textContent = currency.Value

        const codeCurrency = document.createElement('div');
        codeCurrency.classList.add('item__currency');
        codeCurrency.textContent = "руб."

        itemDiv.appendChild(codeDiv);
        itemDiv.appendChild(codeValue);
        itemDiv.appendChild(codeCurrency);
        itemsContainer.append(itemDiv);

    });
})