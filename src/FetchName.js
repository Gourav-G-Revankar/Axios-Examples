import axios from "axios";
import React, { Component } from "react";

class FetchName extends Component {

  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res)
        this.setState({ persons: res.data })
      })
  }
  render() {
    return (
      <>
      
      <h1><u>User Info list</u></h1>

        <div className="card" >
          {this.state.persons.map(person => (
            <div key={person.id}>
              <h4>User Infomation {person.id}</h4>
              <p><b>Name:</b> {person.name}</p>
              <p><b>Phone:</b> {person.phone}</p>
              <p><b>Email:</b> {person.email}</p>
              <p><b>City:</b> {person.address.city}</p>
              <p><b>Zipcode:</b> {person.address.zipcode}</p>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default FetchName