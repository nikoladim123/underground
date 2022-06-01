// let show = document.getElementsByClassName('show')[0];
// let refresh = document.getElementsByClassName('refresh')[0];
//
// refresh.addEventListener('click',()=>{
//   navigator.geolocation.getCurrentPosition(success, error, options)
// })
//
// var options = {
//   enableHighAccuracy: true,
//   timeout: 50000
// };
//
// function success(pos) {
//   var crd = pos.coords;
//
//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
//   show.innerHTML = `Latitude : ${crd.latitude} Longitude: ${crd.longitude}`
// }
//
// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
//   console.log(err);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);


//v2
let show = document.getElementsByClassName('show')[0];
let refresh = document.getElementsByClassName('refresh')[0];

refresh.addEventListener('click',()=>{
  navigator.geolocation.watchPosition(success, error, options)
})

var options = {
  enableHighAccuracy: true,
  timeout: 50000
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  show.innerHTML = `Latitude : ${crd.latitude} Longitude: ${crd.longitude}`
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
  console.log(err);
}
