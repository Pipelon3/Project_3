//const reviews = document.getElementById('mall-cards');

function reviews() {
    fetch('/api/review.js')
        .then(res=> {
            if(res.ok){
                return res.json();
            }
        })
    };