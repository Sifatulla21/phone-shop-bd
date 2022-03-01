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
    .then(data => displaySearchResult(data.data.slice(0, 20)));
}
//display search result on ui
const displaySearchResult = data => {
    // clear previous search
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // clear previous viewed details
    const detailsResult = document.getElementById('details-result');
    detailsResult.textContent = '';
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
              <div class="card h-100 ">
                    <img src="${data.image}" class="card-img-top mx-auto" alt="...">
                <div class="card-body">
                    <h3 class="card-title">Model: ${data.phone_name}</h3>
                    <h5 class="card-title bold">Brand: ${data.brand}</h5>
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
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data));
}
const displayDetails = data => {
        const detailsResult = document.getElementById('details-result');
        // clear details
        detailsResult.textContent = '';
        const div = document.createElement('div');
        div.classList.add('details');
        div.innerHTML = `
          <div class="card h-100">
                <img src="${data.image}" class="card-img-top mx-auto" alt="...">
            <div class="card-body">
                <h3 class="card-title">Model: ${data.name}</h3>
                <h3 class="card-title">${data.releaseDate ? data.releaseDate: 'No Release Date Found'}</h3>
                <h3 class="card-title">Main Features:</h3>
                <ul>
                    <li>
                    <span class="bold">Storage:</span>
                        ${data.mainFeatures.storage}
                    </li>
                    <li>
                    <span class="bold">Display:</span> 
                        ${data.mainFeatures.displaySize}
                    </li>
                    <li>
                    <span class="bold">Chipset:</span>
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
                    <span class="bold">WALN:</span> 
                        ${data.others.WLAN ? data.others.WLAN: 'Not Available'}
                    </li>
                    <li>
                    <span class="bold">Bluetooth:</span>
                        ${data.others.Bluetooth ? data.others.Bluetooth: 'Not Available'}
                    </li>
                    <li>
                    <span class="bold">GPS:</span>
                        ${data.others.GPS ? data.others.GPS: 'Not Available'}
                    </li>
                    <li>
                    <span class="bold">NFC:</span>
                        ${data.others.NFC ? data.others.NFC: 'Not Available'}
                    </li>
                    <li>
                    <span class="bold">Radio:</span>
                        ${data.others.Radio ? data.others.Radio: 'Not Available'}
                    </li>
                    <li>
                    <span class="bold">USB:</span>
                        ${data.others.USB ? data.others.USB: 'Not Available'}
                    </li>
                </ul>
            </div>
          </div>
          `;
          detailsResult.appendChild(div);
}

