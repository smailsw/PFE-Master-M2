import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import addUser from "../component/addUser";
import User from "../component/User";
import EditUser from "../component/EditUser";
import Prof from "../component/Prof";
import addProf from "../component/addProf";
import EditProf from "../component/EditProf";
import Etudiant from "../component/Etudiant";
import addEtudiant from "../component/addEtudiant";
import EditEtudiant from "../component/EditEtudiant";
import Admin from "../component/Admin";
import addAdmin from "../component/addAdmin";
import EditAdmin from "../component/EditAdmin";
import Filiere from "../component/Filiere";
import addFiliere from "../component/addFiliere";
import EditFiliere from "../component/EditFiliere";
import Module from "../component/Module";
import addModule from "../component/addModule";
import EditModule from "../component/EditModule";
import Seance from "../component/Seance";
import addSeance from "../component/addSeance";
import EditSeance from "../component/EditSeance";
import Absence from "../component/Absence";
import addAbsence from "../component/addAbsence";

//import '../css/style1.css'
import Axios from "axios";
import history from "../history";
import EditCUser from "../component/EditCUser";
import EtudiantCompte from "../component/EtudiantCompte";
import Annances from "../component/Annances";
import AddAnnance from "../component/AddAnnance";
import addListeAdmin from "../component/addListeAdmin";
import addListeUser from "../component/addListeUser";
import addListeProf from "../component/addListeProf";
import addListeEtudiant from "../component/addListeEtudiant";
import AcueilAdmin from "../component/AcueilAdmin";
import GrafsProf from "../component/GrafsProf";
import GrafsAdmin from "../component/GrafsAdmin";
import NotFound from "../component/NotFound";

import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderCustom from "./HeaderCustom";
import SidebarCustom from "./SidebarCustom";
import LayoutCustom from "./LayoutCustom";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
//import './NavBar.css'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  onClick(id) {
    console.log("go----------------->");
    history.push("/EditCUser/" + id);
    window.location.reload(false);
  }

  render() {
    return (
      <>
{/* <SidebarCustom role={this.state.role}/> */}

      {/* <HeaderCustom signout={this.props.signout} userID={this.state.id} /> */}

        

<LayoutCustom role={this.state.role} signout={this.props.signout} userID={this.state.id}>
<Switch>
              {/* <Route path="*" exact component={NotFound} />  */}
              <Route path="/admins" exact component={Admin} />
              <Route path="/addAdmin" exact component={addAdmin} />
              <Route path="/EditAdmin/:id" exact component={EditAdmin} />

              <Route path="/users" exact component={User} />
              <Route path="/addUser" exact component={addUser} />
              <Route path="/EditUser/:id" exact component={EditUser} />

              <Route path="/professeurs" exact component={Prof} />
              <Route path="/addProf" exact component={addProf} />
              <Route path="/EditProf/:id" exact component={EditProf} />

              <Route path="/etudiants" exact component={Etudiant} />
              <Route path="/addEtudiant" exact component={addEtudiant} />
              <Route path="/EditEtudiant/:id" exact component={EditEtudiant} />

              <Route path="/filieres" exact component={Filiere} />
              <Route path="/addFiliere" exact component={addFiliere} />
              <Route path="/EditFiliere/:id" exact component={EditFiliere} />

              <Route path="/modules" exact component={Module} />
              <Route path="/addModule" exact component={addModule} />
              <Route path="/EditModule/:id" exact component={EditModule} />

              <Route path="/seances" exact component={Seance} />
              <Route path="/addSeance" exact component={addSeance} />
              <Route path="/EditSeance/:id" exact component={EditSeance} />

              <Route path="/absences" exact component={Absence} />
              <Route path="/addAbsence/:id" exact component={addAbsence} />
              {/* <Route path="/EditAbsence/:id" exact component={EditAbsence} /> */}

              <Route path="/etudianrCompte" exact component={EtudiantCompte} />

              <Route path="/EditCUser/:id" exact component={EditCUser} />

              <Route path="/annances" exact component={Annances} />
              <Route path="/AddAnnance" exact component={AddAnnance} />

              <Route path="/addListeAdmin" exact component={addListeAdmin} />
              <Route path="/addListeUser" exact component={addListeUser} />
              <Route path="/addListeProf" exact component={addListeProf} />
              <Route
                path="/addListeEtudiant"
                exact
                component={addListeEtudiant}
              />

              <Route path="/acueilAdmin" exact component={AcueilAdmin} />
              <Route path="/grafs" exact component={GrafsProf} />
              <Route path="/grafsAdmin" exact component={GrafsAdmin} />
            </Switch>
</LayoutCustom>
        {/* <main className="w-5/6">
            <div className="px-4 sm:px-6 lg:px-8 my-3">

            </div>
          </main> */}

      </>
      
    );
  }
}
