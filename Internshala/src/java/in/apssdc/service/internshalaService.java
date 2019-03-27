package in.apssdc.service;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.andromeda.commons.model.Response;
import in.apssdc.dao.internshalaDAO;
import in.apssdc.model.InternshalaModel;



@Service
public class internshalaService {

	Response response = new Response();
	
	@Autowired
	private internshalaDAO internshalaDAO;
    public Response submitDetails(List<InternshalaModel> student, String ipAddress, List<String> pathsList) {
		this.response.setSuccessful(false);
		  Map<String, Object> list=this.internshalaDAO.submitDetails(student, ipAddress);
		  
		  InternshalaModel filePathsMail = new InternshalaModel();
		  filePathsMail.setCollegeName(((InternshalaModel)student.get(0)).getCollegeName());
		  filePathsMail.setPaths(pathsList);
		  
		 // mailSend(filePathsMail);
		  
		  this.response.setSuccessful(true);
		  response.setResponseObject(list);
		  
		  return this.response;   
	}
    
   /* public Response getAadhaarCount()
	{
		response.setSuccessful(false);
		List<Map<String, Object>> list = internshalaDAO.getAadhaarCount();
		response.setResponseObject(list);
		response.setSuccessful(true);
		return response;
	}
    */


}





