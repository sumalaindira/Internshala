var Andromeda = {

	showPage : function(path, targetDiv) {
		var jqxhr = jQuery.post(path, function(data) {
			jQuery("#" + targetDiv).html(data);
		});
	},

	showHomePage : function() {
		var path = "/uif/html/general/Home.html";
		Andromeda.showPage(path, "indexDiv");
	},

	showSlideshowPage : function() {
		var path = "/uif/html/general/Slideshow.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	showAboutPage : function() {
		var path = "/uif/html/general/About.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	showSubscribePage : function() {
		var path = "/uif/html/general/subscribe.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	showLoginPage : function() {
		var path = "/uif/html/login/Login.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	showDashboard : function() {
		var path = "/uif/html/general/Dashboard.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	showMainPage : function() {
		var path = "/uif/html/general/MainPage.html";
		Andromeda.showPage(path, "indexDiv");
	},

	showCollegesPage : function() {
		var path = "/uif/html/general/Colleges.html";
		Andromeda.showPage(path, "indexDiv");
	},

	show3DDonut : function() {
		var path = "/uif/html/general/DonutChart.html";
		Andromeda.showPage(path, "replaceDiv");
	},

	home : function() {
		window.location.reload();
	},

	setSessionValue : function(key, value) {
		sessionStorage.setItem(key, value);
	},

	getSessionValue : function(key) {
		return sessionStorage.getItem(key);
	},

	removeSessionValue : function(key) {
		sessionStorage.removeItem(key);
	},

	showError : function(errorMessage) {
		var message = "<div class=\"alert alert-danger\"><strong>Error: </strong>"
				+ errorMessage + "</div>";
		jQuery("#errorDiv").html(message);
	},

	/*logout : function() {
		var username = Andromeda.getSessionValue("username") || "";
		Andromeda.setSessionValue("userName", null);
		Andromeda.setSessionValue("context", null);
		Andromeda.setSessionValue("collegeId", null);
		var data = {
			username : username
		};
		Andromeda.post('/uif/login/logout', data);
		showHomePage();
	},*/
	logout : function() {
		var username = Andromeda.getSessionValue("username") || "";
		Andromeda.setSessionValue("username", null);
		Andromeda.setSessionValue("context", null);
		Andromeda.setSessionValue("collegeid", null);
		var data = {
			username : username
		};
		Andromeda.post('/andromeda/security/logout', data);
		showHomePage();
	},

	post : function(url, data) {
		var responseData = null;

		jQuery.ajax({
			url : url,
			type : 'post',
			data : JSON.stringify(data), // Stringified Json Object
			dataType : 'json',
			async : false, // Cross-domain requests and dataType: "jsonp"
			// requests do not support synchronous operation
			cache : false, // This will force requested pages not to be cached
			// by the browser
			processData : false, // To avoid making query String instead of
			// JSON
			contentType : "application/json; charset=utf-8",
			success : function(data) {
				responseData = data;
			}
		});

		return responseData;
	},

	/*isUserLoggedIn : function() {
		var username = Andromeda.getSessionValue("userName") || "";
		var context = Andromeda.getSessionValue("context") || "";
		var collegeid = Andromeda.getSessionValue("collegeId") || "";

		var login = {
			userName : username,
			context : context,
			cliendId : collegeid
		};

		return Andromeda.post('/andromeda/security/loggedin', login) || false;
	}*/
	
	isUserLoggedIn : function() {
		var username = Andromeda.getSessionValue('userName') || "";
		var context = Andromeda.getSessionValue('context') || "";
		var role = Andromeda.getSessionValue('role') || "";
		var login = {
			username : username,
			context : context,
			role : role
		};
		console.log(login);
		return Andromeda.post('/andromeda/security/loggedin', login) || false;
	},

};