function changeMenuItem(menuItem)
{
	jQuery(".left-menu-item").each(function() {
		jQuery(this).removeClass("active");
	});

	jQuery("#" + menuItem).addClass("active");
}

function changeItem(menuItem)
{
	jQuery(".left-menu-item").each(function() {
		jQuery(this).removeClass("active");
	});

	jQuery(menuItem).addClass("active");
}
function exportData() {
    var blob = new Blob([document.getElementById('replaceDiv').innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
    });
    var fileName = "UIFReport.xls";
    saveAs(blob, fileName);
};


/*internshala Report Start*/

function internshalaReg()
{
	
	jQuery("#amdContainerDiv").load("html/internshalaReg.html");
}

/*internshala Report End*/


function getUrlParameter(sParam) {
				    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
				        sURLVariables = sPageURL.split('&'),
				        sParameterName,
				        i;
				
				    for (i = 0; i < sURLVariables.length; i++) {
				        sParameterName = sURLVariables[i].split('=');
				
				        if (sParameterName[0] === sParam) {
				            return sParameterName[1] === undefined ? true : sParameterName[1];
				        }
				    }
};


function showDetails(id,name,email,gender,father,aadharno,dob,phone) {
	var popup = "<div style='width:520px;' id='message'>"
			+ "<div style='width:400px; float:left;'>"
			+ "<table cellpadding='0' cellspacing='0' border='0' style='float: left'>"
			+ "<thead>" + "<tr>"
			+ "<td colspan='2' style='border: 0; padding-bottom: 50px;'>"
			+ "<table class='table' border='0'>" + "<tbody>" + "<tr>"
			+ "<th style='text-align: left'>ID</th>"
			+ "<td style='width:200px'>"
			+ id
			+ "</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<th style='text-align: left'>Name</th>"
			+ "<td style='width:200px'>"
			+ decodeURI(name)
			+ "</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<th style='text-align: left'>Email</th>"
			+ "<td style='width:200px'>"
			+ email
			+ "</td>"
			+ "</tr>"

			+ "<tr>"
			+ "<th style='text-align: left'>Gender</th>"
			+ "<td style='width:200px'>"
			+ gender
			+ "</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<th style='text-align: left'>DOB</th>"
			+ "<td style='width:200px'>"
			+ dob
			+ "</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<th style='text-align: left'>Guardian</th>"
			+ "<td style='width:200px'>"
			+ decodeURI(father)
			+ "</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<th style='text-align: left'>Phone No</th>"
			+ "<td style='width:200px'>"
			+ phone
			+ "</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<th style='text-align: left'>Aadhar No</th>"
			+ "<td style='width:200px'>"
			+ aadharno
			+ "</td>"
			+ "</tr>"

			+ "</tbody>"
			+ "</table>"
			+ "</td>"
			+ "</tr>"
			+ "</table>"
			+ "</div>"

			+ "<div style='width:100px; float:left;'>"
			+ "<table border='0' style='float: left'>"
			+ "<tbody>"
			+ "<tr>"
			+ "<th colspan='2'></th>"
			+ "</tr>"
			+ "<tr>"
			+ "<td align='center'><img alt='photo' src='/miniproject/AadharPhotos/"
			+ aadharno
			+ ".jpg' id='photo' style='width: 110px; height: 155px;' align='middle'></td>"
			+ "</tr>" + "</tbody>" + "</table>" 
			+"<input type='submit' value='Edit'>"
			+ "</div>" + "</div>";
	$("#popup").html(popup);
	$("#popup").dialog({
		width : 'auto'
	});
}