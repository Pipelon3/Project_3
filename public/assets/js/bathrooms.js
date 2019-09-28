const url_string = window.location.href;
const url = new URL(url_string);
const mallId = url.searchParams.get("id");
console.log('');


// function bathroom() {
//     fetch(`/api/location/single/`)
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => console.error(error));
// }