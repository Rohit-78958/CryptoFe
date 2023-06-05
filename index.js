var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.coinstats.app/public/v1/coins?currency=INR", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      
      //console.log(typeof(result))-->object
      ihtml=""
      for(j in result){
        for(i in result[j]){
          //console.log(result[j][i])
          ihtml+=`<div class="col">
          <div class="card">
            <img src="${result[j][i].icon}" class="card-img-top" alt="">
            <div class="card-body">
              <h4 class="card-title">${result[j][i].name} (${result[j][i].symbol})</h5>
              <h3 class="card-price">Rs.${result[j][i].price}</h4>
              <h5 class="card-supply"><b>Total-supply</b>${result[j][i].totalSupply}</h4>
              <h5 class="card-cap"><b>Market-cap</b>${result[j][i].marketCap}</h4>
              <h5 class="card-price"><b></b>${result[j][i].priceChange1w}</h4>
              <h5 class="card-price"><b></b>${result[j][i].priceChange1d}</h4>
              <h5 class="card-price"><b></b>${result[j][i].priceChange1h}</h4>
            </div>
          </div>
        </div>`

        document.getElementById("info").innerHTML=ihtml
        }
      }
    })
    .catch(error => console.log('error', error));