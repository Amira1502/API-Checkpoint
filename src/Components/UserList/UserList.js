import axios from 'axios'
import React , { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'

//import component
import UserCard from '../UserCard/UserCard'
import Loading from '../Loading/Loading'
//CSS
import './UserList.css'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
      setIsLoading(true)
      const url = 'https://jsonplaceholder.typicode.com/users'
      axios.get(url)
        .then(response => { setUsers(response.data); setIsLoading(false) })
        .catch(error => console.error(error))
    }, []);
  
  
    return (
  
      <div>
        <h1>List User</h1>
        {isLoading ? <Loading />
          :
          <div className="list">
            {users.map(user =>
              <Link to={`/users/user/${user.id}`} key={user.id} style={{ margin: "2%" }}>
                <UserCard user={user} />
              </Link>
            )}
          </div>
        }
      </div>
    )
  }
  
  export default UserList