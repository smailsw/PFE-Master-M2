import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../pages/Navbar";
import history from "../history";
import HeaderCustom from "../pages/HeaderCustom";
import Axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",
      nom: "",
      prenom: "",
      email: "",
      password: "",
      role: "",
    };
  }
  componentDidMount() {
    console.log("---------------------> id", localStorage.getItem("user"));

    Axios.get("http://localhost:5000/users/" + localStorage.getItem("user"))
      .then((res) => {
        console.log("res.data----------------> ", res.data);
        this.setState({
          id: res.data.id,
          nom: res.data.first_name,
          prenom: res.data.last_name,
          email: res.data.email,
          role: res.data.role,
        });
        console.log("role------------------>", this.state.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        
        <Router history={history}>
          
          <NavBar signout={this.props.signout} />
          {/* <Route path="/addUser" exact component={addUser} />   */}
        </Router>
      </div>
    );
  }
}
