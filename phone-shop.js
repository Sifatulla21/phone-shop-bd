const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
          <div class="card h-100 w-50">
                <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">Model: ${data.phone_name}</h3>
                <h5 class="card-title">Brand: ${data.brand}</h5>
            </div>
          </div>
          `;
          searchResult.appendChild(div);
    })
}