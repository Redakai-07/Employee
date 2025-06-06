import axios from "axios";
import urls from "./URL";


// Register New Employee
export const createEmp = async(fName,lName,email,altEmail,mobile,altMobile,navigate) =>{
    try {
        console.log("Base URL:", process.env.REACT_APP_BASE_URL);
        const payload = Object.fromEntries(
            Object.entries({ fName, lName, email, altEmail, mobile, altMobile })
                .filter(([_, value]) => value !== undefined)
        );
        if (!urls.empReg || !urls.empReg.create) {
            throw new Error("Employee registration URL is not defined.");
        }
        const response = await axios.post(urls.empReg.create, payload);
        if (response.status === 201) {
          alert("New Employee Created !!!");
            navigate("/");
        }
      } catch (error) {
          alert("Error Creating Employee !!!");
          console.log(error);
      }
};



// Get Employee By Id 
export const employee = async(id) =>{
    try {
        const response = await axios.get(`${urls.empReg.getEmp}/${id}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        alert("Employees couldn't be fetched at the moment..")
        console.log(error);
    }
}



export const getEmployee = async (navigate) =>{
    try {
        const response = await axios.get(urls.empReg.getEmp);
        if (response.data) {
            return response.data;
        }
        else{
            console.log(response);
        }
    } catch (error) {
        console.log(error.response);
    }
}