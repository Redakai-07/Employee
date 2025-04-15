import axios from "axios";
import url from "./URL";

// CEO Login
export const ceoLogin = async (email,password) => {
    try {
        const response = await axios.post(url.ceo.login,{
            email:email,
            password:password,
        });

        if (response.data.access_token) {
            localStorage.setItem("ceo_token", response.data.access_token);
            return { success: true, message:"Login successful",
                token: response.data.access_token };
          }
        
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        return {
            success: false,
            message: error.response?.data?.message || "Login failed",
          };
    }
}


// HR Login
export const hrLogin = async (email,password) => {
    try {
        const response = await axios.post(url.hr.login,{
            email:email,
            password:password,
        });

        if (response.data.access_token) {
            localStorage.setItem("hr_token", response.data.access_token);
            localStorage.setItem("hrId", response.data.hrId);
            return { success: true, message:"Login successful",
                token: response.data.access_token };
          }
        
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        return {
            success: false,
            message: error.response?.data?.message || "Login failed",
          };
    }
}


// Asst HR Login
export const asstHrLogin = async (email,password) => {
    try {
        const response = await axios.post(url.asstHr.login,{
            email:email,
            password:password,
        });

        if (response.data.access_token) {
            localStorage.setItem("asstHr_token", response.data.access_token);
            localStorage.setItem("asstHrId", response.data.asstHrId); 
            return { success: true, message:"Login successful",
                token: response.data.access_token };
          }
        
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        return {
            success: false,
            message: error.response?.data?.message || "Login failed",
          };
    }
}


// Manager Login
export const managerLogin = async (email,password) => {
    try {
        const response = await axios.post(url.manager.login,{
            email:email,
            password:password,
        });

        if (response.data.access_token) {
            localStorage.setItem("manager_token", response.data.access_token);
            return { success: true, message:"Login successful",
                token: response.data.access_token };
          }
        
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        return {
            success: false,
            message: error.response?.data?.message || "Login failed",
          };
    }
}

