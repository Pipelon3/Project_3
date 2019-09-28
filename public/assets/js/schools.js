const schoolCards = document.getElementById('school-cards');

function fetchSchools() {
    fetch('/api/location/all/schools')
        .then(res=> {
            if(res.ok){
                return res.json();
            }
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let school = data[i];
                const schoolCard = `<div class="card">
                <img src="./assets/images/fashion-place.jpg" class="card-img-top" alt="school card">
                <div class="card-body">
                  <h5 class="card-title">${school.loc_name}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Location</li>
                <li class="list-group-item">Number of Bathroom</li>
                <li class="list-group-item">Overall Rating</li>
              </ul>
              <div class="card-body">
                <a href="/bathroom?id=${school.id}" class="card-link">Visit</a>
              </div>
              </div>`;

                schoolCards.innerHTML += schoolCard;
            }
        })
        .catch(error => console.error(error));
}

fetchSchools();