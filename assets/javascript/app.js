var config = {
	    apiKey: "DX12v0hAAzjNtNF5vXIzN10Yq",
	    authDomain: "bootcamp-homework.firebaseapp.com",
	   	    projectId: "firebase-homework",
	  };


firebase.initializeApp(config);

	  var database = firebase.database();

	  var trainName ;
	  var destination ;
	  var time ;
	  var frequency ;
	  var nextArrival ;
	  var minutesAway ;
	  var keyArray = [];

	  function timeDisplay() {
	  	var timeNow = moment().format("HH:mm:ss");
	  	$(".timeNow").html(timeNow)
	  };

	  setInterval(timeDisplay, 1000);




	$("#click-button").on("click", function(event) {
	  	event.preventDefault();

	   trainName = $("#name").val().trim();
	   	console.log("trainName " + trainName);
	   destination = $("#destination").val().trim();
	   	console.log("destination " + destination);
	   time = $("#time").val().trim();
	   	console.log("first train " + time);
	   frequency = $("#frequency").val().trim();
	   	console.log("frequency " + frequency);

	    currentTime = moment().format("HH:mm");
	    	console.log("currentTime " + currentTime);
	  	var timeConvert = moment(time, "HH:mm").subtract(1, "years");
	  		console.log(timeConvert);
	  	var timeDiff = moment().diff(moment(timeConvert), 'minutes');
	  		console.log("timeDiff " + timeDiff);
	  	var remainder = timeDiff % frequency;
	  		console.log("remainder " + remainder);
	  	minutesAway = frequency - remainder;
	  		console.log("minutes away " + minutesAway);
	  	nextArrival = moment().add(minutesAway, "m").format("hh:mm A");
	  		console.log("nextArrival " + nextArrival);


	    database.ref().child("trains").push({
	      trainName : trainName,
	      destination : destination,
	      time : time,
	      frequency : frequency,
	      nextArrival: nextArrival,
	      minutesAway: minutesAway
	    });
