let cl = console.log;
cl(countriesFlag);

const flagContainer = document.getElementById("flagContainer")

let result = '';

countriesFlag.forEach(function (count){
    result += `
            <div class="col-sm-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="flag mb-4">
                      <img src="${count.flag}" alt="${count.name}" title="${count.name} " class="img-fluid">
                    </div>
                    <h3 class ="cName">
                      ${count.name}
                    </h3>
                    <div class="details">
                      <p> <strong> capital </strong> : ${count.capital}</p>
                      <p> <strong> languages </strong> : ${count.languages}</p>
                      <p> <strong> population </strong> : ${count.population}</p>
                    </div>
                  </div>
                </div>
            </div>
             `
});

flagContainer.innerHTML = result;