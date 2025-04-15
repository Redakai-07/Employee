const AsstHR={
    login:'http://localhost:4000/asst-hr/login',
    createManager:'http://localhost:4000/asst-hr',
    getManager:'http://localhost:4000/asst-hr',
    delManager:'http://localhost:4000/asst-hr',
    empVerify:'http://localhost:4000/asst-hr/verify/employee',
    getEmp:'http://localhost:4000/asst-hr/get/employees'
};

const HR={
    login:'http://localhost:4000/hr/login',
    update:'http://localhost:4000/hr/1',
    createAsst:'http://localhost:4000/hr/asstHr',
    getAsst:'http://localhost:4000/hr/find',
    delAsst:'http://localhost:4000/hr',
    empSubmit:'http://localhost:4000/hr/submit/employee',
    getEmp:'http://localhost:4000/hr/get/employees'
};

const CEO={
    login:'http://localhost:4000/ceo/login',
    update:'http://localhost:4000/ceo/1',
    createHr:'http://localhost:4000/ceo/hr',
    getHrs:'http://localhost:4000/ceo/hrs',
    delHr:'http://localhost:4000/ceo/hr',

};

const Manager={
    login:'http://localhost:4000/manager/login',
    getEmps:'http://localhost:4000/manager/emp',
    editEmp:'http://localhost:4000/manager/emp',
    delEmp:'http://localhost:4000/manager/emp'
}


const EmpRegister={
    create:'http://localhost:4000/employees',
    getEmp:'http://localhost:4000/employees',
}



const urls ={
    base:'http://localhost:4000/',
    ceo:CEO,
    hr:HR,
    asstHr:AsstHR,
    manager:Manager,
    empReg:EmpRegister,

};


export default urls;