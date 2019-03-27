package in.apssdc.controller;



import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.andromeda.commons.model.Response;
import com.andromeda.commons.util.HttpUtils;
import in.apssdc.model.InternshalaModel;
import in.apssdc.service.internshalaService;

@RestController 
@RequestMapping("/process")
public class internshalaController {      
 
	@Autowired
	private internshalaService internshalaService;

	@ResponseBody
	@RequestMapping(value = { "/submitDetails" }, method = { RequestMethod.POST })
	public Response submitDetails(@RequestBody List<InternshalaModel> student,  
			HttpServletRequest httpServletRequest)
	{
		String clientAddress = HttpUtils.getClientAddress(httpServletRequest);
		String proxyAddress = HttpUtils.getClientProxyAddress(httpServletRequest);
		String ipAddress =
				"Client Address: " + clientAddress + "Client Proxy Address: " + proxyAddress;
		List<String> pathsList = new ArrayList<String>();
		// StudentRegistrationModal studentRegistrationModal =(StudentRegistrationModal)
		// student.get(0);
		return this.internshalaService.submitDetails(student, ipAddress, pathsList);
	}
	
	
	/*@ResponseBody
	@RequestMapping(value = "getAadhaarCount", method = { RequestMethod.POST, RequestMethod.GET })
	public Response getEoiStatusReport()
	{
		return internshalaService.getAadhaarCount();
	}*/

}




