$(function () {
	$("#navbar-toggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 758) {
			$("#bs-example-navbar-collapse-1").collapse('hide');
		}
	});
});

$(function () {
	$("#navbar-toggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth > 757) {
			$("#bs-example-navbar-collapse-1").collapse('hide');
		}
	});
});