import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Update() {
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState({
        email: "",
        first_name: "",
        last_name: ""
    });

    const userId = useParams();

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${userId.userid}`)
            .then((response) => {
                setUser(response.data.data);
            })
    }, [userId])


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
        axios.put(`https://reqres.in/api/users/${userId.userid}`, user)
            .then(function (response) {
                console.log(response);
                setIsSubmitted(true);
                if (response.status === 200) {
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
                    {error ? 'Oops! Something went wrong' : 'Saved Successfully'}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <table className="table mt-5">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">id</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td><img className='avatar' src={user.avatar} alt="img" /></td>
                            <td>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="first_name"
                                    value={user.first_name}
                                    onChange={handleForm}
                                />
                            </td>
                            <td>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="last_name"
                                    value={user.last_name}
                                    onChange={handleForm}
                                />
                            </td>
                            <td>
                                <input
                                    className='form-control'
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    onChange={handleForm}
                                />
                            </td>
                            <td><button className='btn btn-primary'>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>
    )

}