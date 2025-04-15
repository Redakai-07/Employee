import axios from "axios";
import urls from "./URL";

// Create New Manager
export const createManager = async(email,password,asstHr,navigate) =>{
    try {
        const token = localStorage.getItem("asstHr_token");
        if (!token) {
            alert("No token found. Please re-login.");
            navigate("/login");
            return;
          }
        const response = await axios.post(urls.asstHr.createManager, {
          email: email,
          password: password,
          asstHr: asstHr,
          headers: {Authorization: `Bearer ${token}` }
        });
        if (response.status === 201) {
          alert("New Manager Added");
          navigate("/asst-login");
        }
      } catch (error) {
        if (error.response?.status === 403) {
            alert("Session Expired, please relogin");
            localStorage.removeItem("asstHr_token");
            navigate("/login");
          }
          if (error.response?.status === 500) {
            alert("One Asst-HR is allowed to create One Manager !!!");
          }
        if (error.response?.status === 400) {
          alert("Error Creating Manager !!!");
          console.log(error);
        }
      }
};



// Get All Managers
export const getManagers = async (navigate) =>{
    try {
        const token = localStorage.getItem("asstHr_token");
        if (!token) {
          alert("No token found. Please login.");
          navigate("/login");
          return;
        }
    
        const response = await axios.get(urls.asstHr.getManager, {
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: (status) => status < 500,
        });
        if (response.status === 200) return response.data;
        else {
          alert("Session expired. Please re-login");
          localStorage.removeItem("asstHr_token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        return null;
      }
};


// Get All Employees
export const getEmpV = async (navigate) =>{
    try {
        const token = localStorage.getItem("asstHr_token");
        if (!token) {
          alert("No token found. Please login.");
          navigate("/login");
          return;
        }
    
        const response = await axios.get(urls.asstHr.getEmp, {
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: (status) => status < 500,
        });
        if (response.status === 200) return response.data;
        else {
          alert("Session expired. Please re-login");
          localStorage.removeItem("asstHr_token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        return null;
      }
};


// Delete Manager by ID
export const delManagerById = async (id, asstId, navigate) => {
  try {
    const token = localStorage.getItem("asstHr_token");
    if (!token) {
      alert("No token found. Please login.");
      navigate("/login");
      return;
    }

    // Correct axios delete with proper params & headers
    const response = await axios.delete(`${urls.asstHr.delManager}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        asstId: asstId, // Correct placement for data in axios.delete
      },
    });

    if (response.status === 200) {
      return { success: true };
    }
  } catch (error) {
    console.log("Error deleting the Asst. HR:", error);
    alert("Manager couldn't be deleted");
    // Handle 401 errors properly
    if (error.response?.status === 401) {
      alert("Session expired. Please re-login.");
      localStorage.removeItem("asstHr_token");
      navigate("/login");
    }
    
    return { success: false };
  }
};



// Verify Employee
export const verifyEmp = async(id,navigate) =>{
    try {
        const token= localStorage.getItem("asstHr_token");
        if (!token) {
            alert("No token found. Please login.");
            navigate("/login");
            return;
          }
        const response = await axios.post(`${urls.asstHr.empVerify}/${id}`,{},{
            headers: { Authorization: `Bearer ${token}` },
        })
        if (response.status===201) {
            return {success:true};
        }
    } catch (error) {
        return {success:false}
    }
}; 