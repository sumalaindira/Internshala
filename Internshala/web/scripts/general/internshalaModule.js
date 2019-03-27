
var app = angular.module('xlsxMod', ['xlsx-model'])
.controller('xlsxCtrl', [ '$http', '$scope', function($http, $scope) {
	var self = this;
	//Save excel data

    $scope.submit = function(excelData,data)
    {
    	
    	
    	console.log(data);
    	if(data == undefined)
		{
			swal("OOPS!","Fill all details","info");
		}
		else if(data.year == null || data.year == undefined || data.year == "")
		{
			swal("Oops...","Select year","info");
		}
		else if(data.spocName == null || data.spocName == undefined || data.spocName == "")
		{
			swal("Oops...","Select spocName","info");
		}
		else
		{  
    	 
    	//console.log(excelData);
        jQuery("#spinner1").show();
        var student = [];
        $scope.excelDetails = excelData.slice(1, excelData.length);
        var excelLength =  $scope.excelDetails.length, keepOnGoing = true;
       
            for(var i = 0; i < $scope.excelDetails.length; i++)
            {
            	  var studentsDetails = {};
            	
            	 if($scope.excelDetails[i]['Aadhaar*'] != null && $scope.excelDetails[i]['Aadhaar*'] != undefined && $scope.excelDetails[i]['Aadhaar*'] != "")
                 {
                 	var aadhaarLength = $scope.excelDetails[i]['Aadhaar*'].length;
                 	if($scope.excelDetails[i]['Aadhaar*'].indexOf("-") > 0)
                     {
                         $scope.excelDetails[i]['Aadhaar*'] = $scope.excelDetails[i]['Aadhaar*'].trim().split("-").join("");
                     }
                     
                     if($scope.excelDetails[i]['Aadhaar*'].indexOf(",") > 0)
                     {
                         $scope.excelDetails[i]['Aadhaar*'] = $scope.excelDetails[i]['Aadhaar*'].split(",").join("");
                         if($scope.excelDetails[i]['Aadhaar*'].length == 12)
                         {
                             
                         }
                         else if($scope.excelDetails[i]['Aadhaar*'] > 12)
                         {
                             $scope.excelDetails[i]['Aadhaar*'] = $scope.excelDetails[i]['Aadhaar*'].slice(0,12);
                         }
                     }
                 }
        		 
            /*	 if($scope.excelDetails[i]['Aadhaar*'] == null || $scope.excelDetails[i]['Aadhaar*'] == undefined || 
                         $scope.excelDetails[i]['Aadhaar*'] == "" || $scope.excelDetails[i]['Aadhaar*'] == 123412341234 || 
                         $scope.excelDetails[i]['Aadhaar*'] == 999999999999 || $scope.excelDetails[i]['Aadhaar*'].length != 12)
                 {
                     jQuery("#spinner1").hide();
                     jQuery("#msgDiv").show();
                     alert("Enter valid aadhaar number at line no " + (i+3));
                 }*/
            	 
       
             if($scope.excelDetails[i]['Registration Id (JNTU No)*'] == null || $scope.excelDetails[i]['Registration Id (JNTU No)*'] == undefined || 
                         $scope.excelDetails[i]['Registration Id (JNTU No)*'] == "")
                 {
            		 jQuery("#spinner1").hide();
            		 alert("Enter Registration Id at line no " + (i+3));
                 }
                 else
                 {
                 	studentsDetails.registrationId = $scope.excelDetails[i]['Registration Id (JNTU No)*'].toUpperCase().trim();
                 }
            	 
             	if(($scope.excelDetails[i]['Registration Id (JNTU No)*'] != null ))
            	  {
            		  
            		  if($scope.excelDetails[i]['Aadhaar*'] != null)            		  
            		  studentsDetails.aadhaar = $scope.excelDetails[i]['Aadhaar*'].trim();
                 	 
                 	 if($scope.excelDetails[i]['Name*'] != null)
                 		 studentsDetails.name = $scope.excelDetails[i]['Name*'].trim(); 
                 	 
                 	 if($scope.excelDetails[i]['Phone*'] != null)
                 		 studentsDetails.phone = $scope.excelDetails[i]['Phone*'].trim();
                 	 
                 	 if($scope.excelDetails[i]['E-mail Id*'] != null)
                 		 studentsDetails.email = $scope.excelDetails[i]['E-mail Id*'].trim();
            	  }
            	  else
            	  {
            		  alert("Registration id should not be null");
            	  }
            	
                
            	
                studentsDetails.year = data.year;
                studentsDetails.spocName = data.spocName;
                studentsDetails.spocEmail = data.spocEmail;
                studentsDetails.spocPhone = data.spocPhone;
                studentsDetails.collegeName = data.collegeName;
            	//studentsDetails.collegeId = Andromeda.getSessionValue('collegeid');
              //  console.log(Andromeda.getSessionValue('filePath'));
                studentsDetails.filePath = Andromeda.getSessionValue('filePath');
                studentsDetails.fileExtension = Andromeda.getSessionValue('fileFormat');
                student.push(studentsDetails);
              //  console.log(student);
 
            }
             
         //   $("#spinner1").show();
           
           // student = student + yearobject;
            console.log(student);
            $http.post('/internshala/process/submitDetails', student).then(function(response)
        			{
            	
            	//aleart("with in function of controll");
                $scope.data1 = response.data;
                if($scope.data1.successful) {
                	 
                	$("#spinner1").hide();
                    alert("Data saved successfully");
				        if($scope.data1.responseObject.excleModel == null || 
							 $scope.data1.responseObject.excleModel === undefined ||
							 $scope.data1.responseObject.excleModel.length <= 0)
								{
							     $("#noSummaryData").html("<tr><td colspan='7'><center><h4  align='left'>No data available</h4></center></td><tr>");
							     $("#internshalaSummaryBody").hide();
								}
						 else
							 {
							
							 $("#internshalaSummaryBody").show();
							 $scope.singleCollegeStudentsSummary=$scope.data1.responseObject.ExcleModel;
							 }
                } else {
                    alert("Data not inserted");
                }
            }, function(errResponse) {
                console.error('Error while fetching notes');
            }); 
           	}
         };
   
    $scope.exportToExcel = function(id)
	{
		var blob = new Blob([document.getElementById(id).innerText], { 
	        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8" 
	    }); 
	    var fileName = "Report.xls"; 
	    saveAs(blob, fileName);
	};
	
	$scope.toggle = function(id)
	{
		$("#" + id).toggle();
	};    
	
} ]);

