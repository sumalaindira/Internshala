package in.apssdc.model;

import com.andromeda.commons.model.BaseModel;

public class FileModel extends BaseModel
{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String fileName;
	private String base64String;
	private String name;
	private String id;
	private String folderName;
	//private Integer collegeId;
	/*public Integer getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(Integer collegeId) {
		this.collegeId = collegeId;
	}*/

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getId()
	{
		return id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public String getFolderName()
	{
		return folderName;
	}

	public void setFolderName(String folderName)
	{
		this.folderName = folderName;
	}

	public static long getSerialversionuid()
	{
		return serialVersionUID;
	}

	public String getFileName()
	{
		return fileName;
	}

	public void setFileName(String fileName)
	{
		this.fileName = fileName;
	}

	public String getBase64String()
	{
		return base64String;
	}

	public void setBase64String(String base64String)
	{
		this.base64String = base64String;
	}

}
