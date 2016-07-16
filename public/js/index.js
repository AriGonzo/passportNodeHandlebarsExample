$('#submitUser').on('click', function(e){
	var userObj = createUserObj()
	var routeParam = $(e.currentTarget).attr('data-type');
	postUser(routeParam, userObj);
});

function createUserObj(){
	var userObj = {
		username: $('#username').val().trim(),
		password: $('#password').val().trim()
	};
	return userObj
}

function postUser(routeParam, userObj){
	$.post('/'+routeParam, userObj)
	.done(function(data){
		if (data.redirect) {
			window.location = data.redirect;
		} else {
			alert("Incorrect Username/Password Combo")
		}
	})
}

