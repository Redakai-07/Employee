const AsstHR={
    login:`${process.env.REACT_APP_BASE_URL}/asst-hr/login`,
    createManager:`${process.env.REACT_APP_BASE_URL}/asst-hr`,
    getManager:`${process.env.REACT_APP_BASE_URL}/asst-hr`,
    delManager:`${process.env.REACT_APP_BASE_URL}/asst-hr`,
    empVerify:`${process.env.REACT_APP_BASE_URL}/verify/employee`,
    getEmp:`${process.env.REACT_APP_BASE_URL}/asst-hr/get/employees`
};

const HR={
    login:`${process.env.REACT_APP_BASE_URL}/login`,
    update:`${process.env.REACT_APP_BASE_URL}/hr/1`,
    createAsst:`${process.env.REACT_APP_BASE_URL}/hr/asstHr`,
    getAsst:`${process.env.REACT_APP_BASE_URL}/hr/find`,
    delAsst:`${process.env.REACT_APP_BASE_URL}/hr`,
    empSubmit:`${process.env.REACT_APP_BASE_URL}/employee`,
    getEmp:`${process.env.REACT_APP_BASE_URL}/hr/get/employees`
};

const CEO={
    login:`${process.env.REACT_APP_BASE_URL}/ceo/login`,
    update:`${process.env.REACT_APP_BASE_URL}/ceo/1`,
    createHr:`${process.env.REACT_APP_BASE_URL}/ceo/hr`,
    getHrs:`${process.env.REACT_APP_BASE_URL}/ceo/hrs`,
    delHr:`${process.env.REACT_APP_BASE_URL}/ceo/hr`,

};

const Manager={
    login:`${process.env.REACT_APP_BASE_URL}/manager/login`,
    getEmps:`${process.env.REACT_APP_BASE_URL}/manager/emp`,
    editEmp:`${process.env.REACT_APP_BASE_URL}/manager/emp`,
    delEmp:`${process.env.REACT_APP_BASE_URL}/manager/emp`
}


const EmpRegister={
    create:`${process.env.REACT_APP_BASE_URL}/employees`,
    getEmp:`${process.env.REACT_APP_BASE_URL}/employees`,
}



const urls ={
    base:'https://employee-ouay.onrender.com/',
    ceo:CEO,
    hr:HR,
    asstHr:AsstHR,
    manager:Manager,
    empReg:EmpRegister,

};


export default urls;