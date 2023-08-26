
let allData = [];
document.getElementById("serche");
serche.addEventListener("click", function () {
  allApiData(getdata.value);
});

let getdata = document.getElementById("getdata");
// let notFound =document.getElementById('notFound')
function allApiData(mails) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open(
    "GET",
    `https://forkify-api.herokuapp.com/api/search?q=${mails}`
  );
  xmlhttp.send();
  xmlhttp.addEventListener("readystatechange", function () {
    if (xmlhttp.readyState === 4) {
      allData = JSON.parse(xmlhttp.response).recipes;
      mail();
    }
  });
}
function mail() {
  let mailData = ``;
  for (let i = 0; i < allData.length; i++) {
    mailData += `
        <div class="col-md-4  ">
        <div class="card " style="width: 20rem ">
              <img src='${allData[i].image_url}' class=" imgs card-img-top " alt="bg-missing" />
              <div class="card-body  ">
              <h5 class="card-text">${allData[i].title}</h5>
                <p class="card-title">${allData[i].publisher}</p>
                <a target='_blank' href="${allData[i].publisher_url}" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
      </div>
        
        `;
  }
  document.getElementById("allData").innerHTML = mailData;
}

let links = document.querySelectorAll(".home .nav-link");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    allApiData(e.target.innerHTML);
  });
}
