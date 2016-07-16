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
	$.post('/'+routeParam, userObj, function(data){
		window.location = data.redirect;
	});
}

