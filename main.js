// Initialize Firebase
var config = {
    apiKey: "AIzaSyByZIbMeOlaMthkuWBv08TH_BoXnBO8gnw",
    authDomain: "belajar-map-a9aea.firebaseapp.com",
    databaseURL: "https://belajar-map-a9aea.firebaseio.com",
    projectId: "belajar-map-a9aea",
    storageBucket: "belajar-map-a9aea.appspot.com",
    messagingSenderId: "854504402721"
  };
  firebase.initializeApp(config);

  var db    = firebase.database();
  var ref   = db.ref('markers');

  ref.on('value', getData, showError);

  function getData(data){
    var marker = data.val();
    kunci = Object.keys(data.val());
    console.log(marker);
    var content = "";
    for(var i=0; i<kunci.length; i++){
        content += marker[kunci[i]].coordinate.lat + "<br>";
    }
    document.getElementById('info').innerHTML = content;
  }
  function showError(err){
    document.getElementById('info').innerHTML = err;
  }

  document.getElementById('simpan').addEventListener('click', function(event){
    ref.push(
        {
            coordinate: {
                lat: document.getElementById('latitude').value,
                lng: document.getElementById('longitude').value
            },
            info: document.getElementById('informasi').value
        }
    );
  });