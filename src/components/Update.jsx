import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Update() {
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
        axios.post(`https://reqres.in/api/users/${userId.userid}`, user)
            .then((response) => {
                console.log(response)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td><img src={user.avatar} alt="img" /></td>
                            <td><input
                                type="text"
                                name="first_name"
                                value={user.first_name}
                                onChange={handleForm}
                            /></td>
                            <td><input
                                type="text"
                                name="last_name"
                                value={user.last_name}
                                onChange={handleForm}
                            /></td>
                            <td><input
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={handleForm}
                            /></td>
                            <td><button>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </>
    )

}