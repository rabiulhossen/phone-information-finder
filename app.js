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
    <div class="row">
        <div class="card border rounded col-md-4 m-3  pt-3 ps-5 shadow" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top w-75" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">Model:${phone.phone_name}</h5>
                <p class="card-text fw-bold">BRAND:${phone.brand}</p>
                <a href="#" class="btn btn-success fw-bold">DETAILS</a>
            </div>
        </div>
        <div class="card border rounded col-md-4 m-3 pt-3 ps-5 shadow" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top w-75" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">Model:${phone.phone_name}</h5>
                <p class="card-text fw-bold">BRAND:${phone.brand}</p>
                <a href="#" class="btn btn-success fw-bold">DETAILS</a>
            </div>
        </div>
        <div class="card border rounded col-md-4 m-3  pt-3 ps-5 shadow" style="width: 18rem;">
            <img  src="${phone.image}" class="card-img-top w-75" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">Model:${phone.phone_name}</h5>
                <p class="card-text fw-bold">BRAND:${phone.brand}</p>
                <a href="#" class="btn btn-success fw-bold">DETAILS</a>
            </div>
        </div>
    </div> 
    </div>`;
        parent.appendChild(div);

    }

}