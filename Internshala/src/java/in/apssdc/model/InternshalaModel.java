package in.apssdc.model;


import com.andromeda.commons.model.BaseModel;
import java.util.List;
import java.util.Date;


public class InternshalaModel extends BaseModel 
{
	private static final long serialVersionUID = 1L;
	private String id;
	private String formNumber;
	private String collegeName;
	private String ipAddress;
	private String registrationId;
	private String name;
	private String aadhaar;
	private String phone;
	private String email;
	private Integer collegeId; 
    private String graduationCollege;
	private String year;
	private String spocName; 
	private String spocPhone;
	private String spocEmail;
    private List<FileModel> filePaths;
	private List<String> paths;
	private String filePath;
	private String fileExtension;
	private String fileFormat;
    private String graduationyear;
	private String graduationbranch;
	
	 public String getSpocName() {
			return spocName;
		}
		public void setSpocName(String spocName) {
			this.spocName = spocName;
		}
		public String getSpocPhone() {
			return spocPhone;
		}
		public void setSpocPhone(String spocPhone) {
			this.spocPhone = spocPhone;
		}
		public String getSpocEmail() {
			return spocEmail;
		}
		public void setSpocEmail(String spocEmail) {
			this.spocEmail = spocEmail;
		}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFormNumber() {
		return formNumber;
	}
	public void setFormNumber(String formNumber) {
		this.formNumber = formNumber;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public String getIpAddress() {
		return ipAddress;
	}
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}
	public String getRegistrationId() {
		return registrationId;
	}
	public void setRegistrationId(String registrationId) {
		this.registrationId = registrationId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAadhaar() {
		return aadhaar;
	}
	public void setAadhaar(String aadhaar) {
		this.aadhaar = aadhaar;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGraduationCollege() {
		return graduationCollege;
	}
	public void setGraduationCollege(String graduationCollege) {
		this.graduationCollege = graduationCollege;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	
	public List<FileModel> getFilePaths() {
		return filePaths;
	}
	public void setFilePaths(List<FileModel> filePaths) {
		this.filePaths = filePaths;
	}
	public List<String> getPaths() {
		return paths;
	}
	public void setPaths(List<String> paths) {
		this.paths = paths;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getFileExtension() {
		return fileExtension;
	}
	public void setFileExtension(String fileExtension) {
		this.fileExtension = fileExtension;
	}
	public String getFileFormat() {
		return fileFormat;
	}
	public void setFileFormat(String fileFormat) {
		this.fileFormat = fileFormat;
	}
	public String getGraduationyear() {
		return graduationyear;
	}
	public void setGraduationyear(String graduationyear) {
		this.graduationyear = graduationyear;
	}
	public String getGraduationbranch() {
		return graduationbranch;
	}
	public void setGraduationbranch(String graduationbranch) {
		this.graduationbranch = graduationbranch;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Integer getCollegeId() {
		return collegeId;
	}
	public void setCollegeId(Integer collegeId) {
		this.collegeId = collegeId;
	}

	
}
