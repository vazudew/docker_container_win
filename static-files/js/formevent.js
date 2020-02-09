//GET CITIES
function getCities(event) {
event.preventDefault(); 
var country = document.getElementById('country').value;
 fetch('http://127.0.0.1:8891/' + country +'/cities')
.then((res) => { return res.json() })
.then((data) => {
    let result = `<h2> Cities </h2>`;
    data.forEach((city) => {
        result +=
            `<div>
                 <ul class="w3-ul">
                     <li> City Name : ${city}</li>
                 </ul>
              </div>`;
                document.getElementById('result').innerHTML = result;
            });
        })
}

//POST CITY
function addCity(event) {
  event.preventDefault(); 
  var country = document.getElementById('countryList').value;
  var city = document.getElementById('cityEntry').value;
  document.getElementById('cityEntry').value = ""
   fetch('http://127.0.0.1:8891/countries/' + country +'/'+ city, {
      method: 'post'
    }
   )
  .then((res) => { return res.json() })
  .then((data) => {
      let result = `<h2> Updated Cities </h2>`;
      data.forEach((city) => {
          result +=
              `<div>
                   <ul class="w3-ul">
                       <li> City Name : ${city}</li>
                   </ul>
                </div>`;
                  document.getElementById('result').innerHTML = result;
              });
          })
  }


//Delete entry
function deleteCity(event) {
  event.preventDefault(); 
  var country = document.getElementById('countryLi').value;
  var city = document.getElementById('cityEntryDel').value;
  document.getElementById('cityEntryDel').value = ""
   fetch('http://127.0.0.1:8891/countries/' + country +'/'+ city, {
      method: 'delete'
    }
   )
  .then((res) => { return res.json() })
  .then((data) => {
      let result = `<h2> Updated Cities </h2>`;
      data.forEach((city) => {
          result +=
              `<div>
                   <ul class="w3-ul">
                       <li> City Name : ${city}</li>
                   </ul>
                </div>`;
                  document.getElementById('result').innerHTML = result;
              });
          })
  }


document.getElementById('getCityFromWorld').addEventListener("submit", getCities)
document.getElementById('addCity').addEventListener("submit", addCity)
document.getElementById('deleteCity').addEventListener("submit", deleteCity)