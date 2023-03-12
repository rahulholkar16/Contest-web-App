let btn = document.querySelectorAll(".menu-btn");

btn[0].addEventListener("click", active);

function active() {

    let header = document.body.firstElementChild;
    header.classList.toggle("active");
}

btn[1].addEventListener("click", remove);

function remove(){
    let header = document.body.firstElementChild;
    header.classList.toggle("active");
    
}


// ====================================================
//                  Kontest API
// ====================================================

let url = "https://kontests.net/api/v1/all";

const main = async ()=>{
    let API = await fetch(url);
    return API;
}

let box = document.querySelector(".mybox");
let innerthtml;
main().then((response)=>{
    return response.json();
}).then((data)=>{
        innerthtml = data.map((element, index)=>{
            return `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">Organaize By : ${element.site}</p>
                        <p class="card-text">Start Date and Time : ${element.start_time}</p>
                        <p class="card-text">End Date and Time : ${element.end_time}</p>
                        <a href="${element.url}" class="btn btn-primary">VISIT</a>
                    </div>
                </div>
                `
        })
        console.log(innerthtml);
        box.innerHTML = innerthtml;   
})

