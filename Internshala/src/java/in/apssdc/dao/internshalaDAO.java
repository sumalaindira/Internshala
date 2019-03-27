package in.apssdc.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.exceptions.PersistenceException;
import com.andromeda.commons.dao.BaseDAO;
import in.apssdc.model.ExcleModel;
import in.apssdc.model.InternshalaModel;
import in.apssdc.service.internshalaService;

public class internshalaDAO extends BaseDAO {

	public Map<String, Object> submitDetails(List<InternshalaModel> student, String ipAddress) {
		Map<String, Object> map = new HashMap<String, Object>();

		InternshalaModel studentRegistrationModal1 = new InternshalaModel();
		
		studentRegistrationModal1.setFilePath(((InternshalaModel) student.get(0)).getFilePath());
		studentRegistrationModal1.setFileExtension(((InternshalaModel) student.get(0)).getFileExtension());
		Map<String, Object> map1 = new HashMap<String, Object>();
		map1.put("p1", studentRegistrationModal1);
		sqlSessionTemplate.insert("Internshala.saveFileUploadDetails", map1);
		try {
			if (student.size() > 0) {
				Iterator<InternshalaModel> i = student.iterator();
				while (i.hasNext()) {
					InternshalaModel internshalaModal = (InternshalaModel) i.next();
					internshalaModal.setIpAddress(ipAddress);
					map.put("p", internshalaModal);
					if ((internshalaModal.getRegistrationId() != null)) {
						if ((internshalaModal.getRegistrationId() != null)) {
							this.sqlSessionTemplate.insert("Internshala.submitDetails", map);
						}
					}
				}    
			}
		} catch (Throwable t) {
			System.out.println("Excepction occured during updateBatch: " + t);

			throw new PersistenceException(t);
		}
		List<ExcleModel> list = null;

		list = sqlSessionTemplate.selectList("Internshala.getInternshalaSummary", map);
		Map<String, Object> map2 = new HashMap<String, Object>();
		map2.put("excleModel", list);
		return map2;
	}
	
	/*public List<Map<String, Object>> getAadhaarCount()
	{
		List<Map<String, Object>> aadhaar =
				sqlSessionTemplate.selectList("EoI.getAadhaarCount");
		return aadhaar;
	}*/


}
