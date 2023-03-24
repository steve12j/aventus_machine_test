import { React, useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1&per_page=10')
            .then((response) => {
                setUsers(response.data.data);
            })
    }, [])
    const rows = users.filter((user)=>(user.email.toLowerCase().includes(query))).map((user) => {
        return (
            <tr key={user.id} >
                <th scope="row">{user.id}</th>
                <td><img src={user.avatar} alt="img" /></td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td><Link to={`/update/${user.id}`}><button>Update</button></Link></td>
            </tr>

        );
    });

    return (
        <div className="container">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" onChange={(e)=>(setQuery(e.target.value))} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
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
                    {rows}
                </tbody>
            </table>
        </div>
    )
}