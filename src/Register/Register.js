import React ,{useState}from "react";
import '../Register/Register.css';
import axios from "axios";
import { Link } from 'react-router-dom';

function Register(){
    const InsertForm = () => {
        const [formData, setFormData] = useState({
            firstname: "",
            lastname: "",
            email:"",
            phone:0,
            gender:"",
            password:"",
            cpassword:"",
        });
        const [message, setMessage] = useState('');

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await axios.post("http://localhost:4000/reg-insert", formData);
                console.log("Insert Response:", response.data);
                if (response.data.success) {
                    setMessage('Registration successful');
                } else {
                    setMessage('Registration failed');
                }
            } catch (error) {
                console.error("Insert Error:", error);
                setMessage('Internal server error');
            }
        };

    return(
        <>
        
<div className="wrapper" style={{backgroundImage: "url('https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg?w=360')"}}>

<div class="inner">
<div class="image-holder">
<img src="https://img.freepik.com/free-vector/back-female-tourist-long-hair-dragging-suitcase-airplan-cloud-sky-cartoon-character-flat-illustration_1150-39585.jpg" alt=""/>
</div>
<form action="" onSubmit={handleSubmit} >
<h3>Registration Form</h3>
<div class="form-group">
<input type="text" placeholder="First Name" name="firstname" value={formData.firstname} onChange={handleChange} class="form-control"/>
<input type="text" placeholder="Last Name" name="lastname" value={formData.lastname} onChange={handleChange}class="form-control"/>
</div>
<div class="form-wrapper">
<input type="text" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} class="form-control"/>
 
</div>
<div class="form-wrapper">
<input type="text" placeholder="Phone number" name="phone" value={formData.phone} onChange={handleChange} class="form-control"/>
 
</div>
<div class="form-wrapper">
<select id="" name="gender" value={formData.gender} onChange={handleChange} class="form-control">
<option value="" disabled selected>Gender</option>
<option value="male">Male</option>
<option value="femal">Female</option>
<option value="other">Other</option>
</select>
</div>
<div class="form-wrapper">
<input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" class="form-control"/>
 
</div>
<div class="form-wrapper">
<input type="password" name="cpassword" value={formData.cpassword} onChange={handleChange} placeholder="Confirm Password" class="form-control"/>
 
</div>
<button>Register</button>
{message && <p className={message.includes('successful') ? 'success' : 'error'}>{message}</p>}
<p>Already have an account? <a href="/login">Login</a></p>

</form>
</div>
</div>
        </>
    );
}
return <InsertForm/>
}
export default Register;