const allMobile = () => {
    const searchValue = document.getElementById("search-box").value;



    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            showMobile(data.data);
        });


};

const showMobile = (phones) => {
    const parent = document.getElementById("list-container");
    parent.innerHTML = "";
    for (const phone of phones) {


        const div = document.createElement('div');
        div.innerHTML = ` <div class="container">
    <div>
        <div class="card border rounded col m-3  pt-3 ps-5 shadow" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top w-75" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">Model:${phone.phone_name}</h5>
                <p class="card-text fw-bold">BRAND:${phone.brand}</p>
                <a href="#" class="btn btn-success fw-bold"onclick="details('${phone.slug}')">DETAILS</a>
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
        .then(data => {
            console.log(data.data);
            showDetails(data.data)

        });

}


// detail info 

const showDetails = (info) => {
    const container = document.getElementById("details-container").innerHTML = `<div class="card m-auto" style="width: 18rem;">
    
    <div class="card-body detail-container shadow-md ">
       
    <img src="${info.image}" alt="">
       <p class ="para mt-2"> <span class="card-text fw-bold text-dark">Display size: </span>${info.mainFeatures.displaySize} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">Storage: </span>${info.mainFeatures.storage} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">ChipSet: </span>${info.mainFeatures.chipSet} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">Sensors: </span>${info.mainFeatures.sensors} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">Memory: </span>${info.mainFeatures.memory} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">releaseDate: </span>${info.mainFeatures.releaseDate} </p>
       <hr>

 
       <h2 class= "text-danger mt-4"> Others Information</h2>

       <p class ="para"> <span class="card-text fw-bold text-dark">Wifi: </span>${info.others.WLAN} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">Bluetooth: </span>${info.others.Bluetooth} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">GPS: </span>${info.others.GPS} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">NFC: </span>${info.others.NFC} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">Radio: </span>${info.others.Radio} </p>
       <p class ="para"> <span class="card-text fw-bold text-dark">USB: </span>${info.others.USB} </p>
    
     
    </div>
  </div>`;

};