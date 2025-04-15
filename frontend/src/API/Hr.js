import axios from "axios";
import urls from "./URL";

// Create New Asst HR
export const createHr = async (email, password,hr, navigate) => {
    try {
      const token = localStorage.getItem("hr_token");
      if (!token) {
          alert("No token found. Please re-login.");
          navigate("/login");
          return;
        }
      const response = await axios.post(urls.hr.createAsst, {
        email: email,
        password: password,
        hr:hr,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
      if (response.status === 201) {
        alert("New Asst.HR Added");
        navigate("/hr-login");
      }
    } catch (error) {
      if (error.response?.status === 403) {
          alert("Session Expired, please relogin");
          localStorage.removeItem("hr_token");
          navigate("/login");
        }
      if (error.response?.status === 400) {
        alert("Error Creating Asst.HR !!!");
        console.log(error);
      }
    }
  };



//   Get All Asst.HR under specific HR
export const getAsstHrs = async (id,navigate) =>{
    try {
        const token = localStorage.getItem("hr_token");
        if (!token) {
          alert("No token found. Please login.");
          navigate("/login");
          return;
        }
    
        const response = await axios.get(`${urls.hr.getAsst}/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: (status) => status < 500,
        });
        if (response.status === 200) return response.data;
        else {
          alert("Session expired. Please re-login");
          localStorage.removeItem("hr_token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        return null;
      }
};


// Delete Asst.HR by ID
export const delAsstHr = async (id,navigate) =>{
    try {
        const token = localStorage.getItem("hr_token");
        if (!token) {
          alert("No token found. Please login.");
          navigate("/login");
          return;
        }
        const response = await axios.delete(`${urls.hr.delAsst}/${id}`,{
            headers: { Authorization: `Bearer ${token}` },
        })
        if (response.status === 200) {
            return {success:true}
        }
    } catch (error) {
        console("Error deleting the Asst.HR",error);
        if (error.response?.status === 401) {
            alert("Session expired. Please re-login.");
            localStorage.removeItem("hr_token");
            navigate("/login");
          }
          return {success:false};
    }
};



// Submit the Employee
export const submitEmp = async(id,navigate) =>{
    try {
        const token= localStorage.getItem("hr_token");
        if (!token) {
            alert("No token found. Please login.");
            navigate("/login");
            return;
          }

        const response = await axios.post(`${urls.hr.empSubmit}/${id}`,{},{
            headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data) {
          return response.data;
        }
    } catch (error) {
        return error.response;
    }
}; 

// Get All the Unsubmitted Employees
export const getEmp = async (navigate) =>{
    try {
        const token = localStorage.getItem("hr_token");
        if (!token) {
          alert("No token found. Please login.");
          navigate("/login");
          return;
        }
    
        const response = await axios.get(urls.hr.getEmp, {
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: (status) => status < 500,
        });
        if (response.status === 200) return response.data;
        else {
          alert("Session expired. Please re-login");
          localStorage.removeItem("hr_token");
          navigate("/login");
        }
      } catch (error) {
        
        console.error("Error fetching users:", error);
        return null;
      }
};