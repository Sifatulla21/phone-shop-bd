//search reasult
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear value from input field
    searchField.value = '';
    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const noResultFound = document.getElementById('no-result-found');
    if(data.length == 0){
        noResultFound.style.display = 'block';
    }
    else{
        noResultFound.style.display = 'none';
        data.forEach(data => {
            const div = document.createElement('div');
            div.classList.add('search');
            div.innerHTML = `
              <div class="card h-100 w-50">
                    <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">Model: ${data.phone_name}</h3>
                    <h5 class="card-title">Brand: ${data.brand}</h5>
                    <button onclick="loadDetail('${data.slug}')" class="button-details" type="button">Details</button>
                </div>
              </div>
              `;
              searchResult.appendChild(div);
        })
    }

}

// DETAILS 

const loadDetail = slug => {
    const url = `  https://openapi.programming-hero.com/api/phone/${slug} `;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data));
}
const displayDetails = data => {
    const detailsResult = document.getElementById('details-result');
        const div = document.createElement('div');
        div.classList.add('details');
        div.innerHTML = `
          <div class="card h-100 w-50">
                <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">Model: ${data.name}</h3>
                <h3 class="card-title">${data.releaseDate ? data.releaseDate: 'No Release Date Found'}</h3>
                <h3 class="card-title">Main Features:</h3>
                <ul>
                    <li>
                        ${data.mainFeatures.storage}
                    </li>
                    <li>
                        ${data.mainFeatures.displaySize}
                    </li>
                    <li>
                        ${data.mainFeatures.chipSet}
                    </li>
                </ul>
                <h3 class="card-title">Sensors:</h3>
                <ul>
                    <li>
                    ${data.mainFeatures.sensors[0] ? data.mainFeatures.sensors[0]: 'not Available'}
                    </li>
                    <li>
                    ${data.mainFeatures.sensors[1] ? data.mainFeatures.sensors[1]: 'not vaailable'}
                    </li>
                    <li>
                    ${data.mainFeatures.sensors[2] ? data.mainFeatures.sensors[2]: 'not vaailable'}
                    </li>
                    <li>
                    ${data.mainFeatures.sensors[3] ? data.mainFeatures.sensors[3]: 'not vaailable'}
                    </li>
                    <li>
                    ${data.mainFeatures.sensors[4] ? data.mainFeatures.sensors[4]: 'not vaailable'}
                    </li>
                    <li>
                    ${data.mainFeatures.sensors[5] ? data.mainFeatures.sensors[5]: 'not vaailable'}
                    </li>
                </ul>
                <h3 class="card-title">Others:</h3>
                <ul>
                    <li>
                        ${data.others.WLAN}
                    </li>
                    <li>
                        ${data.others.Bluetooth}
                    </li>
                    <li>
                        ${data.others.GPS}
                    </li>
                    <li>
                        ${data.others.NFC}
                    </li>
                    <li>
                        ${data.others.Radio}
                    </li>
                    <li>
                        ${data.others.USB}
                    </li>
                </ul>
            </div>
          </div>
          `;
          detailsResult.appendChild(div);
}

