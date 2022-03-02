const allMobile = () => {
    const searchValue = document.getElementById("search-box").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;


    fetch(url)
        .then(response => response.json())
        .then(data => showMobile(data.data));
};

const showMobile = (phones) => {

    for (const phone of phones) {
        const parent = document.getElementById("list-container");
        const div = document.createElement('div');
        div.innerHTML = ` <div class="container">
    <div>
        <div class="card border rounded col-md-4 m-3  pt-3 ps-5 shadow" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top w-75" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">Model:${phone.phone_name}</h5>
                <p class="card-text fw-bold">BRAND:${phone.brand}</p>
                <a href="#" class="btn btn-success fw-bold"onclick="details()">DETAILS</a>
            </div>
        </div>

    </div> 
    </div>`;
        parent.appendChild(div);

    }
}
const details = (info) => {
    const detailsLink = ` https://openapi.programming-hero.com/api/phone/${info}`;
    fetch(detailsLink)
        .then(response => response.json())
        .then(data => showDetails(data.data.mainFeatures));

}
const showDetails = (info) => {
    const container = document.getElementById("details-container").innerHTML = `<div class="card" style="width: 18rem;">
    
    <div class="card-body">
        <h5 class="card-title fw-bold">Model:${info.mainFeatures.storage}</h5>
        <p class="card-text fw-bold">BRAND:${info.mainFeatures.displaySize}</p>
       
        <p class="card-text fw-bold">BRAND:${info.mainFeatures.chipSet}</p>
       
        <p class="card-text fw-bold">BRAND:${info.mainFeatures.memory}</p>
       
      <a href="#" class="btn btn-info">Go somewhere</a>
    </div>
  </div>`;

};