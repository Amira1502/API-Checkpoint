
import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import './User.css'
import icone from '../../Assets/icone.jpg'
import axios from 'axios'
                                   

const User = ({ match, history }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${match.params.id}`
        axios.get(url)
            .then(response => setUser(response.data))
    }, [match.params.id]);


    return (
        <div>
            <h1>User</h1>
            <Card style={{ width: '18rem' }}className="card">
           <Card.Body>
            <img src={icone} alt="avatar" />
           <h2>{user.name}</h2>
            <h5>{user.username}</h5>
            <h5>{user.email}</h5>
            <h5>{user.phone}</h5>
            </Card.Body>
           </Card>
            <Button variant="info" className="go-back-btn"
                onClick={() => history.goBack()}
            >Go Back</Button>
        </div>
    )
}

export default User