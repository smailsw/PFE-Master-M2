import React, { Component } from 'react'
import { BrowserRouter as Router  } from 'react-router-dom'
import NavBar from '../pages/Navbar'
import history from '../history';




export default class Home extends Component {
    

   
    render() {
        
         
        return (
           
            <div className="col-md-12">
              
                <Router history={history}>
                    <NavBar signout={this.props.signout}/>
                   
                    
                    {/* <Route path="/addUser" exact component={addUser} />   */}


                </Router>
             </div>
             
        )
    }
}
                        