var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
async function foo(){
    var res = await fetch("https://the-dune-api.herokuapp.com/quotes")
    var res1 = await res.json();
    console.log(res1);
    var div = document.createElement("div")
    row.innerHTML =`
    <div class ="col-md-4">
    <div class="card border-dark mb-3" style="max-width: 18rem; margin:50px 10px;">
    <div class="card-header">Quotes</div>
    <div class="card-body text-success">
    <h5 class="card-title"><b style="color: orange;">I'd :</b>${res1[0].id}</h5>
    <h5 class="card-title"><b style="color: orange;">quote :</b>${res1[0].quote}</h5>
</div>
  </div>
  </div>
  `;

    document.body.append(container);
}
foo();