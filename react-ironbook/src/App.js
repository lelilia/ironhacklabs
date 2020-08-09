import React from 'react'
import users from "./users"
import './App.css'
import linkedinLogo from './linkedin.png'

const Link = ({ link }) => {
  if (!link) {
    return null
  }
  return (
    <a href = {link} target = "_blank">
      <img src={linkedinLogo} alt = "linkedin" width = "15"/>
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
          <tr key = {user.firstName + user.lastName}>
            <td>
              {user.firstName}
            </td>
            <td>{user.lastName}</td>
            <td>{user.campus}</td>
            <td>{user.role}</td>
            <td><Link link = {user.linkedin}/></td>
          </tr>
        )}
      </tbody>

    </table>
  )
}

const App = () => {
  console.log(users)
  return (
    <div>

      <h1>IronBook</h1>
      <Table users={users} />
    </div>

  )
}

export default App