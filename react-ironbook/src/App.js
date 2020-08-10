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
  const [ studentCheck, setStudentCheck ] = useState(true)
  const [ teacherCheck, setTeacherCheck ] = useState(true)
  const [ campus, setCampus ] = useState('all')

  const handleFilterChange = (event) => setNameFilter(event.target.value)
  const handleCampusChange = (event) => setCampus(event.target.value)

  let usersToShow = users
  if (campus !== "all") {
    usersToShow = usersToShow.filter(user => user.campus === campus)
  }
  if (!studentCheck) {
    usersToShow = usersToShow.filter(user => user.role !== "student")
  }
  if (!teacherCheck) {
    usersToShow = usersToShow.filter(user => user.role !== "teacher")
  }
  if (usersToShow && nameFilter) {
    usersToShow = usersToShow.filter(user => 
      user.firstName.toLowerCase().includes(nameFilter.toLowerCase()) ||
      user.lastName.toLowerCase().includes(nameFilter.toLowerCase())
    )
  }

  
  
  return (
    <div>

      <h1>IronBook</h1>
      <div>
        <input className = "namefilter"  placeholder ="search by name"value={nameFilter} onChange={handleFilterChange} />
      </div>
      <div>
        <input 
          type = "checkbox" 
          id = "student"
          checked = {studentCheck}
          onChange = {() => setStudentCheck(!studentCheck)}
        />
        <label htmlFor ="student">Student</label>
        <input 
          type = "checkbox" 
          id = "teacher" 
          checked = {teacherCheck}
          onChange = {() => setTeacherCheck(!teacherCheck)}
        />
        <label htmlFor ="teacher">Teacher</label>
        <select value = {campus} onChange = {handleCampusChange}>
          <option value = "all">all</option>
          <option value = "Berlin">Berlin</option>
          <option value = "Lisbon">Lisbon</option>
          <option value = "Paris">Paris</option>
        </select>
      </div>
      <Table users={usersToShow} />
    </div>

  )
}

export default App