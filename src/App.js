import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from "./components/users/Users";
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    const client_id = process.env.REACT_APP_GH_CLIENT_ID;
    const client_secret = process.env.REACT_APP_GH_CLIENT_SECRET;
    const url = `https://api.github.com/users?client_id=${client_id}&client_secret=${client_secret}`

    this.setState({ loading: true })
    const res = await axios.get(url);
    
    this.setState({users: res.data, loading: false });
  }
  
  
  render() {
      return (
      <div className="App">
        <Navbar />
        <div className = "container">

          <Users loading = { this.state.loading } users = { this.state.users } />
        </div>
        
      </div>
    );
  }
  
}

export default App;
