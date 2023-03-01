$(document).ready(function(){
	var vis = false;
	$("#visib").click(function(){
		if (vis == false){
			$("#password").attr("type", "text");
			$("#visib").attr("src", "./media/view.png");
			vis = true;
		}else{
			$("#password").attr("type", "password");
			$("#visib").attr("src", "./media/hidden.png");
			vis = false;
		}
	});

/*	function password() {
		if
	} */
});
