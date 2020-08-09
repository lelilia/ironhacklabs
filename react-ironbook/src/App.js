import React, { useState } from 'react'
import users from "./users"
import './App.css'
import linkedinLogo from './linkedin.png'

const Link = ({ link }) => {
  if (!link) {
    return null
  }
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={linkedinLogo} alt="linkedin" width="15" />
    </a>
  )
}

const Table = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th> Last Name </th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>

      </thead>
      <tbody>
        {users.map(user =>
          <tr key={user.firstName + user.lastName}>
            <td>
              {user.firstName}
            </td>
            <td>{user.lastName}</td>
            <td>{user.campus}</td>
            <td>{user.role}</td>
            <td><Link link={user.linkedin} /></td>
          </tr>
        )}
      </tbody>

    </table>
  )
}

const App = () => {
  const [nameFilter, setNameFilter] = useState('')

  const handleFilterChange = (event) => setNameFilter(event.target.value)

  const usersToShow = nameFilter
    ? users.filter(user => 
        user.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
        user.lastName.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : users

  return (
    <div>

      <h1>IronBook</h1>
      <div>
        <input className = "namefilter" value={nameFilter} onChange={handleFilterChange} />
      </div>
      <Table users={usersToShow} />
    </div>

  )
}

export default App