import React from 'react'
import {useState} from 'react'
import Register1 from './Register1'
import Register2 from './Register2'

function Register() {


    //Declaration page,form data
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      name: "",
      mobile: "",
      email: "",
      password: "",
      restaurantName: "",
      restaurantAddress: "",
      tableCount: ""
    });   
    

    //Component List
    const componentList = [
      <Register1
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
      />,
      <Register2
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
      />,
    ];


    //returns Component List
  return <div>
    {componentList[page]}
  </div>;
}

export default Register
