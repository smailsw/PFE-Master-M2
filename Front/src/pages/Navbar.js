import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Link, Route,Switch} from 'react-router-dom'
import addUser from '../component/addUser';
import User from '../component/User';
import EditUser from '../component/EditUser';
import Prof from '../component/Prof';
import addProf from '../component/addProf';
import EditProf from '../component/EditProf';
import Etudiant from '../component/Etudiant';
import addEtudiant from '../component/addEtudiant';
import EditEtudiant from '../component/EditEtudiant';
import Admin from '../component/Admin';
import addAdmin from '../component/addAdmin';
import EditAdmin from '../component/EditAdmin';
import Filiere from '../component/Filiere';
import addFiliere from '../component/addFiliere';
import EditFiliere from '../component/EditFiliere';
import Module from '../component/Module';
import addModule from '../component/addModule';
import EditModule from '../component/EditModule';
import Seance from '../component/Seance';
import  addSeance  from '../component/addSeance';
import EditSeance from '../component/EditSeance';
import Absence from '../component/Absence';
import addAbsence from '../component/addAbsence';



import '../css/style1.css'
import Axios from 'axios';
import history from '../history';
import EditCUser from '../component/EditCUser';
import EtudiantCompte from '../component/EtudiantCompte';
import Annances from '../component/Annances';
import AddAnnance from '../component/AddAnnance';
import addListeAdmin from '../component/addListeAdmin';
import addListeUser from '../component/addListeUser';
import addListeProf from '../component/addListeProf';
import addListeEtudiant from '../component/addListeEtudiant';
import AcueilAdmin from '../component/AcueilAdmin';
import GrafsProf from '../component/GrafsProf';
import GrafsAdmin from '../component/GrafsAdmin';
import NotFound from '../component/NotFound';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
//import './NavBar.css'

export default class NavBar extends Component {


  constructor(props) {
    super(props);
   this.state={
      
      nom:'',
      prenom:'',
      email:'',
      password:'',
      role:'',
   }


    }
    componentDidMount(){
     
      console.log('---------------------> id',localStorage.getItem('user'))
          
      Axios.get('http://localhost:5000/users/' + localStorage.getItem('user'))
      .then(res => {
          console.log("res.data----------------> ",res.data)
          this.setState({
              id: res.data.id,
              nom: res.data.first_name,
              prenom: res.data.last_name,
              email: res.data.email,
              role: res.data.role
             
          })
          console.log("role------------------>",this.state.id)
      })
      .catch((error) => {
          console.log(error);
      })
      }
      onClick(id){
        console.log('go----------------->')
        history.push('/EditCUser/'+id)
        window.location.reload(false);
      
    }
 
 
    render() {


       
        return (
          
               <div>
                   <Layout>
                    <Header className="header">
                      <div  />
                      <Menu theme="dark" mode="horizontal" >
                      <Menu.Item key="1" className={this.state.role === "Prof" || this.state.role === "Etudiant"  ? 'hidden' : ''} > <Link to="/acueilAdmin" > </Link>Acueil</Menu.Item>
                        <Menu.Item key="2" className={this.state.role === "Prof" || this.state.role === "Etudiant"  ? 'hidden' : ''} > <Link to="/admins" > </Link>Espace Administration</Menu.Item>
                        <Menu.Item key="3" className={this.state.role === "Prof" || this.state.role === "Etudiant"  ? 'hidden' : ''} > <Link to="/grafsAdmin" > </Link>Espace des statistiques</Menu.Item>
                        <Menu.Item key="4" className={this.state.role === "Prof" || this.state.role === "Etudiant"  ? 'hidden' : ''}> <Link to="/etudiants" ></Link>Espace Etudiants</Menu.Item>
                         <Menu.Item key="5"  className={this.state.role === "Prof" || this.state.role === "Etudiant"   ? 'hidden' : ''}><Link to="/professeurs" ></Link>Espace Professeurs</Menu.Item>
                         <Menu.Item key="6" className="dd">
                           <i  onClick={this.props.signout}>
                             <samp >{this.state.nom}  <i className="fas fa-sign-out-alt"> </i></samp>
                             </i> 
                         </Menu.Item>
                         <Menu.Item key="7" className="dd">
                            <i onClick={()=>this.onClick(this.state.id)}>
                             <samp >Modifier Compte <i className="fas fa-edit" ></i></samp>
                           </i>
                        </Menu.Item>
                       {/* <Menu.Item key="4"><button 
                            value="Déconnecter"
                            style={{float: "right"}}
                            className="btn btn-primary btn-sm"
                            onClick={this.props.signout}>lgout</button></Menu.Item>  */}
                      </Menu>
                    </Header>
                  <Layout  >
                        <Sider width={200} className="site-layout-background">
                          <Menu
                            mode="inline"
                            theme="light"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0,backgroundColor: "rgba(13, 48, 73, 0.79)" }}
                          >
                            <SubMenu
                            className={this.state.role === "Prof" || this.state.role === "Etudiant"  ? 'hidden' : ''}
                            // style={{ backgroundColor: "#1976d2 " }}
                              key="sub1"
                              title={
                                <span style={{color: "rgb(255, 255, 255)"}}>
                                 
                                Admin
                                </span>
                              }
                            >
                              <Menu.Item  key="8" > <Link to="/admins" > </Link>Admins</Menu.Item>
                              <Menu.Item  key="9"  ><Link to="/users"></Link> Utilisateurs</Menu.Item>
  
{/*                            
                               <Menu.Item key="3"><button 
                            value="Déconnecter"
                            className="btn btn-primary btn-sm"
                            onClick={this.props.signout}>lgout</button></Menu.Item>  */}
                              {/* <Menu.Item key="10"></Menu.Item> */}
                            </SubMenu>
                            <SubMenu
                            className={ this.state.role === "Etudiant" ? 'hidden' : ''}
                              key="sub2"
                              title={
                                <span style={{color: "rgb(255, 255, 255)"}}>
                                
                                  Professeurs
                                  
                                </span>
                              }
                            >
                               
                              <Menu.Item key="10"  className={this.state.role === "Prof" || this.state.role === "Etudiant" ? 'hidden' : ''}> <Link to="/professeurs"> </Link>Professeurs</Menu.Item>
                              <Menu.Item key="11" className={this.state.role === "Admin" || this.state.role === "Etudiant" ? 'hidden' : ''}> <Link to="/Seances"> </Link>Seances</Menu.Item>
                              <Menu.Item key="12" className={this.state.role === "Admin" || this.state.role === "Etudiant" ? 'hidden' : ''}> <Link to="/Absences"> </Link>Absences</Menu.Item>
                              <Menu.Item key="13" className={this.state.role === "Admin" || this.state.role === "Etudiant" ? 'hidden' : ''}> <Link to="/annances"> </Link>Annonces</Menu.Item>
                              <Menu.Item key="14" className={this.state.role === "Admin" || this.state.role === "Etudiant" ? 'hidden' : ''}> <Link to="/grafs"> </Link>Statistiques</Menu.Item>

                    
                            </SubMenu>
                            <SubMenu
                              className={this.state.role === "Prof"  ? 'hidden' : ''}
                              key="sub3"
                              title={
                                <span style={{color: "rgb(255, 255, 255)"}}>
                                  
                                  Etudiants
                                </span>
                              }
                            >
                              <Menu.Item key="15" className={this.state.role === "Prof"|| this.state.role === "Etudiant"  ? 'hidden' : ''}><Link to="/etudiants"></Link> Etudiants</Menu.Item>
                              <Menu.Item key="16" className={this.state.role === "Prof"|| this.state.role === "Admin"  ? 'hidden' : ''}> <Link to="/etudianrCompte"> </Link>Compte de l'Etudiant</Menu.Item>

                            </SubMenu>
                            <SubMenu
                             className={this.state.role === "Prof"|| this.state.role === "Etudiant"  ? 'hidden' : ''}
                             key="sub4"
                             title={
                               <span style={{color: "rgb(255, 255, 255)"}}>
                                 
                                 Filières
                               </span>
                             }
                           >
                             <Menu.Item key="17" className={this.state.role === "Prof"|| this.state.role === "Etudiant"  ? 'hidden' : ''}><Link to="/filieres"></Link> Filières</Menu.Item>
                            </SubMenu>
                           <SubMenu
                             className={this.state.role === "Prof"|| this.state.role === "Etudiant"  ? 'hidden' : ''}
                             key="sub5"
                             title={
                               <span style={{color: "rgb(255, 255, 255)"}}>
                                 
                                 Modules
                               </span>
                             }
                           >
                            
                             <Menu.Item key="18" className={this.state.role === "Prof"|| this.state.role === "Etudiant"  ? 'hidden' : ''}> <Link to="/modules"> </Link>Modules</Menu.Item>
                             

                           </SubMenu>
                          </Menu>
                        </Sider>
                        <Layout  style={{ padding: '0 24px 24px' }}>
                           <Content
                            
                            style={{
                              padding: 24,
                              margin: 0,
                              minHeight: 280,
                            }}
                          >
                          
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
                          <Route path="/addListeEtudiant" exact component={addListeEtudiant} /> 

                          <Route path="/acueilAdmin" exact component={AcueilAdmin} />  
                          <Route path="/grafs" exact component={GrafsProf}/>
                          <Route path="/grafsAdmin" exact component={GrafsAdmin}/>
                       
                          </Switch>

                          </Content>
                        </Layout>
                      </Layout>
                    </Layout>
                    </div>
                
     
        )
    }
}