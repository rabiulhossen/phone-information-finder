const allMobile = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=$"{phone_name}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => showMobile(data.brand));
};

const showMobile = (players) => {

    for (const player of players) {
        const parent = document.getElementById("list-container");
        const div = document.createElement('div');
        div.innerHTML = ` <div class="container">
    <div class="row">
        <div class="card border" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> title</h5>
                <p class="card-text">Some text here</p>
                <a href="#" class="btn btn-primary">button</a>
            </div>
        </div>
    </div>
</div>
`;
        parent.appendChild(div);
        console.log(player);
    }

}