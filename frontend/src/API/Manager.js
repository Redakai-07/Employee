import axios from "axios";
import urls from "./URL";

// Get All Employees
export const getEmp = async (navigate) => {
  try {
    const token = localStorage.getItem("manager_token");
    if (!token) {
      alert("No token found. Please login.");
      navigate("/login");
      return null;
    }

    const response = await axios.get(urls.manager.getEmps, {
      headers: { Authorization: `Bearer ${token}` },
      validateStatus: (status) => status < 500,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      alert("Session expired. Please re-login.");
      localStorage.removeItem("manager_token");
      navigate("/login");
      return null;
    }
  } catch (error) {
    console.error("Error fetching employees:", error);
    return null;
  }
};

// Delete Employee
export const delEmp = async (id, navigate) => {
  try {
    const token = localStorage.getItem("manager_token");
    if (!token) {
      alert("No token found. Please login.");
      navigate("/login");
      return;
    }

    const response = await axios.delete(`${urls.manager.delEmp}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      alert(`Employee with ID ${id} deleted successfully.`);
    } else {
      alert("Failed to delete employee.");
    }
  } catch (error) {
    console.error("Error deleting employee:", error);
    if (error.response?.status === 401) {
      alert("Session expired. Please re-login.");
      localStorage.removeItem("manager_token");
      navigate("/login");
    }
  }
};

// Edit Employee
export const editEmp = async (id,fName,lName,email,altEmail,mobile,altMobile,navigate) => {
  try {
    const token = localStorage.getItem("manager_token");
    if (!token) {
      alert("No token found. Please login.");
      navigate("/login");
      return { success: false };
    }
    const payload = Object.fromEntries(
      Object.entries({ fName, lName, email, altEmail, mobile, altMobile })
          .filter(([_, value]) => value !== undefined)
  );
    const response = await axios.patch(`${urls.manager.editEmp}/${id}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("Error editing employee:", error);
    return { success: false };
  }
};