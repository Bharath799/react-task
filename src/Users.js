import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            name:"",
            username:"",
            email:""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const formData = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
            
        };

        const users = [...this.state.users,formData]
        this.setState({users})
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const userdata=response.data
            this.setState({
                   users:userdata
            })
            
            
        })

    }

    render(){
        return(
            <div>
                <h1>Users List-{this.state.users.length}</h1>

                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>USERNAME</th>
                      <th>E-MAIL</th>
                    </tr>
                  </thead>

                  <tbody>
                  {
                        this.state.users.map((user,i)=>{
                            return(
                              <tr key={user.id}>
                                <td>{i+1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                </tr>
                            )
                        
                        })
                    }
                  </tbody>
                </table>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                        id="name"/>{""}<br/>
                    </div>

                    <div>
                        <label htmlFor="username">username</label>
                        <input type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="username"
                        id="username"/>{""}<br/>
                     </div>

                    <div>
                        <label htmlFor="email">email</label>
                        <input type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        id="email"/>{""}<br/>
                     </div>

                     <input type="submit" value="Submit" />
                     </form>
                </div>
            </div>
        )
    }
}
export default Users
