	
function showDiv() {	
	document.getElementById('area').style.display = "block"; 
	document.getElementById("reply").style.visibility = "hidden";
}


$(document).ready(function() {
	setTimeout(function() {
		$('#myModal').modal('hide');
    }, 5500); // milliseconds
	$('#myModal').on('hidden.bs.modal', function (e) {
		$('#myModal_sent').modal('show');

	})
});

