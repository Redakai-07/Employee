import axios from "axios";
import urls from "./URL";

// Create New HR
export const createHr = async (email, password, navigate) => {
  try {
    const token = localStorage.getItem("ceo_token");
    if (!token) {
        alert("No token found. Please re-login.");
        navigate("/login");
        return;
      }
    const response = await axios.post(urls.ceo.createHr, {
      email: email,
      password: password,
      headers: {Authorization: `Bearer ${token}` }
    });
    if (response.status === 201) {
      alert("New HR Added");
      navigate("/ceo-login");
    }
  } catch (error) {
    if (error.response?.status === 403) {
        alert("Session Expired, please relogin");
        localStorage.removeItem("ceo_token");
        navigate("/login");
      }
    if (error.response?.status === 400) {
      alert("Error Creating HR !!!");
      console.log(error);
    }
  }
};


// Get All HRs
export const getHrs = async (navigate) =>{
    try {
        const token = localStorage.getItem("ceo_token");
        if (!token) {
          alert("No token found. Please login.");
          navigate("/login");
          return;
        }
    
        const response = await axios.get(urls.ceo.getHrs, {
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: (status) => status < 500,
        });
        if (response.status === 200) {
          console.log(response.data);
          return response.data;
        }
          
        else {
          alert("Session expired. Please re-login");
          localStorage.removeItem("ceo_token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        return null;
      }
}


// Delete HR
export const delHr = async (id,navigate) =>{
    try {
        const token = localStorage.getItem("ceo_token");
        if (!token) {
          alert("No token found. Please login.");
          navigate("/login");
          return;
        }
        const response = await axios.delete(`${urls.ceo.delHr}/${id}`,{
            headers: { Authorization: `Bearer ${token}` },
        })
        if (response.status === 200) {
            return {success:true}
        }
    } catch (error) {
        console("Error deleting the HR",error);
        if (error.response?.status === 401) {
            alert("Session expired. Please re-login.");
            localStorage.removeItem("ceo_token");
            navigate("/login");
          }
          return {success:false};
    }
}