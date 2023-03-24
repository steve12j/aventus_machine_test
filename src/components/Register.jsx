import axios from 'axios';
import React, { useState } from 'react';


function Register() {
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });

    function handleForm(event) {
        const { value, name } = event.target;
        setUser((prevUser) => (
            {
                ...prevUser,
                [name]: value
            }
        ))
    }



    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://reqres.in/api/users', user)
            .then(function (response) {
                console.log(response);
                setIsSubmitted(true);
                if (response.status === 201) {
                    setError(false);
                } else {
                    setError(true);
                }
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            })
            .catch(function (error) {
                console.log(error);
                setIsSubmitted(true);
                setError(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            });
    }

    return (
        <div className='container mt-5'>
            {isSubmitted &&
                <div className={`alert ${error ? "alert-danger" : "alert-success"}`} role="alert">
                    {error ? 'Oops! Something went wrong' : 'Registered Successfully'}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={handleForm}
                        name="email"
                        value={user.email}
                        required
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        onChange={handleForm}
                        name="first_name"
                        value={user.first_name}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        onChange={handleForm}
                        name="last_name"
                        value={user.last_name}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    );
}

export default Register;